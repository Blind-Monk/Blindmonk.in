import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';

const outputDirectory = resolve('dist/blindmonk-website/browser');
const sitemapPath = join(outputDirectory, 'sitemap.xml');
const indexPath = join(outputDirectory, 'index.html');
const sitemap = await readFile(sitemapPath, 'utf8');
const indexHtml = await readFile(indexPath, 'utf8');
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => {
  const parsedUrl = new URL(url);
  if (parsedUrl.origin !== 'https://blindmonk.in') {
    throw new Error(`Unexpected sitemap origin: ${parsedUrl.origin}`);
  }
  return parsedUrl.pathname;
});

for (const route of routes) {
  if (route === '/') {
    continue;
  }

  const routeDirectory = resolve(outputDirectory, `.${decodeURIComponent(route)}`);
  const routeRelativeToOutput = relative(outputDirectory, routeDirectory);
  if (routeRelativeToOutput.startsWith(`..${sep}`) || routeRelativeToOutput === '..') {
    throw new Error(`Sitemap route escapes the output directory: ${route}`);
  }

  const routeIndexPath = join(routeDirectory, 'index.html');
  const canonicalUrl = new URL(route, 'https://blindmonk.in').toString();
  const routeHtml = indexHtml
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`);
  await mkdir(dirname(routeIndexPath), { recursive: true });
  await writeFile(routeIndexPath, routeHtml);
}
