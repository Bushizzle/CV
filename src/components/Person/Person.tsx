import { FunctionComponent } from 'preact';
import styles from './Person.scss';

interface PhotoProps {
  imageUrl: string;
}

export const Person: FunctionComponent<PhotoProps> = ({ imageUrl }) => {
  return (
    <div className={styles.photoContainer}>
      <img src={imageUrl} alt="Profile" className={styles.photo} />
    </div>
  );
};
