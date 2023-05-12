import { FunctionComponent } from 'preact';
import { useCallback } from 'preact/compat';
import styles from './Contacts.scss';
import { trackEvent } from '../../analytics';

type ContactsLinkProps = {
  eventName: string;
  href: string;
  download?: boolean;
};

export const ContactsLink: FunctionComponent<ContactsLinkProps> = ({ eventName, href, download, children }) => {
  const track = useCallback(() => trackEvent(`${eventName} link click`), [eventName]);
  return (
    <a target="_blank" className={styles.contact} href={href} onClick={track} download={download}>
      {children}
    </a>
  );
};
