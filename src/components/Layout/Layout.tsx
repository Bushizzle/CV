import { FunctionComponent } from 'preact';
import styles from './Layout.scss';

import { Photo } from '../Photo';
import { Summary } from '../Summary';
import { Title } from '../Title';
import { Skill } from '../Skill';
import { JobExperience } from '../JobExperience/JobExperience';
import { Contacts } from '../Contacts';

export const Layout: FunctionComponent = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.section}>
                <div className={styles.article}>
                    <Photo
                        imageUrl="https://media.licdn.com/dms/image/D5635AQGGA1FQGPtixg/profile-framedphoto-shrink_400_400/0/1677956808158?e=1680562800&v=beta&t=LqgtzP6jXqxrxg6Of231jZbRjKs59vFVAyRKxAHW00s"
                        githubUrl=""
                    />
                </div>
                <div className={styles.article}>
                    <Summary/>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.article}>
                    <Skill name="Javascript" progress={100}/>
                    <Skill name="Typescript" progress={100}/>
                    <Skill name="HTML" progress={100}/>
                    <Skill name="CSS" progress={100}/>
                    <Skill name="AWS" progress={80}/>
                </div>
                <div className={styles.article}>
                    <JobExperience
                        companyName="Awesome Company 1"
                        workingPeriod="2020 - Present"
                        country="USA"
                        description="Working as a frontend developer."
                        keySkills={['React', 'Preact', 'TypeScript']}
                    />
                    <JobExperience
                        companyName="Awesome Company 2"
                        workingPeriod="2020 - Present"
                        country="USA"
                        description="Working as a frontend developer."
                        keySkills={['React', 'Preact', 'TypeScript']}
                    />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.article}>4</div>
                <div className={styles.article}>
                    <Title>Contacts</Title>
                    <Contacts
                        telegram="+1234567890"
                        whatsapp="+0987654321"
                        email="john.doe@example.com"
                        linkedin="https://www.linkedin.com/in/johndoe"
                        github="https://github.com/johndoe"
                    />
                </div>
            </div>
        </div>
    );
}