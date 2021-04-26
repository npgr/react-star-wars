export function getCharacterIdFromUrl(url: string): string {
  if (!url) return '';
  const arr = url.split('/people/');
  if (arr.length < 2) return '';

  return arr[1].replace('/', '');
}
