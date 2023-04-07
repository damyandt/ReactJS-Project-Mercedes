import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { CarProvider } from "./contexts/CarContext";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { CreateCar } from "./components/CreateCar/CreateCar";
import { Catalog } from "./components/Catalog/Catalog";
import { CarDetails } from "./components/CarDetails/CarDetails";
import { EditCar } from "./components/EditCar/EditCar";
import { Sclass } from "./components/AllClasses/Sclass/Sclass";
import { Eclass } from "./components/AllClasses/Eclass/Eclass";
import { Gclass } from "./components/AllClasses/Gclass/Gclass";
import { Clsclass } from "./components/AllClasses/Clsclass/Clsclass";
import { Cclass } from "./components/AllClasses/Cclass/Cclass";
import { RouteGuard } from "./components/common/RouteGuard";
import { CarOwner } from "./components/common/CarOwner";


function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <div id="box">
          <Header />

          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:carId" element={<CarDetails />} />
              <Route path="/s-class" element={<Sclass />} />
              <Route path="/e-class" element={<Eclass />} />
              <Route path="/g-class" element={<Gclass />} />
              <Route path="/cls-class" element={<Clsclass />} />
              <Route path="/c-class" element={<Cclass />} />

              <Route element={<RouteGuard />}>
                <Route path="/catalog/:carId/edit" element={<CarOwner> <EditCar /> </CarOwner>} />
                <Route path="/create-car" element={<CreateCar />} />
                <Route path="/logout" element={<Logout />} />
              </Route>

            </Routes>
          </main>
          <Footer />
        </div>
      </CarProvider>
    </AuthProvider>
  );
}

export default App;