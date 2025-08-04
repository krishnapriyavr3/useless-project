// This file contains the main functionality for the application, including initialization and event handling.

document.addEventListener('DOMContentLoaded', () => {
    console.log('ObjectGram application initialized.');

    // Initialize event listeners for navigation
    initNavigation();
});

function initNavigation() {
    const loginLink = document.getElementById('login-link');
    const feedLink = document.getElementById('feed-link');
    const chatLink = document.getElementById('chat-link');
    const profileLink = document.getElementById('profile-link');

    if (loginLink) {
        loginLink.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    if (feedLink) {
        feedLink.addEventListener('click', () => {
            window.location.href = 'feed.html';
        });
    }

    if (chatLink) {
        chatLink.addEventListener('click', () => {
            window.location.href = 'chat.html';
        });
    }

    if (profileLink) {
        profileLink.addEventListener('click', () => {
            window.location.href = 'profile.html';
        });
    }
}