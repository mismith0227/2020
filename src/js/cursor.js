import { TweenMax } from 'gsap'
const $ = window.jQuery

export const cursor = () => {
  let mouseX = 0
  let mouseY = 0

  const delay = 10
  let posX = 0
  let posY = 0

  $('body').append('<div id="cursor">', '<div id="follower">')

  const cursor = $('#cursor')
  const follower = $('#follower')

  TweenMax.to({}, 0.01, {
    repeat: -1,
    onRepeat: () => {
      posX += (mouseX - posX) / delay
      posY += (mouseY - posY) / delay

      TweenMax.set(follower, {
        css: {
          left: posX,
          top: posY
        }
      })

      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      })
    }
  })

  $(document).on('mousemove', e => {
    mouseX = e.pageX
    mouseY = e.pageY
  })
}
