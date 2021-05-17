import { makeStyles, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { ContainedButton } from 'components/Buttons';
import { FormTextInput, FormNumberInput, FormSelect, FormTextArea } from 'components/Form';
import { LineTabs } from 'components/Navigation/LineTabs';
import React, { FC, useState } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import NewPresenterForm from '../../component/NewPrsesnterForm';
import { DashboardTabPanel } from 'components/Dashboard';

type Props = StyleProps;

export const PresenterTab: FC<Props> = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  const [presenterAmount, setPresenterAmount] = useState<number>(2);

  const handleSponsorCount = (newValue: number) => {
    setPresenterAmount(newValue);
  };

  const createPresenterTabs = () => {
    const presenterArray = [];
    for (let i = 0; i < presenterAmount; i++) {
      const presenter = {
        index: i,
        label: `Presenter ${i + 1}`,
      };
      presenterArray.push(presenter);
    }
    return presenterArray;
  };

  return (
    <>
      <span style={styles.heading}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor sit amet consectetur adipiscing elitserem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'
        }
      </span>
      <span style={styles.subtitle}>{'How many presenters will you have for your event?'}</span>

      <View>
        <FormNumberInput min={1} value={presenterAmount} onChange={handleSponsorCount} style={styles.numberInput} />
      </View>

      <View row>
        <FormSelect
          className={classes.select1}
          fullWidth
          options={[{ value: 'Sponsor' }]}
          label="Module Icon"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
        />
        <FormTextInput className={classes.input} label="Module Label" />
      </View>
      <LineTabs tab={tab} className={classes.tabs} tabs={createPresenterTabs()} onChange={(_e, val) => setTab(val)} />
      <Grid>
        {Array.from(Array(presenterAmount), (e, i) => {
          return (
            <DashboardTabPanel style={styles.tabPanel} value={tab} index={i}>
              <NewPresenterForm />
            </DashboardTabPanel>
          );
        })}
      </Grid>

      <Grid container>
        <Grid item md={10} lg={10} style={styles.inviteForm}>
          <span style={styles.title}>{'Invite To Event'}</span>
          <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>

          <View row style={styles.inviteRow}>
            <FormTextInput className={classes.input} label="First Name" />
            <FormTextInput className={classes.input2} label="Last Name" />
          </View>
          <FormTextInput className={classes.inputFull} label="Email" />
          <View row style={styles.inviteRow}>
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
            <FormTextArea label="Invitation Message" className={classes.textAreaInput} />
          </View>

          <View style={styles.inviteMoreSection}>
            <ContainedButton size="medium" className={classes.inviteBtn} disabled>
              {'SAVE & INVITE'}
            </ContainedButton>
          </View>
        </Grid>
      </Grid>
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
  heading: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
    paddingBottom: 47,
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
    marginTop: 25,
    marginBottom: 38,
  },
  saveSection: {
    marginTop: 33,
    marginBottom: 6,
    alignItems: 'center',
  },
  inviteMoreSection: {
    alignItems: 'center',
    marginBottom: 29,
  },
  inviteRow: {
    marginTop: 25,
  },
  inviteForm: {
    marginLeft: 'auto',
    paddingLeft: 54,
  },
};

export const useStyles = () =>
  makeStyles({
    input: {
      maxWidth: 275,
      marginBottom: 33,
      marginRight: 21,
    },
    input2: {
      maxWidth: 275,
      marginBottom: 33,
    },
    tabs: {
      overflowX: 'auto',
      overflowY: 'hidden',
    },
    inputFull: {
      maxWidth: 574,
      marginBottom: 5,
    },
    inputText: {
      maxWidth: 386,
      margin: '0 35px',
    },
    select1: {
      maxWidth: 275,
      marginRight: 26,
    },
    select2: {
      maxWidth: 275,
    },
    saveBtn: {
      height: 34,
      width: '76px !important',
      letterSpacing: 2.25,
    },
    inviteBtn: {
      height: 34,
      width: '162px !important',
    },
    textAreaInput: {
      height: 170,
      maxWidth: 574,
    },
  })();

export type PresenterTabProps = Props;
export default PresenterTab;
