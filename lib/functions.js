/**
 * Grab the src of an iframe, and replace it
 * with a less terrible version.
 *
 * @param {string}  html Raw HTML from reddit
 * @return {string}      Clean <iframe> code.
 */
export function cleanIframe(html) {
  // Grab the src URL.
  const source = html.match(/(src="([^"]+)")/gi)

  return `<iframe
      title="iframe"
      ${source}
      width="512"
      height="442"
      loading="lazy"
      allow="autoplay"
      referrerpolicy="no-referrer"
    />`
}

/**
 * Decode html before using it with dangerouslySetInnerHTML.
 * @link https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/
 *
 * @param {string}  html Raw HTML from reddit
 * @return {string}      Decoded HTML
 */
export function decodeHTML(html) {
  const txt = document.createElement('textarea') // eslint-disable-line no-undef
  txt.innerHTML = html
  return txt.value
}

/**
 * Generic scroll handler.
 */
export function scrollTop() {
  // eslint-disable-next-line no-undef
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/**
 * Shrink header.
 */
export function shrinkHeader() {
  // Grab the header <div>.
  const header = document.getElementsByClassName('site-header')

  // On scroll, add or remove a "shrink" class.
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header[0].classList.add('shrink')
    } else {
      header[0].classList.remove('shrink')
    }
  })
}