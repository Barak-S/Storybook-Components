import { makeStyles, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormNumberInput } from 'components/Form';
import { LineTabs } from 'components/Navigation/LineTabs';
import React, { FC, useState } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import NewPresenterForm from '../../component/NewPresenterForm';
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
      <span style={styles.subtitle}>{'How many presenters will you have for your event?'}</span>
      <View>
        <FormNumberInput min={1} value={presenterAmount} onChange={handleSponsorCount} style={styles.numberInput} />
      </View>
      <LineTabs tab={tab} className={classes.tabs} tabs={createPresenterTabs()} onChange={(_e, val) => setTab(val)} />
      <Grid>
        {Array.from(Array(presenterAmount), (e, i) => {
          return (
            <DashboardTabPanel value={tab} index={i}>
              <NewPresenterForm />
            </DashboardTabPanel>
          );
        })}
      </Grid>
    </>
  );
};

const styles: Styles = {
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
    paddingTop: 27,
    fontSize: 16,
  },
  numberInput: {
    flexDirection: 'initial',
    marginTop: 8,
    marginBottom: 31,
  },
};

export const useStyles = () =>
  makeStyles({
    tabs: {
      overflowX: 'auto',
      overflowY: 'hidden',
    },
  })();

export type PresenterTabProps = Props;
export default PresenterTab;
