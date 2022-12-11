import MainPage from '../components/pages/MainPage/MainPage';
import AboutPage from '../components/pages/AboutPage/AboutPage';
import TestPage from '../components/pages/TestPage/TestPage';
import TestsPage from '../components/pages/TestsPage/TestsPage';
import NamePage from '../components/pages/NamePage/NamePage';
import BookmarksPage from '../components/pages/BookmarksPage/BookmarksPage';
import UnavailablePage from '../components/pages/UnavailablePage/UnavailablePage';

export const routes = [
    {path: '/', component: <MainPage/>},
    {path: '/bookmarks', component: <BookmarksPage/>},
    {path: '/name/:nameId', component: <NamePage/>},
    {path: '/tests', component: <TestsPage/>},
    {path: '/test/:testId', component: <TestPage/>},
    {path: '/about', component: <AboutPage/>},
    {path: '/unavailable', component: <UnavailablePage/>},
];
