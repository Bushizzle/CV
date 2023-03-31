import { FunctionComponent } from 'preact';
import styles from './Summary.scss';

import PfaSVG from './../../../static/assets/pfa.svg';
interface SummaryProps {
    title: string;
    text: string;
}
export const Summary: FunctionComponent<SummaryProps> = ({ title, text }) => {
    return (
        <div className={styles.summary}>
            <span className={styles.name}>{title}</span>
            <PfaSVG />
            <span className={styles.title}>Summary</span>
            <span className={styles.text}>{text}</span>
        </div>
    );
}