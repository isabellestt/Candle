export default function formatDuration(durationInSeconds: number): string {
  if (!durationInSeconds && durationInSeconds !== 0) {
    return 'N/A';
  }

  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  if (hours > 0) {         
    return minutes > 0 
      ? `${hours}h ${minutes}min`
      : `${hours}h`;
  } else if (minutes > 0) {
    return seconds > 0 && minutes < 10
      ? `${minutes}min ${seconds}s` 
      : `${minutes}min`;
  } else {
    return `${seconds}s`;
  }
}