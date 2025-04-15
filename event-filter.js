document.addEventListener('DOMContentLoaded', function() {
    // Элементы управления фильтрацией
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('search-input');
    
    // Функция фильтрации проектов
    function filterProjects(filterValue, searchTerm = '') {
        projectCards.forEach(card => {
            const categoryMatch = filterValue === 'all' || card.getAttribute('data-category') === filterValue;
            const searchMatch = card.textContent.toLowerCase().includes(searchTerm.toLowerCase());
            
            if (categoryMatch && searchMatch) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Обработчики для кнопок фильтрации
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const searchTerm = searchInput ? searchInput.value.trim() : '';
            filterProjects(filterValue, searchTerm);
        });
    });
    
    // Обработчик для поиска
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const activeFilter = document.querySelector('.filter-btn.active');
            const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
            const searchTerm = this.value.trim();
            filterProjects(filterValue, searchTerm);
        });
    }
    
    // // Инициализация анимации карточек
    projectCards.forEach((card, index) => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 50);
    });
    
    // Активируем фильтр "Все проекты" по умолчанию
    const defaultFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (defaultFilter) {
        defaultFilter.click();
    }
});