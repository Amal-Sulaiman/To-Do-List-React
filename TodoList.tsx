import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<Todo[]>([]);

  const markComplete = (id: number) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      setTasks([...tasks]);
    });
  };

  const addTodo = (text: string) => {
    const newTask = { id: tasks.length + 1, text: text, completed: false };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const deleteAllTaskCompleted = () => {
    setTasks(tasks.filter((task) => task.completed === false));
  };

  return (
    <div className="container vw-100 vh-100 align-items-center pt-5">
      <div className="row">
        <h1>To-do-List</h1>
        <div className="row">
          <div className="input-group">
            <input
              value={inputValue}
              type="text"
              placeholder="Enter a task..."
              className="form-control"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>

            <button
              onClick={() => {
                addTodo(inputValue);
                setInputValue("");
              }}
              className={"btn btn-outline-success"}
            >
              Add
            </button>

            <button
              onClick={() => deleteAllTaskCompleted()}
              className={"btn btn-outline-danger"}
            >
              Delete All complete
            </button>
          </div>
        </div>
        <div className="row">
          <ol className="list-group list-group-numbered">
            {tasks.map((task) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={task.id}
              >
                <span
                  className={
                    task.completed
                      ? "text-decoration-line-through "
                      : "btn-light"
                  }
                >
                  {task.text}
                </span>

                <button
                  onClick={() => markComplete(task.id)}
                  className={`btn ${
                    task.completed ? "btn-success " : "btn-light"
                  }`}
                >
                  ✔️
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className={"btn btn-outline-danger"}
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
