'use strict';

(function ($) {

    document.addEventListener('DOMContentLoaded', function() {
        const navToggle = document.getElementById('navToggle');
        const mainNav = document.getElementById('mainNav');
        
        if(navToggle && mainNav) {
            navToggle.addEventListener('click', function(e) {
                e.preventDefault(); 
                console.log('Toggle clicked'); 
                
                navToggle.classList.toggle('active');
                mainNav.classList.toggle('active');
            });
            
            const navLinks = mainNav.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                });
            });
        } else {
            console.error('Navigation elements not found');
        }
    });

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");


        
        /*------------------
            Team Member Cards
        --------------------*/
        const teamMembers = [
            { name: "Goushal K", title: "?!?!?!", handle: "JellyBean",  avatarUrl: "img/team/goushal.jpg", website: "https://jelly-b.online" },
            { name: "Elavarasan T", title: "Reverse Engineer", handle: "HexPh4r40h", avatarUrl: "https://pharoah.in.net/assests/images/favicon.png", website: "https://www.pharoah.in.net" },
            { name: "Harish K P", title: "Manifesting Android Pentesting, IoT Pentesting", handle: "H4R15H",  avatarUrl: "img/team/harish.jpg", website: "https://github.com/harish-pushan" },
            { name: "Arjun B", title: "Web, OSINT, Stegnography ", handle: "BLU3KY", avatarUrl: "img/team/arjun.jpg", website: "https://blueky.in.net" },
            { name: "Nithila Rajeshkumar", title: "Web Exploitation, Stegnography", handle: "LUNA",  avatarUrl: "img/team/nithila.jpg", website: "https://nila.in.net" },
            { name: "Lakshitha", title: "Forensics & Crypto", handle: "L4K1", avatarUrl: "img/team/lakshitha.jpg", website: "https://github.com/Lakshitha-01" },
            { name: "Padmesh", title: "Full Stack Developer", handle: "DuDu", avatarUrl: "img/team/padmesh.jpg", website: "https://github.com/PadmeshSs" },
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
    

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
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