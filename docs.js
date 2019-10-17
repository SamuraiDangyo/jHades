function put(name, func, t) {$("div.container").append(`<div class="alert alert-success" role="alert">${name} -> ${eval(name)}</div>`);}

[
	"jHades.v()",
	
	"jHades.kg2Pounds(222)",
	"jHades.pounds2Kg(222)",
	"jHades.kelvin2Fahrenheit(222)",
	"jHades.kelvin2Celsius(222)",
	"jHades.celsius2Fahrenheit(222)",
	"jHades.celsius2Kelvin(222)",
	"jHades.meters2Feet(222)",
	"jHades.feet2Meters(222)",
	"jHades.fahrenheit2Celsius(222)",
	"jHades.fahrenheit2Kelvin(222)",
	
	"jHades.bmi(180/100, 80)",
	"jHades.bmiImperial(6, 200)",
	"jHades.random(1, 3)",
	"jHades.random(1, -3)",
	"jHades.random(1, 7, true)",
	"jHades.randomElement([1,2,3,4,5,7])",
	"jHades.pounds2Kg(222)",
	"jHades.isNumeric(12)",
	"jHades.isNumeric(\"..\")",
	"jHades.isArray(234)",
	"jHades.string2Number(\"234\")",
	"jHades.number2String(234)",
	"jHades.isArray([1,2,3,4,5])",
	"jHades.maxInNumbers([1,2,3,4,5])",
	"jHades.minInNumbers([1,2,3,4,5])",
	"jHades.uniqueArray([1,1,1,2,3,4,4,4,5])",
	"jHades.squares([1,2,3,4,5])",
	"jHades.generateRandomAlphaNum(7)",
	"jHades.escapeHTML('<p>lorem ipsum</p>')",
	"jHades.shuffleArray([3,4,5,6,1,2])"
].forEach((e)=>{put(e);});
// TODO add more
