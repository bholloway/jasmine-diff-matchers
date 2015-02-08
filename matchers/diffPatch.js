/**
 * `diffPatch` .
 *
 * @example expect('one two three').diffChars('one three two');
 *
 */
var fs = require('fs'),
    path = require('path');

var diffExpect = require('../index');

module.exports = {
    diffFilePatch: function (expected) {
        if (expected === undefined) {
            console.error('diffFilePatch() is missing a required parameter to compare to.')
        }

        var result = (this.actual === expected);

        if(!result) {
            this.message = function () {
                var diffResult = '';

                var actualFilePath = path.resolve(__dirname, '..', diffExpect.basePath, this.actual);
                var expectedFilePath = path.resolve(__dirname, '..', diffExpect.basePath, expected);

                var actualContent = fs.readFileSync(actualFilePath, 'utf8') + '\n';
                var expectedContent = fs.readFileSync(expectedFilePath, 'utf8') + '\n';
                var result = actualContent === expectedContent;

                diffResult = diffExpect.diffPatch(actualContent, expectedContent);

                return diffExpect.constructDiffMessage(diffResult);
            }
        }

        return result;
    }
}