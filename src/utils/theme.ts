import { THEMES, THEME_ATTRIBUTE } from '../constants';

export const updateTheme = (theme: ValueOf<typeof THEMES>): void => document.body.setAttribute(THEME_ATTRIBUTE, theme);

export const detectTheme = (): ValueOf<typeof THEMES> => {
    const time = new Date().getHours();
    return time > 6 && time < 20 ? THEMES.LIGHT : THEMES.DARK;
}
