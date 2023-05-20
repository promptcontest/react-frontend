import { IChallengeImage } from "api/types";
import ChallengeImage from "./ChallengeImage";

const ContestImagesGrid = ({ images }: { images: IChallengeImage[] }) => {
    return (
        <section className="w-full justify-center px-8 pb-4 pt-24 border border-stroke-primary grid items-center grid-cols-auto-fill gap-2" id="gallery">
            {images.length > 0 ? (
            images.map((image) => (
                <ChallengeImage img={image} key={image.id} />
            ))) : (
                Array(12).fill(0).map((_, i) => (
                    <div className="gallery-item bg-background-secondary w-[400px] h-[400px]" key={i} />
                )
            ))}
        </section>
    )
}

export default ContestImagesGrid;