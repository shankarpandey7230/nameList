import React, { useState, useRef } from 'react';
import Display from './Display';

const Form = ({ addUser }) => {
  const [name, setName] = useState('');
  const r = useRef();
  const handleOnChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    // console.log(value);

    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    addUser(name);
    // console.log(e);
    // setList([...list, name]);
    // setInput({ name: '' });
    r.current.value = '';
  };
  return (
    <div className="form">
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" name="name" ref={r} onChange={handleOnChange} />
        {/* ref={r} */}
        <button>Add User</button>
      </form>
      <hr />
    </div>
  );
};

export default Form;
