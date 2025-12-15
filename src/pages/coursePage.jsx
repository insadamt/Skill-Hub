import { Undo2 } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


const CoursePage = () => {
    const { id } = useParams()
    const courses = useSelector(state => state.courses)
    const course = courses.find(course => course.id === id)


    return (
        <main className="p-3 md:p-5 lg:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Course Details</h1>
                <Link className="w-full sm:w-auto bg-red-500 p-3 rounded-md flex gap-2 justify-center hover:bg-red-600 hover:scale-105 duration-300 transition-all text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" to={"/catalogue"} aria-label="Back to catalogue">
                    <Undo2 /> Back
                </Link>
            </div>
            <section aria-label="Course Information" className="p-3 md:p-4 lg:p-5 bg-gray-200 mt-3 md:mt-4 lg:mt-5 rounded-md flex flex-col gap-3 md:gap-4">
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl">Title</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-blue-500">{course.title}</p>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl">Description</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-blue-500">{course.description}</p>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl">Instructor</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-blue-500">{course.instructor}</p>
                </div>
                <hr className="text-gray-300 my-2 md:my-3" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                    <div>
                        <h3 className="text-base md:text-lg lg:text-2xl">Category</h3>
                        <p className="text-sm md:text-base lg:text-lg text-blue-500">{course.category}</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg lg:text-2xl">Price</h3>
                        <p className="text-sm md:text-base lg:text-lg text-blue-500">{course.price} DH</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg lg:text-2xl">Duration</h3>
                        <p className="text-sm md:text-base lg:text-lg text-blue-500">{course.duration}h</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg lg:text-2xl">Level</h3>
                        <p className="text-sm md:text-base lg:text-lg text-blue-500">{course.level}</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg lg:text-2xl">Registered Students</h3>
                        <p className="text-sm md:text-base lg:text-lg text-blue-500">{course.studentsNumber}</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg lg:text-2xl">Certificated</h3>
                        <p className="text-sm md:text-base lg:text-lg text-blue-500">{course.certification === "Certificated" ? "Yes" : "No"}</p>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default CoursePage;
