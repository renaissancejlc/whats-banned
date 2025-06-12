# What's Banned

What's Banned is a fast-paced educational game designed to raise awareness about the Gaza blockade by challenging users to identify banned items and answer bonus fact questions under time pressure.

## Tech Stack

- **React**: Core framework for building the frontend UI.
- **Vite**: Build tool used for fast development and bundling.
- **Firebase**:
  - Firestore Database: Stores real-time game data and user responses.
  - Firebase Auth: Handles anonymous authentication for multiplayer games.
- **EmailJS**: Sends formatted contact letters from users directly to responsible parties.
- **Tailwind CSS**: Provides a utility-first CSS framework for styling with a Swiss brutalist design theme.
- **Framer Motion**: Adds dynamic animations and transitions to enhance user interaction.

## Features

- Solo and multiplayer gameplay modes
- Random bonus fact rounds with extra point opportunities
- Letter-writing component to encourage activism
- Brutalist visual design for impact and clarity

## Setup

1. Clone the repo:
   ```
   git clone https://github.com/your-username/whats-banned.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start development server:
   ```
   npm run dev
   ```

Make sure you have a valid Firebase project and configure `.env` for EmailJS and Firebase API keys.

## License

MIT License
