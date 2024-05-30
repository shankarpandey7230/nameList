import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

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
  };
  console.log(list);
  return (
    <div
      className="wrapper d-flex justify-content-center align-items-center fs-2 "
      style={{ height: '100vh' }}
    >
      <div className="userList shadow-lg p-3 mb-5 bg-body rounded p-4">
        <div className="display">{name}</div>
        <div className="form">
          <form action="" onSubmit={handleOnSubmit}>
            <input type="text" onChange={handleOnChange} />
            <button>Add User</button>
          </form>
          <hr />
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
