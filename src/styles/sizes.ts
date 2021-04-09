import { useMediaQuery, useTheme } from '@material-ui/core';

export const screens = {
  desktop: 992,
  lgDesktop: 1200,
  phone: 576,
  tablet: 768,
};

export const headings = {
  h1: 50,
  h2: 30,
  h3: 23,
  h4: 20,
  h5: 18,
  h6: 16,
};

export const sizes = {
  ...screens,
  ...headings,
};

/**
 * Hook for managing behaviour for a different screen sizes
 * @returns utils
 */
export const useScreenSizes = () => {
  const theme = useTheme();
  /**
   * True, when the screen is mobile size
   * `@media (max-width:599.95px)`
   * */
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  /**
   * True, when the screen is tablet size
   * `@media (min-width:600px) and (max-width:1279.95px)`
   * */
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  /**
   * True, when the screen is desktop size
   * `@media (min-width:1280px)`
   * */
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  /** Return value, when the screen is mobile size */
  const whenMobile = <T>(val: T): T | undefined => (isMobile ? val : undefined);
  /** Return value, when the screen is not mobile size */
  const whenNotMobile = <T>(val: T): T | undefined => (!isMobile ? val : undefined);
  /** Return value, when the screen is tablet size */
  const whenTablet = <T>(val: T): T | undefined => (isTablet ? val : undefined);
  /** Return value, when the screen is not tablet size */
  const whenNotTablet = <T>(val: T): T | undefined => (!isTablet ? val : undefined);
  /** Return value, when the screen is desktop size */
  const whenDesktop = <T>(val: T): T | undefined => (isDesktop ? val : undefined);
  /** Return value, when the screen is not desktop size */
  const whenNotDesktop = <T>(val: T): T | undefined => (!isDesktop ? val : undefined);

  return {
    isMobile,
    whenMobile,
    whenNotMobile,
    isTablet,
    whenTablet,
    whenNotTablet,
    isDesktop,
    whenDesktop,
    whenNotDesktop,
  };
};
