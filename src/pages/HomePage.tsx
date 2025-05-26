import Button from "../components/Button";
import Logo from "../components/Logo";

export default function HomePage() {
return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
     <Logo size="large" className="h-80 w-auto" />
     <Button to={'/griffgraffgroe/login'} className="primary-button">Login</Button>
     <Button to={'/griffgraffgroe/board'} className="primary-button">Invitado</Button>
    </div>
);
}