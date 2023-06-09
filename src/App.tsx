import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/compat';
import * as amplitude from '@amplitude/analytics-browser';
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
    // The following line is a workaround to avoid animation issues on the page when it is first loaded during nighttime
    setTimeout(() => document.body.classList.add(styles.animated), 500);
  }, []);
  useEffect(() => {
    void fetch('data.json')
      .then(response => response.json())
      .then(response => {
        setData(response);
        amplitude.init(response.amplitude, undefined, {
          defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true },
        });
      });
  }, []);
  return <Layout data={data} theme={theme} />;
};
