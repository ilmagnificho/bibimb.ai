import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://bibimb.ai/sitemap.xml",
    host: "https://bibimb.ai",
  };
}
