/*
 * Bedlamite Validator
 *
 * Super simple regexp validator for super simple needs
 *
 * @author: Timo Sandberg <warren@iki.fi>
 *
 */
var validator = {
    factory: function (pattern, min, max, required, custom_msg) {
        return function (tainted) {
            if (pattern.test(tainted)) {
                return true;
            } else {
                if (required && tainted.length < 1) return "Required field";
                else if (min && tainted.length < min) return "Minimum " + min + " characters";
                else if (max && tainted.length > max) return "Maximum " + max + " characters";
                else return custom_msg || "Illegal characters";
            }
            return false;
        }
    },
    validate: function(validator, value) {
        validators = {
            username: this.factory(/^[a-zA-Z0-9_\-]{4,16}$/, 4, 16, true),
            email: this.factory(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/, false, false, true, "Enter valid e-mail address"),
            password: this.factory(/^[a-zA-Z0-9_#+\-!%&?]{6,32}$/, 6, 32, true),
            text: this.factory(/^[\s\wäöÄÖÅå%&#]{3,20}$/, 3, 20, true),
            number: this.factory(/^\d{1,6}$/, 1, 6, true, "Enter an integer")
        }        
        return validators[validator](value);
    }
};
