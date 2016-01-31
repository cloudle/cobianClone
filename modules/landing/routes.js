import LandingSite from './client/landing';
import Home from './client/screen/home';

FlowRouter.route('/', {
	action() {
		ReactLayout.render(LandingSite, {
			children: <Home />
		});
	}
});