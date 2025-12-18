export function authGuard() {
    const token = localStorage.getItem("token")

    if (!token) {
        return "/login"
    }
    else {
        return
    }
}
