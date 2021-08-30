/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout, GridGallery } from '@components';

import berlin from '@images/berlin.png';
import bogota from '@images/bogota.png';
import buenosAires from '@images/buenos-aires.png';
import laHabana from '@images/la-habana.png';
import madrid from '@images/madrid.png';
import mexico from '@images/mexico.png';
import pekin from '@images/pekin.png';
import quito from '@images/quito.png';
import sanSalvador from '@images/san-salvador.png';
import santiago from '@images/santiago.png';
import seul from '@images/seul.png';
import tirana from '@images/tirana.png';

import './home.scss';

const Home = () => {
  const { t } = useTranslation('common');
  const imageList = [
    {
      id: '1',
      src: berlin,
      alt: 'Berlin', 
      city: 'Berlin',
      country: 'Alemania',
      location: 'https://goo.gl/maps/vZc4Fw32xtpNq5qD8',
    },
    {
      id: '2',
      src: bogota,
      alt: 'Bogotá', 
      city: 'Bogotá',
      country: 'Colombia',
      location: 'https://goo.gl/maps/VswQ21oU53aw1m3H8',
    },
    {
      id: '3',
      src: buenosAires,
      alt: 'Buenos Aires', 
      city: 'Buenos Aires',
      country: 'Argentina',
      location: 'https://goo.gl/maps/cGSVwr3B8VKNkQnQ7',
    },
    {
      id: '4',
      src: laHabana,
      alt: 'La Habana', 
      city: 'La Habana',
      country: 'Cuba',
      location: 'https://goo.gl/maps/zp5P7qQuEypkruUh6',
    },
    {
      id: '5',
      src: madrid,
      alt: 'Madrid', 
      city: 'Madrid',
      country: 'España',
      location: 'https://goo.gl/maps/ghHVvAnaz1fv75x37',
    },
    {
      id: '6',
      src: mexico,
      alt: 'Mexico', 
      city: 'CDMX',
      country: 'México',
      location: 'https://goo.gl/maps/RSWAvabwZ3efdH4g7',
    },
    {
      id: '7',
      src: pekin,
      alt: 'Beijing', 
      city: 'Beijing',
      country: 'China',
      location: 'https://goo.gl/maps/QjUK4C21dpKUoYXF7',
    },
    {
      id: '8',
      src: quito,
      alt: 'Quito', 
      city: 'Quito',
      country: 'Ecuador',
      location: 'https://goo.gl/maps/bUukRFkUh4BWW7eV9',
    },
    {
      id: '9',
      src: sanSalvador,
      alt: 'San Salvador', 
      city: 'San Salvador',
      country: 'El Salvador',
      location: 'https://goo.gl/maps/bQeXuWZcocAwmJo66',
    },
    {
      id: '10',
      src: santiago,
      alt: 'Santiago', 
      city: 'Santiago',
      country: 'Chile',
      location: 'https://goo.gl/maps/1ECV7RcQSDf9ZZw7A',
    },
    {
      id: '11',
      src: seul,
      alt: 'Seúl', 
      city: 'Seúl',
      country: 'Corea del Sur',
      location: 'https://goo.gl/maps/suw5DeuSUQnk46N87',
    },
    {
      id: '12',
      src: tirana,
      alt: 'Tirana', 
      city: 'Tirana',
      country: 'Albania',
      location: 'https://goo.gl/maps/3RNw32ghHGGstw1N8',
    }
  ];

  return (
    <Layout tabTitle={t('tabs.home')}>
      <div className="main-home">
        <h2>{t('tabs.home')}</h2>
        <GridGallery images={imageList} />
      </div>
    </Layout>
  );
};

export default Home;
