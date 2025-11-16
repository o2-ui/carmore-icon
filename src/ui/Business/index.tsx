import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, getElementId, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('서류가방') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Business = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Business');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('BusinessTitle');
  const titleText = ariaLabel || '서류가방';

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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M1 7.41045C1 6.47265 1.76886 5.7124 2.7173 5.7124H21.2827C22.2311 5.7124 23 6.47265 23 7.41045V10.3809C23 11.1466 22.4817 11.8176 21.7346 12.0191L14.9924 13.8372C14.572 13.9506 14.1382 13.7055 14.0236 13.2898C13.9089 12.8741 14.1568 12.4452 14.5772 12.3318L21.3193 10.5137C21.3799 10.4973 21.4219 10.4429 21.4219 10.3809V7.41045C21.4219 7.33442 21.3596 7.27277 21.2827 7.27277H2.7173C2.6404 7.27277 2.57806 7.33442 2.57806 7.41045V10.3809C2.57806 10.4429 2.62008 10.4973 2.68066 10.5137L9.4228 12.3318C9.84321 12.4452 10.0911 12.8741 9.97642 13.2898C9.86176 13.7055 9.428 13.9506 9.00758 13.8372L2.26545 12.0191C1.51832 11.8176 1 11.1466 1 10.3809V7.41045Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M8.42627 12.9178C8.42627 11.98 9.19513 11.2197 10.1436 11.2197H13.8566C14.8051 11.2197 15.5739 11.98 15.5739 12.9178V13.8356C15.5739 14.7735 14.8051 15.5337 13.8566 15.5337H10.1436C9.19513 15.5337 8.42627 14.7735 8.42627 13.8356V12.9178ZM10.1436 12.7801C10.0667 12.7801 10.0043 12.8417 10.0043 12.9178V13.8356C10.0043 13.9117 10.0667 13.9733 10.1436 13.9733H13.8566C13.9335 13.9733 13.9959 13.9117 13.9959 13.8356V12.9178C13.9959 12.8417 13.9335 12.7801 13.8566 12.7801H10.1436Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M2.25314 10.7607C2.68891 10.7607 3.04217 11.11 3.04217 11.5409V18.8839C3.04217 19.4668 3.52011 19.9394 4.10968 19.9394H19.8903C20.4798 19.9394 20.9578 19.4668 20.9578 18.8839V11.5409C20.9578 11.11 21.311 10.7607 21.7468 10.7607C22.1826 10.7607 22.5358 11.11 22.5358 11.5409V18.8839C22.5358 20.3286 21.3514 21.4998 19.8903 21.4998H4.10968C2.64857 21.4998 1.46411 20.3286 1.46411 18.8839V11.5409C1.46411 11.11 1.81737 10.7607 2.25314 10.7607Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M9.2151 4.06037C9.1382 4.06037 9.07586 4.12201 9.07586 4.19805V6.03378C9.07586 6.46467 8.7226 6.81397 8.28683 6.81397C7.85106 6.81397 7.4978 6.46467 7.4978 6.03378V4.19805C7.4978 3.26024 8.26666 2.5 9.2151 2.5H14.7847C15.7332 2.5 16.502 3.26024 16.502 4.19805V6.03378C16.502 6.46467 16.1488 6.81397 15.713 6.81397C15.2772 6.81397 14.924 6.46467 14.924 6.03378V4.19805C14.924 4.12201 14.8616 4.06037 14.7847 4.06037H9.2151Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Business;
