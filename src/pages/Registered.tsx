import Button from "../components/Button";


export default function Registered() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
     
      <h1>¡Te has registrado con éxito! 🎉</h1>
      <p>Hemos enviado un correo de verificación a tu bandeja de entrada.</p>
      <p><strong> Por favor, revisa tu mail y haz clic en el enlace de confirmación para activar tu cuenta.</strong></p>
      <p>Si no lo ves, revisa tu carpeta de spam o correo no deseado.</p>
      <p>¿No recibiste el correo? <a>Reenviar email de verificación</a></p>


       <Button to={"/griffgraffgroe"} className="text-[3em]">
        ←
      </Button>
    </div>
  );
}
