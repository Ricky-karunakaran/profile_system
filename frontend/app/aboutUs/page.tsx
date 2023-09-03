'use client';
import InPageNavBar from '@/components/inPageNavBar';
import PageTitle from '@/components/pageTitle';
import { Fragment, useState } from 'react';
import Contact from '@/models/contact';
export default function Page({ params }) {
  const navItems = [
    { name: 'About Us', ref: '#about-us', key: 'about-us' },
    { name: 'Vision', ref: '#vision', key: 'vision' },
    { name: 'Mission', ref: '#mission', key: 'mission' },
    { name: 'Contact', ref: '#contact', key: 'contact' },
  ];

  const contacts = [
    new Contact({
      name: 'facebook',
      ref: { type: 'url', value: 'http://www.facebook.com' },
      info: 'Lastest infomation regarding the organization',
    }),
    new Contact({
      name: 'Support Service',
      ref: { type: 'email', value: 'ricky.k@graduate.utm.my' },
      info: 'Provide technical support to customer',
    }),
    new Contact({
      name: 'Inquiry',
      ref: { type: 'email', value: 'ricky.k@graduate.utm.my' },
      info: 'Provide support to any customer inquiry',
    }),
  ];
  const [selected, setSelected] = useState(0);

  return (
    <Fragment>
      <PageTitle title={'About Us'}></PageTitle>
      <InPageNavBar
        navItems={navItems}
        selected={selected}
        setSelected={setSelected}
      ></InPageNavBar>

      <div className="d-flex flex-wrap justify-content-start px-5  mt-5 gap-0 ">
        <div className="about-us-container" id={'about-us'}>
          <div className="about-us-title">About Us</div>
          <div className="about-us-content">
            Our company is dedicated to delivering exceptional products and
            services to meet the unique needs of our customers. With years of
            experience in the industry, we have built a reputation for
            excellence and innovation. Our team of experts is committed to
            providing top-notch solutions and exceeding customer expectations.
            We take pride in our commitment to quality, customer satisfaction,
            and our drive to continuously improve and adapt to the ever-changing
            market. Thank you for choosing us as your trusted partner in
            achieving your goals and objectives.
          </div>
        </div>
        <div className="vision-container" id={'vision'}>
          <div className="vision-title">Vision</div>
          <div className="vision-content">
            To accelerate the world’s transition to sustainable energy
          </div>
        </div>
        <div className="mission-container" id={'mission'}>
          <div className="mission-title">Mission</div>
          <div className="mission-content">
            Our mission is to empower every person and every organization on the
            planet to achieve more.
          </div>
        </div>
        <div className="contact-container" id={'contact'}>
          <div className="contact-title">Contact Us</div>
          <div className="d-flex mt-5 justify-content-between">
            {contacts.map(contact => {
              return (
                <div className="contact-item-container" key={contact.name}>
                  <span className="contact-item-name">{contact.name}</span>
                  {contact.ref.type == 'url' ? (
                    <a
                      className="contact-item-url"
                      onClick={() => {
                        window.location.href = contact.ref.value;
                      }}
                    >
                      VISIT
                    </a>
                  ) : (
                    <span className="contact-item-email">
                      {contact.ref.value}
                    </span>
                  )}
                  <span className="contact-item-info">{contact.info}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
