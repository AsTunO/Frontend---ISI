import { AuthProvider } from "./Context/AuthContext";
import Routes from "./routes/Routes";
import { Toaster } from "sonner";

export default function App() {
    return(
        <AuthProvider>
            <Routes />
            <Toaster richColors position='top-right' />
        </AuthProvider>
    );
}