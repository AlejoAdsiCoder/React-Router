import { Outlet, Route } from "react-router";

const PrivateRoute = () => {
    const auth = {id: 1, username: "luis"}

    return auth ? <Outlet /> : <Route path="/login" />;
}

export default PrivateRoute