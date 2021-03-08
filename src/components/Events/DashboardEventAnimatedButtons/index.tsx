import React, { FC } from 'react';
import { StyleProps } from 'styles';
import { AnimatedButton } from 'components/Buttons';

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
      <AnimatedButton iconType={'edit'} onClick={onEditClick}>
        {'Edit Content & Branding'}
      </AnimatedButton>
      <AnimatedButton iconType={'envelope'} onClick={onInviteTeamMembersClick}>
        {'Invite Team Members'}
      </AnimatedButton>
      <AnimatedButton iconType={'plus-square'} onClick={onAddPresenterClick}>
        {'Add Presenter'}
      </AnimatedButton>
      <AnimatedButton iconType={'cog'} onClick={onEditSessionsClick}>
        {'Add/Edit Sessions'}
      </AnimatedButton>
    </>
  );
};

export default DashboardEventAnimatedButtons;
