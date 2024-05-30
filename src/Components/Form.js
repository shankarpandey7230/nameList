import React, { useState } from 'react';
import Display from './Display';

const Form = () => {
  const [name, setName] = useState('');

  const handleOnChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    // console.log(value);

    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // setList([...list, name]);
    // setInput({ name: '' });
    // r.current.value = '';
  };
  return (
    <div className="form">
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" name="name" onChange={handleOnChange} />
        {/* ref={r} */}
        <button>Add User</button>
      </form>
      <hr />
    </div>
  );
};

export default Form;
