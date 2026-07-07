function Skills() {
  const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C Language", "R Language"]
  },
  {
    title: "AI & Machine Learning",
    items: ["Machine Learning","NLP","Generative AI","RAG","Agentic AI","Prompt Engineering"]
  },
  {
    title: "Frameworks & APIs",
    items: ["FastAPI","Flask","LangChain","REST APIs"]
  },
  {
    title: "AI/ML Libraries",
    items: ["Pandas","NumPy","Scikit-learn","NLTK","Sentence Transformers","Hugging Face Transformers"]
  },
  {
    title: "LLMs & AI Tools",
    items: ["Gemini API","Groq API","Ollama"]
  },
  {
    title: "Databases & Vector Search",
    items: ["MySQL","PostgreSQL","pgvector","FAISS"]
  },
  {
    title: "Frontend",
    items: ["React","HTML5","CSS3","JavaScript","Bootstrap CSS","Tailwind CSS"]
  },
  {
    title: "Developer Tools",
    items: ["Git","GitHub","VS Code","Jupyter Notebook","Google Colab","Postman","pgAdmin","Tableau"]
  },
  {
    title: "Web & Data Processing",
    items: ["Beautiful Soup","Requests","JSON","PDF Processing"]
  }
]

  return (
    <section id="skills" className="py-24 bg-[#000000]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          SKILLS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {skill.title}
              </h3>

              <ul className="text-gray-400 space-y-2">
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills