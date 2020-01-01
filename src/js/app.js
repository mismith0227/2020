import { cursor } from './cursor'
import slideshow from './slideshow'
import { toggle as toggleSidebar } from './sidebar'
const $ = window.jQuery

$(() => {
  cursor()

  slideshow()

  const menuIcon = $('.menuicon')
  menuIcon.on('click', () => {
    toggleSidebar()
  })
})
