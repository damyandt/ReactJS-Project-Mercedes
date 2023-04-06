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
    <div>
      <div className="container py-5 h-100" style={{ textAlign: "center", padding: "auto" }}>
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ width: "800px" }}
        >
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0" style={{ width: "1000px" }}>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form id="create" method="post" onSubmit={onSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1"></div>

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
                        style={{
                          paddingLeft: "20px",
                          height: "55px"
                        }}
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >

  );

};