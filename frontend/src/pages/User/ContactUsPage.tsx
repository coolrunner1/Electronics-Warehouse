import {useTranslation} from "react-i18next";

export const ContactUsPage = () => {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full min-h-screen">
            <div className='w-full h-full'>
                <iframe
                    height="350"
                    className="w-full h-xl"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=33.472128510475166%2C44.593041960639866%2C33.47920954227448%2C44.5967855015602&amp;layer=mapnik&amp;marker=44.594913761244754%2C33.47566902637482"
                >
                </iframe>
                <br/>
                <small className="text-md mx-auto text-white font-bold py-2 px-5 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900 rounded-md transition-all duration-300 ease-in-out">
                    <a
                        href="https://www.openstreetmap.org/?mlat=44.594914&amp;mlon=33.475669#map=18/44.594914/33.475669"
                    >
                        {t('view-larger-map')}
                    </a>
                </small>
            </div>
        </div>
    );
};