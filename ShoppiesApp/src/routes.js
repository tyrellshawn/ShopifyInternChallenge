import Dashboard from 'views/Dashboard.js';
import Icons from 'views/Icons.js';
import Map from 'views/Map.js';
import Notifications from 'views/Notifications.js';
import Rtl from 'views/Rtl.js';
import TableList from 'views/TableList.js';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';
import Nominations from 'views/Nominations.js';
import Search from 'views/Search.js';
var routes = [
  {
    path: '/search',
    name: 'Search',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-zoom-split',
    component: Search,
    layout: '/admin',
  },
  {
    path: '/nominations',
    name: 'Nominations',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-trophy',
    component: Nominations,
    layout: '/admin',
  },
];

export default routes;
