import React from 'react';
import { Link } from 'react-router-dom';
import logoLarge from '../assets/logo-large.svg';
import logoSmall from '../assets/logo-small.svg';

type LogoProps = {
  to?: string;
  size?: 'small' | 'large';
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ to = '/griffgraffgroe', size = 'large', className }) => {
  const src = size === 'small' ? logoSmall :  logoLarge;
  const alt = 'GriffGraffGroe Logo';

  const content = (
    <img src={src} alt={alt} className={className} />
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return <>{content}</>;
};

export default Logo;