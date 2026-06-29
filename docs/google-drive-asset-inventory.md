# Google Drive Asset Inventory Notes

Checked through the connected Google Drive connector.

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

Final project assets must be selected, approved, compressed, and renamed before being committed. Map approved assets into:

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
