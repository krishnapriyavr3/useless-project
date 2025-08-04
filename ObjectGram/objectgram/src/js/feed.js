// This file manages the feed functionality, including posting, commenting, and story uploads.

document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postInput = document.getElementById('postInput');
    const feedContainer = document.getElementById('feedContainer');
    
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        createPost(postInput.value);
        postInput.value = '';
    });

    function createPost(content) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${content}</p>
            <button class="comment-btn">Comment</button>
            <div class="comments"></div>
        `;
        feedContainer.prepend(postElement);
        
        const commentButton = postElement.querySelector('.comment-btn');
        commentButton.addEventListener('click', function() {
            const comment = prompt('Enter your comment:');
            if (comment) {
                addComment(postElement.querySelector('.comments'), comment);
            }
        });
    }

    function addComment(commentsContainer, comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    }
    
    // Story upload functionality can be added here
});