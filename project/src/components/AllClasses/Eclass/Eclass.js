import { Link } from "react-router-dom";

export const Eclass = () => {
  return (
    <section id="class" className="auth">
      <h1 className="heading">Mercedes E-class</h1>
      <div className="textAndPhoto">
        <div className="container eclass">
          <div className="classes"></div>
        </div>

        <div id="text1">
          <h1 id="text">
            <span id="details">The</span>
            <span id="details">Mercedes-Benz</span>
            <span id="details">E-Class</span>
            <span id="details">is a</span>
            <span id="details">range of</span>
            <span id="details">executive</span>
            <span id="details">cars.</span>
            <span id="details">Produced</span>
            <span id="details">since</span>
            <span id="details">1953,</span>
            <span id="details">the</span>
            <span id="details">E-Class</span>
            <span id="details">falls</span>
            <span id="details">midrange</span>
            <span id="details">in the</span>
            <span id="details">Mercedes</span>
            <span id="details">line-up.</span>

          </h1>
        </div>

      </div>
      <div>
        <Link className="btn btn-primary add" to="/" role="button">
          <h4>BACK</h4>
        </Link>
      </div>
    </section>
  );
};