import { Fragment, useContext } from 'react';
import MainHeader from './main-header';
import Notification from '../UI/Notification';
import NotificationContext from '../../store/notification-context';

import styles from './Layout.module.css';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
