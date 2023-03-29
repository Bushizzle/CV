import { FunctionComponent } from 'preact';
import { JobExperienceItem } from './JobExperienceItem';
import { UserExperience } from '../types';

interface JobExperienceProps {
    experiences: UserExperience[];
}

export const JobExperience: FunctionComponent<JobExperienceProps> = ({ experiences }) => {
    return (<>
        {
            experiences.map(({ company, position, dates, country, description, skills  }) => <JobExperienceItem
                companyName={company}
                position={position}
                workingPeriod={dates}
                country={country}
                description={description}
                keySkills={skills}
            />)
        }
    </>);
};
