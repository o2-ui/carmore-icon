import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (자메이카 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagJM = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_JM_MASK_ID');

  /* a11y 기본 설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_JM');
  const titleText = ariaLabel || '자메이카';

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={mergeClassNames(style.layout, className)}
      viewBox={'0 0 24 16'}
      width={iconWidth}
      height={iconHeight}
      fill={'none'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
        <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'white'} />
      </mask>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3841H0.923096V0.615234Z'} fill={'#6DA544'} />
        <path d={'M10.2634 7.99953L0.923096 14.2256V1.77295L10.2634 7.99953ZM23.0769 1.77295V14.2256L13.7367 7.99953L23.0769 1.77295Z'} fill={'black'} />
        <path
          d={
            'M23.0769 1.77292L13.7367 7.9995L23.0769 14.2256V15.3832H21.3408L12 9.15666L2.65927 15.3832H0.923096V14.2256L10.2634 7.9995L0.923096 1.77292V0.615234H2.65927L12 6.84181L21.3408 0.615234H23.0769V1.77292Z'
          }
          fill={'#FFDA44'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagJM;
