import { Undo2 } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const CoursePage = () => {
    const { id } = useParams()
    const courses = useSelector(state => state.courses)
    const course = courses.find(course => course.id == id)

    return (
        <div className="p-5">
            <div className="flex justify-between">
                <h1 className="text-5xl font-bold">Course Details</h1>
                <Link className="bg-red-500 p-3 rounded-md flex gap-2" to={"/catalogue"}>
                    <Undo2 /> Back
                </Link>
            </div>
            <div className="p-3 bg-gray-200 mt-5 rounded-md flex flex-col gap-4">
                <h1 className="text-3xl">Title : <span className="text-blue-500">{course.title}</span></h1>
                <h1 className="text-3xl">Description : <span className="text-blue-500">{course.description}</span></h1>
                <h1 className="text-3xl">Instructor : <span className="text-blue-500">{course.instructor}</span></h1>
                <hr className="text-gray-300 my-3" />
                <div className="grid grid-cols-3 gap-5">
                    <h2 className="text-2xl">Category : <span className="text-blue-500">{course.category}</span></h2>
                    <h2 className="text-2xl">Price : <span className="text-blue-500">{course.price} DH</span></h2>
                    <h2 className="text-2xl">Duration : <span className="text-blue-500">{course.duration}h</span></h2>
                    <h2 className="text-2xl">Level : <span className="text-blue-500">{course.level}</span></h2>
                    <h2 className="text-2xl">Registered Students : <span className="text-blue-500">{course.studentsNumber}</span></h2>
                    <h2 className="text-2xl">Certificated : <span className="text-blue-500">{course.certificated == "Certificated" ? "Yes" : "No"}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
