export function isNotBlank(str) {
    return str.trim().length > 0;
}

export function getRoute(path, language) {
    let array = path.split("/");
    array[1] = language;
    const concatenatedString = array.join('/');
    return concatenatedString;
}