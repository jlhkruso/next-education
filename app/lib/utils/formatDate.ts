export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Extract date components
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format the date into the specified user-friendly string
  return `${day} ${month} ${year} kl ${hours}:${minutes
    .toString()
    .padStart(2, "0")}`;
};
