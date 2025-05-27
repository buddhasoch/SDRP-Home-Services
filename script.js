document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active');
    });

    // Toggle Pest Control Services
    function togglePestControl() {
        const details = document.getElementById('pest-control-details');
        details.classList.toggle('active');
    }

    // Attach togglePestControl to Pest Control box
    document.querySelector('.service-box[onclick="togglePestControl()"]').addEventListener('click', togglePestControl);

    // Form Submission Confirmation (Optional)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        // Let Formspree handle the submission, but show a message after
        setTimeout(() => {
            alert('Thank you for your booking! We will get back to you soon.');
            form.reset(); // Reset the form after submission
        }, 1000); // Delay to ensure Formspree submission completes
    });
});