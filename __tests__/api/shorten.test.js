import handler from '../../pages/api/shorten'
import axios from 'axios'

jest.mock('axios')

describe('API Route: /api/shorten', () => {
  let req
  let res

  beforeEach(() => {
    req = {
      method: 'POST',
      body: {},
    }
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    }
  })

  test('returns 405 for non-POST requests', async () => {
    req.method = 'GET'
    
    await handler(req, res)
    
    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.json).toHaveBeenCalledWith({ error: 'Method not allowed' })
  })

  test('returns 400 when URL is missing', async () => {
    await handler(req, res)
    
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'URL is required',
      error_code: '1'
    })
  })

  test('returns 400 for invalid URL', async () => {
    req.body.url = 'invalid-url'
    
    await handler(req, res)
    
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Invalid URL',
      error_code: '2'
    })
  })

  test('successfully shortens valid URL', async () => {
    req.body.url = 'https://example.com'
    
    const mockResponse = {
      data: {
        success: true,
        data: {
          url: 'https://ulvis.net/abc123'
        }
      }
    }
    axios.post.mockResolvedValueOnce(mockResponse)
    
    await handler(req, res)
    
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      original_link: 'https://example.com',
      full_short_link: 'https://ulvis.net/abc123'
    })
  })
}) 