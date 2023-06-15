import "../src/styles.css";
import { useState } from "react";
import { TaskCard } from "../components/TaskCard";
// import { BoxCard } from "../components/BoxCard";
import "./TaskList.css";

export function TaskList({ tasks, setTasks }) {
  const [show, setShow] = useState(true);

  // this function is used to delete the task
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="tasklist">
      <ul>
        <div className="header">
          <h1> TaskList </h1>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>

      {/* <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard>

      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard> */}
    </div>
  );
}
