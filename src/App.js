import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import RenderData from './components/RenderData';
import AddData from './components/AddData';
import EditData from './components/EditData';
const { Header, Footer, Content } = Layout;

const App = () => {
  // const [data, setData] = React.useState(['']);
  // React.useEffect(() => {
  //   fetch('./hello')
  //     .then((res) => res.json())
  //     .then((arr) => setData(arr));
  // }, []);

  // fetch('./hello').then((res) => console.log(res));

  return (
    <Layout>
      {/* <Sider>Sider</Sider> */}
      <Layout>
        <Header>的说法的</Header>
        <Content>
          <AddData />
          {/* <EditData /> */}

          <RenderData />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
    // <div>
    //   <AddData />
    //   <GetData />
    //   <button onClick={addItem}>点击</button>
    //   <h2>{adddata}</h2>
    //    <button onClick={delItem}>点击</button>
    //   <button onClick={updateItem}>点击</button>
    //   <button onClick={getSingle}>点击</button>
    // </div>
  );
};
export default App;
