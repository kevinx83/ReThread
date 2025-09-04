import Reveal from "../components/Reveal";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <main>
      {/* --- HERO --- */}
      <section className="hero">
        <div className="orb" aria-hidden />
        <div className="container hero-inner">
          <Reveal>
            <h1>
              Re:Thread Foundation: <br />
              Giving Clothes a <span className="gradient-text">Second Life</span>
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p>
              At Re:Thread, we connect pre-loved clothing with the people who need it most in and around Vancouver, BC.
              By partnering with local hospitals, schools, and community organizations,
              we make sure every donated item finds a new home.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 10 }}>
              <a className="btn btn-primary" href="#">Donate Clothes</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="scroll-indicator-wrap">
          <div className="scroll-indicator" aria-hidden>
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path
                d="M5 9.5 L12 16.5 L19 9.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Reveal>
      </section>

      {/* --- ABOUT --- */}
      <section className="section">
        <div className="container">
          <Reveal><h2>About Re:Thread</h2></Reveal>
          <Reveal delay={60}>
            <p className="sub">
              Recent research found that Canadians disposed of nearly 500 million kilograms of textiles in a single calendar year.
              Much of this clothing could have been reused to help those in need. This is why we are
              dedicated to giving clothes a second chance. At Re:Thread, we collect donations from the local community,
              sort, and prepare them with the help of our volunteers, who deliver them directly to homeless shelters,
              rehabilitation centers, housing programs, and any institutions in need. Our goal is simple: reduce clothing waste
              while making sure the people who need it most have access to clean, quality clothing. Join us on our journey to
              build a stronger, more caring community, one hoodie at a time!
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="card hover-lift">
              <h3>The Founders</h3>
              <p>
                Re:Thread Foundation was first imagined in September 2024 by UBC students{" "}
                <a href="https://www.linkedin.com/in/kevinx83" target="_blank" rel="noopener noreferrer">
                  Kevin Xu
                </a>{" "}
                and{" "}
                <a href="https://www.linkedin.com/in/merynn-yamane-43bb8032b/" target="_blank" rel="noopener noreferrer">
                  Merynn Yamane
                </a>{" "}
                who wanted to start a club at their school dedicated to giving clothing a new-found purpose. Eventually they decided to pursue their
                vision more directly and create a non-profit. After months of doubt, planning, and more doubt,
                Re:Thread became an officially incorporated BC society on June 23rd, 2025.
              </p>

            </div>
          </Reveal>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section
        className="section"
        style={{ background: "var(--brand-50)", borderTop: "1px solid var(--brand-100)", borderBottom: "1px solid var(--brand-100)" }}
      >
        <div className="container">
          <Reveal><h2>How It Works</h2></Reveal>
          <Reveal delay={60}><p className="sub">Three simple steps to move good clothes to the people who need them.</p></Reveal>
          <div className="grid grid-3">
            <Reveal delay={0}>
              <div className="card hover-lift">
                <div className="icon" aria-hidden>🧺</div>
                <h3>Donate</h3>
                <p>Anyone can drop clean, gently used clothing at any Re:Thread bin. Find our bins by pressing the "Donate Clothes" button above.</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card hover-lift">
                <div className="icon" aria-hidden>🤝</div>
                <h3>Collect & Sort</h3>
                <p>Volunteers collect, quality-check, clean, and sort items by type.</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="card hover-lift">
                <div className="icon" aria-hidden>🏥</div>
                <h3>Redistribute</h3>
                <p>Clothing goes directly to hospitals, schools, shelters, and community organizations.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- IMPACT (kept commented for later) --- */}
      {/*
      <section className="section">
        <div className="container">
          <Reveal><h2>Our Impact</h2></Reveal>
          <Reveal delay={60}><p className="sub">Replace these placeholders with real numbers or near-term goals.</p></Reveal>
          <div className="stats">
            <Reveal delay={0}>
              <div className="stat hover-lift" role="group" aria-label="Items Rehomed">
                <Counter to={1200} suffix="+" />
                <div>Items Rehomed</div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="stat hover-lift" role="group" aria-label="Institution Partners">
                <Counter to={6} />
                <div>Institution Partners</div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="stat hover-lift" role="group" aria-label="Active Volunteers">
                <Counter to={45} />
                <div>Active Volunteers</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      */}

      {/* --- CALLS TO ACTION --- */}
      <section
        className="section"
        style={{ background: "var(--brand-50)", borderTop: "1px solid var(--brand-100)" }}
      >
        <div className="container">
          <Reveal><h2>Get Involved</h2></Reveal>
          <Reveal delay={60}><p className="sub">Pick what fits best for you. Every action helps!</p></Reveal>
          <div className="grid grid-3">
            <Reveal delay={0}>
              <div className="card hover-lift">
                <h3>Volunteer</h3>
                <p>Help with pickups, collection, sorting, and deliveries.</p>
                <a className="btn btn-secondary" href="#">Sign Up</a>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card hover-lift">
                <h3>Host a Bin</h3>
                <p>Bring a donation point to your business, school, or building.</p>
                <a className="btn btn-secondary" href="#">Apply</a>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="card hover-lift">
                <h3>Partner With Us</h3>
                <p>Organizations and institutions—let’s collaborate.</p>
                <a className="btn btn-secondary" href="#">Contact us!</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
