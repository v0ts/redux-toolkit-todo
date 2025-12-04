import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://68f4cdc6b16eb6f4683587cf.mockapi.io";

export const getTasksThunk = createAsyncThunk("tasks/get", async () => {
	const responce = await fetch(`${baseUrl}/tasks`);

	return responce.json();
});

export const addTaskThunk = createAsyncThunk("tasks/add", async (task) => {
	await fetch(`${baseUrl}/tasks`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});

	return task;
});

export const deleteTaskThunk = createAsyncThunk("tasks/delete", async (id) => {
	await fetch(`${baseUrl}/tasks/${id}`, {
		method: "DELETE",
	});

	return id;
});

export const updateTaskThunk = createAsyncThunk(
	"tasks/update",
	async (task) => {
		await fetch(`${baseUrl}/tasks/${task.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});

		return task;
	},
);
