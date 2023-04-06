import { FunctionComponent } from 'preact';
import styles from './Summary.scss';

import PfaSVG from '/static/assets/pfa.svg';
interface SummaryProps {
  title: string;
  text: string;
}
export const Summary: FunctionComponent<SummaryProps> = ({ title, text }) => {
  return (
    <div className={styles.summary}>
      <h2 className={styles.name}>{title}</h2>
      <a className={styles.pfa} href="https://github.com/Bushizzle/CV" target="_blank">
        <PfaSVG />
      </a>
      <h2 className={styles.title}>Summary</h2>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
