import { useState, useRef } from 'react';
import imageValentina from './assets/image.png';
import imageKlau from './assets/image2.png';
import romanticSong from './assets/romanticSong.mp3';
import roseImage from './assets/red-rose.png';
import Confetti from 'react-confetti';
import { Typewriter } from 'react-simple-typewriter';
import Heart from 'react-heart';

function App() {
	const [isMoving, setIsMoving] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const [showText, setShowText] = useState(false);
	const [active, setActive] = useState(false);

	const audioRef = useRef(null);

	const handleInteraction = () => {
		setIsMoving(true);

		if (audioRef.current) {
			audioRef.current.play();
		}

		setTimeout(() => {
			setShowConfetti(true);
			setShowText(true);

			setTimeout(() => {
				setActive(true);
			}, 1000);
		}, 2000);
	};

	return (
		<div>
			<audio
				ref={audioRef}
				src={romanticSong}
				loop={true}
			/>
			<div className='roses-background'>
				{Array.from({ length: 20 }).map((_, index) => (
					<img
						key={index}
						src={roseImage}
						alt='Red Rose'
						className='rose'
						style={{
							top: `${Math.random() * 80 + 10}%`,
							left: `${Math.random() * 80 + 10}%`,
							transform: `rotate(${Math.random() * 360}deg)`,
						}}
					/>
				))}
			</div>
			<div className='container'>
				<div
					className={`student-card student-true ${isMoving ? 'moving' : ''}`}
					onClick={handleInteraction}
					style={{ left: '100px' }}>
					<img
						src={imageKlau}
						alt='Profile of Claudiu'
					/>
					<h2>Claudiu</h2>
					<p>Most amazing person evăăr</p>
					<span className='status'>Tom</span>
				</div>

				<div
					className={`student-card student-true ${isMoving ? 'moving-reverse' : ''}`}
					style={{ right: '100px' }}>
					<img
						src={imageValentina}
						alt='Profile of Valentina'
					/>
					<h2>Valentina</h2>
					<p><i>Probably</i> the next most amazing person ever ;)</p>
					<span className='status'>Jerry</span>
				</div>
			</div>

			{showConfetti && <Confetti />}

			{showText && (
				<>
					<div className='perfect-match'>
						<Typewriter
							words={['Perfect Match <3']}
							loop={1}
							cursor
							cursorStyle='_'
							typeSpeed={150}
							deleteSpeed={50}
							delaySpeed={1700}
						/>
					</div>
					<div className='dedication-text'>
						<Typewriter
							words={['For the most beautiful, from Klau']}
							loop={0}
							cursor
							cursorStyle='_'
							typeSpeed={150}
							deleteSpeed={50}
							delaySpeed={3000}
						/>
					</div>
				</>
			)}

			{showText && (
				<div className='heart-container'>
					<Heart
						isActive={active}
						onClick={() => setActive(!active)}
						style={{ width: '100px', height: '100px' }}
					/>
				</div>
			)}
		</div>
	);
}

export default App;
