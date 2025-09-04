import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (요르단 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagJO = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  const maskId = getElementId('COUNTRY_FLAG_JO_MASK_ID');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('COUNTRY_FLAG_JO');
  const titleText = ariaLabel || '요르단';

  return (
    <svg className={mergeClassNames(style.layout, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615723H23.0769V15.3832H0.923096V0.615723Z'} fill={'white'} />
        <path d={'M0.923096 0.615723H23.0769V5.5382H0.923096V0.615723Z'} fill={'black'} />
        <path d={'M0.923096 10.4604H23.0769V15.3829H0.923096V10.4604Z'} fill={'#6DA544'} />
        <path d={'M12 7.9995L0.923096 15.3832V0.615234L12 7.9995Z'} fill={'#D80027'} />
        <path
          d={
            'M4.29428 6.64941L4.63507 7.36195L5.40466 7.18413L5.06002 7.8948L5.6789 8.38555L4.90836 8.55922L4.91048 9.34902L4.29428 8.85489L3.67809 9.34902L3.68025 8.55922L2.90967 8.38555L3.52855 7.8948L3.18391 7.18413L3.9535 7.36195L4.29428 6.64941Z'
          }
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagJO;
