import {ItemImage, ItemImageProps} from "../Global/ItemImage.tsx";

export type ImageModalProps = ItemImageProps & {
    setShowImageModal: (showImageModal: boolean) => void
}

export const ImageModal = (props: ImageModalProps) => {
    return (
        <div
            onClick={() => props.setShowImageModal(false)}
            className="flex justify-center items-center fixed z-99 top-0 left-0 min-w-screen min-h-screen bg-[#0000005f] backdrop-blur-xl"
        >
            <div className="max-h-2xl max-w-2xl">
                <ItemImage title={props.title} imagePath={props.imagePath} />
                <div className="text-xl font-bold text-black dark:text-white text-center m-3">{props.title}</div>
            </div>
        </div>
    );
};