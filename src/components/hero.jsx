import pic from "../assets/Profile Pic.jpeg"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-10">

      <img
        src={pic}
        className="w-56 md:w-64 rounded-full border border-white/10 shadow-2xl mb-8 mt-16 hover:scale-[1.02] transition duration-500"
      />

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black">
        AI / ML Engineer
      </h1>

      <p className="text-[#201f1f] max-w-2xl text-lg leading-relaxed mb-8">
        Passionate and Focused on designing and developing practical AI-driven solutions for real-world problems.
      </p>
      <button className="px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-500 transition duration-300 font-medium">
        <a href="https://github.com/CherupallyRaviteja" target="_blank" rel="noopener noreferrer">
          View Projects
        </a>
      </button>

    </section>
  )
}

export default Hero