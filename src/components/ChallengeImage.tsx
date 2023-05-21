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
        className="gallery-item w-[400px] h-[400px] py-2 px-2 relative cursor-pointer "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="object-cover w-full h-full rounded-lg" src={img.image_url} alt="Challenge" />
        {/* TODO: Add user info, likes, etc. */}
        {active && <ChallengeImageOverlay img={img} rank={1} />}
      </figure>
    );
  };
  
  export default ChallengeImage;