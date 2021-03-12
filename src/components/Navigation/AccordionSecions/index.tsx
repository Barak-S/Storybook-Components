import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
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
  return (
    <View style={ms(styles.container, style)}>
      {sections.map(({ id, title, content }) => (
        <Accordion style={styles.blockHeading} key={id}>
          <AccordionSummary expandIcon={<LineAwesomeIcon style={styles.icon} type="chevron-circle-down" />}>
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
  icon: { fill: colors.marineBlue },
};

export type AccordionSectionsProps = Props;
export default AccordionSections;
