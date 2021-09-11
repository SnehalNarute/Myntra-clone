const navslide = () => {
    const nav__toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.links');
    const navLi = document.querySelectorAll('.links li')

    // toggle nav
    nav__toggle.addEventListener('click', () => {
        links.classList.toggle('nav-active');

        // animate links
        navLi.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        // nav__toggle animation
        nav__toggle.classList.toggle('toggle');
    });

}
navslide();

// ------------------------ slider javascript ------------------------
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
    }, 5000);