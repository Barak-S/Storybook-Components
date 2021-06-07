import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Divider } from '@material-ui/core';
import { Title } from 'components/Common';
import React, { ChangeEvent, FC } from 'react';
import { colors, ms, StyleProps, Styles, useHover } from 'styles';

import NavigationAccordionIcon from './components/Icon';

interface Props extends StyleProps {
  id: string;
  title: string;
  expanded: boolean;
  onChange?: (newExpanded: boolean) => void;
}

export const Accordion: FC<Props> = ({ style, id, title, expanded, onChange, children }) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (_event: ChangeEvent<{}>, expanded: boolean) => {
    if (onChange) {
      onChange(expanded);
    }
  };

  const { hover, hoverProps } = useHover();

  const styles = getStyles(expanded);

  return (
    <MuiAccordion style={ms(styles.container, style)} expanded={expanded} onChange={handleChange}>
      {expanded && <Divider />}
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        style={styles.header}
        expandIcon={<NavigationAccordionIcon hovered={hover} expanded={expanded} />}
        {...hoverProps}
      >
        <Title type="h4" style={styles.title}>
          {title}
        </Title>
      </AccordionSummary>
      <AccordionDetails style={styles.details}>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

const getStyles = (expanded: boolean): Styles => ({
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
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export type AccordionProps = Props;
export default Accordion;
