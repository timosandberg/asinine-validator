Asinine-validator
===================

Super simple regexp validator for super simple validation needs. It only validates what is given to it one value at a time. No fancy form validation. No DOM manipulation. No dependencies.


Built-in validators
-------------------

Some simple regexps are provided out-of-the-box to deal with daily needs. See below how to add your own.

* **username**
	* /^[a-zA-Z0-9_\-]{4,16}$/
	* 4-16 characters long, only nice characters (_ and -)
* **email**
	* /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
* **password**
	* /^[a-zA-Z0-9_#+\-!%&?]{6,32}$/
	* 6-32 characters, some special character (_#+-!%&?)
* **number**
	* /^(0|[1-9]\d{0,5})$/
	* integer 0-999999
* **text**
	* /^[\s\wäöÄÖÅå%&#]{3,20}$/
	* 3-20 characters, scands and a couple of special characters (%&#)


Usage
-----

Returns either boolean true or an error message. Or false if things have gone totally cuckoo.

    // syntax:
    // validator.validate(<validator>, <value>)
    
    // real life example (with jquery)
	var validator = new Validator();

    $('input').blur(function() {
        var valid = validator.validate($(this).data('validator'), $(this).val());
        if (valid !== true)
            console.log(valid); // error message
    });

	// add new validator
	validator.add({
		name: "european_date",
		pattern: /^\d{1,2}.\d{1,2}.\d{4}$/,
		/* optional
		required: true,
		min: 10,
		max: 10,
		message: "Invalid date"
		*/
	});

Author
------

[Timo Sandberg](mailto:warren@iki.fi) / @timo_s4
