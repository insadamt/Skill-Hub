import insaydPhoto from '../assets/insayd.jpg';
import userPhoto from '../assets/user.png';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';


const AboutUs = () => {
  return (
    <div className="p-8 grid h-full gap-8">
      <div>
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <div className="bg-white border-2 border-black p-6 rounded-lg">
          <p className="text-base leading-relaxed mb-4">
            SkillHub Academy is a comprehensive online training platform based
            in Casablanca, dedicated to providing high-quality educational
            courses across multiple disciplines. Our platform serves as a bridge
            between knowledge seekers and expert instructors, offering a diverse
            catalog of courses designed to meet the learning needs of students,
            professionals, and lifelong learners.
          </p>


          <p className="text-base leading-relaxed mb-4">
            With courses spanning various domains including Design, Development,
            Marketing, Business, and Languages, SkillHub Academy ensures that
            learners have access to relevant, up-to-date content tailored to
            current industry standards. Each course is carefully curated and
            structured to provide practical skills and theoretical knowledge
            that can be immediately applied in real-world scenarios.
          </p>


          <p className="text-base leading-relaxed mb-4">
            The platform features an intuitive course management system that
            allows administrators to create, organize, and maintain educational
            content efficiently. Learners benefit from detailed course
            information including difficulty levels, duration estimates,
            instructor profiles, and certification options, enabling them to
            make informed decisions about their learning journey.
          </p>


          <p className="text-base leading-relaxed">
            Built with cutting-edge web technologies including React 18+, Redux
            Toolkit for state management, and Tailwind CSS for modern,
            responsive design, SkillHub Academy represents the future of online
            education. Our commitment is to provide an accessible, user-friendly
            platform that empowers individuals to develop new skills, advance
            their careers, and achieve their personal and professional goals.
          </p>
        </div>
      </div>
      <div className="h-0.5 w-full bg-black"></div>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border-2 border-black py-8 px-4 rounded-lg flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img
                src={insaydPhoto}
                alt=""
                className="rounded-lg w-32 h-32 object-cover border-2 border-black"
              />
              <h1 className="text-xl font-bold mt-4 text-center">Mohammed Amine Rafi</h1>
              <p className="text-sm">(insayd Cyan)</p>
              <div className="h-0.5 w-20 bg-black my-4"></div>
              <p className="text-sm font-medium">Frontend Developer</p>
              <p className="text-sm font-medium">UX/UI Designer</p>
            </div>
            <div className="mt-6">
              <p className="text-center text-sm font-semibold">ISAG - DEV202</p>
            </div>
          </div>
          <div className="bg-white border-2 border-black py-8 px-4 rounded-lg flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img
                src={userPhoto}
                alt=""
                className="rounded-lg w-32 h-32 object-cover border-2 border-black p-4"
              />
              <h1 className="text-xl font-bold mt-4 text-center">Mohammed Abo Lhilal</h1>


              <div className="h-0.5 w-20 bg-black my-4"></div>
              <p className="text-sm font-medium">Frontend Developer</p>
            </div>
            <div className="mt-6">
              <p className="text-center text-sm font-semibold">ISAG - DEV202</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-6">Used Technologies</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border-2 border-black p-6 rounded-lg flex flex-col justify-center items-center gap-4">
            <img className="w-32 h-32 object-contain" src={reactLogo} alt="" />
              <h1 className="text-2xl font-bold">React JS</h1>
            </div>
            <div className="bg-white border-2 border-black p-6 rounded-lg flex flex-col justify-center items-center gap-4 ">
              <img className="w-32 h-32 object-contain" src={reduxLogo} alt="" />
              <h1 className="text-2xl font-bold">Redux</h1>
            </div>
            <div className="bg-white border-2 border-black p-6 rounded-lg flex flex-col justify-center items-center gap-4 ">
              <img className="w-32 h-32 object-contain" src={tailwindLogo} alt="" />
              <h1 className="text-2xl font-bold">Tailwind CSS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutUs;
