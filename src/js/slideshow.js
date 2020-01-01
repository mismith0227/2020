const $ = window.jQuery

const slideshow = () => {
  const interval = 12000
  const slideshowImg = $('.slideshow img')
  const imgCount = slideshowImg.length
  let next = 1

  slideshowImg.first().addClass('show')
  $('.counter').text('' + next + '/' + imgCount + '')

  setInterval(() => {
    $('.slideshow img.show').removeClass('show')
    $('.slideshow img:eq(' + next + ')').addClass('show')
    $('.counter').text('' + (next + 1) + '/' + imgCount + '')

    if (next + 1 < imgCount) {
      next++
    } else {
      next = 0
    }
  }, interval)
}

export default slideshow
