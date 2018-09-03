export function toggleFullscreen() {
  if (!document.webkitFullscreenElement) {
    document.querySelector('body').webkitRequestFullscreen();
  } else { document.webkitExitFullscreen(); }
}


// NOTE: Needs THREE.WebGLRenderer with preserveDrawingBuffer=true
export function saveCanvas() {
  let canvas = document.querySelector('canvas');
  let link = document.createElement('a');
  let timestamp = new Date().toISOString();
  link.download = timestamp + '.png';
  link.href = canvas.toDataURL();
  link.click();
}
