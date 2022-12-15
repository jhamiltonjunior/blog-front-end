const { SitemapStream, streamToPromise } = require("sitemap")
const { Readable } = require("stream")

export default async function sitemap(req, res) {
  const links = [
    { url: "what-s-inside-a-black-hole", changeFreq: "daily", priority: 0.3 },
    { url: "the-internet-s-own-boy", changeFreq: "daily", priority: 0.3 },
    { url: "this-shrimp-is-awesome", changeFreq: "daily", priority: 0.3 },
    {
      url: "a-bug-is-becoming-a-meme-on-the-internet",
      changeFreq: "daily",
      priority: 0.3,
    },
    { url: "we-love-pizza", changeFreq: "daily", priority: 0.3 },
    { url: "beautiful-picture", changeFreq: "daily", priority: 0.3 },
    { url: "i-testing", changeFreq: "daily", priority: 0.3 },
  ]

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    "Content-Type": "application/xml",
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString())

  res.end(xmlString)
}