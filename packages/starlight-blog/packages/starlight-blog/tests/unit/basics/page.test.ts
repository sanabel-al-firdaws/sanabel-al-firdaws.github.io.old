import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { getBlogPathWithBase, getPathWithBase } from '../../../libs/page'

describe('getBlogPathWithBase', () => {
  test('returns the blog root path', () => {
    expect(getBlogPathWithBase('/')).toBe('/blog')
  })

  test('returns a blog post path', () => {
    expect(getBlogPathWithBase('/post-1')).toBe('/blog/post-1')
  })

  test('returns the RSS feed path', () => {
    expect(getBlogPathWithBase('/rss.xml', true)).toBe('/blog/rss.xml')
  })
})

describe('getPathWithBase', () => {
  describe('with no base', () => {
    test('returns the path with no base', () => {
      expect(getPathWithBase('/blog')).toBe('/blog')
    })

    test('prefixes the path with a leading slash if needed', () => {
      expect(getPathWithBase('blog')).toBe('/blog')
    })
  })

  describe('with a base', () => {
    beforeEach(() => {
      vi.stubEnv('BASE_URL', '/base/')
      vi.resetModules()
    })

    afterEach(() => {
      vi.unstubAllEnvs()
    })

    test('returns the path prefixed with the base', async () => {
      const { getPathWithBase } = await import('../../../libs/page')
      expect(getPathWithBase('/blog')).toBe('/base/blog')
    })
  })

  describe('trailingSlash', () => {
    test('does not strip trailing slashes', () => {
      expect(getPathWithBase('/blog/')).toBe('/blog/')
    })

    test('does not ensure trailing slashes', () => {
      expect(getPathWithBase('/blog')).toBe('/blog')
    })
  })
})
