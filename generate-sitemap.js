import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
(async () => {
  const links = [
    { url: "/", changefreq: "daily", priority: 1 },
    { url: "/luxury-watches", changefreq: "daily", priority: 0.8 },
  ];

  const stream = new SitemapStream({ hostname: "https://www.webuyindubai.com" });

  const data = await streamToPromise(Readable.from(links).pipe(stream));
  const xml = data.toString();

  // Write XML sitemap to file
  fs.writeFileSync("public/sitemap.xml", xml);
})();
