import { useState } from 'react';
import Dashboard from "./modules/dashboard/components/dashboard/Dashboard";
import BrandButton from './modules/dashboard/components/brandButton/BrandButton';
import SideNavigation from "./modules/dashboard/components/sideNavigation/SideNavigation";
import { SideNavigationItemProps } from "./modules/dashboard/components/sideNavigationItem/SideNavigationItem";
import TaskView from './modules/tasks/views/taskView/TaskView';

import styles from './App.module.css';

const items: SideNavigationItemProps[] = [
  {
    id: '1',
    label: 'Home',
    icon: 'home',
    active: true,
  },
  {
    id: '2',
    label: 'Item 2',
    icon: 'face',
    active: false,
  },
  {
    id: '3',
    label: 'Item 3',
    icon: 'face',
    active: false,
  },
  {
    id: '4',
    label: 'Item 4',
    icon: 'face',
    active: false,
  },
  {
    id: '5',
    label: 'Notifications',
    icon: 'notifications',
    active: false,
  },
  {
    id: '6',
    label: 'Settings',
    icon: 'settings',
    active: false,
  }
];


function App() {

  const [list, setList] = useState<SideNavigationItemProps[]>(items);
  const [menuActive, setMenuActive] = useState<boolean>(false); 

  const onListSelectHandler = (id:string) => {
    setList((list) => list.map((item) => {
      if(item.id === id) return {...item, active: true};
      return {...item, active: false};
    }));
  };

  const onBrandButtonHandler = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={styles.base}>
      <Dashboard>
        <Dashboard.Sidebar>
          <SideNavigation>
            <SideNavigation.Header>
              <BrandButton icon="menu" active={menuActive} onClick={onBrandButtonHandler} />
            </SideNavigation.Header>
            <SideNavigation.Body list={list} onClick={onListSelectHandler}  />
          </SideNavigation>
        </Dashboard.Sidebar>
        <Dashboard.Main>
          <TaskView />
        </Dashboard.Main>
      </Dashboard>
    </div>
  );
}

export default App;
