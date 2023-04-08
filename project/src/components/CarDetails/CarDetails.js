import { useEffect, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { carServiceFactory } from "../../services/carService";
import * as commentService from "../../services/commentService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";

import { AddComment } from "./AddComment/AddComment";
import { carReducer } from "../../reducers/carReducer";
import { useCarContext } from "../../contexts/CarContext";

export const CarDetails = () => {
  const { carId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { deleteCar } = useCarContext()
  const [car, dispach] = useReducer(carReducer, {});
  const carService = useService(carServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([carService.getOne(carId), commentService.getAll(carId)]).then(
      ([carData, comments]) => {
        const carState = {
          ...carData,
          comments,
        };
        dispach({ type: "CAR_FETCH", payload: carState });
      }
    );
  }, [carId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(carId, values.comment);

    dispach({
      type: "ADD_COMMENT",
      payload: response,
      userEmail,
    });
  };

  const isOwner = car._ownerId === userId;

  const onDeleteClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm(`Are you sure you want to delete Mercedes ${car.model}?`);

    if (res) {
      await carService.delete(car._id);

      deleteCar(car._id)

      navigate("/catalog");
    };



  }
  const findOwner = (x) => {
    if (x.author.email === undefined) {
      return x.author.find(y => y._id === x._ownerId).email
    }
    return x.author.email
  }


  return (
    <section id="car-details">
      <h1 >CAR DETAILS</h1>
      <div className="info-section">
        <div className="car-header">
          <h1 style={{ color: "orange" }}>Mercedes {car.model}</h1>
          <img className="car-img" src={car.imageUrl} />

          <span >Horsepower: {car.horsepower}</span>
          <p>Year: {car.year}</p>
        </div>
        <h3>Summury:</h3>
        <p style={{ paddingBottom: "80px" }}>{car.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {car.comments &&
              car.comments.map(x => (
                <li key={x._id} className="comment">
                  <p>
                    {findOwner(x)} : {x.comment}
                  </p>
                </li>
              ))}
          </ul>

          {!car.comments?.length && <p className="no-comment">No comments.</p>}
        </div>

        {isOwner && (
          <div className="buttons">
            <Link to={`/catalog/${car._id}/edit`} className="button">
              Edit
            </Link>
            <button className="button" onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        )}
      </div>
      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};