# Editing with the visual CMS

This site is set up for GitHub Pages and Pages CMS. The page text, titles, links, feature cards, and image choices are stored as editable fields in `_data/cms/`. The `.pages.yml` file at the repository root tells Pages CMS which fields to display. Shared HTML and styling stay in the site templates.

## One-time setup

1. Copy the contents of this folder into the top level of your GitHub repository. Include `_config.yml`, `.pages.yml`, `_data/`, `_includes/`, and `_layouts/` as well as the existing HTML and `assets/` folders. Keep any existing `CNAME` file if you already configured a custom domain.
2. In GitHub Desktop, commit and push the files to the branch GitHub Pages publishes (usually `main` and `/(root)`).
3. Go to [Pages CMS](https://app.pagescms.org/) and sign in with GitHub.
4. Install the Pages CMS GitHub App for your account or organization and grant it access to this repository. You can limit the installation to the conference repository.
5. Open the repository in Pages CMS. It reads `.pages.yml` and shows Home, Abstract Submission, Sponsors, Connect, Past Conferences, and Site settings as editable sections.

## Make updates later

Open the repository in Pages CMS, edit the field you want, and save. For images, choose an image field and upload or select a file. Pages CMS commits the changes to GitHub; GitHub Pages then republishes the site. The image files are stored in `assets/images/`.

## Preview and publishing

GitHub Pages uses Jekyll to render the templates and JSON content into the static website. In **Settings → Pages**, use **Deploy from a branch**, select the publishing branch and `/(root)`. The site is published at the URL shown in those settings.

The `CNAME` file in this folder sets the configured custom domain to `www.dukegmhconference2027.com`. The DNS provider still needs the matching `www` CNAME record pointing to the GitHub account’s `USERNAME.github.io` domain.


## Homepage media and flyers

In Pages CMS, open **Home page**:

- Add up to 12 photos under **Homepage slideshow**. Photos rotate automatically every five seconds; visitors can select a slide using the dots. Provide a short alt description for accessibility and an optional caption.
- Upload an MP4 or WebM under **Conference video**. It appears in a player beneath the slideshow in the right side of the home page hero. It is not autoplayed so visitors can choose when to play it.
- Optionally upload a **Video poster image** to show before playback.
- Add up to eight rows under **Flyer attachments**. Give each a title, optional short description, and PDF. Each appears as a download link in the homepage flyer section.

Keep individual video files reasonably small so the homepage loads quickly.
