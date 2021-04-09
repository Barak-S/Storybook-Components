import { View } from 'components/Common';
import { makeStyles } from '@material-ui/core';
import { FormSelect, FormTextInput, FormTextArea, FormSocialSelect } from 'components/Form';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const SponsorInfo: FC<Props> = () => {
  const classes = useStyles();

  const userRoles = [{ value: 'Administrator' }, { value: 'Manager' }];

  return (
    <>
      <span style={styles.subtitle}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'
        }
      </span>
      <span style={styles.title}>{'Module Label'}</span>
      <FormTextInput className={classes.input} label="Presented By" />
      <span style={styles.subtitle}>{'How many sponsors do you have for your event?'}</span>
      {/* number input and progress slider bar */}
      <span style={styles.title}>{'Sponsor Information'}</span>
      <FormTextInput className={classes.inputFull} label="Presented By" />
      <View row style={styles.selectTimeRow}>
        <FormSelect
          className={classes.select1}
          fullWidth
          options={userRoles}
          label="Industry"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
        />
        <FormSelect
          className={classes.select2}
          fullWidth
          options={userRoles}
          label="Industry"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
        />
      </View>
      <View style={styles.textArea}>
        <FormTextArea label="Write a session description" />
      </View>
      <FormTextInput className={classes.inputFull} label="Website" />
      <div style={styles.headerSection}>
        <span style={styles.title}>{'Social Media Accounts'}</span>
        <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
      </div>
      <div style={styles.blockInf}>
        <div style={styles.socBlock}>
          <FormSocialSelect label="Global Account" className={classes.socSelect} />
          <FormTextInput className={classes.inputText} />
        </div>
        <div style={styles.socBlock}>
          <FormSocialSelect label="Global Account" className={classes.socSelect} />
          <FormTextInput className={classes.inputText} />
        </div>
        <div style={styles.socBlock}>
          <FormSocialSelect label="Global Account" className={classes.socSelect} />
          <FormTextInput className={classes.inputText} />
        </div>
        <div style={styles.socBlock}>
          <FormSocialSelect label="Global Account" className={classes.socSelect} />
          <FormTextInput className={classes.inputText} />
        </div>
      </div>
    </>
  );
};

const styles: Styles = {
  primaryHeader: {
    fontWeight: 500,
    color: colors.warmPurple,
    fontSize: 30,
    marginBottom: 5,
    paddingLeft: 6,
  },
  secondaryText: {
    color: colors.brownishGrey,
    paddingTop: 15,
    fontSize: 18,
  },
  setupSession: {
    borderLeft: `1px solid ${colors.greyish}`,
    paddingLeft: 55,
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: '0px',
    color: colors.coolBlue,
    display: 'block',
    paddingTop: 34,
    paddingBottom: 9,
    fontWeight: 500,
  },
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
  },
  select1: {
    maxWidth: 266,
    marginTop: 18,
    marginBottom: 27,
    marginRight: 44,
  },
  select2: {
    maxWidth: 266,
    marginTop: 18,
    marginBottom: 27,
  },
  select3: {
    maxWidth: 354,
    marginTop: 18,
    marginBottom: 44,
  },
  input: {
    maxWidth: 275,
    marginBottom: 33,
  },
  inputFull: {
    maxWidth: 576,
    marginTop: 4,
    marginBottom: 12,
  },
  selectTimeRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  primaryList: {
    listStyle: 'none',
    marginTop: 10,
  },
  listItemHeader: {
    fontWeight: 500,
    color: colors.coolBlue,
    paddingTop: 12,
    marginBottom: 20,
    fontSize: 18,
  },
  socSection: {
    marginBottom: '37px',
  },
  headerSection: {
    paddingBottom: '16px',
  },
  blockInf: {
    paddingBottom: '52px',
  },
  socBlock: {
    display: 'flex',
    alignItems: 'top',
    marginTop: '21px',
  },
  inputText: {
    maxWidth: 386,
    margin: '0 35px',
  },
  socSelect: {
    maxWidth: 195,
  },
  divider: {
    marginBottom: 30,
  },
  timeTo: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 12,
    paddingRight: 17,
    marginLeft: '-16px',
    color: colors.coolGrey,
  },
  textArea: {
    marginTop: 18,
    marginBottom: 25,
    maxWidth: 575,
  },
};

export const useStyles = () =>
  makeStyles({
    select1: {
      maxWidth: 266,
      marginTop: 18,
      marginBottom: 27,
      marginRight: 44,
    },
    select2: {
      maxWidth: 266,
      marginTop: 18,
      marginBottom: 27,
    },
    select3: {
      maxWidth: 354,
      marginTop: 18,
      marginBottom: 44,
    },
    input: {
      maxWidth: 275,
      marginBottom: 33,
    },
    inputFull: {
      maxWidth: 576,
      marginTop: 4,
      marginBottom: 12,
    },
    inputText: {
      maxWidth: 386,
      margin: '0 35px',
    },
    socSelect: {
      maxWidth: 195,
    },
  })();

export type SponsorInfoProps = Props;
export default SponsorInfo;
