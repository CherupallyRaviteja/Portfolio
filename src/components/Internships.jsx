import logo from "../assets/NIC.png"
import certificate from "../assets/Certificates/NIC Certificate.jpeg"
function Internships() {

  const internships = [
    {
      company: "National Informatics Centre (NIC)",
      role: "AI/ML Intern",
      duration: "4 Months",
      desc: "Developed an Agentic Hybrid RAG System using Python, NLP, OCR, PostgreSQL, and LLMs. Implemented hybrid retrieval, semantic search, embedding generation, and context-aware response generation. Integrated scalable document processing and vector storage pipelines for intelligent document querying.",
      certificate :certificate
    }
  ]

  return (
    <section id="internships" className="py-24 bg-[#000000]">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-14 text-white">
          INTERNSHIPS
        </h2>

        <div className="space-y-8">

          {internships.map((item) => (
            <a
            href={item.certificate}
            target="_blank"
            rel="noopener noreferrer"
            >
            <div
              key={item.company}
              className="
                bg-[#ffffff]
                border border-[#2A2A2A]
                rounded-3xl
                p-8
                hover:-translate-y-1
                hover:bg-[#cfcfcf]
                transition-all duration-300
              "
            >

              <div className="flex flex-col md:flex-row md:items-center gap-2">
<span>
                    <img src={logo} alt="Logo" className="w-26 h-16" />
                </span>
                <div>
                    <h3 className="text-2xl font-semibold text-black">
                  {item.company}
                </h3>
                <h6 className="text-[#4b4b4b] leading-relaxed mb-2">
                Hyderabad, Telangana, India
            </h6>
                </div>
                
              </div>

              <p className="text-lg text-[#000000] mb-2">
                {item.role} | NOV 2025 - FEB 2026
              </p>

              <p className="text-[#4b4b4b] leading-relaxed">
                {item.desc}
              </p>

            </div>
            </a>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Internships