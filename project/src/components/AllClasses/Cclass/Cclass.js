import { Link } from "react-router-dom";

export const Cclass = () => {
  return (
    <section id="class" className="auth" >
      <h1 className="heading">Mercedes C-class</h1>

      <div className="container c-class">
        <div className="classes"></div>
      </div>

      <div id="text1">
        <h1 id="text">
          <span id="details">The</span>
          <span id="details">Mercedes-Benz</span>
          <span id="details">C-Class</span>
          <span id="details">was the</span>
          <span id="details">model</span>
          <span id="details">until the</span>
          <span id="details">A-Class arrived</span>
          <span id="details">and</span>
          <span id="details">has</span>
          <span id="details">been</span>
          <span id="details">available</span>
          <span id="details">with</span>
          <span id="details">a "4MATIC"</span>
          <span id="details">option</span>
          <span id="details">since</span>
          <span id="details">2002.</span>
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