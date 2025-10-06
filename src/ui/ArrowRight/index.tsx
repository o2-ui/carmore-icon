import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

type Props = SVGProps<SVGSVGElement> & {
  thin?: boolean;
  half?: boolean;
};

/**
 * @description SVG 아이콘 ('왼쪽으로') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @param {boolean} [props.thin=false] - 화살표 굵기 조절 여부. (기본값: false)
 * @param {boolean} [props.half=false] - 기준 너비 조절 여부. (기본값: 'false)
 */
const ArrowRight = (props: Props) => {
  const { className, width, height, thin = false, half = false, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('ArrowLeft');

  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('ArrowLeftTitle');
  const titleText = ariaLabel || '오른쪽으로';

  const viewBox = half ? '0 0 12 24' : '0 0 24 24';

  let pathD = '';
  if (thin && half) {
    pathD =
      'M9.49499 11.5051C9.76835 11.7784 9.76835 12.2217 9.49499 12.495L3.49499 18.495C3.22162 18.7684 2.7784 18.7684 2.50504 18.495C2.23167 18.2217 2.23167 17.7784 2.50504 17.5051L8.01006 12L2.50504 6.49502C2.23167 6.22166 2.23167 5.77844 2.50504 5.50507C2.7784 5.23171 3.22162 5.23171 3.49499 5.50507L9.49499 11.5051Z';
  } else if (thin && !half) {
    pathD =
      'M15.795 11.5051C16.0683 11.7784 16.0683 12.2217 15.795 12.495L9.79497 18.495C9.52161 18.7684 9.07839 18.7684 8.80503 18.495C8.53166 18.2217 8.53166 17.7784 8.80503 17.5051L14.3101 12L8.80503 6.49502C8.53166 6.22166 8.53166 5.77844 8.80503 5.50507C9.07839 5.23171 9.52161 5.23171 9.79497 5.50507L15.795 11.5051Z';
  } else if (!thin && half) {
    pathD =
      'M10.1364 11.3637C10.4879 11.7152 10.4879 12.285 10.1364 12.6365L4.13642 18.6365C3.78495 18.988 3.2151 18.988 2.86363 18.6365C2.51216 18.285 2.51216 17.7152 2.86363 17.3637L8.22723 12.0001L2.86363 6.63649C2.51216 6.28502 2.51216 5.71517 2.86363 5.3637C3.2151 5.01223 3.78495 5.01223 4.13642 5.3637L10.1364 11.3637Z';
  } else if (!thin && !half) {
    pathD =
      'M16.1364 11.3637C16.4879 11.7152 16.4879 12.285 16.1364 12.6365L10.1364 18.6365C9.78495 18.988 9.2151 18.988 8.86363 18.6365C8.51216 18.285 8.51216 17.7152 8.86363 17.3637L14.2272 12.0001L8.86363 6.63649C8.51216 6.28502 8.51216 5.71517 8.86363 5.3637C9.2151 5.01223 9.78495 5.01223 10.1364 5.3637L16.1364 11.3637Z';
  }

  return (
    <svg
      className={mergeClassNames(iconClass, className)}
      width={iconWidth}
      height={iconHeight}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={viewBox}
      role={iconRole}
      aria-labelledby={titleId}
      {...rest}
    >
      <title id={titleId}>{titleText}</title>
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={pathD} fill={'currentColor'} />
    </svg>
  );
};

export default ArrowRight;
