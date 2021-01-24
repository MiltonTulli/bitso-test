import React from 'react';
import { IS_MOBILE_BREAK } from '../../utils/constants';

export interface IDimensionsState {
  width: number;
  height: number;
  isMobile: boolean;
}

export const useDimensions = (): IDimensionsState => {
  const [dimensions, setDimensions] = React.useState<IDimensionsState>({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= IS_MOBILE_BREAK
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= IS_MOBILE_BREAK
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return dimensions;
};
