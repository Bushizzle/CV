import { FunctionComponent } from 'preact';
import styles from './Summary.scss';
interface SummaryProps {
    text: string;
}
export const Summary: FunctionComponent<SummaryProps> = ({ text }) => {
    return (
        <>
            <span className={styles.title}>Summary</span>
            <span className={styles.text}>{text}</span>
        </>
    );
}