import { FunctionComponent } from 'preact';
import { UserContacts } from '../types';
import styles from './Contacts.scss';

interface ContactsProps {
    contacts: UserContacts;
}

export const Contacts: FunctionComponent<ContactsProps> = ({ contacts }) => {
    return (
        <div className={styles.contacts}>
            {
                Object.entries(contacts).map(([name, value]) => <p>{`${name}: ${value}`}</p>)
            }
        </div>
    );
};
