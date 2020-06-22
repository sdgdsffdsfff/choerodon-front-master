import React, { useEffect } from 'react';
import StarProjects from './components/StarProjects';
import AllProjects from './components/AllProjects';
import RecentProjects from './components/RecentProjects';
import { useProjectsProStore } from "./stores";
import './index.less';

export default () => {
  const {
    ProjectsProUseStore,
    AppState: {
      currentMenuType: {organizationId }
    }
  } = useProjectsProStore();

  useEffect(() => {
    ProjectsProUseStore.axiosGetProjects();
    ProjectsProUseStore.checkCreate(organizationId);
    ProjectsProUseStore.axiosGetStarProjects();
  }, []);

  return (
    <div className="projectsPro">
      <StarProjects />
      <AllProjects />
      <RecentProjects />
    </div>
  )
}