import type { AriaRole, SVGProps } from 'react';

import React from 'react';

import style from './style.module.scss';

import { getElementId, mergeClassNames } from '@/util/string-helper';

type VariantsType = 'fill' | 'solid' | 'active';

type Props = SVGProps<SVGSVGElement> & {
  variants: VariantsType;
};

/**
 * @description SVG 아이콘 (좋아요) 을 랜더링합니다.
 * @param props - SVGProps를 상속받은 props 객체.
 * @param {string} [props.className] - css 클래스.
 * @param {VariantsType} [props.variants = 'fill'] - 아이콘 형태. (기본값: 'fill')
 * @param {string|number} [props.width='1.5rem'] - 너비. (기본값: '1.5rem')
 * @param {string|number} [props.height='1.5rem'] - 높이. (기본값: '1.5rem')
 * @remarks 웹 접근성을 위해 `role`, `aria-label` 등의 a11y 관련 props 설정을 권장합니다.
 */
const Like = (props: Props) => {
  const { className, variants = 'fill', width, height, role, 'aria-label': ariaLabel, ...rest } = props;

  const iconWidth: string | number = width || '1.5rem';
  const iconHeight: string | number = height || '1.5rem';

  /* a11y 기본설정 */
  const iconRole: AriaRole = role || 'img';
  const titleId = getElementId('LIKE_ICON');
  const titleText = ariaLabel || '좋아요';

  return (
    <svg
      className={mergeClassNames(variants === 'active' ? style['layout--active'] : style.layout, className)}
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
      {(variants === 'fill' || variants === 'active') && (
        <path
          d={
            'M12 5.06048C11.6686 4.67961 11.2909 4.34113 10.8759 4.0541C9.91418 3.3889 8.75186 3 7.5 3C4.18629 3 1.5 5.72492 1.5 9.08628C1.5 10.6298 2.06645 12.0392 3 13.1121C5.58816 16.0866 9.84186 19.5517 11.4022 20.7898C11.7555 21.0701 12.2445 21.0701 12.5978 20.7898C14.1581 19.5517 18.4118 16.0866 21 13.1121C21.9335 12.0392 22.5 10.6298 22.5 9.08628C22.5 5.72492 19.8137 3 16.5 3C15.2481 3 14.0858 3.3889 13.1241 4.0541C12.7091 4.34113 12.3314 4.67961 12 5.06048Z'
          }
          fill={'currentColor'}
        />
      )}
      {variants === 'solid' && (
        <path
          d={
            'M12 7.08924C11.4263 7.08924 10.8802 6.83931 10.5005 6.40297C9.76465 5.55725 8.69441 5.02876 7.5 5.02876C5.29086 5.02876 3.5 6.84538 3.5 9.08628C3.5 10.1167 3.87605 11.0531 4.49948 11.7696C6.66885 14.2628 10.1427 17.1826 12 18.6836C13.8573 17.1826 17.3311 14.2628 19.5005 11.7696C20.124 11.0531 20.5 10.1167 20.5 9.08628C20.5 6.84538 18.7091 5.02876 16.5 5.02876C15.3056 5.02876 14.2354 5.55725 13.4995 6.40297C13.1198 6.83931 12.5737 7.08924 12 7.08924ZM10.8759 4.0541C11.2909 4.34113 11.6686 4.6796 12 5.06048C12.3314 4.67961 12.7091 4.34113 13.1241 4.0541C14.0858 3.3889 15.2481 3 16.5 3C19.8137 3 22.5 5.72492 22.5 9.08628C22.5 10.6298 21.9335 12.0392 21 13.1121C18.4118 16.0866 14.1581 19.5517 12.5978 20.7898C12.2445 21.0701 11.7555 21.0701 11.4022 20.7898C9.84186 19.5517 5.58816 16.0866 3 13.1121C2.06645 12.0392 1.5 10.6298 1.5 9.08628C1.5 5.72492 4.18629 3 7.5 3C8.75186 3 9.91418 3.3889 10.8759 4.0541Z'
          }
          fill={'currentColor'}
        />
      )}
    </svg>
  );
};

export default Like;
