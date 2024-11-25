// Get all menu buttons and content items
const buttons = document.querySelectorAll('.menu-btn');
const contentItems = document.querySelectorAll('.content-item');

// Add click event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        // Hide all content items
        contentItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Show the selected content
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
