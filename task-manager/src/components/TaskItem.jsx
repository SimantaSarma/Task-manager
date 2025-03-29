import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../redux/taskSlice";
import { Button, Card, CardContent, Typography } from "@mui/material";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined" sx={{ marginBottom: 2, padding: 2, display: "flex", justifyContent: "space-between" }}>
      <CardContent>
        <Typography variant="h6" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </Typography>
      </CardContent>
      <Button onClick={() => dispatch(toggleComplete(task.id))}>
        {task.completed ? "Undo" : "Complete"}
      </Button>
      <Button onClick={() => dispatch(deleteTask(task.id))} color="error">
        Delete
      </Button>
    </Card>
  );
};

export default TaskItem;
