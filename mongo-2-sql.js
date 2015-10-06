/* jshint node:true */
'use strict';

var translation = {
	$gt: '>',
	$gte: '>=',
	$lt: '<',
	$lte: '<='
};

module.exports.convert = function(collectionName, query, fields) {
	var select = [];
	var from = [];
	var where = [];

	select.push('SELECT');
	if (!fields) {
		select.push('*');
	} else {
		select = select.concat(fields);
	}

	from.push('FROM');
	from.push(collectionName);
	where = calculateWhere(query);

	return select.join(' ') + ' ' + from.join(' ') + ' ' + where + ';';
};

var calculateWhere = function(queryObj) { // , level) {
	var result = [];

	Object.keys(queryObj).forEach(function(key) {
		var value;
		var operator, mongoOperator;

		value = queryObj[key];
		value = (typeof value === 'string') ? '"' + value + '"' : value;
		if (typeof value !== 'object') {
			operator = '=';
		} else if (value.constructor && value.constructor.name === 'Object' && Object.keys(value).length === 1) {
			mongoOperator = Object.keys(value)[0];
			operator = translation[mongoOperator];
			value = value[mongoOperator];
		}
		// if (typeof value==='object' && ){

		// }
		result.push(key + operator + value);
	});

	return 'WHERE ' + result.join(' and ');

	// if (firstLevel && isMongoOperator) {
	// 	handleMongoOperator(key, value);
	// }
	// if (firstLevel && !isMongoOperator){

	// }
	// if (is){

	// }

};