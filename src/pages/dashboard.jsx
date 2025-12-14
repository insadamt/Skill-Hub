import { CirclePlus, DeleteIcon, SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteCourse } from "../redux/courseSlice";

const Dashboard = () => {
  const statusBadges = {
    Draft: "absolute top-3 right-3 bg-gray-500/50 rounded-md px-3 py-1",
    Archive: "absolute top-3 right-3 bg-yellow-500/50 rounded-md px-3 py-1",
    Public: "absolute top-3 right-3 bg-green-500/50 rounded-md px-3 py-1",
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
    <div className="p-5">
      <div className="flex justify-between">
        <h1 className="text-5xl">Dashboard</h1>
        <Link
          className="p-3 bg-green-400 flex gap-3 rounded-md hover:bg-green-300 hover:scale-105 duration-300"
          to={"/course/add"}
        >
          <CirclePlus />
          <p>Add New Course</p>
        </Link>
      </div>
      <div className="grid grid-cols-4 mt-5 gap-4">
        <div className="p-3 bg-gray-200 rounded-md flex gap-4 ">
          <p className="ml-4 text-6xl font-extrabold">
            {statistics.activeCourses}
          </p>
          <div>
            <p className="text-2xl">Active</p>
            <p className="">Courses</p>
          </div>
        </div>
        <div className="p-3 bg-gray-200 rounded-md flex gap-4 ">
          <p className="ml-4 text-6xl font-extrabold">
            {statistics.totalStudents}
          </p>
          <div>
            <p className="text-2xl">Total</p>
            <p className="">Students</p>
          </div>
        </div>
        <div className="p-3 bg-gray-200 rounded-md flex gap-4 ">
          <p className="ml-4 text-6xl font-extrabold">
            {statistics.totalIncomes}
          </p>
          <div>
            <p className="text-2xl">DH</p>
            <p className="">Total Incomes</p>
          </div>
        </div>
        <div className="p-3 bg-gray-200 rounded-md flex gap-4 ">
          <p className="ml-4 text-6xl font-extrabold">
            {statistics.bestCourses}
          </p>
          <div>
            <p className="text-2xl">Best</p>
            <p className="">Courses</p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl mt-10">Courses</h2>
      <div className="grid grid-cols-3 mt-5 gap-4">
        {courses.map((course) => (
          <div className="shadow border border-gray-50  p-3 rounded-lg relative" key={course.id}>
            <h1 className="text-3xl mb-2">{course.title}</h1>
            <p>{course.description}</p>
            <hr className="my-3" />
            <p>Instructor : {course.instructor}</p>
            <p>Category : {course.category}</p>
            <p>Registered Students : {course.studentsNumber}</p>
            <p>Price : {course.price} DH</p>
            <p>Income : {course.price * course.studentsNumber} DH</p>
            <p className={statusBadges[course.status]}>{course.status}</p>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <Link
                className="bg-yellow-400 p-2 rounded-md"
                to={`/course/edit/${course.id}`}
              >
                <SquarePen />
              </Link>
              <button
                type="button"
                className="bg-red-400 p-2 rounded-md"
                onClick={() => dispatch(deleteCourse(course.id))}
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
