import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('피트니스') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Fitness = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Fitness');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('FitnessTitle');
  const titleText = ariaLabel || '피트니스';

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path
        d={
          'M6.47949 5.25C7.42784 5.25011 8.19629 6.01097 8.19629 6.94922V9.8418H15.8525V6.94922C15.8525 6.01096 16.621 5.25011 17.5693 5.25H18.498C19.4223 5.25013 20.1732 5.97269 20.2109 6.87793C20.2583 6.87406 20.3062 6.87109 20.3545 6.87109H21.2822C22.2306 6.87109 22.9999 7.63204 23 8.57031V15.416C23 16.3543 22.2307 17.1152 21.2822 17.1152H20.3545C20.3065 17.1152 20.259 17.1112 20.2119 17.1074C20.1818 18.0195 19.4273 18.7499 18.498 18.75H17.5693C16.621 18.7499 15.8525 17.989 15.8525 17.0508V14.6172H8.19629V17.0508C8.19629 17.989 7.42784 18.7499 6.47949 18.75H5.55078C4.62022 18.7499 3.864 18.0175 3.83594 17.1035C3.77338 17.1103 3.70991 17.1152 3.64551 17.1152H2.71777C1.76934 17.1152 1 16.3543 1 15.416V8.57031C1.00006 7.63204 1.76937 6.87109 2.71777 6.87109H3.64551C3.71019 6.87109 3.77409 6.87495 3.83691 6.88184C3.87259 5.97475 4.62521 5.25012 5.55078 5.25H6.47949ZM5.55078 6.81152C5.47399 6.81165 5.41211 6.87322 5.41211 6.94922V17.0508C5.41211 17.1268 5.47399 17.1883 5.55078 17.1885H6.47949C6.5563 17.1884 6.61816 17.1268 6.61816 17.0508V6.94922C6.61816 6.87321 6.5563 6.81163 6.47949 6.81152H5.55078ZM17.5693 6.81152C17.4925 6.81163 17.4307 6.87321 17.4307 6.94922V17.0508C17.4307 17.1268 17.4925 17.1884 17.5693 17.1885H18.498C18.5748 17.1883 18.6367 17.1268 18.6367 17.0508V6.94922C18.6367 6.87322 18.5748 6.81165 18.498 6.81152H17.5693ZM2.71777 8.43262C2.64091 8.43262 2.57818 8.49428 2.57812 8.57031V15.416C2.57812 15.4921 2.64087 15.5537 2.71777 15.5537H3.64551C3.72241 15.5537 3.78516 15.4921 3.78516 15.416V8.57031C3.7851 8.49428 3.72237 8.43262 3.64551 8.43262H2.71777ZM20.3545 8.43262C20.2776 8.43262 20.2149 8.49428 20.2148 8.57031V15.416C20.2148 15.4921 20.2776 15.5537 20.3545 15.5537H21.2822C21.3591 15.5537 21.4219 15.4921 21.4219 15.416V8.57031C21.4218 8.49428 21.3591 8.43262 21.2822 8.43262H20.3545ZM8.19629 13.0557H15.8525V11.4023H8.19629V13.0557Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Fitness;
