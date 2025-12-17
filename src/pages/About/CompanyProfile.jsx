import "../../styles/pages.css";

export default function CompanyProfile() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/assets/about/company-profile.jpg"
          alt="Company Profile"
        />
      </div>

      <div className="about-container">
        <h1>Company Profile</h1>

        <div className="about-block">
          <p>
            Under the World Bank aided Karnataka Dairy Development Projects, the
            activities on Dairy Development were taken up in the year 1975. The
            Mysore District Co-operative Milk Producers Societies Union Ltd was
            registered on 23.11.1976, having the jurisdiction extended to the
            entire Mysore District and Five Taluks of Mandya District. The Union
            undertook the work of organization of Milk Co-operatives in
            &apos;AMUL Pattern&apos; with the main objective of socio-economic
            reformation of the farmers in the rural areas through Dairying as
            main subsidiary occupation.
          </p>

          <p>
            Later, the Union was bifurcated into Mysore and Mandya District
            Co-Operative Milk Producers Societies Union Ltd from 01.04.1987.
            Consequent to the bifurcation of Mysore District into Mysore and
            Chamarajanagar Districts, this Union was renamed as
            Mysore-Chamarajanagar District Coop Milk Producers Societies Union
            Ltd.
          </p>

          <p>
            From April 2015, further bifurcation occurred, separating the
            Mysore-Chamarajanagar district milk union into Mysore milk union and
            Chamarajanagar milk union. This marked a significant milestone in
            our organizational structure, allowing for more focused operations
            in each district.
          </p>

          <p>
            Today, we are proud to announce that a new Mega dairy plant has been
            installed with a capacity of 6 LLPD (Lakh Liters Per Day),
            expandable to 8 LLPD, at Alanahally, Mysore. This state-of-the-art
            facility represents our commitment to growth, modernization, and
            meeting the increasing demand for high-quality dairy products in
            our region.
          </p>
        </div>
      </div>

    </section>
  );
}
