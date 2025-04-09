document.querySelector('.search-button').addEventListener('click', function(e) {
    e.preventDefault();
    const container = document.getElementById('search-container');
    const input = document.getElementById('search-input');

    container.classList.toggle('active');

    if (container.classList.contains('active')) {
        input.focus();
    } else {
        input.value = '';
        document.querySelectorAll('.searchable').forEach(el => el.style.display = 'block');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchWrapper = document.querySelector('.search-wrapper');
    const whatsappButton = document.getElementById('whatsapp-button');

    searchButton.addEventListener('click', function (e) {
      e.preventDefault();

      // Toggle active state
      searchWrapper.classList.toggle('active');
      searchButton.classList.toggle('moved');
      whatsappButton.classList.toggle('hidden');
    });
  });

