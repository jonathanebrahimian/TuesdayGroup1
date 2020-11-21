import { LoginPage } from './components/LoginPage';
import { Signup } from './components/Signup';
import { InformationRequest } from './components/InformationRequest';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { DocumentSubmission } from './components/DocumentSubmission';
import { Soldiers } from './components/Soldiers';
import { NotificationPage } from './components/NotificationPage';
import { SoldierProfile } from './components/SoldierProfile';
import { PersonnelManagement } from './components/PersonnelManagement';

export const ROUTES = [
    { path: '/login', component: LoginPage},
    { path: '/signup', component: Signup },
    { path: '/soldiers/:soldierId', component: SoldierProfile },
    { path: '/soldiers', component: Soldiers },
    { path: '/notifications', component: NotificationPage},
    { path: '/personnelManagement', component: PersonnelManagement},
    
    { path: '/identityCheck', component: DocumentSubmission},
    { path: '/profile', component: Profile},
<<<<<<< HEAD
=======

>>>>>>> 1a60039010bca8dc0f92b1b3a53a660179bc9f01
    { path: '/', component: Home }
]