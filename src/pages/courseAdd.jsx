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
    <div className="p-5">
      <h1 className="text-5xl font-bold">Create Course</h1>
      <div className="mt-4 gap-4 bg-gray-100/50 p-5 rounded-md">
        <h1 className="text-4xl">Course Info</h1>
        <div className="mt-3">
          <label htmlFor="" className="text-2xl">
            Title
          </label>
          <br />
          <input
            placeholder="Course Title"
            type="text"
            name="title"
            className={errors.title ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded" : "bg-gray-300/50 p-2 w-full rounded"}
            value={inputs.title}
            onChange={(e) => handleInputs(e)}
          />
          {errors.title ? <p className="text-red-500 mt-1">Title is Empty !</p> : null}
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-2xl">
            Description
          </label>
          <br />
          <textarea
            placeholder="Course Description"
            type="text"
            name="description"
            className={errors.description ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded" : "bg-gray-300/50 p-2 w-full rounded"}
            value={inputs.description}
            onChange={(e) => handleInputs(e)}
          />
          {errors.description ? <p className="text-red-500 mt-1">Description is Empty !</p> : null}
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-2xl">
            Instructor
          </label>
          <br />
          <input
            placeholder="Course Instructor"
            type="text"
            name="instructor"
            className={errors.instructor ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded" : "bg-gray-300/50 p-2 w-full rounded"}
            value={inputs.instructor}
            onChange={(e) => handleInputs(e)}
          />
          {errors.instructor ? <p className="text-red-500 mt-1">Instructor is Empty !</p> : null}
        </div>
      </div>
      <div className="mt-4 gap-4 bg-gray-100/50 p-5 rounded-md">
        <h1 className="text-4xl">Course Details</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="mt-3">
            <label className="text-2xl" htmlFor="">
              Category
            </label>
            <br />
            <select
              className="bg-gray-300/50 p-2 w-full rounded"
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
          <div className="mt-3">
            <label className="text-2xl" htmlFor="">
              Level
            </label>
            <br />
            <select
              className="bg-gray-300/50 p-2 w-full rounded"
              name="level"
              onChange={(e) => handleInputs(e)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="mt-3 ">
            <label className="text-2xl" htmlFor="">
              Status
            </label>
            <br />
            <select
              className="bg-gray-300/50 p-2 w-full rounded"
              name="status"
              onChange={(e) => handleInputs(e)}
            >
              <option value="Draft">Draft</option>
              <option value="Archive">Archive</option>
              <option value="Public">Public</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="text-2xl" htmlFor="">
              Certification
            </label>
            <br />
            <select
              className="bg-gray-300/50 p-2 w-full rounded"
              name="certification"
              onChange={(e) => handleInputs(e)}
            >
              <option value="Certificated">Certificated</option>
              <option value="Not certificated">Not Certificated</option>
            </select>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-5">
            <div className="mt-3">
              <label htmlFor="" className="text-2xl">
                Price
              </label>
              <br />
              <input
                placeholder="Course Price"
                type="number"
                name="price"
                className={errors.price ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded" : "bg-gray-300/50 p-2 w-full rounded"}
                value={inputs.price}
                onChange={(e) => handleInputs(e)}
              />
              {errors.price ? <p className="text-red-500 mt-1">Price must be greater than 0 !</p> : null}
            </div>
            <div className="mt-3">
              <label htmlFor="" className="text-2xl">
                Students Number
              </label>
              <br />
              <input
                placeholder="Total Students"
                type="number"
                name="studentsNumber"
                className={errors.studentsNumber ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded" : "bg-gray-300/50 p-2 w-full rounded"}
                value={inputs.studentsNumber}
                onChange={(e) => handleInputs(e)}
              />
              {errors.studentsNumber ? <p className="text-red-500 mt-1">Students Number must be greater than 0 !</p> : null}
            </div>
            <div className="mt-3">
              <label htmlFor="" className="text-2xl">
                Duration
              </label>
              <br />
              <input
                placeholder="Total Students"
                type="number"
                name="duration"
                className={errors.duration ? "bg-gray-300/50 border border-red-500 p-2 w-full rounded" : "bg-gray-300/50 p-2 w-full rounded"}
                value={inputs.duration}
                onChange={(e) => handleInputs(e)}
              />
              {errors.duration ? <p className="text-red-500 mt-1">Duration must be greater than 0 !</p> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <button
          className="p-3 bg-green-400/80 rounded-md flex gap-2 hover:bg-green-400 hover:scale-105 duration-300"
          onClick={handleCreate}
        >
          <SquarePlus />
          Create
        </button>
      </div>
    </div>
  );
};

export default CourseAdd;
