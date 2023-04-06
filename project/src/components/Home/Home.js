import { Link } from "react-router-dom";
 
export const Home = () => {
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2 style={{paddingTop: "0px"}}>We know what to drive</h2>
        <h3>BENZ</h3>
      </div>
      <div id="home-page">
        <h1>The best models</h1>
        <div className="card" style={{ width: "13rem", float: "left", "marginLeft": "25px" }}>
          <img src="./images/ssclass.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title" style={{fontSize: "30px"}}>S class</h1>
            <p className="card-text" style={{"fontSize": "15px"}}>
             For first time: 1972 year
            </p>
            <Link to="/s-class" className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", float: "left", "marginLeft": "25px" }}>
          <img src="./images/cClass.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title" style={{fontSize: "30px"}}>C class</h1>
            <p className="card-text" style={{"fontSize": "15px"}}>
            For first time: 1994 year
            </p>
            <Link to="/c-class" className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", float: "left", "marginLeft": "25px" }}>
          <img
            src="./images/mercedes-amg-e-63-s-4matic-final-edition.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h1 className="card-title" style={{fontSize: "30px"}}>E class</h1>
            <p className="card-text" style={{"fontSize": "15px"}}>
            For first time: 1953 year
            </p>
            <Link to="/e-class" className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", float: "left", "marginLeft": "25px" }}>
          <img src="./images/gclass.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title" style={{fontSize: "30px"}}>G class</h1>
            <p className="card-text" style={{"fontSize": "15px"}}>
            For first time: 1979 year
            </p>
            <Link to="/g-class" className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", float: "left", "marginLeft": "25px" }}>
          <img
            src="./images/2add993566a170293b61db4dd3798a59.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h1 className="card-title" style={{fontSize: "25px"}}>Cls class</h1>
            <p className="card-text" style={{"fontSize": "15px", "paddingBottom": "9px"}}>
            For first time: 2004 year
            </p>
            <Link to="/cls-class" className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};