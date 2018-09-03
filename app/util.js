export function toggleFullscreen() {
  if (!document.webkitFullscreenElement) {
    document.querySelector('body').webkitRequestFullscreen();
  } else { document.webkitExitFullscreen(); }
}
