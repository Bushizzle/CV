import { FunctionComponent } from 'preact';
import { UserContacts } from '../types';
import styles from './Contacts.scss';

import TelSVG from './../../../static/assets/tel_icon.svg';
import EmailSVG from './../../../static/assets/email_icon.svg';
import LinkedinSVG from './../../../static/assets/linkedin_icon.svg';
import GithubSVG from './../../../static/assets/github_icon.svg';

interface ContactsProps {
    contacts: UserContacts;
}

export const Contacts: FunctionComponent<ContactsProps> = ({ contacts }) => {
    return (
        <div className={styles.contacts}>
            <a target="_blank" className={styles.contact} href="tel:995595002584"><TelSVG /></a>
            <a target="_blank" className={styles.contact} href="mailto:4lex.bu@gmail.com"><EmailSVG /></a>
            {/*<a target="_blank" className={`${styles.contact} ${styles.whatsapp}`} href="https://api.whatsapp.com/send?phone=995595002584"></a>*/}
            {/*<a target="_blank" className={`${styles.contact} ${styles.telegram}`} href="https://t.me/bushizzle"></a>*/}
            <a target="_blank" className={styles.contact} href="https://www.linkedin.com/in/a-bu/"><LinkedinSVG /></a>
            <a target="_blank" className={styles.contact} href="https://github.com/Bushizzle"><GithubSVG /></a>
        </div>
    );
};
