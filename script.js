const faqButtons = document.querySelectorAll('.question');
const slider = document.querySelector('.trending-list');
const prevBtn = document.querySelector('.arrow.left');
const nextBtn = document.querySelector('.arrow.right');
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.answer');
    const icon = button.querySelector('.icon');
    const isOpen = answer.classList.toggle('open');
    icon.textContent = isOpen ? '✕' : '+';
  });
});

if (slider && prevBtn && nextBtn) {
  const scrollDistance = 260;

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollDistance, behavior: 'smooth' });
  });
}

if (emailForm && emailInput) {
  emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      emailInput.focus();
      return;
    }

    alert(`Thanks for joining! A confirmation was sent to ${email}.`);
    emailInput.value = '';
  });
}

function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
