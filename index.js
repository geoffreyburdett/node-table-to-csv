var cheerio = require('cheerio');
var fs 	 	= require('fs');

module.exports = function(table, options) {

    var table = cheerio.load(table);

    var createMatrix = function(table) {
        var matrix = [],
            i = 0;

        table("table tr").each(function() {
            var j = 0;
            matrix[i] = [];

            table(this).find('th').each(function() {
                matrix[i][j] = table(this).text().trim().replace(/(\r\n|\n|\r)/gm, "");
                j++;
                return matrix;
            });

            table(this).find('td').each(function() {
                matrix[i][j] = '"' + table(this).text().trim() + '"';
                j++;
                return matrix;
            });

            i++;
        });

        return matrix;
    }

    function createCsv(data) {
        var csv = '';
        for (var i = 0; i < data.length; i++) {
            csv += data[i].join(',') + "\n";
        }
        return csv;
    }
    
    return createCsv(createMatrix(table));

}
