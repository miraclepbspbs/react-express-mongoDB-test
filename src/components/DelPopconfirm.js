import { message, Popconfirm } from 'antd';
import React from 'react';
import axios from 'axios';
const confirm = (e) => {
  console.log(e.target);
  message.success('Click on Yes');
};

const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};

const DelPopconfirm = (record) => {
  return (
    <Popconfirm
      title='Are you sure to delete this task?'
      onConfirm={confirm}
      onCancel={cancel}
      okText='Yes'
      cancelText='No'
    >
      <a href='#'>Delete</a>
    </Popconfirm>
  );
};

export default DelPopconfirm;
