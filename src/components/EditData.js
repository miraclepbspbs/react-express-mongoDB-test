import { Button, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';

const EditData = (props) => {
  // const { name, age, _id } = props.record;
  // const name = props.record.name;
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [item, setItem] = useState({ name: '', age: '' });
  const showModal = () => {
    setIsModalVisible(true);
    // console.log(record);
    // console.log({ name, age, _id });
    // console.log(name);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button onClick={showModal}>edit</Button>
      <Modal
        title='Basic Modal'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='age'
            name='age'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditData;
