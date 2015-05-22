# html-table-to-csv

Converting HTML table to CSV file from command line.

## Installation
```sh
$ npm install node-table-to-csv
```

## Usage
```sh
var tableToCsv = require('node-table-to-csv');

htmlTable = 
	"<table>" +
	"<tr> <th>r1c1</th> <td>r1c2</td> <td>r1c3</td> </tr>" +
	"<tr> <th>r2c1</th> <td>r2c2</td> <td>r2c3</td> </tr>" +
	"<tr> <th>r3c1</th> <td>r3c2</td> <td>r3c3</td> </tr>" +
	"</table>";

csv = tableToCsv(htmlTable);

console.log(csv);let's do 
```