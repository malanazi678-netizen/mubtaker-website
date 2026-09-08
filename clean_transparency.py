from pathlib import Path
from rembg import remove

assets = [
    (Path('/home/ubuntu/webdev-static-assets/mubtaker-boombox-clean-no-icons.png'), Path('/home/ubuntu/webdev-static-assets/mubtaker-boombox-clean-no-icons-transparent.png')),
    (Path('/home/ubuntu/webdev-static-assets/mubtaker-results-clean-no-panel.png'), Path('/home/ubuntu/webdev-static-assets/mubtaker-results-clean-no-panel-transparent.png')),
]

for source, target in assets:
    target.write_bytes(remove(source.read_bytes()))
    print(f'cleaned {source.name} -> {target.name}')
