import { FunctionComponent } from 'preact';
import { useCallback } from 'preact/compat';
import { updateTheme } from '../../utils';
import {THEME_ATTRIBUTE, THEMES} from '../../constants';
import style from './DayNightThemeToggle.scss';

export const DayNightThemeToggle: FunctionComponent = () => {
    const toggleTheme = useCallback(() => {
        const current = document.body.getAttribute(THEME_ATTRIBUTE);
        updateTheme(current === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    }, []);

    return (
        <div className={style.switch} onClick={toggleTheme}>
            <div className={style.button}></div>
            <div className={style.sun}></div>
            <div className={style.moon}></div>
        </div>
    );
}