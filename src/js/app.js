import { cursor } from './cursor'
import slideshow from './slideshow'
import { toggle as toggleSidebar } from './sidebar'
const $ = window.jQuery

$(() => {
  const ua = navigator.userAgent
  console.log(ua)

  if (
    ua.indexOf('iPhone') === -1 &&
    (ua.indexOf('Android') === -1) & (ua.indexOf('Mobile') === -1) &&
    ua.indexOf('iPad') === -1
  ) {
    cursor()
  }

  slideshow()

  const menuIcon = $('.menuicon')
  menuIcon.on('click', () => {
    toggleSidebar()
  })
})
