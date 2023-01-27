import Offer from "./Offer/Offer";

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <Offer limit={1} sortOption="added" order="asc" category={["special-offer"]} />
      <Offer
        limit={1}
        sortOption="added"
        order="desc"
        category={["special-offer", "accessories"]}
      />
    </div>
  );
};

export default SpecialOffers;
