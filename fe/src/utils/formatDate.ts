function formatDateForDisplay(isoDate: string): string {
  if (!isoDate) return "N/A";

  try {
    const date = new Date(isoDate);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      console.warn("Invalid date format:", isoDate);
      return "Invalid date";
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(2);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;

    return `${day}/${month}/${year} (${displayHours}:${minutes.toString().padStart(2, "0")} ${period})`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Error formatting date";
  }
}

export default formatDateForDisplay;
