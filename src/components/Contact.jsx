import email from "../assets/email.jpg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin-1.svg"
function Contact() {
  const contacts = [
    {
      name: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=cherupellyraviteja2005@gmail.com",
      icon: email,
      label: "cherupellyraviteja2005@gmail.com"
    },
    {
      name: "GitHub",
      link: "https://github.com/CherupallyRaviteja",
      icon: github,
      label: "CherupallyRaviteja"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/raviteja-cherupally-307b0235a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: linkedin,
      label: "raviteja-cherupally-307b0235a"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-12">
          CONTACT
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.link}
              className="flex items-center gap-4 p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition"
            >
              <div className="text-blue-400 bg-white"><img src={c.icon} alt={c.name} className="w-8 h-8" /></div>

              <div>
                <p className="font-semibold text-white">{c.name}</p>
                <p className="text-sm text-gray-400">{c.label}</p>
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Contact