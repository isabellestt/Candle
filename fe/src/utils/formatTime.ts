export default function formatDuration(durationInSeconds: number): string {
  if (!durationInSeconds && durationInSeconds !== 0) {
    return "N/A";
  }

  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  const formattedHours = `${hours}h`;
  const formattedMinutes = `${minutes.toString().padStart(2, "0")}m`;
  const formattedSeconds = `${seconds.toString().padStart(2, "0")}s`;

  return `${formattedHours} ${formattedMinutes} ${formattedSeconds}`;
}
