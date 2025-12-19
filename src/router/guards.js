const token = localStorage.getItem("token")

export function authGuard() {
    if (!token) {
        return "/login"
    }
    else {
        return
    }
}

export function loggedCheck() {
    if (!token) {
        return
    }
    else {
        return "/dashboard"
    }
}
