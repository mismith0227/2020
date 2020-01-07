import { cursor } from './cursor'
import slideshow from './slideshow'
import { toggle as toggleSidebar } from './sidebar'
import Zooming from 'zooming'
const $ = window.jQuery

$(() => {
  const ua = navigator.userAgent

  if (
    ua.indexOf('iPhone') === -1 &&
    (ua.indexOf('Android') === -1) & (ua.indexOf('Mobile') === -1) &&
    ua.indexOf('iPad') === -1
  ) {
    cursor()
  }

  setTimeout(() => {
    $('.loading').hide()
    slideshow()
  }, 1000)

  const menuIcon = $('.menuicon')
  menuIcon.on('click', () => {
    toggleSidebar()
  })

  const zooming = new Zooming({
    bgColor: 'rgba(0, 0, 0)',
    bgOpacity: 0.7,
    customSize: '90%'
  })

  zooming.listen('.img-zoomable')
})
