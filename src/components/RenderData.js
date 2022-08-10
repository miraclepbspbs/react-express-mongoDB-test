import React, { useEffect } from 'react';
import axios from 'axios';
import EditData from './EditData.js';
import { Table, Button } from 'antd';
const getAllDataUrl = 'http://localhost:5000/api/v1/tasks';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'id',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <div>
        <Button
          type='primary'
          onClick={() => {
            handleDel(record);
          }}
        >
          Delete
        </Button>
        <EditData record={record} />
      </div>
    ),
  },
];
const handleDel = async (record) => {
  // console.log(record._id);
  const id = record._id;
  try {
    await axios
      .delete(`http://localhost:5000/api/v1/tasks/${id}`)
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.log(error);
  }
};
const handleEdit = async (record) => {
  // const { name, age } = record;
  // console.log({ name, age });
  try {
    axios
      .patch(`http://localhost:5000/api/v1/tasks/${record._id}`, {
        name: '213',
        age: 11,
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};

const RenderData = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getAll();
  }, [data]);
  const getAll = async () => {
    try {
      await axios.get(getAllDataUrl).then((res) => {
        let arr = res.data;
        //处理数组，在每个对象添加key属性
        let newArr = [];
        arr.map((item) => {
          return newArr.push(Object.assign({}, item, { key: item._id }));
        });
        setData(newArr);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='getAllData'>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RenderData;
