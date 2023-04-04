import { FunctionComponent } from 'preact';
import { UserExperience } from '../types';

import { SkillChips } from '../SkillChips';
import styles from './JobExperience.scss';

interface JobExperienceProps {
  experiences: UserExperience[];
}

const CompanyName = ({ name, site }: { name: string; site?: string }) =>
  site ? (
    <a href={site} target="_blank">
      {name}
    </a>
  ) : (
    <span>{name}</span>
  );

export const JobExperience: FunctionComponent<JobExperienceProps> = ({ experiences }) => {
  return (
    <div className={styles.experience}>
      {experiences.map(({ company, site, position, dates, country, description, skills }) => {
        return (
          <div className={styles.jobExperience}>
            <h2 className={styles.title}>{position}</h2>
            <h3 className={styles.subtitle}>
              <CompanyName name={company} site={site} />
              {` (${country}) ${dates}`}
            </h3>

            <div className={styles.descriptionText}>{description}</div>
            <ul className={styles.keySkills}>
              {skills.map(skill => (
                <SkillChips name={skill} />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
