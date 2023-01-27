interface MemoryVariantButtonProps {
  name: string,
  amount:number,
  setVariantPrice:React.Dispatch<React.SetStateAction<number>>
}

const MemoryVariantButton = (props: MemoryVariantButtonProps) => {

    const clickHandler = () =>{
        props.setVariantPrice(props.amount)
    }

  return <button className="memory-variant" onClick={clickHandler}>{props.name}</button>;
};

export default MemoryVariantButton;
