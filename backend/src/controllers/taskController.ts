import { Request, Response } from 'express';
import { Task } from '../models/Task';

const tasks: Task[] = [];

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const newTask: Task = { id: Date.now().toString(), title, completed };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find(t => t.id === id);

  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.title = title;
  task.completed = completed;
  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
};