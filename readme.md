# 🚀 Engineering Scalable Systems | My First Portfolio

This repository contains the source code for my **foundational personal portfolio**. It was architected as a high-performance **Single-Page Application (SPA)** to serve as the first official bridge between my academic studies and my professional journey as a software developer.

**🌐 Live Demo:** [myfirstownporfolio.netlify.app](https://myfirstownporfolio.netlify.app/)

---

## 📝 Project Purpose & Context

This project represents a critical milestone in my career. It was built to solve a specific challenge: creating a professional space to document my evolution and consolidate my early market presence.

* **Showcase Freelance Work:** A dedicated space for real-world projects delivered to clients during my early stages as a developer, demonstrating professional accountability.
* **Demonstrate Academic Growth:** Documentation of technical milestones achieved through structured study and hands-on experimentation.
* **Mastering Tooling:** An intentional move beyond "out-of-the-box" setups, implementing custom configurations for bundling and serving React applications.

---

## 🛠 Tech Stack & Architecture

I chose a modular and robust stack to ensure maintainability and performance, focusing on how different technologies communicate within a scalable environment:

* **Frontend Core:** [React](https://reactjs.org/) utilizing Functional Components for clean, modern logic.
* **Styling:** [Sass](https://sass-lang.com/) (SCSS) with a modular structure to ensure CSS scalability and reuse.
* **Build Pipeline:** Custom [Webpack](https://webpack.js.org/) & [Babel](https://babeljs.io/) configuration for optimized asset bundling, transpilation, and performance tuning.
* **Server-Side:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) to handle production-grade static file serving.
* **Deployment:** Automated CI/CD pipeline integrated via Netlify.

---

## 🏗 Key Features

* **Portfolio Management:** A dual-purpose UI designed to present both in-depth study cases and fast-paced freelance contracts.
* **Responsive Engineering:** Fluid layouts engineered to adapt across the entire device spectrum, from mobile viewports to desktop monitors.
* **Performance First:** Optimized bundle sizes and asset delivery strategies via a custom Webpack build process.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v14.x or higher)
* **npm** or **yarn**

### Installation & Local Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your_username/My-Portfolio-in-React.git](https://github.com/your_username/My-Portfolio-in-React.git)
    cd My-Portfolio-in-React
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run in Development Mode:**
    ```sh
    npm run dev
    ```
    *The app will be available at `http://localhost:8080`.*

---

## 📦 Build & Deployment

### Production Build
To generate an optimized production bundle:
```sh
npm run build
