# Yuechen He — Minimal Academic Website

A simple English personal website inspired by the layout of [Academic Pages](https://academicpages.github.io/). It uses plain HTML, CSS and JavaScript, and can be uploaded directly to GitHub Pages. No installation, framework, Jekyll or build step is required.

## What changed

- White background, system fonts, restrained blue links, a profile sidebar and simple section headings.
- Navigation: **Publications · Chip Gallery · Education · Work · Life · Contact**.
- Mobile portrait layout: collapsible menu, profile above the content, single-column galleries and coursework records that wrap without a wide table.
- Searchable coursework with course description, instructor, term and grade.
- Chip details and photo enlargement in a keyboard-accessible dialog.
- Photography and cycling under Life; professional experience and design projects under Work.
- Removed decorative chip illustrations, display fonts, animated effects and the theme switch.
- Rechecked the starting content. Unknown information is blank or clearly labeled.

This is an independent HTML/CSS implementation of the requested visual direction, not a fork of the Academic Pages Jekyll template.

## Files

```text
yuechen-academic-minimal/
├── index.html       Page structure and section labels
├── styles.css       Desktop, mobile and print styles
├── content.js       Profile and editable records
├── script.js        Rendering, navigation, search and gallery dialogs
├── assets/
│   └── favicon.svg
├── .nojekyll        Serve the static files directly
├── SOURCES.md       Fact sources, unknowns and migration notes
├── LICENSE
└── README.md
```

The previous ZIP is unchanged. Its extracted contents are preserved separately in `../original-source/`; that backup is not part of the revised ZIP.

## Start here

1. Open `index.html` in a browser to preview the website. The scripts also work when opened directly as a local file.
2. Edit `content.js` to update profile information and add records.
3. Add original images or a CV to `assets/`, then enter their relative paths, such as `./assets/portrait.jpg`.
4. Upload the contents of this folder to GitHub Pages when ready.

中文快速说明：双击 `index.html` 预览；日常资料主要修改 `content.js`；照片放入 `assets` 文件夹。课程成绩、工作经历等未知内容已留空，请按真实资料补充。上传到 GitHub 时，确保 `index.html` 位于发布目录根部。

## Content and verification

The public LinkedIn search preview was available, but the full profile could not be retrieved. Only attributable details from that preview, the user's own description, and the linked Columbia project/course pages were used. See [SOURCES.md](./SOURCES.md) for the exact scope.

- The site includes NYU affiliation, UESTC undergraduate studies, LVSensor, a custom processor project and the documented EE6350 project participation.
- It does not assume employment titles, previous degree names/dates, an adviser, contact email, paper citations or grades.
- Publications and professional experience have editable empty states. Missing images are explicit text placeholders, not fabricated die photos or personal photographs.
- Coursework is a **partial record**, not a complete transcript. The earlier unverified NYU course entries are preserved in the original backup only.

## Edit your profile

At the top of `content.js`, edit `profile`. Use `\n` inside `role` for a line break. The visible name, biography, location and links update from this object. For changes to the site's search/social metadata, also update the `<title>` and `<meta>` fields in `index.html`.

Blank `email`, `github`, `scholar` and `cv` fields create no link. To add a portrait, set `portrait` to the actual file path and give it descriptive `portraitAlt` text. Initials are shown until then.

## Add a course

Add one object per course to `courses`. All examples below are **format templates**, not real records. Replace the bracketed text; leave unknown fields empty.

```js
{
  code: "[Course code]",
  title: "[Course title]",
  institution: "[University]",
  category: "[Subject]",
  term: "[Term and year]",
  description: "[Short description of the course content]",
  instructor: "",
  grade: "",
  status: "[Completed / In progress / Audit]",
  url: ""
}
```

Subjects populate the filter automatically. Search covers the course name, code, description, institution, instructor, subject, term and status. Blank grades and instructors display “Not provided.” You can remove the expandable “Additional coursework” block from `index.html` once the record is complete, and update `courseNote` to describe the coverage accurately.

## Add publications, education and work

```js
// publications
{ title: "[Paper title]", authors: "[Authors in order]", venue: "[Venue]", year: "", url: "", note: "" }

// education
{ institution: "[Institution]", degree: "[Degree]", years: "", details: "", url: "" }

// experience — jobs, internships and research appointments
{ title: "[Role]", organization: "[Organization]", dates: "", description: "", url: "" }

// projects — design work, separate from employment
{ title: "[Project title]", dates: "", description: "", url: "", linkLabel: "Project documentation" }
```

Empty publication and experience arrays display their existing placeholders. The Education section does not automatically show source URLs; they remain available in the content file and source notes. Work, chip, course and publication links are displayed when valid URLs are supplied.

## Add chip and life images

Update an existing chip entry or add another:

```js
{
  title: "[Chip name]",
  category: "[Type of circuit]",
  status: "[Actual design / fabrication / testing status]",
  image: "./assets/my-chip.jpg",
  alt: "[Description of the actual die or layout]",
  imagePlaceholder: "Die photograph to be added",
  description: "[Short caption]",
  detail: "[Process, project role, collaborators and verified results]",
  url: "",
  sourceLabel: "Project website"
}
```

Chip previews open project details, including when the photograph is still missing. Photos with actual image paths open in the same dialog. The dialog closes using **Close**, **Escape**, or a click outside it, and returns focus to its trigger.

```js
// photography
{ title: "[Photo title]", image: "./assets/my-photo.jpg", alt: "[What the photograph shows]" }

// rides
{ title: "[Ride title]", date: "", distance: "", location: "", description: "", image: "", alt: "" }
```

Use your own original images and retain any required collaborator credits. Images are not downloaded from external pages in this package. A missing image file displays “Image unavailable.” Relative `./assets/...` paths work on both root and project GitHub Pages URLs.

## Publish with GitHub Pages

1. Create or open your GitHub repository. For a personal root website, use `YOUR_USERNAME.github.io`; another repository name creates a project website.
2. Upload **the contents** of this folder, including `assets/` and `.nojekyll`. Keep `index.html` at the repository root, not inside an extra nested folder.
3. Commit the changes to the branch you will publish, usually `main`.
4. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**.
5. Select `main` and **/ (root)**, then **Save**.
6. Wait for GitHub's deployment to finish and use the URL displayed in Pages settings.

Instructions checked against [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Repository access and plan requirements are described there. This package has not been uploaded or published automatically.

## Appearance and behavior

Edit the variables at the top of `styles.css` for colors and content width. The mobile menu starts at 800 px; galleries use one column at 520 px and below. There are no downloaded fonts, tracking scripts or animation dependencies.

Use current browsers with support for the native HTML `dialog` element. JavaScript is required for the editable record lists, filters and gallery; the introductory HTML, navigation and a notice remain available without it. There is no contact form or backend. Blank contact fields are intentional.

## License

Website code retains the original MIT license in `LICENSE`. A code license does not grant rights to photographs, research figures or other material you add.
