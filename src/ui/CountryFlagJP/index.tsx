import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const CountryFlagJP = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('CountryFlagJP');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('CountryFlagJPTitle');
  const titleText = ariaLabel || '일본';

  return (
    <svg className={mergeClassNames(iconClass, className)} viewBox="0 0 24 16" width={iconWidth} height={iconHeight} fill="none" role={iconRole} aria-labelledby={titleId} {...rest}>
      <title id={titleId}>{titleText}</title>
      <path
        d={
          'M2.7688 0.865234H21.2307C22.1121 0.865234 22.8271 1.57961 22.8274 2.46094V13.5381C22.8274 14.4196 22.1122 15.1348 21.2307 15.1348H2.7688C1.88747 15.1345 1.1731 14.4195 1.1731 13.5381V2.46094C1.17334 1.57976 1.88762 0.865478 2.7688 0.865234Z'
        }
        fill={'white'}
        stroke={'#DDDDDD'}
        strokeWidth={'0.5'}
      />
      <path
        d={
          'M12 12.1534C14.2941 12.1534 16.1539 10.2937 16.1539 7.99955C16.1539 5.70545 14.2941 3.8457 12 3.8457C9.70593 3.8457 7.84619 5.70545 7.84619 7.99955C7.84619 10.2937 9.70593 12.1534 12 12.1534Z'
        }
        fill={'#D80027'}
      />
    </svg>
  );
};

export default CountryFlagJP;
