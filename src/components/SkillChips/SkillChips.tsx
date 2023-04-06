import { FunctionComponent, createRef } from 'preact';
import { useCallback, useEffect, useState } from 'preact/compat';
import { RANDOM_QUOTE, HINT_CLOSE_EVENT } from './constants';
import styles from './SkillChips.scss';

interface JobExperienceSkillProps {
  name: string;
}

export const SkillChips: FunctionComponent<JobExperienceSkillProps> = ({ name }) => {
  const [hint, showHint] = useState(false);
  const hideHint = useCallback(() => showHint(false), []);

  useEffect(() => {
    window.addEventListener(HINT_CLOSE_EVENT, hideHint);
    return () => window.removeEventListener(HINT_CLOSE_EVENT, hideHint);
  }, []);

  const randomQuote = RANDOM_QUOTE[Math.floor(Math.random() * RANDOM_QUOTE.length)];

  let ref = createRef();
  return (
    <li
      ref={ref}
      className={styles.skill}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(HINT_CLOSE_EVENT));
        showHint(true);
        setTimeout(() => hideHint, 2500);
      }}
    >
      {name}
      {hint && <div className={styles.hint}>{randomQuote}</div>}
    </li>
  );
};
