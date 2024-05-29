import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleOnChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    // console.log(value);
    setName(value);
  };

  return (
    <div
      className="wrapper d-flex justify-content-center align-items-center fs-2 "
      style={{ height: '100vh' }}
    >
      <div className="userList shadow-lg p-3 mb-5 bg-body rounded p-4">
        <div className="display">{name}</div>
        <div className="form">
          <form action="">
            <input type="text" onChange={handleOnChange} />
            <button>Add User</button>
          </form>
          <hr />
        </div>
        <div className="list">
          <ul>
            <li>Shankar</li>
            <li>Pandey</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
