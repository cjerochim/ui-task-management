import styles from './SideNavigation.module.css';

import SideNavigationItem, { SideNavigationItemProps } from '../sideNavigationItem/SideNavigationItem';
import { ReactNode } from 'react';

type SideNavigationHeaderProps = {
    children: ReactNode;
};

const SideNavigationHeader = ({ children }: SideNavigationHeaderProps) => (<header className={styles.header}>{children}</header>);

type SideNavigationBodyProps = {
    list: SideNavigationItemProps[];
    onClick?(id: string):void;
};

const SideNavigationBody = ({ list, onClick }: SideNavigationBodyProps ) => (
    <div>
        <h2 className={styles.title}>Primary navigation</h2>
        <ul className={styles.list}>
            {list.map((item) => (
                <li key={item.id}>
                    <SideNavigationItem {...item} onClick={onClick} />
                </li>
            ))}
        </ul>
    </div>
)


type SideNavigationProps = {
    children: ReactNode;
}




const SideNavigation = ({ children }: SideNavigationProps) => {
    return (
        <nav className={styles.base}>
            {children}
        </nav>
    );
};

SideNavigation.defaultProps = {
    list: [],
};

SideNavigation.Header = SideNavigationHeader;
SideNavigation.Body = SideNavigationBody;

export default SideNavigation;