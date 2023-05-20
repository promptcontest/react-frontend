import { IChallengeImage } from "api/types"

interface OverlayProps {
    img: IChallengeImage
    rank: number
}

const ChallengeImageOverlay: React.FC<OverlayProps> = ({ img, rank } ) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-background-primary bg-opacity-60 flex flex-col justify-center items-center">
            <div className="absolute p-3 top-0 left-0 w-full flex justify-between items-center">
                <span>
                    {img.userTwitterHandle}
                </span>
                <span className="uppercase">
                    {`rank #${rank}`}
                </span>
            </div>
        </div>
    )
}
export default ChallengeImageOverlay;