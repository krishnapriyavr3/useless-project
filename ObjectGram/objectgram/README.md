# ObjectGram

ObjectGram is a social media platform designed for inanimate objects, allowing users to connect, share, and interact in a fun and engaging way. This README provides an overview of the project, its features, and setup instructions.

## Features

- **User Authentication**: Users can log in with their username and password, with options for account management and password recovery.
- **Feed**: A dynamic feed where users can share posts, comment on others' posts, and upload stories.
- **Chat**: Real-time chat functionality for users to interact simultaneously.
- **Profile Management**: Users can edit their profiles, update bios, manage posts, and access settings.

## Project Structure

```
objectgram
├── src
│   ├── index.html          # Main entry point of the application
│   ├── login.html          # User login page
│   ├── feed.html           # Feed for sharing posts
│   ├── chat.html           # Chat interface
│   ├── profile.html        # Profile management page
│   ├── css
│   │   ├── style.css       # General styles
│   │   ├── login.css       # Styles for login page
│   │   ├── feed.css        # Styles for feed page
│   │   ├── chat.css        # Styles for chat page
│   │   └── profile.css     # Styles for profile page
│   ├── js
│   │   ├── main.js         # Main functionality
│   │   ├── login.js        # Login functionality
│   │   ├── feed.js         # Feed management
│   │   ├── chat.js         # Chat functionality
│   │   └── profile.js      # Profile management
│   └── assets
│       └── stories         # Directory for uploaded stories
├── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd objectgram
   ```

3. Open the `src/index.html` file in your web browser to view the application.

4. Ensure you have a local server running if you want to test the chat functionality and other dynamic features.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.