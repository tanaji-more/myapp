import React from 'react';

const BusinessComponent = () => {
  return (
    <div style={styles.businessContainer}>
      <header style={styles.header}>
        <h1>Business Name</h1>
      </header>
      <section style={styles.aboutSection}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor sed purus vehicula, ac fringilla libero gravida.
          Proin eu nunc et libero fermentum volutpat ac eget purus. Nam nec
          enim nec magna ultricies viverra.
        </p>
      </section>
      <section style={styles.videoSection}>
        <h2>Introduction Video</h2>
        <div style={styles.videoWrapper}>
          {/* Insert your video component here */}
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section style={styles.imageTemplatesSection}>
        {/* Include ImageTemplatesComponent here */}
      </section>
    </div>
  );
};

const styles = {
  businessContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  aboutSection: {
    marginBottom: '40px',
  },
  videoSection: {
    marginBottom: '20px', // Decreased margin here
  },
  imageTemplatesSection: {
    marginBottom: '40px',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '0.25%', /* 16:9 aspect ratio */
    overflow: 'hidden',
  },
};

export default BusinessComponent;
