import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (카타르 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagQA = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagQA');

  const maskId = getElementId('CountryFlagQAMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagQATitle');
  const titleText = ariaLabel || '카타르';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 16'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={16}>
          <rect x={0.923096} y={0.615234} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.923096 0.615234H23.0338V15.383H0.923096V0.615234Z'} fill={'#751A46'} />
        <path
          d={
            'M0.923096 0.615234V15.383H7.41378L9.04185 14.5367L7.41378 13.7206L9.04185 12.9001L7.41378 12.084L9.04185 11.2636L7.41378 10.4432L9.04185 9.62704L7.41378 8.80661L9.04185 7.98617L7.41378 7.17006L9.04185 6.34963L7.41378 5.53351L9.04185 4.71308L7.41378 3.89265L9.04185 3.07653L7.41378 2.2561L9.04185 1.43999L7.41378 0.615234H0.923096Z'
          }
          fill={'white'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagQA;
