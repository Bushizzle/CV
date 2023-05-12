import { FunctionComponent } from 'preact';
import { UserContacts } from '../types';
import styles from './Contacts.scss';
import { ContactsLink } from './ContactsLink';
import { ContactsButton } from './ContactsButton';

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
        <ContactsLink href={contacts.Telegram} eventName={'Telegram'}>
          <TelegramSVG />
        </ContactsLink>
        <ContactsLink href={contacts.LinkedIn} eventName={'Linkedin'}>
          <LinkedinSVG />
        </ContactsLink>
        <ContactsLink href={contacts.GitHub} eventName={'Github'}>
          <GithubSVG />
        </ContactsLink>
        <ContactsLink href={contacts.Facebook} eventName={'Facebook'}>
          <FacebookSVG />
        </ContactsLink>
        <ContactsLink href={encodeURIComponent(contacts.cv)} eventName={'PDF'} download={true}>
          <PdfSVG />
        </ContactsLink>
      </div>
      <div className={styles.buttons}>
        <ContactsButton href={`mailto:${contacts.Email}`} className={styles.email} eventName={'Email'}>
          <EmailSVG /> {contacts.Email}
        </ContactsButton>
        <ContactsButton href={`tel:${contacts.Tel}`} className={styles.tel} eventName={'Tel'}>
          <TelSVG /> {contacts.Tel}
        </ContactsButton>
      </div>
    </>
  );
};
