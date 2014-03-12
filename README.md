Asinine-validator
===================

Super simple regexp validator for super simple validation needs. It only validates what is given to it one value at a time. No fancy form validation. No DOM manipulation. No dependencies.


Built-in validators
-------------------

Some simple regexps to deal with daily needs

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

These are of course easily configurable in the source


Usage
-----

Returns either boolean true or an error message. Or false if things have gone totally cuckoo.

    // syntax:
    // validator.validate(<validator>, <value>)
    
    // real life example (with jquery)
    $('input').blur(function() {
        var valid = validator.validate($(this).data('validator'), $(this).val());
        if (valid !== true)
            console.log(valid); // error message
    });

Author
------

Timo Sandberg / <warren@iki.fi> / @timo_s4

