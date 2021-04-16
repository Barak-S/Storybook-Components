import { View } from 'components/Common';
import { ContainedButton } from 'components/Buttons';
import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import { FormSelect, FormTextInput } from 'components/Form';

type Props = StyleProps;

export const AgendaTab: FC<Props> = () => {
  const classes = useStyles();

  const userRoles = [{ value: 'Administrator' }, { value: 'Manager' }];

  return (
    <View className={classes.container}>
      <span style={styles.subtitle}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'
        }
      </span>
      <span style={styles.title}>{'Module Label'}</span>
      <View row>
        <FormSelect
          className={classes.select1}
          fullWidth
          options={userRoles}
          label="List"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
        />
        <FormTextInput className={classes.input} label="Module Label" />
      </View>
      <View className={classes.saveSection}>
        <ContainedButton size="medium" className={classes.saveBtn}>
          {'SAVE'}
        </ContainedButton>
      </View>
    </View>
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
};

export const useStyles = () =>
  makeStyles({
    container: {},
    select1: {
      maxWidth: 266,
      marginRight: 44,
    },
    input: {
      maxWidth: 275,
    },
    saveSection: {
      marginTop: 33,
      marginBottom: 32,
      alignItems: 'center',
    },
    saveBtn: {
      height: 34,
      width: '76px !important',
      letterSpacing: 2.25,
    },
  })();

export type AgendaTabProps = Props;
export default AgendaTab;
