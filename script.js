// menu toggle functionality
const ic_menu = document.querySelector('header>a')

let isMenuOpen = false

ic_menu.onclick = () => {
  if (isMenuOpen) {
    // window.alert('closing')
    $('nav').slideUp()
    isMenuOpen = false
  } else {
    // window.alert('opening')
    $('nav').css('display', 'flex')
    $('nav').slideDown()
    isMenuOpen = true
  }
}