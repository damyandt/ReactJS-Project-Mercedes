import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { carServiceFactory } from "../../services/carService";

export const EditCar = ({ onCarEditSubmit }) => {
  const { carId } = useParams();
  const carService = useService(carServiceFactory);
  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      model: "",
      year: "",
      horsepower: "",
      imageUrl: "",
      summary: "",
    },
    onCarEditSubmit
  );

  useEffect(() => {
    carService.getOne(carId).then((result) => {
      changeValues(result);
    });
  }, [carId]);

  return (
    <section id="edit-page" className="auth">
      <form id="edit" method="post" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Car</h1>
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={values.model}
            onChange={changeHandler}
          />

          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={values.year}
            onChange={changeHandler}
          />

          <label htmlFor="horsepower">Horsepower:</label>
          <input
            type="number"
            id="horsepower"
            name="horsepower"
            min="1"
            value={values.horsepower}
            onChange={changeHandler}
          />

          <label htmlFor="car-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={changeHandler}
          ></textarea>
          <input className="btn submit" type="submit" value="Edit Car" />
        </div>
      </form>
    </section>
  );
};