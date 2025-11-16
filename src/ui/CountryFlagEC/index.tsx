import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (에콰도르 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagEC = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagEC');

  const maskId = getElementId('CountryFlagECMask');

  /* a11y 기본 설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '에콰도르';

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
        <path d={'M0.923096 0.615234H23.0769V15.383H0.923096V0.615234Z'} fill={'#FFDA44'} />
        <path d={'M0.923096 8.00146H23.0769V11.6923H0.923096V8.00146Z'} fill={'#0052B4'} />
        <path d={'M0.923096 11.6924H23.0769V15.3832H0.923096V11.6924Z'} fill={'#D80027'} />
        <path
          d={
            'M12 10.5715C13.4195 10.5715 14.5702 9.42082 14.5702 8.00134C14.5702 6.58187 13.4195 5.43115 12 5.43115C10.5805 5.43115 9.42981 6.58187 9.42981 8.00134C9.42981 9.42082 10.5805 10.5715 12 10.5715Z'
          }
          fill={'#FFDA44'}
        />
        <path
          d={
            'M16.8981 4.07229C16.8981 4.07229 15.7211 3.47518 15.4312 3.37999C15.1413 3.28479 13.3067 2.80883 13.3067 3.0771C13.3067 3.52278 12.7226 3.59633 12.6361 3.59633C12.5495 3.59633 12.5495 3.36701 11.9957 3.36701C11.4418 3.36701 11.4029 3.5747 11.312 3.5747C11.2168 3.5747 10.6846 3.53143 10.6846 3.0771C10.6846 2.8521 8.82836 3.25018 8.56009 3.37999C8.29615 3.51412 7.09326 4.07229 7.09326 4.07229C7.09326 4.07229 9.07499 4.18912 9.42547 4.34056C9.77595 4.49201 11.3207 5.05451 11.3207 5.05451L11.1995 5.62999H12.8351L12.6707 5.05451C12.6707 5.05451 14.1894 4.50499 14.5659 4.34056C14.9423 4.17614 16.8981 4.07229 16.8981 4.07229Z'
          }
          fill={'#4C1F00'}
        />
        <path d={'M10.3428 8.04447C10.3428 8.95745 11.0871 9.70168 12 9.70168C12.913 9.70168 13.6573 8.95745 13.6573 8.04447V7.54688H10.3472V8.04447H10.3428Z'} fill={'#57BA17'} />
        <path d={'M12 5.39648C11.0871 5.39648 10.3428 6.14072 10.3428 7.0537V7.55129H13.6529V7.0537C13.6573 6.14072 12.913 5.39648 12 5.39648Z'} fill={'#338AF3'} />
      </g>
    </svg>
  );
};

export default CountryFlagEC;
