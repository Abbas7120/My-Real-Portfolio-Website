import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import {ToastContainer} from 'react-toastify'
import Projects from "./components/Projects";
import {ThreeDCardDemo}  from "./components/Projects3";


import Contact from "./components/Contact";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
        </>
      ),
    },
  ]);

  return (
    <div className="overflow-x-hidden  text-white antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8"></div>

      <RouterProvider router={router} />
      <Hero />
      <About />
      <Technologies />
      <Projects/>
 <ThreeDCardDemo/>

      <Contact />
<ToastContainer/>
    </div>
  );
};

export default App;
