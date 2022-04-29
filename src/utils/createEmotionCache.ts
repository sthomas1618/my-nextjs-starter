import createCache from '@emotion/cache'

/**
 * Create Emotion cache for share for user's session
 * @returns an emotion cache object
 */
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true })
}
