import './Banner.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner({ image }) {
  const [aboutPage, setAboutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutPage(true);
    } else {
      setAboutPage(false);
    }
  }, [location.pathname]);

  return (
    <section className={'banner'}>
      <img src={image} alt="banner paysage" />
      <div className="banner_TextFrame"></div>
      {!aboutPage && (
        <h2>
          Chez vous, partout et ailleurs
        </h2>
      )}
    </section>
  );
}
