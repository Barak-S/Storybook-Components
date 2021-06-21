import { Grid, IconButton, makeStyles } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import { isSocialType, isUrl, Social, SocialType } from 'core/api/types';
import React, { ChangeEvent, FC, useState } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';

import FormSocialSelect from '../../../SocialSelect';
import FormTextInput from '../../../TextInput';

interface Props extends StyleProps {
  item: Social;
  index?: number;
  defItem?: boolean;
  labelsVisible?: boolean;
  onChange: (newItem: Social, index?: number) => void;
  onRemove: (item: Social) => void;
}

const socialNameToPlaceholder = (val: string): string => {
  switch (val) {
    case 'twitter':
      return 'twitter.com/username';
    case 'facebook':
      return 'facebook.com/username';
    case 'instagram':
      return 'instagram.com/username';
    case 'linkedin':
      return 'linkedin.com/in/username';
    case 'youtube':
      return 'www.youtube.com/channel/username';
    default:
      return 'https://';
  }
};

export const FormSocialsInputItem: FC<Props> = ({ item, style, defItem, index, labelsVisible, onRemove, onChange }) => {
  const [inputErr, setInputErr] = useState<string | undefined>(undefined);

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputErr) setInputErr(undefined);
    onChange({ ...item, url: e.currentTarget.value }, index);
  };

  const handleUrlBlur = () => {
    if (!item.url) return;
    if (!isUrl(item.url)) {
      setInputErr('Wrong URL format');
    }
  };

  const handleSocialChange = (val: SocialType | undefined) => {
    if (val) {
      onChange({ ...item, name: val }, index);
    }
  };

  const handleRemove = () => {
    setInputErr(undefined);
    onRemove(item);
  };

  const classes = useStyles();

  return (
    <Grid style={ms(styles.container, style)} container direction="row" spacing={2}>
      <Grid item xs={12} sm={4}>
        {labelsVisible && index === 0 && <span style={styles.socialMediaLabel}>{'Social Media'}</span>}
        <FormSocialSelect
          style={styles.select}
          classes={{
            iconBtn: classes.selectAdornment,
            root: classes.selectRoot,
          }}
          value={isSocialType(item.name) ? item.name : 'custom'}
          onChange={handleSocialChange}
        />
      </Grid>
      <Grid style={styles.inputWrap} item xs={12} sm={8}>
        {labelsVisible && index === 0 && <span style={styles.socialMediaLabel}>{'Profile Address'}</span>}
        <FormTextInput
          inputStyle={styles.input}
          fullWidth
          error={!!inputErr}
          helperText={inputErr}
          value={item.url}
          onChange={handleUrlChange}
          onBlur={handleUrlBlur}
          placeholder={socialNameToPlaceholder(item.name)}
        />
        {!defItem && (
          <IconButton
            style={ms(styles.removeBtn, { top: index === 0 && labelsVisible ? 58 : 22 })}
            size="small"
            onClick={handleRemove}
          >
            <LineAwesomeIcon type="times-circle" />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

const styles: Styles = {
  container: {},
  select: {
    color: colors.brownishGrey,
  },
  inputWrap: {
    position: 'relative',
  },
  input: {
    fontSize: 16,
    paddingRight: 50,
  },
  removeBtn: {
    ...mx.square(24),
    position: 'absolute',
    right: 18,
  },
  socialMediaLabel: {
    color: colors.coolBlue,
    fontWeight: 500,
    fontSize: 14,
    paddingBottom: 15,
    display: 'block',
    textTransform: 'uppercase',
  },
};

const useStyles = () =>
  makeStyles({
    selectAdornment: {
      '&.MuiButtonBase-root': {
        background: colors.veryLightPinkThree,
      },
    },
    selectRoot: {
      fontSize: 16,
    },
  })();

export default FormSocialsInputItem;
