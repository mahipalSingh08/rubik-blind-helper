# 🧩 BLD Tools: 3x3 Blindfolded 3-Style Helper App

A modern, sleek Angular application designed to help speedcubers learn, practice, and master the **3-Style Commutator Method** for 3x3 Rubik's Cube blindfolded (BLD) solving. Whether you're just starting to drill your first edge commutators or you're mastering advanced corner setups, this app provides the ultimate algorithmic database and practice ecosystem to accelerate your progress.

🌍 **Live Demo:** [https://rubik-blind-helper.vercel.app/](https://rubik-blind-helper.vercel.app/)

## ✨ Features

- **🔄 Massive 3-Style Database**: Contains a comprehensive, built-in algorithmic database of over 818 target pairs (440 Edges, 378 Corners) powered by a custom commutator expansion engine. Every single target pair shows both its short notation (e.g. `[U2, M']`) and its fully expanded sequence.
- **🛠️ Base Algorithms Manager**: Manage and edit your core foundational algorithms (e.g., parity cases, `AA`, `AB`, `UA`, `UB`). Any setup moves wrapping these base algorithms (e.g. `[U': [AA]]`) will automatically expand the full base algorithm and calculate the inverse undo-setup moves!
- **📚 Learn & Track**: Use the "Learn" tab to search up specific pairs, see their cycles, and add them to your personalized "Learned List." The list intelligently tracks inverses and opposite pairs, helping you memorize mirrored cases.
- **🎲 True Scramble Practice**: Generate mathematically valid 3x3 scrambles (Standard, <M,U>, 2-Gen, etc.) and the app will instantly calculate the exact blindfolded solution for both Edges and Corners using your custom buffer pieces. It even outputs the exact 3-style algorithms for that scramble step-by-step.
- **✏️ Interactive Workspaces**: Features like the "My Solution" text box in the Practice tab and the Word Association dictionary allow you to type out your Memory Palace stories, build letter-to-noun mappings, and lock in your memo techniques.
- **🧊 2D/3D Cube Visualizer**: An unfolded CSS grid visualization mapping the standard A-X Speffz lettering scheme across all six faces of the cube, dynamically greying out unused pieces depending on your practice mode.

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
To build the project for production deployment:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## 🛠️ Tech Stack
- **Framework**: Angular v18 (Standalone Components)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Data**: State management via LocalStorage API, custom Python-to-TypeScript algorithmic expansion scripts.
- **Routing**: Angular Router

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
