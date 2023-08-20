let heights = document.querySelectorAll('.hash');
let min = 10000
for (let i = 0; i < heights.length; i++) {
	if (heights[i].offsetHeight < min) {
		min = heights[i].offsetHeight
	}

}
let biggerHeights=[]
for (let i = 0; i < heights.length; i++) {
	if (heights[i].offsetHeight > min) {
		biggerHeights.push(heights[i].offsetHeight)
	}

}
console.log(biggerHeights);
console.log(heights);
console.log(biggerHeights);