import { motion } from "framer-motion";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
interface ZoomModalProps {
  image: string;
  toggleModal: boolean;
  direction: number;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  showPrevImage: () => void;
  showNextImage: () => void;
}

const ZoomModal = (props: ZoomModalProps) => {
  const hideModal = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    if (target.classList.contains("zoom-modal")) {
      props.setToggleModal(false);
    }
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="zoom-modal" onClick={hideModal}>
      <div className="modal-container">
        <button className="switch-button privious-image-button" onClick={props.showPrevImage}>
          {" "}
          <ArrowBackIosNewRoundedIcon />{" "}
        </button>
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={props.image}
          key={props.image}
          className="modal-window-image"
        />
        <button className="switch-button next-image-button" onClick={props.showNextImage}>
          {" "}
          <ArrowForwardIosRoundedIcon />{" "}
        </button>
      </div>
    </div>
  );
};

export default ZoomModal;
