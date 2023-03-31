import { FunctionComponent } from 'preact';
import { Layout } from './components/Layout';
import { useState, useEffect } from 'preact/compat';
import { updateTheme } from './utils';
import { THEMES } from './constants';
import styles from './App.scss';

interface AppProps {
    theme: ValueOf<typeof THEMES>;
}

export const App: FunctionComponent<AppProps> = ({ theme }) => {
    const [ data, setData ] = useState(null);
    const [ print, setPrint ] = useState(false);
    useEffect(() => {
        updateTheme(theme);
        window.addEventListener("beforeprint", () => setPrint(true));
        window.addEventListener("afterprint", () => setPrint(false));
        setTimeout(() => document.body.classList.add(styles.animated), 500);
    }, []);
    useEffect(() => {
        void fetch('data.json').then(response => response.json()).then((response) => setData(response));

    }, []);
    return <Layout data={data} print={print} />;
};
