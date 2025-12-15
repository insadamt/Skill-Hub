import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Catalogue = () => {
  const levelBadges = {
    Beginner: "absolute top-2 right-2 md:top-3 md:right-3 bg-green-500/50 rounded-md px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
    Intermediate: "absolute top-2 right-2 md:top-3 md:right-3 bg-yellow-400/50 rounded-md px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
    Advanced: "absolute top-2 right-2 md:top-3 md:right-3 bg-orange-400/50 rounded-md px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
    Expert: "absolute top-2 right-2 md:top-3 md:right-3 bg-red-400/50 rounded-md px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
  };


  const courses = useSelector((state) => state.courses).filter(
    (course) => course.status === "Public"
  );


  return (
    <main>
      <section aria-label="Course Catalogue">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 p-3 md:p-5 lg:p-6">
          {courses.map((course) => (
            <div
              className="shadow border border-gray-50 p-3 md:p-4 lg:p-5 rounded-lg relative"
              key={course.id}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-500 mb-4">{course.title}</h2>
              <p className="text-base">{course.description}</p>
              <hr className="my-2" />
              <p className="text-base">Category : {course.category}</p>
              <p className="text-base">Duration : {course.duration}h</p>
              <p className="text-base">{course.certification}</p>
              <p className={levelBadges[course.level]}>{course.level}</p>
              <hr className="my-2" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <p className="text-lg md:text-xl lg:text-2xl text-red-500">{course.price} DH</p>
                <Link
                  className="bg-black p-2 text-white rounded-md hover:bg-gray-800 hover:scale-105 duration-300 transition-all text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  to={`/course/${course.id}`}
                  aria-label={`View details for ${course.title}`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};


export default Catalogue;
