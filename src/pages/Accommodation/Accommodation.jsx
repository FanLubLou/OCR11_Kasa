import './Accommodation.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from '../../services/dataService';
import Slider from "../../components/Carousel/Carousel";
import Collapse from '../../components/Collapse/Collapse';
import Error from '../Error/Error';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';

export default function Accommodation() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [imageSlider, setImageSlider] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAccommodationData = async () => {
      try {
        const data = await fetchData('accommodationData.json');
        const dataCurrentAccomodation = data.find(data => data.id === id);
        if (dataCurrentAccomodation) {
          setData(dataCurrentAccomodation);
          setImageSlider(dataCurrentAccomodation.pictures);
        } else {
          setData(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAccommodationData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <Error />;
  }

  const { title, location, host, rating, description, equipments, tags } = data;
  const name = host.name.split(' ');

  return (
    <div className='accommodation_wrapper'>
      <Slider imageSlider={imageSlider} />
      <main className="accommodation">
        <div className="accommodation_content">
          <div className="accommodation_content_infos">
            <h1>{title}</h1>
            <p>{location}</p>
            <div>
              <Tag tags={tags} />
            </div>
          </div>
          <div className="accommodation_content_host">
            <div>
              <div className='accommodation_content_host_name'>
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img src={host.picture} alt="host of this accommodation" />
            </div>
            <div className="accommodation_content_host_stars">
              <Rating rating={rating} />
            </div>
          </div>
        </div>
        <div className="accommodation_collapse">
          <div className="accommodation_collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="accommodation_collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
    </div>
  );
}
