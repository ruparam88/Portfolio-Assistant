export const portfolioData = {
  name: "Ruparam K",
  title: "AI/ML Developer & Full-Stack Engineer",
  location: "Bangalore, India",
  email: "rkprajapat9909@gmail.com",
  phone: "7483975189",
  tagline: "Building intelligent solutions with AI & modern web technologies",
  
  social: {
    linkedin: "https://linkedin.com/in/ruparamk",
    github: "https://github.com/ruparam88",
    leetcode: "https://leetcode.com/u/7483975189/",
    twitter: "https://x.com/0_0rk51",
  },
  
  bio: `Hey! 👋 I'm Ruparam, a passionate AI/ML developer and full-stack engineer currently pursuing BE in CSE-AI at Dayananda Sagar Academy of Technology and Management in Bangalore.

I love building intelligent applications that combine the power of AI with clean, user-friendly interfaces. From RAG systems to face recognition apps, I'm always exploring new ways to leverage technology.

I'm fluent in Python, JavaScript, and React, and I've been diving deep into AI/ML with experience in model fine-tuning, RAG architectures, and building conversational AI.`,

  leetcode: {
    problemsSolved: 90,
    totalProblems: 3802,
    acceptance: "66.43%",
    easy: 43,
    medium: 47,
    hard: 0,
    languages: [
      { name: "Python3", count: 43 },
      { name: "JavaScript", count: 30 },
      { name: "C", count: 18 },
    ],
    skills: {
      advanced: ["Dynamic Programming", "Union Find", "Data Stream"],
      intermediate: ["Sliding Window", "Depth-First Search", "Hash Table"],
      fundamental: ["Array", "String", "Two Pointers"],
    },
  },

  skills: {
    "Programming Languages": ["Python", "C", "C++", "JavaScript", "HTML", "CSS"],
    "Frontend & Backend": ["React.js", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "Flask", "Django"],
    "AI/ML & Database": ["MySQL", "MongoDB", "Model Fine-tuning", "RAG", "NumPy", "Pandas", "Matplotlib"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Linux/Unix"],
  },

  projects: [
    {
      id: 1,
      title: "RAG Itinerary Planner",
      category: "AI Project",
      description: "A Retrieval-Augmented Generation system providing personalized tourist information about Jharkhand. Combines advanced embeddings and attraction data for AI-powered travel insights.",
      tech: ["Python", "RAG", "Embeddings", "Vector DB"],
      github: "https://github.com/ruparam88/rag-explorer",
    },
    {
      id: 2,
      title: "Face Recognition App",
      category: "ML Project",
      description: "Flask-based web app that identifies faces using a pre-trained classification model. Upload an image to instantly detect and recognize familiar faces.",
      tech: ["Flask", "Python", "Machine Learning", "OpenCV"],
      github: "https://github.com/ruparam88/Face-Recognition",
    },
    {
      id: 3,
      title: "WhatsChat",
      category: "AI Companion",
      description: "AI-powered personalized chat companion trained on your conversation history. Mimics your communication style for natural responses.",
      tech: ["Python", "NLP", "Fine-tuning", "AI"],
      github: "https://github.com/ruparam88/WhatsChat_LLM",
    },
    {
      id: 4,
      title: "Image Text Extractor",
      category: "Web Tool",
      description: "React-based web app extracting text from images using Tesseract.js OCR. Convert visual data into editable text effortlessly.",
      tech: ["React", "Tesseract.js", "OCR", "JavaScript"],
      github: "https://github.com/ruparam88/OCR-using-tesseract.js",
    },
    {
      id: 5,
      title: "Voice Control Script",
      category: "Automation",
      description: "Python script enabling hands-free laptop control through voice commands. Automates common system actions using speech recognition.",
      tech: ["Python", "Speech Recognition", "Automation"],
      github: null,
    },
  ],

  hackathons: [
    {
      name: "Innovathon",
      venue: "Dayananda Sagar Academy of Technology and Management",
      date: "July 4-5, 2024",
      project: "Built a Gemini clone replicating core AI conversational features. Designed frontend with React.js and Tailwind CSS.",
    },
    {
      name: "DevHack",
      venue: "Dayananda Sagar University",
      date: "September 27-28, 2024",
      project: "Created a content filtration system providing personalized learning resources - videos, images, and text.",
    },
  ],

  certificates: [
    "IBM - Introduction to Artificial Intelligence (AI)",
    "IBM - RAG with Embeddings & Vector DB",
    "Infosys Springboard - Complete UNIX & Linux OS Fundamentals",
    "Infosys Springboard - MATLAB (Intermediate and Beginners)",
  ],

  education: {
    degree: "BE in CSE-AI",
    institution: "Dayananda Sagar Academy of Technology and Management",
    period: "2023 - Ongoing",
    preUniversity: {
      course: "1st & 2nd PUC in PCMCs",
      institution: "Adarsh Group of Institutions",
      period: "2021 - 2023",
    },
  },

  languages: ["English", "Hindi", "Kannada"],
};
