import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import { getElementClass, mergeClassNames } from '@/util/string-helper';

/**
 * @description SVG 아이콘 ('와이파이') 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {string} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Wifi = (props: SVGProps<SVGSVGElement>) => {
  const { className, width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';
  const iconClass = getElementClass('Wifi');

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleText = ariaLabel || '와이파이';

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
          'M12.0001 20.3068C12.7648 20.3068 13.3847 19.6869 13.3847 18.9222C13.3847 18.1575 12.7648 17.5376 12.0001 17.5376C11.2354 17.5376 10.6155 18.1575 10.6155 18.9222C10.6155 19.6869 11.2354 20.3068 12.0001 20.3068Z'
        }
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d="M14.9717 16.268C13.4483 14.3637 10.5521 14.3637 9.02868 16.268C8.71021 16.6661 8.12932 16.7306 7.73123 16.4121C7.33315 16.0937 7.2686 15.5128 7.58707 15.1147C9.84953 12.2866 14.1508 12.2866 16.4133 15.1147C16.7318 15.5128 16.6672 16.0937 16.2691 16.4121C15.871 16.7306 15.2902 16.6661 14.9717 16.268Z"
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d="M17.8089 12.6517C14.6008 9.44354 9.3994 9.44354 6.19127 12.6517C5.83079 13.0121 5.24633 13.0121 4.88584 12.6517C4.52536 12.2912 4.52536 11.7067 4.88584 11.3462C8.81494 7.41714 15.1853 7.41714 19.1143 11.3462C19.4748 11.7067 19.4748 12.2912 19.1143 12.6517C18.7539 13.0121 18.1694 13.0121 17.8089 12.6517Z"
        fill={'currentColor'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M21.4734 9.85336C16.38 4.29688 7.62007 4.29688 2.52663 9.85336C2.18214 10.2292 1.59823 10.2545 1.22243 9.91006C0.84663 9.56558 0.821243 8.98167 1.16573 8.60587C6.99087 2.25117 17.0092 2.25117 22.8343 8.60587C23.1788 8.98167 23.1534 9.56558 22.7776 9.91006C22.4018 10.2545 21.8179 10.2292 21.4734 9.85336Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Wifi;
