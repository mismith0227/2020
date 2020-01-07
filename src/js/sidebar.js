const $ = window.jQuery

export let isSidebarOpen = false

export const toggle = () => {
  if (isSidebarOpen) {
    $('.sidebar').removeClass('open')
    $('.sidebar-back').removeClass('open')
    $('.content').removeClass('blur')
    isSidebarOpen = !isSidebarOpen
  } else {
    $('.sidebar').addClass('open')
    $('.sidebar-back').addClass('open')
    $('.content').addClass('blur')
    isSidebarOpen = !isSidebarOpen
  }
}
