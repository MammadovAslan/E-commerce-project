import MyCarousel from "./Carousel/Carousel";
import Features from "./Features/Features";
import InfiniteCarousel from "./InfiniteCarousel/InfiniteCarousel";
import ProductsList from "./ProductsList/ProductsList";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import Catalog from "./Сatalog/Catalog";

const Home = () => {

  return (
    <div className="home">
      <section className="carousel">
        <MyCarousel />
      </section>
      <section className="home-content">
        <ProductsList
          title="Ən çox satılan məhsullar"
          limit={4}
          sortOption={"added"}
          order={"asc"}
          category={["all"]}
          link=""
        />
        <ProductsList
          title="Yeni gələn məhsullar"
          limit={4}
          sortOption={"create"}
          order={"desc"}
          category={["phones", "new"]}
          link="?type=new"
        />
        <SpecialOffers />
        <ProductsList
          title="Yeni gələn aksessuarlar"
          limit={4}
          sortOption={"price"}
          order={"asc"}
          category={["accessories"]}
          link="?category=accessories"
        />
        <Catalog />
        <Features />
        <InfiniteCarousel />
      </section>
    </div>
  );
};

export default Home;
