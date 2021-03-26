import { FC, useEffect } from 'react';

interface Props {
  title?: string;
}

export const ScreenTitle: FC<Props> = ({ title }) => {
  useEffect(() => {
    const company = APP_COMPANY || 'Company';
    document.title = title ? `${title} | ${company}` : `${APP_TITLE || 'Title'} | ${company}`;
  });
  return null;
};

export default ScreenTitle;
