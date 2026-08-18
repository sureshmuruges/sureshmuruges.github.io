import createMDX from '@next/mdx'

/**
 * Deployed as a GitHub Pages *user site* (sureshmuruges.github.io),
 * so no basePath/assetPrefix is needed. If this repo is ever renamed
 * to a project repo, set basePath and assetPrefix to '/<repo-name>'.
 */

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    // github-dark-default keeps comment tokens above WCAG AA contrast.
    dark: 'github-dark-default',
    light: 'github-light',
  },
  keepBackground: false,
  defaultLang: 'php',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    // Native View Transitions on client-side navigation; the CSS
    // @view-transition rule in globals.css covers full page loads.
    viewTransition: true,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    // String form keeps loader options serializable for Turbopack.
    rehypePlugins: [['rehype-pretty-code', prettyCodeOptions]],
  },
})

export default withMDX(nextConfig)
