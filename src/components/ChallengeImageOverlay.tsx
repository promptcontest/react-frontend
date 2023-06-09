import { IChallengeImage } from "api/types"
import Voting from "./Voting"

interface OverlayProps {
    img: IChallengeImage
    rank: number
}

const ChallengeImageOverlay: React.FC<OverlayProps> = ({ img, rank } ) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-background-primary bg-opacity-60 flex flex-col justify-center items-center">
            <div className="absolute p-3 top-0 left-0 w-full flex justify-between items-center">
                <span>
                    <a href={"https://twitter.com/" + img.twitter_handle} target="_blank">{img.twitter_handle}</a>
                </span>
                <span className="uppercase">
                    {`rank #${img.rank}`}
                </span>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <Voting img={img} />
            </div>
        </div>
    )
}
export default ChallengeImageOverlay;