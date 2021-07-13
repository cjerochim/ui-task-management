import classnames from 'classnames';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <aside className={styles.base}>
            <button className={styles.profileButton}>
                <span className={classnames('material-icons', styles.icon)}>person</span>
            </button>
        </aside>
    );
};

export default Profile;