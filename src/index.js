module.exports = function getLoveTrianglesCount(preferences = []) {
	let sumTriangles = 0;  	
	for (let i = 0; i < preferences.length; i++) {

		let isLoverBIndex = preferences[i] - 1;
		let isLoverCIndex = preferences[isLoverBIndex] - 1;
		let isLoverC = preferences[isLoverCIndex];
	
		sumTriangles = ( isLoverC == i + 1 ) ? sumTriangles + 1 : sumTriangles ;
	}	
	return sumTriangles = Math.trunc(sumTriangles / 3);
};
