export const GET = ({ site }: { site?: URL }) => {
  const siteUrl = site ?? new URL('https://huddleway.com');
  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};