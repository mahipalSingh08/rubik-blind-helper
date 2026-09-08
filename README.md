# 🧩 BLD Tools: 3x3 Blindfolded Helper App

A modern, sleek Angular application designed to help speedcubers learn, practice, and master 3x3 Rubik's Cube blindfolded (BLD) solving. Whether you're just starting to learn Old Pochmann or you're drilling your M2 letter pairs, this app has tools to accelerate your progress.

## ✨ Features

- **📖 Word Dictionary (576 Pairs)**: A massive, searchable reference list mapping every single 2-letter Speffz combination to a concrete noun or image. Essential for building your memory sequences.
- **🔀 Memo Generator**: Simulates the memorization phase of a solve. Generates random letter pairs for both corners and edges based on your custom buffer pieces. Includes a "Show Words" toggle to help you practice linking your generated pairs.
- **🧠 Memo Helper**: An interactive digital flashcard system that tests your instant recognition of letter-to-sticker mappings (e.g., UBL = A), complete with a text sandbox for typing out your Memory Palace stories.
- **🧊 2D Cube Visualizer**: An unfolded CSS grid visualization mapping the standard A-X Speffz lettering scheme across all six faces of the cube.
- **🔄 Setup Moves Reference**: A fast, scannable cheat sheet for common corner (OP) and edge (M2) setup moves, including target stickers, setup execution, and undo moves.
- **📚 Methods Guide**: Core explanations, logic, and algorithms for the Old Pochmann (Corners) and M2 (Edges) methods, including parity fixes.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   cd bld-tools
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the Angular development server:
```bash
npm run start
```
Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Building for Production
To build the project for production deployment (like GitHub Pages or Vercel):
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## 🛠️ Tech Stack
- **Framework**: Angular v18
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Routing**: Angular Router

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
