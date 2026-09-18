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
- Deployed on Vercel (Hobby / free)

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

The contact form uses **EmailJS** (free tier). Service ID, template ID, and public key are configured in:

- `components/ContactForm.js`
- `components/EmailJSProvider.js`

Messages are sent to the configured Gmail inbox.

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
