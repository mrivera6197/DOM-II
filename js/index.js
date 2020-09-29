// Your code goes here

//1. mouseover: title color/fontWeight change 

let headerContainer = document.querySelector('.logo-heading')

headerContainer.addEventListener('mouseover', () => {
    headerContainer.style.color = '#8dbac2'
    headerContainer.style.fontWeight = 'bold' 
})

//2. click: button textcontent 

let button = document.querySelector('.btn')

button.addEventListener('click', (event) => {
    button.innerHTML = 'WOHOO'
})

//3. keydown: reset with Escape key 

document.addEventListener('keydown', function (event) {
    if(event.key === 'Escape'){
        headerContainer.style.background = 'white'
        title.style.fontWeight = 'normal' 
        button.innerHTML = 'Sign Me Up!'
    }
})

//4. scroll: to bottom of page 

window.addEventListener('scroll', () => {
    if (window.scrollY === 1234){
        console.log('user scrolled the whole page!')
        alert('Congrats! You\'ve scrolled to the bottom!')
    }
})

//5. load: change text backgorund 

let textContent = document.querySelector('.text-content')

window.addEventListener('load', () => {
    textContent.style.background = '#d3e8d9'
})

//6. dblclick color/width change

let contentSection = document.querySelector('.content-destination')

contentSection.addEventListener('dblclick', () => {
    contentSection.style.padding = '5%'
    contentSection.style.background = '#d3e8d9'
})

//7. copy: text to uppercase 

let text = document.querySelector('p')

text.addEventListener('copy', (event) => {
    let selection = document.getSelection()
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault()
})

//8. mouseenter: text color change 

let expeditionText = document.querySelector('.destination')

expeditionText.addEventListener('mouseenter', () => {
    expeditionText.style.color = '#5820c7'
})

//9. mouseleave: text color change

expeditionText.addEventListener('mouseleave', () => {
    expeditionText.style.color = 'black'
})

//10. 



//nav link prevent re-load

let navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault()
        element.style.color = 'green'
        })
})

