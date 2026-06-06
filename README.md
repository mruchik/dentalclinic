Swarnim Multispeciality Dental Clinic - Static Website

This folder contains a static HTML/CSS site ready for deployment.

## Recommended setup

1) Install Git for Windows:

- Download and install from https://git-scm.com/download/win
- Restart VS Code after installation so the editor can detect Git.

2) Open this folder in VS Code:

```powershell
code "C:\Users\hp\OneDrive\Desktop\ruchik"
```

3) Use the Source Control view in VS Code to initialize the repository:

- Click the Source Control icon
- Select **Initialize Repository**
- Stage all files, create a commit, and then push to GitHub

## Local git commands

```powershell
cd "C:\Users\hp\OneDrive\Desktop\ruchik"
git init
git add .
git commit -m "Initial site commit"
```

## Push to GitHub

1) Create a new GitHub repository on https://github.com/new
2) Add it as a remote:

```powershell
git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main
git push -u origin main
```

## Deploy from Vercel

### Option 1: Deploy using Vercel CLI

Install Node.js if needed, then:

```powershell
npm install -g vercel
cd "C:\Users\hp\OneDrive\Desktop\ruchik"
vercel
# or use:
vercel --prod
```

### Option 2: Deploy via GitHub and Vercel dashboard

1) Push your repo to GitHub.
2) Go to https://vercel.com/new and import your GitHub repository.
3) Set the project root to the repository root.
4) Vercel will detect this as a static site and deploy `index.html`.

## Notes

- This is a static site with no build step.
- If you want to deploy directly from VS Code, install the Vercel extension and use its deploy commands after the repo is pushed to GitHub.
- If you want me to continue, I can help you with the exact steps after Git is installed.

## Server-side email (SendGrid)

The booking form can now send emails from the server instead of opening the user's mail client. To enable this you must set these environment variables in Vercel:

- `SENDGRID_API_KEY` — your SendGrid API key (create at https://app.sendgrid.com/settings/api_keys)
- `SENDGRID_FROM_EMAIL` — a verified sender email in SendGrid (e.g. no-reply@yourdomain.com)
- `APPOINTMENT_EMAIL` — the clinic email address that receives appointment requests (e.g. swarnimdentalclinic00@gmail.com)

After adding the variables in your Vercel project settings, redeploy the site and the form will POST to `/api/send` which sends the email.

If you prefer SMTP instead of SendGrid, I can provide a `nodemailer` version and corresponding environment variables.