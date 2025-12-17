import "../../styles/pages.css";

export default function Objectives() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/about-cow-2.b8e1a0b1.png"
          alt="Objectives"
        />
      </div>

      <div className="about-container">
        <h1>Objectives</h1>

        {/* Key Objectives */}
        <div className="about-block">
          <h2>Our Key Objectives</h2>
          <ul className="values-list">
            <li>
              Providing assured and remunerative market for all the milk
              produced by the farmer members.
            </li>
            <li>
              Providing hygienic milk to urban consumers.
            </li>
            <li>
              To facilitate rural development by providing opportunities for
              self-employment along with providing opportunity for steady
              income at village level.
            </li>
            <li>
              First Aid facility at the Society level.
            </li>
            <li>
              Emergency visits to treat the animals on a nominal fee to be
              collected from the producers.
            </li>
            <li>
              Cross breeding facility through Artificial Insemination services
              at the farmers&apos; doorstep.
            </li>
            <li>
              Technical guidance and supply of root slips/seeds for Fodder
              cultivation by the members of the Co-operative Societies.
            </li>
            <li>
              Effective supervision/extension services through field executives
              of the Union.
            </li>
            <li>
              Organizing exclusive women dairy co-operatives.
            </li>
            <li>
              Implementing STEP program through Government of India Project.
            </li>
          </ul>

          <p className="about-note">
            These objectives guide our operations and ensure that we continue
            to serve both our farmer members and urban consumers while
            promoting rural development and sustainable dairy practices.
          </p>
        </div>

        {/* Main Functions */}
        <div className="about-block">
          <h2>The Main Functions of this Union</h2>
          <ul className="values-list">
            <li>
              To provide remunerative market for the milk produced by the rural
              farmers throughout the year irrespective of the quantity supplied
              by them.
            </li>
            <li>
              First Aid facility at the Society level.
            </li>
            <li>
              Emergency visits to treat the animals on a nominal fee to be
              collected from the producers.
            </li>
            <li>
              Cross breeding facility through Artificial Insemination services.
            </li>
            <li>
              Supply of balanced Cattle Feed to the farmers of the Coop
              Societies at subsidized rates.
            </li>
            <li>
              Technical guidance and supply of root slips/seeds for Fodder
              cultivation by the members of the Coop Societies.
            </li>
            <li>
              Effective supervision/extension services through field executives
              of the Union.
            </li>
            <li>
              Intensive Coop Education Programs to the Women members of the
              Dairy Coop Societies through Coop Development programed.
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}
