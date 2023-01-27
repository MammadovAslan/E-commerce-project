
interface AdressProps{
    country:string;
    city:string;
    street:string;
    zip:string;
    index:number
}

const DeliveryAdress = ({city,country,street,zip,index}:AdressProps) => {
  return (
    <div className='delivery-adress'>
        <h5>Ünvan №{index+1}</h5>
        <ul className='adress-details'>
            <li><span>Ölkə: </span> <span>{country}</span></li>
            <li><span>Şəhər: </span> <span>{city}</span></li>
            <li><span>Ünvan: </span> <span>{street}</span></li>
            <li><span>ZIP: </span> <span>{zip}</span></li>
        </ul>
    </div>
  )
}

export default DeliveryAdress