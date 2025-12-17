import { CirclePlus, SquarePen, Trash, BookOpen, Users, Wallet, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteCourse } from "../redux/courseSlice";




const Dashboard = () => {
  const statusBadges = {
    Draft: "bg-neutral-500/20 dark:bg-neutral-400/10 border border-neutral-500/30 dark:border-neutral-400/20 text-neutral-700 dark:text-neutral-300",
    Archive: "bg-yellow-500/20 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 text-yellow-700 dark:text-yellow-300",
    Public: "bg-green-500/20 dark:bg-green-400/10 border border-green-500/30 dark:border-green-400/20 text-green-700 dark:text-green-300",
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
    <div className="h-full overflow-y-auto p-4 lg:p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4 mb-6 lg:mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">Dashboard</h1>
          <Link
            className="px-6 py-3 bg-gradient-to-br from-neutral-900 to-neutral-950 dark:from-neutral-100 dark:to-neutral-50 text-neutral-50 dark:text-neutral-900 rounded-xl font-gabarito font-semibold shadow-md dark:shadow-black/20 hover:shadow-lg hover:scale-105 transition-all duration-200 border border-neutral-900 dark:border-neutral-100 flex items-center gap-2"
            to={"/course/add"}
          >
            <CirclePlus className="w-5 h-5" />
            <span className="hidden md:block lg:block">Add Course</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
          <div className="relative bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm p-3 lg:p-5 rounded-xl lg:rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200">
            <div className="flex items-center gap-2 lg:flex-col lg:items-start mb-2 lg:mb-3">
              <div className="bg-neutral-100 dark:bg-neutral-800 p-1.5 lg:p-2 rounded-lg lg:absolute lg:top-3 lg:right-3">
                <BookOpen className="w-4 h-4 lg:w-5 lg:h-5 text-neutral-600 dark:text-neutral-400" />
              </div>
              <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">Active</div>
            </div>
            <div className="text-2xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{statistics.activeCourses}</div>
          </div>

          <div className="relative bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm p-3 lg:p-5 rounded-xl lg:rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200">
            <div className="flex items-center gap-2 lg:flex-col lg:items-start mb-2 lg:mb-3">
              <div className="bg-neutral-100 dark:bg-neutral-800 p-1.5 lg:p-2 rounded-lg lg:absolute lg:top-3 lg:right-3">
                <Users className="w-4 h-4 lg:w-5 lg:h-5 text-neutral-600 dark:text-neutral-400" />
              </div>
              <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">Students</div>
            </div>
            <div className="text-2xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{statistics.totalStudents}</div>
          </div>

          <div className="relative bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm p-3 lg:p-5 rounded-xl lg:rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200">
            <div className="flex items-center gap-2 lg:flex-col lg:items-start mb-2 lg:mb-3">
              <div className="bg-neutral-100 dark:bg-neutral-800 p-1.5 lg:p-2 rounded-lg lg:absolute lg:top-3 lg:right-3">
                <Wallet className="w-4 h-4 lg:w-5 lg:h-5 text-neutral-600 dark:text-neutral-400" />
              </div>
              <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">Income</div>
            </div>
            <div className="text-2xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{statistics.totalIncomes}<span className="text-sm lg:text-lg font-normal text-neutral-600 dark:text-neutral-400 ml-1">DH</span></div>
          </div>

          <div className="relative bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm p-3 lg:p-5 rounded-xl lg:rounded-2xl shadow-sm dark:shadow-black/20 border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200">
            <div className="flex items-center gap-2 lg:flex-col lg:items-start mb-2 lg:mb-3">
              <div className="bg-neutral-100 dark:bg-neutral-800 p-1.5 lg:p-2 rounded-lg lg:absolute lg:top-3 lg:right-3">
                <Award className="w-4 h-4 lg:w-5 lg:h-5 text-neutral-600 dark:text-neutral-400" />
              </div>
              <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">Best</div>
            </div>
            <div className="text-2xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{statistics.bestCourses}</div>
          </div>
        </div>


        <h2 className="text-2xl lg:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-4 lg:mb-6">All Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {courses.map((course) => (
            <div className="bg-gradient-to-br from-white/80 to-neutral-50/50 dark:from-neutral-800/50 dark:to-neutral-900/30 backdrop-blur-sm rounded-2xl shadow-md dark:shadow-black/30 border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-200 overflow-hidden" key={course.id}>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 leading-tight line-clamp-2 flex-1">{course.title}</h3>
                  <div className={`${statusBadges[course.status]} rounded-lg px-2 py-1 text-xs font-bold tracking-wide whitespace-nowrap`}>
                    {course.status}
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="space-y-2 mb-4 pb-4 border-b border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-500 dark:text-neutral-500">Instructor</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-500 dark:text-neutral-500">Category</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">{course.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-500 dark:text-neutral-500">Students</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">{course.studentsNumber}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">Price</div>
                    <div className="text-lg font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.price} DH</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">Income</div>
                    <div className="text-lg font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.price * course.studentsNumber} DH</div>
                  </div>
                </div>


                <div className="flex justify-end gap-2 pt-4 border-t border-neutral-200/50 dark:border-neutral-700/50">
                  <Link
                    className="bg-white/50 dark:bg-neutral-800/30 text-neutral-900 dark:text-neutral-50 p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50 hover:scale-105 transition-all duration-200"
                    to={`/course/edit/${course.id}`}
                  >
                    <SquarePen className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    className="bg-red-500/20 dark:bg-red-400/10 text-red-700 dark:text-red-300 p-2 rounded-lg border border-red-500/30 dark:border-red-400/20 hover:bg-red-500/30 dark:hover:bg-red-400/20 hover:scale-105 transition-all duration-200"
                    onClick={() => dispatch(deleteCourse(course.id))}
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default Dashboard;
