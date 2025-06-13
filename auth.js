// Form switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const formToggles = document.querySelectorAll('.form-toggle');
    const formContents = document.querySelectorAll('.auth-form-content');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const signupName = document.getElementById('signupName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    // Check if user is already logged in
    const isAuthenticated = localStorage.getItem('user');
    if (isAuthenticated) {
        window.location.href = 'dashboard.html';
    }

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

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!loginEmail.value || !loginPassword.value) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate login (in a real app, this would be an API call)
        const user = {
            email: loginEmail.value,
            password: loginPassword.value
        };

        // Store user in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    });

    // Signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!signupName.value || !signupEmail.value || !signupPassword.value || !confirmPassword.value) {
            alert('Please fill in all fields');
            return;
        }
        
        if (signupPassword.value !== confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }

        // Simulate signup (in a real app, this would be an API call)
        const user = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        };

        // Store user in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    });

    // Add form validation
    [loginEmail, loginPassword, signupName, signupEmail, signupPassword, confirmPassword].forEach(input => {
        input.addEventListener('input', () => {
            input.setCustomValidity('');
        });
    });
});
