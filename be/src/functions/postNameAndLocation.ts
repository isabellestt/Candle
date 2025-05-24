export const postNameAndLocation = async (params: {
  name: string;
  location: string;
}) => {
  const { name, location } = params;
  
  if (!name || !location) {
    throw new Error("Name and location are required");
  }
  return {
    name,
    location,
  };
}