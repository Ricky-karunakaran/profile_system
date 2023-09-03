import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

function NavItem({ name, path, selected, setSelected }) {
  const router = useRouter();
  const pathName = usePathname();
  const onClickHandler = path => {
    router.push(path);
  };
  const mouseEnterHandler = path => {
    setSelected(path);
  };
  const mouseLeaveHandler = () => {
    setSelected(pathName);
  };
  return (
    <div className="nav-item">
      <span
        className={
          selected === path ? 'nav-link nav-link-selected' : 'nav-link'
        }
        onClick={event => {
          onClickHandler(path);
        }}
        onMouseEnter={event => {
          mouseEnterHandler(path);
        }}
        onMouseLeave={event => {
          mouseLeaveHandler();
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default NavItem;
