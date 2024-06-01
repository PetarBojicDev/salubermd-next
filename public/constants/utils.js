export function isNotBlank(str) {
    return str.trim().length > 0;
}

export function getRoute(path, language) {
    let array = path.split("/");
    array[1] = language;
    const concatenatedString = array.join('/');
    return concatenatedString;
}

export function formatTimestampToDate(timestamp) {
    const date = new Date(Number(timestamp));

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayString = day < 10 ? '0' + day : day;
    const monthString = month < 10 ? '0' + month : month;

    return `${dayString}/${monthString}/${year}`;
}

export function formatTimestampToHours(timestamp) {
    const date = new Date(Number(timestamp));

    const hours = date.getHours();

    return hours;
}

export function formatTimestampToHoursAndMinutes(timestamp) {
    const date = new Date(Number(timestamp));

    const hours = date.getHours();
    const minutes = date.getMinutes() == 0 ? "00" : date.getMinutes();

    return hours + ":" + minutes;
}

export function calculateAge(birthdateString) {
    const birthdate = new Date(birthdateString);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age;
}

export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

