# 🤖 Portfolio Assistant
[Here is the link](https://ruparam-portfolio.vercel.app/)
<div align="center">

![Portfolio Assistant Banner](https://img.shields.io/badge/Portfolio-Assistant-4CAF50?style=for-the-badge&logo=robot&logoColor=white)

**A Next-Generation Chatbot-Powered Portfolio with Clean UI**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/TypeScript-96.5%25-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

[View Demo](#) · [Report Bug](https://github.com/ruparam88/Portfolio-Assistant/issues) · [Request Feature](https://github.com/ruparam88/Portfolio-Assistant/issues)

</div>

---

## ✨ Overview

**Portfolio Assistant** is an innovative, AI-powered portfolio website that transforms the traditional portfolio experience into an interactive conversation. Instead of passive browsing, visitors engage with an intelligent chatbot that showcases projects, skills, and professional experience in a dynamic and personalized way.

This project represents the intersection of modern web development and conversational AI, creating a memorable and engaging user experience that stands out from conventional portfolios.

---

## 🎯 Key Features

### 🤖 **Intelligent Chatbot Interface**
- Interactive Q&A about projects, skills, and experience
- Natural language understanding for intuitive conversations
- Context-aware responses that guide visitors through your portfolio
- Personalized experience based on visitor interests

### 🎨 **Modern UI/UX Design**
- Clean, minimalist interface built with React and TypeScript
- Responsive design that works seamlessly across all devices
- Smooth animations and transitions for enhanced user experience
- Accessible components following best practices

### ⚡ **High Performance**
- Lightning-fast load times with Vite bundler
- Optimized assets and code splitting
- Progressive Web App (PWA) capabilities
- SEO-friendly architecture

### 🛠️ **Developer-Friendly**
- Fully typed with TypeScript for better development experience
- Component-based architecture for easy maintenance
- ESLint and Prettier configured for code quality
- Hot Module Replacement (HMR) for rapid development

---

## 🏗️ Tech Stack

### **Frontend Framework**
- **React 18+** - Modern UI library with Hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component system
- **PostCSS** - CSS processing and optimization

### **Build Tools & Configuration**
- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - Code linting and quality assurance
- **TypeScript Compiler** - Type checking and compilation

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18 or higher) or **Bun** (latest version)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ruparam88/Portfolio-Assistant.git
   cd Portfolio-Assistant
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using bun (recommended):
   ```bash
   bun install
   ```
   
   Using yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see your portfolio in action!

---

## 📦 Project Structure

```
Portfolio-Assistant/
├── public/                 # Static assets
│   ├── favicon.ico        # Favicon
│   └── ...                # Other public assets
│
├── src/                   # Source code
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite type definitions
│
├── .gitignore            # Git ignore rules
├── bun.lockb             # Bun lock file
├── components.json       # shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TS config
├── tsconfig.node.json    # Node-specific TS config
└── vite.config.ts        # Vite configuration
```

---

## 🎨 Customization Guide

### **1. Update Personal Information**

Edit the configuration files in `src/config/` to add your:
- Name and professional title
- Contact information
- Social media links
- Professional bio

### **2. Add Your Projects**

Create project entries in `src/data/projects.ts`:
```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "https://github.com/yourusername/project",
    image: "/path/to/image.png"
  }
  // Add more projects...
]
```

### **3. Customize Chatbot Responses**

Modify the chatbot logic in `src/lib/chatbot.ts` to personalize responses and add custom commands.

### **4. Theme Customization**

Update colors and styling in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
      secondary: "#your-color"
    }
  }
}
```

---

## 🌐 Deployment

### **Deploy to Vercel** (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and configure the build
5. Click "Deploy" - your site will be live in minutes!

### **Deploy to Netlify**

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### **Deploy to GitHub Pages**

```bash
npm run build
npm run deploy
```

Your site will be available at `https://yourusername.github.io/Portfolio-Assistant`

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

---

## 🐛 Known Issues

- None at the moment! Feel free to [report any bugs](https://github.com/ruparam88/Portfolio-Assistant/issues) you encounter.

---

## 🗺️ Roadmap

- [ ] Add voice interaction capability
- [ ] Implement multi-language support
- [ ] Add dark/light theme toggle
- [ ] Create admin dashboard for easy content updates
- [ ] Add analytics integration
- [ ] Implement blog section
- [ ] Add project filtering and search

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

The MIT License is a permissive license that allows you to:
- ✅ Use the software commercially
- ✅ Modify the software
- ✅ Distribute the software
- ✅ Use the software privately
- ⚠️ Must include the original license and copyright notice

---

## 👨‍💻 Author

**Ruparam K**

- GitHub: [@ruparam88](https://github.com/ruparam88)
- Portfolio: [Your Portfolio URL](https://portfolio-assistant-psi.vercel.app/)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/ruparamk/)
- Email: rkprajapat9909@gmail.com

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - The amazing UI library
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- All contributors and supporters of this project!

---

## 💬 Support

If you like this project, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs and issues
- 💡 Suggesting new features
- 🔀 Contributing code improvements
- 📢 Sharing with others

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/ruparam88/Portfolio-Assistant)
![GitHub code size](https://img.shields.io/github/languages/code-size/ruparam88/Portfolio-Assistant)
![GitHub last commit](https://img.shields.io/github/last-commit/ruparam88/Portfolio-Assistant)
![GitHub issues](https://img.shields.io/github/issues/ruparam88/Portfolio-Assistant)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ruparam88/Portfolio-Assistant)

---

<div align="center">

**Made with ❤️ and ☕ by Ruparam K**

If this project helped you, consider buying me a coffee! ☕

[⬆ Back to Top](#-portfolio-assistant)

</div>
