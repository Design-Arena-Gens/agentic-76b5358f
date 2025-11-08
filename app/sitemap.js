export default function sitemap(){
  const base = 'https://agentic-76b5358f.vercel.app';
  return [
    { url: base, lastModified: new Date() },
    { url: base + '/services', lastModified: new Date() },
    { url: base + '/solutions', lastModified: new Date() },
    { url: base + '/contact', lastModified: new Date() }
  ];
}
