import { Grid, IconButton, makeStyles } from '@material-ui/core';
import { FormSocialSelect, FormTextInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import { isSocialType, Social, SocialType } from 'core/api/types';
import React, { ChangeEvent, FC } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  item: Social;
  defItem?: boolean;
  onChange: (newItem: Social) => void;
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

export const FormSocialInput: FC<Props> = ({ item, style, defItem, onRemove, onChange }) => {
  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => onChange({ ...item, url: e.currentTarget.value });

  const handleSocialChange = (val: SocialType | undefined) => {
    if (val) {
      onChange({ ...item, name: val });
    }
  };

  const classes = useStyles();

  return (
    <Grid style={ms(styles.container, style)} container direction="row" spacing={2}>
      <Grid item sm={4} xs={12}>
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
      <Grid style={styles.inputWrap} item sm={8} xs={12}>
        <FormTextInput
          inputStyle={styles.input}
          fullWidth
          value={item.url}
          onChange={handleUrlChange}
          placeholder={socialNameToPlaceholder(item.name)}
        />
        {!defItem && (
          <IconButton style={styles.removeBtn} size="small" onClick={() => onRemove(item)}>
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
    top: '50%',
    marginTop: -12,
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

export default FormSocialInput;
