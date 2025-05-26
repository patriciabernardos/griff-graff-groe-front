import logotipo from '../assets/logotipo.svg';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logotipo} alt="Logo" className="h-8 w-8" />
  
    </div>
  );
};

export default Logo;