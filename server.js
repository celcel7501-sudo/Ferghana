const express = require('express');
const { XMLParser } = require('fast-xml-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/search', async (req, res) => {
  const term = (req.query.term || '').trim();
  if (!term) {
    return res.status(400).json({ error: "Le paramètre 'term' est requis." });
  }

  try {
    const url = new URL('https://itunes.apple.com/search');
    url.searchParams.set('term', term);
    url.searchParams.set('media', 'podcast');
    url.searchParams.set('entity', 'podcast');
    url.searchParams.set('limit', '25');
    url.searchParams.set('country', 'FR');

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`iTunes a répondu avec le statut ${response.status}`);
    }
    const data = await response.json();

    const results = (data.results || []).map((item) => ({
      id: item.collectionId,
      title: item.collectionName,
      artist: item.artistName,
      artwork: item.artworkUrl600 || item.artworkUrl100,
      feedUrl: item.feedUrl,
      genre: item.primaryGenreName,
    })).filter((item) => item.feedUrl);

    res.json({ results });
  } catch (err) {
    console.error('Erreur de recherche:', err.message);
    res.status(502).json({ error: "Impossible de contacter le service de recherche de podcasts." });
  }
});

app.get('/api/feed', async (req, res) => {
  const feedUrl = req.query.url;
  if (!feedUrl) {
    return res.status(400).json({ error: "Le paramètre 'url' est requis." });
  }

  try {
    const parsedUrl = new URL(feedUrl);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error('Protocole invalide');
    }

    const response = await fetch(parsedUrl, {
      headers: { 'User-Agent': 'Ferghana-Podcasts/1.0' },
    });
    if (!response.ok) {
      throw new Error(`Le flux a répondu avec le statut ${response.status}`);
    }
    const xml = await response.text();

    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
    const parsed = parser.parse(xml);

    const channel = parsed.rss && parsed.rss.channel;
    if (!channel) {
      throw new Error('Format de flux RSS invalide');
    }

    let items = channel.item || [];
    if (!Array.isArray(items)) items = [items];

    const episodes = items.slice(0, 50).map((item) => {
      const enclosure = item.enclosure || {};
      const itunesDuration = item['itunes:duration'];
      return {
        title: item.title || 'Sans titre',
        description: typeof item.description === 'string' ? item.description : '',
        pubDate: item.pubDate || '',
        audioUrl: enclosure['@_url'] || '',
        duration: itunesDuration ? String(itunesDuration) : '',
      };
    }).filter((ep) => ep.audioUrl);

    res.json({
      title: channel.title || '',
      description: typeof channel.description === 'string' ? channel.description : '',
      image: (channel.image && channel.image.url) || (channel['itunes:image'] && channel['itunes:image']['@_href']) || '',
      episodes,
    });
  } catch (err) {
    console.error('Erreur de flux:', err.message);
    res.status(502).json({ error: "Impossible de récupérer ou d'analyser ce flux de podcast." });
  }
});

app.listen(PORT, () => {
  console.log(`Ferghana Podcasts démarré sur http://localhost:${PORT}`);
});
