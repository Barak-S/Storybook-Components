import { View } from 'components/Common';
import { UserSettings } from 'core/api';
import React, { FC } from 'react';
import { ms, StyleProps, Styles, useScreenSizes } from 'styles';

import ProfileSectionFooter from '../SectionFooter';
import EventActivity from './components/EventActivity';

interface Props extends StyleProps {
  data?: UserSettings;
  processing?: boolean;
  disabled?: boolean;
  onChange?: (val: UserSettings) => void;
  onSubmit?: () => void;
}

export const ProfileSettingsSection: FC<Props> = ({ style, data, processing, disabled, onChange, onSubmit }) => {
  const { isMobile } = useScreenSizes();
  return (
    <View style={ms(styles.container, isMobile && styles.containerSM, style)}>
      <EventActivity data={data} onChange={onChange} />
      <ProfileSectionFooter processing={processing} disabled={disabled} style={styles.footer} onSaveClick={onSubmit} />
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
