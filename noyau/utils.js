export function formaterDuree(duree) {
    let secondes = Math.round(duree % 60);
    let minutes = Math.floor(duree / 60);

    return `${minutes}:${secondes.toString().padStart(2, "0")}`;
}