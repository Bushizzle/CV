import { FunctionComponent } from 'preact';
import styles from './Person.scss';

interface PhotoProps {
  print: boolean;
  imageUrl: string;
  githubUrl?: string;
}

export const Person: FunctionComponent<PhotoProps> = ({ imageUrl, print }) => {
  // const saveAsPDF = () => {
  //   window.print();
  // };

  return (
    <div className={styles.photoContainer}>
      <img src={imageUrl} alt="Profile" className={styles.photo} />
      {!print ? (
        <div className={styles.buttons}>
          {/*{githubUrl && <a href={`${githubUrl}/CV`} target="_blank" rel="noopener noreferrer">*/}
          {/*    <button className={styles.githubBtn}>Source</button>*/}
          {/*</a>}*/}
          {/*<button className={styles.pdfBtn} onClick={saveAsPDF}>*/}
          {/*    PDF*/}
          {/*</button>*/}
        </div>
      ) : null}
    </div>
  );
};
