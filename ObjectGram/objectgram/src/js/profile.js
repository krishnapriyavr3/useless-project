// This file manages profile editing, including updating posts, bios, and settings.

document.addEventListener('DOMContentLoaded', function() {
    const editProfileForm = document.getElementById('editProfileForm');
    const updateButton = document.getElementById('updateButton');
    const bioInput = document.getElementById('bioInput');
    const postsContainer = document.getElementById('postsContainer');

    // Load user profile data
    function loadUserProfile() {
        // Simulated user data
        const userProfile = {
            username: 'object_lover',
            bio: 'I love sharing my thoughts!',
            posts: [
                { id: 1, content: 'Just got a new plant!' },
                { id: 2, content: 'My favorite mug!' }
            ]
        };

        document.getElementById('usernameDisplay').innerText = userProfile.username;
        bioInput.value = userProfile.bio;

        userProfile.posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p>${post.content}</p>
                <button class="deletePostButton" data-id="${post.id}">Delete</button>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Update user profile
    updateButton.addEventListener('click', function(event) {
        event.preventDefault();
        const updatedBio = bioInput.value;
        // Here you would typically send the updated bio to the server
        console.log('Updated bio:', updatedBio);
        alert('Profile updated successfully!');
    });

    // Delete post functionality
    postsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('deletePostButton')) {
            const postId = event.target.getAttribute('data-id');
            // Here you would typically send a request to delete the post from the server
            console.log('Post deleted:', postId);
            event.target.parentElement.remove();
        }
    });

    loadUserProfile();
});