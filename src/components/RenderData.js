import React, { useEffect } from 'react';
import axios from 'axios';
// import EditData from './EditData.js';
import { Table, Button, Modal } from 'antd';
import DelPopconfirm from './DelPopconfirm';
import EditModal from './EditModal';
const getAllDataUrl = 'http://localhost:5000/api/v1/tasks';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
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
      <>
        <Button
          type='primary'
          danger
          onClick={() => {
            handleDel(record);
          }}
        >
          Delete
        </Button>

        <EditModal {...record} />
        {/* <DelPopconfirm record={record} /> */}
        {/* <EditData record={record} /> */}
      </>
    ),
  },
];
const handleDel = async ({ _id }) => {
  try {
    axios
      .delete(`${getAllDataUrl}/${_id}`)
      .then((res) => console.log(res.data));
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
