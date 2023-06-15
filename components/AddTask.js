import "./AddTask.css";
import { useRef, useState } from "react";

export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const taskRef = useRef("");

  // const handleChange = (event) => {
  //   setTaskValue(event.target.value);
  // };

  // to reset input fields
  const handleReset = () => {
    // setTaskValue("");
    taskRef.current.value = "";
    setProgress(false);
  };

  // this function is used to submit the form and clear input fields
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress)
    };

    console.log(task);
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          autoComplete="off"
          placeholder="Task Name"
          ref={taskRef}
        />

        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value="false"> Pending </option>
          <option value="true"> Completed </option>
        </select>

        <span onClick={handleReset} className="reset">
          {" "}
          Reset{" "}
        </span>

        <button type="submit"> Add Task </button>
      </form>
      {/* <p> {taskRef.current.value} </p> */}
    </section>
  );
};
