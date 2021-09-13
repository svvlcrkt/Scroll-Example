// Element.getBoundingClientRect() method returns the size 
// of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns 
// the number of pixels the document has been scrolled vertically.

// ********* set date *********
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// new Date() creates a new date object with the current date and time
// getFullYear() method returns the year of the 
// specified date according to local time.



// ********* close links *********
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
navToggle.addEventListener('click',function(){
    // linksContainer.classList.toggle('show-links');
    // If we won't add or delete any item, we can use toggle or if-else. 
    // But if we will?
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight); //0, 300
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }   
})

// ********* fixed navbar and toplink *********
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){ //it doesn't have to be 500, this is a random number
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
})

// ********* smooth scroll ********* 
//select links 
//Let's make the texts appear when clicking the links under 800px
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    // console.log(link);
    
    link.addEventListener('click',function(e){
        // console.log(e.target);
        e.preventDefault(); //deleted previous version because we wanted to change it
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        // slice extracts a section of a string without modifying original string 
        // 1 means that the new array will start from index 1.
        // so the part after the # sign is taken.
        // console.log(id);
        const element = document.getElementById(id);  // jQuery??
        // const element = $(`#${id}`);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        // console.log(navHeight);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');  // returns true or false 
        let position = element.offsetTop - navHeight;
        // offsetTop - A number, representing the top position of the element, in pixels
        if(!fixedNav){  // if navbar not fixed
            position -= navHeight;
        }
        
        if(navHeight > 82){
            position += containerHeight;  // container closed so we must add containerHeight
        }
        window.scrollTo({
            // The scrollTo() method scrolls the document to the specified coordinates.
            left:0,
            top:position,
        })
        linksContainer.style.height = 0; //height is 0 after click event
    })
})