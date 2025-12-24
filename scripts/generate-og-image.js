/**
 * Script to generate OG image (1200x630 PNG) for social media preview
 * Run: npm run generate-og-image
 */

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function generateOGImage() {
  console.log("🎨 Generating OG image...");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Set viewport to OG image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2, // 2x for retina quality
  });

  // Load the HTML template
  const htmlPath = path.join(__dirname, "../public/og-image-generator.html");
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

  // Get the .og-image element
  const element = await page.$(".og-image");

  if (!element) {
    console.error("❌ Could not find .og-image element");
    await browser.close();
    process.exit(1);
  }

  // Screenshot the element
  const outputPath = path.join(__dirname, "../public/og-image.png");
  await element.screenshot({
    path: outputPath,
    type: "png",
  });

  await browser.close();

  // Check file size
  const stats = fs.statSync(outputPath);
  const fileSizeKB = (stats.size / 1024).toFixed(2);

  console.log(`✅ OG image generated successfully!`);
  console.log(`📁 Location: public/og-image.png`);
  console.log(`📐 Dimensions: 2400x1260 (2x retina)`);
  console.log(`💾 File size: ${fileSizeKB} KB`);
}

generateOGImage().catch((error) => {
  console.error("❌ Error generating OG image:", error.message);
  console.log("\n💡 Make sure puppeteer is installed:");
  console.log("   npm install puppeteer --save-dev\n");
  process.exit(1);
});
