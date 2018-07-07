
// Ajax tweet
function ajaxTweet(e) {
	e.preventDefault();
	axios
		.post(this.action, { tweet: this.tweet.value } )
		.then(res => {
			// console.log(res);
			this.tweet.value = '';
			console.log('Tweeted!');
		})
		.catch(e => console.log(e))
	// console.log(this.tweet.value);
}


// Ajax hearts
function ajaxHeart(e) {
	e.preventDefault();
	axios
	.post(this.action)
	.then(res => {
		console.log(res.data);
		const isHearted = this.heart.classList.toggle('hearted');
		console.log(isHearted);
	})
	.catch(e => console.log(e))
}
const tweetForm = document.querySelector('.tweet_card');

tweetForm.addEventListener('submit', ajaxTweet);

const heartForms = document.querySelectorAll('form.heart');
heartForms.forEach(heart => {
	heart.addEventListener('submit', ajaxHeart);
})
