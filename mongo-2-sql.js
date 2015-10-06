/* jshint node:true */
'use strict';

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

		value = queryObj[key];
		value = (typeof value === 'string') ? '"' + value + '"' : value;
		// if (typeof value==='object' && value.constructor && value.constructor.name==='Object'){

		// }
		result.push(key + '=' + value);
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