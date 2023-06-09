import { FunctionComponent } from 'preact';
import type { UserSkill } from '../types';
import { Skill } from './Skill';
import styles from './Skills.scss';

interface UserSkillsProps {
  skills: UserSkill[];
}

export const Skills: FunctionComponent<UserSkillsProps> = ({ skills }) => {
  return (
    <div className={styles.skills}>
      <div className={styles.title}>Skills</div>
      {skills.map(s => (
        <Skill skill={s} />
      ))}
    </div>
  );
};
