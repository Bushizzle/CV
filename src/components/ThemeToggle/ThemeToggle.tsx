import { FunctionComponent } from 'preact';
import { useCallback, useState} from 'preact/compat';
import { THEMES, updateTheme } from './index';
import style from './ThemeToggle.scss';

export const ThemeToggle: FunctionComponent<{ theme: ValueOf<typeof THEMES> }> = ({ theme }) => {
    const [ currentTheme, setTheme ] = useState(theme);
    const toggleTheme = useCallback(() => {
        const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        updateTheme(newTheme);
        setTheme(newTheme);
    }, [currentTheme]);

    return (
        <label className={style.container}>
            <input type="checkbox" onChange={toggleTheme} checked={currentTheme === THEMES.LIGHT}/>
            <div className={style.switch}>
                <div className={style.sun}></div>
                <div className={style.moon}></div>
            </div>
        </label>
    );
}