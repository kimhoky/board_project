import { Link, Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./pages/Main";
const Add2Component = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/Main" element={<Main />} />

        <Route path="*" element={<>이런 페이지는 없음</>} />
      </Routes>
      <Footer />
    </>
  );
};

export default Add2Component;
