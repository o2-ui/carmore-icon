import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('도움말') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 */
const Help = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Help');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '도움말';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        d={
          'M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM11.9795 15.1309C11.422 15.1309 10.9697 15.5831 10.9697 16.1406C10.9699 16.698 11.4221 17.1503 11.9795 17.1504C12.537 17.1504 12.9891 16.6981 12.9893 16.1406C12.9893 15.583 12.5371 15.1309 11.9795 15.1309ZM11.9922 6.65039C11.4331 6.65039 10.9272 6.76387 10.4746 6.99121C10.0265 7.21368 9.66716 7.54733 9.39648 7.99219C9.12578 8.43243 8.98304 8.96776 8.96973 9.59668H10.6338C10.6471 9.2873 10.7182 9.02327 10.8467 8.80566C10.9754 8.58798 11.1402 8.42577 11.3398 8.31934C11.5395 8.21295 11.7523 8.15922 11.9785 8.15918C12.2226 8.15918 12.4448 8.21491 12.6445 8.32617C12.8442 8.43741 12.9994 8.59474 13.1104 8.79785C13.2257 8.9962 13.2832 9.22904 13.2832 9.49512C13.2876 9.83358 13.2009 10.1314 13.0234 10.3877C12.846 10.6439 12.5999 10.8831 12.2852 11.1055C11.9745 11.3135 11.7254 11.5294 11.5391 11.752C11.3573 11.9744 11.2153 12.2693 11.1133 12.6367C11.0112 13.0044 10.9585 13.486 10.9541 14.0811V14.2119H12.5117V14.0811C12.5162 13.7184 12.5555 13.4136 12.6309 13.167C12.7063 12.9203 12.8222 12.7043 12.9775 12.5205C13.1372 12.3368 13.3501 12.1555 13.6162 11.9766C14.0689 11.6815 14.4156 11.3302 14.6553 10.9238C14.8991 10.5176 15.0229 10.0315 15.0273 9.46582C15.0273 8.89979 14.899 8.40327 14.6416 7.97754C14.3887 7.55194 14.0308 7.22538 13.5693 6.99805C13.1124 6.76599 12.5866 6.6504 11.9922 6.65039Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Help;
