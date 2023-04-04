import { FunctionComponent } from 'preact';
import type { UserSkill } from '../types';
import styles from './Skill.scss';

interface SkillProps {
  skill: UserSkill;
}

export const Skill: FunctionComponent<SkillProps> = ({ skill: { name, level, emoji } }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.head}>
        <div className={styles.name}>{name}</div>
        {emoji && <div className={styles.emoji}>{emoji}</div>}
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};
