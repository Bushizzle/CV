import { FunctionComponent } from 'preact';
import type { UserData } from '../types';
import { DayNightThemeToggle } from '../DayNightThemeToggle';
import { Person } from '../Person';
import { Summary } from '../Summary';
import { Skills } from '../Skills';
import { JobExperience } from '../JobExperience/JobExperience';
import { Contacts } from '../Contacts';
import styles from './Layout.scss';

interface LayoutProps {
    data: UserData | null;
    print: boolean;
}

export const Layout: FunctionComponent<LayoutProps> = ({ data, print }) => {
    return !data ? null : (
        <div className={styles.layout}>
            <DayNightThemeToggle />
            <div className={styles.section}>
                <div className={styles.article}>
                    <Person
                        imageUrl={data.photo}
                        githubUrl={data.contacts.GitHub}
                        print={print}
                    />
                </div>
                <div className={styles.article}>
                    <Summary text={data.summary} />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.article}>
                    <Skills skills={data.skills}/>
                </div>
                <div className={styles.article}>
                    <JobExperience experiences={data.experiences}/>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.article}>
                    {/*preserved for certificates section*/}
                </div>
                <div className={styles.article}>
                    <Contacts contacts={data.contacts} />
                </div>
            </div>
        </div>
    );
}