import {toggleDarkMode} from "../../slices/flagsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {HeaderButton} from "./HeaderButton.tsx";
import {DarkThemeSVG} from "../SVGs/DarkThemeSVG.tsx";
import {LightThemeSVG} from "../SVGs/LightThemeSVG.tsx";
import {useTranslation} from "react-i18next";

export const ThemeButton = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const darkTheme = useSelector((state: RootState) => state.flags.darkMode);

    return (
        <HeaderButton
            title={t('toggle-theme')}
            onClick={() => dispatch(toggleDarkMode())}
            logo={
            darkTheme
                ? <DarkThemeSVG/>
                : <LightThemeSVG/>
            }
        >
        </HeaderButton>
    );
};