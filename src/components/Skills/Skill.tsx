import { FunctionComponent } from 'preact';
import type { UserSkill } from '../types';
import styles from './Skill.scss';

interface SkillProps {
    skill: UserSkill;
}

export const Skill: FunctionComponent<SkillProps> = ({ skill: { name, level } }) => {
    return (
        <div className={styles.skill}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${level}%` }}></div>
            </div>
        </div>
    );
};
