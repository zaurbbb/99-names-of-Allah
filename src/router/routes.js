import MainPage from "../components/pages/mainPage/MainPage";
import AboutPage from "../components/pages/aboutPage/AboutPage";
import TestPage from "../components/pages/testPage/TestPage";
import TestsPage from "../components/pages/testsPage/TestsPage";
import NamePage from "../components/pages/namePage/NamePage";
import BookmarksPage from "../components/pages/bookmarksPage/BookmarksPage";

export const routes = [
    {path: '/', component: <MainPage/>},
    {path: '/bookmarks', component: <BookmarksPage/>},
    {path: '/name/:nameId', component: <NamePage/>},
    {path: '/tests', component: <TestsPage/>},
    {path: '/test/:testId', component: <TestPage/>},
    {path: '/about', component: <AboutPage/>},

];
