import { SquarePlus, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createCourse } from "../redux/courseSlice";


const CourseAdd = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "Design",
    level: "Beginner",
    status: "Draft",
    instructor: "",
    price: 0,
    duration: 0,
    studentsNumber: 0,
    certification: "Certificated",
  });


  const loginInfo = useSelector((state) => state.admin);
  const navigate = useNavigate();


  if (!loginInfo.loggedIn) {
    return <Navigate to="/" replace />;
  }


  function handleInputs(e) {
    const name = e.target.name;
    const value = e.target.value;


    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleNumberChange(name, delta) {
    setInputs({
      ...inputs,
      [name]: Math.max(0, Number(inputs[name]) + delta),
    });
  }


  const [errors, setErrors] = useState({
    title: false,
    description: false,
    instructor: false,
    price: false,
    studentsNumber: false,
    duration: false,
  });


  function handleCreate() {
    const errors = {
      title: !inputs.title,
      description: !inputs.description,
      instructor: !inputs.instructor,
      price: inputs.price <= 0 || !inputs.price,
      studentsNumber: inputs.studentsNumber < 0 || !inputs.studentsNumber,
      duration: inputs.duration < 0 || !inputs.duration,
    };


    const hasError = Object.values(errors).includes(true);
    setErrors(errors)


    if (!hasError) {
      dispatch(createCourse(inputs));
      navigate("/dashboard");
    }
  }


  const dispatch = useDispatch();


  return (
    <div className="h-full overflow-y-auto p-4 lg:p-6">
      <style>{`
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-6 lg:mb-8">Create Course</h1>
        
        <div className="bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-700/60 rounded-2xl shadow-sm dark:shadow-black/20 p-5 lg:p-6 mb-5">
          <h2 className="text-xl lg:text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-5">Course Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Title
              </label>
              <input
                placeholder="Enter course title"
                type="text"
                name="title"
                className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 border ${errors.title ? 'border-red-500/50 dark:border-red-400/50' : 'border-neutral-300 dark:border-neutral-700'} rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200`}
                value={inputs.title}
                onChange={(e) => handleInputs(e)}
              />
              {errors.title && <p className="text-xs text-red-600 dark:text-red-400 mt-1.5">Title is required</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Description
              </label>
              <textarea
                placeholder="Enter course description"
                name="description"
                rows="4"
                className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 border ${errors.description ? 'border-red-500/50 dark:border-red-400/50' : 'border-neutral-300 dark:border-neutral-700'} rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200 resize-none`}
                value={inputs.description}
                onChange={(e) => handleInputs(e)}
              />
              {errors.description && <p className="text-xs text-red-600 dark:text-red-400 mt-1.5">Description is required</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Instructor
              </label>
              <input
                placeholder="Enter instructor name"
                type="text"
                name="instructor"
                className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 border ${errors.instructor ? 'border-red-500/50 dark:border-red-400/50' : 'border-neutral-300 dark:border-neutral-700'} rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200`}
                value={inputs.instructor}
                onChange={(e) => handleInputs(e)}
              />
              {errors.instructor && <p className="text-xs text-red-600 dark:text-red-400 mt-1.5">Instructor is required</p>}
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-700/60 rounded-2xl shadow-sm dark:shadow-black/20 p-5 lg:p-6 mb-5">
          <h2 className="text-xl lg:text-2xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-5">Course Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 pr-10 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200 cursor-pointer"
                  name="category"
                  onChange={(e) => handleInputs(e)}
                >
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Languages">Languages</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 dark:text-neutral-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Level
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 pr-10 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200 cursor-pointer"
                  name="level"
                  onChange={(e) => handleInputs(e)}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 dark:text-neutral-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Status
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 pr-10 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200 cursor-pointer"
                  name="status"
                  onChange={(e) => handleInputs(e)}
                >
                  <option value="Draft">Draft</option>
                  <option value="Archive">Archive</option>
                  <option value="Public">Public</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 dark:text-neutral-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Certification
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 pr-10 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200 cursor-pointer"
                  name="certification"
                  onChange={(e) => handleInputs(e)}
                >
                  <option value="Certificated">Certificated</option>
                  <option value="Not certificated">Not Certificated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 dark:text-neutral-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Price (DH)
              </label>
              <div className="relative">
                <input
                  placeholder="0"
                  type="number"
                  name="price"
                  className={`w-full px-4 py-3 pr-10 bg-white dark:bg-neutral-900 border ${errors.price ? 'border-red-500/50 dark:border-red-400/50' : 'border-neutral-300 dark:border-neutral-700'} rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200`}
                  value={inputs.price}
                  onChange={(e) => handleInputs(e)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleNumberChange('price', 1)}
                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded transition-colors duration-150"
                  >
                    <ChevronUp className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNumberChange('price', -1)}
                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded transition-colors duration-150"
                  >
                    <ChevronDown className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                  </button>
                </div>
              </div>
              {errors.price && <p className="text-xs text-red-600 dark:text-red-400 mt-1.5">Price must be greater than 0</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Students
              </label>
              <div className="relative">
                <input
                  placeholder="0"
                  type="number"
                  name="studentsNumber"
                  className={`w-full px-4 py-3 pr-10 bg-white dark:bg-neutral-900 border ${errors.studentsNumber ? 'border-red-500/50 dark:border-red-400/50' : 'border-neutral-300 dark:border-neutral-700'} rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200`}
                  value={inputs.studentsNumber}
                  onChange={(e) => handleInputs(e)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleNumberChange('studentsNumber', 1)}
                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded transition-colors duration-150"
                  >
                    <ChevronUp className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNumberChange('studentsNumber', -1)}
                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded transition-colors duration-150"
                  >
                    <ChevronDown className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                  </button>
                </div>
              </div>
              {errors.studentsNumber && <p className="text-xs text-red-600 dark:text-red-400 mt-1.5">Must be 0 or greater</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Duration (hours)
              </label>
              <div className="relative">
                <input
                  placeholder="0"
                  type="number"
                  name="duration"
                  className={`w-full px-4 py-3 pr-10 bg-white dark:bg-neutral-900 border ${errors.duration ? 'border-red-500/50 dark:border-red-400/50' : 'border-neutral-300 dark:border-neutral-700'} rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all duration-200`}
                  value={inputs.duration}
                  onChange={(e) => handleInputs(e)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleNumberChange('duration', 1)}
                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded transition-colors duration-150"
                  >
                    <ChevronUp className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNumberChange('duration', -1)}
                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded transition-colors duration-150"
                  >
                    <ChevronDown className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                  </button>
                </div>
              </div>
              {errors.duration && <p className="text-xs text-red-600 dark:text-red-400 mt-1.5">Duration must be greater than 0</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-white/50 dark:bg-neutral-800/30 text-neutral-900 dark:text-neutral-50 rounded-xl font-gabarito font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50 hover:scale-105 transition-all duration-200"
          >
            Cancel
          </Link>
          <button
            className="px-6 py-3 bg-gradient-to-br from-neutral-900 to-neutral-950 dark:from-neutral-100 dark:to-neutral-50 text-neutral-50 dark:text-neutral-900 rounded-xl font-gabarito font-semibold shadow-md dark:shadow-black/20 hover:shadow-lg hover:scale-105 transition-all duration-200 border border-neutral-900 dark:border-neutral-100 flex items-center gap-2"
            onClick={handleCreate}
          >
            <SquarePlus className="w-5 h-5" />
            Create Course
          </button>
        </div>
      </div>
    </div>
  );
};


export default CourseAdd;
