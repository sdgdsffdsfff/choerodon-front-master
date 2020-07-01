import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ModalContainer } from 'choerodon-ui/pro/lib';
import asyncRouter from '../util/asyncRouter';

const Projects = asyncRouter(() => import('../routes/projects'));
const Applications = asyncRouter(() => import('../routes/applications'));
const Charts = asyncRouter(() => import('../routes/charts'));
const Unauthorized = asyncRouter(() => import('../routes/unauthorized'));
const WorkBench = asyncRouter(() => import('../routes/workBench'));
const ProjectsPro = asyncRouter(() => import('../routes/projectsPro'));
const ProjectOverview = asyncRouter(() => import('../routes/projectOverview'));
const InnerIndex = ({ match, AutoRouter }) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}projects`} component={ProjectsPro} />
      <Route exact path={`${match.url}applications`} component={Applications} />
      <Route exact path={`${match.url}charts`} component={Charts} />
      <Route exact path={`${match.url}unauthorized`} component={Unauthorized} />
      <Route exact path={`${match.url}workbench`} component={WorkBench} />
      <Route exact path={`${match.url}projectsPro`} component={ProjectsPro} />
      <Route exact path={`${match.url}agile/scrumboard`} component={ProjectOverview} />

      <Route path={match.url} component={AutoRouter} />
    </Switch>
    <ModalContainer />
  </div>
);

export default withRouter(InnerIndex);
