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
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-6">Create Course</h1>
      <div className="mb-6 bg-white border-2 border-black p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Course Info</h1>
        <div className="mb-4">
          <label htmlFor="" className="text-lg font-semibold block mb-2">
            Title
          </label>
          <input
            placeholder="Course Title"
            type="text"
            name="title"
            className={errors.title ? "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black border-red-500" : "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"}
            value={inputs.title}
            onChange={(e) => handleInputs(e)}
          />
          {errors.title ? <p className="text-sm font-medium mt-2">Title is Empty !</p> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="" className="text-lg font-semibold block mb-2">
            Description
          </label>
          <textarea
            placeholder="Course Description"
            type="text"
            name="description"
            className={errors.description ? "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black border-red-500 min-h-24" : "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black min-h-24"}
            value={inputs.description}
            onChange={(e) => handleInputs(e)}
          />
          {errors.description ? <p className="text-sm font-medium mt-2">Description is Empty !</p> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="" className="text-lg font-semibold block mb-2">
            Instructor
          </label>
          <input
            placeholder="Course Instructor"
            type="text"
            name="instructor"
            className={errors.instructor ? "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black border-red-500" : "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"}
            value={inputs.instructor}
            onChange={(e) => handleInputs(e)}
          />
          {errors.instructor ? <p className="text-sm font-medium mt-2">Instructor is Empty !</p> : null}
        </div>
      </div>
      <div className="mb-6 bg-white border-2 border-black p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Course Details</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="text-lg font-semibold block mb-2" htmlFor="">
              Category
            </label>
            <select
              className="bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
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
          <div className="mb-4">
            <label className="text-lg font-semibold block mb-2" htmlFor="">
              Level
            </label>
            <select
              className="bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
              name="level"
              onChange={(e) => handleInputs(e)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="text-lg font-semibold block mb-2" htmlFor="">
              Status
            </label>
            <select
              className="bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
              name="status"
              onChange={(e) => handleInputs(e)}
            >
              <option value="Draft">Draft</option>
              <option value="Archive">Archive</option>
              <option value="Public">Public</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="text-lg font-semibold block mb-2" htmlFor="">
              Certification
            </label>
            <select
              className="bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
              name="certification"
              onChange={(e) => handleInputs(e)}
            >
              <option value="Certificated">Certificated</option>
              <option value="Not certificated">Not Certificated</option>
            </select>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-4">
            <div className="mb-4">
              <label htmlFor="" className="text-lg font-semibold block mb-2">
                Price
              </label>
              <input
                placeholder="Course Price"
                type="number"
                name="price"
                className={errors.price ? "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black border-red-500" : "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"}
                value={inputs.price}
                onChange={(e) => handleInputs(e)}
              />
              {errors.price ? <p className="text-sm font-medium mt-2">Price must be greater than 0 !</p> : null}
            </div>
            <div className="mb-4">
              <label htmlFor="" className="text-lg font-semibold block mb-2">
                Students Number
              </label>
              <input
                placeholder="Total Students"
                type="number"
                name="studentsNumber"
                className={errors.studentsNumber ? "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black border-red-500" : "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"}
                value={inputs.studentsNumber}
                onChange={(e) => handleInputs(e)}
              />
              {errors.studentsNumber ? <p className="text-sm font-medium mt-2">Students Number must be greater than 0 !</p> : null}
            </div>
            <div className="mb-4">
              <label htmlFor="" className="text-lg font-semibold block mb-2">
                Duration
              </label>
              <input
                placeholder="Total Students"
                type="number"
                name="duration"
                className={errors.duration ? "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black border-red-500" : "bg-white border-2 border-black p-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"}
                value={inputs.duration}
                onChange={(e) => handleInputs(e)}
              />
              {errors.duration ? <p className="text-sm font-medium mt-2">Duration must be greater than 0 !</p> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="px-6 py-3 bg-black text-white border-2 border-black rounded-lg flex items-center gap-2 font-medium hover:bg-white hover:text-black transition-all duration-300"
          onClick={handleCreate}
        >
          <SquarePlus size={20} strokeWidth={2} />
          Create
        </button>
      </div>
    </div>
  );
};


export default CourseAdd;
