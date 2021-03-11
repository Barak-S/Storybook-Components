import React, { FC } from 'react';
import { StyleProps } from 'styles';
import AnimatedButton from './components/Button';

interface Props extends StyleProps {
  onInviteTeamMembersClick?: () => void;
  onAddPresenterClick?: () => void;
  onEditSessionsClick?: () => void;
  onEditClick?: () => void;
}

export const DashboardEventAnimatedButtons: FC<Props> = ({
  onInviteTeamMembersClick,
  onAddPresenterClick,
  onEditSessionsClick,
  onEditClick,
}) => {
  return (
    <>
      <AnimatedButton icon="edit" onClick={onEditClick}>
        {'Edit Content & Branding'}
      </AnimatedButton>
      <AnimatedButton icon="envelope" onClick={onInviteTeamMembersClick}>
        {'Invite Team Members'}
      </AnimatedButton>
      <AnimatedButton icon="plus-square" onClick={onAddPresenterClick}>
        {'Add Presenter'}
      </AnimatedButton>
      <AnimatedButton icon="cog" onClick={onEditSessionsClick}>
        {'Add/Edit Sessions'}
      </AnimatedButton>
    </>
  );
};

export default DashboardEventAnimatedButtons;
