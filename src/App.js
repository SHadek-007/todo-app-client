import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoAdd from './Pages/TodoAdd/TodoAdd';
import TodoList from './Pages/TodoList/TodoList';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth><TodoAdd></TodoAdd></RequireAuth>}></Route>
        <Route path='todoList' element={<TodoList></TodoList>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
