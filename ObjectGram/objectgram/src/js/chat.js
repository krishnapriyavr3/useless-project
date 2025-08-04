// This file handles the chat functionality, including sending and receiving messages.

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Simulated chat messages for demonstration
let messages = [];

// Function to render messages in the chat
function renderMessages() {
    chatMessages.innerHTML = '';
    messages.forEach((message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    });
}

// Event listener for form submission
chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        messages.push(message);
        chatInput.value = '';
        renderMessages();
    }
});

// Simulated receiving messages (for demonstration purposes)
setInterval(() => {
    const simulatedMessage = `User ${Math.floor(Math.random() * 100)}: Hello!`;
    messages.push(simulatedMessage);
    renderMessages();
}, 5000); // New message every 5 seconds

renderMessages();