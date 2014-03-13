/**
 * Asinine Validator
 *
 * Super simple regexp validator for super simple needs
 *
 * @version: 0.1
 * @author: Timo Sandberg <warren@iki.fi>
 *
 */
var Validator = function() {
	this.validators = {};

	this.init = function() {
        this.validators = {
            username: this.factory({ pattern: /^[a-zA-Z0-9_\-]{4,16}$/, min: 4, max: 16, required: true }),
            email: this.factory({ pattern: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/, required: true, message: "Enter valid e-mail address" }),
            password: this.factory({ pattern: /^[a-zA-Z0-9_#+\-!%&?]{6,32}$/, min: 6, max: 32, required: true }),
            text: this.factory({ pattern: /^[\s\wäöÄÖÅå%&#]{3,20}$/, min: 3, max: 20, required: true }),
            number: this.factory({ pattern: /^(0|[1-9]\d{0,5})$/, min: 1, max: 6, required: true, message: "Enter an integer"})
        };
	};

    this.factory = function (opts) {
        return function (tainted) {
            if (opts.pattern.test(tainted)) {
                return true;
            } else {
                if (opts.required && tainted.length < 1) return "Required field";
                else if (opts.min && tainted.length < opts.min) return "Minimum " + opts.min + " characters";
                else if (opts.max && tainted.length > opts.max) return "Maximum " + opts.max + " characters";
                else return opts.message || "Invalid value";
            }
            return false;
        }
    };
    this.validate = function(validator, value) {
        return this.validators[validator](value);
    };
	this.add = function(opts) {
		if (opts.name && opts.pattern) {
			this.validators[opts.name] = this.factory(opts);
			return true;
		} else {
			return false;
		}
	};
	this.init();
};
