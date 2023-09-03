'use client';
import { Fragment } from 'react';
import Input from './input';
import Button from './button';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import NavItem from './navItem';
import Image from 'next/image';
function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const [selected, setSelected] = useState(pathName);

  return (
    <Fragment>
      <div className="d-flex-inline w-full ">
        <nav className="navbar navbar-light bg-light p-2 d-flex ">
          <div className="flex-column">
            <div className="navbar-brand">
              <Image
                src="/images/google-logo.png"
                width={32}
                height={32}
                alt={'Logo'}
              ></Image>
              Practice Application
            </div>
          </div>
          <div className="d-flex justify-content-between gap-5 ">
            <NavItem
              name="Home"
              path="/"
              selected={selected}
              setSelected={setSelected}
            />
            <NavItem
              name="News"
              path="/news"
              selected={selected}
              setSelected={setSelected}
            />
            {/* <NavItem
              name="Product"
              path="/product"
              selected={selected}
              setSelected={setSelected}
            /> */}
            <NavItem
              name="About Us"
              path="/aboutUs"
              selected={selected}
              setSelected={setSelected}
            />

            {/* <div className="d-flex gap-5">
              <Input type="search" placeholder="Search"></Input>
              <Button className="info" text="Search"></Button>
            </div> */}
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default NavBar;
