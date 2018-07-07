const passport = require('passport');

exports.login = passport.authenticate('local', {
	failureRedirect: '/?msg=login failed',
	successRedirect: '/?msg=login success'
});

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/?msg=Logout success')
}

exports.isLoggedIn = (req, res, next) => {
	if(!req.isAuthenticated()) {
		res.redirect('/?msg=You must be logged in!');
		return;
	}

	next();
}
