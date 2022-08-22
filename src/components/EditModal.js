import { Button, Modal, Input, Form } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

const EditModal = (record) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [data, setData] = useState({
    id: record._id,
    name: record.name,
    age: record.age,
  });

  const showModal = () => {
    setIsModalVisible(true);
    // console.log(data);
  };

  const handleOk = async () => {
    try {
      setIsModalVisible(false);
      axios.patch(`http://localhost:5000/api/v1/tasks/${data.id}`, {
        name: data.name,
        age: data.age,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleInputChange = (e) => {
    // console.log(e.target.id);
    setData((prevdata) => {
      return {
        ...prevdata,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Edit
      </Button>
      <Modal
        title='Edit data'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={handleOk}>
          <Form.Item
            label='name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input
              placeholder={data.name}
              value={data.name}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            label='age'
            name='age'
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <Input
              value={data.age}
              onChange={handleInputChange}
              placeholder={data.age}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
