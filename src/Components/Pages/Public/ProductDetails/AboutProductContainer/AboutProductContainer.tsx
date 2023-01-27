interface ContainerProps{
  additionalClass?:string
}

const AboutProductContainer = (props:ContainerProps) => {
  return (
    <div className={`about-product ${props.additionalClass}`}>
      <h5>Məhsul haqqında</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi soluta perspiciatis vero
        consequatur ducimus tempora praesentium. Magni a non dignissimos commodi. Quod commodi quia
        similique dolor sed labore dolore! Sit maiores ab quasi omnis iste quae dolorum excepturi id
        eius tempore expedita beatae ducimus iusto laboriosam mollitia pariatur porro similique
        repellendus, earum sequi non reiciendis doloremque facilis! Quisquam officia dolorem
        perspiciatis saepe dignissimos quas nisi est dolores iste omnis. Qui, ea cupiditate.
        Officiis ab dolor, animi sapiente exercitationem culpa. Neque ipsam dolores minima corporis
        inventore distinctio aspernatur voluptas maxime illum ad illo, voluptatem, assumenda
        cupiditate iusto mollitia dignissimos ut amet!
      </p>
    </div>
  );
};

export default AboutProductContainer;
