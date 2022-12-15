const iconButton = document.querySelector('.toggle-btn')
const headerList = document.querySelector('.main-header')
const overlay = document.querySelector('.overlay')

iconButton.addEventListener('click',function(){
    iconButton.classList.toggle('open')
    headerList.classList.toggle('open')
    overlay.classList.toggle('open')
})