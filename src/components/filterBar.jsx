import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const FilterBar = ({ courses, setFilteredCourses, isLargeScreen, setEnableFilter }) => {
  const [inputs, setInputs] = useState({
    category: "All",
    level: "All",
    price: {
      min: 0,
      max: 0,
    },
    certification: "All",
  });

  function handleInputs(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name !== "min" && name !== "max") {
      setInputs({ ...inputs, [name]: value });
    } else {
      setInputs({ ...inputs, price: { ...inputs.price, [name]: value } });
    }
  }

  function handleApplyFilter() {
    let filtered = courses
    if (inputs.category !== "All") {
      filtered = filtered.filter((course) => course.category == inputs.category)
    }
    if (inputs.level !== "All") {
      filtered = filtered.filter((course) => course.level == inputs.level)
    }
    if (inputs.price.min > 0) {
      filtered = filtered.filter((course) => course.price >= inputs.price.min)
    }
    if (inputs.price.max > 0) {
      filtered = filtered.filter((course) => course.price <= inputs.price.max)
    }
    if (inputs.certification !== "All") {
      filtered = filtered.filter((course) => course.certification == inputs.certification)
    }

    setFilteredCourses(filtered);
    if (!isLargeScreen) {
      setEnableFilter(false)
    }
  }

  function handleResetFilter() {
    setInputs({
      category: "All",
      level: "All",
      price: { min: 0, max: 0 },
      certification: "All",
    });
    setFilteredCourses(courses);
    if (!isLargeScreen) {
      setEnableFilter(false)
    }
  }

  return (
    <div className={`bg-gradient-to-br from-white/90 to-neutral-50/80 dark:from-neutral-900/90 dark:to-neutral-950/90 backdrop-blur-xl p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-black/30 border border-neutral-200/60 dark:border-neutral-800/70 transition-all duration-300 ${
      isLargeScreen ? "sticky top-4" : "relative"
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50">
          Filters
        </h3>
        <button
          onClick={handleResetFilter}
          className="text-xs lg:text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
        >
          Reset
        </button>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300/70 dark:via-neutral-700/70 to-transparent mb-6" />

      <div className="space-y-6">
        <div className="space-y-2.5">
          <label className="block text-sm lg:text-base font-semibold text-neutral-900 dark:text-neutral-50">
            Category
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-neutral-900/70 border border-neutral-300/60 dark:border-neutral-700/70 text-neutral-900 dark:text-neutral-50 text-sm lg:text-base font-medium cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 hover:border-neutral-400/70 dark:hover:border-neutral-600/70 shadow-sm hover:shadow-md appearance-none"
            value={inputs.category}
            name="category"
            onChange={handleInputs}
          >
            <option value="All">All Categories</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Business">Business</option>
            <option value="Languages">Languages</option>
          </select>
        </div>

        <div className="space-y-2.5">
          <label className="block text-sm lg:text-base font-semibold text-neutral-900 dark:text-neutral-50">
            Level
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-neutral-900/70 border border-neutral-300/60 dark:border-neutral-700/70 text-neutral-900 dark:text-neutral-50 text-sm lg:text-base font-medium cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 hover:border-neutral-400/70 dark:hover:border-neutral-600/70 shadow-sm hover:shadow-md appearance-none"
            value={inputs.level}
            name="level"
            onChange={handleInputs}
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        <div className="space-y-2.5">
          <label className="block text-sm lg:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
            Price Range (DH)
          </label>
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="space-y-2">
              <label className="block text-xs lg:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Min
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/60 dark:bg-neutral-900/70 border border-neutral-300/60 dark:border-neutral-700/70 text-neutral-900 dark:text-neutral-50 text-sm lg:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 hover:border-neutral-400/70 dark:hover:border-neutral-600/70 shadow-sm hover:shadow-md"
                name="min"
                value={inputs.price.min}
                onChange={handleInputs}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs lg:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Max
              </label>
              <input
                type="number"
                placeholder="∞"
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/60 dark:bg-neutral-900/70 border border-neutral-300/60 dark:border-neutral-700/70 text-neutral-900 dark:text-neutral-50 text-sm lg:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 hover:border-neutral-400/70 dark:hover:border-neutral-600/70 shadow-sm hover:shadow-md"
                name="max"
                value={inputs.price.max}
                onChange={handleInputs}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="block text-sm lg:text-base font-semibold text-neutral-900 dark:text-neutral-50">
            Certification
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-neutral-900/70 border border-neutral-300/60 dark:border-neutral-700/70 text-neutral-900 dark:text-neutral-50 text-sm lg:text-base font-medium cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 hover:border-neutral-400/70 dark:hover:border-neutral-600/70 shadow-sm hover:shadow-md appearance-none"
            value={inputs.certification}
            name="certification"
            onChange={handleInputs}
          >
            <option value="All">All Types</option>
            <option value="Certificated">Certificated</option>
            <option value="Not Certificated">Not Certificated</option>
          </select>
        </div>

        <div className="pt-2 space-y-3">
          <button
            onClick={handleApplyFilter}
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 lg:py-4 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-neutral-100 dark:via-neutral-50 dark:to-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-xl font-gabarito font-bold text-sm lg:text-base xl:text-lg shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 dark:hover:from-neutral-50 dark:hover:via-white dark:hover:to-neutral-50"
          >
            <Check size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform duration-200" />
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
