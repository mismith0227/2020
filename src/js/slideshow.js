const $ = window.jQuery

const slideshow = () => {
  const interval = 12000
  const slideshowImg = $('.slideshow img')
  const imgCount = slideshowImg.length
  let next = 1

  slideshowImg.first().addClass('show')

  setInterval(() => {
    $('.slideshow img.show').removeClass('show')
    $('.slideshow img:eq(' + next + ')').addClass('show')

    if (next + 1 < imgCount) {
      next++
    } else {
      next = 0
    }
  }, interval)
}

export default slideshow
