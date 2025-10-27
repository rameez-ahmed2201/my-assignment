document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('mainContent');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal1 = document.getElementById('modal1');
    const modal2A = document.getElementById('modal2A'); // Option A result
    const modal2B = document.getElementById('modal2B'); // Option B result
    const button1A = document.getElementById('button1A');
    const button1B = document.getElementById('button1B');
    const closeButtons = document.querySelectorAll('.close-btn');

    // 1. Loader Logic
    // Show the loader for 3 seconds, then show the content and pop-up.
    setTimeout(() => {
        // Hide the loader
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500); // 500ms transition time

        // Show the main content and first pop-up
        mainContent.classList.remove('hidden');
        modalOverlay.classList.remove('hidden');
        modal1.classList.remove('hidden');
    }, 3000); // Display loader for 3 seconds (adjust as needed)

    // 2. Pop-up Logic - Option A Click
    button1A.addEventListener('click', () => {
        modal1.classList.add('hidden');
        modal2A.classList.remove('hidden');
    });

    // 3. Pop-up Logic - Option B Click
    button1B.addEventListener('click', () => {
        modal1.classList.add('hidden');
        modal2B.classList.remove('hidden');
    });

    // 4. Pop-up Logic - Close/Continue Button
    // This button appears on the final pop-ups (modal2A and modal2B)
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalOverlay.classList.add('hidden');
        });
    });
});