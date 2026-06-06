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