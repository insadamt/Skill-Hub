import { SquarePlus } from "lucide-react";
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
    <main className="p-3 md:p-5 lg:p-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Create Course</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <section aria-label="Course Information" className="mt-3 md:mt-4 gap-3 md:gap-4 bg-gray-100/50 p-3 md:p-5 rounded-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">Course Info</h2>
          <div className="mt-2 md:mt-3">
            <label htmlFor="title" className="text-lg md:text-xl lg:text-2xl">
              Title
            </label>
            <br />
            <input
              id="title"
              placeholder="Course Title"
              type="text"
              name="title"
              required
              className={errors.title ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded text-sm md:text-base" : "bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"}
              value={inputs.title}
              onChange={(e) => handleInputs(e)}
              aria-invalid={errors.title}
              aria-describedby={errors.title ? "title-error" : undefined}
            />
            {errors.title ? <p id="title-error" className="text-red-500 mt-1 text-sm">Title is Empty !</p> : null}
          </div>
          <div className="mt-2 md:mt-3">
            <label htmlFor="description" className="text-lg md:text-xl lg:text-2xl">
              Description
            </label>
            <br />
            <textarea
              id="description"
              placeholder="Course Description"
              name="description"
              required
              rows="4"
              className={errors.description ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded text-sm md:text-base" : "bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"}
              value={inputs.description}
              onChange={(e) => handleInputs(e)}
              aria-invalid={errors.description}
              aria-describedby={errors.description ? "description-error" : undefined}
            />
            {errors.description ? <p id="description-error" className="text-red-500 mt-1 text-sm">Description is Empty !</p> : null}
          </div>
          <div className="mt-2 md:mt-3">
            <label htmlFor="instructor" className="text-lg md:text-xl lg:text-2xl">
              Instructor
            </label>
            <br />
            <input
              id="instructor"
              placeholder="Course Instructor"
              type="text"
              name="instructor"
              required
              className={errors.instructor ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded text-sm md:text-base" : "bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"}
              value={inputs.instructor}
              onChange={(e) => handleInputs(e)}
              aria-invalid={errors.instructor}
              aria-describedby={errors.instructor ? "instructor-error" : undefined}
            />
            {errors.instructor ? <p id="instructor-error" className="text-red-500 mt-1 text-sm">Instructor is Empty !</p> : null}
          </div>
        </section>
        <section aria-label="Course Details" className="mt-3 md:mt-4 gap-3 md:gap-4 bg-gray-100/50 p-3 md:p-5 rounded-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">Course Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            <div className="mt-2 md:mt-3">
              <label className="text-lg md:text-xl lg:text-2xl" htmlFor="category">
                Category
              </label>
              <br />
              <select
                id="category"
                className="bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"
                name="category"
                onChange={(e) => handleInputs(e)}
              >
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
                <option value="Languages">Languages</option>
              </select>
            </div>
            <div className="mt-2 md:mt-3">
              <label className="text-lg md:text-xl lg:text-2xl" htmlFor="level">
                Level
              </label>
              <br />
              <select
                id="level"
                className="bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"
                name="level"
                onChange={(e) => handleInputs(e)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div className="mt-2 md:mt-3">
              <label className="text-lg md:text-xl lg:text-2xl" htmlFor="status">
                Status
              </label>
              <br />
              <select
                id="status"
                className="bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"
                name="status"
                onChange={(e) => handleInputs(e)}
              >
                <option value="Draft">Draft</option>
                <option value="Archive">Archive</option>
                <option value="Public">Public</option>
              </select>
            </div>
            <div className="mt-2 md:mt-3">
              <label className="text-lg md:text-xl lg:text-2xl" htmlFor="certification">
                Certification
              </label>
              <br />
              <select
                id="certification"
                className="bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"
                name="certification"
                onChange={(e) => handleInputs(e)}
              >
                <option value="Certificated">Certificated</option>
                <option value="Not certificated">Not Certificated</option>
              </select>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
              <div className="mt-2 md:mt-3">
                <label htmlFor="price" className="text-lg md:text-xl lg:text-2xl">
                  Price
                </label>
                <br />
                <input
                  id="price"
                  placeholder="Course Price"
                  type="number"
                  name="price"
                  required
                  className={errors.price ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded text-sm md:text-base" : "bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"}
                  value={inputs.price}
                  onChange={(e) => handleInputs(e)}
                  aria-invalid={errors.price}
                  aria-describedby={errors.price ? "price-error" : undefined}
                />
                {errors.price ? <p id="price-error" className="text-red-500 mt-1 text-sm">Price must be greater than 0 !</p> : null}
              </div>
              <div className="mt-2 md:mt-3">
                <label htmlFor="studentsNumber" className="text-lg md:text-xl lg:text-2xl">
                  Students Number
                </label>
                <br />
                <input
                  id="studentsNumber"
                  placeholder="Total Students"
                  type="number"
                  name="studentsNumber"
                  required
                  className={errors.studentsNumber ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded text-sm md:text-base" : "bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"}
                  value={inputs.studentsNumber}
                  onChange={(e) => handleInputs(e)}
                  aria-invalid={errors.studentsNumber}
                  aria-describedby={errors.studentsNumber ? "students-error" : undefined}
                />
                {errors.studentsNumber ? <p id="students-error" className="text-red-500 mt-1 text-sm">Students Number must be greater than 0 !</p> : null}
              </div>
              <div className="mt-2 md:mt-3">
                <label htmlFor="duration" className="text-lg md:text-xl lg:text-2xl">
                  Duration
                </label>
                <br />
                <input
                  id="duration"
                  placeholder="Course Duration (hours)"
                  type="number"
                  name="duration"
                  required
                  className={errors.duration ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded text-sm md:text-base" : "bg-gray-300/50 p-2 w-full rounded text-sm md:text-base"}
                  value={inputs.duration}
                  onChange={(e) => handleInputs(e)}
                  aria-invalid={errors.duration}
                  aria-describedby={errors.duration ? "duration-error" : undefined}
                />
                {errors.duration ? <p id="duration-error" className="text-red-500 mt-1 text-sm">Duration must be greater than 0 !</p> : null}
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-end mt-2 md:mt-3">
          <button
            type="button"
            className="w-full sm:w-auto p-3 bg-green-400/80 rounded-md flex gap-2 justify-center hover:bg-green-400 hover:scale-105 duration-300 transition-all text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={handleCreate}
            aria-label="Create new course"
          >
            <SquarePlus />
            Create
          </button>
        </div>
      </form>
    </main>
  );
};


export default CourseAdd;
