import React, { useEffect, useState } from 'react';
import './About.scss';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import AboutImage from '../../assets/banner_about.png';
import { fetchData } from '../../services/apiService';

export default function About() {
  const [aboutDatas, setAboutDatas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await fetchData('/aboutData.json');
        setAboutDatas(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAboutData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!aboutDatas.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about">
      <Banner image={AboutImage} />        
      <main className="about_main">
        {aboutDatas.map(data => (
          <section className='about_main_section' key={data.id}>                    
            <Collapse title={data.title} content={data.content} />
          </section>
        ))}
      </main>                
    </div>
  );
}
