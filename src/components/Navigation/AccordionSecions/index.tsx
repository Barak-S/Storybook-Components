import Accordion from '@material-ui/core/Accordion';
import { AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core';
import { View, Text } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, ReactNode } from 'react';
import { colors, mc, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  sections: Section[];
  className?: string;
}

interface Section {
  id: number | string;
  title: string;
  content: ReactNode;
}

export const AccordionSections: FC<Props> = ({ style, className, sections }) => {
  const classes = useStyles();
  return (
    <View style={styles.container}>
      {sections.map(({ id, title, content }) => (
        <Accordion style={style} key={id} classes={{ root: classes.root }}>
          <AccordionSummary
            classes={{ root: mc(classes.accordion, className) }}
            expandIcon={<LineAwesomeIcon type="chevron-circle-down" />}
          >
            <Text style={styles.heading}>{title}</Text>
          </AccordionSummary>
          <AccordionDetails style={styles.content}>
            <View>{content}</View>
          </AccordionDetails>
        </Accordion>
      ))}
    </View>
  );
};

const styles: Styles = {
  container: {
    width: '100%',
  },
  heading: {
    color: colors.marineBlue,
    fontSize: 19,
  },
  content: {
    background: 'white',
  },
};

const useStyles = makeStyles({
  root: {
    '&:before': {
      display: 'none',
    },
    '& .MuiIconButton-root': {
      color: colors.marineBlue,
    },
  },
  accordion: {
    '& .MuiIcon-root': {
      transform: 'rotate(-90deg)',
      transition: '0.3s ease',
      alignItems: 'center',
      display: 'flex',
      margin: '0px 0px',
      '&:hover': {
        transform: 'rotate(0)',
      },
    },
    '& .Mui-expanded': {
      transform: 'rotate(0)',
      alignItems: 'center',
      display: 'flex',
      color: colors.coolBlueTwo,
      // transform: 'translateY(-1px)',
      '& .MuiIcon-root': {
        transform: 'rotate(180deg)',
        '&:hover': {
          transform: 'rotate(180deg)',
        },
      },
    },
  },
});

export type AccordionSectionsProps = Props;
export default AccordionSections;
