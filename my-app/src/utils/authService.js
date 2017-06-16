import jwtDecode from 'jwt-decode';

export function getTokenExpirationDate(encodedToken) {
    const token = jwtDecode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
}

export function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}
