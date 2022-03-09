import { useState } from "react";
import { FaRegTrashAlt, FaCheckCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//list Item
function ListItem(props) {
  return (
    <div className="taskItem">
      <div className="check">
        <FaCheckCircle
          onClick={() => props.mark(props.index)}
          className={props.itemData.isComplete ? "task-complete" : ""}
        />{" "}
        <span
          onClick={() => props.mark(props.index)}
          className={props.itemData.isComplete ? "task-complete" : ""}
        >
          {props.itemData.description}
        </span>
      </div>
      <div className="deleteicon">
        {" "}
        <FaRegTrashAlt onClick={() => props.deleteTask(props.index)} />
      </div>
    </div>
  );
}

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addHandler = () => {
    taskList.push({ description: task, isComplete: false });
    setTaskList(taskList);
    setTask("");
  };
  const inputKeyDown = (event) => {
    if(event.keyCode === 13)
   addHandler();
  };
  const deleteHandler = (index) => {
    const newtaskList = taskList.filter((item, i) => i !== index);
    setTaskList(newtaskList);
  };
  const markHandler = (index) => {
    
    const list = [...taskList];
    list[index].isComplete = !list[index].isComplete;
    setTaskList(list);
  
  };


  //jsx
  return (
    <div className="App">
      <div className="taskContainer">
        <h2 className="mt-4">Todo List</h2><p>By: Tommy</p>
        <input placeholder="Add Task"
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          onKeyDown={inputKeyDown}
        />
        <Button variant="light" size="sm" className="mb-1" onClick={addHandler}>
          Add
        </Button>
        {taskList?.length ? (
          taskList.map((taskObject, index) => (
            <ListItem
              index={index}
              itemData={taskObject}
              deleteTask={deleteHandler}
              mark={markHandler}
            />
          ))
        ) : (
          <p className="mt-3">No task Added !</p>
        )}
      </div>
    </div>
  );
}

export default App;
