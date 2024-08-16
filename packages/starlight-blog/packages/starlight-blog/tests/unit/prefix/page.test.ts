import { describe, expect, test } from 'vitest'

import { getBlogPathWithBase } from '../../../libs/page'

describe('getBlogPathWithBase', () => {
  test('returns the blog root path', () => {
    expect(getBlogPathWithBase('/')).toBe('/news')
  })

  test('returns a blog post path', () => {
    expect(getBlogPathWithBase('/post-1')).toBe('/news/post-1')
  })

  test('returns the RSS feed path', () => {
    expect(getBlogPathWithBase('/rss.xml', true)).toBe('/news/rss.xml')
  })
})
