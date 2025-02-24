document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
    function activateLink() {
        let scrollY = window.scrollY;
        let activeSet = false;

        sections.forEach((section) => {
            let sectionHeight = section.offsetHeight;
            let sectionTop = section.offsetTop - 50;
            let sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(sectionId)) {
                        link.classList.add("active");
                        activeSet = true;
                    }
                });
            }
        });

     
        if (!activeSet) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document.querySelector('.navbar a[href="#home"]').classList.add("active");
        }
    }

    window.addEventListener("scroll", activateLink);
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    activateLink();
});


document.addEventListener('DOMContentLoaded', function () {
    const profileContainer = document.querySelector('.profiles-container');
    const profile = Array.from(profileContainer.querySelectorAll('.platform'));
  
    profile.forEach(profile => {
      const clone = profile.cloneNode(true);
      profileContainer.appendChild(clone);
    });
  
    // Add class to start the marquee animation
    profileContainer.classList.add('in-view');
  });

  
  let menuIcon=document.querySelector('#menu-icon');
  let navbar =document.querySelector('.navbar');
  menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
  }

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
  });
  }

  let header=document.querySelector('.header');
  header.classList.toggle('sticky',window.scrollY>100);

  let menuIcon = document.querySelector('#menu-icon');
  let nav = document.querySelector('.navbar');
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    nav.classList.toggle('active');
  }

  

  