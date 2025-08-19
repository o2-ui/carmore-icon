import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagGR = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_GR_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_GR');
  const titleText = ariaLabel || '그리스';

  return (
    <svg className={mergeClassNames(style.layout, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0769V15.3845H0.923096V0.615234Z'} fill={'white'} />
        <path
          d={
            'M0.923096 0.615234H23.0769V2.25626H0.923096V0.615234ZM0.923096 3.89729H23.0769V5.53831H0.923096V3.89729ZM0.923096 7.17934H23.0769V8.82036H0.923096V7.17934ZM0.923096 10.4614H23.0769V12.1024H0.923096V10.4614ZM0.923096 13.7434H23.0769V15.3845H0.923096V13.7434Z'
          }
          fill={'#0D5EAF'}
        />
        <path d={'M0.923096 0.615234H9.12822V8.82036H0.923096V0.615234Z'} fill={'#0D5EAF'} />
        <path d={'M0.923096 3.89746H9.12822V5.53849H0.923096V3.89746Z'} fill={'white'} />
        <path d={'M4.20514 0.615234H5.84616V8.82036H4.20514V0.615234Z'} fill={'white'} />
      </g>
    </svg>
  );
};

export default CountryFlagGR;
