import Accordion from '@material-ui/core/Accordion';
import { AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core';
import { View, Text } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, ReactNode } from 'react';
import { colors, ms, mc, StyleProps, Styles } from 'styles';

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
        <Accordion style={ms(styles.blockHeading, style)} key={id} classes={{ root: classes.root }}>
          <AccordionSummary
            classes={{ root: mc(classes.accordion, className) }}
            expandIcon={<LineAwesomeIcon color={colors.marineBlue} type="chevron-circle-down" />}
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
  blockHeading: {
    background: colors.lightPeriwinkle,
  },
  heading: {
    color: colors.marineBlue,
    fontSize: 19,
  },
  content: {
    background: 'white',
  },
  icon: {
    fill: colors.marineBlue,
    transform: 'rotate(-90deg)',
  },
};

const useStyles = makeStyles({
  root: {
    '&:before': {
      display: 'none',
    },
  },
  accordion: {
    '& .MuiIcon-root': {
      fill: colors.marineBlue,
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
      '& .MuiIcon-root': {
        transform: 'rotate(0deg)',
      },
    },
  },
});

export type AccordionSectionsProps = Props;
export default AccordionSections;
