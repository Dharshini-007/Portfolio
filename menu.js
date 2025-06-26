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

const wave = document.getElementById('wavePath');
let t = 0;
function animateWave() {
  t += 0.02;
  const amplitude = 40;
  const freq = 2;
  const y1 = 160 + Math.sin(t) * amplitude;
  const y2 = 320 + Math.cos(t * freq) * amplitude;
  const y3 = 0 + Math.sin(t * 1.5) * amplitude;
  const y4 = 160 + Math.cos(t * 0.7) * amplitude;
  wave.setAttribute('d', `M0,${y1} C480,${y2} 960,${y3} 1440,${y4} L1440,320 L0,320 Z`);
  requestAnimationFrame(animateWave);
}
animateWave();

const sparkleContainer = document.querySelector('.background-sparkles');
for (let i = 0; i < 30; i++) {
  const s = document.createElement('span');
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = Math.random() * 100 + 'vh';
  s.style.animationDelay = (Math.random() * 8) + 's';
  sparkleContainer.appendChild(s);
}