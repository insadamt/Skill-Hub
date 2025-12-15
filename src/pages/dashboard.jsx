import { CirclePlus, DeleteIcon, SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteCourse } from "../redux/courseSlice";


const Dashboard = () => {
  const statusBadges = {
    Draft: "absolute top-2 right-2 md:top-3 md:right-3 bg-gray-500/50 rounded-md px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
    Archive: "absolute top-2 right-2 md:top-3 md:right-3 bg-yellow-500/50 rounded-md px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
    Public: "absolute top-2 right-2 md:top-3 md:right-3 bg-green-500/50 rounded-md px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
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
      (course) => course.status === "Public"
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
    <div className="p-3 md:p-5 lg:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Dashboard</h1>
        <Link
          className="w-full sm:w-auto p-3 bg-green-400 flex gap-3 rounded-md hover:bg-green-300 hover:scale-105 duration-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 justify-center"
          to={"/course/add"}
          aria-label="Add new course"
        >
          <CirclePlus />
          <p>Add New Course</p>
        </Link>
      </div>
      <section aria-label="Statistics">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-4">
          <div className="p-3 bg-gray-200 rounded-md flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
            <p className="ml-0 sm:ml-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
              {statistics.activeCourses}
            </p>
            <div className="text-center sm:text-left">
              <p className="text-xl md:text-2xl">Active</p>
              <p className="">Courses</p>
            </div>
          </div>
          <div className="p-3 bg-gray-200 rounded-md flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
            <p className="ml-0 sm:ml-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
              {statistics.totalStudents}
            </p>
            <div className="text-center sm:text-left">
              <p className="text-xl md:text-2xl">Total</p>
              <p className="">Students</p>
            </div>
          </div>
          <div className="p-3 bg-gray-200 rounded-md flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
            <p className="ml-0 sm:ml-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
              {statistics.totalIncomes}
            </p>
            <div className="text-center sm:text-left">
              <p className="text-xl md:text-2xl">DH</p>
              <p className="">Total Incomes</p>
            </div>
          </div>
          <div className="p-3 bg-gray-200 rounded-md flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
            <p className="ml-0 sm:ml-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
              {statistics.bestCourses}
            </p>
            <div className="text-center sm:text-left">
              <p className="text-xl md:text-2xl">Best</p>
              <p className="">Courses</p>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Courses">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-8 lg:mt-10">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
          {courses.map((course) => (
            <div className="shadow border border-gray-50 p-3 rounded-lg relative" key={course.id}>
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-2">{course.title}</h3>
              <p>{course.description}</p>
              <hr className="my-3" />
              <p>Instructor : {course.instructor}</p>
              <p>Category : {course.category}</p>
              <p>Registered Students : {course.studentsNumber}</p>
              <p>Price : {course.price} DH</p>
              <p>Income : {course.price * course.studentsNumber} DH</p>
              <p className={statusBadges[course.status]}>{course.status}</p>
              <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Link
                  className="bg-yellow-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  to={`/course/edit/${course.id}`}
                  aria-label={`Edit ${course.title}`}
                >
                  <SquarePen />
                </Link>
                <button
                  type="button"
                  className="bg-red-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  onClick={() => dispatch(deleteCourse(course.id))}
                  aria-label={`Delete ${course.title}`}
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export default Dashboard;
