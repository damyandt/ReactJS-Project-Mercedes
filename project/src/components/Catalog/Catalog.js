import { Link } from "react-router-dom";
import { useCarContext } from "../../contexts/CarContext";
import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = () => {

  const { cars } = useCarContext()

  return (
    <section id="catalog-page">
      <h1>All Posts</h1>

      {cars.map((x) => (
        <CatalogItem key={x._id} {...x} />
      ))}

      {cars.length === 0 &&
        <>
          <h3 style={{ color: "white", fontSize: "50px" }}>No car posts...</h3>
          <h3 style={{ color: "white", fontSize: "35px" }}>Be the first one!</h3>
          <Link className="btn btn-primary add" to="/create-car" role="button">
          <h4 style={{color: "white", fontSize: "35px"}}>POST</h4>
        </Link>
        </>}
    </section>
  );
};