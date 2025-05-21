console.log("Starting Storybook build process...")

const { execSync } = require("child_process")

try {
  // Install storybook CLI globally to ensure it's available
  console.log("Installing Storybook CLI...")
  execSync("npm install -g storybook@latest", { stdio: "inherit" })

  // Build storybook directly using the CLI
  console.log("Building Storybook...")
  execSync("npx storybook build -o storybook-static", { stdio: "inherit" })

  console.log("Storybook build completed successfully!")
} catch (error) {
  console.error("Error building Storybook:", error)
  process.exit(1)
}
