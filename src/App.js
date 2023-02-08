import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import CareersLayout from "./layouts/CareersLayout";
import ContactLayout from "./layouts/ContactLayout";
// import Navbar from "./components.js/Navbar";
import RootLayout from "./layouts/RootLayout";
import About from "./screens/About";
import CareerDetail, { jobDetailLoader } from "./screens/CareerDetail";
import CareerError from "./screens/CareerError";
import Careers, {careerLoader} from "./screens/Careers";
import Home from "./screens/Home";
import Mail from "./screens/Mail";
import PageNotFound from "./screens/PageNotFound";
import Phone from "./screens/Phone";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/> 
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<ContactLayout/>}>
          <Route path='mail' element={<Mail/>}/>
          <Route path='phone' element={<Phone/>}/>
      </Route>
      <Route path='careers' element={<CareersLayout/>}>
        <Route index element={<Careers/>} loader={careerLoader} errorElement={<CareerError/>}/> 
        <Route path=':id' element={<CareerDetail/>} loader={jobDetailLoader} errorElement={<CareerError/>}/> 
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
