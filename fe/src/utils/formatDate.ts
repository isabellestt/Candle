function formatDateForDisplay(isoDate: string): string {
  const newDate = new Date(isoDate);
  
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  
  const formattedDate = Intl.DateTimeFormat('en-SG', options).format(newDate);

  const date = new Date(formattedDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(2);
  
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  
  return `${day}/${month}/${year} (${displayHours}:${minutes.toString().padStart(2, '0')} ${period})`
}

export default formatDateForDisplay;