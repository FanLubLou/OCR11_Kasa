import './Accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Slider from "../../components/Carousel/Carousel"
import Collapse from '../../components/Collapse/Collapse';
import Error from '../Error/Error';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';

export default function Accommodation() {

	const [imageSlider, setImageSlider] = useState([]);

	const { id } = useParams();
	const dataCurrentAccomodation = datas.find(data => data.id === id);

	useEffect(() => {
		if (dataCurrentAccomodation) {
			setImageSlider(dataCurrentAccomodation.pictures);
		}
	}, [id, dataCurrentAccomodation]);

	if (!dataCurrentAccomodation) {
		return <Error />;
	}

	const name = dataCurrentAccomodation.host.name.split(' ');
	const rating = dataCurrentAccomodation.rating;
	const description = dataCurrentAccomodation.description;
	const equipments = dataCurrentAccomodation.equipments;

	return (
		<div className='accomodation_wrapper'>
			<Slider imageSlider={imageSlider} />
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation.title}</h1>
						<p>{dataCurrentAccomodation.location}</p>
						<div>
							<Tag tags={dataCurrentAccomodation.tags} />
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation.host.picture} alt="host of this accomodation" />
						</div>

						<div className="accomodation_content_host_stars">
							<Rating rating={rating} />
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description}/>
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>
				</div>
			</main>
		</div>
	)
}
