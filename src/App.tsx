import "./App.css";
import Blog from "./pages/BlogPage";
import Features from "./pages/FeaturesPage";
import Landing from "./pages/LandingPage";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Pricing from "./pages/PricingPage";
import type { MenuItem } from "./components/Header/Header";
import Header from "./components/Header/Header";

const items: MenuItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "features", label: "Features", href: "/features" },
  { key: "pricing", label: "Pricing", href: "/pricing" },
  { key: "blog", label: "Blog", href: "/blog" },
  {
    key: "dribbble",
    label: "Dribbble",
    href: "https://dribbble.com",
    icon: new URL("@assets/fa-dribbble.svg", import.meta.url).href,
  },
  {
    key: "behance",
    label: "Behance",
    href: "https://behance.net",
    icon: new URL("@assets/fa-behance.svg", import.meta.url).href,
  },
];

function Layout() {
  return (
    <>
      <Header items={items} />

      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
