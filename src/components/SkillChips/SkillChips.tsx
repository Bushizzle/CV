import { FunctionComponent, createRef } from 'preact';
import { useEffect, useState } from 'preact/compat';
import { RANDOM_QUOTE } from './constants';
import styles from './SkillChips.scss';

interface JobExperienceSkillProps {
  name: string;
}

export const SkillChips: FunctionComponent<JobExperienceSkillProps> = ({ name }) => {
  const [hint, showHint] = useState(false);
  useEffect(() => {
    window.addEventListener('close_hint', () => showHint(false));
  }, []);
  const randomQuote = RANDOM_QUOTE[Math.floor(Math.random() * RANDOM_QUOTE.length)];
  let ref = createRef();
  return (
    <li
      ref={ref}
      className={styles.skill}
      onClick={() => {
        window.dispatchEvent(new CustomEvent('close_hint'));
        showHint(true);
        setTimeout(() => showHint(false), 2500);
      }}
    >
      {name}
      {hint && <div className={styles.hint}>{randomQuote}</div>}
    </li>
  );
};
