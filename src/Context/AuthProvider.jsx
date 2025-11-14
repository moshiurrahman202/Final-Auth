import { AuthContext } from "./AuthContext";


const AuthProvider = ({children}) => {
    const userinfo = {
        name: "sumon",
        age: "34",
        add: "c&b colony"
    }
    return (
        <AuthContext value={userinfo}>{children}</AuthContext>
    );
};

export default AuthProvider;