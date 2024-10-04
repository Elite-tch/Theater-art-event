AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const megaMenu = document.getElementById('mega-menu-full');
  const links = document.querySelectorAll('.link'); // 
  menuToggle.addEventListener('click', function () {
    megaMenu.classList.toggle('hidden');
  });

  
  links.forEach(link => {
    link.addEventListener('click', function () {
      if (!megaMenu.classList.contains('hidden')) {
        megaMenu.classList.add('hidden');
      }
    });
  });
});







        
        const targetDate = new Date("October 31, 2024 23:59:59").getTime();

        const countdownFunction = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            
            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

           
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.querySelector("h1").innerText = "Countdown Ended!";
                document.querySelector(".flex").innerHTML = '';
            }
        }, 1000);
        
        
        
        const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  },
  breakpoints: {
    320: {
      slidesPerView: 1, 
      spaceBetween: 10, 
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
     1440: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});



  
      
 
