import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/compat';
import { Layout } from './components/Layout';
import { THEMES, updateTheme } from './components/ThemeToggle';
import styles from './App.scss';

interface AppProps {
  theme: ValueOf<typeof THEMES>;
}

export const App: FunctionComponent<AppProps> = ({ theme }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    updateTheme(theme);
    setTimeout(() => document.body.classList.add(styles.animated), 500);
  }, []);
  useEffect(() => {
    void fetch('data.json')
      .then(response => response.json())
      .then(response => setData(response));
  }, []);
  return <Layout data={data} theme={theme} />;
};
