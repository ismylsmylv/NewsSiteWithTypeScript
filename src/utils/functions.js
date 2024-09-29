export function formatDate(firebaseTimestamp) {
    let initialDate
    if (firebaseTimestamp && firebaseTimestamp.seconds && firebaseTimestamp.nanoseconds !== undefined) {
        let milliseconds = firebaseTimestamp.seconds * 1000 + firebaseTimestamp.nanoseconds / 1000000;
        initialDate = new Date(milliseconds);
    } else {
        initialDate = new Date(firebaseTimestamp);
    }
    let day = initialDate.getDate();
    let month = initialDate.getMonth() + 1;
    let year = initialDate.getFullYear();
    let hours = initialDate.getHours();
    let minutes = initialDate.getMinutes();
    let formattedDate = `${day}/${month}/${year} ${hours}:${minutes.toString().padStart(2, '0')}`;
    return formattedDate;
}
export function removeTags(input) {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
}
