export function authHeader() {
    // return authorization header with basic auth credentials
    let userCredentials = JSON.parse(localStorage.getItem('user_credentials'))

    if (userCredentials) {
        return true
    } else {
        return false;
    }
}
