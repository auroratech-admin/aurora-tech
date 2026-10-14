/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sitio estático para SiteGround: `pnpm build` genera la carpeta out/ para subir a public_html.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Hay un package.json en ~ (carpeta personal): sin esto Next toma todo el usuario
  // como raíz del proyecto, Turbopack lo vigila entero y satura la Mac.
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
