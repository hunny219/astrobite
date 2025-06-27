document.addEventListener('DOMContentLoaded', function() {

    // DOM Elements

    const exploreBtn = document.getElementById('exploreBtn');

    const landingPage = document.getElementById('landing');

    const showroom = document.getElementById('showroom');

    const backToTop = document.getElementById('backToTop');

    

    // Initialize the showroom as hidden

    showroom.style.display = 'none';

    showroom.style.opacity = '0';

    

    // Explore Button Click Handler - FIXED VERSION

    exploreBtn.addEventListener('click', function(e) {

        e.preventDefault();

        

        // First make the showroom visible but still transparent

        showroom.style.display = 'block';

        showroom.style.opacity = '0';

        

        // Then fade in the showroom

        setTimeout(() => {

            showroom.style.opacity = '1';

            showroom.style.transition = 'opacity 0.8s ease';

            

            // Scroll to showroom after a slight delay

            setTimeout(() => {

                showroom.scrollIntoView({ behavior: 'smooth' });

            }, 300);

        }, 10);

        

        // Fade out the landing page after showroom starts appearing

        setTimeout(() => {

            landingPage.style.opacity = '0';

            landingPage.style.transition = 'opacity 0.8s ease';

            

            // Hide landing page after fade completes

            setTimeout(() => {

                landingPage.style.display = 'none';

            }, 800);

        }, 300);

    });

    

    // Back to top button functionality

    window.addEventListener('scroll', function() {

        if (window.pageYOffset > 300) {

            backToTop.classList.add('visible');

        } else {

            backToTop.classList.remove('visible');

        }

    });

    

    backToTop.addEventListener('click', function() {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });

    

    // Card hover effects

    const cards = document.querySelectorAll('.showroom-card');

    

    cards.forEach(card => {

        card.addEventListener('mousemove', function(e) {

            const x = e.clientX - e.target.getBoundingClientRect().left;

            const y = e.clientY - e.target.getBoundingClientRect().top;

            

            const centerX = this.offsetWidth / 2;

            const centerY = this.offsetHeight / 2;

            

            const angleX = (y - centerY) / 10;

            const angleY = (centerX - x) / 10;

            

            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px) scale(1.02)`;

            

            // Glare effect

            const glare = this.querySelector('.card-glare');

            glare.style.background = `linear-gradient(${Math.atan2(y - centerY, x - centerX) * 180 / Math.PI + 90}deg, transparent, rgba(255, 255, 255, 0.1), transparent)`;

        });

        

        card.addEventListener('mouseleave', function() {

            this.style.transform = 'translateY(-10px) scale(1.02)';

        });

    });

    

    // Parallax effect for stars

    window.addEventListener('scroll', function() {

        const scrollPosition = window.pageYOffset;

        const stars = document.querySelector('.stars');

        const twinkling = document.querySelector('.twinkling');

        

        stars.style.transform = `translateY(${scrollPosition * 0.3}px)`;

        twinkling.style.transform = `translateY(${scrollPosition * 0.2}px)`;

    });

    

    // Add ripple effect to buttons

    const buttons = document.querySelectorAll('button');

    

    buttons.forEach(button => {

        button.addEventListener('click', function(e) {

            const x = e.clientX - e.target.getBoundingClientRect().left;

            const y = e.clientY - e.target.getBoundingClientRect().top;

            

            const ripple = document.createElement('span');

            ripple.classList.add('ripple');

            ripple.style.left = `${x}px`;

            ripple.style.top = `${y}px`;

            

            this.appendChild(ripple);

            

            setTimeout(() => {

                ripple.remove();

            }, 1000);

        });

    });

    

    // Add CSS for ripple effect

    const style = document.createElement('style');

    style.textContent = `

        .ripple {

            position: absolute;

            transform: translate(-50%, -50%);

            width: 10px;

            height: 10px;

            border-radius: 50%;

            background: rgba(255, 255, 255, 0.4);

            animation: rippleEffect 1s linear;

            pointer-events: none;

        }

        

        @keyframes rippleEffect {

            0% {

                width: 10px;

                height: 10px;

                opacity: 1;

            }

            100% {

                width: 300px;

                height: 300px;

                opacity: 0;

            }

        }

    `;

    document.head.appendChild(style);

});