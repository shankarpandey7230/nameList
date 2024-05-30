import './App.css';
import { useState, useRef } from 'react';
import Display from './Components/Display';
import List from './Components/List';
import Form from './Components/Form';

function App() {
  const [list, setList] = useState([]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // setList([...list, name]);
    // setInput({ name: '' });
    // r.current.value = '';
  };
  // const [input, setInput] = useState({ name: '' });
  const r = useRef();

  // console.log(list);
  return (
    <div
      className="wrapper d-flex justify-content-center align-items-center fs-2 "
      style={{ height: '100vh' }}
    >
      <div className="userList shadow-lg p-3 mb-5 bg-body rounded p-4">
        <Form />

        <List list={list} />
      </div>
    </div>
  );
}

export default App;
