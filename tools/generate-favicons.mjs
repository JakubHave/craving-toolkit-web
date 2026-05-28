// Regenerates all favicon/app-icon derivatives from the master brand logo.
// Run with: node tools/generate-favicons.mjs
//
// Why these four sizes/locations:
//   src/app/icon.png        96x96  — primary favicon Google reads for the SERP
//                                     (App Router emits <link rel="icon" sizes="96x96">)
//   src/app/apple-icon.png  180x180 — apple-touch-icon (iOS bookmarks; Google also
//                                     uses it as a high-priority favicon source)
//   public/icon-192.png     192x192 — PWA manifest icon (referenced by src/app/manifest.ts)
//   public/icon-512.png     512x512 — PWA manifest icon + Organization schema logo
//
// All four are downscaled from the existing 1024x1024 brand logo — same image,
// correctly sized. No brand change.
import sharp from "sharp";

const SRC = "public/icon_1024.webp";

const targets = [
  { size: 96, out: "src/app/icon.png" },
  { size: 180, out: "src/app/apple-icon.png" },
  { size: 192, out: "public/icon-192.png" },
  { size: 512, out: "public/icon-512.png" },
];

for (const { size, out } of targets) {
  await sharp(SRC).resize(size, size, { fit: "cover" }).png().toFile(out);
  console.log(`✓ ${out} (${size}x${size})`);
}
console.log("Done.");
