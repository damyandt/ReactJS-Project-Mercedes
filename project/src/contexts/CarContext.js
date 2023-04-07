import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { carServiceFactory } from "../services/carService";

export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {
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

    const getCar = (carId) => {
        return cars.find(car => car._id === carId);
    }

    const deleteCar = (carId) => {
        setCars(state => state.filter(car => car._id !== carId));
    }

    const contextValues = {
        cars,
        onCreateCarSubmit,
        onCarEditSubmit,
        getCar,
        deleteCar
    }

    return (
        <CarContext.Provider value={contextValues}>
            {children}
        </CarContext.Provider>
    )
};

export const useCarContext = () => {
    const context = useContext(CarContext)

    return context;
}