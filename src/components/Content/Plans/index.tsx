import {
  makeStyles,
  Paper,
  Theme,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { Text } from 'components/Common';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';
type Props = StyleProps;

export const ContentPlans: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const MockRows = () => (
    <>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature Name'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'$99'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'$99'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'Contact Us'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'Contact Us'}
        </TableCell>
      </TableRow>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature 2'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
      </TableRow>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature 3'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
      </TableRow>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature 4'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
        <TableCell className={classes.featureValue} component="td" scope="row">
          {'100'}
        </TableCell>
      </TableRow>
    </>
  );
  return (
    <Paper className={classes.container} elevation={2}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell colSpan={1} className={classes.hiddenTableHeader}>
                {''}
              </TableCell>
              <TableCell colSpan={1} className={classes.tableHeaderCell}>
                <div>
                  <Text>{'Basic'}</Text>
                  <ContainedButton style={styles.tableHeaderButton} size="small">
                    {'Purchase'}
                  </ContainedButton>
                </div>
              </TableCell>
              <TableCell colSpan={1} className={classes.tableHeaderCell}>
                <div>
                  <Text>{'Business'}</Text>
                  <ContainedButton style={styles.tableHeaderButton} size="small">
                    {'Purchase'}
                  </ContainedButton>
                </div>
              </TableCell>
              <TableCell colSpan={1} className={classes.tableHeaderCell}>
                <div>
                  <Text>{'Agency'}</Text>
                  <ContainedButton style={styles.tableHeaderButton} size="small">
                    {'Purchase'}
                  </ContainedButton>
                </div>
              </TableCell>
              <TableCell colSpan={1} className={classes.tableHeaderCell}>
                <div>
                  <Text>{'Enterprise'}</Text>
                  <ContainedButton style={styles.tableHeaderButton} size="small">
                    {'Purchase'}
                  </ContainedButton>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Fees'}
              </TableCell>
            </TableRow>
            <MockRows />

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 2'}
              </TableCell>
            </TableRow>
            <MockRows />

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 3'}
              </TableCell>
            </TableRow>
            <MockRows />

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 4'}
              </TableCell>
            </TableRow>
            <MockRows />

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 5'}
              </TableCell>
            </TableRow>
            <MockRows />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const styles: Styles = {
  tableHeaderButton: {
    padding: '0 24px',
    width: 'auto',
    marginTop: 8,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      padding: theme.spacing(4, 10),
      borderRadius: 20,
      margin: theme.spacing(4, 2),
      alignItems: 'center',
      position: 'relative',
      // [theme.breakpoints.down('md')]: {
      //   padding: '33px 43px',
      //   borderRadius: 30,
      //   margin: '55px 75px',
      // },
      // [theme.breakpoints.down('sm')]: {
      //   margin: '35px 15px',
      //   padding: '40px 20px',
      // },
    },
    table: {
      fontSize: 16,
      minWidth: 320,
      width: '100%',
    },
    tableHeaderCell: {
      color: colors.coolBlue,
      fontWeight: 500,
      fontSize: 19,
      padding: '16px 28px',
      borderBottom: 'none',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    },

    hiddenTableHeader: {
      background: '#fff',
      border: 'none',
    },
    headerRow: {},
    categoryRow: {
      backgroundColor: colors.paleGrey,
    },
    categoryCell: {
      color: colors.coolBlue,
      fontSize: 16,
      padding: theme.spacing(1, 2),
      borderBottom: 'none',
    },
    featureRow: {
      backgroundColor: colors.white,
      color: colors.brownishGrey,
      flexWrap: 'nowrap',
    },
    featureName: {
      fontSize: 14,
      textAlign: 'left',
      borderColor: colors.paleGrey,
    },
    featureValue: {
      fontSize: 14,
      textAlign: 'center',
      borderColor: colors.paleGrey,
    },
  })();

export type ContentPlansProps = Props;
export default ContentPlans;
