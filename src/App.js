import logo from './logo.svg';
import './App.css';
import DiceTest from "./components/DiceTest";
import ShowTime from "./components/ShowTime";
import TodoList from "./components/TodoList";
import RefEx from "./components/RefEx";
import TodoInput from "./components/TodoInput";
import TodoList2 from "./components/TodoList2";

function App() {
  return (
    <div>
        <ShowTime></ShowTime>
        <RefEx></RefEx>
        <DiceTest></DiceTest>
        <TodoInput></TodoInput>
        <TodoList2></TodoList2>
    </div>
  );
}

export default App;
