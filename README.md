# Starve The Dog

Static site for the Starve The Dog Saturday workout + Bible study (Southern Indiana). Designed to deploy free to GitHub Pages with RSVPs handled by Formspree.

## Files

- `index.html` — single-page site
- `style.css` — all styling
- `script.js` — mobile nav, scroll reveal, async RSVP submit
- `STD LARGE.png`, `STD SMALL.png`, `DOG ONLY.png` — logo assets

## One-time setup before going live

### 1. Wire up the RSVP form (Formspree)

1. Sign up free at https://formspree.io.
2. Create a new form and copy its endpoint URL (looks like `https://formspree.io/f/abc12xyz`).
3. Open `index.html`, find `YOUR_FORM_ID`, replace the whole `action` URL with your endpoint.
4. Submissions will be emailed to the address on your Formspree account.

### 2. Push to GitHub

From this folder, in Terminal:

```bash
cd "/Users/malikai/Documents/Claude/Projects/Starve The Dog"

# initialize the repo
git init
git add .
git commit -m "Initial site"

# create a new GitHub repo named "starve-the-dog" first at:
# https://github.com/new   (set it to Public)

# then connect and push (replace YOUR-USERNAME)
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/starve-the-dog.git
git push -u origin main
```

### 3. Turn on GitHub Pages

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment," set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. Wait ~1 minute. Your site will be live at:
   `https://YOUR-USERNAME.github.io/starve-the-dog/`

### 4. (Optional) Custom domain

If you want a custom domain like `starvethedog.com`:

1. Buy the domain (Namecheap, Cloudflare, etc.).
2. In the repo, **Settings → Pages → Custom domain**: enter the domain.
3. At your registrar, point an `ALIAS`/`ANAME`/`A` record to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Check "Enforce HTTPS" once the cert provisions.

## Updating the site later

```bash
cd "/Users/malikai/Documents/Claude/Projects/Starve The Dog"
git add .
git commit -m "Update copy"
git push
```

GitHub Pages redeploys automatically within a minute.

## Notes

- The site is fully static — no build step, no node_modules. Just open `index.html` in a browser to preview locally.
- Brand colors: `#1e1e1e` ink / `#ffffff` paper / `#0078ab` accent.
- Fonts (Anton, Inter, JetBrains Mono) load from Google Fonts.
- The waiver text in the RSVP form is a starting point — review with anyone who advises you on liability before going live.
