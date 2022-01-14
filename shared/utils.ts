export function formatDate(date: string) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May" , "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = months[(parseInt(date.substring(5, 7), 10)) - 1];
  return `${month} ${date.substring(0, 4)}`;
}