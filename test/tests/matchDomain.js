/* @flow */

import { assert } from 'chai';
import { matchDomain } from 'src/index';
import { describe, it } from 'mocha';

describe('match domain', () => {
    describe('returns true when', () => {
        it('domain is array of regex and origin is array of regex', () => {
            assert.isTrue(matchDomain([/^http\:\/\/domain$/], [/^http\:\/\/domain$/]));
        });

        it('domain is a string and origin is a string', () => {
            assert.isTrue(matchDomain(['http://domain'], 'http://domain'));
        });

        it('domain is array of regex and origin is a string', () => {
            assert.isTrue(matchDomain([/^http\:\/\/domain$/], 'http://domain'));
        });

        it('domain is regex and origin is a string', () => {
            assert.isTrue(matchDomain(/^http\:\/\/domain$/, 'http://domain'));
        });

        it('domain is array with a wildcard and origin is a string', () => {
            assert.isTrue(matchDomain(['*'], 'http://domain'));
        });

        it('domain is array of strings and origin is a string', () => {
            assert.isTrue(matchDomain(['http://domain'], 'http://domain'));
        });

    });
});
