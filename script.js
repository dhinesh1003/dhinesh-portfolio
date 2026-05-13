
/* MOBILE MENU */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

/* EMAILJS */

emailjs.init("VPY7ex7D-jD6iJ2BB");

/* CONTACT FORM */

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    emailjs.send(

        "service_portf",
        "template_por",

        {
            from_name: document.getElementById('name').value,

            from_email: document.getElementById('email').value,

            subject: document.getElementById('subject').value,

            message: document.getElementById('message').value
        }

    )

    .then(function(){

        alert("Message Sent Successfully!");

        form.reset();

    })

    .catch(function(error){

        alert("Failed to Send Message");

        console.log(error);

    });

});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    console.log(window.scrollY);

    if(window.scrollY > 100){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
/* SCROLL REVEAL ANIMATION */

ScrollReveal({

    reset:false,

    distance:'80px',

    duration:2000,

    delay:200

});

/* HOME */

ScrollReveal().reveal('.home-content', {

    origin:'left'
});

ScrollReveal().reveal('.home-image', {

    origin:'right'
});

/* EDUCATION */

ScrollReveal().reveal('.education-box', {

    origin:'bottom',

    interval:200
});

/* SKILLS */

ScrollReveal().reveal('.skill-item', {

    origin:'bottom',

    interval:150
});

/* PROJECTS */

ScrollReveal().reveal('.project-card', {

    origin:'bottom',

    interval:200
});

/* CONTACT */

ScrollReveal().reveal('.contact-info', {

    origin:'left'
});

ScrollReveal().reveal('#contact-form', {

    origin:'right'
});

/* FOOTER */

ScrollReveal().reveal('.footer', {

    origin:'bottom'
});