import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './Layout.module.css';

type LayoutHeaderProps = {
    className?: string;
    children: ReactNode;
};

const LayoutHeader = ({ children, className  }: LayoutHeaderProps ) => (
    <header className={classnames(styles.header, className )}>
        {children}
    </header>
);


type LayoutBodyProps = {
    children: ReactNode;
};

const LayoutBody = ({ children }: LayoutBodyProps) => (<div>{children}</div>);


type LayoutProps = {
    className?: string;
    children: ReactNode;
};



const Layout = ({ children, className }: LayoutProps ) => (
    <div className={classnames(styles.base, className)}>
        {children}
    </div>
);

Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;



export default Layout;