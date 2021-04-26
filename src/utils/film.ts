export function getFilmIdFromUrl(url: string): string {
  if (!url) return '';
  const arr = url.split('/films/');
  if (arr.length < 2) return '';

  return arr[1].replace('/', '');
}
