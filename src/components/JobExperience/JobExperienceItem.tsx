import { FunctionComponent } from 'preact';
import styles from './JobExperienceItem.scss';
import { JobExperienceSkill } from './JobExperienceSkill';

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
            <h2 className={styles.title}>{position}</h2>
            <h3 className={styles.subtitle}>{`${companyName} (${country}) ${workingPeriod}`}</h3>

            <div className={styles.descriptionText}>{description}</div>
            <ul className={styles.keySkills}>
                {keySkills.map(skill => (
                    <JobExperienceSkill name={skill} />
                ))}
            </ul>
        </div>
    );
};
