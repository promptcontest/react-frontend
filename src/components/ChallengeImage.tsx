import { IChallengeImage } from "api/types";
import { useState } from "react";
import ChallengeImageOverlay from "./ChallengeImageOverlay";

const ChallengeImage = ({ img }: { img: IChallengeImage }) => {
    const [active, setActive] = useState<boolean>(false);
  
    const handleMouseEnter = () => {
      setActive(true);
    };
  
    const handleMouseLeave = () => {
      setActive(false);
    };
  
    return (
      <figure
        className="gallery-item w-full relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="object-cover w-full h-full" src={img.url} alt="Challenge" />
        {/* TODO: Add user info, likes, etc. */}
        {active && <ChallengeImageOverlay img={img} rank={1} />}
      </figure>
    );
  };
  
  export default ChallengeImage;