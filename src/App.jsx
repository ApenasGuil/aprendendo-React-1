import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação blá,blá,blá",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação",
      description: "Estudar programação blá,blá,blá",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação",
      description: "Estudar programação blá,blá,blá",
      isCompleted: false,
    }
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
