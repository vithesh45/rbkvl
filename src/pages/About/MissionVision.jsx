import "../../styles/pages.css";

export default function MissionVision() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/Vision_and_Mission_min.png"
          alt="Mission and Vision"
        />
      </div>

      <div className="about-container">
        <h1>Mission & Vision</h1>

        {/* Mission */}
        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            Ballari Milk Union is committed to the socio-economic development of
            its member milk producers. We aim to achieve this by adopting
            advanced technology to make dairying a profitable business, through
            dedicated workmanship to provide the best services to our members
            and consumers. Our ultimate goal is to achieve the best position in
            the country.
          </p>
        </div>

        {/* Values */}
        <div className="about-block">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Honesty</li>
            <li>Discipline / Timeliness</li>
            <li>Quality</li>
            <li>Trust</li>
            <li>Impartiality</li>
            <li>Savings</li>
            <li>Transparency</li>
          </ul>

          <p className="about-note">
            These core values guide our operations and interactions with all
            stakeholders, ensuring that we maintain the highest standards of
            integrity and service in all our endeavors.
          </p>
        </div>
      </div>

    </section>
  );
}
