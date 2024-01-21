/// <reference types="../@types/jquery" />

const link = $('.side-nav-links a');
const sideIcon = $('.side-navbar-icon');
const sideNavBar = $('.side-navbar');
const closeNavbar = $('.icon-clear');
const homeContent = $('.home-content');
const singerHeader = $('.singer-header');
const message = $('#message');
const charCounter = $('#charCounter');
const showDays = $('#showDays');
const showHours = $('#showHours');
const showMinutes = $('#showMinutes');
const showSeconds = $('#showSeconds');
let days,hours,minutes,seconds;
let countDownDate = new Date("feb 29, 2024 16:37:52").getTime();
const maxLength = 100;
let flag = false;

// scroll behavior animation
link.on('click',function(e){
    let href = $(e.target).attr('href');
    let activeLinkOffset = $(href).offset().top;
    $('body,html').animate({scrollTop:activeLinkOffset},2000);
});


//show navbar
sideIcon.on('click',function(){
    if(flag == false){
        let sideNavBarWidth = sideNavBar.outerWidth();
        sideNavBar.css('left','0');
        sideIcon.css('left',`${sideNavBarWidth+10}px`);
        homeContent.css('marginLeft',`${sideNavBarWidth+15}px`);
        flag = true;
    }else{
        let sideNavBarWidth = sideNavBar.outerWidth();
        sideNavBar.css('left',`-${sideNavBarWidth}%`);
        sideIcon.css('left','10px');
        homeContent.css('marginLeft',`0`);
        flag = false;
    }
    
});

//hide navbar
closeNavbar.on('click',function(){
    let sideNavBarWidth = sideNavBar.outerWidth();
    sideNavBar.css('left',`-${sideNavBarWidth}%`);
    sideIcon.css('left','10px');
    homeContent.css('marginLeft',`0`);
    flag = false;
});

//animation on singer card
singerHeader.on('click',function(){
    $(this).siblings('h3').next().css({'display':'none'})
    let nextDiv = $(this).next();
    nextDiv.slideToggle(500);
});

// function to count down the time for the event
let myfunc = setInterval(function() {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    showDays.html(`${days} <span>D</span>`);
    showHours.html(`${hours} <span>h</span>`);
    showMinutes.html(`${minutes} <span>m</span>`);
    showSeconds.html(`${seconds} <span>s</span>`);
}, 1000)

//show the max length for message
charCounter.html(`${maxLength}`)
//count down and alart message
message.on('keyup',function(){
    let messageInput = message.val();
    if(maxLength-messageInput.length >0){
        charCounter.html(`${maxLength-messageInput.length}`);
    }
    else{
        charCounter.html(`your available character finished`);
    }
});

