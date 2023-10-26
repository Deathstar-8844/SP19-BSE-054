const faqElements = document.querySelectorAll('.faq');

faqElements.forEach(faqElement => {
  faqElement.addEventListener('click', () => {
    faqElement.classList.toggle('active');
  });

  const button = faqElement.querySelector('.faq-toggle');
  button.addEventListener('click', () => {
    faqElement.remove();
  });
});

const faqForm = document.getElementById('faq-form');

faqForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const questionInput = document.getElementById('question');
  const answerInput = document.getElementById('answer');
  const question = questionInput.value;
  const answer = answerInput.value;

  const newFaq = document.createElement('div');
  newFaq.className = 'faq active';
  newFaq.innerHTML = `
    <h3 class="faq-title">${question}</h3>
    <p class="faq-text">${answer}</p>
    <button class="faq-toggle">
      <i class="fas fa-chevron-down"></i>
      <i class="fas fa-times"></i>
    </button>
  `;

  const faqContainer = document.querySelector('.faq-container');
  faqContainer.appendChild(newFaq);

  questionInput.value = '';
  answerInput.value = '';
});