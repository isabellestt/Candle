function convertToISODate(dateString: string): string {
  const match = dateString.match(/(\d+)\/(\d+)\/(\d+)\s+\((\d+):(\d+)\s+([AP]M)\)/);
  
  if (!match) {
    console.error(`Invalid date format: ${dateString}`);
    return new Date().toISOString(); 
  }
  
  // DD/MM/YY (HH:MM AM/PM)
  const [_, day, month, shortYear, hours, minutes, period] = match;
  
  const fullYear = parseInt(shortYear) < 50 ? `20${shortYear}` : `19${shortYear}`;
  
  let hour = parseInt(hours);
  if (period === "PM" && hour < 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }
  
  const date = new Date(
    parseInt(fullYear),
    parseInt(month) - 1, 
    parseInt(day),
    hour,
    parseInt(minutes),
    0
  );
  
  return date.toISOString();
}

export default convertToISODate;