require('../index').basePath = 'example';

describe('Custom matcher: diffLines diffs two blocks of text, comparing line by line.', function () {

    beforeEach(function () {
        this.addMatchers(require('../matchers/diffLines'));
    });

    it('should toEqualContents', function () {
        expect('one two three').diffLines('one three two');
    });

    it('should toEqualContents', function () {
        expect('one two three').diffLines('one two threee');
    });

    it('should toEqualFileContents', function () {
        expect('compare/cosmos.txt').diffFileLines('expected/cosmos.txt');
    });

});