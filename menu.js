const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        var subject = encodeURIComponent('Portfolio Contact Form: ' + name);
        var body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Message:\n' + message
        );
        window.location.href = 'mailto:vdharshini185@gmail.com?subject=' + subject + '&body=' + body;
    });