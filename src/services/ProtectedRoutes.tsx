import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const auth = Cookies.get("jwt-token")
    return auth ? <Outlet /> : <Navigate to={"/login"} />
}
/*
    Questo gestisce le rotte protette all'interno di un'applicazione.

    `Navigate` viene utilizzato per reindirizzare l'utente a un'altra pagina, 
    mentre `Outlet` è un componente utilizzato per renderizzare le rotte nidificate all'interno di un'altra rotta.

    Viene utilizzato il metodo Cookies.get("jwt-token")per estrarre 
    il valore del cookie denominato "jwt-token". Questo deposito contiene il token di autenticazione dell'utente.

    Se il cookie "jwt-token" è definito e contiene un valore, viene visualizzato il componente <Outlet/>, che renderà le rotte protette.
    Se il cookie "jwt-token" non è definito o ha un valore falso, l'utente viene reindirizzato 
    alla pagina di accesso ( <Navigate to={"/login"}/>), probabilmente per ottenere un token valido prima di poter accedere alle rotte protette.

    In sintesi, questo codice React gestisce le rotte protette in base alla presenza e al valore del cookie "jwt-token", reindirizzando 
    gli utenti alla pagina di accesso se non possiedono un token di autenticazione valido.
*/