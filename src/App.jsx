import { Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { routes } from "./Components/utils/routers"



function App() {
  return (
    <>
      <div className="app ">
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.notFound} element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>

        <Footer />
      </div>
    </>

  );
}

export default App;
