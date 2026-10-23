/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain website into ./out
  // that can be hosted for free on Vercel, Netlify or GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
