import { css } from 'styled-components';

import lightFont from '../../assets/fonts/NexaDemo-Light.ttf';
import blackFont from '../../assets/fonts/NexaDemo-Bold.ttf';

export const fontFaces = css`
  @font-face {
    font-family: "'Nexa', sans-serif";
    font-style: normal;
    font-weight: 300;
    src: url(${lightFont}) format('truetype');
  }

  @font-face {
    font-family: "'Nexa', sans-serif";
    font-style: normal;
    font-weight: 900;
    src: url(${blackFont}) format('truetype');
  }
`;
