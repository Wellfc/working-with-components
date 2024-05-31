import Button from './Button';

function Banner({ title, text }) {
    return (
        <section className="introduction">
            <div className="container">
                <h1>{title}</h1>
                <p>{text}</p>
                <div className="buttons">
                    <Button type="primary" text="Get Started" />
                    <Button type="secondary" text="Learn More" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
