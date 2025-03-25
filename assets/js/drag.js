let draggedBox = null;

const boxes = document.querySelectorAll('.part');

boxes.forEach(box => {
    box.addEventListener('mousedown', (e) => {
        draggedBox = box;
        box.classList.add('highlight');
    });

    box.addEventListener('mouseup', () => {
        if (draggedBox) {
            draggedBox.classList.remove('highlight');
            draggedBox = null;
        }
    });

    box.addEventListener('mouseenter', () => {
        if (draggedBox && draggedBox !== box) {

            const tempContent = box.innerHTML;
            box.innerHTML = draggedBox.innerHTML;
            draggedBox.innerHTML = tempContent;

            draggedBox.classList.remove('highlight');
            draggedBox = null;

            draggedBox = box;
            box.classList.add('highlight');
        }   
    });
});

document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});