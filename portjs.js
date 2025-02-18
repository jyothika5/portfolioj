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
    // Select the inner container for profiles
    const profileContainer = document.querySelector('.profiles-container');
    // Get all the original profile cards
    const profile = Array.from(profileContainer.querySelectorAll('.platform'));
  
    // Clone each profile card to ensure a seamless loop
    profile.forEach(profile => {
      const clone = profile.cloneNode(true);
      profileContainer.appendChild(clone);
    });
  
    // Add class to start the marquee animation
    profileContainer.classList.add('in-view');
  });
