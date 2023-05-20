import { IChallengeImage } from "api/types";
import ChallengeImage from "./ChallengeImage";

const ContestImagesGrid = ({ images }: { images: IChallengeImage[] }) => {
    return (
        <section className="w-full px-8 pb-4 pt-24 border border-stroke-primary grid items-center grid-cols-auto-fill gap-2" id="gallery">
            {images.map((image) => (
                <ChallengeImage img={image} key={image.id} />
            ))}
        </section>
    )
}

export default ContestImagesGrid;