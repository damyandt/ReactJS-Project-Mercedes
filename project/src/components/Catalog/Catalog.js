import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = ({ cars }) => {
  return (
    <section id="catalog-page">
      <h1>All Posts</h1>

      {cars.map((x) => (
        <CatalogItem key={x._id} {...x} />
      ))}

      {cars.length === 0 && <h3 className="no-articles">No car posts...</h3>}
    </section>
  );
};