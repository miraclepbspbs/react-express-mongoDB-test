import React from 'react';
import axios from 'axios';
const AddData = () => {
  //表单提交
  let [data, setData] = React.useState({
    name: '',
    age: '',
    // id: '',
    // isGood: false,
  });
  // console.log(data);
  const change = (e) => {
    // firstName = e.target.value;
    // setFirst(firstName);  //与下面作用相同
    // setFirst(e.target.value)
    // const { name, age } = e.target;
    setData((prevdata) => {
      return {
        ...prevdata,
        // [name]: type === 'checkbox' ? checked : value,
        [e.target.name]: e.target.value,
      };
    });
  };
  const hansubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post('http://localhost:5000/api/v1/tasks', {
        name: data.name,
        age: data.age,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className='addData'>
      <form onSubmit={hansubmit} type='POST'>
        <div>
          <label>name:</label>
          <input name='name' type='text' onChange={change} value={data.name} />
        </div>
        <div>
          <label>age:</label>
          <input name='age' type='text' onChange={change} value={data.age} />
        </div>

        {/* <label>mail:</label> */}
        {/* <input name='id' type='text' onChange={change} value={data.id} /> */}
        {/* <input
        checked={data.id}
        type='checkbox'
        onChange={change}
        name='isGood'
      /> */}
        {/* <label>同意不</label> */}

        <button className='addBtn'>增加</button>
      </form>
    </div>
  );
};

export default AddData;
