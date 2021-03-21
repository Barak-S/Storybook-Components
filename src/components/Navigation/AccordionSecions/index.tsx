import Accordion from '@material-ui/core/Accordion';
import { AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, ReactNode } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  sections: Section[];
}

interface Section {
  id: number | string;
  title: string;
  content: ReactNode;
}

export const AccordionSections: FC<Props> = ({ style, sections }) => {
  const classes = useStyles();

  return (
    <View style={styles.container}>
      {sections.map(({ id, title, content }) => (
        <Accordion 
          style={ms(styles.blockHeading, style)} 
          key={id}
          classes={{
              root: classes.root,
            }} 
        >
          <AccordionSummary 
            classes={{
              root: classes.accordion,
            }} 
            expandIcon={<LineAwesomeIcon
              color={colors.marineBlue} 
              type="chevron-circle-down"
                        />}
          >
            
            <Typography style={styles.heading}>{title}</Typography>
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
  },
  content: {
    background: 'white',
  },
  icon: { 
    fill: colors.marineBlue, 
    transform: 'rotate(-90deg)' 
  },
};

const useStyles = () =>
  makeStyles({
    root:{
      '&:before': {
        display: 'none'
      }
    },
    accordion: {
      '& .MuiIcon-root': {
        fill: colors.marineBlue, 
        transform: 'rotate(-90deg)' ,
        transition: '0.3s ease',
        '&:hover': {
          transform: 'rotate(0)'
        },
      },
      '& .Mui-expanded':{
        transform: 'rotate(0)',
        '& .MuiIcon-root': {
          transform: 'rotate(0deg)' ,
        },
      },
    },
  })();

export type AccordionSectionsProps = Props;
export default AccordionSections;
