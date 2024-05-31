
function Gallery({ items }) {
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery-title">Our Services</h2>
                <p className="gallery-content">
                    At Tech Solutions, we provide a wide range of digital services designed to meet your business needs. From web development to digital marketing, our team has the expertise to help you succeed.
                </p>
                <div className="gallery-images">
                    {items.map((item, index) => (
                        <div className="card" key={index}>
                            <img className="gallery-image" src={item.url} alt={item.alt} />
                            <p className="gallery-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
