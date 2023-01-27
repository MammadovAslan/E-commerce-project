interface MainCharsProps {
  title: string;
  text: string;
}

const MainCharacteristicsList = (props: MainCharsProps) => {
  return (
    <div className="main-chars-list">
      <h5 className="chars-title">{props.title}</h5>
      <ul>
        <li>
          <p>
            <span>İstehsalçı</span>
            <span>{props.text}</span>
          </p>
        </li>
        <li>
          <p>
            <span>İstehsalçı</span>
            <span>{props.text}</span>
          </p>
        </li>
        <li>
          <p>
            <span>İstehsalçı</span>
            <span>{props.text}</span>
          </p>
        </li>
        <li>
          <p>
            <span>İstehsalçı</span>
            <span>{props.text}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MainCharacteristicsList;
