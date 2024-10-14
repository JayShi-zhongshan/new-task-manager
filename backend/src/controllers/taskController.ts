import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getAllTasks = async (req: Request, res: Response) => {
    const { rows } = await pool.query('SELECT * FROM tasks');
    res.status(200).json(rows);
};

export const getTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    if (rows.length > 0) {
        res.status(200).json(rows[0]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const { rows } = await pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
    res.status(201).json(rows[0]);
};

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const { rows } = await pool.query('UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
    if (rows.length > 0) {
        res.status(200).json(rows[0]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.status(204).send();
};
