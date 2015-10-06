/* globals describe, it */
/* jshint node:true */
'use strict';

var expect = require('chai').expect;

var MongoToSql = require('../');

describe('MongoToSql', function() {

	it('should convert a query', function() {


		var data = [{ // without operators
			mongo: {
				collection: 'coll1',
				query: {
					title: 'Hello world',
					text: 'This is the text',
					page: 0
				}
			},
			sql: 'SELECT * FROM coll1 WHERE title="Hello world" and text="This is the text" and page=0;'
		}];

		data.forEach(function(el) {
			var input, expectedOutput, currentOutput;

			input = el.mongo;
			expectedOutput = el.sql;

			currentOutput = MongoToSql.convert(input.collection, input.query);

			expect(currentOutput).to.be.eql(expectedOutput);


		});



	});
});