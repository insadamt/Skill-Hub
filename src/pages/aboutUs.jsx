import insaydPhoto from '../assets/insayd.jpg';
import userPhoto from '../assets/user.png';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';


const AboutUs = () => {
  return (
    <div className="p-6 lg:p-10 min-h-full space-y-12 lg:space-y-16">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-6 lg:mb-8">About Us</h1>
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-6 lg:p-10 rounded-2xl shadow-sm dark:shadow-black/10 border border-neutral-200/40 dark:border-neutral-800/40 space-y-5">
          <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            SkillHub Academy is a comprehensive online training platform based
            in Casablanca, dedicated to providing high-quality educational
            courses across multiple disciplines. Our platform serves as a bridge
            between knowledge seekers and expert instructors, offering a diverse
            catalog of courses designed to meet the learning needs of students,
            professionals, and lifelong learners.
          </p>

          <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            With courses spanning various domains including Design, Development,
            Marketing, Business, and Languages, SkillHub Academy ensures that
            learners have access to relevant, up-to-date content tailored to
            current industry standards. Each course is carefully curated and
            structured to provide practical skills and theoretical knowledge
            that can be immediately applied in real-world scenarios.
          </p>

          <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            The platform features an intuitive course management system that
            allows administrators to create, organize, and maintain educational
            content efficiently. Learners benefit from detailed course
            information including difficulty levels, duration estimates,
            instructor profiles, and certification options, enabling them to
            make informed decisions about their learning journey.
          </p>

          <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Built with cutting-edge web technologies including React 18+, Redux
            Toolkit for state management, and Tailwind CSS for modern,
            responsive design, SkillHub Academy represents the future of online
            education. Our commitment is to provide an accessible, user-friendly
            platform that empowers individuals to develop new skills, advance
            their careers, and achieve their personal and professional goals.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-6 lg:mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-8 lg:p-10 rounded-2xl shadow-sm dark:shadow-black/10 border border-neutral-200/40 dark:border-neutral-800/40 flex flex-col justify-between transition-all duration-200 hover:shadow-md dark:hover:shadow-black/20">
            <div className="flex flex-col items-center">
              <img
                src={insaydPhoto}
                alt=""
                className="rounded-2xl w-40 h-40 lg:w-48 lg:h-48 object-cover shadow-md"
              />
              <h3 className="text-2xl lg:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mt-6 text-center">Mohammed Amine Rafi</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">(insayd Cyan)</p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5" />
              <div className="text-center space-y-1">
                <p className="text-base text-neutral-700 dark:text-neutral-300 font-medium">Frontend Developer</p>
                <p className="text-base text-neutral-700 dark:text-neutral-300 font-medium">UX/UI Designer</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-center text-sm font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800/30 py-2 px-4 rounded-lg">ISAG - DEV202</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-8 lg:p-10 rounded-2xl shadow-sm dark:shadow-black/10 border border-neutral-200/40 dark:border-neutral-800/40 flex flex-col justify-between transition-all duration-200 hover:shadow-md dark:hover:shadow-black/20">
            <div className="flex flex-col items-center">
              <img
                src={userPhoto}
                alt=""
                className="rounded-2xl w-40 h-40 lg:w-48 lg:h-48 object-cover bg-neutral-200 dark:bg-neutral-800 p-6 shadow-md"
              />
              <h3 className="text-2xl lg:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mt-6 text-center">Mohammed Abo Lhilal</h3>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5" />
              <div className="text-center">
                <p className="text-base text-neutral-700 dark:text-neutral-300 font-medium">Frontend Developer</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-center text-sm font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800/30 py-2 px-4 rounded-lg">ISAG - DEV202</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-6 lg:mb-8">Used Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-8 lg:p-10 rounded-2xl shadow-sm dark:shadow-black/10 border border-neutral-200/40 dark:border-neutral-800/40 flex flex-col justify-center items-center gap-6 transition-all duration-200 hover:shadow-md dark:hover:shadow-black/20">
            <img className="w-32 h-32 lg:w-40 lg:h-40 object-contain" src={reactLogo} alt="" />
            <h3 className="text-2xl lg:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 text-center">React JS</h3>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-8 lg:p-10 rounded-2xl shadow-sm dark:shadow-black/10 border border-neutral-200/40 dark:border-neutral-800/40 flex flex-col justify-center items-center gap-6 transition-all duration-200 hover:shadow-md dark:hover:shadow-black/20">
            <img className="w-32 h-32 lg:w-40 lg:h-40 object-contain" src={reduxLogo} alt="" />
            <h3 className="text-2xl lg:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 text-center">Redux</h3>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-8 lg:p-10 rounded-2xl shadow-sm dark:shadow-black/10 border border-neutral-200/40 dark:border-neutral-800/40 flex flex-col justify-center items-center gap-6 transition-all duration-200 hover:shadow-md dark:hover:shadow-black/20">
            <img className="w-32 h-32 lg:w-40 lg:h-40 object-contain" src={tailwindLogo} alt="" />
            <h3 className="text-2xl lg:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 text-center">Tailwind CSS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutUs;
