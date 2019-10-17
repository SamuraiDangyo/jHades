/**
* jHades, a minimalist JavaScript library
* Copyright (C) 2019 Toni Helminen ( kalleankka1 (at) gmail.com )
*
* jHades is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* jHades is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
**/

// Credits: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
//          https://davidwalsh.name/javascript-tricks

var jHades = {

	//
	// Constants
	//
	
	NAME:    "jHades",
	VERSION: "0.21",
	
	POUND:  +2.20462262, // kg
	FEET:   +0.3048,     // meters
	MILE:   +1.609344,   // kilometers
	KELVIN: +273.15,     // +celsius
	
	//
	// Utilities
	//
	
	v: n => `${jHades.NAME} v${jHades.VERSION}`,
	p: console.log,
	toInt: Math.floor,
	string2Number: s => {return +s;},
	number2String: n => {return n + "";},
	isNumeric: n => ! isNaN(parseFloat(n)) && isFinite(n),
	isArray: o => Object.prototype.toString.call(o) === '[object Array]',
	maxInNumbers: numbers => Math.max.apply(Math, numbers),
	minInNumbers: numbers => Math.min.apply(Math, numbers),
	randomElement: array => array[jHades.toInt(Math.random() * array.length)],
	generateRandomAlphaNum: len => {let s = ""; len = Math.max(1, len); for (; s.length < len; s += Math.random().toString(36).substr(2)); return s.substr(0, len);},
	escapeHTML: text => {var rep = {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"}; return text.replace(/[<>&"]/g, c => rep[c]);},
	uniqueArray: array => {return [...new Set(array)];},
	shuffleArray: a => {for (let i = a.length - 1; i > 0; i--) {const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]];} return a;},

	//
	// Math
	//
	
	pow2: x => x * x,
	pow3: x => x * x * x,
	squares: nums => nums.map(v => v * v),
	random1: a => a * Math.random(),
	random: (a, b, toint = false) => {if (b < a) return jHades.random(b, a, toint); let t = a + jHades.random1(b - a); return toint ?  jHades.toInt(t) : t;},
	
	//
	// QuerySelector
	//
	
	query: s => document.querySelectorAll(s),
	
	//
	// Converters
	//
	
	bmi: (height, weigth) => weigth / jHades.pow2(height),
	bmiImperial: (height, weigth) => jHades.bmi(height * jHades.FEET, weigth / jHades.POUND),
	
	kg2Pounds: kg => kg * jHades.POUND,
	pounds2Kg: lbs => lbs / jHades.POUND,
	meters2Feet: meters => meters / jHades.FEET,
	feet2Meters: feet => feet * jHades.FEET,
	
	miles2Kilometers: miles => miles * 1.609344,
	kilometers2Miles: km => km / 1.609344,
	fahrenheit2Celsius: fahr => (fahr - 32) / 1.8,
	fahrenheit2Kelvin: fahr => (fahr - 32) / 1.8 + 273.15,
	celsius2Fahrenheit: cel => (cel * 1.8) + 32,
	celsius2Kelvin: cel => cel + 273.15,
	kelvin2Fahrenheit: kelvin => (kelvin - 273.15) * 1.8 + 32,
	kelvin2Celsius: kelvin => kelvin - 273.15,
	
	mph2Kph: mph => mph * 1.609344,
	mph2Knots: mph => mph / 1.150779,
	mph2Mach: mph => mph / 761.207,
	
	kph2Mph: kph => kph / 1.609344,
	kph2Knots: kph => kph / 1.852,
	kph2Mach: kph => kph / 1225.044,
	
	knots2Mph: knots => knots * 1.150779,
	knots2Kph: knots => knots * 1.852,
	knots2Mach: knots => knots / 661.4708,
	
	mach2Mph: mach => mach * 761.207,
	mach2Knots: mach => mach * 1225.044,
	mach2Knots: mach => mach * 661.4708,
	
	meters2Feet: m => m * 3.2808,
	meters2Inches: m => m * 39.370
};
