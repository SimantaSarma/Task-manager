import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }}>
        Task Manager
      </Typography>
      <TaskForm />
      <TaskList />
    </Container>
  );
};

export default App;
