import Logo from "../components/Logo";
import Button from "../components/Button";
import Game from "../components/Game";

export default function Guest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <Logo size="large" className="h-80 w-auto mb-8" />
      <h1>Juego como invitado</h1>
      <p>En esta pantalla podrás jugar a GriffGrafGroe sin loguearte.</p>
      <Game />
      <Button to={"/griffgraffgroe"} className="text-[3em]">
        ←
      </Button>
    </div>
  );
}
