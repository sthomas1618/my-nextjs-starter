/// <reference types="@emotion/react/types/css-prop" />

// see: https://github.com/emotion-js/emotion/issues/2111#issuecomment-1083434383
import '@emotion/react'
import { CustomThemeInterface } from '.'

declare module '@emotion/react' {
  export interface Theme extends CustomThemeInterface {}
}
