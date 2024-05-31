import greyStar from '../../assets/GreyStar.svg';
import redStar from '../../assets/RedStar.svg';

export default function Rating({ rating }) {

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                )
            })}
        </div>
    )
}