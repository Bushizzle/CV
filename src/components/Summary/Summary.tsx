import { FunctionComponent } from 'preact';
import styles from './Summary.scss';
import { Pfa } from './Pfa';

interface SummaryProps {
  title: string;
  text: string;
  github: string;
}
export const Summary: FunctionComponent<SummaryProps> = ({ title, text, github }) => {
  return (
    <div className={styles.summary}>
      <h2 className={styles.name}>{title}</h2>
      <Pfa github={github} />
      <h2 className={styles.title}>Summary</h2>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
