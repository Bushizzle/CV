import { FunctionComponent } from 'preact';
import { Skill } from './Skill';
import type { UserSkill } from '../types';
import styles from './Skills.scss';

interface UserSkillsProps {
    skills: UserSkill[];
}

export const Skills: FunctionComponent<UserSkillsProps> = ({ skills}) => {
    return (<div className={styles.skills}>
        {skills.map((s) => <Skill skill={s} />)}
    </div>);
}
