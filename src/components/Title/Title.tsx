import { FunctionComponent } from 'preact';
import styles from './Title.scss';

export const Title: FunctionComponent = ({ children }) => {
    return <h2 className={styles.title}>{children}</h2>;
};
