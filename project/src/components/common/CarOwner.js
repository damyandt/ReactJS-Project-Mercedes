import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCarContext } from "../../contexts/CarContext";

export const CarOwner = ({
    children
}) => {
    const { carId } = useParams();
    const { getCar } = useCarContext();
    const { userId } = useAuthContext();

    const currCar = getCar(carId);

    if (currCar && currCar._ownerId !== userId) {
        return <Navigate to={`/catalog/${carId}`} replace />
    }

    return children ? children : <Outlet />
}