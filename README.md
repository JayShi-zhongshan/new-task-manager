
# Task Manager Backend

This project is a backend service for a personal task management system, using Node.js with Express and PostgreSQL. It provides RESTful APIs to create, read, update, and delete tasks.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- TypeScript
- Docker (Optional)

## Project Setup

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js installed (v12 or higher)
- PostgreSQL installed and running
- An `.env` file with the necessary environment variables:

  ```plaintext
  DATABASE_URL=postgres://username:password@localhost:5432/database_name
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://your-repository-url.git
   cd task-manager-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

   This will start the server on `http://localhost:3000`.

## API Endpoints

The server exposes several REST endpoints for managing tasks:

- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/:id` - Retrieve a single task by its ID
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## Development

For development, you can use `nodemon` to automatically restart the server on code changes:

```bash
npm run dev
```

## Docker (Optional)

If Docker is used, ensure to include instructions on building and running the container.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Specify the project's license.
