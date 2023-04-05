import { Link } from "react-router-dom";

export const Sclass = () => {
  return (
    <section id="class" className="auth">
      <h1 className="heading">Mercedes S-class</h1>
      <div className="container">
        <div className="classes sclass"></div>

      </div>

      <div id="text1">
        <h1 id="text">
          <span id="details">The</span>
          <span id="details">Mercedes-Benz</span>
          <span id="details">S-Class,</span>
          <span id="details">formerly</span>
          <span id="details">known</span>
          <span id="details">as</span>
          <span id="details">Sonderklasse,</span>
          <span id="details">is</span>
          <span id="details">a</span>
          <span id="details">series</span>
          <span id="details">of</span>
          <span id="details">full-sized</span>
          <span id="details">luxury</span>
          <span id="details">sedans,</span>
          <span id="details">limousines</span>
          <span id="details">and</span>
          <span id="details">armored</span>
          <span id="details">sedans.</span>
        </h1>
      </div>
      <div>
        <Link class="btn btn-primary add" to="/" role="button">
          <h4 id="heading">BACK</h4>
        </Link>
      </div>
    </section>
  );
};