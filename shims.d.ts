import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'react' {
  interface HTMLAttributes extends AttributifyAttributes { }
}
