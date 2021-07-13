import { ReactNode } from "react";

import styles from './Dashboard.module.css';

type DashboardSidebarProps = {
    children: ReactNode;
};

const DashboardSidebar = ({ children }: DashboardSidebarProps) => (<div className={styles.sidebar}>{children}</div>);


type DashboardMainProps = {
    children: ReactNode;
};

const DashboardMain = ({ children }: DashboardMainProps) => (<div className={styles.main}>{children}</div>);



type DashboardProps = {
    children: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
    return (
        <main className={styles.base}>{children}</main>
    );
}

Dashboard.Sidebar = DashboardSidebar;
Dashboard.Main = DashboardMain;


export default Dashboard;