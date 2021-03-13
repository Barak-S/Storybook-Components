import React, { FC } from 'react';
import { StyleProps } from 'styles';
import MainActionsBtn from './components/Btn';

interface Props extends StyleProps {
  onInviteTeamMembersClick?: () => void;
  onAddPresenterClick?: () => void;
  onEditSessionsClick?: () => void;
  onEditClick?: () => void;
}

export const DashboardEventMainActions: FC<Props> = ({
  onInviteTeamMembersClick,
  onAddPresenterClick,
  onEditSessionsClick,
  onEditClick,
}) => {
  return (
    <>
      <MainActionsBtn icon="edit" onClick={onEditClick}>
        {'Edit Content & Branding'}
      </MainActionsBtn>
      <MainActionsBtn icon="envelope" onClick={onInviteTeamMembersClick}>
        {'Invite Team Members'}
      </MainActionsBtn>
      <MainActionsBtn icon="plus-square" onClick={onAddPresenterClick}>
        {'Add Presenter'}
      </MainActionsBtn>
      <MainActionsBtn icon="cog" onClick={onEditSessionsClick}>
        {'Add/Edit Sessions'}
      </MainActionsBtn>
    </>
  );
};

export default DashboardEventMainActions;
