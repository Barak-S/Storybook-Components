import { Accordion as MuiAccordion, AccordionDetails, AccordionProps, AccordionSummary, Divider } from '@material-ui/core';
import { Title } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { Styles, colors } from 'styles';

interface Props extends AccordionProps {
  id: string;
  title: string;
  expanded: boolean;
}

interface StyleConfig {
  expanded: boolean;
}

export const Accordion: FC<Props> = ({ id, title, expanded, onChange, children }) => {
  const styleConfig: StyleConfig = {
    expanded,
  };

  const styles = getStyles(styleConfig);

  return (
    <MuiAccordion expanded={expanded} onChange={onChange} style={styles.container}>
      {expanded && <Divider />}
      <AccordionSummary
        aria-controls={`${id}d-content`}
        id={`${id}d-header`}
        style={styles.header}
        expandIcon={<LineAwesomeIcon type="chevron-circle-right" style={styles.icon} />}
      >
        <Title type="h4" style={styles.title}>
          {title}
        </Title>
      </AccordionSummary>
      <AccordionDetails style={styles.accordionDetails}>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

const getStyles = ({ expanded }: StyleConfig): Styles => ({
  container: {
    background: expanded ? colors.white : `linear-gradient(90deg, ${colors.paleGrey}, ${colors.lightPeriwinkle})`,
    borderRadius: 12,
    boxShadow: 'none',
    marginBottom: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 76,
    color: colors.marineBlue,
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  icon: {
    ...(expanded && { transform: 'rotate(-270deg)' }),
    color: colors.marineBlue,
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Accordion;
