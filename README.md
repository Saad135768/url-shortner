# URL Shortener App

A modern, responsive URL shortening application built with Next.js that allows users to quickly shorten long URLs into manageable links. The app uses the ulvis.net API for URL shortening services and provides a clean, user-friendly interface.

## Features

- 🔗 Instant URL shortening
- 📱 Responsive design for all devices
- 💾 Local storage for saving shortened URLs
- ✅ URL validation
- 🎨 Modern Material-UI interface
- 🚀 Fast and lightweight

## Tech Stack

- **Frontend:**
  - Next.js
  - React
  - Material-UI
  - Axios for API requests

- **API Integration:**
  - ulvis.net URL shortening service
  - RESTful API endpoints

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Saad135768/curricularbwg
cd url-shortener
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter a valid URL in the input field
2. Click the "Shorten it!" button
3. Copy your shortened URL
4. All shortened URLs are saved locally and will persist between sessions

## API Endpoints

### `POST /api/shorten`

Shortens a URL using the ulvis.net service.

**Request Body:**
```json
{
  "url": "https://example.com/very-long-url"
}
```

**Success Response:**
```json
{
  "success": true,
  "original_link": "https://example.com/very-long-url",
  "full_short_link": "https://ulvis.net/xxxxx"
}
```

**Error Response:**
```json
{
  "error": "Error message",
  "error_code": "ERROR_CODE"
}
```

## Error Codes

- `1`: URL is required
- `2`: Invalid URL
- `INTERNAL_ERROR`: Server or API error

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Material-UI](https://material-ui.com/)
- [ulvis.net](https://ulvis.net/) for the URL shortening service 
