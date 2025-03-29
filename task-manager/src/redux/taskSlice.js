import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage (if available)
const loadTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

// Save tasks to localStorage whenever they change
const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: loadTasks() }, // Load tasks on initialization
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasks(state.tasks); // Save after adding
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveTasks(state.tasks); // Save after updating
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasks(state.tasks); // Save after deleting
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasks(state.tasks); // Save after toggling complete
      }
    },
    reorderTasks: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [movedTask] = state.tasks.splice(startIndex, 1);
      state.tasks.splice(endIndex, 0, movedTask);
      saveTasks(state.tasks); // Save after reordering
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleComplete, reorderTasks } = taskSlice.actions;
export default taskSlice.reducer;
