import fs from 'fs';
import path from 'path';
import CertificatesMarquee from './CertificatesMarquee';

function getCertificates() {
  const dir = path.join(process.cwd(), 'public', 'certificates');

  try {
    if (!fs.existsSync(dir)) {
      return [];
    }

    return fs
      .readdirSync(dir)
      .filter((file) => /\.(png|jpe?g|webp|gif|pdf)$/i.test(file))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => {
        const ext = path.extname(file).toLowerCase();
        const title = file
          .replace(/\.[^.]+$/, '')
          .replace(/^_?certificate_?/i, '')
          .replace(/[-_]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        return {
          src: `/certificates/${encodeURIComponent(file)}`,
          title: title || file,
          type: ext === '.pdf' ? 'pdf' : 'image',
        };
      });
  } catch {
    return [];
  }
}

export default function CertificatesSection() {
  const certificates = getCertificates();

  return (
    <section id="certificates" className="py-12 scroll-mt-20">
      <CertificatesMarquee certificates={certificates} />
    </section>
  );
}
