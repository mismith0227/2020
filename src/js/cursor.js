import TweenMax from 'gsap'
const $ = window.jQuery

export const cursor = () => {
  let mouseX = 0
  let mouseY = 0

  const delay = 10
  let posX = 0
  let posY = 0

  $('body').append('<div id="follower">')

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
    }
  })

  $(document).on('mousemove', e => {
    mouseX = e.pageX
    mouseY = e.pageY
  })

  $('a, .gallery-image-wrap img').on({
    mouseenter: e => {
      follower.addClass('is-active')
    },
    mouseleave: () => {
      follower.removeClass('is-active')
    }
  })

  $('.profile').on({
    mouseenter: () => {
      follower.addClass('is-active-profile')
    },
    mouseleave: () => {
      follower.removeClass('is-active-profile')
    }
  })

  $('.menuicon').on({
    mouseenter: () => {
      follower.addClass('is-active-menuicon')
    },
    mouseleave: () => {
      follower.removeClass('is-active-menuicon')
    }
  })
}
