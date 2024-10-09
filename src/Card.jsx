import profilePic from './assets/profilePic.jpg';

function Card() {
	return (
		<div className='card'>
			<img className='card-image'
				src={profilePic}
				alt='profile pic'
			/>
			<h2 className='card-title'>Claudiu</h2>
			<p className= 'card-text'> I'm a programmer and I play gutiar </p>
		</div>
	);
}

export default Card;
