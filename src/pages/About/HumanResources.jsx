import "../../styles/pages.css";

export default function HumanResources() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/assets/about/human-resources.jpg"
          alt="Human Resources Department"
        />
      </div>

      <div className="about-container">
        <h1>HR Department</h1>

        {/* Objectives */}
        <div className="about-block">
          <h2>Objectives</h2>
          <p>
            The main objective of the personnel / HR Department is to achieve
            the goals of the organization. To achieve these goals, it must be
            ensured that human resources are effectively utilized. The
            personnel Administration creates a soothing environment for the
            employees to secure their integration so that they may feel a sense
            of involvement, commitment and loyalty to the organization.
          </p>
        </div>

        {/* Main Functions */}
        <div className="about-block">
          <h2>Main Functions of the HR Department</h2>
          <ul className="values-list">
            <li>
              To achieve and maintain good human relationships within the
              organization (Union).
            </li>
            <li>
              Enable each person to make their maximum personal contribution
              to the effective working of the union.
            </li>
            <li>
              Welfare aspects (Provide canteen, uniforms, health Insurance and
              other basic amenities).
            </li>
            <li>
              Personnel aspects (recruitment, placement, remuneration,
              promotion and Incentives).
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}
