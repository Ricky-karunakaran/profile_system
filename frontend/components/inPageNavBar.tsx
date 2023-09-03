import { useEffect, useState } from 'react';

function InPageNavBar({ navItems, selected, setSelected }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.in-page-nav-item-container');
      if (navBar.getBoundingClientRect().top <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsFixed]);
  return (
    <>
      <div className={`in-page-nav-item-container ${isFixed ? 'fixed' : ''}`}>
        <div className=" d-flex flex-row gap-5 p-3 justify-content-center border-bottom bg-light">
          {navItems.length > 0
            ? navItems.map((item, index) => {
                return (
                  <a
                    className={
                      selected === index
                        ? 'hoverable in-page-nav-item-selected'
                        : 'hoverable in-page-nav-item'
                    }
                    href={`${item.ref}`}
                    key={item.key}
                    onClick={() => {
                      setSelected(index);
                    }}
                  >
                    {item.name}
                  </a>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default InPageNavBar;
