import React from 'react';
import { useDimensions } from './useDimensions';
import { IS_MOBILE_BREAK } from '../../utils/constants';
import { renderHook } from '@testing-library/react-hooks';

describe('useDimensions', () => {
  it('Should return dimensions', () => {
    const { result } = renderHook(() => useDimensions());
    const dimensions = result.current;
    expect(dimensions.height).not.toBeNull();
    expect(dimensions.width).not.toBeNull();
    if (dimensions.width <= IS_MOBILE_BREAK) {
      expect(dimensions.isMobile).toBe(true);
    } else {
      expect(dimensions.isMobile).toBe(false);
    }
  });
  it('Should return valid types', () => {
    const { result } = renderHook(() => useDimensions());
    const dimensions = result.current;

    expect(typeof dimensions.height).toBe('number');
    expect(typeof dimensions.width).toBe('number');
    expect(typeof dimensions.isMobile).toBe('boolean');
  });
  it('Should return valid values', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const { result } = renderHook(() => useDimensions());
    const dimensions = result.current;
    expect(dimensions.height).toEqual(windowHeight);
    expect(dimensions.width).toEqual(windowWidth);
    if (windowWidth <= IS_MOBILE_BREAK) {
      expect(dimensions.isMobile).toBe(true);
    } else {
      expect(dimensions.isMobile).toBe(false);
    }
  });
});
