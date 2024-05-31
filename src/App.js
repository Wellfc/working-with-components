import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const galleryItems = [
    {
      url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
      description: 'Web Development: Creating stunning and responsive websites tailored to your needs.',
      alt: 'Web Development'
    },
    {
      url: 'https://images.unsplash.com/photo-1616077168712-fc6c788db4af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
      description: 'Mobile App Development: Innovative apps to keep your business at your customers\' fingertips.',
      alt: 'Mobile App Development'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Digital Marketing: Strategies to boost your online presence and drive traffic to your site.',
      alt: 'Digital Marketing'
    },
    {
      url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'SEO Optimization: Improving your search engine rankings to reach more customers.',
      alt: 'SEO Optimization'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <Banner
          title="Empowering Your Business Through Technology"
          text="Welcome to Tech Solutions, where we transform your digital dreams into reality. Our expert team offers cutting-edge solutions to help your business thrive in the digital age."
        />
        <Gallery items={galleryItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
