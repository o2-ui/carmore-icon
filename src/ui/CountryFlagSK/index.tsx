import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (슬로바키아 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagSK = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagSK');

  const maskId = getElementId('CountryFlagSKMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '슬로바키아';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(iconClass, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} fill={'white'} />
        <rect x={0.923096} y={5.43164} width={22.1538} height={5.1368} fill={'#0052B4'} />
        <rect x={0.923096} y={10.5684} width={22.1538} height={4.8161} fill={'#D80027'} />
        <path d={'M6.52502 4.78906V8.47283C6.52502 10.5683 9.26254 11.2103 9.26254 11.2103C9.26254 11.2103 12 10.5682 12 8.47283V4.78906H6.52502Z'} fill={'white'} />
        <path d={'M7.24585 4.89697V8.4425C7.24585 8.67927 7.29842 8.90288 7.40261 9.11252H11.1225C11.2267 8.90292 11.2792 8.67931 11.2792 8.4425V4.89697H7.24585Z'} fill={'#D80027'} />
        <path
          d={'M10.4986 7.36922H9.57159V6.75121H10.1896V6.13319H9.57159V5.51514H8.95358V6.13319H8.3356V6.75121H8.95358V7.36922H8.02649V7.98728H8.95358V8.6053H9.57159V7.98728H10.4986V7.36922Z'}
          fill={'white'}
        />
        <path
          d={
            'M8.24559 9.97545C8.64384 10.2257 9.053 10.3711 9.26251 10.4357C9.47202 10.371 9.88117 10.2257 10.2794 9.97545C10.681 9.72306 10.9626 9.43432 11.1225 9.1127C10.9402 8.98344 10.7221 8.91414 10.4986 8.9144C10.414 8.9144 10.3318 8.92444 10.2528 8.94283C10.0853 8.56223 9.70507 8.29639 9.26259 8.29639C8.82008 8.29639 8.43992 8.56223 8.27242 8.94283C8.19182 8.924 8.10933 8.91446 8.02657 8.9144C7.80307 8.91414 7.58504 8.98345 7.40271 9.1127C7.56242 9.43432 7.84397 9.72306 8.24559 9.97545Z'
          }
          fill={'#0052B4'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagSK;
