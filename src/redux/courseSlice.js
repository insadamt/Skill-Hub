import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: [
    {
      id: "2",
      title: "Advanced React Patterns",
      category: "Development",
      level: "Advanced",
      status: "Public",
      instructor: "Sarah Chen",
      price: 850,
      duration: 120,
      description:
        "Master advanced React patterns including hooks, context, and performance optimization",
      studentsNumber: 320,
      certification: "Certificated",
    },
    {
      id: "3",
      title: "UI/UX Fundamentals",
      category: "Design",
      level: "Beginner",
      status: "Public",
      instructor: "Alex Morgan",
      price: 600,
      duration: 60,
      description:
        "Learn the core principles of user interface and user experience design",
      studentsNumber: 450,
      certification: "Certificated",
    },
    {
      id: "4",
      title: "Digital Marketing Strategy",
      category: "Marketing",
      level: "Intermediate",
      status: "Public",
      instructor: "Mohammed Alami",
      price: 700,
      duration: 80,
      description:
        "Develop comprehensive digital marketing strategies for modern businesses",
      studentsNumber: 280,
      certification: "Not Certificated",
    },
    {
      id: "5",
      title: "Python for Data Science",
      category: "Development",
      level: "Intermediate",
      status: "Public",
      instructor: "Dr. Lisa Wang",
      price: 950,
      duration: 100,
      description:
        "Use Python libraries for data analysis, visualization, and machine learning",
      studentsNumber: 510,
      certification: "Certificated",
    },
    {
      id: "6",
      title: "Business Analytics",
      category: "Business",
      level: "Intermediate",
      status: "Public",
      instructor: "James Peterson",
      price: 800,
      duration: 90,
      description:
        "Make data-driven business decisions using analytics tools and frameworks",
      studentsNumber: 195,
      certification: "Certificated",
    },
    {
      id: "7",
      title: "Spanish Conversation",
      category: "Languages",
      level: "Beginner",
      status: "Public",
      instructor: "Maria Garcia",
      price: 350,
      duration: 50,
      description:
        "Build conversational Spanish skills through interactive practice sessions",
      studentsNumber: 670,
      certification: "Not Certificated",
    },
    {
      id: "8",
      title: "Brand Identity Design",
      category: "Design",
      level: "Expert",
      status: "Public",
      instructor: "David Kim",
      price: 1200,
      duration: 150,
      description:
        "Create compelling brand identities from concept to final deliverables",
      studentsNumber: 180,
      certification: "Certificated",
    },
    {
      id: "9",
      title: "Startup Essentials",
      category: "Business",
      level: "Beginner",
      status: "Public",
      instructor: "Fatima Zahir",
      price: 550,
      duration: 70,
      description:
        "Learn the fundamentals of launching and growing a successful startup",
      studentsNumber: 420,
      certification: "Not Certificated",
    },
    {
      id: "10",
      title: "SEO Mastery",
      category: "Marketing",
      level: "Advanced",
      status: "Public",
      instructor: "Omar Benali",
      price: 750,
      duration: 85,
      description:
        "Advanced search engine optimization techniques for maximum visibility",
      studentsNumber: 290,
      certification: "Certificated",
    },
    {
      id: "11",
      title: "French Grammar Intensive",
      category: "Languages",
      level: "Intermediate",
      status: "Public",
      instructor: "Claire Dubois",
      price: 450,
      duration: 65,
      description:
        "Master French grammar rules through structured lessons and exercises",
      studentsNumber: 380,
      certification: "Certificated",
    },
  ],
  reducers: {
    createCourse: (state, action) => {
      const course = {
        ...action.payload,
        id: Date.now().toString(),
        price: Number(action.payload.price),
        studentsNumber: Number(action.payload.studentsNumber),
        duration: Number(action.payload.duration),
      };
      state.push(course);
    },
    editCourse: (state, action) => {
      const index = state.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = {
          ...action.payload,
          price: Number(action.payload.price),
          studentsNumber: Number(action.payload.studentsNumber),
          duration: Number(action.payload.duration),
        };
      }
    },
    deleteCourse: (state, action) => {
      return (state = state.filter((course) => course.id != action.payload));
    },
  },
});

export const { createCourse, editCourse, deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;
