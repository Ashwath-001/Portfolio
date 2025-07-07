/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

       // Mobile Menu Toggle - Fixed Version
    document.addEventListener('DOMContentLoaded', function() {
        const navToggle = document.getElementById('navToggle');
        const mainNav = document.getElementById('mainNav');
        
        if(navToggle && mainNav) {
            // Add click event directly
            navToggle.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default behavior
                console.log('Toggle clicked'); // For debugging
                
                // Toggle active classes
                navToggle.classList.toggle('active');
                mainNav.classList.toggle('active');
            });
            
            // Close menu when clicking on a nav link
            const navLinks = mainNav.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                });
            });
        } else {
            console.error('Navigation elements not found'); // For debugging
        }
    });

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
        
        /*------------------
            Team Member Cards
        --------------------*/
        const teamMembers = [
            { name: "Goushal K", title: "CTF Player", handle: "Jelly Bean",  avatarUrl: "img/team/goushal.jpg", website: "https://github.com/goushalk" },
            { name: "Harish K P", title: "CTF Player", handle: "H4R15H",  avatarUrl: "img/team/harish.jpg", website: "https://github.com/goushalk" },
            { name: "Elavarasan T", title: "CTF player", handle: "Pharoah", avatarUrl: "img/team/jaswanth.jpg", website: "https://www.pharoah.in.net" },
            { name: "Arjun B", title: "CTF player", handle: "Bluekyyyy", avatarUrl: "img/team/arjun.jpg", website: "https://bluekyyyy.github.io" },
            { name: "Nithila Rajeshkumar", title: "CTF player", handle: "Luna",  avatarUrl: "img/team/nithila.jpg", website: "https://github.com/" },
            { name: "Lakshitha", title: "Develeoper", handle: "Laki", avatarUrl: "img/team/lakshitha.jpg", website: "https://github.com/goushalk" },
            { name: "Padmesh", title: "Full Stack", handle: "Padmesh", avatarUrl: "img/team/padmesh.jpg", website: "https://github.com/goushalk" },
        ];

        function createProfileCard(member) {
          const card = document.createElement('div');
          card.className = 'reactbits-profile-card';
          card.onclick = () => window.open(member.website, '_blank');

          const avatar = document.createElement('img');
          avatar.className = 'reactbits-profile-avatar';
          avatar.src = member.avatarUrl;
          avatar.alt = member.name;

          const name = document.createElement('div');
          name.className = 'reactbits-profile-name';
          name.textContent = member.name;

          const title = document.createElement('div');
          title.className = 'reactbits-profile-title';
          title.textContent = member.title;

          const handle = document.createElement('div');
          handle.className = 'reactbits-profile-handle';
          handle.textContent =  member.handle;

          card.appendChild(avatar);
          card.appendChild(name);
          card.appendChild(handle);
          card.appendChild(title);
          return card;
        }

        const container = document.getElementById('react-team-cards');
        if (container) {
            container.innerHTML = '';
            const wrap = document.createElement('div');
            wrap.className = 'reactbits-team-cards-wrap';
            teamMembers.forEach(member => {
                wrap.appendChild(createProfileCard(member));
            });
            container.appendChild(wrap);
            console.log('Team cards created successfully');
        } else {
            console.error('Team container #react-team-cards not found');
        }
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
        Hero Slider
    --------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });


 

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create JSON object from form data
            const formData = new FormData(form);
            const jsonData = {};
            formData.forEach((value, key) => {
                jsonData[key] = value;
            });
            
            fetch('https://formspree.io/f/mrbkweqw', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(data => {
                formStatus.innerHTML = '<p style="color: #00bfe7;">Message sent successfully!</p>';
                form.reset();
            })
            .catch(error => {
                formStatus.innerHTML = '<p style="color: #ff6b6b;">Something went wrong. Please try again.</p>';
                console.error('Error:', error);
            });
        });
    }
});