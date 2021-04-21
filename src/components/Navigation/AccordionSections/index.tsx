import { Accordion, AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core';
import { FormToggle } from 'components/Form';
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
  toggle?: {
    visible?: boolean;
    value?: boolean;
  };
}

export const AccordionSections: FC<Props> = ({ style, className, sections }) => {
  const classes = useStyles();

  return (
    <View style={styles.container}>
      {sections.map(({ id, title, content, toggle }) => (
        <Accordion style={style} key={id} classes={{ root: classes.root }}>
          <AccordionSummary
            classes={{ root: mc(classes.accordion, className) }}
            expandIcon={<LineAwesomeIcon type="chevron-circle-down" />}
          >
            {toggle?.visible && <FormToggle value={toggle.value || false} style={styles.toggleSwitch} />}
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
    fontSize: 19,
  },
  content: {
    background: 'white',
  },
  toggleSwitch: {
    marginRight: 7.5,
  },
};

const useStyles = makeStyles({
  root: {
    '&:before': {
      display: 'none',
    },
    '& .MuiAccordionSummary-content': {
      alignItems: 'center',
    },
  },
  accordion: {
    color: colors.marineBlue,
    '&:hover': {
      '& .MuiIcon-root': {
        transform: 'rotate(0)',
      },
      '& .Mui-expanded': {
        '& .MuiIcon-root': {
          transform: 'rotate(180deg)',
          '&:hover': {
            transform: 'rotate(180deg)',
          },
        },
      },
    },
    '& .MuiIcon-root': {
      color: colors.marineBlue,
      alignItems: 'center',
      transform: 'rotate(-90deg)',
      transition: '0.3s ease',
      display: 'flex',
      margin: '0px 0px',
    },
    '& .Mui-expanded': {
      transform: 'rotate(0)',
      alignItems: 'center',
      display: 'flex',
      '& .MuiIcon-root': {
        color: colors.windowsBlue,
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
