var cheerio = require('cheerio'),
    fs = require('fs');

var convert = function(filePath, filePathNew) {

    var $ = cheerio.load(fs.readFileSync(filePath));

    var createMatrix = function($) {
        var matrix = [],
            i = 0;

        $("table tr").each(function() {
            console.log('- found tr #' + i);
            var j = 0;
            matrix[i] = [];

            $(this).find('th').each(function() {
                matrix[i][j] = $(this).text().trim().replace(/(\r\n|\n|\r)/gm, "");
                j++;
                return matrix;
            });

            $(this).find('td').each(function() {
                matrix[i][j] = '"' + $(this).text().trim() + '"';
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

    fs.writeFile(filePathNew, createCsv(createMatrix($)), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('- csv saved to ' + filePathNew);
    });

}

convert(process.argv[2], process.argv[3]);
