import { FunctionComponent } from 'preact';
import { UserContacts } from '../types';
import styles from './Contacts.scss';

import TelSVG from '/static/assets/icons/tel.svg';
import EmailSVG from '/static/assets/icons/email.svg';
import TelegramSVG from '/static/assets/icons/telegram.svg';
import FacebookSVG from '/static/assets/icons/fb.svg';
import LinkedinSVG from '/static/assets/icons/linkedin.svg';
import GithubSVG from '/static/assets/icons/github.svg';
import PdfSVG from '/static/assets/icons/pdf.svg';

interface ContactsProps {
  contacts: UserContacts;
}

export const Contacts: FunctionComponent<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <div className={styles.contacts}>
        <a target="_blank" className={styles.contact} href={contacts.Telegram}>
          <TelegramSVG />
        </a>
        <a target="_blank" className={styles.contact} href={contacts.LinkedIn}>
          <LinkedinSVG />
        </a>
        <a target="_blank" className={styles.contact} href={contacts.GitHub}>
          <GithubSVG />
        </a>
        <a target="_blank" className={styles.contact} href={contacts.Facebook}>
          <FacebookSVG />
        </a>
        <a download className={styles.contact} href={encodeURIComponent(contacts.cv)}>
          <PdfSVG />
        </a>
      </div>
      <div className={styles.buttons}>
        <a href={`mailto:${contacts.Email}`} className={`${styles.button} ${styles.email}`}>
          <EmailSVG /> {contacts.Email}
        </a>
        <a href={`tel:${contacts.Tel}`} className={`${styles.button} ${styles.tel}`}>
          <TelSVG /> {contacts.Tel}
        </a>
      </div>
    </>
  );
};
