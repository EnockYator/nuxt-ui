import type { _backgroundColor } from "#tailwind-config/theme";

export default defineAppConfig({
    ui: {
      primary: 'green',
      gray: 'cool',
      strategy: 'override',

      button: {
        default: {
          size: 'sm',
          color: 'primary',
          variant: 'solid'
        },
      }
      
    }
  })
  