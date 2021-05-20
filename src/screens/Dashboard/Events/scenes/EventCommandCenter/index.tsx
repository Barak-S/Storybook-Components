import React, { FC } from 'react';
import { StyleProps } from 'styles';

import DashboardEventCommandCenterView from './view';

type Props = StyleProps;

export const DashboardEventCommandCenter: FC<Props> = () => {
  return <DashboardEventCommandCenterView />;
};

export type DashboardEventCommandCenterProps = Props;
export default DashboardEventCommandCenter;
