import insaydPhoto from '../assets/insayd.jpg';
import userPhoto from '../assets/user.png';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';

const AboutUs = () => {
  return (
    <div className="p-5 grid h-full">
      <div>
        <h1 className="text-5xl font-bold">About Us</h1>
        <div className="mt-5 bg-gray-200 p-3 rounded-md">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            SkillHub Academy is a comprehensive online training platform based
            in Casablanca, dedicated to providing high-quality educational
            courses across multiple disciplines. Our platform serves as a bridge
            between knowledge seekers and expert instructors, offering a diverse
            catalog of courses designed to meet the learning needs of students,
            professionals, and lifelong learners.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With courses spanning various domains including Design, Development,
            Marketing, Business, and Languages, SkillHub Academy ensures that
            learners have access to relevant, up-to-date content tailored to
            current industry standards. Each course is carefully curated and
            structured to provide practical skills and theoretical knowledge
            that can be immediately applied in real-world scenarios.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The platform features an intuitive course management system that
            allows administrators to create, organize, and maintain educational
            content efficiently. Learners benefit from detailed course
            information including difficulty levels, duration estimates,
            instructor profiles, and certification options, enabling them to
            make informed decisions about their learning journey.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Built with cutting-edge web technologies including React 18+, Redux
            Toolkit for state management, and Tailwind CSS for modern,
            responsive design, SkillHub Academy represents the future of online
            education. Our commitment is to provide an accessible, user-friendly
            platform that empowers individuals to develop new skills, advance
            their careers, and achieve their personal and professional goals.
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-200 py-10 rounded-md flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img
                src={insaydPhoto}
                alt=""
                className="rounded-lg w-50"
              />
              <h1 className="text-2xl mt-3">Mohammed Amine Rafi</h1>
              <p>(insayd Cyan)</p>
              <hr className="w-50 my-4 text-gray-500 border " />
              <p>Frontend Developer</p>
              <p>UX/UI Designer</p>
            </div>
            <div>
              <p className="text-center">ISAG - DEV202</p>
            </div>
          </div>
          <div className="bg-gray-200 py-10 rounded-md flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img
                src={userPhoto}
                alt=""
                className="rounded-lg w-50 bg-gray-300 p-4"
              />
              <h1 className="text-2xl mt-3">Mohammed Abo Lhilal</h1>

              <hr className="w-50 my-4 text-gray-500 border " />
              <p>Frontend Developer</p>
            </div>
            <div>
              <p className="text-center">ISAG - DEV202</p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl">Used Technologies</h1>
          <div className="grid grid-cols-3 gap-4 mt-4 h-100">
            <div className="bg-gray-200 p-4 rounded-md gap-4 flex flex-col justify-center items-center">
            <img className="w-40 h-40" src={reactLogo} alt="" />
              <h1 className="text-3xl">React JS</h1>
            </div>
            <div className="bg-gray-200 p-4 rounded-md gap-4 flex flex-col justify-center items-center">
              <img className="w-40 h-40" src={reduxLogo} alt="" />
              <h1 className="text-3xl">Redux</h1>
            </div>
            <div className="bg-gray-200 p-4 rounded-md gap-4 flex flex-col justify-center items-center">
              <img className="w-40 h-40" src={tailwindLogo} alt="" />
              <h1 className="text-3xl">React JS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
