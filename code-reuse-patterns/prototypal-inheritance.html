<!doctype html>
<html lang="en">
	<head>
		<title>JavaScript Patterns</title>
		<meta charset="utf-8">
	</head>
	<body>
		<script>
			/* Title: Prototypal Inheritance
			 Description: objects inherit from other objects
			 */

			function object(o) {
				function F() {
				}

				F.prototype = o;
				return new F();
			}

			// object to inherit from
			var parent = {
				name:"Papa"
			};

			// the new object
			var child = object(parent);

			// testing
			console.log(child.name); // "Papa"


			// parent constructor
			function Person() {
				// an "own" property
				this.name = "Adam";
			}
			// a property added to the prototype
			Person.prototype.getName = function () {
				return this.name;
			};
			// create a new person
			var papa = new Person();
			// inherit
			var kid = object(papa);
			// test that both the own property
			// and the prototype property were inherited
			console.log(kid.getName()); // "Adam"


			// parent constructor
			function Person() {
				// an "own" property
				this.name = "Adam";
			}
			// a property added to the prototype
			Person.prototype.getName = function () {
				return this.name;
			};
			// inherit
			var kid = object(Person.prototype);
			console.log(typeof kid.getName); // "function", because it was in the prototype
			console.log(typeof kid.name); // "undefined", because only the prototype was inherited


			/* Addition to ECMAScript 5 */
			var child = Object.create(parent);

			var child = Object.create(parent, {
				age:{ value:2 } // ECMA5 descriptor
			});
			console.log(child.hasOwnProperty("age")); // true


			// reference
			// http://shop.oreilly.com/product/9780596806767.do
		</script>
	</body>
</html>