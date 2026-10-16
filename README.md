# Henry AGHORUNSE | Author Website

A lightweight, responsive author website built with HTML, CSS, and vanilla JavaScript. It has no build step or third-party dependencies and can be hosted on Netlify or GitHub Pages.

## Live preview

**[Open the live website](https://acucore1.github.io/henry-author-website/)**

The preview updates automatically whenever changes are pushed to `main`. If the link is not live yet, enable GitHub Pages once in the repository's **Settings → Pages** by setting **Source** to **GitHub Actions**, then push the project to GitHub.

## Project files

- `index.html` contains the semantic page structure and SEO metadata.
- `style.css` contains the responsive design, colors, and accessibility states.
- `script.js` contains editable site data, book rendering, contact links, and mobile navigation.
- `assets/README.md` explains how to add the real portrait and book-cover images.

## Preview locally

The site can be opened directly by opening `index.html` in a browser. For a local web-server preview from this folder, run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

In GitHub Codespaces, open the **Ports** tab, forward port `8000` if it is not forwarded automatically, and select **Open in Browser** for that port.

## Configure the site

The website currently uses clearly labeled placeholders for book titles, descriptions, cover artwork, upcoming books, biography details, news, and contact information. Replace them only with approved, verified details. Book entries live in the `books` array in `script.js`; add a real `purchaseUrl` there only when a confirmed purchase destination is available.

## Images

Put approved author portraits or book covers in `assets/` and add them to the page only when available. The current graphic covers and portrait illustration are CSS-created placeholders, not photographs or published cover art. Use images Henry owns or has permission to publish.

## Deploy

### Netlify

1. Commit and push this project to a GitHub repository.
2. In Netlify, choose **Add new site** then **Import an existing project**, and connect the repository.
3. Leave the build command empty and set the publish directory to `.` (the repository root).
4. Select **Deploy**. Netlify will publish the static files; no account, domain, or payment setup is performed by this project.

### GitHub Pages

1. Commit and push the files to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` to trigger the deployment. The **[live preview](https://acucore1.github.io/henry-author-website/)** will be available when the Pages workflow completes.

## Git basics

From the project folder, review and commit your changes:

```bash
git status
git add index.html style.css script.js README.md .gitignore assets/README.md .github/workflows/pages.yml
git commit -m "Build Henry AGHORUNSE author website"
git push
```

Do not add real personal contact details or image assets to a public repository unless they are intended for publication.
