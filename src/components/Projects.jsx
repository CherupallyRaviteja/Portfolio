function Projects() {
  const projects = [
    {
      title: "Agentic Hybrid RAG System",
      desc: "Built a Retrieval-Augmented Generation (RAG) system that allows users to upload Word documents, PDFs or OCR data and query them using natural language. The system processes documents, splits them into chunks, retrieves relevant sections, and generates accurate responses with document name and page references. The solution improves information retrieval by combining vector search with language models to provide context-aware answers",
      tech: ["Python","LangChain","Ollama","Vector Database","Sentence Transformers","PyPDF","PaddleOCR","PostgreSQL"],
      link : "https://github.com/CherupallyRaviteja/AHRAGS"
    },
 
    {
      title: "AI-Powered E-commerce Chatbot ",
      desc: "Developed an AI-powered e-commerce assistant capable of answering product-related queries using structured product data and PDF documentation. Designed a planner-based architecture to route user queries between product search and document retrieval tools. Implemented dynamic product filtering, conversational memory, and REST APIs for seamless frontend-backend communication.",
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "Gemini API", "Groq", "LangChain", "JSON"],
      link : "https://github.com/CherupallyRaviteja/ECommerce-Website-Chatbot"
    },
    {
      title: "AI Trip Planner",
      desc: "Built an AI travel assistant that generates personalized itineraries based on destination, budget, duration, and user preferences. Implemented memory-based conversations to retain user preferences and provide contextual travel recommendations. Integrated real-time weather information and external APIs to enhance itinerary planning. Developed a responsive React frontend and deployed the application using Vercel and Render. ",
      tech: ["Python", "FastAPI", "React", "Gemini API", "OpenWeather API", "JSON"],
      link : "https://github.com/CherupallyRaviteja/Trip-Planner"
    },   
    {
      title: "Chatbot System for College Information Management",
      desc: "Developed a chatbot that answers student queries related to college information and academic resources. The system uses NLP techniques to understand questions and retrieve relevant information from a structured knowledge base.",
      tech: ["Python","NLP","LangChain","Ollama","Vector Database","BeautifulSoup"],
      link : "https://github.com/CherupallyRaviteja/College-Chatbot"
    },
    {
      title: "Cursor Control Using Hand Gestures",
      desc: "Implemented a computer vision system that allows users to control the mouse cursor using hand gestures detected through a webcam. The system translates gestures into actions like cursor movement, clicking, and scrolling.",
      tech: ["Python","OpenCV","MediaPipe","NumPy","PyAutoGUI","Computer Vision"],
      link : "https://github.com/CherupallyRaviteja/cursor--control"
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-black mb-12 text-center">PROJECTS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {projects.map((project) => (
    <a
      key={project.title}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div
        className="
          h-full min-h-[420px]
          p-6
          border border-gray-800
          rounded-xl
          bg-black
          transition-all duration-300
          hover:scale-105
          hover:border-blue-500
          hover:shadow-2xl
          hover:shadow-blue-500/20
        "
      >

        <h3 className="text-xl font-semibold mb-4 text-white text-center">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-5 text-justify">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </a>
  ))}

</div>
      </div>     
    </section>
  )
}
export default Projects