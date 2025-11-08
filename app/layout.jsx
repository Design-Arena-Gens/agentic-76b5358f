export const metadata = {
  metadataBase: new URL('https://agentic-76b5358f.vercel.app'),
  title: {
    default: 'Intelliwave ? Agence d\'automatisation AI & n8n',
    template: '%s | Intelliwave'
  },
  description:
    "Agence d'automatisation IA et n8n. Conception de chatbots sur mesure connect?s ? vos outils m?tier.",
  openGraph: {
    title: 'Intelliwave ? Agence d\'automatisation AI & n8n',
    description:
      "Conception de chatbots sur mesure, int?grations n8n, optimisation IA.",
    url: 'https://agentic-76b5358f.vercel.app',
    siteName: 'Intelliwave',
    locale: 'fr_FR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelliwave',
    description:
      "Chatbots sur mesure, int?grations n8n, automatisations intelligentes.",
  }
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="brand">
              <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="1" y2="0">
                    <stop offset="0" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path fill="url(#g)" d="M6 30c8 0 8-12 16-12s8 12 16 12v6c-8 0-8-12-16-12s-8 12-16 12v-6z"/>
                <circle cx="8" cy="16" r="4" fill="#06b6d4" />
                <circle cx="40" cy="16" r="4" fill="#7c3aed" />
              </svg>
              <span>Intelliwave</span>
            </a>
            <nav className="main-nav">
              <a href="/services">Services</a>
              <a href="/solutions">Solutions</a>
              <a href="/contact" className="btn btn-primary">Demander un devis</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <div>? {new Date().getFullYear()} Intelliwave. Tous droits r?serv?s.</div>
            <div className="footer-links">
              <a href="/">Accueil</a>
              <a href="/services">Services</a>
              <a href="/solutions">Solutions</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
