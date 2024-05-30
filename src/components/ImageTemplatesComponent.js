import React, { useState } from 'react';

const ImageTemplatesComponent = () => {
  // Define template data with categories
  const templates = [
    { id: 1, category: 'Category 1', imageUrl: 'https://i.pinimg.com/originals/d4/de/1a/d4de1a86d04a9a0d1637d18e50ee4a7c.jpg' },
    { id: 2, category: 'Category 1', imageUrl: 'https://i.pinimg.com/originals/d4/de/1a/d4de1a86d04a9a0d1637d18e50ee4a7c.jpg' },
    { id: 3, category: 'Category 2', imageUrl: 'https://i.pinimg.com/originals/d4/de/1a/d4de1a86d04a9a0d1637d18e50ee4a7c.jpg' },
    { id: 4, category: 'Category 2', imageUrl: 'https://i.pinimg.com/originals/d4/de/1a/d4de1a86d04a9a0d1637d18e50ee4a7c.jpg' },
    // Add more template objects as needed
  ];

  // Initialize state for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle image click
  const handleImageClick = (template) => {
    // Redirect to new page with image data
    window.location.href = `/image-details?id=${template.id}`;
  };

  // Filter templates based on selected category
  const filteredTemplates =
    selectedCategory === 'All'
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <section style={styles.imageTemplatesSection}>
      <h2>Choose Image Template</h2>
      <div style={styles.filterButtons}>
        <button
          style={selectedCategory === 'All' ? styles.activeButton : {}}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </button>
        {Array.from(new Set(templates.map(template => template.category))).map((category) => (
          <button
            key={category}
            style={selectedCategory === category ? styles.activeButton : {}}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={styles.templateOptions}>
        {filteredTemplates.map((template) => (
          <div key={template.id} style={styles.templateOption} onClick={() => handleImageClick(template)}>
            <img src={template.imageUrl} alt={`Template ${template.id}`} style={styles.templateImage} />
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  imageTemplatesSection: {
    marginBottom: '40px',
    margin: '0 auto',
    maxWidth: '1200px', // Set maximum width of content
    padding: '0 20px', // Add side margins
  },
  filterButtons: {
    marginBottom: '20px',
    padding:'20px'
  },
  activeButton: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  templateOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  templateOption: {
    width: 'calc(50% - 10px)', // 2 templates per row with 10px margin
    marginBottom: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  templateImage: {
    maxWidth: '100%',
    width: '100%', // Ensure images fill their container
  },
};

export default ImageTemplatesComponent;
