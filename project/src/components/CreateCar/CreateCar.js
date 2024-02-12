import { useCarContext } from "../../contexts/CarContext";
import { useForm } from "../../hooks/useForm";

export const CreateCar = () => {
  const { onCreateCarSubmit } = useCarContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      model: "",
      year: "",
      horsepower: "",
      imageUrl: "",
      summary: "",
    },
    onCreateCarSubmit
  );

  return (
    <div>

      <div className="cardContainer">
        <form id="create" method="post" onSubmit={onSubmit}>
          <div className="d-flex align-items-center mb-3 pb-1"></div>

          <h5
            className="fw-normal mb-3 pb-3"
            style={{ letterSpacing: "1px", fontSize: "40px" }}
          >
            Post your benz!
          </h5>

          <label htmlFor="model">Model:</label>
          <input
            value={values.model}
            onChange={changeHandler}
            type="text"
            id="model"
            name="model"
            placeholder="Enter car model..."
          />

          <label htmlFor="year">Year:</label>
          <input
            value={values.year}
            onChange={changeHandler}
            type="number"
            id="year"
            name="year"
            min="1"
            max="2023"
            placeholder="Enter car year..."
          />

          <label htmlFor="horsepower">Horsepower:</label>
          <input
            value={values.horsepower}
            onChange={changeHandler}
            type="number"
            id="horsepower"
            name="horsepower"
            min="1"
            placeholder="1"
          />

          <label htmlFor="car-img">Image:</label>
          <input
            value={values.imageUrl}
            onChange={changeHandler}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={changeHandler}
          ></textarea>
          <input className="btn submit" type="submit" value="Create Car" />

        </form>
      </div>


    </div>


  );
};