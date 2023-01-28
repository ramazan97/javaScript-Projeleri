
	let canvasSize = 700;

	const bird = new Image();
	bird.src = 'bird.png';

	let birdSize = 50;
	let birdX = 0;
	let birdY = canvasSize / 2;
	let delta = 0;

	let pipeWidth = 75;
	let pipeGap = canvasSize / 2;
	let pipeX = canvasSize;
	let topPipeBottomY = 75;

	let gravity = 0.1;

	let aspectRatio = 1.5;

	let interval = 30;

	let context = c.getContext('2d');

	c.onclick = () => (delta = 5);

	setInterval(() => {
		context.fillStyle = 'skyblue';
		context.fillRect(0, 0, canvasSize, canvasSize);
		context.drawImage(bird, birdX, birdY, birdSize * aspectRatio, birdSize);

		birdY -= delta -= gravity;

		pipeX -= 5;

		if (pipeX < -pipeWidth) {
			pipeX = canvasSize;
			topPipeBottomY = pipeGap * Math.random();
		}

		context.fillStyle = 'green';
		context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY);

		let bottomY = topPipeBottomY + pipeGap;
		context.fillRect(pipeX, bottomY, pipeWidth, canvasSize);

		let hitPipe =
			(birdY < topPipeBottomY || birdY > bottomY) &&
			pipeX < birdSize * aspectRatio;

		if (hitPipe || birdY > canvasSize) {
			delta = 0;
			birdY = canvasSize / 2;
			pipeX = canvasSize;
		}
	}, interval);