// Menubar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
} 

// Navbar

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

// Scroll Reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projetos-box, .contato form', {origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .sobre-img', {origin: 'left' });
ScrollReveal().reveal('home-contact p, .sobre-content', {origin: 'right' });

// Typed JS

const typed = new Typed('.multiple-text', {
    strings: ['Estudante de Programação', 'Estagiário em TI'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})

// Envio de e-mail via EmailJS

emailjs.init('mwZAB8xuor4DOKiZb');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = {
        to_name: this.to_name.value,
        from_email: this.from_email.value,
        phone_number: this.phone_number.value,
        subject: this.subject.value,
        message: this.message.value
    };

    emailjs.send('service_0zbo2ho', 'template_ja9crxo', formData)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
            alert('E-mail enviado com sucesso!');
            document.getElementById('contact-form').reset(); 
        }, function(error) {
            console.log('Erro ao enviar o e-mail:', error);
            alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        });
});
