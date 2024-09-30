import { Timestamp } from "firebase/firestore";

export function formatDate(firebaseTimestamp: Timestamp) {
  let initialDate;
  if (
    firebaseTimestamp &&
    firebaseTimestamp.seconds &&
    firebaseTimestamp.nanoseconds !== undefined
  ) {
    const milliseconds =
      firebaseTimestamp.seconds * 1000 +
      firebaseTimestamp.nanoseconds / 1000000;
    initialDate = new Date(milliseconds);
  } else {
    initialDate = new Date(firebaseTimestamp as any);
  }
  const day = initialDate.getDate();
  const month = initialDate.getMonth() + 1;
  const year = initialDate.getFullYear();
  const hours = initialDate.getHours();
  const minutes = initialDate.getMinutes();
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes
    .toString()
    .padStart(2, "0")}`;
  return formattedDate;
}
export function removeTags(input: string) {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}
