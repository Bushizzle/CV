import {FunctionComponent} from 'preact';
import styles from './JobExperience.scss';

interface JobExperienceProps {
    companyName: string;
    workingPeriod: string;
    country: string;
    description: string;
    keySkills: string[];
}

export const JobExperience: FunctionComponent<JobExperienceProps> = ({
     companyName,
     workingPeriod,
     country,
     description,
     keySkills,
 }) => {
    return (
        <div className={styles.jobExperience}>
            <h3 className={styles.companyName}>{companyName}</h3>
            <p className={styles.workingPeriod}>{workingPeriod}</p>
            <p className={styles.country}>{country}</p>
            <p className={styles.description}>{description}</p>
            <ul className={styles.keySkills}>
                {keySkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};
