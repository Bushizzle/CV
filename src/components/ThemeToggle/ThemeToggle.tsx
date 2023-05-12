import { FunctionComponent } from 'preact';
import { useCallback, useState } from 'preact/compat';
import { THEMES, updateTheme } from './index';
import { trackEvent } from '../../analytics';
import styles from './ThemeToggle.scss';

export const ThemeToggle: FunctionComponent<{ theme: ValueOf<typeof THEMES> }> = ({ theme }) => {
  const [currentTheme, setTheme] = useState(theme);
  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    updateTheme(newTheme);
    setTheme(newTheme);
    trackEvent('Theme toggle used');
  }, [currentTheme]);

  return (
    <label className={styles.container}>
      <input type="checkbox" onChange={toggleTheme} checked={currentTheme === THEMES.LIGHT} />
      <div className={styles.switch}>
        <div className={styles.sun}></div>
        <div className={styles.moon}></div>
      </div>
    </label>
  );
};
