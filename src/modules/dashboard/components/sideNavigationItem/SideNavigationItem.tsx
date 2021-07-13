import classnames from 'classnames';
import styles from './SideNavigationItem.module.css';

export type SideNavigationItemProps = {
    id: string;
    label: string;
    icon: string;
    active? : boolean;
    onClick?(id:string): void;
};


const SideNavigationItem = ({ id, label, icon, active, onClick }: SideNavigationItemProps ) => {
    const className = classnames(styles.base,  { [styles.baseActive]: active });
    return (
        <button className={className} onClick={() => onClick && onClick(id)}>
            <span className={styles.title}>{label}</span>
            <span className={classnames('material-icons', styles.icon)}>{icon}</span>
        </button>
    );
};

export default SideNavigationItem;