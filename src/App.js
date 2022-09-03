import { BrowserRouter as Router, Route, Switch, BrowserRouter} from "react-router-dom";
import CoursesDetalisPages from "./pages/CoursesDetailsPage";
import CoursesPages from "./pages/CoursesPage";
import GaleryPages from "./pages/GaleryPage";
import Home from "./pages/Home";
import TeachersPages from "./pages/TeachersPage";
import TeacherDetalisPages from "./pages/TeachersDetailsPage";
import NewsPagess from "./pages/NewsPage";
import NewsDetalisPages from "./pages/NewsDetailsPage";
import ContactPages from "./pages/ContactPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/gallery' exact component={GaleryPages}></Route>
          <Route path='/courses' exact component={CoursesPages}></Route>
          <Route path='/coursedetails/:id' exact component={CoursesDetalisPages} />
          <Route path='/teachers' exact component={TeachersPages}></Route>
          <Route path='/teachersdetails' exact component={TeacherDetalisPages}></Route>
          <Route path='/news' exact component={NewsPagess}></Route>
          <Route path='/newsdetails' exact component={NewsDetalisPages}></Route>
          <Route path='/contact' exact component={ContactPages} ></Route>
          <Route path='/userspage' exact component={UsersPage}></Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;