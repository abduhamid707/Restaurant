import React, { useState } from 'react';
import './style.scss';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Line from '../../components/Line/Line';
import cat_1_img from '../../assets/cat1.png';
import cat_2_img from '../../assets/cat2.png';

const Categories = () => {
  const [activeTab, setActiveTab] = useState('nearest'); // Default tab
  const [searchTerm, setSearchTerm] = useState(''); // Search term state

  // Handle Tab Change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle Search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Cafes data
  const cafesData = [
    {
      id: 1,
      name: 'Cafe 1',
      images: [cat_1_img, cat_2_img, cat_1_img, cat_2_img],
      address: 'Navoiy shahar, I. Karimov ko‘chasi, 103a-13',
      workHours: '09:00 - 22:00 (Mon-Sun)',
      rating: 4.8, // Rating for top-rated filtering
    },
    {
      id: 2,
      name: 'Cafe 2',
      images: [cat_2_img, cat_1_img, cat_2_img, cat_1_img],
      address: 'Navoiy shahar, I. Karimov ko‘chasi, 104b-9',
      workHours: '10:00 - 23:00 (Mon-Sun)',
      rating: 4.2, // Rating for top-rated filtering
    },
    // Add more cafes here
  ];

  // Filter cafes based on search term
  const filteredCafes = cafesData.filter((cafe) =>
    cafe.name.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="categories_wrapper">
      <div className="container">
        {/* Search Form */}
        <form className="form-controller mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for cafes..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>

        {/* Tabs */}
        <div className="categories">
          <div className="tabs">
            <button
              className={activeTab === 'nearest' ? 'tab active' : 'tab'}
              onClick={() => handleTabChange('nearest')}
            >
              Eng yaqinlari
            </button>
            <button
              className={activeTab === 'top-rated' ? 'tab active' : 'tab'}
              onClick={() => handleTabChange('top-rated')}
            >
              Reytingi yuqorilari
            </button>
          </div>

          {/* Tab Content */}
          <div className="content">
            {activeTab === 'nearest' && (
              <div className="tab-content">
                {/* Eng yaqinlari (nearest) content */}
                {filteredCafes.map((cafe) => (
                  <React.Fragment key={cafe.id}>
                    <CategoryCard data={cafe} />
                    <Line /> {/* Line after each CategoryCard */}
                  </React.Fragment>
                ))}
              </div>
            )}

            {activeTab === 'top-rated' && (
              <div className="tab-content">
                {/* Reytingi yuqorilari (top-rated) content */}
                {filteredCafes
                  .filter((cafe) => cafe.rating >= 4.5) // Filter top-rated cafes
                  .map((cafe) => (
                    <React.Fragment key={cafe.id}>
                      <CategoryCard data={cafe} />
                      <Line /> {/* Line after each CategoryCard */}
                    </React.Fragment>
                  ))}

                {/* If no top-rated cafes */}
                {filteredCafes.filter((cafe) => cafe.rating >= 4.5).length === 0 && (
                  <p>No top-rated cafes available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
