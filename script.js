window.break.style.setProperty('height', `${(document.body.clientHeight/2-front.clientHeight)}px`)

document.querySelectorAll('a').forEach(function(a, i) {
  let aLink = a.textContent
  let aLinkS = aLink.split(`\n`)
  let protocol = 'https://'
  if (aLink.includes('@')) {
    if (!aLink.split('@')[0].includes(':')) protocol = 'mailto:'
  }
  a.href = `${protocol}${aLink}`
})