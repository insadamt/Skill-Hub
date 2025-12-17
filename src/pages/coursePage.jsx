import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


const CoursePage = () => {
    const { id } = useParams()
    const courses = useSelector(state => state.courses)
    const course = courses.find(course => course.id == id)

    const levelBadges = {
        Beginner: "bg-green-500/20 dark:bg-green-400/10 border border-green-500/30 dark:border-green-400/20 text-green-700 dark:text-green-300",
        Intermediate: "bg-yellow-500/20 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 text-yellow-700 dark:text-yellow-300",
        Advanced: "bg-orange-500/20 dark:bg-orange-400/10 border border-orange-500/30 dark:border-orange-400/20 text-orange-700 dark:text-orange-300",
        Expert: "bg-red-500/20 dark:bg-red-400/10 border border-red-500/30 dark:border-red-400/20 text-red-700 dark:text-red-300",
    };

    return (
        <div className="h-full overflow-y-auto p-4 lg:p-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">Course Details</h1>
                    <Link 
                        className="px-6 py-3 bg-white/50 dark:bg-neutral-800/30 text-neutral-900 dark:text-neutral-50 rounded-xl font-gabarito font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50 hover:scale-105 transition-all duration-200 flex items-center gap-2" 
                        to={"/catalogue"}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </Link>
                </div>

                <div className="bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-700/60 rounded-2xl shadow-sm dark:shadow-black/20 p-5 lg:p-6 mb-5">
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                            <h2 className="text-2xl lg:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-2">{course.title}</h2>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">by {course.instructor}</p>
                        </div>
                        <div className={`${levelBadges[course.level]} rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide whitespace-nowrap`}>
                            {course.level}
                        </div>
                    </div>

                    <div className="mb-6 pb-6 border-b border-neutral-200/50 dark:border-neutral-700/50">
                        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide mb-2">Description</h3>
                        <p className="text-base text-neutral-900 dark:text-neutral-50 leading-relaxed">{course.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-white/50 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/20 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-700/40">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide mb-1">Category</div>
                            <div className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.category}</div>
                        </div>

                        <div className="bg-gradient-to-br from-white/50 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/20 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-700/40">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide mb-1">Price</div>
                            <div className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.price} <span className="text-sm font-normal">DH</span></div>
                        </div>

                        <div className="bg-gradient-to-br from-white/50 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/20 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-700/40">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide mb-1">Duration</div>
                            <div className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.duration} <span className="text-sm font-normal">hours</span></div>
                        </div>

                        <div className="bg-gradient-to-br from-white/50 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/20 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-700/40">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide mb-1">Students Enrolled</div>
                            <div className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.studentsNumber}</div>
                        </div>

                        <div className="bg-gradient-to-br from-white/50 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/20 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-700/40">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide mb-1">Certification</div>
                            <div className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.certification === "Certificated" ? "Yes" : "No"}</div>
                        </div>

                        <div className="bg-gradient-to-br from-white/50 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/20 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-700/40">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide mb-1">Status</div>
                            <div className="text-xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">{course.status}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CoursePage;
