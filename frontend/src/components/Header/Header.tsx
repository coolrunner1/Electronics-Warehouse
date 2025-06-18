import {LanguageSelector} from "../Global/LanguageSelector.tsx";
import {ThemeButton} from "./ThemeButton.tsx";

export type HeaderProps = {
    children?: React.ReactNode;
}

export const Header = (props: HeaderProps) => {

    return (
        <header className="header flex flex-row justify-between gap-x-5 p-4 bg-[#ebe9e5] dark:bg-gray-950 overflow-x-scroll">
            {props.children}
            <ThemeButton/>
            <LanguageSelector/>
        </header>
    );
};