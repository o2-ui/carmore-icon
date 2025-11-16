import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 (피지 국기) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagFJ = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagFJ');

  const maskId = getElementId('CountryFlagFJMask');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '피지';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox={'0 0 24 24'} width={iconWidth} height={iconHeight} fill={'none'} role={iconRole} {...rest}>
      <title>{titleText}</title>

      <defs>
        <mask id={maskId} maskUnits={'userSpaceOnUse'} x={0} y={0} width={24} height={24}>
          <rect x={0.921875} y={4.61719} width={22.1538} height={14.7692} rx={2} fill={'#fff'} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path d={'M0.921875 4.61719H23.0757V19.385H0.921875V4.61719Z'} fill={'#62B5E5'} />
        <rect x={0.921875} y={4.61719} width={11.0769} height={7.38606} fill={'#0052B4'} />
        <path
          d={
            'M11.9988 4.61719V5.59507L10.0041 6.92344H11.9988V9.69267H10.0041L11.9988 11.021V12.0032H11.0209L7.84495 9.88305V12.0032H5.07572V9.88305L1.89976 12.0032H0.921875V11.021L2.91659 9.69267H0.921875V6.92344H2.91659L0.921875 5.59507V4.61719H1.89976L5.07572 6.73305V4.61719H7.84495V6.73305L11.0209 4.61719H11.9988Z'
          }
          fill={'white'}
        />
        <path d={'M7.15264 4.61719H5.76803V7.61575H0.921875V9.00036H5.76803V12.0032H7.15264V9.00036H11.9988V7.61575H7.15264V4.61719Z'} fill={'#D80027'} />
        <path d={'M0.921875 4.61719V5.27055L3.40553 6.92344H4.38341L0.921875 4.61719ZM11.9988 4.61719V5.27055L9.51514 6.92344H8.53726L11.9988 4.61719Z'} fill={'#D80027'} />
        <path
          d={
            'M0.921875 4.61719V5.27055L3.40553 6.92344H4.38341L0.921875 4.61719ZM11.9988 4.61719V5.27055L9.51514 6.92344H8.53726L11.9988 4.61719ZM0.921875 12.0032V11.3499L3.40553 9.69267H4.38341L0.921875 12.0032ZM11.9988 12.0032V11.3499L9.51514 9.69267H8.53726L11.9988 12.0032Z'
          }
          fill={'#D80027'}
        />
        <path
          d={'M14.2109 10.1167V14.0975C14.2109 16.7629 17.6941 17.5806 17.6941 17.5806C17.6941 17.5806 21.173 16.7585 21.173 14.0931V10.1124L17.6898 9.11719L14.2109 10.1167V10.1167Z'}
          fill={'#F3F3F3'}
        />
        <path
          d={
            'M21.173 10.36V8.86719H14.2109V10.36H17.1965V13.3456H14.2109V14.3407H17.1965V17.4215C17.4951 17.5297 17.6941 17.573 17.6941 17.573C17.6941 17.573 17.8931 17.5254 18.1917 17.4215V14.3407H21.1773V13.3456H18.1917V10.36H21.173Z'
          }
          fill={'#D80027'}
        />
      </g>
    </svg>
  );
};

export default CountryFlagFJ;
