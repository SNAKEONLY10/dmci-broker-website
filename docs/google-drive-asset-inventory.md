# Google Drive Asset Inventory Notes

Checked through the confirmed shared Google Drive folder. Project assets should be selected from this folder, compressed, and renamed before being committed.

## Confirmed Marketing Materials Folder

Marketing Materials:
https://drive.google.com/drive/folders/19CWq_YMieSFTOx9dpPIsE-dN75yUxoPr

The confirmed folder contains project/marketing folders and files including examples such as:

- `RFO Projects`
- `KLH`
- `ODT`
- `MCC`
- `ANH`
- `SLC`
- `MLP 2`
- `Rent-to-own`
- Other project/code folders
- Some large video/image files

## Repo Policy

- Do not commit huge raw videos.
- Use thumbnails and hosted/external video links for tours.
- Compress and web-optimize images before committing.
- Rename approved project assets consistently by project slug.
- If an asset is missing, the website should keep using graceful placeholders.
- Do not use random Google images.

## Recommended Mapping

Final project assets must be selected, approved, compressed, and renamed before being committed.

Use this source folder while preparing raw Drive downloads:

```text
public/assets/project-source/[project-slug]/hero.jpg
public/assets/project-source/[project-slug]/thumbnail.jpg
public/assets/project-source/[project-slug]/gallery-1.jpg
public/assets/project-source/[project-slug]/gallery-2.jpg
public/assets/project-source/[project-slug]/gallery-3.jpg
public/assets/project-source/[project-slug]/master-plan.jpg
public/assets/project-source/[project-slug]/site-progress.jpg
```

Then run:

```bash
npm run assets:optimize
```

The optimized output is mapped into:

```text
public/assets/projects/[project-slug]/hero.jpg
public/assets/projects/[project-slug]/hero-640.webp
public/assets/projects/[project-slug]/hero-960.webp
public/assets/projects/[project-slug]/hero-1440.webp
public/assets/projects/[project-slug]/thumbnail.jpg
public/assets/projects/[project-slug]/thumbnail-480.webp
public/assets/projects/[project-slug]/thumbnail-768.webp
public/assets/projects/[project-slug]/thumbnail-960.webp
public/assets/projects/[project-slug]/gallery-1.jpg
public/assets/projects/[project-slug]/gallery-2.jpg
public/assets/projects/[project-slug]/gallery-3.jpg
public/assets/projects/[project-slug]/master-plan.jpg
public/assets/projects/[project-slug]/site-progress.jpg
public/assets/projects/[project-slug]/brochure.pdf
```

Raw files in `public/assets/project-source/` stay ignored by git; commit only optimized website assets.
