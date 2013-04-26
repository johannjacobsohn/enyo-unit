describe('The App', function () {
	it('has its title set to "Hello World"', function () {
		expect(app.$.toolbar.content).to.be('Hello World');
	});
});
describe('The "Tab me" button', function () {
	it('adds "The button was tapped." when tabbed', function(){
		app[app.$.button.ontap]();
		expect(app.$.main.content).to.be('The button was tapped.<br/>');
	});
});
