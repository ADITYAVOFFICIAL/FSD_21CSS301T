"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Task {
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      className="w-full max-w-lg mx-auto mt-10 p-6 neumorphic text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
        <TextField
          variant="standard"
          fullWidth
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTask();
            }
          }}
          className="neumorphic-input text-gray-700"
        />
        <IconButton onClick={addTask} className="ml-2 text-blue-600">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </div>

      <List className="mt-4">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ListItem
                className={`my-2 neumorphic flex justify-between p-4 rounded-lg ${
                  task.completed ? "bg-gray-200" : "bg-white"
                }`}
              >
                <ListItemText
                  primary={task.text}
                  className={`cursor-pointer text-lg ${
                    task.completed ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                  onClick={() => toggleTaskCompletion(index)}
                />
                <div>
                  <IconButton onClick={() => toggleTaskCompletion(index)}>
                    <CheckCircleIcon
                      className={`text-${
                        task.completed ? "green-500" : "gray-400"
                      }`}
                    />
                  </IconButton>
                  <IconButton onClick={() => deleteTask(index)}>
                    <DeleteIcon className="text-red-500" />
                  </IconButton>
                </div>
              </ListItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </List>
    </motion.div>
  );
}
