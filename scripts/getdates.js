
const setYear = () => {
    document.querySelector('#currentyear').innerHTML = '&copy;' + new Date().getFullYear();
    const today = new Date(document.lastModified);
    let shortTime = new Intl.DateTimeFormat(
        "en-US",
        {
            dateStyle: "short"
        }
    ).format(today);
    document.querySelector('#lastModified').innerHTML = 'Last Modification: ' + shortTime + ' ' + new Date(document.lastModified).getHours() + ':' + new Date(document.lastModified).getMinutes() + ':' + new Date(document.lastModified).getSeconds();
}


const main = () => {
    setYear();
}


main();