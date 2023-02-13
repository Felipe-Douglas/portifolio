//Fixed Menu
var nav = $('.nav-bar');
$(document).on("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY >= 10) {
        nav.addClass('nav-fixed');
    } else {
        nav.removeClass('nav-fixed');
    }
});

// Scroll
$('nav a').click(function (item) {
    item.preventDefault();

    var id = $(this).attr('href');
    targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 400);
});

// Biblioteca de digitaçã
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".profile-skills", {
        loop: true,
    })
    .type("Desenvolvedor Fullstack", {delay: 800}).delete(9)
    .type("Web", {delay: 800}).delete(3)
    .type("Mobile", {delay: 800}).delete(20)
    .go();
});
