const $ = window.jQuery

export let isSidebarOpen = false

export const toggle = () => {
  if (isSidebarOpen) {
    $('.sidebar').removeClass('open')
    $('.main').removeClass('blur')
    isSidebarOpen = !isSidebarOpen
  } else {
    $('.sidebar').addClass('open')
    $('.main').addClass('blur')
    isSidebarOpen = !isSidebarOpen
  }
}
