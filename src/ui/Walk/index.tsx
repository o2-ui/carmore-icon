import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('산책') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Walk = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Walk');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '산책';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      fill={'none'}
      {...rest}
    >
      <title>{titleText}</title>
      <path
        d={
          'M6.99341 8.53117L10.397 6.12946C10.7791 5.85783 11.2438 5.71835 11.717 5.7333C12.2942 5.74728 12.8526 5.93562 13.3145 6.27212C13.7764 6.60862 14.1189 7.07658 14.2944 7.61093C14.4919 8.21238 14.6725 8.61886 14.836 8.82932C15.33 9.46997 15.971 9.98992 16.708 10.3479C17.1268 10.5513 17.5701 10.6993 18.026 10.789C18.6012 10.9023 19.0817 11.3539 19.0817 11.924C19.0817 12.4935 18.6044 12.963 18.0241 12.8823C17.2938 12.7808 16.5812 12.5738 15.9103 12.2665C14.9186 11.8121 14.0428 11.1498 13.3461 10.3273L12.6048 14.4085L14.3574 15.8369C14.6431 16.0697 14.8607 16.3715 14.9882 16.712L16.7909 21.5239C16.9916 22.0595 16.7073 22.6517 16.156 22.8465C15.6047 23.0414 14.9952 22.7652 14.7946 22.2296L12.9924 17.4179L9.39238 14.4828C9.09675 14.2512 8.87047 13.9468 8.73711 13.6013C8.60375 13.2558 8.56819 12.8819 8.63414 12.5185L9.17468 9.5422L8.45573 10.0498L6.8213 12.2355C6.4765 12.6966 5.81217 12.7988 5.33761 12.4637C4.86321 12.1288 4.75809 11.4836 5.1028 11.0227L6.96237 8.53616C6.96957 8.52653 6.9834 8.5243 6.99341 8.53117ZM13.2409 5.21747C12.6776 5.21747 12.1374 5.00008 11.7391 4.61314C11.3408 4.22619 11.117 3.70137 11.117 3.15414C11.117 2.60692 11.3408 2.0821 11.7391 1.69515C12.1374 1.30821 12.6776 1.09082 13.2409 1.09082C13.8042 1.09082 14.3445 1.30821 14.7428 1.69515C15.1411 2.0821 15.3649 2.60692 15.3649 3.15414C15.3649 3.70137 15.1411 4.22619 14.7428 4.61314C14.3445 5.00008 13.8042 5.21747 13.2409 5.21747ZM10.0869 18.8158L7.35614 21.9771C6.97924 22.4134 6.30965 22.4704 5.86044 22.1043C5.41111 21.7382 5.35242 21.0875 5.72936 20.6511L8.20617 17.7831L8.99839 15.5341L10.9004 17.0816L10.0869 18.8158Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Walk;
