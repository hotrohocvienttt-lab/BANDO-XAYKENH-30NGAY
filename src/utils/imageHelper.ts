/// <reference types="vite/client" />

export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Ensure path starts with /
  return path.startsWith('/') ? path : `/${path}`;
}

