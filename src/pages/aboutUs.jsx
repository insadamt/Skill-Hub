import insaydPhoto from '../assets/insayd.jpg';
import userPhoto from '../assets/user.png';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';
import mohammedPhoto from "../assets/mohammed.jpg"


const AboutUs = () => {
  return (
    <main className="p-3 md:p-5 lg:p-6 flex flex-col space-y-4 md:space-y-6 lg:space-y-8 h-full">
      <section aria-label="About SkillHub Academy">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Us</h1>
        <div className="mt-3 md:mt-4 lg:mt-5 bg-gray-200 p-2 md:p-3 rounded-md">
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            SkillHub Academy is a comprehensive online training platform based
            in Casablanca, dedicated to providing high-quality educational
            courses across multiple disciplines. Our platform serves as a bridge
            between knowledge seekers and expert instructors, offering a diverse
            catalog of courses designed to meet the learning needs of students,
            professionals, and lifelong learners.
          </p>

          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            With courses spanning various domains including Design, Development,
            Marketing, Business, and Languages, SkillHub Academy ensures that
            learners have access to relevant, up-to-date content tailored to
            current industry standards. Each course is carefully curated and
            structured to provide practical skills and theoretical knowledge
            that can be immediately applied in real-world scenarios.
          </p>

          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            The platform features an intuitive course management system that
            allows administrators to create, organize, and maintain educational
            content efficiently. Learners benefit from detailed course
            information including difficulty levels, duration estimates,
            instructor profiles, and certification options, enabling them to
            make informed decisions about their learning journey.
          </p>

          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Built with cutting-edge web technologies including React 18+, Redux
            Toolkit for state management, and Tailwind CSS for modern,
            responsive design, SkillHub Academy represents the future of online
            education. Our commitment is to provide an accessible, user-friendly
            platform that empowers individuals to develop new skills, advance
            their careers, and achieve their personal and professional goals.
          </p>
        </div>
      </section>
      
      <hr />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
        <section aria-label="Team Members">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            <div className="bg-gray-200 py-4 md:py-6 lg:py-10 px-3 rounded-md flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <img
                  src={insaydPhoto}
                  alt="Mohammed Amine Rafi profile photo"
                  className="rounded-lg w-32 md:w-40 lg:w-50"
                />
                <h2 className="text-lg md:text-xl lg:text-2xl mt-3">Mohammed Amine Rafi</h2>
                <p className="text-sm md:text-base">(insayd Cyan)</p>
                <hr className="w-32 md:w-40 lg:w-50 my-3 md:my-4 text-gray-500 border" />
                <p className="text-sm md:text-base">Frontend Developer</p>
                <p className="text-sm md:text-base">UX/UI Designer</p>
              </div>
              <div>
                <p className="text-center text-sm md:text-base">ISAG - DEV202</p>
              </div>
            </div>
            <div className="bg-gray-200 py-4 md:py-6 lg:py-10 px-3 rounded-md flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <img
                  src={mohammedPhoto}
                  alt="Mohamed Aboul hilal profile photo"
                  className="rounded-lg w-32 md:w-40 lg:w-50 bg-gray-300 p-4"
                />
                <h2 className="text-lg md:text-xl lg:text-2xl mt-3">Mohamed Aboul hilal</h2>

                <hr className="w-32 md:w-40 lg:w-50 my-3 md:my-4 text-gray-500 border" />
                <p className="text-sm md:text-base">Frontend Developer</p>
              </div>
              <div>
                <p className="text-center text-sm md:text-base">ISAG - DEV202</p>
              </div>
            </div>
          </div>
        </section>
        
        <section aria-label="Technologies Used">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">Used Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
            <div className="bg-gray-200 p-3 md:p-4 rounded-md gap-3 md:gap-4 flex flex-col justify-center items-center">
              <img className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" src={reactLogo} alt="React JS logo" />
              <h3 className="text-xl md:text-2xl lg:text-3xl">React JS</h3>
            </div>
            <div className="bg-gray-200 p-3 md:p-4 rounded-md gap-3 md:gap-4 flex flex-col justify-center items-center">
              <img className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" src={reduxLogo} alt="Redux logo" />
              <h3 className="text-xl md:text-2xl lg:text-3xl">Redux</h3>
            </div>
            <div className="bg-gray-200 p-3 md:p-4 rounded-md gap-3 md:gap-4 flex flex-col justify-center items-center">
              <img className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" src={tailwindLogo} alt="Tailwind CSS logo" />
              <h3 className="text-xl md:text-2xl lg:text-3xl">Tailwind CSS</h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};


export default AboutUs;
