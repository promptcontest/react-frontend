import { IChallengeImage } from "api/types";

const ChallengeImage = ({img}: {img: IChallengeImage}) => {
    return (
        <figure className="gallery-item w-full">
            <img className="object-cover w-full h-full" src={img.url} />
            {/* TODO add user info, likes, etc. */}
        </figure>
    )

}

export default ChallengeImage;