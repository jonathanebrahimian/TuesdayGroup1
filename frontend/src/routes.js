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
    { path: '/login', component: LoginPage },
    { path: '/signup', component: Signup },
    { path: '/dashboard', component: Dashboard },
    { path: '/soldiers/:soldierId', component: SoldierProfile },
    { path: '/soldiers', component: Soldiers },
    { path: '/notifications', component: NotificationPage},
    { path: '/personelManagement', component: PersonnelManagement},
    
    
    { path: '/identityCheck', component: DocumentSubmission},
    { path: '/profile', component: Profile},
    { path: '/', component: Home }
]