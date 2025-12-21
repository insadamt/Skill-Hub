import insaydPhoto from '../assets/insayd.jpg';
import userPhoto from '../assets/user.png';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';

const AboutUs = () => {
  return (
    <div className="min-h-full p-4 lg:p-10 space-y-10 lg:space-y-16 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-4 lg:mb-6">
            About
          </h1>
          <div className="bg-gradient-to-br from-white/80 to-neutral-50/60 dark:from-neutral-900/60 dark:to-neutral-900/30 backdrop-blur-sm p-5 lg:p-8 rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/50 dark:border-neutral-800/60 space-y-4 lg:space-y-5">
            <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              An online learning platform focused on delivering high quality, structured courses across multiple disciplines through a clean, distraction-free interface.
            </p>
            <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              The catalog covers areas such as Design, Development, Marketing, Business, and Languages with clearly defined levels, durations, and certification options to help learners choose the right path.
            </p>
            <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              A streamlined course management experience allows administrators to create, organize, and maintain content while learners get transparent information about instructors, difficulty, and expected outcomes.
            </p>
            <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              The platform is built with modern tooling, prioritizing performance, responsiveness, and a consistent simplymalist design language across all views.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-4 lg:mb-6">
            Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
            <div className="bg-gradient-to-br from-white/80 to-neutral-50/60 dark:from-neutral-900/60 dark:to-neutral-900/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/50 dark:border-neutral-800/60 flex flex-col justify-between transition-all duration-200 hover:shadow-md dark:hover:shadow-black/30 hover:scale-[1.01]">
              <div className="flex flex-col items-center">
                <img
                  src={insaydPhoto}
                  alt=""
                  className="rounded-2xl w-32 h-32 lg:w-40 lg:h-40 object-cover shadow-md"
                />
                <h3 className="text-xl lg:text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mt-5 text-center">
                  Mohammed Amine Rafi
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  (insayd Cyan)
                </p>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4" />
                <div className="text-center space-y-1">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                    Frontend Developer
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                    UX/UI Designer
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-center text-xs font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-200/60 dark:bg-neutral-800/40 py-2 px-4 rounded-lg">
                  ISAG · DEV202
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/80 to-neutral-50/60 dark:from-neutral-900/60 dark:to-neutral-900/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/50 dark:border-neutral-800/60 flex flex-col justify-between transition-all duration-200 hover:shadow-md dark:hover:shadow-black/30 hover:scale-[1.01]">
              <div className="flex flex-col items-center">
                <img
                  src={userPhoto}
                  alt=""
                  className="rounded-2xl w-32 h-32 lg:w-40 lg:h-40 object-cover bg-neutral-200 dark:bg-neutral-800 p-5 shadow-md"
                />
                <h3 className="text-xl lg:text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mt-5 text-center">
                  Mohammed Abo Lhilal
                </h3>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4" />
                <div className="text-center">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                    Frontend Developer
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-center text-xs font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-200/60 dark:bg-neutral-800/40 py-2 px-4 rounded-lg">
                  ISAG · DEV202
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-4 lg:mb-6">
            Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
            <div className="bg-gradient-to-br from-white/80 to-neutral-50/60 dark:from-neutral-900/60 dark:to-neutral-900/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/50 dark:border-neutral-800/60 flex flex-col justify-center items-center gap-5 transition-all duration-200 hover:shadow-md dark:hover:shadow-black/30 hover:scale-[1.01]">
              <img
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
                src={reactLogo}
                alt=""
              />
              <h3 className="text-xl lg:text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 text-center">
                React
              </h3>
            </div>

            <div className="bg-gradient-to-br from-white/80 to-neutral-50/60 dark:from-neutral-900/60 dark:to-neutral-900/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/50 dark:border-neutral-800/60 flex flex-col justify-center items-center gap-5 transition-all duration-200 hover:shadow-md dark:hover:shadow-black/30 hover:scale-[1.01]">
              <img
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
                src={reduxLogo}
                alt=""
              />
              <h3 className="text-xl lg:text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 text-center">
                Redux Toolkit
              </h3>
            </div>

            <div className="bg-gradient-to-br from-white/80 to-neutral-50/60 dark:from-neutral-900/60 dark:to-neutral-900/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/50 dark:border-neutral-800/60 flex flex-col justify-center items-center gap-5 transition-all duration-200 hover:shadow-md dark:hover:shadow-black/30 hover:scale-[1.01]">
              <img
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
                src={tailwindLogo}
                alt=""
              />
              <h3 className="text-xl lg:text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 text-center">
                Tailwind CSS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
