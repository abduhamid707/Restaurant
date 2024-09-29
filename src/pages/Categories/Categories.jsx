import React, { useState } from 'react';
import './style.scss';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Line from '../../components/Line/Line';
import cat_1_img from '../../assets/cat1.png';
import cat_2_img from '../../assets/cat2.png';

const Categories = () => {
  const [activeTab, setActiveTab] = useState('nearest'); // Default tab
  const [searchTerm, setSearchTerm] = useState(''); // Search term state
  // const [activeCat, setActiveCat] = useState(null);
  const [activeCat, setActiveCat] = useState('reyting'); // Dastlabki holatda 'cat1' active

  const handleCatClick = (cat) => {
    setActiveCat(cat);
    console.log(cat); // Faol bo'lgan cat nomini console'ga chiqaradi
  };
  const cats = ["qo'shish", "reyting", "filter"];
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


  // Kategoriya tugmasini bosganda faol holatga o'tkazish
  // const handleCatClick = (cat) => {
  //   setActiveCat(cat);
  //   console.log(cat); // Faol bo'lgan kategoriya nomini console'ga chiqaradi
  // };
  // let cats = ["cat1", 'cat2', 'cat3'];

  return (
    <section className="categories_wrapper">
      <div className="container">
        {/* Search Form */}
        <form className="form-controller mt-4">
          <input
            type="text"
            className="form-control bg-white"
            placeholder="Search for cafes..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>

        {/* Tabs */}
        <div className="categories">
          <div className="tabs">
            {cats.map((cat, index) => (
              <button
                key={index}
                className={`tab ${activeCat === cat ? 'tab active' : 'tab'}`}
                onClick={() => handleCatClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="content">
            <div className="tab-content">
              {filteredCafes.map((cafe) => (
                <React.Fragment key={cafe.id}>
                  <CategoryCard data={cafe} />
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;
