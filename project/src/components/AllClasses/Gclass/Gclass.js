import { Link } from "react-router-dom";

export const Gclass = () => {
  return (
    <section id="class" className="auth">
      <h1 className="heading">Mercedes G-class</h1>

      <div className="container">
        <div className="gclass"></div>
      </div>

      <div id="text1">
        <h1 id="text">
          <span id="details">The</span>
          <span id="details">Mercedes-Benz</span>
          <span id="details">G-Class,</span>
          <span id="details">sometimes</span>
          <span id="details">colloquially</span>
          <span id="details">called</span>
          <span id="details">the</span>
          <span id="details">G-Wagen,</span>
          <span id="details">has a</span>
          <span id="details">full-time</span>
          <span id="details">four-wheel-drive,</span>
          <span id="details">a big</span>
          <span id="details">and powerful V8,</span>
          <span id="details">and can be</span>
          <span id="details">equipped</span>
          <span id="details">with the</span>
          <span id="details">latest</span>
          <span id="details">technology.</span>
        </h1>
      </div>
      <div>
        <Link className="btn btn-primary add" to="/" role="button">
          <h4 id="heading">BACK</h4>
        </Link>
      </div>
    </section>
  );
};