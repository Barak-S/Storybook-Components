import { Accordion, AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core';
import { FormToggle } from 'components/Form';
import { View, Text } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, ReactNode, ChangeEvent } from 'react';
import { colors, mc, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  sections: Section[];
  className?: string;
  currentTab?: number | undefined;
  onChange?: (newVal: number | undefined) => void;
}

interface Section {
  id: number;
  title: string;
  content: ReactNode;
  toggle?: {
    visible?: boolean;
    value?: boolean;
  };
}

export const AccordionSections: FC<Props> = ({ style, currentTab, onChange, className, sections }) => {
  const classes = useStyles();

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number | undefined) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      {sections.map(({ id, title, content, toggle }) => (
        <Accordion
          style={style}
          key={id}
          expanded={currentTab && currentTab === id ? true : undefined}
          classes={{ root: classes.root }}
          onChange={(e, expanded) => {
            if (expanded && onChange) {
              handleChange(e, id);
            } else if (!expanded && onChange) {
              handleChange(e, undefined);
            }
          }}
        >
          <AccordionSummary
            classes={{ root: mc(classes.accordion, className) }}
            expandIcon={<LineAwesomeIcon type="chevron-circle-down" />}
          >
            {toggle?.visible && <FormToggle value={toggle.value || false} style={styles.toggleSwitch} />}
            <Text style={styles.heading}>{title}</Text>
          </AccordionSummary>
          <AccordionDetails style={styles.content}>
            <View style={{ width: '100%' }}>{content}</View>
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
    borderRadius: 10,
    background: colors.white,
    '&.MuiAccordion-rounded:first-child': {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    '&.MuiAccordion-rounded:last-child': {
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    '&:before': {
      display: 'none',
    },
    '& .MuiAccordionSummary-root': {
      background: 'linear-gradient(90deg, rgba(242,243,244,1) 0%, rgba(221,223,225,1) 100%)',
      '&.Mui-expanded': {
        background: colors.white,
      },
    },
    '& .MuiAccordionSummary-content': {
      alignItems: 'center',
    },
  },
  accordion: {
    color: colors.textGray,
    borderRadius: 10,
    '&:hover': {
      '& .MuiIcon-root': {
        transform: 'rotate(0)',
      },
      '& .Mui-expanded': {
        borderRadius: 0,
        '& .MuiIcon-root': {
          transform: 'rotate(180deg)',
          '&:hover': {
            transform: 'rotate(180deg)',
          },
        },
      },
    },
    '& .MuiIcon-root': {
      color: colors.textGray,
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
        color: colors.textGray,
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
