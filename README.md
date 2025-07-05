# SnipShare

A modern code snippet sharing platform. Share code with output and syntax highlighting with ease.

## Features
- **Authentication**: Sign in with Google or GitHub (via Firebase Auth)
- **Create & Share Snippets**: Write, run, and share code snippets in JavaScript, Python, Java, and C++
- **Syntax Highlighting**: Monaco Editor and Prism for beautiful code display
- **Run Code**: Execute code snippets using the [Piston API](https://emkc.org/api/v2/piston/execute)
- **User Dashboard**: View, manage, and delete your snippets
- **Demo Functionality**: Interactive demo page showcasing platform features with pre-created examples
- **Responsive UI**: Built with Next.js App Router and Tailwind CSS
- **Theming**: Light/dark mode support

## Tech Stack
- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase (Auth, Firestore)](https://firebase.google.com/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Piston API](https://emkc.org/api/v2/piston/execute) for code execution

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm (choose one, do not use both lockfiles)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Auxilus08/SnipShare.git
   cd SnipShare
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   pnpm install
   ```
3. Copy `.env.example` to `.env.local` and fill in your Firebase credentials:
   ```sh
   cp .env.example .env.local
   ```

### Required Environment Variables
These are used in `lib/firebase.js`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### Running the App
```sh
npm run dev
# or
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- **Sign in** with Google or GitHub
- **View demos** to explore platform features
- **Create a new snippet** from the dashboard
- **Write and run code** in supported languages
- **Share your snippet** with others
- **Manage your snippets** from your profile

## Demo Functionality

SnipShare includes a comprehensive demo system to showcase platform features:

- **Demo Page** (`/demo`): Interactive gallery of demo snippets
- **Demo Snippets**: Pre-created examples in JavaScript, Python, Java, and C++
- **Admin Interface** (`/admin/demo`): Easy management of demo content
- **API Endpoint** (`/api/demo`): Server-side demo snippet creation

For detailed documentation, see [DEMO_FUNCTIONALITY.md](./DEMO_FUNCTIONALITY.md).

## Authentication Callback URLs
- For Firebase Auth with Google/GitHub, set the callback/redirect URL to:
  - `http://localhost:3000/` (for local development)
  - Or your deployed domain root

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
