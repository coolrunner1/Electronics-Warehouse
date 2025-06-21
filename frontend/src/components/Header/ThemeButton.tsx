import {toggleDarkMode} from "../../slices/flagsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {HeaderButton} from "./HeaderButton.tsx";
import {DarkThemeSVG} from "../SVGs/DarkThemeSVG.tsx";
import {LightThemeSVG} from "../SVGs/LightThemeSVG.tsx";

export const ThemeButton = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector((state: RootState) => state.flags.darkMode);

    return (
        <HeaderButton
            onClick={() => dispatch(toggleDarkMode())}
            logo={
            darkTheme ?
                <DarkThemeSVG/> :
                <LightThemeSVG/>
            }
        >
        </HeaderButton>
    );
};