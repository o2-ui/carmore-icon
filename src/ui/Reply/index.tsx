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
const Reply = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('REPLY');
  const titleText = ariaLabel || '응답하기';

  return (
    <svg
      className={mergeClassNames(style.layout, className)}
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
        fillRule={'evenodd'}
        clip-rule={'evenodd'}
        d={
          'M16.2 2.28396L1.8 2.28396V11.903H12.2672C13.1392 11.903 13.9815 12.2167 14.6378 12.7858L16.2 14.1406V2.28396ZM16.2 0.5C17.1941 0.5 18 1.29871 18 2.28396V16.1063C18 16.8726 17.0893 17.2822 16.5073 16.7776L13.4525 14.1284C13.1243 13.8438 12.7032 13.687 12.2672 13.687H1.8C0.805887 13.687 0 12.8883 0 11.903V2.28396C0 1.2987 0.805887 0.5 1.8 0.5H16.2Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Reply;
