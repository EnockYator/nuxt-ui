import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {

        // enabling default aspect ratio utilities: (disabled by @tailwindcss/aspect-ratio plugin)
        // [aspect-auto, aspect-square, aspect-video]
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  }
}
