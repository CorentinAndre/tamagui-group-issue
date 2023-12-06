import { config } from '@my/ui'

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {
  }

  interface TypeOverride {
    groupNames(): 'working' | 'not-working'
  }
}

export default config
