import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      {/* <Link to='about' className='btn'>
        About
      </Link> */}
      <Outlet />
    </>
  );
};
export default SharedLayout;
