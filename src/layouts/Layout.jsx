import Footer from "../components/Footer";
import Navebar from "../components/Navebar";
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
            <Navebar/>
      
      <main className="container mx-auto shadow-md p-8">
        {/* This is where nested routes will be rendered */}
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
