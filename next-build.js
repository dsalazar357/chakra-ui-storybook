console.log("Starting Next.js build process as fallback...")

const { execSync } = require("child_process")

try {
  // Build a simple Next.js page that redirects to Storybook
  console.log("Creating a simple Next.js app...")

  const fs = require("fs")

  // Ensure directories exist
  if (!fs.existsSync("./pages")) {
    fs.mkdirSync("./pages", { recursive: true })
  }

  // Create a simple index page that will redirect to Storybook
  fs.writeFileSync(
    "./pages/index.js",
    `
    export default function Home() {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Chakra UI Storybook</h1>
          <p>If you're not automatically redirected, please click the link below:</p>
          <a href="/storybook-static/index.html">Go to Storybook</a>
          <script dangerouslySetInnerHTML={{ __html: \`
            window.location.href = "/storybook-static/index.html";
          \` }} />
        </div>
      );
    }
  `,
  )

  // Create a simple next.config.js
  fs.writeFileSync(
    "./next.config.js",
    `
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
    };
    
    module.exports = nextConfig;
  `,
  )

  // Build Next.js
  console.log("Building Next.js app...")
  execSync("npx next build", { stdio: "inherit" })

  console.log("Next.js build completed successfully!")
} catch (error) {
  console.error("Error building Next.js app:", error)
  process.exit(1)
}
