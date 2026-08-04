const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsView = document.getElementById('results-view');
const resultsGrid = document.getElementById('results-grid');
const episodesView = document.getElementById('episodes-view');
const episodesList = document.getElementById('episodes-list');
const podcastHeader = document.getElementById('podcast-header');
const backButton = document.getElementById('back-button');
const playerBar = document.getElementById('player-bar');
const audioPlayer = document.getElementById('audio-player');
const nowPlaying = document.getElementById('now-playing');

function setLoading(container, message) {
  container.innerHTML = `<p class="loading">${message}</p>`;
}

function setError(container, message) {
  container.innerHTML = `<p class="error-message">${message}</p>`;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function stripHtml(str) {
  const div = document.createElement('div');
  div.innerHTML = str || '';
  return div.textContent || '';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date)) return '';
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

async function searchPodcasts(term) {
  setLoading(resultsGrid, 'Recherche en cours...');
  try {
    const res = await fetch(`/api/search?term=${encodeURIComponent(term)}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Erreur inconnue');

    if (!data.results.length) {
      resultsGrid.innerHTML = '<p class="hint">Aucun podcast trouvé pour cette recherche.</p>';
      return;
    }

    resultsGrid.innerHTML = '';
    data.results.forEach((podcast) => {
      const card = document.createElement('div');
      card.className = 'podcast-card';
      card.innerHTML = `
        <img src="${escapeHtml(podcast.artwork)}" alt="${escapeHtml(podcast.title)}" loading="lazy" />
        <div class="card-info">
          <p class="card-title">${escapeHtml(podcast.title)}</p>
          <p class="card-artist">${escapeHtml(podcast.artist)}</p>
        </div>
      `;
      card.addEventListener('click', () => openPodcast(podcast));
      resultsGrid.appendChild(card);
    });
  } catch (err) {
    setError(resultsGrid, "Une erreur s'est produite lors de la recherche : " + err.message);
  }
}

async function openPodcast(podcast) {
  resultsView.classList.add('hidden');
  episodesView.classList.remove('hidden');
  podcastHeader.innerHTML = '';
  setLoading(episodesList, 'Chargement des épisodes...');

  try {
    const res = await fetch(`/api/feed?url=${encodeURIComponent(podcast.feedUrl)}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Erreur inconnue');

    podcastHeader.innerHTML = `
      <img src="${escapeHtml(data.image || podcast.artwork)}" alt="${escapeHtml(data.title)}" />
      <div>
        <h2>${escapeHtml(data.title || podcast.title)}</h2>
        <p>${escapeHtml(stripHtml(data.description)).slice(0, 300)}</p>
      </div>
    `;

    if (!data.episodes.length) {
      episodesList.innerHTML = '<p class="hint">Aucun épisode disponible pour ce podcast.</p>';
      return;
    }

    episodesList.innerHTML = '';
    data.episodes.forEach((ep) => {
      const li = document.createElement('li');
      li.className = 'episode-item';
      li.innerHTML = `
        <p class="episode-title">${escapeHtml(ep.title)}</p>
        <p class="episode-meta">${formatDate(ep.pubDate)}${ep.duration ? ' · ' + escapeHtml(ep.duration) : ''}</p>
        <p class="episode-description">${escapeHtml(stripHtml(ep.description))}</p>
      `;
      li.addEventListener('click', () => playEpisode(ep, data.title || podcast.title));
      episodesList.appendChild(li);
    });
  } catch (err) {
    setError(episodesList, "Impossible de charger ce podcast : " + err.message);
  }
}

function playEpisode(episode, podcastTitle) {
  audioPlayer.src = episode.audioUrl;
  audioPlayer.play().catch(() => {});
  nowPlaying.textContent = `${episode.title} — ${podcastTitle}`;
  playerBar.classList.remove('hidden');
}

backButton.addEventListener('click', () => {
  episodesView.classList.add('hidden');
  resultsView.classList.remove('hidden');
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const term = searchInput.value.trim();
  if (term) searchPodcasts(term);
});
