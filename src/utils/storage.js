export function setStorage(name, value) {
    const setValue = JSON.stringify(value)
    window.sessionStorage.setItem(name, setValue)
}

export function getStorage(name) {
    const value = window.sessionStorage.getItem(name);
    return JSON.parse(value);
}
