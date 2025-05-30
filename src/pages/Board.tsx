import Logo from "../components/Logo";
import Button from "../components/Button";

export default function Board() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <Logo size="large" className="h-80 w-auto mb-8" />
      <h1>Juego como invitado</h1>
      <p>En esta pantalla podrás jugar a GriffGrafGroe sin loguearte.</p>
      <Button to={"/griffgraffgroe"} className="text-[3em]">
        ←
      </Button>
    </div>
  );
}
