import { FunctionComponent } from 'preact';
import type { UserData } from '../types';
import { ThemeToggle } from '../ThemeToggle';
import { Person } from '../Person';
import { Summary } from '../Summary';
import { Skills } from '../Skills';
import { JobExperience } from '../JobExperience';
import { Contacts } from '../Contacts';
import { THEMES } from '../ThemeToggle';
import styles from './Layout.scss';

interface LayoutProps {
  data: UserData | null;
  theme: ValueOf<typeof THEMES>;
}

export const Layout: FunctionComponent<LayoutProps> = ({ data, theme }) => {
  return !data ? null : (
    <div className={styles.layout}>
      <ThemeToggle theme={theme} />
      <aside>
        <Person imageUrl={data.photo} />
        <Contacts contacts={data.contacts} />
        <Skills skills={data.skills} />
      </aside>
      <main>
        <Summary title={data.name} text={data.summary} github={data.contacts.GitHub} />
        <JobExperience experiences={data.experiences} />
      </main>
    </div>
  );
};
