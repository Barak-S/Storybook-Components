import { makeStyles, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { ContainedButton } from 'components/Buttons';
import { FormTextInput, FormNumberInput, FormSelect, FormTextArea } from 'components/Form';
import { LineTabs } from 'components/Navigation/LineTabs';
import React, { FC, useState } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import NewSponsorForm from '../component/NewSponsorForm';
import { DashboardTabPanel } from 'components/Dashboard';

type Props = StyleProps;

export const SponsorTab: FC<Props> = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  const [sponsorsAmount, setSponsorsAmount] = useState<number>(3);

  const handleSponsorCount = (newValue: number) => {
    setSponsorsAmount(newValue);
  };

  const createSponsorTabs = () => {
    const sponsorArray = [];
    for (let i = 0; i < sponsorsAmount; i++) {
      const sponsor = {
        index: i,
        label: `Sponsor ${i + 1}`,
      };
      sponsorArray.push(sponsor);
    }
    return sponsorArray;
  };

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

      <View>
        <FormNumberInput min={0} value={sponsorsAmount} onChange={handleSponsorCount} style={styles.numberInput} />
      </View>

      <LineTabs tab={tab} className={classes.tabs} tabs={createSponsorTabs()} onChange={(_e, val) => setTab(val)} />
      <Grid>
        {Array.from(Array(sponsorsAmount), (e, i) => {
          return (
            <DashboardTabPanel style={styles.tabPanel} value={tab} index={i}>
              <NewSponsorForm />
            </DashboardTabPanel>
          );
        })}
      </Grid>

      <span style={styles.title}>{'Invite To Event'}</span>
      <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>

      <View row>
        <FormTextInput className={classes.input} label="First Name" />
        <FormTextInput className={classes.input2} label="Last Name" />
      </View>
      <FormTextInput className={classes.inputFull} label="Email" />
      <View row>
        <FormSelect
          className={classes.select1}
          fullWidth
          options={[{ value: 'Sponsor' }]}
          label="User Group"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
        />
        <FormSelect
          className={classes.select2}
          fullWidth
          options={[{ value: 'Sponsor' }]}
          label="Company Type"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
        />
      </View>
      <View style={styles.textArea}>
        <FormTextArea label="Invitation Message" />
      </View>

      <View style={styles.inviteMoreSection}>
        <ContainedButton
          size="medium"
          className={classes.inviteBtn}
          // onClick={onEditClick}
          disabled
        >
          {'INVITE AND ADD ANOTHER'}
        </ContainedButton>
      </View>

      <View style={styles.saveSection}>
        <ContainedButton
          size="medium"
          className={classes.saveBtn}
          // onClick={onEditClick}
          disabled
        >
          {'SAVE'}
        </ContainedButton>
      </View>
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
  mobileTabsWrap: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  tabPanel: {
    // padding: '35px 0',
  },
  numberInput: {
    flexDirection: 'initial',
    marginTop: 8,
    marginBottom: 31,
  },
  textArea: {
    marginTop: 18,
    marginBottom: 38,
    maxWidth: 602,
  },
  saveSection: {
    marginTop: 33,
    marginBottom: 6,
    alignItems: 'center',
  },
  inviteMoreSection: {
    alignItems: 'center',
  },
};

export const useStyles = () =>
  makeStyles({
    input: {
      maxWidth: 275,
      marginBottom: 33,
      marginRight: 21,
      marginTop: 21,
    },
    input2: {
      maxWidth: 306,
      marginBottom: 33,
      marginTop: 21,
    },
    tabs: {
      overflowX: 'auto',
      overflowY: 'hidden',
    },
    inputFull: {
      maxWidth: 602,
      marginTop: 4,
      marginBottom: 12,
    },
    inputText: {
      maxWidth: 386,
      margin: '0 35px',
    },
    select1: {
      maxWidth: 275,
      marginTop: 18,
      marginBottom: 27,
      marginRight: 26,
    },
    select2: {
      maxWidth: 301,
      marginTop: 18,
      marginBottom: 27,
    },
    saveBtn: {
      height: 34,
      width: '76px !important',
      letterSpacing: 2.25,
    },
    inviteBtn: {
      height: 34,
      width: '277px !important',
    },
  })();

export type SponsorTabProps = Props;
export default SponsorTab;
