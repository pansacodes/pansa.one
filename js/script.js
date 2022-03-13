function callElement(pass) {
	return document.getElementById(pass);
}
function changeText() {
	callElement('readmore').style.display = `none`;
	callElement('subheading').innerHTML +=
		" I enjoy creating things that live on the internet websites apps & anything in between. I've managed to gain a decent amount of experience and valuable knowledge from different kinds of projects. I'm fueled by coffee & driven by the lyrical magic of music";
}
function copyText() {
	navigator.clipboard.writeText('sauravppandey@gmail.com');
}
// var gradientwidth=document.getElementById("content").offsetWidth().width
// console.log(gradientwidth)


// awesome code starts here
function jagMag() {
	var firstCard = callElement('cosmos');
	var secondCard = callElement('offers');
	var thirdCard = callElement('tr');
	var fourthCard = callElement('wishlist');
	var fifthCard = callElement('vernacular');

	function callAllElements(a, b, c, d, e) {
		return [
			(callElement('cosmos').style.opacity = a),
			(callElement('offers').style.opacity = b),
			(callElement('tr').style.opacity = c),
			(callElement('wishlist').style.opacity = d),
			(callElement('vernacular').style.opacity = e),
		];
	}

	function callingCards(cardName, a, b, c, d, e, imgRoute) {
		cardName.addEventListener('mouseenter', function (event) {
			callAllElements(a, b, c, d, e);
			callElement('supporting-image').src = `${imgRoute}`;
			callElement('supporting-image').style.opacity = 1;
			callElement('supporting-image').style.transition = 'all 2s';
			cardName.style.transition = 'all 0.4s';
		});
		cardName.addEventListener('mouseleave', function (event) {
			callAllElements(1, 1, 1, 1, 1);
			callElement('supporting-image').style.opacity = 0;
			callElement('supporting-image').style.transition = 'all 2s';
			callElement('supporting-image').src = ``; //path left empty
			cardName.style.transition = 'all 0.4s';
		});
	}
	var firstCard = callElement('cosmos');
	var secondCard = callElement('offers');
	var thirdCard = callElement('tr');
	var fourthCard = callElement('wishlist');
	var fifthCard = callElement('vernacular');

	callingCards(firstCard, 1, 0.5, 0.5, 0.5, 0.5, './resources/projects/Cosmos.png');
	callingCards(secondCard, 0.5, 1, 0.5, 0.5, 0.5, './resources/projects/Offers.png');
	callingCards(thirdCard, 0.5, 0.5, 1, 0.5, 0.5, './resources/projects/TR.png');
	callingCards(fourthCard, 0.5, 0.5, 0.5, 1, 0.5, './resources/projects/Wishlist.png');
	callingCards(fifthCard, 0.5, 0.5, 0.5, 0.5, 1, './resources/projects/Vernac.png');
}

if (screen.width > '800') {
	jagMag();
}

function startLoader() {
	document.getElementById('loader').style.display = 'none';
}

//gaand faad code starts here

// var headerHeight = document.getElementById('header-wrapper').offsetHeight;
// var contentTop = document.getElementById('header-wrapper').offsetTop;
// var workTop = document.getElementById('work-wrapper').offsetTop;
// var footerHeight = document.getElementById('footer-wrapper').offsetHeight;
// var workHeight = document.getElementById('work-wrapper').offsetHeight;
// var workPadding = workTop - (headerHeight + contentTop);
// var workWrapperHeight = screen.height - (headerHeight + contentTop + footerHeight);

// if (workWrapperHeight > workHeight) {
// 	var spacer = (workWrapperHeight - workHeight) / 3;
// 	var spacerBottom = spacer + footerHeight;
// 	var spacerpx = spacer.toString();
// 	var spacerpx = spacerpx + 'px';
// 	var spacerpxBottom = spacerBottom.toString();
// 	var spacerpxBottom = spacerpxBottom + 'px';
// 	var spacerpx = (document.getElementById('work-wrapper').style.marginTop = spacerpx);
// 	document.getElementById('work-wrapper').style.marginBottom = spacerpxBottom;
// } else {
// 	var paddingBottomSet = footerHeight + 50;
// 	var paddingBottomSet = paddingBottomSet.toString();
// 	var paddingBottomSet = paddingBottomSet + 'px';
// 	document.getElementById('work-wrapper').style.marginTop = '0';
// 	document.getElementById('work-wrapper').style.paddingTop = '50px';
// 	document.getElementById('work-wrapper').style.paddingBottom = paddingBottomSet;
// }
