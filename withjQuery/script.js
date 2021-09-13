// ********* set date *********
const date = $('#date');
date.text(new Date().getFullYear());

// ********* close links *********
const navToggle = $('.nav-toggle');
const linksContainer = $('.links-container');
const links = $('.links');
navToggle.click(function(){
    const containerHeight = linksContainer.get(0).getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight = links.get(0).getBoundingClientRect().height;
    // console.log(linksHeight);

    if(containerHeight === 0){
        linksContainer.css('height',`${linksHeight}px`);
    }
    else{
        linksContainer.css('height','0');
    }
})

// ********* fixed navbar and toplink *********
const navbar = $('#nav');
const topLink = $('.top-link');
$(window).scroll(function(){
    // console.log("27");
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.get(0).getBoundingClientRect().height;
    // console.log(navHeight);
    if(scrollHeight > navHeight){
        navbar.addClass('fixed-nav');
    }
    else{
        navbar.removeClass('fixed-nav');
    }
    
    if(scrollHeight > 500){
        topLink.addClass('show-link');
    }
    else{
        topLink.removeClass('show-link');
    }
})

// ********* smooth scroll ********* 
const scrollLinks = $('.scroll-link');
scrollLinks.on('click',function(e){
        e.preventDefault();
        // console.log(e);

        const id = e.currentTarget.getAttribute('href');

        const element = $(id);
        // console.log(element);
        const navHeight = navbar.get(0).getBoundingClientRect().height;
        // console.log(navHeight);
        const containerHeight = linksContainer.get(0).getBoundingClientRect().height;
        const fixedNav = navbar.hasClass('fixed-nav');
        // console.log(fixedNav);
        let position =  element.offset().top - navHeight;
        // console.log(position);

        if(!fixedNav){
            position -= navHeight;
        }
        if(navHeight > 82){
            position += containerHeight;
        }
        $(window).scrollTop(position);
        linksContainer.css('height','0');

})

