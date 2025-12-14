import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Catalogue = () => {
  const levelBadges = {
    Beginner: "absolute top-3 right-3 bg-green-500/50 rounded-md px-3 py-1 ",
    Intermediate: "absolute top-3 right-3 bg-yellow-400/50 rounded-md px-3 py-1",
    Advanced: "absolute top-3 right-3 bg-orange-400/50 rounded-md px-3 py-1",
    Expert: "absolute top-3 right-3 bg-red-400/50 rounded-md px-3 py-1",
  };

  const courses = useSelector((state) => state.courses).filter(
    (course) => course.status == "Public"
  );

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 p-5">
        {courses.map((course) => (
          <div
            className="shadow border border-gray-50  p-3 rounded-lg relative"
            key={course.id}
          >
            <h1 className="text-3xl text-blue-500 mb-4">{course.title}</h1>
            <h1 className="text-1xl">{course.description}</h1>
            <hr className="my-2" />
            <h1 className="text-1xl">Category : {course.category}</h1>
            <h1 className="text-1xl">Duration : {course.duration}h</h1>
            <h1 className="text-1xl">{course.certification}</h1>
            <h1 className={levelBadges[course.level]}>{course.level}</h1>
            <hr className="my-2" />
            <div className="flex justify-between items-center">
              <h1 className="text-2xl text-red-500">{course.price} DH</h1>
              <Link
                className="bg-black p-2 text-white rounded-md hover:bg-gray-800 hover:scale-105 duration-300 transition-all"
                to={`/course/${course.id}`}
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
