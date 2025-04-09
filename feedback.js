document.querySelector('.feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваше обращение отправлено. Спасибо за обратную связь!');
    this.reset();
});