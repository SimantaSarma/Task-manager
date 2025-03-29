import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/taskSlice";
import { Button, TextField } from "@mui/material";

const TaskForm = ({ task, onClose }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return; // Prevent empty task submission

    if (task) {
      dispatch(updateTask({ ...task, title }));
    } else {
      dispatch(addTask({ id: Date.now(), title, completed: false }));
      setTitle(""); // ✅ Clear input field after adding task
    }

    if (onClose) onClose(); // Close modal or form if editing
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Task"
        fullWidth
      />
      <Button type="submit" variant="contained">
        {task ? "Update" : "Add"}
      </Button>
    </form>
  );
};

export default TaskForm;
