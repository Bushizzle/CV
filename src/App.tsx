import { FunctionComponent } from 'preact';
import { Layout } from './components/Layout';
import { useState, useEffect } from 'preact/compat';

export const App: FunctionComponent = () => {
    const [ data, setData ] = useState(null);
    const [ print, setPrint ] = useState(false);
    useEffect(() => {
        window.addEventListener("beforeprint", () => setPrint(true));
        window.addEventListener("afterprint", () => setPrint(false));
    }, []);
    useEffect(() => {
        void fetch('data.json').then(response => response.json()).then((response) => setData(response));

    }, []);
    return <Layout data={data} print={print} />;
};
