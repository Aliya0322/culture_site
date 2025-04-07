document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
  
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
  
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === target) content.classList.add('active');
      });
    });
  });
  
  function filterByYear(year) {
    const buttons = document.querySelectorAll('.year-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.year-btn[onclick*="${year}"]`).classList.add('active');
  
    const events = document.querySelectorAll('#past-events .card');
    events.forEach(event => {
      const eventYear = event.getAttribute('data-year');
      if (year === 'all' || eventYear === year) {
        event.style.display = 'block';
      } else {
        event.style.display = 'none';
      }
    });
  }