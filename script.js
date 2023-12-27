var count = 0;
const speed = 300;
const colors = ['f44336','e91e63','9c27b0','673ab7','3f51b5','2196f3','03a9f4','00bcd4','009688','4caf50','8bc34a','cddc39','ffeb3b','ffc107','ff9800','ff5722'];
const elm = document.querySelector('.heading');
const word = elm.innerText.split(' ');
const htm = word.map(function(word){
	var text = word.split('').map(function(letter){
		count++;
		if(count>=colors.length) {
			count = 0;
		}
		return '<span class="letter '+letter.toLowerCase()+'" style="color:#'+colors[count]+(speed?'; animation-duration:'+speed/1000+'s':'')+'">'+letter+'</span>';
	});
	return '<span class="word '+word.toLowerCase()+'">'+text.join('')+'</span>';
});
elm.innerHTML = htm.join('');
elm.querySelector('.word>span:first-child').classList.add('active');
const letters = elm.querySelectorAll('.word>span');
letters.forEach((letter) => {
	var $this = letter, $parent = $this.parentElement.nextElementSibling;
	letter.addEventListener('animationend', (e) => {
		if($this.nextElementSibling) {
			$this.nextElementSibling.classList.add('active');
		}else{
			if($parent && $parent.classList.contains('word')) {
				$parent.querySelector('span:first-child').classList.add('active');
			}else{
				const timer = 700;
				document.querySelector('.candle').classList.add('active');
				setTimeout(function(){
					document.querySelector('.candle>.glow').classList.add('active');
				},timer);
				setTimeout(function(){
					document.querySelector('.candle>.flame').classList.add('active');
				},timer+100)
				setTimeout(function(){
					document.querySelector('.candle>.blinking-glow').classList.add('active');
				},timer+200);
			}
		}
	});
});
