import { cursor } from './cursor'
import slideshow from './slideshow'
const $ = window.jQuery
console.log('app')

$(() => {
  cursor()

  slideshow()
})
