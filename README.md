# Online Quize

A minimal client-side online quiz application (HTML/CSS/JS).

## Overview

This small project is a simple, static web-based quiz app. It uses plain HTML, CSS and JavaScript to present the quiz UI and handle a registration/flow locally in the browser. It's intended as a lightweight learning/demo project or starter template.

## Demo / Live Site

- Demo site: https://beast-coder27.github.io/online_quiz_system/

Visit the demo to see the app running. Note: the demo may contain an instance of this project's files hosted separately.

## Files

- `index.html` — Main quiz/registration page.
- `registration-success.html` — Page shown after successful registration.
- `script.js` — JavaScript for quiz logic and form handling.
- `styles.css` — Styling for the pages.

## Quick Start

Open the project folder and launch `index.html` in your browser. On Windows PowerShell you can run:

```powershell
# Open the default browser with index.html
Start-Process index.html

# Or open the folder and double-click the file
Start-Process .
```

If you prefer serving files over a lightweight HTTP server (recommended for certain browser features), use Python (if installed):

```powershell
# Serve current folder on http://localhost:8000
python -m http.server 8000; Start-Process http://localhost:8000
```

## How to Use

1. Open `index.html` in a browser.
2. Fill the registration/quiz form on the page.
3. After successful registration you should be redirected to `registration-success.html`.

## Customize

- To change appearance edit `styles.css`.
- To change or extend quiz logic edit `script.js`.
- To tweak markup or add new pages edit `index.html` or add additional HTML files.

## Contributing

This is a small personal/demo project. If you'd like to improve it:

- Fork the repo or copy the folder.
- Edit files locally and test in the browser.
- Optionally open a PR or send changes as a zip.

## Author

Umesh kanakatte as a@beast-coder27

## License

This project is provided as-is. You can add an open-source license such as MIT if you wish.
