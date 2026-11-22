# Eazy Textile – Business Manager

Simple business software for a textile shop: purchases, sales, stock, supplier dues, customer dues and advances, expenses, dashboard and profit & loss.

## Use it
Open `index.html` in any browser (works offline). Data is saved in the browser on that device. Use **Backup data** on the Dashboard regularly.

## Put it online with GitHub Pages (free)
1. Create a new repository on github.com (e.g. `eazy-textile`).
2. Upload `index.html`, `README.md` and `.nojekyll` (Add file → Upload files).
3. Go to Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. After a minute your app is live at `https://YOUR-USERNAME.github.io/eazy-textile/`.

## Google Drive auto-sync (one-time setup, ~10 minutes)
Sync works only when the app is opened from your GitHub Pages link (https), not from a file on disk. Your data is saved in a private app folder in your Google Drive and merges across phone and laptop automatically.

1. Go to console.cloud.google.com and create a project (e.g. "Eazy Textile").
2. APIs & Services → Library → enable **Google Drive API**.
3. APIs & Services → OAuth consent screen → External → fill app name and your email → add your own Gmail under **Test users**.
4. APIs & Services → Credentials → Create credentials → **OAuth client ID** → Application type **Web application**.
5. Under **Authorized JavaScript origins** add `https://YOUR-USERNAME.github.io` (no path, no trailing slash).
6. Copy the Client ID, open the app → Dashboard → paste it under *Google Drive auto-sync* → **Connect Google Drive** → allow access.

After that, every entry syncs about 3 seconds after you save it, and the app re-syncs whenever you return to it. Do the same Client ID paste once on each device. Keep using **Backup data** as an extra safety copy.

## Install as an app (easiest – no build needed)
Open your GitHub Pages link: on **Android Chrome** tap ⋮ → *Install app*; on **Windows Chrome/Edge** click the install icon in the address bar. It then opens in its own window like a normal app, works offline, and Google Drive sync still works.

## Real Android APK + Windows .exe (built free by GitHub)
This repo includes `.github/workflows/build.yml`. Once the files are on GitHub:
1. Open the repository → **Actions** tab → *Build apps* → **Run workflow** (it also runs on every upload).
2. Wait ~10 minutes. Open the finished run and download from **Artifacts**:
   - `Eazy-Textile-Android-APK` → `app-debug.apk` (copy to phone, allow "install unknown apps", install)
   - `Eazy-Textile-Windows` → installer `.exe` and a portable `.exe` (no install needed)
3. Make sure the **.github** folder is uploaded (it is hidden on some computers). If the web uploader skips it, use GitHub Desktop, or *Add file → Create new file* and type `.github/workflows/build.yml`, then paste the file's text.

Notes: Windows may show a "SmartScreen" warning for an unsigned app (More info → Run anyway). The APK is a debug build for your own use, not for the Play Store. In the APK and Windows app, Google Drive sync does not work (Google blocks sign-in inside app windows) – use **Backup data**, or use the installed web version above when you want sync.
