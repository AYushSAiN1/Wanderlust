const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');
const passwordStrengthText = document.getElementById('passwordStrength');

// Toggle password visibility
togglePasswordButton.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.querySelector('i').classList.toggle('bi-eye-slash');
    this.querySelector('i').classList.toggle('bi-eye');
});

// Update password strength meter
passwordInput.addEventListener('input', function() {
    const strength = calculatePasswordStrength(this.value);
    passwordStrengthText.textContent = `Password Strength: ${strength}`;
});

// Function to calculate password strength
function calculatePasswordStrength(password) {
// Regular expressions to check for at least one number and one capital letter
const hasNumber = /\d/.test(password);
const hasCapital = /[A-Z]/.test(password);

// Check if password meets minimum length requirement
const hasMinLength = password.length >= 6;

// Determine password strength based on criteria
if (hasNumber && hasCapital && hasMinLength) {
return 'Strong';
} else {
return 'Weak';
}
}