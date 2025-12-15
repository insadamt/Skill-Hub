import { Undo2 } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


const CoursePage = () => {
    const { id } = useParams()
    const courses = useSelector(state => state.courses)
    const course = courses.find(course => course.id == id)


    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-5xl font-bold">Course Details</h1>
                <Link className="px-6 py-3 bg-white text-black border-2 border-black rounded-lg flex items-center gap-2 font-medium hover:bg-black hover:text-white transition-all duration-300" to={"/catalogue"}>
                    <Undo2 size={20} strokeWidth={2} /> Back
                </Link>
            </div>
            <div className="p-6 bg-white border-2 border-black rounded-lg flex flex-col gap-4">
                <h1 className="text-2xl"><span className="font-bold">Title:</span> <span className="font-medium">{course.title}</span></h1>
                <h1 className="text-2xl"><span className="font-bold">Description:</span> <span className="font-medium">{course.description}</span></h1>
                <h1 className="text-2xl"><span className="font-bold">Instructor:</span> <span className="font-medium">{course.instructor}</span></h1>
                <div className="h-0.5 w-full bg-black my-2"></div>
                <div className="grid grid-cols-3 gap-4">
                    <h2 className="text-lg"><span className="font-bold">Category:</span> <span className="font-medium">{course.category}</span></h2>
                    <h2 className="text-lg"><span className="font-bold">Price:</span> <span className="font-medium">{course.price} DH</span></h2>
                    <h2 className="text-lg"><span className="font-bold">Duration:</span> <span className="font-medium">{course.duration}h</span></h2>
                    <h2 className="text-lg"><span className="font-bold">Level:</span> <span className="font-medium">{course.level}</span></h2>
                    <h2 className="text-lg"><span className="font-bold">Registered Students:</span> <span className="font-medium">{course.studentsNumber}</span></h2>
                    <h2 className="text-lg"><span className="font-bold">Certificated:</span> <span className="font-medium">{course.certificated == "Certificated" ? "Yes" : "No"}</span></h2>
                </div>
            </div>
        </div>
    );
};


export default CoursePage;
