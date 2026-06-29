# Google Drive Asset Inventory Notes

Checked through the connected Google Drive connector.

## Folders Found

- `ML` folder: `https://drive.google.com/drive/folders/1l56v8SLnsslixTjHEMyXqeW2SY34qIXq`
  - Contains `suyo.mp4`, around 28 MB.

## Root Media Observed

The Drive root contains many raw media files such as `.MOV`, `.HEIC`, `.PNG`, and `.JPEG` files. Many videos are large, from roughly 10 MB to more than 200 MB each.

## Repo Policy

- Do not commit huge raw videos.
- Use thumbnails and hosted/external video links for tours.
- Compress and web-optimize images before committing.
- Rename approved project assets consistently by project slug.
- If an asset is missing, the website should keep using graceful placeholders.

## Needed Follow-Up

Ask Luisa which Google Drive folder is the official `Marketing Materials` folder if it is different from `ML` or Drive root media. Once confirmed, map approved assets into:

```text
public/assets/projects/[project-slug]/hero.jpg
public/assets/projects/[project-slug]/thumbnail.jpg
public/assets/projects/[project-slug]/gallery-1.jpg
public/assets/projects/[project-slug]/gallery-2.jpg
public/assets/projects/[project-slug]/gallery-3.jpg
public/assets/projects/[project-slug]/master-plan.jpg
public/assets/projects/[project-slug]/site-progress.jpg
public/assets/projects/[project-slug]/brochure.pdf
```
