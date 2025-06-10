  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

// Scroll vers section "Projets"
document.getElementById('scrollButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Apparition animée des projets et filtre par langage
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    document.getElementById('searchInput').addEventListener('input', function() {
        const filter = this.value.toUpperCase();
        cards.forEach(card => {
            const tags = card.querySelectorAll('.tags span');
            let show = [...tags].some(tag => tag.textContent.toUpperCase().includes(filter));
            card.style.display = show ? 'flex' : 'none';
        });
    });

    // Fermeture des popups
    document.querySelectorAll('.closePopup').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.popup').classList.add('hidden');
        });
    });
});

// Ouverture d'une popup spécifique
function openPopup(id) {
    document.getElementById(`popup-${id}`).classList.remove('hidden');
}

document.getElementById('btn-university').addEventListener('click', () => {
    document.getElementById('projects-university').classList.remove('hidden');
    document.getElementById('projects-professional').classList.add('hidden');
});

document.getElementById('btn-professional').addEventListener('click', () => {
    document.getElementById('projects-professional').classList.remove('hidden');
    document.getElementById('projects-university').classList.add('hidden');
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // On descend => cacher la navbar
        header.classList.add('hide');
    } else {
        // On monte => afficher la navbar
        header.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pour éviter valeurs négatives
});


document.querySelectorAll('.skill').forEach(skill => {
    const percentText = skill.querySelector('.skill-percentage').textContent.trim();
    const percentValue = parseInt(percentText);
    const progressBar = skill.querySelector('.skill-progress');
    if (progressBar && !isNaN(percentValue)) {
        // Démarre à 0
        progressBar.style.width = '0%';
        // Animation vers la largeur voulue
        setTimeout(() => {
            progressBar.style.width = percentValue + '%';
        }, 100);
    }
});

  function changeImage(button, direction) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll('.slider-image');
    let currentIndex = [...images].findIndex(img => !img.classList.contains('hidden'));

    images[currentIndex].classList.add('hidden');

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    images[newIndex].classList.remove('hidden');
  }
    function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }



  