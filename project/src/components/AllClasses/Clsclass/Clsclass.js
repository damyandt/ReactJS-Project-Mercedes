import { Link } from "react-router-dom";

export const Clsclass = () => {
  return (
    <section id="class" className="auth">
      <h1 className="heading">Mercedes Cls-class</h1>

      <div className="container clsclass">
        <div className="classes"></div>
      </div>

      <div id="text1">
        <h1 id="text">
          <span id="details">This</span>
          <span id="details">model</span>
          <span id="details">primarily</span>
          <span id="details">competes</span>
          <span id="details">with</span>
          <span id="details">other</span>
          <span id="details">fastback</span>
          <span id="details">sedans</span>
          <span id="details">like</span>
          <span id="details">BMW 8</span>
          <span id="details">Series,</span>
          <span id="details">Porsche</span>
          <span id="details">Panamera</span>
          <span id="details">and</span>
          <span id="details">Audi</span>
          <span id="details">a7.</span>
        </h1>
      </div>
      <div>
        <Link class="btn btn-primary add" to="/" role="button">
          <h4>BACK</h4>
        </Link>
      </div>
    </section>
  );
};