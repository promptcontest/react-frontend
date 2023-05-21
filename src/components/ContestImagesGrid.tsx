import { IChallengeImage } from "api/types";
import ChallengeImage from "./ChallengeImage";

const ContestImagesGrid = ({ images }: { images: IChallengeImage[] }) => {

    console.log(images)

    return (
        <section className="w-full justify-center px-8 pb-4 pt-24 grid items-center grid-cols-auto-fill gap-4" id="gallery">
            {images.length > 0 ? (
            images.map((image) => (
                <ChallengeImage img={image} key={image.image_url} />
            ))) : (
                Array(12).fill(0).map((_, i) => (
                    <div className="gallery-item bg-background-secondary w-[400px] h-[400px] rounded-lg" key={i} />
                )
            ))}
        </section>
    )
}

export default ContestImagesGrid;