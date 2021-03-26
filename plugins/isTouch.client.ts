export default function isTouch(): boolean {
  if (process.browser) {
    return ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0)
  }
  return false
}