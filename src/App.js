import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  // const [input, setInput] = useState({ name: '' });
  const r = useRef();

  const handleOnChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    // console.log(value);

    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    setList([...list, name]);
    // setInput({ name: '' });
    r.current.value = '';
  };
  // console.log(list);
  return (
    <div
      className="wrapper d-flex justify-content-center align-items-center fs-2 "
      style={{ height: '100vh' }}
    >
      <div className="userList shadow-lg p-3 mb-5 bg-body rounded p-4">
        <div className="display">{name}</div>
        <div className="form">
          <form action="" onSubmit={handleOnSubmit}>
            <input type="text" name="name" ref={r} onChange={handleOnChange} />
            <button>Add User</button>
          </form>
          <hr />
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
