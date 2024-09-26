import { Outlet, useMatch } from "react-router-dom";
import { Nav } from "../components/shared/Nav";
import { FilterBar } from "../components/shared/FilterBar";

const MainLayout = () => {
  const shouldShowFilter = useMatch("/characters");
  return (
    <main className="container mx-auto">
      <Nav />
      {shouldShowFilter && <FilterBar />}
      <Outlet />
    </main>
  );
};

export { MainLayout };
