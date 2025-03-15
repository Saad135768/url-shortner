import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Input from '../modules/Home/Input'
import axios from 'axios'

// Mock axios
jest.mock('axios')

describe('Input Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Clear all mocks
    jest.clearAllMocks()
  })

  test('renders input field and button', () => {
    render(<Input />)
    
    expect(screen.getByPlaceholderText('Shorten a link here...')).toBeInTheDocument()
    expect(screen.getByText('Shorten it!')).toBeInTheDocument()
  })

  test('shows error message when submitting empty input', () => {
    render(<Input />)
    
    const button = screen.getByText('Shorten it!')
    fireEvent.click(button)
    
    expect(screen.getByText('Please add a link')).toBeInTheDocument()
  })

  test('successfully shortens a valid URL', async () => {
    // Mock successful API response
    const mockResponse = {
      data: {
        success: true,
        original_link: 'https://example.com',
        full_short_link: 'https://ulvis.net/abc123'
      }
    }
    axios.post.mockResolvedValueOnce(mockResponse)

    render(<Input />)
    
    // Type a URL
    const input = screen.getByPlaceholderText('Shorten a link here...')
    fireEvent.change(input, { target: { value: 'https://example.com' } })
    
    // Click the button
    const button = screen.getByText('Shorten it!')
    fireEvent.click(button)
    
    // Wait for the API call to resolve
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        '/api/shorten',
        { url: 'https://example.com' }
      )
    })

    // Check if localStorage was updated
    const savedLinks = JSON.parse(localStorage.getItem('savedlinks'))
    expect(savedLinks).toEqual([{
      oldLink: 'https://example.com',
      newLink: 'https://ulvis.net/abc123'
    }])
  })

  test('handles API error correctly', async () => {
    // Mock API error response
    axios.post.mockRejectedValueOnce({
      response: {
        data: {
          error: 'Invalid URL',
          error_code: '2'
        }
      }
    })

    render(<Input />)
    
    // Type an invalid URL
    const input = screen.getByPlaceholderText('Shorten a link here...')
    fireEvent.change(input, { target: { value: 'invalid-url' } })
    
    // Click the button
    const button = screen.getByText('Shorten it!')
    fireEvent.click(button)
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText('Invalid URL!')).toBeInTheDocument()
    })
  })
}) 