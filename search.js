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
