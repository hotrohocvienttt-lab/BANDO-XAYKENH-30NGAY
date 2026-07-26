/// <reference types="vite/client" />

export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Remove leading slash for relative joining
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get base URL from Vite
  const baseUrl = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || './';
  if (baseUrl === './' || baseUrl === '') {
    return `./${cleanPath}`;
  }
  
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
