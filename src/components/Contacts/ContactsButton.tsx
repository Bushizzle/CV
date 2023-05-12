import { FunctionComponent } from 'preact';
import { useCallback } from 'preact/compat';
import styles from './Contacts.scss';
import { trackEvent } from '../../analytics';

type ContactsLinkProps = {
  className: string;
  eventName: string;
  href: string;
};

export const ContactsButton: FunctionComponent<ContactsLinkProps> = ({ eventName, href, className, children }) => {
  const track = useCallback(() => trackEvent(`${eventName} button click`), [eventName]);
  return (
    <a href={href} className={`${styles.button} ${className}`} onClick={track}>
      {children}
    </a>
  );
};
