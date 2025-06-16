export const cookieToJSON = (cookieString: string) => {
    if(!cookieString){
        return {}
    }
    let cookies = cookieString.split("; ");
    let newCookies = [];
    cookies.forEach(cookie => {
        const cookieArr = cookie.split("=");
        cookieArr[0] = '"' + cookieArr[0] + '"';
        cookieArr[1] = '"' + cookieArr[1] + '"';
        const newCookie = cookieArr[0]+":"+cookieArr[1];
        newCookies.push(newCookie);
    })
    let cookiesJSON="";
    newCookies.map(cookie => {
        cookiesJSON += cookie;
        cookiesJSON += ", ";
    })
    cookiesJSON=cookiesJSON.substring(0, cookiesJSON.length - 2);
    cookiesJSON = "{"+cookiesJSON+"}";
    return JSON.parse(cookiesJSON);
};