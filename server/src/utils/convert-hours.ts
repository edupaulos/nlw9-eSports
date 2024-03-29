export function convertHoursStrindToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);

  return hours * 60 + minutes;
}
