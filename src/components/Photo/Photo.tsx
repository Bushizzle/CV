import { FunctionComponent } from 'preact';
import styles from './Photo.scss';

interface PhotoProps {
    imageUrl: string;
    githubUrl: string;
}

export const Photo: FunctionComponent<PhotoProps> = ({ imageUrl, githubUrl }) => {
    const saveAsPDF = () => {
        alert('Saving page as PDF functionality not implemented.');
    };

    return (
        <div className={styles.photoContainer}>
            <img src={imageUrl} alt="Profile" className={styles.photo} />
            <div className={styles.buttons}>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <button className={styles.githubBtn}>GitHub</button>
                </a>
                <button className={styles.pdfBtn} onClick={saveAsPDF}>
                    Save as PDF
                </button>
            </div>
        </div>
    );
};
