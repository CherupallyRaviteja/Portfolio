import ML from "../assets/Certificates/NPTEL ML.jpeg"
import AI from "../assets/Certificates/AI Fundamentals.jpg"
import Java from "../assets/Certificates/NPTEL Java.jpeg"
import Python from "../assets/Certificates/Udemy Python.jpg"
function Courses() {

  const courses = [
    {
      title: "Machine Learning",
      platform: "NPTEL",
      certificate : ML
    },
    {
      title: " Artificial Intelligence Fundamentals",
      platform: "IBM",
      certificate : AI
    },
    {
      title: "Programming in Java",
      platform: "NPTEL",
      certificate : Java
    },
    {
      title: "100 Days Python Bootcamp",
      platform: "Udemy",
      certificate : Python
    },
 ]

  return (
    <section id="courses" className="py-24 bg-[#fafafa]">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-14 text-black">
          COURSES & CERTIFICATIONS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {courses.map((course) => (
            <a
            href={course.certificate}
            target="_blank"
            rel="noopener noreferrer"
>
            <div
              key={course.title}
              className="
                bg-[#171717]
                border border-[#2A2A2A]
                rounded-3xl
                p-6
                hover:-translate-y-1
               hover:border-blue-300 transition
              "
            >

              <h3 className="text-xl font-semibold text-white mb-3">
                {course.title}
              </h3>

              <p className="text-[#A3A3A3]">
                {course.platform}
              </p>

            </div>
            </a>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Courses