// This file handles the login functionality, including form validation and user authentication.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const forgotBtn = document.getElementById('forgotBtn');
    const manageBtn = document.getElementById('manageBtn');

    // Default users
    const defaultUsers = [
        { username: 'testUser', password: 'testPassword' },
        { username: 'apple', password: 'fruit123' },
        { username: 'banana', password: 'yellowpeel' },
        { username: 'chair', password: 'sitdown' },
        { username: 'lamp', password: 'brightlight' },
        { username: 'table', password: 'flatwood' },
        { username: 'spoon', password: 'soupbuddy' },
        { username: 'pillow', password: 'softsleep' },
        { username: 'clock', password: 'ticktock' },
        { username: 'book', password: 'readme' },
        { username: 'pen', password: 'writeon' },
        { username: 'cup', password: 'drinkup' },
        { username: 'phone', password: 'ringring' },
        { username: 'shoe', password: 'walkme' },
        { username: 'sock', password: 'footwarm' },
        { username: 'bottle', password: 'waterme' },
        { username: 'mouse', password: 'clicker' },
        { username: 'keyboard', password: 'typetype' },
        { username: 'monitor', password: 'lookatme' },
        { username: 'door', password: 'openme' },
        { username: 'window', password: 'seethru' }
    ];

    // Load users from localStorage or set defaults
    function getUsers() {
        const users = localStorage.getItem('objectgramUsers');
        return users ? JSON.parse(users) : defaultUsers;
    }

    function setUsers(users) {
        localStorage.setItem('objectgramUsers', JSON.stringify(users));
    }

    // Save default users if not present
    if (!localStorage.getItem('objectgramUsers')) {
        setUsers(defaultUsers);
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateForm(username, password)) {
            authenticateUser(username, password);
        }
    });

    function validateForm(username, password) {
        if (username === '' || password === '') {
            errorMessage.textContent = 'Username and password cannot be empty.';
            return false;
        }
        return true;
    }

    function authenticateUser(username, password) {
        const users = getUsers();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            window.location.href = 'feed.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    }

    // Forgot password functionality
    if (forgotBtn) {
        forgotBtn.addEventListener('click', function() {
            const username = prompt('Enter your username:');
            if (!username) return;
            const users = getUsers();
            const user = users.find(u => u.username === username);
            if (user) {
                alert('Your password is: ' + user.password);
            } else {
                alert('User not found!');
            }
        });
    }

    // Manage accounts (add/remove)
    if (manageBtn) {
        manageBtn.addEventListener('click', function() {
            const action = prompt('Type "add" to add user or "remove" to remove user:');
            if (action === 'add') {
                const newUser = prompt('Enter new username:');
                const newPass = prompt('Enter new password:');
                if (newUser && newPass) {
                    let users = getUsers();
                    if (users.find(u => u.username === newUser)) {
                        alert('User already exists!');
                        return;
                    }
                    users.push({ username: newUser, password: newPass });
                    setUsers(users);
                    alert('User added!');
                }
            } else if (action === 'remove') {
                const delUser = prompt('Enter username to remove:');
                let users = getUsers();
                const idx = users.findIndex(u => u.username === delUser);
                if (idx !== -1) {
                    users.splice(idx, 1);
                    setUsers(users);
                    alert('User removed!');
                } else {
                    alert('User not found!');
                }
            }
        });
    }
});