import Logo from '../images/logo.svg';
import MoonIcon from '../images/icon-moon.svg';
import SunIcon from '../images/icon-sun.svg';
import type { TypeTheme } from '../types';

type TypeHeaderProps = {
    theme: TypeTheme;
    toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: TypeHeaderProps) {
    return (
        <div className="flex justify-between rounded-xl p-3 bg-white dark:bg-[hsl(226,25%,17%)]">
            <img className={''} src={Logo} alt="Logo" />
            <button className={'flex justify-center items-center bg-gray-300/50 px-2 size-12 rounded-md dark:bg-[hsl(225,23%,24%)]'} onClick={toggleTheme}>
                {theme === 'light' ?
                    <img src={MoonIcon} alt="Dark theme" /> :
                    <img src={SunIcon} alt="Light theme" />
                }
            </button>
        </div>
    );
}