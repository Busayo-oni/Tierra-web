const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const triggerButton = document.getElementById('trigger');
const firstSetItems = document.querySelectorAll('.visible');
const secondSetItems = document.querySelectorAll('.hidden');


menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});



// Function to handle the replacement of grid items
triggerButton.addEventListener('click', () => {
    // Scroll out the first set of items
    firstSetItems.forEach(item => {
        item.classList.add('scroll-out');
    });
    
    // Wait for 1 second (same as the transition time) before scrolling in the second set
    setTimeout(() => {
        // Hide the first set by removing the visible class
        firstSetItems.forEach(item => {
            item.classList.remove('visible');
            item.classList.add('hidden', 'scroll-out');
        });
        
        // Scroll in the second set of items
        secondSetItems.forEach(item => {
            item.classList.remove('hidden');
            item.classList.add('visible', 'scroll-in');
        });
    }, 1000);  // The timeout matches the scroll-out animation duration
});
