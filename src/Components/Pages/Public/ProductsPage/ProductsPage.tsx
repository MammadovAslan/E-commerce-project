import List from "./List/List";
import Sidebar from "./Sidebar/Sidebar";

const ProductsPage = () => {
  return (
    <div className="products">
      <div className="products-content">
        <Sidebar  />
        <List/>
      </div>
    </div>
  );
};

export default ProductsPage;
