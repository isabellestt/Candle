function convertToISODate(dateString: string): string {
  if (dateString.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)) {
    // Already in ISO format, return as is
    return dateString;
  } else {
    console.error(`Invalid date format: ${dateString}`);
    return new Date().toISOString();
  }
}

export default convertToISODate;
