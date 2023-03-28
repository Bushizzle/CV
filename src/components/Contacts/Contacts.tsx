import { FunctionComponent } from 'preact';
import styles from './Contacts.scss';

interface ContactsProps {
    telegram: string;
    whatsapp: string;
    email: string;
    linkedin: string;
    github: string;
}

export const Contacts: FunctionComponent<ContactsProps> = ({
   telegram,
   whatsapp,
   email,
   linkedin,
   github,
}) => {
    return (
        <div className={styles.contacts}>
            <p>
                <strong>Telegram:</strong> {telegram}
            </p>
            <p>
                <strong>WhatsApp:</strong> {whatsapp}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <p>
                <strong>LinkedIn:</strong> {linkedin}
            </p>
            <p>
                <strong>GitHub:</strong> {github}
            </p>
        </div>
    );
};
