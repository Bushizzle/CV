import { FunctionComponent } from 'preact';
import { Title } from '../Title';
import { Progress } from '../Progress';
import styles from './Skill.scss';

interface SkillProps {
    name: string;
    progress: number;
}

export const Skill: FunctionComponent<SkillProps> = ({ name, progress }) => {
    return (
        <div className={styles.skill}>
            <Title>{name}</Title>
            <Progress value={progress} />
        </div>
    );
};
