const getYouTubeId = value => {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, '').toLowerCase();
    if (!['youtube.com', 'm.youtube.com', 'youtu.be', 'youtube-nocookie.com'].includes(host)) return null;

    let id = '';
    if (host === 'youtu.be') {
      id = url.pathname.split('/').filter(Boolean)[0] || '';
    } else {
      id = url.searchParams.get('v') || '';
      if (!id) id = url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] || '';
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
};

document.querySelectorAll('[data-youtube-url]').forEach(frame => {
  const id = getYouTubeId(frame.dataset.youtubeUrl);
  if (!id) {
    frame.textContent = 'Enter a valid YouTube video or Shorts link in Pages CMS.';
    return;
  }

  const player = document.createElement('iframe');
  player.src = `https://www.youtube-nocookie.com/embed/${id}?playsinline=1&rel=0`;
  player.title = frame.dataset.youtubeTitle || 'YouTube video';
  player.loading = 'lazy';
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  player.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  player.allowFullscreen = true;
  frame.replaceChildren(player);
});
