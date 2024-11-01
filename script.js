const toggles = document.querySelectorAll('.arrow, .arrow1, .arrow2, .arrow3, .arrow4');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const containerId = toggle.id.replace('toggleArrow', 'checkboxContainer');
        const container = document.getElementById(containerId);
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
            toggle.classList.remove('down');
            toggle.classList.add('up'); 
        } else {
            container.style.display = 'none';
            toggle.classList.remove('up');
            toggle.classList.add('down'); 
        }
    });
});

