/**
 * IndexNow post-build script.
 * Submits all article URLs to IndexNow API for faster Bing/DuckDuckGo/Yandex indexing.
 *
 * Set INDEXNOW_KEY env var or it defaults to the generated key.
 * Run: npx tsx scripts/indexnow.ts
 */

export {};

const KEY = process.env.INDEXNOW_KEY || "e2668d5eba4a4c1a";
const HOST = "cravingtoolkit.com";

async function main() {
  // Dynamically import article data
  const { articles } = await import("../src/data/articles/index.js");

  const urlList = [
    `https://${HOST}`,
    `https://${HOST}/articles`,
    `https://${HOST}/about`,
    `https://${HOST}/editorial-policy`,
    ...articles.map((a: { slug: string }) => `https://${HOST}/articles/${a.slug}`),
  ];

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };

  console.log(`IndexNow: submitting ${urlList.length} URLs...`);

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok || res.status === 202) {
      console.log(`IndexNow: submitted successfully (${res.status})`);
    } else {
      const text = await res.text();
      console.error(`IndexNow: failed (${res.status}): ${text}`);
    }
  } catch (err) {
    console.error("IndexNow: request failed:", err);
  }
}

main();
