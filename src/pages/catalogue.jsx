import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Catalogue = () => {
  const levelBadges = {
    Beginner:
      "bg-green-500/20 dark:bg-green-400/10 border border-green-500/30 dark:border-green-400/20 text-green-700 dark:text-green-300",
    Intermediate:
      "bg-yellow-500/20 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 text-yellow-700 dark:text-yellow-300",
    Advanced:
      "bg-orange-500/20 dark:bg-orange-400/10 border border-orange-500/30 dark:border-orange-400/20 text-orange-700 dark:text-orange-300",
    Expert:
      "bg-red-500/20 dark:bg-red-400/10 border border-red-500/30 dark:border-red-400/20 text-red-700 dark:text-red-300",
  };

  const courses = useSelector((state) => state.courses).filter(
    (course) => course.status == "Public"
  );

  return (
    <div className="h-full overflow-y-auto p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-1">
            Course Catalogue
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {courses.length} courses available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {courses.map((course) => (
            <div
              className="group relative bg-gradient-to-br from-white/80 to-neutral-50/50 dark:from-neutral-800/50 dark:to-neutral-900/30 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-700/60 rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-200"
              key={course.id}
            >
              <div className="relative p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 leading-tight line-clamp-2 flex-1">
                    {course.title}
                  </h3>
                  <div
                    className={`${
                      levelBadges[course.level]
                    } rounded-lg px-2 py-1 text-xs font-bold tracking-wide whitespace-nowrap`}
                  >
                    {course.level}
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4 pb-4 border-b border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-500 dark:text-neutral-500">
                      Category
                    </span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {course.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-500 dark:text-neutral-500">
                      Duration
                    </span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {course.duration}h
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-500 dark:text-neutral-500">
                      Certification
                    </span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {course.certification}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">
                    {course.price}
                    <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 ml-1">
                      DH
                    </span>
                  </div>
                  <Link
                    className="px-5 py-2 bg-gradient-to-br from-neutral-900 to-neutral-950 dark:from-neutral-100 dark:to-neutral-50 text-neutral-50 dark:text-neutral-900 rounded-xl font-gabarito font-semibold shadow-sm dark:shadow-black/20 hover:shadow-md hover:scale-105 transition-all duration-200 border border-neutral-900 dark:border-neutral-100 text-sm"
                    to={`/course/${course.id}`}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
