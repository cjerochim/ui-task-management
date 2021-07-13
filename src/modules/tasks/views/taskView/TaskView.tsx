import Layout from "../../components/layout/Layout";
import Profile from "../../components/profile/Profile";

import styles from './TaskView.module.css';

const TaskView = () => {
    return (
        <Layout>
            <Layout.Header className={styles.header}>
                <h1>Task Management</h1>
                <Profile />
            </Layout.Header>
            <Layout.Body>
                
            </Layout.Body>
        </Layout>
    );
};


export default TaskView;