document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuIcon = document.getElementById('menu-icon');
    let navBarOpen = false;

    menuButton.addEventListener('click', () => {
        navBarOpen = !navBarOpen;
        if (navBarOpen) {
            menuOverlay.classList.remove('hidden');
            menuIcon.innerHTML = `
                <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;
        } else {
            menuOverlay.classList.add('hidden');
            menuIcon.innerHTML = `
                <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            `;
        }
    });
});

function sendWhatsAppMessage() {
    const phoneNumber = '+447895044878';
    const message = 'Hello, I would like to sell my phone.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}