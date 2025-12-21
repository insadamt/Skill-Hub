import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCardBoardView from "../components/catalogueCardBoardView";
import { Filter, X } from "lucide-react";
import FilterBar from "../components/filterBar";
import { useState, useEffect } from "react";

const Catalogue = () => {
  const courses = useSelector((state) => state.courses).filter(
    (course) => course.status === "Public"
  );

  const [enableFilter, setEnableFilter] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    return window.matchMedia("(min-width: 1024px)").matches;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (enableFilter && !isLargeScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [enableFilter, isLargeScreen]);

  return (
    <div className="h-full overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-800/50">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5 lg:space-y-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 lg:gap-6">
          <div className="flex-1 w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-1.5 sm:mb-2 leading-tight">
              Course Catalogue
            </h2>
          </div>

          <button
            onClick={() => setEnableFilter(!enableFilter)}
            className={`group flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 rounded-xl font-gabarito font-semibold text-sm lg:text-base xl:text-lg transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-black/20 dark:hover:shadow-xl backdrop-blur-sm w-full sm:w-auto ${
              enableFilter
                ? "bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 text-neutral-50 dark:text-neutral-900 border border-neutral-300/30 dark:border-neutral-700/30"
                : "bg-white/70 dark:bg-neutral-800/70 text-neutral-900 dark:text-neutral-50 border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/90 dark:hover:bg-neutral-800/90 hover:border-neutral-300/70 dark:hover:border-neutral-600/70"
            }`}
          >
            {enableFilter ? (
              <>
                <X size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Close</span>
                <span className="sm:hidden">Close Filter</span>
              </>
            ) : (
              <>
                <Filter size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Filter</span>
                <span className="sm:hidden">Show Filter</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
          <div
            className={`flex-1 ${
              enableFilter && isLargeScreen ? "lg:w-2/3 xl:w-3/4" : "w-full"
            }`}
          >
            <div
              className={`grid gap-3 sm:gap-4 lg:gap-5 xl:gap-6 ${
                enableFilter && isLargeScreen
                  ? "grid-cols-1 xl:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {filteredCourses.map((course) => (
                <div key={course.id}>
                  <CategoryCardBoardView course={course} />
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-neutral-200/50 to-neutral-300/50 dark:from-neutral-800/50 dark:to-neutral-700/50 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
                  <Filter className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-neutral-500 dark:text-neutral-400" />
                </div>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-gabarito font-semibold text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3">
                  No courses found
                </p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-neutral-500 dark:text-neutral-500 max-w-md">
                  Try adjusting your filters to discover available courses
                </p>
                <button
                  onClick={() => {
                    setFilteredCourses(courses);
                    setEnableFilter(false);
                  }}
                  className="group mt-4 w-50 flex items-center justify-center gap-2.5 px-6 py-3.5 lg:py-4 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-neutral-100 dark:via-neutral-50 dark:to-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-xl font-gabarito font-bold text-sm lg:text-base xl:text-lg shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 dark:hover:from-neutral-50 dark:hover:via-white dark:hover:to-neutral-50"
                >
                  Reset
                </button>
              </div>
            )}
          </div>

          {enableFilter && isLargeScreen && (
            <div className="shrink-0 w-full lg:w-80 xl:w-96">
              <div className="sticky top-4 hover:shadow-xl transition-all duration-200">
                <FilterBar
                  courses={courses}
                  setFilteredCourses={setFilteredCourses}
                  isLargeScreen={isLargeScreen}
                  setEnableFilter={setEnableFilter}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {enableFilter && !isLargeScreen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 dark:bg-black/80 z-40 backdrop-blur-sm"
            onClick={() => setEnableFilter(false)}
          />

          <div className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-t-3xl shadow-2xl border-t border-neutral-200/50 dark:border-neutral-700/50">
            <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200/50 dark:border-neutral-700/50">
              <h3 className="text-lg font-gabarito font-bold text-neutral-900 dark:text-neutral-50">
                Filter Courses
              </h3>
              <button
                onClick={() => setEnableFilter(false)}
                className="p-2 rounded-lg bg-neutral-100/70 dark:bg-neutral-800/70 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70 transition-all duration-200"
              >
                <X
                  size={20}
                  strokeWidth={2.5}
                  className="text-neutral-900 dark:text-neutral-50"
                />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-4rem)] overscroll-contain">
              <FilterBar
                courses={courses}
                setFilteredCourses={setFilteredCourses}
                isLargeScreen={isLargeScreen}
                setEnableFilter={setEnableFilter}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Catalogue;
