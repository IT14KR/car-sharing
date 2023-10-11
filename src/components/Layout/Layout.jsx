import NavBar from "components/NavBar/NavBar";
import { Wrapper } from "./Layout.styled";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router";


export default function Layout() {
  return (
    <>
      <NavBar  />
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
}
