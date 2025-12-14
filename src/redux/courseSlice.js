import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: [
    {
      id : "0",
      title: "Demo",
      category: "Design",
      level: "Beginner",
      status: "Draft",
      instructor: "Mr Karim",
      price : 500,
      duration : 90,
      description : "Demo Course for testing",
      studentsNumber : 50,
      certification : "Certificated",
    },
    {
      id : "1",
      title: "Demo",
      category: "Marketing",
      level: "Beginner",
      status: "Public",
      instructor: "Mr Karim",
      price : 400,
      duration : 40,
      description : "Demo Course for testing",
      studentsNumber : 100,
      certification : "Not Certificated",
    },
  ],
  reducers: {
    createCourse: (state, action) => {
      const course = {
        ...action.payload,
        id : Date.now().toString(),
        price : Number(action.payload.price),
        studentsNumber : Number(action.payload.studentsNumber),
        duration : Number(action.payload.duration),
      }
      state.push(course)
    },
    editCourse: (state, action) => {
      const index = state.findIndex(course => course.id === action.payload.id);
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
      return state = state.filter(course => course.id != action.payload)
    },
  },
});

export const { createCourse, editCourse, deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;
