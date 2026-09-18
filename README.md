# Premanand Patil — Portfolio

Personal portfolio website of **Premanand Patil**, a .NET Full Stack Developer based in Pune.

**Live site:** [https://premanand-patil.vercel.app](https://premanand-patil.vercel.app)

**GitHub:** [https://github.com/prempatil03/Portfolio-dev-master](https://github.com/prempatil03/Portfolio-dev-master)

---

## About

This portfolio showcases professional experience, skills, projects, certificates, and a working contact form. It is built as a clean, responsive single-page site with light/dark mode.

### Highlights
- About, Experience, Skills, Education & Learning
- Certificates marquee with PDF preview and “View More” list
- Featured projects (including [Docket Receptionist](https://github.com/prempatil03/DocketReceptionist))
- Contact form via EmailJS (messages delivered to email)
- Resume download / view
- Dark & light theme toggle
- Deployed on Vercel.

---

## Tech Stack

| Area | Tools |
|------|--------|
| Framework | Next.js 15, React 18 |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| UI | Headless UI, Heroicons |
| Contact | EmailJS |
| Hosting | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 18+ recommended
- npm

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```text
app/                 # Next.js app router (page, layout, styles)
components/          # UI sections (nav, projects, certificates, contact, theme)
public/              # Images, resume PDF, certificates
public/certificates/ # Certificate PDFs (auto-listed on the site)
```

---

## Contact Form

The contact form posts to a **server-only** API route (`/api/contact`).  
EmailJS keys are **not** stored in frontend code.

1. Copy `.env.example` → `.env.local` and fill values locally  
2. On Vercel: **Settings → Environment Variables** — add the same keys for Production  
3. In EmailJS dashboard → **Account → Security**:
   - Enable **Allow EmailJS API for non-browser applications**
   - Prefer using the **Private Key** (server only)

**Never commit** `.env.local` or real keys to GitHub.

---

## Certificates

Place certificate files (PDF, PNG, JPG, WEBP) in:

```text
public/certificates/
```

They appear automatically in the Certificates section after a refresh / redeploy.

---

## Deployment

Connected to GitHub account **`prempatil03`** and deployed on Vercel:

- Production URL: [https://premanand-patil.vercel.app](https://premanand-patil.vercel.app)
- Push to `main` triggers a new production deploy

---

## Author

**Premanand Patil**  
.NET Full Stack Developer · Pune  

- Email: [pprem2802@gmail.com](mailto:pprem2802@gmail.com)
- GitHub: [prempatil03](https://github.com/prempatil03)
- LinkedIn: [Premanand Patil](https://www.linkedin.com/in/premanand-patil-945b53217/)
- Portfolio: [premanand-patil.vercel.app](https://premanand-patil.vercel.app)

---

## License

See [LICENSE](./LICENSE) in this repository.
