// After creating your Leaflet map (e.g., const map = L.map('map', ...) )
function refreshMapSize() {
  // allow layout to settle then invalidate size
  setTimeout(() => {
    if (map && typeof map.invalidateSize === 'function') map.invalidateSize();
  }, 200);
}

// run once after load to ensure proper initial rendering
window.addEventListener('load', refreshMapSize);

// run on orientationchange and resize
window.addEventListener('orientationchange', refreshMapSize);
window.addEventListener('resize', refreshMapSize);

// If you toggle/hide UI panels programmatically, call refreshMapSize() afterwards