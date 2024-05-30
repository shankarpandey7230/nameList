import './App.css';
import { useState, useRef } from 'react';
import Display from './Components/Display';
import List from './Components/List';
import Form from './Components/Form';

function App() {
  const [list, setList] = useState([]);
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(e);
  //   // setList([...list, name]);
  //   // setInput({ name: '' });
  //
  // };

  const addUser = (name) => {
    // console.log(name);
    setList([...list, name]);

    // console.log(list);
  };
  // const [input, setInput] = useState({ name: '' });

  // console.log(list);
  return (
    <div
      className="wrapper d-flex justify-content-center align-items-center fs-2 "
      style={{ height: '100vh' }}
    >
      <div className="userList shadow-lg p-3 mb-5 bg-body rounded p-4">
        <Form addUser={addUser} />

        <List list={list} />
      </div>
    </div>
  );
}

export default App;
