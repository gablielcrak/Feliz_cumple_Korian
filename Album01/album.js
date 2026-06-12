document.querySelectorAll('.photo-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        alert(`✨ ¡Recordando un gran momento en la foto número ${index + 1}! ✨`);
    });
});