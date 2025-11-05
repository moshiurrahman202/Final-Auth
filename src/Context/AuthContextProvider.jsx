import { AuthContext } from "./Context";




const AuthContextProvider = ({children}) => {
    const userInfo = {
        email: "justXYZ@gmail.com"
    }
   
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthContextProvider;