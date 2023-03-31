import { FunctionComponent } from 'preact';
import { useCallback } from 'preact/compat';
import { updateTheme } from '../../utils';
import {THEME_ATTRIBUTE, THEMES} from '../../constants';
import style from './DayNightThemeToggle.scss';

export const DayNightThemeToggle: FunctionComponent = () => {
    const toggleTheme = useCallback((e:any) => {
        console.log(e.target?.checked);
        const current = document.body.getAttribute(THEME_ATTRIBUTE);
        updateTheme(current === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    }, []);

    return (
        <label className={style.container}>
            <input type="checkbox" onChange={toggleTheme}/>
            <div className={style.switch}>
                <div className={style.sun}></div>
                <div className={style.moon}></div>
            </div>
        </label>
    );
}