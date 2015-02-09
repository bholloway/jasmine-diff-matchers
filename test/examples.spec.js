var fs = require('fs');
var path = require('path');
var helper = require('./helper/jasmineHelper');

describe('Jasmine diff matcher integration test', function () {
    var cwd = path.resolve(__dirname, '..');

    it('should result in the expected stdout for diffLines', function (done) {
        var expectedFilePath = path.join(__dirname, 'expected', 'diffLines.stdout');
        var expectedContent = fs.readFileSync(expectedFilePath, 'utf8');

        helper.runJasmineQ(['./example/diffLines.spec.js', '--noStack'], cwd)
            .then(function (result) {
                expectedContent = helper.removeFinishedLine(expectedContent);
                //fs.writeFileSync(expectedFilePath, result.stdout, 'utf8');
                result.stdout = helper.removeFinishedLine(result.stdout);

                expect(result.stdout).toBe(expectedContent);

                done();
            });
    });

    it('should result in the expected stdout for diffChars', function (done) {
        var expectedFilePath = path.join(__dirname, 'expected', 'diffChars.stdout');
        var expectedContent = fs.readFileSync(expectedFilePath, 'utf8');

        helper.runJasmineQ(['./example/diffChars.spec.js', '--noStack'], cwd)
            .then(function (result) {
                expectedContent = helper.removeFinishedLine(expectedContent);
                //fs.writeFileSync(expectedFilePath, result.stdout, 'utf8');
                result.stdout = helper.removeFinishedLine(result.stdout);

                expect(result.stdout).toBe(expectedContent);

                done();
            });
    });

    it('should result in the expected stdout for diffPatch', function (done) {
        var expectedFilePath = path.join(__dirname, 'expected', 'diffPatch.stdout');
        var expectedContent = fs.readFileSync(expectedFilePath, 'utf8');

        helper.runJasmineQ(['./example/diffPatch.spec.js', '--noStack'], cwd)
            .then(function (result) {
                expectedContent = helper.removeFinishedLine(expectedContent);
                //fs.writeFileSync(expectedFilePath, result.stdout, 'utf8');
                result.stdout = helper.removeFinishedLine(result.stdout);

                expect(result.stdout).toBe(expectedContent);

                done();
            });
    });

});