var testrunner = require("./testrunner");
var assert = testrunner.assert;

require("../tests/include");
require("../tests/rudimentary");

testrunner.groupEnd();
testrunner.exit();
