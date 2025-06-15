import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {TextEditor} from "../../components/Global/TextEditor.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {BlueEditPageButton} from "../../components/EditPage/BlueEditPageButton.tsx";
import { RedEditPageButton } from "../../components/EditPage/RedEditPageButton.tsx";
import {useQuery} from "@tanstack/react-query";
import {getItemById, removeItemImage, updateItemImage} from "../../api/items.ts";
import {LoadingIndicator} from "../../components/Global/LoadingIndicator.tsx";
import {EditPageNavButton} from "../../components/EditPage/EditPageNavButton.tsx";
import {ItemImage} from "../../components/Global/ItemImage.tsx";

export const ItemEditPage = () => {
    const [enDescription, setEnDescription] = useState("");
    const [ruDescription, setRuDescription] = useState("");
    const [enSpecs, setEnSpecs] = useState("");
    const [ruSpecs, setRuSpecs] = useState("");
    //0 - Image, 1 - Description, 2 - Specs, 3 - Reviews
    const [currentTab, setCurrentTab] = useState(0);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const removeImage = useRef<boolean>(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const {t} = useTranslation();

    const {
        data: item,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ["item", id],
        queryFn: getItemById,
    });

    useEffect(() => {
        if (!Number(id)) {
            navigate(`/employee/items`);
        }
    }, [id]);

    useEffect(() => {
        console.log(item)
        if (!isLoading && item) {
            setEnDescription(item.details.descriptionEN);
            setRuDescription(item.details.descriptionRU);
            setEnSpecs(item.details.specsEN);
            setRuSpecs(item.details.specsRU);
        }
    }, [item]);

    const handleInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        removeImage.current = false;
        setImageFile(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = (e) => {
            if (typeof e.target?.result === "string") {
                setImagePreview(e.target.result);
            }
        }
    }

    const handleRemoveImage = () => {
        removeImage.current = true;
        setImageFile(null);
        setImagePreview("");
    }

    const handleDiscardImage = () => {
        removeImage.current = false;
        setImageFile(null);
        setImagePreview(null);
    }

    const handleImageSave = async () => {
        if (imageFile) {
            const formData = new FormData();
            formData.append("image", imageFile);
            await updateItemImage(formData, Number(id));
            refetch();
        } else if (removeImage.current) {
            await removeItemImage(Number(id));
            refetch();
        } else {
            alert('no-changes')
        }
    }

    const handleDescriptionSave = async () => {
        alert('Not implemented')
    }

    const handleSpecsSave = async () => {
        alert('Not implemented')
    }

    return (
        <div className="flex flex-col p-10 items-center">
            {isLoading && <LoadingIndicator/>}
            {isError && error && <div>{error.message}</div>}
            {!isLoading && item &&
                <>
                    <RedEditPageButton
                        name={t('back')}
                        onClick={() => navigate(`/employee/items`)}
                    />
                    <h1 className="text-2xl mt-5">{t('model')}</h1>
                    <h2 className="text-xl">English: {item.modelEN}</h2>
                    <h2 className="text-xl">Русский: {item.modelRU}</h2>
                    <div className="flex flex-col sm:flex-row gap-10 my-5 p-2 border bg-light-default dark:bg-dark-default rounded-lg">
                        <EditPageNavButton
                            name={t('image')}
                            onClick={() => setCurrentTab(0)}
                        />
                        <EditPageNavButton
                            name={t('description')}
                            onClick={() => setCurrentTab(1)}
                        />
                        <EditPageNavButton
                            name={t('item-specs')}
                            onClick={() => setCurrentTab(2)}
                        />
                        <EditPageNavButton
                            name={t('reviews')}
                            onClick={() => setCurrentTab(3)}
                        />
                    </div>
                    {currentTab === 0 &&
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex gap-5 text-center justify-center">
                                <div>
                                    <h1 className="text-xl m-3">{t('current-image')}</h1>
                                    <div className="max-h-50 max-w-50 m-auto">
                                        <ItemImage imagePath={item.image_path} title={item.modelEN}/>
                                    </div>
                                </div>
                                {imagePreview !== null &&
                                    <div>
                                        <h1 className="text-xl m-3">{t('new-image')}</h1>
                                        <div className="max-h-50 max-w-50 m-auto">
                                            <ItemImage fullImagePath={imagePreview} title={'new'}/>
                                        </div>
                                    </div>
                                }
                            </div>
                            <h1 className="text-xl">{t('upload-image')}</h1>
                            <input
                                className='text-md text-white font-bold py-2 px-5 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900 rounded-md transition-all duration-300 ease-in-out'
                                type="file"
                                accept="image/*"
                                onChange={handleInputFileChange}
                            />
                            <RedEditPageButton name={t('remove-image')} onClick={handleRemoveImage}/>
                            <RedEditPageButton name={t('discard-image')} onClick={handleDiscardImage}/>
                            <BlueEditPageButton
                                name={t('save-changes')}
                                onClick={handleImageSave}
                            />
                        </div>
                    }
                    {currentTab === 1 &&
                        <>
                            <h1 className="text-xl">{t('description')}</h1>
                            <div className="flex flex-col gap-2 text-center mb-5">
                                <h3>English</h3>
                                <TextEditor value={enDescription} setValue={setEnDescription} />
                                <h3>Русский</h3>
                                <TextEditor value={ruDescription} setValue={setRuDescription} />
                            </div>
                            <BlueEditPageButton
                                name={t('save-changes')}
                                onClick={handleDescriptionSave}
                            />
                        </>
                    }
                    {currentTab === 2 &&
                        <>
                            <h1 className="text-xl">{t('item-specs')}</h1>
                            <div className="flex flex-col gap-2 text-center mb-5">
                                <h3>English</h3>
                                <TextEditor value={enSpecs} setValue={setEnSpecs} />
                                <h3>Русский</h3>
                                <TextEditor value={ruSpecs} setValue={setRuSpecs} />
                            </div>
                            <BlueEditPageButton
                                name={t('save-changes')}
                                onClick={handleSpecsSave}
                            />
                        </>
                    }
                    {currentTab === 3 &&
                        <>NOT IMPLEMENTED</>
                    }
                </>
            }
        </div>
    );
};