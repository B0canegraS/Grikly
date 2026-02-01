export const formatFraternity = (fraternity?: string | null, chapter?: string | null): string => {
  if (fraternity && chapter) return `[${fraternity} – ${chapter}]`;
  if (fraternity) return fraternity;
  if (chapter) return chapter;
  return '';
};
