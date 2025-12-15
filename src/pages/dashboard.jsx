import { CirclePlus, DeleteIcon, SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteCourse } from "../redux/courseSlice";


const Dashboard = () => {
  const statusBadges = {
    Draft: "absolute top-4 right-4 bg-white border-2 border-black rounded-lg px-3 py-1 font-semibold text-sm",
    Archive: "absolute top-4 right-4 bg-white border-2 border-black rounded-lg px-3 py-1 font-semibold text-sm",
    Public: "absolute top-4 right-4 bg-black text-white border-2 border-black rounded-lg px-3 py-1 font-semibold text-sm",
  };


  const [statistics, setStatistics] = useState({
    activeCourses: 0,
    totalStudents: 0,
    totalIncomes: 0,
    bestCourses: 0,
  });


  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  
  const loginInfo = useSelector((state) => state.admin);
  
  if (!loginInfo.loggedIn) {
    return <Navigate to="/" replace />;
  }


  useEffect(() => {
    const activeCourses = courses.filter(
      (course) => course.status == "Public"
    ).length;
    const totalStudents = courses.reduce(
      (accu, course) => accu + course.studentsNumber,
      0
    );
    const totalIncomes = courses.reduce(
      (accu, course) => accu + course.price * course.studentsNumber,
      0
    );
    const bestCourses = courses.filter(
      (course) => course.studentsNumber >= 100
    ).length;


    setStatistics({
      activeCourses: activeCourses,
      totalStudents: totalStudents,
      totalIncomes: totalIncomes,
      bestCourses: bestCourses > 0 ? bestCourses : 0,
    });
  }, [courses]);


  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <Link
          className="px-6 py-3 bg-white text-black border-2 border-black flex items-center gap-3 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
          to={"/course/add"}
        >
          <CirclePlus size={20} strokeWidth={2} />
          <span>Add New Course</span>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="p-6 bg-white border-2 border-black rounded-lg flex items-center gap-4">
          <p className="text-6xl font-extrabold">
            {statistics.activeCourses}
          </p>
          <div>
            <p className="text-2xl font-bold">Active</p>
            <p className="text-sm font-medium">Courses</p>
          </div>
        </div>
        <div className="p-6 bg-white border-2 border-black rounded-lg flex items-center gap-4">
          <p className="text-6xl font-extrabold">
            {statistics.totalStudents}
          </p>
          <div>
            <p className="text-2xl font-bold">Total</p>
            <p className="text-sm font-medium">Students</p>
          </div>
        </div>
        <div className="p-6 bg-white border-2 border-black rounded-lg flex items-center gap-4">
          <p className="text-6xl font-extrabold">
            {statistics.totalIncomes}
          </p>
          <div>
            <p className="text-2xl font-bold">DH</p>
            <p className="text-sm font-medium">Total Incomes</p>
          </div>
        </div>
        <div className="p-6 bg-white border-2 border-black rounded-lg flex items-center gap-4">
          <p className="text-6xl font-extrabold">
            {statistics.bestCourses}
          </p>
          <div>
            <p className="text-2xl font-bold">Best</p>
            <p className="text-sm font-medium">Courses</p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-6">Courses</h2>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <div className="border-2 border-black p-6 rounded-lg relative" key={course.id}>
            <h1 className="text-2xl font-bold mb-3 pr-20">{course.title}</h1>
            <p className="text-sm mb-4">{course.description}</p>
            <div className="h-0.5 w-full bg-black mb-4"></div>
            <p className="text-sm mb-1"><span className="font-semibold">Instructor:</span> {course.instructor}</p>
            <p className="text-sm mb-1"><span className="font-semibold">Category:</span> {course.category}</p>
            <p className="text-sm mb-1"><span className="font-semibold">Registered Students:</span> {course.studentsNumber}</p>
            <p className="text-sm mb-1"><span className="font-semibold">Price:</span> {course.price} DH</p>
            <p className="text-sm mb-12"><span className="font-semibold">Income:</span> {course.price * course.studentsNumber} DH</p>
            <p className={statusBadges[course.status]}>{course.status}</p>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Link
                className="bg-white border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                to={`/course/edit/${course.id}`}
              >
                <SquarePen size={20} strokeWidth={2} />
              </Link>
              <button
                type="button"
                className="bg-white border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => dispatch(deleteCourse(course.id))}
              >
                <Trash size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Dashboard;
