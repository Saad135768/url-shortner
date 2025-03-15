import axios from 'axios';

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ 
      error: 'URL is required',
      error_code: '1'
    });
  }

  if (!isValidUrl(url)) {
    return res.status(400).json({ 
      error: 'Invalid URL',
      error_code: '2'
    });
  }

  try {
    const formData = new URLSearchParams();
    formData.append('url', url);
    formData.append('private', '0');
    formData.append('api', '1');

    const { data } = await axios.post('https://ulvis.net/API/write/post', formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
        },
    });

    if (!data?.success) {
      return res.status(400).json({
        error: data.error || 'Failed to shorten URL',
        error_code: data.error_code || 'UNKNOWN_ERROR'
      });
    }

    return res.status(200).json({
      success: true,
      original_link: url,
      full_short_link: data.data.url
    });
  } catch (error) {
    console.error('Error from ulvis.net:', error.response?.data);
    
    return res.status(500).json({
      error: error.response?.data?.error || 'Failed to shorten URL',
      error_code: error.response?.data?.error_code || 'INTERNAL_ERROR'
    });
  }
}