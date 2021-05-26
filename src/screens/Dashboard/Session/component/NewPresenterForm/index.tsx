import { View } from 'components/Common';
import { makeStyles, Divider } from '@material-ui/core';
import { FormSelect, FormTextInput, FormTextArea, FormToggle } from 'components/Form';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import { LineAwesomeIcon } from 'components/Icons';
import { ContainedButton } from 'components/Buttons';

type Props = StyleProps;

export const SponsorInfo: FC<Props> = () => {
  const classes = useStyles();

  return (
    <>
      <View row style={{ alignItems: 'center', paddingTop: 16.5 }}>
        <span style={styles.subtitle}>{'Is this a new or existing sponsor?'}</span>
        <span style={styles.switchLabel}>{'New'}</span>
        <FormToggle value />
        <span style={styles.switchLabel}>{'Existing'}</span>
      </View>
      <View row style={styles.nameSection}>
        <FormTextInput className={classes.input} label="First Name" required />
        <FormTextInput className={classes.input} label="Last Name" required />
        <FormTextInput
          className={classes.inputEmail}
          label="email"
          required
          adornmentType="transparent"
          iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
        />
      </View>
      <View row style={{ marginBottom: 50 }}>
        <FormSelect
          className={classes.select}
          fullWidth
          options={[{ value: 'Presenter' }]}
          label="Presenter"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
        />
      </View>
      <View style={styles.textArea}>
        <FormTextArea resize label="Invitation Message" className={classes.textAreaInput} />
      </View>
      <View row style={{ display: 'flex', justifyContent: 'center' }}>
        <ContainedButton size="medium" className={classes.inviteBtn}>
          {'INVITE'}
        </ContainedButton>
      </View>
      <Divider style={{ marginBottom: 30 }} />
    </>
  );
};

const styles: Styles = {
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
    marginRight: 25,
    fontSize: 16,
  },
  switchLabel: {
    paddingRight: 11,
    paddingLeft: 11,
  },
  textArea: {
    marginBottom: 30,
  },
  nameSection: {
    marginTop: 4,
    marginBottom: 27,
  },
};

export const useStyles = () =>
  makeStyles({
    select: {
      maxWidth: 259,
    },
    textAreaInput: {
      maxWidth: 955,
    },
    input: {
      maxWidth: 275,
      marginRight: 25,
    },
    inputEmail: {
      maxWidth: 355,
    },
    inviteBtn: {
      height: 34,
      width: '144px !important',
      marginBottom: 30,
    },
  })();

export type SponsorInfoProps = Props;
export default SponsorInfo;
