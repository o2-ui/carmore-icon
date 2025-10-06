import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('골프') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const HotelActivity = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('HotelActivity');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('HotelActivityTitle');
  const titleText = ariaLabel || '골프';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M2.19975 1.1786L3.04962 0.785717C3.98836 0.351754 5.10422 0.754387 5.54197 1.68502L8.71239 8.42529C9.15013 9.35592 8.74399 10.4621 7.80524 10.8961L6.95537 11.289C6.01663 11.723 4.90076 11.3203 4.46302 10.3897L1.2926 3.64942C0.854862 2.71879 1.261 1.61256 2.19975 1.1786ZM2.7942 2.4424C2.55951 2.55089 2.45798 2.82744 2.56741 3.0601L5.73783 9.80037C5.84727 10.033 6.12623 10.1337 6.36092 10.0252L7.21079 9.63231C7.44548 9.52382 7.54701 9.24727 7.43758 9.01461L4.26716 2.27434C4.15772 2.04168 3.87876 1.94103 3.64407 2.04952L2.7942 2.4424Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M6.41724 11.0249L7.94701 10.3177L11.3057 17.4582L17.566 13.5148C19.0948 12.5518 21.1282 13.3117 21.6352 15.0356L22.212 16.9973C22.5877 18.2747 21.9671 19.6328 20.7506 20.1952L15.8348 22.4677C14.0042 23.3139 11.8283 22.5288 10.9747 20.714L6.41724 11.0249ZM12.025 18.9876L12.5045 20.0068C12.9641 20.984 14.1358 21.4068 15.1214 20.9511L20.0373 18.6786C20.4987 18.4653 20.7341 17.9502 20.5916 17.4656L20.0147 15.504C19.8224 14.8501 19.0511 14.5618 18.4712 14.9271L12.025 18.9876Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M19.033 16.9943C19.2238 17.3297 19.1042 17.7549 18.7659 17.9441L15.3664 19.845C15.0281 20.0341 14.5992 19.9156 14.4083 19.5802C14.2175 19.2448 14.3371 18.8196 14.6754 18.6304L18.0749 16.7295C18.4132 16.5403 18.8422 16.6589 19.033 16.9943Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M17.3515 8.53501C18.0738 10.0706 17.4037 11.8958 15.8547 12.6119C14.3058 13.3279 12.4646 12.6636 11.7424 11.128C11.0201 9.59247 11.6902 7.76719 13.2392 7.05115C14.7881 6.33512 16.6293 6.99946 17.3515 8.53501ZM15.1414 11.0953C15.8455 10.7698 16.1501 9.94017 15.8218 9.24219C15.4934 8.54422 14.6566 8.24224 13.9525 8.56771C13.2484 8.89319 12.9438 9.72285 13.2721 10.4208C13.6004 11.1188 14.4373 11.4208 15.1414 11.0953Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M16.585 5.33306C16.7237 4.97336 17.1302 4.79318 17.493 4.93062C18.3715 5.26339 20.1308 6.49343 19.9428 8.78441C19.9113 9.16821 19.5719 9.45402 19.1848 9.4228C18.7976 9.39157 18.5093 9.05513 18.5408 8.67133C18.657 7.25603 17.5724 6.45347 16.991 6.23322C16.6281 6.09578 16.4464 5.69277 16.585 5.33306Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default HotelActivity;
