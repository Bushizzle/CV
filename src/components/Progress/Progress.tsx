import { FunctionComponent } from 'preact';
import styles from './Progress.scss';

interface ProgressProps {
    value: number;
}

export const Progress: FunctionComponent<ProgressProps> = ({ value }) => {
    return (
        <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${value}%` }}></div>
        </div>
    );
};
