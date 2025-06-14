import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./shopzone/src/pages/Home";
import Navbar from "./shopzone/src/components/navbar/Navbar";
import PageContainer from "./shopzone/src/containers/PageContainer";
import Detail from "./shopzone/src/pages/Detail";
import Cart from "./shopzone/src/pages/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./shopzone/src/pages/Search";

function App() {
  return (
   <div>
     <PageContainer>
      <BrowserRouter>
     
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products/:search" element={<Search/>} />
      </Routes>
      </BrowserRouter>
      </PageContainer>
   </div>
  );
}

export default App;
