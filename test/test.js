
//helpers
enyo.Object.prototype.dotap = function(){ this.bubble("ontap"); }

describe('The app', function () {

	it('has its title set to "Hello World"', function () {
		expect( app.$.toolbar.content ).to.be('Hello World');
	});

});

describe('The content', function () {

	it('is empty initially', function(){
		expect( app.$.main.content ).to.be.empty()
	});

	it('reads "The button was tapped." after the "Tab me" button has been tapped', function(){
		app.$.button.dotap();
		expect( app.$.main.content ).to.be('The button was tapped.<br/>');
	});

});
