import { makeStyles, Theme, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';

interface Props extends StyleProps {
  headers?: Headers[];
  data?: Data[];
}

interface Headers {
  label?: string;
}

interface Data {
  value: (string | number)[];
  id?: number;
}

export const DataTable: FC<Props> = ({ headers, data, style }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <TableContainer style={style}>
      <Table className={classes.container} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.headerRow}>
            {headers &&
              headers.map(th => (
                <TableCell key={th.label} className={classes.headerCell}>
                  {th.label}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map(row => (
              <TableRow key={row.id}>
                {row.value.map(data => (
                  <TableCell key={data} className={classes.dataCell} component="td" scope="row">
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      minWidth: 320,
      width: '100%',
    },
    headerRow: {
      backgroundColor: colors.paleGrey,
    },
    headerCell: {
      color: colors.coolBlue,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 19,
    },
    dataCell: {
      textAlign: 'center',
      backgroundColor: colors.whiteTwo,
      borderLeft: '3px solid white',
      borderRight: '3px solid white',
      borderTop: '6px solid white',
      borderBottom: '6px solid white',
      color: colors.brownishGrey,
      padding: '30px 15px',
    },
  })();

export type DataTableProps = Props;
export default DataTable;
