
function loadTheme() {
    // Get saved theme from localStorage (or use 'light' as default)
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the theme to the HTML element
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update the toggle switch if it exists (on settings page)
    const toggleSwitch = document.getElementById('theme-toggle');
    if (toggleSwitch) {
        toggleSwitch.checked = savedTheme === 'dark';
    }
}

// Function to change the theme
function setTheme(newTheme) {
    // Apply theme to HTML element
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to localStorage so it remembers next time
    localStorage.setItem('theme', newTheme);
    
    // Update toggle switch if it exists
    const toggleSwitch = document.getElementById('theme-toggle');
    if (toggleSwitch) {
        toggleSwitch.checked = newTheme === 'dark';
    }
}

// Function to toggle between light and dark
function toggleTheme() {
    // Get current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark'){
        newTheme = 'light'
    } else {
        newTheme = 'dark'
    }
    
    setTheme(newTheme);
}

// Function to set up the toggle switch (only runs on settings page)
function setupToggleSwitch() {
    const toggleSwitch = document.getElementById('theme-toggle');
    
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function(e) {
            // If checked = dark mode, if unchecked = light mode
            const newTheme = e.target.checked ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();        // Load saved theme
    setupToggleSwitch(); // Set up toggle switch if it exists
});
