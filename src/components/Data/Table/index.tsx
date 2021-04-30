import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';

interface Props extends StyleProps {
  headers?: Headers[];
  data?: Data[];
  className?: string;
}

interface Headers {
  label?: string;
}

interface Data {
  value: (string | number)[];
  id?: number;
}

export const DataTable: FC<Props> = ({ headers, data, style, className, children }) => {
  const classes = useStyles();
  return (
    <TableContainer className={className} style={style}>
      <Table className={classes.container}>
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
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const useStyles = () =>
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
      fontSize: 19,
    },
    dataCell: {
      backgroundColor: colors.white,
      color: colors.brownishGrey,
    },
  })();

export type DataTableProps = Props;
export default DataTable;
