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

  const navigateBtn = () => {
    navigate(`/catalog/${car._id}/edit`)
  }

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
      <h1>CAR DETAILS</h1>
      <div className="info-section">
        <h2>Mercedes {car.model}</h2>
        <div className="car-header">
          <div className="photoAndBtns">
            <img className="car-img" src={car.imageUrl} />
            {isOwner && (
              <div className="btnHolder">
                <button className="detailsBtn" onClick={navigateBtn}>Edit</button>
                <button className="detailsBtn" onClick={onDeleteClick}>Delete</button>
              </div>
            )}
          </div>

          <div className="infoCar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 464V316.9c0-108.4 68.3-205.1 170.5-241.3L404.2 15.5C425.6 7.9 448 23.8 448 46.4c0 11-5.5 21.2-14.6 27.3L400 96c48.1 0 91.2 29.8 108.1 74.9l48.6 129.5c11.8 31.4 4.1 66.8-19.6 90.5c-16 16-37.8 25.1-60.5 25.1h-3.4c-26.1 0-50.9-11.6-67.6-31.7l-32.3-38.7c-11.7 4.1-24.2 6.4-37.3 6.4l-.1 0 0 0c-6.3 0-12.5-.5-18.6-1.5c-3.6-.6-7.2-1.4-10.7-2.3l0 0c-28.9-7.8-53.1-26.8-67.8-52.2c-4.4-7.6-14.2-10.3-21.9-5.8s-10.3 14.2-5.8 21.9c24 41.5 68.3 70 119.3 71.9l47.2 70.8c4 6.1 6.2 13.2 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8H112c-26.5 0-48-21.5-48-48zM392 224a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
            <span>Horsepower: {car.horsepower}</span>
            <p></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>
            <span>Year: {car.year}</span>
            <h3>Summury:</h3>
            <p>{car.summary}</p>

          </div>
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
        </div>






      </div>
      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};