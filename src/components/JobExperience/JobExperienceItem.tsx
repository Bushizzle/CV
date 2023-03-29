import { FunctionComponent } from 'preact';
import styles from './JobExperienceItem.scss';

interface JobExperienceProps {
    companyName: string;
    position: string;
    workingPeriod: string;
    country: string;
    description: string;
    keySkills: string[];
}

export const JobExperienceItem: FunctionComponent<JobExperienceProps> = ({
     companyName,
     position,
     workingPeriod,
     country,
     description,
     keySkills,
 }) => {
    return (
        <div className={styles.jobExperience}>
            <h2 className={styles.position}>{position}</h2>
            <div>
                <span className={styles.companyName}>{companyName}</span>
                <span className={styles.country}>{` (${country})`}</span>
                <span className={styles.workingPeriod}>{workingPeriod}</span>
            </div>

            <div className={styles.descriptionText}>{description}</div>
            <ul className={styles.keySkills}>
                {keySkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};
