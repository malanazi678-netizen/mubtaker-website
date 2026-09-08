import { useRef, useState } from "react";
import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Download, FileArchive, FileImage, FileText, FolderOpen, LogIn, Trash2, UploadCloud } from "lucide-react";

const MAX_SIZE = 15 * 1024 * 1024;
const ACCEPT = ".jpg,.jpeg,.png,.webp,.pdf,.zip,.docx,.pptx,.xlsx";

function formatSize(size: number) {
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} كيلوبايت`;
  return `${(size / (1024 * 1024)).toFixed(1)} ميجابايت`;
}

function FileIcon({ mimeType }: { mimeType: string }) {
  if (mimeType.startsWith("image/")) return <FileImage className="h-5 w-5 text-[#6b9fd4]" />;
  if (mimeType === "application/zip") return <FileArchive className="h-5 w-5 text-[#d4789f]" />;
  return <FileText className="h-5 w-5 text-[#9b7fd4]" />;
}

export default function FileManager() {
  const { user, loading, isAuthenticated } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const utils = trpc.useUtils();
  const filesQuery = trpc.files.list.useQuery(undefined, { enabled: isAuthenticated });
  const upload = trpc.files.upload.useMutation({
    onSuccess: async () => { toast.success("تم رفع الملف بنجاح"); await utils.files.list.invalidate(); },
    onError: (error) => toast.error(error.message || "تعذر رفع الملف"),
  });
  const remove = trpc.files.remove.useMutation({
    onSuccess: async () => { toast.success("تم حذف الملف"); await utils.files.list.invalidate(); },
    onError: (error) => toast.error(error.message || "تعذر حذف الملف"),
  });

  async function handleFiles(selected: FileList | null) {
    const file = selected?.[0];
    if (!file) return;
    if (file.size > MAX_SIZE) { toast.error("الحد الأقصى لحجم الملف هو 15 ميجابايت"); return; }
    setUploading(true);
    try {
      const data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
        reader.onerror = () => reject(new Error("تعذر قراءة الملف"));
        reader.readAsDataURL(file);
      });
      await upload.mutateAsync({ filename: file.name, mimeType: file.type || "application/octet-stream", size: file.size, data });
    } catch (error) {
      if (error instanceof Error && error.message !== "تعذر قراءة الملف") toast.error("تعذر رفع الملف حالياً");
    } finally { setUploading(false); if (inputRef.current) inputRef.current.value = ""; }
  }

  if (loading) return <div className="min-h-screen grid place-items-center bg-[#f0effa] text-[#233052]">جارٍ تحميل الحساب...</div>;
  if (!isAuthenticated) return (
    <main dir="rtl" className="min-h-screen grid place-items-center bg-[linear-gradient(135deg,#e8e6f5,#c8cbe8)] px-6">
      <Card className="w-full max-w-md border-0 bg-white/85 shadow-xl backdrop-blur"><CardContent className="p-8 text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#e5e3f6]"><FolderOpen className="h-8 w-8 text-[#6b9fd4]" /></div>
        <h1 className="text-2xl font-bold text-[#1f2947]">مساحة ملفات مبتكر</h1><p className="mt-3 text-sm leading-7 text-slate-500">سجّل الدخول للوصول إلى ملفاتك ورفع المواد الخاصة بمشاريعك بأمان.</p>
        <Button onClick={() => startLogin()} className="mt-6 w-full bg-[#6b9fd4] hover:bg-[#568bbf]"><LogIn className="ml-2 h-4 w-4" /> تسجيل الدخول</Button>
        <a href="/" className="mt-4 block text-sm text-[#6b9fd4]">العودة إلى الموقع</a>
      </CardContent></Card>
    </main>
  );

  return <main dir="rtl" className="min-h-screen bg-[linear-gradient(135deg,#f5f4fb,#dfe1f5)] px-4 py-10 text-[#1f2947] sm:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><a href="/" className="text-sm text-[#6b9fd4]">← العودة إلى الموقع</a><h1 className="mt-3 text-3xl font-bold">مساحة ملفات مبتكر</h1><p className="mt-2 text-slate-500">مرحباً {user?.name || "بك"}، أدر ملفات مشاريعك من مكان واحد.</p></div><Button onClick={() => inputRef.current?.click()} disabled={uploading} className="bg-[#6b9fd4] hover:bg-[#568bbf]"><UploadCloud className="ml-2 h-4 w-4" />{uploading ? "جارٍ الرفع..." : "رفع ملف"}</Button></div>
      <input ref={inputRef} type="file" accept={ACCEPT} className="hidden" onChange={(e) => void handleFiles(e.target.files)} />
      <Card className="mb-8 border-0 bg-white/75 shadow-sm"><CardContent className="p-6"><button onClick={() => inputRef.current?.click()} className="w-full rounded-2xl border-2 border-dashed border-[#b6b9df] px-6 py-10 text-center transition hover:bg-[#f3f2fc]"><UploadCloud className="mx-auto h-9 w-9 text-[#6b9fd4]" /><span className="mt-3 block font-semibold">اسحب ملفاتك إلى هنا أو اختر ملفاً من جهازك</span><span className="mt-1 block text-sm text-slate-400">صور، PDF، مستندات Office أو ZIP — بحد أقصى 15 ميجابايت</span></button></CardContent></Card>
      <Card className="border-0 bg-white/80 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2"><FolderOpen className="h-5 w-5 text-[#9b7fd4]" /> ملفاتك <span className="text-sm font-normal text-slate-400">({filesQuery.data?.length || 0})</span></CardTitle></CardHeader><CardContent>
        {filesQuery.isLoading ? <p className="py-10 text-center text-slate-400">جارٍ تحميل الملفات...</p> : filesQuery.data?.length ? <div className="space-y-3">{filesQuery.data.map((file) => <div key={file.id} className="flex items-center justify-between gap-3 rounded-xl bg-[#f6f5fc] p-4"><div className="flex min-w-0 items-center gap-3"><FileIcon mimeType={file.mimeType} /><div className="min-w-0"><a href={file.url} target="_blank" rel="noreferrer" className="block truncate font-semibold hover:text-[#6b9fd4]">{file.filename}</a><span className="text-xs text-slate-400">{formatSize(file.size)} · {new Date(file.createdAt).toLocaleDateString("ar-SA")}</span></div></div><a href={file.url} download={file.filename} aria-label={`تنزيل ${file.filename}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-slate-400 transition hover:bg-[#e8e6f5] hover:text-[#6b9fd4]"><Download className="h-4 w-4" /></a><Button variant="ghost" size="icon" aria-label={`حذف ${file.filename}`} onClick={() => remove.mutate({ id: file.id })} disabled={remove.isPending} className="text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></Button></div>)}</div> : <div className="py-12 text-center text-slate-400"><FolderOpen className="mx-auto mb-3 h-10 w-10 text-[#c2c4e4]" /><p>لا توجد ملفات بعد. ابدأ برفع أول ملف لمشروعك.</p></div>}
      </CardContent></Card>
    </div>
  </main>;
}
