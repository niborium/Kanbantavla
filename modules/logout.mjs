import { global } from "../main.js";
import { removeCards } from './removeCards.mjs';

global.logoutBtn.addEventListener("click", logout);

// Tar bort currentUser från localStorage
export function logout() {
    localStorage.removeItem("currentUser");
    global.logoutBtn.style.display = "none";
    global.loginForm.style.visibility = "visible";    
    removeCards();
}