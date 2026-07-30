/// <reference types="vite/client" />

export function normalizeImageUrl(url: string): string {
  if (!url) return '';

  // 1. Google Drive link converter
  if (url.includes('drive.google.com')) {
    let fileId = '';
    // Format: /file/d/FILE_ID/ or /file/d/FILE_ID
    const fileDMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileDMatch && fileDMatch[1]) {
      fileId = fileDMatch[1];
    } else {
      // Format: ?id=FILE_ID or &id=FILE_ID
      const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        fileId = idMatch[1];
      }
    }
    if (fileId) {
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }

  // 2. Dropbox link converter
  if (url.includes('dropbox.com')) {
    if (url.includes('dl=0')) {
      return url.replace('dl=0', 'dl=1');
    }
    if (!url.includes('dl=1')) {
      return url.includes('?') ? `${url}&dl=1` : `${url}?dl=1`;
    }
    return url;
  }

  return url;
}

export function getAssetUrl(path: string): string {
  if (!path) return '';
  
  const normalized = normalizeImageUrl(path);

  if (normalized.startsWith('http://') || normalized.startsWith('https://') || normalized.startsWith('data:')) {
    return normalized;
  }
  
  // Ensure path starts with /
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

