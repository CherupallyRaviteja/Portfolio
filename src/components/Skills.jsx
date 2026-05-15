function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      items: ["Python", "Java", "C Language", "R Language"]
    },
    {
      title: "Libraries",
      items: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "NLTK",
        "BeautifulSoup",
        "Requests"
      ]
    },
    {
      title: "Tools",
      items: [
        "Jupyter",
        "VS Code",
        "Google Colab",
        "Git-GitHub",
        "PgAdmin",
        "Ollama",
        "Postman",
        "Tableau"
      ]
    },
    {
      title: "Backend Frameworks",
      items: ["Flask"]
    },
      {
      title: "ML & AI",
      items: ["Machine Learning", "NLP"]
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Frontend Frameworks",
      items: ["Bootstrap CSS", "Tailwind CSS"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-[#111111]">
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