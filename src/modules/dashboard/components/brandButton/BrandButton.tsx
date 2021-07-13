import classnames from 'classnames';
import styles from './BrandButton.module.css';

type BrandButtonProps = {
    icon: string;
    active?:boolean;
    onClick? ():void;
};

const BrandButton = ({ onClick, icon, active }: BrandButtonProps ) => {
    return (
        <button onClick={onClick} className={classnames(styles.base, { [styles.baseActive]: active })}>
            <span className={classnames('material-icons', styles.icon)}>{icon}</span>
        </button>
    );
};

export default BrandButton;