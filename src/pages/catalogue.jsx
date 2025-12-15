import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Catalogue = () => {
  const levelBadges = {
    Beginner: "absolute top-4 right-4 bg-white border-2 border-black rounded-lg px-3 py-1 font-semibold text-sm",
    Intermediate: "absolute top-4 right-4 bg-white border-2 border-black rounded-lg px-3 py-1 font-semibold text-sm",
    Advanced: "absolute top-4 right-4 bg-black text-white border-2 border-black rounded-lg px-3 py-1 font-semibold text-sm",
    Expert: "absolute top-4 right-4 bg-black text-white border-2 border-black rounded-lg px-3 py-1 font-semibold text-sm",
  };


  const courses = useSelector((state) => state.courses).filter(
    (course) => course.status == "Public"
  );


  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-8">Catalogue</h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            className="border-2 border-black p-6 rounded-lg relative"
            key={course.id}
          >
            <h1 className="text-2xl font-bold mb-3 pr-24">{course.title}</h1>
            <p className="text-sm mb-4">{course.description}</p>
            <div className="h-0.5 w-full bg-black mb-4"></div>
            <p className="text-sm mb-1"><span className="font-semibold">Category:</span> {course.category}</p>
            <p className="text-sm mb-1"><span className="font-semibold">Duration:</span> {course.duration}h</p>
            <p className="text-sm mb-4">{course.certification}</p>
            <p className={levelBadges[course.level]}>{course.level}</p>
            <div className="h-0.5 w-full bg-black mb-4"></div>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-bold">{course.price} DH</p>
              <Link
                className="px-6 py-2 bg-black text-white border-2 border-black rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
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
