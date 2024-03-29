import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MobNav from './MobileNav';
import { ArrowDown, ArrowTail } from 'components/icons';
import styled from 'styled-components';
import Logo from '/public/assets/images/oci_logo.png';

const data = {
  site: 'OPub',
  logo: '/assets/images/oci_logo.png',
  links: [
    {
      link: 'https://assam.open-contracting.in/about',
      name: 'About Us',
    },
    {
      link: 'https://assam.open-contracting.in',
      name: 'Assam Public Procurement',
      cta: true,
    },
  ],
};

const Nav = () => {
  const router = useRouter();

  // shows and hides the submenu on hover and focus
  useEffect(() => {
    var menuItems = document.querySelectorAll('li.has-submenu');
    let timer;
    Array.prototype.forEach.call(menuItems, function (el) {
      // show on hover
      el.addEventListener('mouseover', function () {
        if (document.querySelector('.has-submenu.open')) {
          document.querySelector('.has-submenu.open').className =
            'has-submenu';
        }
        this.className = 'has-submenu open';
        clearTimeout(timer);
      });

      // remove on mouse out
      el.addEventListener('mouseout', function () {
        timer = setTimeout(function () {
          if (!el.contains(document.activeElement)) {
            if (document.querySelector('.has-submenu.open'))
              document.querySelector('.has-submenu.open').className =
                'has-submenu';
          }
        }, 500); //delay before menu hides
      });

      // check for ESC key to close submenu
      el.addEventListener('keyup', function handler(event) {
        if (event.key === 'Escape') {
          if (document.querySelector('.has-submenu.open')) {
            document.querySelector('.has-submenu.open').className =
              'has-submenu';
            el.querySelector('button').focus();
          }
        }
      });

      // hide when focus is out of submenu
      el.addEventListener('focusout', function (elm) {
        elm.preventDefault();
        setTimeout(function () {
          //setTimeout to prevent it from trigger while focus is changing
          if (!el.contains(document.activeElement)) {
            if (document.querySelector('.has-submenu.open'))
              document.querySelector('.has-submenu.open').className =
                'has-submenu';
          }
        }, 10);
      });
    });
  }, []);

  // shows and hides the submenu on button click
  function handleSubMenu(e) {
    e.preventDefault();
    const el = e.target;

    if (el.parentNode.className == 'has-submenu') {
      el.parentNode.className = 'has-submenu open';
      el.setAttribute('aria-expanded', 'true');
    } else {
      el.parentNode.className = 'has-submenu';
      el.setAttribute('aria-expanded', 'false');
    }
  }

  return (
    <>
      <Header>
        <div className="container">
          <div className={data.logo && 'header__logo'}>
            <Link href="/">
              {data.logo ? (
                <Image
                  className="logo"
                  src={Logo}
                  alt={`${data.site} logo`}
                  width={291}
                  height={40}
                  placeholder="blur"
                ></Image>
              ) : (
                <h1>{data.site || 'Opub'}</h1>
              )}
            </Link>
          </div>

          <Navlinks>
            <h2 className="sr-only">Navigation menu</h2>
            <ul>
              {data.links &&
                data.links.map((navItem: any, index: number) => (
                  <li
                    key={`menu-${index}`}
                    className={navItem.submenu && 'has-submenu'}
                  >
                    {navItem.submenu ? (
                      <>
                        <Navitem
                          onClick={(e) => handleSubMenu(e)}
                          aria-haspopup="true"
                          aria-expanded="false"
                          as="button"
                        >
                          {navItem.name} <ArrowDown width={24} height={24} />
                        </Navitem>
                        {navItem.submenu.length > 0 && (
                          <ul>
                            {navItem.submenu.map((item, num) => (
                              <li
                                key={`sub-${index}-${num}`}
                                className="submenu-item"
                              >
                                <Link href={item.link}>
                                  {item.name}
                                  <ArrowTail width={24} height={24} />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        key={`navItemDesktop-${index}`}
                        href={navItem.link}
                      >
                        <Navitem className={navItem.cta && 'cta'}>
                          {navItem.name}
                        </Navitem>
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </Navlinks>
        </div>
      </Header>
      <MobNav data={data} />
    </>
  );
};

export default Nav;

const Header = styled.header`
  background-color: var(--nav-bg);
  color: var(--text-dark-high);
  padding: 13px;

  @media (max-width: 800px) {
    display: none;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  .header__logo {
    font-size: 0;

    .logo {
      object-fit: contain;
      vertical-align: bottom;
    }
  }
`;

const Navlinks = styled.nav`
  position: relative;

  > ul {
    display: flex;
    gap: 1rem;
  }

  .has-submenu {
    position: relative;

    &.open {
      ul {
        display: block;
      }
    }
  }
`;

const Navitem = styled.div`
  padding: 12px 24px;
  color: var(--text-dark-high);
  transition: background-color 200ms ease;
  width: fit-content;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 4px;

  &.cta {
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-green);
    }
  }

  &:hover {
    background-color: var(--nav-bg-hover);
  }

  &.active {
    box-shadow: inset 0 -2px 0 0 #fff;
    font-weight: 500;

    @media (max-width: 800px) {
      box-shadow: inset 3px 0 0 0 #fff;
    }
  }

  svg {
    fill: var(--text-dark-high);
    pointer-events: none;
  }

  & + ul {
    position: absolute;
    top: 160%;
    right: 0;
    background-color: var(--nav-submenu);
    padding: 8px;
    width: max-content;
    border-radius: 4px;
    min-width: 210px;
    display: none;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-bottom: 17px solid var(--nav-submenu);
      top: -10px;
      right: 5px;
    }

    li {
      margin-top: 4px;
      transition: background-color 200ms ease;
      border-radius: 4px;

      &:first-child {
        margin-top: 0;
      }

      &:hover {
        background-color: var(--nav-submenu-hover);
      }
    }

    a {
      text-decoration: underline;
      line-height: 1.5;
      padding: 4px 8px 4px 12px;
      color: var(--text-dark-high);
      fill: var(--text-dark-high);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
