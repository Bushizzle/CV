import { FunctionComponent } from 'preact';

import PfaDark from '/static/assets/pfa-dark.svg';
import PfaLight from '/static/assets/pfa-light.svg';
import styles from './Pfa.scss';

export const Pfa: FunctionComponent<{ github: string }> = ({ github }) => {
  return (
    <a className={styles.pfa} href={`${github}/CV`} target="_blank">
      <PfaDark className={styles.dark} />
      <PfaLight className={styles.light} />
    </a>
  );
};
