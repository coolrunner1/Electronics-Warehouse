export type ItemImageProps = {
    imagePath?: string;
    fullImagePath?: string;
    title: string;
}

export const ItemImage = (props: ItemImageProps) => {
    return (
        <>
            {props.imagePath || props.fullImagePath
                ? <img
                    className="aspect-square object-scale-down"
                    src={props.fullImagePath || `${import.meta.env.VITE_BASE_URL}/${props.imagePath}`}
                    alt={props.title}
                />
                : <img
                    className="aspect-square object-scale-down"
                    src="/placeholder.png"
                    alt="image is missing"
                />
            }
        </>
    );
};