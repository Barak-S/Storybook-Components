import { View } from 'components/Common';
import { AccountProfilePatch } from 'core/api';
import React, { FC } from 'react';
import { ms, StyleProps, Styles, useScreenSizes } from 'styles';

import ProfileSectionFooter from '../SectionFooter';
import EventActivity from './components/EventActivity';

interface Props extends StyleProps {
  data?: AccountProfilePatch;
  processing?: boolean;
  onChange?: (val: AccountProfilePatch) => void;
  onSubmit?: () => void;
}

export const ProfileSettingsSection: FC<Props> = ({ style, data, processing, onChange, onSubmit }) => {
  const { isMobile } = useScreenSizes();
  return (
    <View style={ms(styles.container, isMobile && styles.containerSM, style)}>
      <EventActivity data={data} onChange={onChange} />
      <ProfileSectionFooter processing={processing} disabled={processing} style={styles.footer} onSaveClick={onSubmit} />
    </View>
  );
};

const styles: Styles = {
  container: {
    width: '-webkit-fill-available',
    display: 'flex',
    marginBottom: '37px',
    flexDirection: 'column',
  },
  containerSM: {
    display: 'block',
  },
  footer: {
    letterSpacing: 2.25,
  },
};

export type ProfileSettingsSectionProps = Props;
export default ProfileSettingsSection;
