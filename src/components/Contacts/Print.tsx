import { FunctionComponent } from 'preact';
import { useCallback } from 'preact/compat';
import styles from './Contacts.scss';

import PdfSVG from '/static/assets/icons/pdf.svg';

export const Print: FunctionComponent = () => {
  const print = useCallback(() => {
    window.print();
  }, []);
  return (
    <span className={styles.contact} onClick={print}>
      <PdfSVG />
    </span>
  );
};
