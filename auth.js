// Form switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const formToggles = document.querySelectorAll('.form-toggle');
    const formContents = document.querySelectorAll('.auth-form-content');

    formToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Remove active class from all toggles
            formToggles.forEach(t => t.classList.remove('active'));
            // Add active class to clicked toggle
            toggle.classList.add('active');
            
            // Hide all form contents
            formContents.forEach(content => content.classList.remove('active'));
            
            // Show the selected form content
            const formId = toggle.dataset.form;
            document.getElementById(`${formId}Form`).classList.add('active');
        });
    });

    // Add basic form validation
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically make an API call to your backend
        console.log('Login form submitted:', {
            email: loginForm.email.value,
            password: loginForm.password.value
        });
        // Add your login logic here
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically make an API call to your backend
        console.log('Signup form submitted:', {
            name: signupForm.name.value,
            email: signupForm.email.value,
            password: signupForm.password.value
        });
        // Add your signup logic here
    });
});
