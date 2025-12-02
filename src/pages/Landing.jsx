import React from 'react';
import '../App.css';

const sections = [
  {
    id: 1,
    title: 'Tattoo Shop',
    description: 'Custom designs and artistry that lasts a lifetime.',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop',
    link: '/tattoo'
  },
  {
    id: 2,
    title: 'Jewelry',
    description: 'Exquisite handcrafted pieces for every occasion.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    link: '/jewelry'
  },
  {
    id: 3,
    title: 'Piercing Shop',
    description: 'Professional piercing services in a sterile environment.',
    image: 'https://images.unsplash.com/photo-1626015446768-d62d2e61038e?q=80&w=1976&auto=format&fit=crop',
    link: '/piercing'
  },
  {
    id: 4,
    title: 'Concept Store',
    description: 'Curated fashion and lifestyle items for the bold.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    link: '/concept'
  },
  {
    id: 5,
    title: 'Events',
    description: 'Unforgettable experiences and event organization.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    link: '/events'
  }
];

function Landing() {
  return (
    <div className="container">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className="card" 
          style={{ backgroundImage: `url(${section.image})` }}
        >
          <div className="label-collapsed">
            {section.title}
          </div>
          <div className="content">
            <h2 className="title">{section.title}</h2>
            <p className="description">{section.description}</p>
            <a href={section.link} className="btn">Enter Site</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Landing;
