# mongo2sql

Convert a query expressed in MongoDB query language to a query expressed in SQL language.

## Why?

* you are migrating to Cassandra, you have queries expressed in Mongodb query language, and you want to convert them to Cassandra Query Language
* you are using PostgreSQL to query MongoDB, and you don't want to create SQL-queries from scratch, but you want to translate the existing ones expressed in Mongodb Query Language
* to make interoperability easier
* for fun

## Example

## Limitations

## Roadmap

* ~~simple query without operators - e.g. {text:'ciao', page:0}~~
* query with operators, but without $and, $or operators
* query including $and, $or operators
