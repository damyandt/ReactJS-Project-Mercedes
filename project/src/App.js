import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { carServiceFactory } from "./services/carService";
import { AuthProvider } from "./contexts/AuthContext";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { CreateCar } from "./components/CreateCar/CreateCar";
import { Catalog } from "./components/Catalog/Catalog";
import { CarDetails } from "./components/GameDetails/CarDetails";
import { EditCar } from "./components/EditCar/EditCar";
import { Sclass } from "./components/AllClasses/Sclass/Sclass";
import { Eclass } from "./components/AllClasses/Eclass/Eclass";
import { Gclass } from "./components/AllClasses/Gclass/Gclass";
import { Clsclass } from "./components/AllClasses/Clsclass/Clsclass";
import { Cclass } from "./components/AllClasses/Cclass/Cclass";
import { RouteGuard } from "./components/common/RouteGuard";


function App() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const carService = carServiceFactory(); //auth.accessToken

  useEffect(() => {
    carService.getAll().then((result) => {
      setCars(result);
    });
  }, []);

  const onCreateCarSubmit = async (data) => {
    const newCar = await carService.create(data);

    setCars((state) => [...state, newCar]);

    navigate("/catalog");
  };

  const onCarEditSubmit = async (values) => {
    const result = await carService.edit(values._id, values);

    setCars((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/catalog/${values._id}`);
  };


  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog cars={cars} />} />
            <Route path="/catalog/:carId" element={<CarDetails />} />
            <Route path="/s-class" element={<Sclass />} />
            <Route path="/e-class" element={<Eclass />} />
            <Route path="/g-class" element={<Gclass />} />
            <Route path="/cls-class" element={<Clsclass />} />
            <Route path="/c-class" element={<Cclass />} />

            <Route element={<RouteGuard />}>
              <Route path="/catalog/:carId/edit" element={<EditCar onCarEditSubmit={onCarEditSubmit} />} />
              <Route path="/create-car" element={<CreateCar onCreateCarSubmit={onCreateCarSubmit} />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;