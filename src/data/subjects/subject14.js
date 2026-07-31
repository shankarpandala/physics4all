export const subject14 = {
  id: "fields-circuits-electromagnetism",
  number: 14,
  title: "Fields, Circuits & Electromagnetism",
  description:
    "The full A-level/H2-style treatment of electricity and magnetism: Coulomb's law and fields, capacitors, Kirchhoff's circuits, magnetic forces, Faraday's induction, and alternating current.",
  phase: 3,
  chapters: [
    {
      id: "electric-fields",
      title: "Electric Fields",
      subtitle: "Coulomb's law, field strength, potential, and charges in motion",
      sections: [
        {
          id: "coulombs-law",
          title: "Coulomb's Law: The Force Between Charges",
          content: `
<p>Every electrostatic phenomenon traces back to one experimental law. Two point charges q₁ and q₂ separated by distance r exert equal and opposite forces on each other:</p>
<p><strong>F = kq₁q₂ / r²</strong>, where k = 1/(4πε₀) ≈ 8.99 × 10⁹ N·m²/C²</p>
<p>The constant ε₀ = 8.85 × 10⁻¹² C²/(N·m²) is the <strong>permittivity of free space</strong>. Like charges repel; unlike charges attract. The inverse-square dependence should feel familiar — it is the same mathematical shape as Newton's gravity, and for the same deep reason: the influence spreads out over spheres whose area grows as r².</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>Two small spheres carry charges +2.0 μC and +3.0 μC, 5.0 cm apart. The force between them:</p>
  <p>F = (8.99 × 10⁹) × (2.0 × 10⁻⁶)(3.0 × 10⁻⁶) / (0.050)² = (8.99 × 10⁹ × 6.0 × 10⁻¹²) / (2.5 × 10⁻³) ≈ <strong>21.6 N repulsive</strong></p>
  <p>That is the weight of a 2.2 kg bag of flour — from charges you could barely generate rubbing a balloon for a minute. Electricity is <em>strong</em>.</p>
</div>
<p>How strong? Compare the electric and gravitational attraction between a proton and an electron. Both follow inverse-square laws, so the ratio is independent of distance:</p>
<ul>
  <li>F(electric) / F(gravity) = ke² / (Gmₚmₑ) ≈ <strong>2 × 10³⁹</strong></li>
</ul>
<p>Gravity only dominates the cosmos because matter is almost perfectly neutral — the positives and negatives cancel to fantastic precision. Unbalance the charge of two people by just one electron in a billion and they would repel with a force greater than the weight of the Earth.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Coulomb established the inverse-square law in 1785 with a torsion balance — a horizontal bar hanging from a fine wire, twisting under tiny electric forces. Cavendish used the same trick 13 years later to weigh the Earth.</p>
</div>
<p>For several charges, forces simply add as vectors — the principle of <strong>superposition</strong>. Every hard electrostatics problem is just Coulomb's law plus vector addition.</p>`,
        },
        {
          id: "field-strength",
          title: "E = F/q: Fields Make Forces Local",
          content: `
<p>Coulomb's law is troubling if you take it literally: charge A pushes charge B across empty space, instantly, with nothing in between. Faraday's resolution became one of the most fruitful ideas in physics. Charge A fills the space around it with an <strong>electric field</strong>; charge B then feels a force from the field <em>at its own location</em>.</p>
<p><strong>Electric field strength</strong> is defined as the force per unit positive charge:</p>
<p><strong>E = F / q</strong> — units N/C (equivalently V/m)</p>
<p>So a charge q placed in a field E feels force F = qE, in the direction of E for positive charges and opposite for negative ones. For a point charge Q, dividing Coulomb's law by the test charge gives:</p>
<p><strong>E = kQ / r²</strong></p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>The field 30 cm from a +5.0 μC charge:</p>
  <p>E = (8.99 × 10⁹ × 5.0 × 10⁻⁶) / (0.30)² ≈ <strong>5.0 × 10⁵ N/C</strong>, pointing radially outward.</p>
  <p>An electron placed there feels F = qE = (1.6 × 10⁻¹⁹)(5.0 × 10⁵) = 8.0 × 10⁻¹⁴ N — tiny, but acting on a tiny mass it produces an acceleration near 10¹⁷ m/s².</p>
</div>
<p><strong>Field lines</strong> make the invisible visible. The rules:</p>
<ul>
  <li>Lines start on positive charges and end on negative ones (or at infinity).</li>
  <li>The arrow shows the direction a positive test charge would be pushed.</li>
  <li>Line density indicates strength: crowded lines mean a strong field.</li>
  <li>Lines never cross — the field has one definite direction at each point.</li>
</ul>
<p>Between two parallel plates at different voltages the lines run straight and evenly spaced: a <strong>uniform field</strong>, the electrical analogue of gravity near Earth's surface, and the setting for most exam problems.</p>
<div class="analogy">
  <h3>Analogy: The Weather Map</h3>
  <p>A field assigns a value to every point in space, like a weather map assigns wind speed and direction everywhere. Asking "what force would a charge feel here?" is like asking "which way would a leaf blow here?" — the map answers without needing to know what threw the leaf.</p>
</div>`,
        },
        {
          id: "potential-and-pd",
          title: "Potential vs Potential Energy: A Careful Distinction",
          content: `
<p>Students lose more marks confusing these two than on almost anything else in electricity, so let's be surgical.</p>
<ul>
  <li><strong>Electric potential energy (U, in joules)</strong> belongs to a <em>charge in a field</em>: the work done bringing that particular charge from infinity to its position.</li>
  <li><strong>Electric potential (V, in volts = joules per coulomb)</strong> belongs to a <em>point in space</em>: the work per unit charge needed to bring a positive test charge there. It exists whether or not any charge is present to feel it.</li>
</ul>
<p>They connect through the charge you actually place at the point:</p>
<p><strong>U = qV</strong>, and for a point charge Q, <strong>V = kQ / r</strong></p>
<p>Note r, not r² — potential is energy-like, not force-like, and it is a <strong>scalar</strong>. Potentials from several charges simply add as numbers, with signs, no vectors required. That is why energy methods turn hard field problems into easy arithmetic.</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>Potential 0.30 m from a +5.0 μC charge: V = (8.99 × 10⁹ × 5.0 × 10⁻⁶) / 0.30 ≈ <strong>1.5 × 10⁵ V</strong>.</p>
  <p>Bringing a +2.0 μC charge to that point from far away costs U = qV = (2.0 × 10⁻⁶)(1.5 × 10⁵) = <strong>0.30 J</strong>.</p>
</div>
<p><strong>Potential difference</strong> (pd) is what voltmeters actually measure: ΔV between two points is the work per coulomb to move charge between them, W = qΔV. Only differences matter physically — the zero of potential is a bookkeeping choice (infinity for point charges, the negative terminal or earth in circuits).</p>
<div class="did-you-know">
  <h4>The electron-volt</h4>
  <p>An electron accelerated through 1 V gains energy 1 eV = 1.6 × 10⁻¹⁹ J — the natural energy currency of atomic physics. Through 500 V it gains 500 eV = 8.0 × 10⁻¹⁷ J, reaching v = √(2W/m) ≈ 1.3 × 10⁷ m/s — over 4% of the speed of light from a modest lab supply.</p>
</div>
<div class="analogy">
  <h3>Analogy: Altitude vs Effort</h3>
  <p>Potential is like altitude on a hillside: a property of the location. Potential energy is like the effort stored in hauling <em>your particular backpack</em> up there: altitude × weight. Same hill, heavier pack, more energy — U = qV.</p>
</div>`,
        },
        {
          id: "equipotentials",
          title: "Equipotentials and the Uniform Field",
          content: `
<p>Join up all the points at the same potential and you get an <strong>equipotential surface</strong> — the electrical version of a contour line on a hiking map. Around a point charge they are concentric spheres; between parallel plates they are evenly spaced planes.</p>
<p>Two properties do all the work:</p>
<ul>
  <li><strong>No work is done moving a charge along an equipotential</strong> — ΔV = 0, so W = qΔV = 0. A charge can slide along one for free, like walking around a hill at constant height.</li>
  <li><strong>Field lines cross equipotentials at right angles.</strong> If E had a component along the surface, moving along it would take work — contradiction. So the field always points "straight downhill," from high potential to low.</li>
</ul>
<p>In a uniform field, potential drops steadily with distance, giving the most-used relation in this chapter:</p>
<p><strong>E = ΔV / d</strong> (magnitude, uniform field)</p>
<p>This is why N/C and V/m are the same unit. Plates 2.0 cm apart with 500 V across them create E = 500 / 0.020 = <strong>2.5 × 10⁴ V/m</strong> everywhere between them — the crowded, evenly spaced equipotentials of a steep, constant slope.</p>
<div class="key-concept">
  <h4>Key Concept: Conductors Are Equipotentials</h4>
  <p>In equilibrium, every point of a conductor sits at the same potential. If it didn't, the potential difference would drive electrons through the metal until it did — in about 10⁻¹⁹ s. Consequences: the field inside a conductor is zero, the external field meets the surface at 90°, and a metal box shields its interior (the Faraday cage). That is why your car is a decent lightning shelter and your phone loses signal in a metal-clad lift.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Earth's atmosphere carries a fair-weather field of about 100 V/m pointing downward. Your head and toes "should" differ by ~200 V — but you are a conductor, so your body distorts the equipotentials around itself and stays at one potential. No spark, just slightly bent field lines.</p>
</div>
<p>Reading equipotential diagrams is a skill worth drilling: closely spaced equipotentials mean a strong field, widely spaced mean weak, and the field arrow always points from higher V to lower V, perpendicular to the contours.</p>`,
        },
        {
          id: "charged-particle-motion",
          title: "Charged Particles in Uniform Fields",
          content: `
<p>Here is the payoff for all those projectile problems in mechanics: an electron in a uniform electric field is <em>exactly</em> a projectile, with qE playing the role of mg.</p>
<p>A charge q of mass m in field E accelerates at:</p>
<p><strong>a = qE / m</strong>, constant in magnitude and direction</p>
<p>So the full projectile toolkit applies — constant velocity along the field-free direction, constant acceleration across it, parabolic path.</p>
<div class="key-concept">
  <h4>Worked example: electron between plates</h4>
  <p>An electron enters midway between plates 2.0 cm apart carrying 500 V, moving at 2.0 × 10⁷ m/s parallel to the plates. Plate length: 4.0 cm.</p>
  <ol>
    <li>Field: E = V/d = 500 / 0.020 = 2.5 × 10⁴ V/m.</li>
    <li>Acceleration: a = eE/m = (1.6 × 10⁻¹⁹ × 2.5 × 10⁴) / (9.11 × 10⁻³¹) ≈ 4.4 × 10¹⁵ m/s², toward the positive plate.</li>
    <li>Time between plates: t = 0.040 / (2.0 × 10⁷) = 2.0 × 10⁻⁹ s.</li>
    <li>Deflection: s = ½at² = ½ × 4.4 × 10¹⁵ × (2.0 × 10⁻⁹)² ≈ <strong>8.8 mm</strong> — nearly hitting the plate 10 mm away.</li>
  </ol>
  <p>Gravity's contribution during those 2 nanoseconds: ½gt² ≈ 2 × 10⁻¹⁷ m. Utterly negligible — which is why we ignore gravity for particles in fields.</p>
</div>
<p>Energy methods are often faster than kinematics. A charge accelerated through pd V gains kinetic energy:</p>
<p><strong>qV = ½mv²</strong></p>
<p>No need to know the field's shape or the path taken — only the potential difference between start and finish. This single equation runs electron guns, X-ray tubes, and particle accelerators.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Pre-2000s televisions were precision electron-deflection instruments: an electron gun accelerated electrons through ~20 kV, and deflection systems steered the beam across the phosphor screen, repainting the picture dozens of times per second. Oscilloscopes used exactly the parallel-plate geometry of the worked example above.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The distance between two point charges is doubled. The electrostatic force between them becomes:",
          options: [
            "Half as large",
            "Twice as large",
            "One quarter as large",
            "Unchanged",
          ],
          correctIndex: 2,
          explanation:
            "Coulomb's law is an inverse-square law: F ∝ 1/r². Doubling r multiplies the force by 1/2² = 1/4. The same geometric dilution — influence spreading over spheres of area 4πr² — underlies Newtonian gravity.",
        },
        {
          question:
            "Electric field strength at a point is defined as:",
          options: [
            "The force per unit positive charge placed at that point",
            "The energy per unit charge at that point",
            "The force on an electron at that point",
            "The potential difference across the point",
          ],
          correctIndex: 0,
          explanation:
            "E = F/q, the force per unit positive test charge, measured in N/C (equivalently V/m). Energy per unit charge is the definition of potential, not field strength — keeping these definitions distinct is essential.",
        },
        {
          question:
            "What is the key difference between electric potential and electric potential energy?",
          options: [
            "They are the same quantity in different units",
            "Potential is a vector while potential energy is a scalar",
            "Potential energy applies only to uniform fields",
            "Potential is a property of a point in space; potential energy belongs to a charge placed there",
          ],
          correctIndex: 3,
          explanation:
            "Potential V (J/C) characterizes a location — work per unit charge to bring a test charge there. Potential energy U = qV (J) belongs to a specific charge at that location. Both are scalars, which is what makes energy methods so convenient.",
        },
        {
          question:
            "A charge moves 5 cm along an equipotential surface. The work done by the electric force is:",
          options: [
            "qE × 0.05 J",
            "Zero",
            "qV, where V is the potential of the surface",
            "Impossible to determine without knowing the path",
          ],
          correctIndex: 1,
          explanation:
            "W = qΔV, and along an equipotential ΔV = 0, so no work is done. This also explains why field lines must cross equipotentials at right angles: any parallel field component would do work along the surface.",
        },
        {
          question:
            "An electron enters a uniform electric field moving perpendicular to the field lines. Its path inside the field is:",
          options: [
            "A straight line along the field",
            "A circle",
            "A parabola",
            "A helix",
          ],
          correctIndex: 2,
          explanation:
            "The electron has constant velocity across the field and constant acceleration a = eE/m along it — exactly the recipe for projectile motion. Circular paths belong to magnetic fields, where the force stays perpendicular to the velocity.",
        },
      ],
    },
    {
      id: "capacitance",
      title: "Capacitance",
      subtitle: "Storing energy in fields — capacitors, dielectrics, and RC charging",
      sections: [
        {
          id: "what-is-a-capacitor",
          title: "Capacitance: Charge Stored per Volt",
          content: `
<p>A capacitor is two conductors separated by an insulator. Connect a battery and charge flows briefly: +Q accumulates on one plate, −Q on the other, until the pd across the plates matches the battery. The capacitor now stores separated charge and — as we'll see — energy in the field between the plates.</p>
<p><strong>Capacitance</strong> measures how much charge is stored per volt:</p>
<p><strong>C = Q / V</strong> — units farads (F); 1 F = 1 C/V</p>
<p>One farad is enormous. Practical capacitors range from picofarads (10⁻¹² F) in radio circuits to millifarads in power supplies.</p>
<p>For the classic parallel-plate capacitor with plate area A and separation d:</p>
<p><strong>C = ε₀εᵣA / d</strong></p>
<p>Bigger plates store more charge at a given voltage; a smaller gap lets opposite charges pull on each other more strongly, also increasing storage. εᵣ is the relative permittivity of whatever fills the gap (1 for vacuum — more in the dielectrics section).</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>Two 10 cm × 10 cm plates, 1.0 mm apart, air-filled:</p>
  <p>C = (8.85 × 10⁻¹²)(0.010) / (0.0010) ≈ <strong>89 pF</strong></p>
  <p>Charged to 12 V it holds Q = CV ≈ 1.1 × 10⁻⁹ C. Tiny — which is why real capacitors use metal foils many metres long, rolled up with thin dielectric films, or etched microscopically porous surfaces to pack huge area into a small can.</p>
</div>
<p>Capacitors combine the opposite way to resistors:</p>
<ul>
  <li><strong>Parallel:</strong> C = C₁ + C₂ + … (plate areas effectively add)</li>
  <li><strong>Series:</strong> 1/C = 1/C₁ + 1/C₂ + … (gaps effectively add)</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The first capacitor, the Leyden jar (1745), was a glass jar with metal foil inside and out. Early experimenters discharged jars through chains of hand-holding volunteers — Jean-Antoine Nollet once jolted about 180 royal guards simultaneously for the entertainment of Louis XV. The guards all jumped at once; the physics point (charge flows through the whole circuit at once) still stands.</p>
</div>`,
        },
        {
          id: "energy-storage",
          title: "Energy in a Capacitor: Why the Half?",
          content: `
<p>Charging a capacitor takes work: each new increment of charge must be pushed onto a plate that already repels it. The total energy stored is:</p>
<p><strong>W = ½QV = ½CV² = Q² / 2C</strong></p>
<p>Where does the ½ come from? The battery moves charge Q through its own fixed voltage, doing work QV — but the <em>capacitor's</em> voltage grows from 0 to V as it charges. The first coulomb is pushed on almost for free; the last one costs the full V. On a graph of pd against charge, the stored energy is the area under the line — a triangle, ½QV. (The other half of the battery's QV is dissipated as heat in the circuit resistance: an unavoidable 50% toll for charging at constant voltage.)</p>
<div class="key-concept">
  <h4>Worked example: camera flash</h4>
  <p>A flash capacitor of 100 μF charges to 300 V:</p>
  <p>W = ½CV² = ½ × (100 × 10⁻⁶) × (300)² = <strong>4.5 J</strong></p>
  <p>Dumped through the flash tube in about 1 ms, that is a peak power near 4.5 kW — from a AA-battery-powered device. Batteries store far more energy per kilogram, but capacitors release theirs vastly faster. Energy density vs power density: the fundamental trade-off of energy storage.</p>
</div>
<p>Notice the V² dependence: doubling the voltage quadruples the energy. That is why flash units whine as they pump up to hundreds of volts, and why capacitors in discarded electronics can bite long after the power is unplugged.</p>
<div class="analogy">
  <h3>Analogy: Stretching a Spring</h3>
  <p>Charging a capacitor is like stretching a spring: the first centimetre is easy, each subsequent one is harder, and the stored energy is ½kx² — the same triangle-area factor of ½ for the same reason. C = Q/V plays the role of the spring's compliance.</p>
</div>
<div class="did-you-know">
  <h4>Where the energy lives</h4>
  <p>The energy is not "in the charges" — it resides in the electric field filling the gap, with density ½ε₀E² joules per cubic metre. This is the first solid hint that fields are physical entities that store and transport energy, an idea that becomes literal with electromagnetic waves.</p>
</div>`,
        },
        {
          id: "dielectrics",
          title: "Dielectrics: The Insulator That Helps",
          content: `
<p>Slide a slab of insulating material — glass, ceramic, plastic — between the plates and the capacitance increases by a factor εᵣ, the <strong>relative permittivity</strong> (or dielectric constant):</p>
<p><strong>C = ε₀εᵣA / d</strong></p>
<table>
  <thead>
    <tr><th>Material</th><th>εᵣ (approx.)</th></tr>
  </thead>
  <tbody>
    <tr><td>Vacuum</td><td>1 (exactly)</td></tr>
    <tr><td>Air</td><td>1.0006</td></tr>
    <tr><td>Polyethylene</td><td>2.3</td></tr>
    <tr><td>Glass</td><td>5–7</td></tr>
    <tr><td>Water</td><td>≈ 80</td></tr>
    <tr><td>Barium titanate ceramics</td><td>1,000+</td></tr>
  </tbody>
</table>
<p>Why does an insulator boost storage? The molecules of the dielectric are (or become) tiny electric dipoles. The field between the plates aligns them: positive ends swing toward the negative plate, negative ends toward the positive plate. This <strong>polarization</strong> creates an internal field opposing the applied one, so the net field — and therefore the pd for a given charge — drops. Since C = Q/V, lower V at the same Q means higher C.</p>
<div class="key-concept">
  <h4>Key Concept: Three Jobs of a Dielectric</h4>
  <p>A dielectric (1) multiplies capacitance by εᵣ, (2) physically supports the plates so the gap d can be micrometres thin, and (3) withstands a much higher field than air before sparking — air breaks down near 3 × 10⁶ V/m, polymer films at hundreds of times that. Higher breakdown field means higher working voltage, and energy scales as V².</p>
</div>
<p>A subtlety worth internalizing: if the capacitor is <em>isolated</em> (charge fixed), inserting a dielectric lowers V and lowers stored energy — the slab is actually pulled inward, doing work. If it stays <em>connected to a battery</em> (V fixed), the charge increases instead, and stored energy rises. Same slab, opposite energy change; the difference is bookkept by the battery.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Water's huge εᵣ ≈ 80 is why it dissolves salt so well: it slashes the electrostatic attraction between Na⁺ and Cl⁻ ions by nearly two orders of magnitude, letting thermal jostling pull the crystal apart. Dielectric physics is secretly chemistry.</p>
</div>`,
        },
        {
          id: "rc-charging",
          title: "RC Circuits: The Exponential Curve",
          content: `
<p>Charge a capacitor C through a resistor R and something universal happens. The instant the switch closes, the uncharged capacitor offers no opposing pd, so current starts at its maximum I₀ = V₀/R. As charge builds, the capacitor's growing voltage fights back, the pd across R shrinks, and the current — the very thing doing the charging — falls. A process that slows in proportion to how far it has left to go produces an <strong>exponential</strong>.</p>
<p>For discharge through R, current, charge, and pd all decay as:</p>
<p><strong>Q = Q₀e^(−t/RC)</strong>, V = V₀e^(−t/RC), I = I₀e^(−t/RC)</p>
<p>For charging: <strong>V = V₀(1 − e^(−t/RC))</strong> — the mirror-image rise.</p>
<p>The product <strong>τ = RC</strong> is the <strong>time constant</strong> (check the units: ohms × farads = seconds). It sets the tempo:</p>
<ul>
  <li>After t = τ: decayed to 1/e ≈ <strong>37%</strong> of the initial value (or charged to 63% of final).</li>
  <li>After 2τ: 13.5% remains. After 3τ: 5%.</li>
  <li>After 5τ: under 1% — "fully" charged or discharged for practical purposes.</li>
  <li>Half-life: t½ = RC ln 2 ≈ 0.693 RC — constant, like radioactive decay.</li>
</ul>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>A 470 μF capacitor charged to 12 V discharges through 10 kΩ:</p>
  <p>τ = RC = (10⁴)(470 × 10⁻⁶) = <strong>4.7 s</strong></p>
  <p>Voltage after 10 s: V = 12e^(−10/4.7) = 12e^(−2.13) ≈ <strong>1.4 V</strong>. Fully discharged (5τ) after about 24 s.</p>
</div>
<div class="analogy">
  <h3>Analogy: The Draining Bathtub</h3>
  <p>Water draining through a narrow pipe flows fastest when the tub is full and dribbles as the level drops — outflow proportional to remaining depth, exponential decay. R is the narrowness of the pipe, C the width of the tub.</p>
</div>
<div class="did-you-know">
  <h4>RC timing is everywhere</h4>
  <p>Windscreen-wiper intervals, camera-flash recycle times, touchscreens (your finger changes a capacitance and shifts an RC timing), heart-pacemaker pulse spacing, and the millisecond-scale charging of your neurons' membranes — each is an RC time constant doing its quiet work.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A 200 μF capacitor is charged to 6.0 V. How much charge is stored?",
          options: [
            "3.3 × 10⁻⁵ C",
            "1.2 × 10⁻³ C",
            "1.2 × 10³ C",
            "3.6 × 10⁻³ C",
          ],
          correctIndex: 1,
          explanation:
            "Q = CV = (200 × 10⁻⁶ F)(6.0 V) = 1.2 × 10⁻³ C. Capacitance is charge stored per volt, so charge is capacitance times voltage.",
        },
        {
          question:
            "The energy stored in a capacitor is ½QV rather than QV because:",
          options: [
            "Half the energy is stored on each plate",
            "The battery only delivers half its voltage to the capacitor",
            "Half the charge leaks away during charging",
            "The capacitor's pd grows from 0 to V during charging, so the average pd moved through is V/2",
          ],
          correctIndex: 3,
          explanation:
            "Early charge is pushed on against almost no opposing pd, late charge against nearly the full V; the average is V/2, giving W = ½QV — the triangular area under the V–Q graph. The 'missing' half of the battery's work is dissipated in the circuit resistance.",
        },
        {
          question:
            "Inserting a dielectric between the plates of a capacitor increases its capacitance because the dielectric:",
          options: [
            "Polarizes, creating an internal field that reduces the net field and pd for a given charge",
            "Conducts charge between the plates",
            "Increases the separation of the plates",
            "Adds extra free electrons to the plates",
          ],
          correctIndex: 0,
          explanation:
            "Molecular dipoles align with the field, partially cancelling it inside the gap. Lower net field means lower V for the same Q, and C = Q/V rises by the factor εᵣ. A dielectric is an insulator — it must not conduct.",
        },
        {
          question:
            "A capacitor discharges through a resistor with time constant τ = RC. After one time constant, the charge remaining is about:",
          options: [
            "50% of the initial charge",
            "63% of the initial charge",
            "37% of the initial charge",
            "10% of the initial charge",
          ],
          correctIndex: 2,
          explanation:
            "Q = Q₀e^(−t/RC), so at t = τ the fraction is e⁻¹ ≈ 0.37. The 63% figure is the complementary charging result: after one τ, a charging capacitor reaches 63% of its final voltage. Fifty percent is reached slightly earlier, at t = 0.693τ.",
        },
      ],
    },
    {
      id: "dc-circuits",
      title: "DC Circuits",
      subtitle: "EMF, Kirchhoff's laws, and the art of circuit analysis",
      sections: [
        {
          id: "emf-internal-resistance",
          title: "EMF and Internal Resistance: Real Batteries",
          content: `
<p><strong>Electromotive force (EMF, ε)</strong> is badly named — it is not a force but an energy: the work done per coulomb by a source in driving charge around a circuit, measured in volts. A battery's EMF comes from chemistry; a generator's from electromagnetic induction.</p>
<p>Real sources have <strong>internal resistance r</strong> — the resistance of the chemicals and electrodes inside. The battery behaves like an ideal EMF ε in series with r, so when it drives current I through an external resistance R:</p>
<p><strong>ε = I(R + r)</strong> — and the <strong>terminal pd</strong> is V = ε − Ir</p>
<p>The Ir term is the "lost volts": energy per coulomb dissipated inside the battery itself. The terminal pd equals the full EMF only when no current flows — which is why you measure EMF with a high-resistance voltmeter drawing negligible current.</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>A battery with ε = 12.0 V and r = 0.50 Ω drives a 5.5 Ω resistor.</p>
  <ol>
    <li>Current: I = ε/(R + r) = 12.0/6.0 = <strong>2.0 A</strong></li>
    <li>Terminal pd: V = ε − Ir = 12.0 − (2.0)(0.50) = <strong>11.0 V</strong></li>
    <li>Power in the load: I²R = 22 W; wasted internally: I²r = 2 W. Efficiency: 22/24 ≈ 92%.</li>
  </ol>
</div>
<p>Internal resistance explains familiar experiences:</p>
<ul>
  <li>Headlights dim when the starter motor draws hundreds of amps — the huge Ir drop drags the terminal pd down.</li>
  <li>A "dead" battery may read 1.5 V on a voltmeter but fail under load: aging chemistry has raised r, so any real current collapses the terminal pd.</li>
  <li>Batteries deliver maximum <em>power</em> to a load when R = r ("matching"), but maximum <em>efficiency</em> when R is much larger than r — you cannot have both.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A car battery's internal resistance is only a few milliohms — short its terminals with a spanner and hundreds of amps flow, easily welding the spanner in place. An EMF of just 12 V is dangerous when r is tiny. Never judge a source by its voltage alone.</p>
</div>`,
        },
        {
          id: "kirchhoffs-laws",
          title: "Kirchhoff's Two Laws: Conservation in Disguise",
          content: `
<p>Ohm's law handles one resistor. For real networks — multiple batteries, branching paths — you need Kirchhoff's two laws, which are nothing more than conservation of charge and energy dressed for circuit work.</p>
<p><strong>Kirchhoff's Current Law (KCL, junction rule):</strong> the total current flowing into any junction equals the total current flowing out.</p>
<p><strong>ΣI(in) = ΣI(out)</strong></p>
<p>Charge cannot pile up at a junction or vanish from it. If 3 A flows in and 1 A leaves by one branch, exactly 2 A leaves by the other.</p>
<p><strong>Kirchhoff's Voltage Law (KVL, loop rule):</strong> around any closed loop, the sum of EMFs equals the sum of pd drops — equivalently, the signed pd changes around a loop total zero.</p>
<p><strong>Σε = ΣIR</strong> (around any closed loop)</p>
<p>A coulomb returning to its starting point must arrive with the energy it left with; whatever the sources give, the resistors take.</p>
<div class="analogy">
  <h3>Analogy: Mountain Circuit</h3>
  <p>KVL is a hiker's rule: any closed walking loop has zero net altitude change — every climb (EMF) is repaid by descents (IR drops). KCL is a river rule: where a river forks, the flows in the branches must add up to the original flow. Nothing about electricity specifically — just conservation, always.</p>
</div>
<p>The practical method, which the next section applies in full:</p>
<ol>
  <li>Label a current in each branch and <em>guess</em> its direction with an arrow.</li>
  <li>Write KCL at junctions to relate the currents.</li>
  <li>Walk each independent loop writing KVL: an EMF counts positive if you pass − to + through the source; an IR term counts positive if you traverse the resistor in the direction of its labelled current.</li>
  <li>Solve the simultaneous equations.</li>
</ol>
<div class="key-concept">
  <h4>Key Concept: Wrong Guesses Fix Themselves</h4>
  <p>You cannot ruin a Kirchhoff problem by guessing a current direction wrongly. Stay consistent with your labels, and the algebra will hand back a negative number — the current is real, it just flows opposite to your arrow. The sign is information, not an error.</p>
</div>`,
        },
        {
          id: "two-loop-worked-example",
          title: "A Two-Loop Circuit, Solved Step by Step",
          content: `
<p>The classic exam circuit: two batteries, three resistors, two loops. A 9.0 V battery with a 1.0 Ω resistor in its branch, a 4.0 V battery with a 2.0 Ω resistor in its branch, and both branches meeting at a pair of junctions bridged by a shared 3.0 Ω resistor.</p>
<p><strong>Step 1 — Label currents.</strong> Let I₁ flow from the 9 V battery into the top junction, I₂ from the 4 V battery into the same junction, and I₃ down through the shared 3.0 Ω resistor.</p>
<p><strong>Step 2 — Junction rule (KCL):</strong></p>
<p>I₃ = I₁ + I₂</p>
<p><strong>Step 3 — Loop rule (KVL), left loop</strong> (9 V battery → 1.0 Ω → shared 3.0 Ω):</p>
<p>9.0 = 1.0·I₁ + 3.0·(I₁ + I₂)  →  <strong>9 = 4I₁ + 3I₂</strong></p>
<p><strong>Step 4 — KVL, right loop</strong> (4 V battery → 2.0 Ω → shared 3.0 Ω):</p>
<p>4.0 = 2.0·I₂ + 3.0·(I₁ + I₂)  →  <strong>4 = 3I₁ + 5I₂</strong></p>
<p><strong>Step 5 — Solve simultaneously.</strong> Multiply the first by 5 and the second by 3:</p>
<ul>
  <li>45 = 20I₁ + 15I₂</li>
  <li>12 = 9I₁ + 15I₂</li>
</ul>
<p>Subtract: 33 = 11I₁, so <strong>I₁ = 3.0 A</strong>. Back-substitute: 9 = 12 + 3I₂ gives <strong>I₂ = −1.0 A</strong>, and I₃ = 3.0 + (−1.0) = <strong>2.0 A</strong>.</p>
<p><strong>Step 6 — Interpret the minus sign.</strong> I₂ is negative: current actually flows 1.0 A <em>into</em> the 4 V battery's positive terminal. The stronger 9 V source is overpowering it and charging it — 2.0 A goes down the shared resistor and 1.0 A is forced backwards through the 4 V branch. This is exactly how a car alternator charges the battery while also running the lights.</p>
<div class="key-concept">
  <h4>Step 7 — Always verify</h4>
  <p>Check the right loop with the found values: 3.0·(3.0) + 5.0·(−1.0) = 9 − 5 = 4 ✓. And the energy audit balances: the 9 V source supplies 27 W; resistors dissipate 9 + 2 + 12 = 23 W and the 4 V battery absorbs 4 W as charging. Kirchhoff problems grade themselves — thirty seconds of checking buys certainty.</p>
</div>`,
        },
        {
          id: "resistor-networks-meters",
          title: "Resistor Networks and Real Meters",
          content: `
<p>Complex resistor tangles usually collapse through repeated use of two rules:</p>
<ul>
  <li><strong>Series:</strong> R = R₁ + R₂ + … — same current through each, pds add. Total resistance grows.</li>
  <li><strong>Parallel:</strong> 1/R = 1/R₁ + 1/R₂ + … — same pd across each, currents add. Total resistance is <em>less than the smallest branch</em>, because every extra branch is an extra path for current.</li>
</ul>
<p>Two handy shortcuts: for two resistors in parallel, R = R₁R₂/(R₁ + R₂) ("product over sum"); for n equal resistors R₀ in parallel, R = R₀/n. Work from the innermost combination outward, redrawing the circuit at each stage.</p>
<p>The <strong>potential divider</strong> deserves special mention: two resistors in series across a supply V split it in proportion to resistance:</p>
<p><strong>V(out) = V × R₂/(R₁ + R₂)</strong></p>
<p>Replace R₁ with a thermistor or light-dependent resistor and V(out) becomes a temperature or light signal — the front end of countless sensors.</p>
<div class="key-concept">
  <h4>Key Concept: Meters Disturb What They Measure</h4>
  <p>An <strong>ammeter</strong> goes in series, so it must have very <em>low</em> resistance or it would reduce the very current it reads. A <strong>voltmeter</strong> goes in parallel, so it must have very <em>high</em> resistance or it would divert current and drag down the pd it reads. The ideal ammeter is a plain wire; the ideal voltmeter is an open gap that somehow reports pd. Real digital meters come close (typically ~10 MΩ input for voltmeters).</p>
</div>
<p>Classically, one moving-coil galvanometer did both jobs: a low-resistance <strong>shunt</strong> in parallel diverted most current around it (ammeter); a high-resistance <strong>multiplier</strong> in series limited the current (voltmeter).</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Connecting an ammeter directly across a battery — a beginner's classic — puts nearly zero resistance across the terminals: a short circuit through the meter. That is why every decent multimeter has a fuse in the current range, and why lab technicians keep spares.</p>
</div>`,
        },
        {
          id: "potentiometer-wheatstone",
          title: "The Potentiometer and the Wheatstone Bridge",
          content: `
<p>Two elegant nineteenth-century instruments close the chapter, both built on one idea: <strong>measure by balancing until no current flows</strong>, so the measurement cannot disturb the circuit.</p>
<p><strong>The potentiometer</strong> is a uniform resistance wire (say 1.000 m long) carrying a steady current from a driver cell, so potential falls uniformly along it — a linear voltage ramp. To measure an unknown EMF, connect it between one end of the wire and a sliding contact via a sensitive galvanometer, and slide until the galvanometer reads exactly zero. At this <strong>balance point</strong>, the wire's pd over length L exactly matches the unknown EMF:</p>
<p><strong>ε₁/ε₂ = L₁/L₂</strong> — comparing two EMFs by comparing two lengths</p>
<p>The beauty: at balance, <em>no current is drawn from the cell being measured</em>, so there is no Ir drop and you read the true EMF — something no ordinary voltmeter can do, since a voltmeter must draw at least a little current to operate.</p>
<p><strong>The Wheatstone bridge</strong> finds an unknown resistance with the same null trick. Four resistors form a diamond: P and Q on one side, known variable S and unknown R on the other, with a galvanometer bridging the midpoints. Adjust S until the galvanometer reads zero — the two midpoints are then at equal potential, and the ratios must match:</p>
<p><strong>R/S = P/Q</strong>, so R = S × (P/Q)</p>
<div class="key-concept">
  <h4>Key Concept: Null Methods Beat Direct Ones</h4>
  <p>A direct measurement inherits every error of the meter's calibration. A null method only asks the meter to confirm <em>zero</em> — and detecting "no current" can be done with exquisite sensitivity and no calibration at all. The accuracy then rests on things you can make superbly well: uniform wire and stable resistors.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Wheatstone bridges are still everywhere. Strain gauges in bridges (the civil-engineering kind), bathroom scales, and jet-engine sensors are resistors whose value shifts minutely when stretched; a Wheatstone bridge converts that shift into a measurable off-balance voltage. The 1843 circuit lives on inside 21st-century instrumentation.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A battery of EMF 6.0 V and internal resistance 0.5 Ω delivers 2.0 A to a circuit. Its terminal pd is:",
          options: [
            "5.0 V",
            "6.0 V",
            "7.0 V",
            "4.0 V",
          ],
          correctIndex: 0,
          explanation:
            "Terminal pd V = ε − Ir = 6.0 − (2.0)(0.5) = 5.0 V. The missing 1.0 V — the 'lost volts' — is dissipated inside the battery itself. Only at zero current does the terminal pd equal the full EMF.",
        },
        {
          question:
            "Kirchhoff's junction (current) law is a direct consequence of:",
          options: [
            "Conservation of energy",
            "Ohm's law",
            "Conservation of charge",
            "Newton's third law",
          ],
          correctIndex: 2,
          explanation:
            "Charge cannot accumulate at or vanish from a junction, so current in must equal current out — conservation of charge. The loop (voltage) law is the energy-conservation counterpart: a charge returning to its start has zero net energy change.",
        },
        {
          question:
            "Solving a Kirchhoff problem, you obtain I = −1.5 A for a branch. This means:",
          options: [
            "The circuit cannot work and has no solution",
            "The current is 1.5 A but flows opposite to the direction you assumed",
            "You must repeat the algebra until the sign is positive",
            "The battery in that branch is flat",
          ],
          correctIndex: 1,
          explanation:
            "A negative result simply corrects your guessed arrow: 1.5 A flows the other way. Guessed directions can never break the method as long as you stay consistent — the sign of the answer is information, not an error.",
        },
        {
          question:
            "An ideal ammeter and an ideal voltmeter have, respectively:",
          options: [
            "High resistance; low resistance",
            "High resistance; high resistance",
            "Low resistance; low resistance",
            "Zero resistance; infinite resistance",
          ],
          correctIndex: 3,
          explanation:
            "An ammeter sits in series, so any resistance it adds reduces the current it is trying to measure — ideally zero. A voltmeter sits in parallel, so any current it draws disturbs the pd it is trying to measure — ideally infinite resistance, drawing nothing.",
        },
        {
          question:
            "A Wheatstone bridge is balanced when the galvanometer reads zero. At balance, with arms P, Q, S known and R unknown:",
          options: [
            "R = S × P/Q",
            "R = P + Q − S",
            "R = S × Q/P only if P = Q",
            "R = PQ/S",
          ],
          correctIndex: 0,
          explanation:
            "Zero galvanometer current means the bridge midpoints are at equal potential, forcing equal voltage-divider ratios on both sides: R/S = P/Q, hence R = SP/Q. The null condition makes the result independent of the supply voltage and the galvanometer's calibration.",
        },
      ],
    },
    {
      id: "magnetic-fields",
      title: "Magnetic Fields",
      subtitle: "Forces on moving charges — from F = qvB to the mass spectrometer",
      sections: [
        {
          id: "fields-of-currents",
          title: "Currents Make Magnetic Fields",
          content: `
<p>In 1820 Hans Christian Ørsted noticed a compass needle twitch beside a current-carrying wire — the first evidence that electricity and magnetism are one subject. Every magnetic field, including a bar magnet's (from atomic-scale electron currents), is made by moving charge.</p>
<p>Field strength is measured by the <strong>magnetic flux density B</strong>, in <strong>tesla (T)</strong>. One tesla is large: Earth's field is ~5 × 10⁻⁵ T, a fridge magnet ~10⁻² T, an MRI scanner 1.5–3 T.</p>
<p>Three geometries cover almost everything:</p>
<ul>
  <li><strong>Long straight wire:</strong> circular field lines wrapping the wire, weakening with distance: <strong>B = μ₀I / (2πr)</strong>. Grip the wire with your right hand, thumb along the current — your fingers curl the way the field circles.</li>
  <li><strong>Flat coil:</strong> field lines thread through the loop's face; each of N turns contributes, giving B = μ₀NI/(2r) at the centre.</li>
  <li><strong>Solenoid (long coil):</strong> a uniform field along the inside, <strong>B = μ₀nI</strong> where n is turns per metre — an electromagnet with a field you can switch off. Insert an iron core and domain alignment multiplies B a thousandfold.</li>
</ul>
<p>Here μ₀ = 4π × 10⁻⁷ T·m/A is the permeability of free space, magnetism's counterpart to ε₀.</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>Field 2.0 cm from a wire carrying 10 A: B = (4π × 10⁻⁷ × 10) / (2π × 0.020) = <strong>1.0 × 10⁻⁴ T</strong> — about twice Earth's field, which is why Ørsted's compass moved. A solenoid with 1000 turns/m at 5.0 A: B = (4π × 10⁻⁷)(1000)(5.0) ≈ <strong>6.3 mT</strong>.</p>
</div>
<div class="did-you-know">
  <h4>No magnetic charges</h4>
  <p>Electric field lines start and end on charges, but magnetic field lines always close on themselves — cut a magnet in half and you get two smaller magnets, never an isolated north pole. Despite dedicated searches, no magnetic monopole has ever been found. Magnetism is not a substance; it is a by-product of moving charge.</p>
</div>`,
        },
        {
          id: "force-on-currents",
          title: "F = BIL: The Motor Effect",
          content: `
<p>If currents create magnetic fields, Newton's third law hints that magnetic fields should push back on currents. They do. A straight wire of length L carrying current I in a field B feels:</p>
<p><strong>F = BIL sin θ</strong></p>
<p>where θ is the angle between the current and the field. Maximum force when perpendicular (θ = 90°), zero when the wire runs along the field.</p>
<p>The force direction is given by <strong>Fleming's left-hand rule</strong>: thumb, first finger, second finger held mutually at right angles — <strong>F</strong>irst finger along the <strong>F</strong>ield, se<strong>C</strong>ond finger along the <strong>C</strong>urrent, thu<strong>M</strong>b gives the <strong>M</strong>otion (force). The force is always perpendicular to both the field and the current — a strangely sideways force, unlike anything electrostatic.</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>A 20 cm wire carrying 5.0 A sits perpendicular to a 0.10 T field:</p>
  <p>F = BIL = (0.10)(5.0)(0.20) = <strong>0.10 N</strong></p>
  <p>Modest — but wind the wire into a coil of 500 turns and the forces multiply; put pairs of forces on opposite sides of a loop and you get a torque. That torque, reversed each half-turn by a commutator, is a <strong>DC motor</strong>. Every drill, fan, and electric car traces back to F = BIL.</p>
</div>
<p>This force also <em>defines</em> the units. Two parallel wires carrying current attract (currents same way) or repel (opposite ways), because each sits in the other's field. Until 2019 the ampere was defined by exactly this force between ideal parallel wires; and 1 tesla is the field in which a wire carrying 1 A experiences 1 N per metre of length.</p>
<div class="analogy">
  <h3>Analogy: Catapult Field</h3>
  <p>Sketch the combined field of a magnet and a current-carrying wire: the wire's circular field reinforces the magnet's lines on one side (crowded lines) and cancels them on the other (sparse lines). The pattern looks like a stretched catapult, and the wire is flung from the crowded side toward the sparse side — a picture worth memorizing for exams.</p>
</div>`,
        },
        {
          id: "qvb-circular-motion",
          title: "F = qvB and the Circular Dance of Charges",
          content: `
<p>A current is just moving charges, so the deeper law is the force on a single charge q moving at speed v through field B:</p>
<p><strong>F = qvB sin θ</strong> — maximum when v ⊥ B, zero for motion along B</p>
<p>Add the electric force and you have the complete <strong>Lorentz force</strong>: F = qE + qvB (the magnetic part acting perpendicular to both v and B). This one equation, with Newton's second law, governs every particle accelerator, aurora, and cathode-ray tube.</p>
<p>The magnetic force has a peculiar property: it is <em>always perpendicular to the velocity</em>. It can never speed a charge up or slow it down — it does <strong>no work</strong> — it can only change the direction of motion. A force of constant magnitude, always at right angles to motion, is precisely the recipe for <strong>uniform circular motion</strong>.</p>
<p>Setting magnetic force equal to the required centripetal force:</p>
<p>qvB = mv²/r  →  <strong>r = mv / (qB)</strong></p>
<ul>
  <li>Faster or heavier particles: bigger circles (more momentum, harder to turn).</li>
  <li>Stronger field or bigger charge: tighter circles.</li>
  <li>The period T = 2πm/(qB) is <strong>independent of speed</strong> — fast particles travel bigger circles in the same time. This "cyclotron" property makes resonant particle accelerators possible.</li>
</ul>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>An electron moving at 2.0 × 10⁷ m/s enters a 1.0 mT field at right angles:</p>
  <p>r = mv/(qB) = (9.11 × 10⁻³¹ × 2.0 × 10⁷) / (1.6 × 10⁻¹⁹ × 1.0 × 10⁻³) ≈ <strong>0.11 m</strong></p>
  <p>An 11 cm circle — easily visible in a lab "fine-beam tube," where the electron beam glows as it ionizes low-pressure gas and curls into a luminous ring.</p>
</div>
<div class="did-you-know">
  <h4>Auroras are qvB in the sky</h4>
  <p>Charged particles from the Sun spiral along Earth's magnetic field lines (circular motion around the line, free glide along it) and are funnelled toward the poles, where they crash into the atmosphere and make it glow. The aurora is a planetary-scale demonstration of r = mv/qB.</p>
</div>`,
        },
        {
          id: "mass-spectrometer",
          title: "The Velocity Selector and the Mass Spectrometer",
          content: `
<p>Since r = mv/(qB), the radius of a charge's circular path encodes its mass. Turn that around and you have a machine that <strong>weighs atoms</strong> — the mass spectrometer. It needs two stages.</p>
<p><strong>Stage 1: the velocity selector.</strong> Ions of all speeds enter a region of crossed fields — E and B perpendicular to each other and to the beam. The electric force qE pushes one way, the magnetic force qvB the other. They cancel only for one particular speed:</p>
<p>qE = qvB  →  <strong>v = E/B</strong></p>
<p>Ions at exactly this speed fly straight through the exit slit; faster ones bend one way, slower ones the other, and both hit the walls. Out comes a beam of uniform velocity, regardless of ion mass.</p>
<p><strong>Stage 2: the deflection chamber.</strong> The selected ions enter a uniform field B′ at right angles and bend into semicircles of radius r = mv/(qB′). Heavier ions sweep wider arcs; each mass lands at its own spot on the detector. Measuring r gives the mass:</p>
<p><strong>m = qB′r / v</strong></p>
<div class="key-concept">
  <h4>Worked example: separating carbon isotopes</h4>
  <p>Singly charged ions (q = 1.6 × 10⁻¹⁹ C) leave a selector with E = 5.0 × 10³ V/m and B = 0.10 T, so v = E/B = 5.0 × 10⁴ m/s. In a deflection field B′ = 0.50 T:</p>
  <ul>
    <li>Carbon-12 (m = 1.99 × 10⁻²⁶ kg): r = mv/(qB′) ≈ <strong>12.5 mm</strong></li>
    <li>Carbon-13 (m = 2.16 × 10⁻²⁶ kg): r ≈ <strong>13.5 mm</strong></li>
  </ul>
  <p>After a half-circle the ions land 2r apart, so the isotopes strike the detector about 2 mm apart — a mass difference of one neutron, resolved with a ruler.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Mass spectrometry dates isotopes for archaeology, screens newborn blood for metabolic disease, detects doping in sport, and identified the elements in Moon rock. During WWII, giant mass spectrometers called calutrons — built with 14,000 tonnes of borrowed silver coils, copper being scarce — enriched uranium isotope by isotope.</p>
</div>`,
        },
        {
          id: "hall-effect",
          title: "The Hall Effect: Fields Reveal the Carriers",
          content: `
<p>Pass a current through a flat slab of conductor and apply a magnetic field perpendicular to its face. The moving charge carriers feel the F = qvB force and are pushed sideways — toward one edge of the slab. Charge piles up there, leaving the opposite edge oppositely charged, until the growing transverse electric field exactly balances the magnetic push. In equilibrium:</p>
<p>qE = qvB  →  E = vB, and across a slab of width d this gives the <strong>Hall voltage</strong>:</p>
<p><strong>V(H) = Bvd</strong> — where v is the drift speed of the carriers</p>
<p>Discovered by Edwin Hall in 1879 (as a 24-year-old graduate student), this modest voltage carries two remarkable pieces of information.</p>
<ul>
  <li><strong>It measures B.</strong> For a given slab and current, V(H) is directly proportional to the field — the basis of the Hall probe, the standard laboratory instrument for measuring magnetic flux density.</li>
  <li><strong>It reveals the <em>sign</em> of the charge carriers.</strong> Positive carriers drifting left and negative carriers drifting right constitute the same current — but the magnetic force pushes both toward the <em>same edge</em> (both v and q flip sign). So the polarity of the Hall voltage tells you which kind of carrier is really moving. Metals: electrons, as expected. But some semiconductors give the "wrong" sign — the first hard evidence for positive <strong>holes</strong>, decades before band theory explained them.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Why Semiconductors Make the Best Probes</h4>
  <p>V(H) = Bvd is proportional to drift speed, and for a given current, drift speed is inversely proportional to carrier density. Semiconductors have perhaps 10⁻⁶ times fewer carriers than copper, so their carriers drift a million times faster at the same current — Hall voltages of millivolts instead of nanovolts. This is why every practical Hall sensor is a semiconductor chip.</p>
</div>
<div class="did-you-know">
  <h4>Hall sensors are everywhere</h4>
  <p>Your phone's compass, a laptop's lid-closed detector, anti-lock-brake wheel-speed sensors, and brushless-motor controllers in drones all use Hall sensors — cheap, contactless, and wear-free ways to sense magnets and measure fields. There are probably a dozen within arm's reach of you now.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A charged particle moves parallel to a uniform magnetic field. The magnetic force on it is:",
          options: [
            "qvB, perpendicular to the field",
            "qvB, along the field",
            "qE + qvB",
            "Zero",
          ],
          correctIndex: 3,
          explanation:
            "F = qvB sin θ, and θ = 0 for motion along the field, so the force vanishes. Only the velocity component perpendicular to B produces a force — which is why particles spiral freely along field lines.",
        },
        {
          question:
            "A magnetic field can never change a charged particle's kinetic energy because the magnetic force:",
          options: [
            "Is too weak compared with the electric force",
            "Is always perpendicular to the velocity, so it does no work",
            "Only acts on stationary charges",
            "Always cancels the electric force",
          ],
          correctIndex: 1,
          explanation:
            "Work requires a force component along the motion. The magnetic force qvB is always at right angles to v, so it changes the direction of the velocity but never its magnitude — hence circular motion at constant speed.",
        },
        {
          question:
            "An electron follows a circle of radius r in a magnetic field. If its speed doubles, the new radius is:",
          options: [
            "2r",
            "r/2",
            "4r",
            "r (unchanged)",
          ],
          correctIndex: 0,
          explanation:
            "r = mv/(qB) is proportional to speed: doubling v doubles r. Interestingly the period T = 2πm/(qB) stays the same — the faster electron covers its larger circle in identical time, the key to cyclotron accelerators.",
        },
        {
          question:
            "In a velocity selector with crossed fields E and B, ions travel straight through when:",
          options: [
            "v = EB",
            "v = B/E",
            "v = E/B",
            "qE = mv²/r",
          ],
          correctIndex: 2,
          explanation:
            "Straight-line passage requires the electric force qE to balance the magnetic force qvB: qE = qvB, so v = E/B. Charge and mass cancel out — the selector passes one speed only, whatever the ion. The mass separation happens afterwards, via r = mv/(qB′).",
        },
        {
          question:
            "The Hall effect can determine whether the mobile charge carriers in a material are positive or negative because:",
          options: [
            "Positive carriers produce a larger Hall voltage",
            "The polarity of the Hall voltage depends on the sign of the carriers",
            "Negative carriers are unaffected by magnetic fields",
            "The Hall voltage vanishes for positive carriers",
          ],
          correctIndex: 1,
          explanation:
            "Positive carriers moving one way and negative carriers moving the other way make the same current, but qvB pushes both toward the same edge — so the edge charges up with opposite polarity in the two cases. This is how holes in semiconductors were discovered experimentally.",
        },
      ],
    },
    {
      id: "electromagnetic-induction",
      title: "Electromagnetic Induction",
      subtitle: "Faraday's law — the principle behind nearly all electricity generation",
      sections: [
        {
          id: "magnetic-flux",
          title: "Magnetic Flux: Counting Field Lines",
          content: `
<p>Before Faraday's law can even be stated, we need its central quantity. <strong>Magnetic flux Φ</strong> measures how much magnetic field passes through a surface:</p>
<p><strong>Φ = BA cos θ</strong></p>
<p>where A is the area, B the flux density, and θ the angle between the field and the <em>normal</em> (perpendicular) to the surface. Units: the <strong>weber (Wb)</strong>; 1 Wb = 1 T·m². The name "flux density" for B now makes sense — B is the flux per unit area, Wb/m².</p>
<p>The cos θ matters:</p>
<ul>
  <li>Field perpendicular to the surface (θ = 0): maximum flux, Φ = BA.</li>
  <li>Field parallel to the surface (θ = 90°): zero flux — the lines skim past without threading through.</li>
  <li>Tilted in between: only the perpendicular component counts.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Rain Through a Hoop</h3>
  <p>Hold a hoop in vertical rain. Face-up, it catches the most water; edge-on, none. The catch rate depends on rainfall intensity (B), hoop area (A), and tilt (cos θ). Flux is the "catch rate" of field lines through a loop.</p>
</div>
<p>For a coil of N turns, each turn catches the flux, so the useful quantity is the <strong>flux linkage NΦ</strong> (weber-turns). A 500-turn coil links 500 times the flux of a single loop — the reason practical devices are wound with many turns.</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>A circular coil of 200 turns and radius 4.0 cm sits with its plane perpendicular to a 0.15 T field (so the field is along the normal, θ = 0):</p>
  <p>Φ = BA = 0.15 × π(0.040)² ≈ 7.5 × 10⁻⁴ Wb per turn</p>
  <p>Flux linkage: NΦ = 200 × 7.5 × 10⁻⁴ ≈ <strong>0.15 Wb-turns</strong>. Rotate the coil 90° and the linkage falls to zero — a change we are about to make very profitable.</p>
</div>
<p>Why define flux at all? Because experiments show that no single quantity — field strength, area, or angle alone — controls induction. What matters is their combination, and specifically how fast it <em>changes</em>. Flux is the bookkeeping variable that makes Faraday's law a one-line equation.</p>`,
        },
        {
          id: "faraday-lenz",
          title: "Faraday's and Lenz's Laws",
          content: `
<p>In 1831 Faraday found the effect a decade of physicists had hunted: a magnet moving near a coil drives a current — but only <em>while things are changing</em>. Hold everything still and the current stops dead.</p>
<p><strong>Faraday's law:</strong> the induced EMF equals the rate of change of flux linkage:</p>
<p><strong>ε = −N ΔΦ/Δt</strong></p>
<p>Change the flux quickly, get a large EMF; slowly, a small one; not at all, nothing. Any means of changing Φ = BA cos θ works: move a magnet (changes B at the coil), shrink or stretch a loop (changes A), or rotate a coil (changes θ — the generator's trick).</p>
<p><strong>Lenz's law</strong> is the minus sign made verbal: <em>the induced current flows in the direction that opposes the change causing it</em>. Push a magnet's north pole toward a coil and the coil's induced current makes it a north pole facing you — repelling the approach. Pull away, and the coil becomes a south pole, attracting, resisting the retreat.</p>
<div class="key-concept">
  <h4>Lenz's Law Is Energy Conservation</h4>
  <p>Suppose the opposite: the coil <em>attracted</em> the incoming magnet. The magnet would accelerate in, increasing the flux change, inducing more current, attracting harder — free energy from nothing. Forbidden. The induced current must fight you, so that the electrical energy generated is honestly paid for by your mechanical work against the opposition. Induction has no free lunches.</p>
</div>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>A 500-turn coil of area 4.0 × 10⁻³ m² sits perpendicular to a field that rises steadily from 0 to 0.20 T in 0.10 s:</p>
  <p>ΔΦ per turn = ΔB × A = 0.20 × 4.0 × 10⁻³ = 8.0 × 10⁻⁴ Wb</p>
  <p>ε = N ΔΦ/Δt = 500 × (8.0 × 10⁻⁴ / 0.10) = <strong>4.0 V</strong></p>
  <p>Note the levers available: more turns, bigger area, stronger field, faster change — every generator design decision is one of these four knobs.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Asked (so the story goes) what use his discovery was, Faraday reputedly replied, "What use is a newborn baby?" The baby grew up: essentially every watt of grid electricity — coal, gas, nuclear, hydro, wind — is generated by Faraday induction. Only photovoltaics escape it.</p>
</div>`,
        },
        {
          id: "motional-emf-generators",
          title: "Motional EMF and the AC Generator",
          content: `
<p>The simplest induction setup: slide a conducting rod of length L at speed v along rails, perpendicular to a field B. The area of the circuit grows at rate Lv, so flux grows at rate BLv, and Faraday gives:</p>
<p><strong>ε = BLv</strong></p>
<p>You can also see it microscopically: every free electron in the rod moves with it at speed v through B, feels F = qvB along the rod, and gets pushed toward one end. The rod becomes a battery whose "chemistry" is motion.</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>A 0.50 m rod slides at 4.0 m/s across a 0.20 T field: ε = BLv = 0.20 × 0.50 × 4.0 = <strong>0.40 V</strong>. If the circuit has resistance 0.80 Ω, current I = 0.50 A flows — and Lenz's law bites: that current in the field feels F = BIL = 0.050 N <em>opposing the motion</em>. Push power = Fv = 0.20 W; electrical power = εI = 0.20 W. The books balance exactly.</p>
</div>
<p>An <strong>AC generator</strong> packages this elegantly: rotate a coil of N turns and area A at angular frequency ω in field B. The flux linkage NBA cos ωt swings sinusoidally, and its rate of change gives:</p>
<p><strong>ε = NBAω sin ωt</strong> — peak EMF ε₀ = NBAω</p>
<p>The output is automatically a sine wave — alternating current is not a design choice but what rotation naturally produces. Note the ω factor: spin twice as fast and you get twice the peak EMF <em>and</em> twice the frequency. The EMF peaks when the coil's plane lies <em>along</em> the field (flux momentarily zero but changing fastest) and vanishes when the flux is maximal — a favourite exam subtlety: <strong>EMF tracks the rate of change of flux, not the flux itself</strong>.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A large power-station generator produces around 20 kV at up to 20,000 A — over 500 MW from a single spinning machine, enough for a city of half a million people. The rotor is spun at exactly 3000 rpm (50 Hz countries) or 3600 rpm (60 Hz), and every generator on a grid must stay locked in step — an entire continent's machines rotating in synchrony.</p>
</div>`,
        },
        {
          id: "eddy-currents",
          title: "Eddy Currents: Induction in the Solid",
          content: `
<p>Faraday's law does not care whether the conductor is a neat wire loop. Move a solid sheet of metal through a changing or non-uniform magnetic field and swirling loops of current — <strong>eddy currents</strong> — are induced throughout its body, like whirlpools behind a boat oar.</p>
<p>By Lenz's law these eddies always oppose the change that creates them, with two practical consequences:</p>
<ul>
  <li><strong>They brake motion.</strong> A copper pendulum swinging between magnet poles halts as if moving through treacle — its kinetic energy converted to heat by the eddies. Nothing touches; nothing wears.</li>
  <li><strong>They heat the metal.</strong> The currents flow through the metal's resistance, dissipating I²R everywhere inside it.</li>
</ul>
<p>Engineering exploits both:</p>
<ul>
  <li><strong>Eddy-current braking:</strong> high-speed trains, roller-coasters, and precision balances use magnetic brakes — smooth, frictionless, and naturally speed-dependent (faster motion → bigger flux change → stronger braking), though useless at standstill, so a friction brake still handles the final stop.</li>
  <li><strong>Induction hobs:</strong> a coil under the glass drives an alternating field at ~25 kHz; eddy currents in the pan's steel base heat the pan directly. The hob stays cool, and a hand — no ferromagnetic base, negligible eddies — is safe where a saucepan sizzles.</li>
  <li><strong>Metal detectors and coin validators:</strong> pulsed fields induce eddies in buried metal or inserted coins; the decaying eddies broadcast a detectable reply field, and its signature even identifies the alloy.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Lamination — Defeating Unwanted Eddies</h4>
  <p>In transformer and motor cores, eddy currents are pure loss: the alternating flux stirs currents in the iron that heat it uselessly. The cure is to build the core from thin steel sheets — <strong>laminations</strong> — insulated from each other by varnish, oriented so the would-be current loops are chopped into segments. Big eddies cannot form; the flux passes unhindered. The gentle hum of a transformer is the laminated core vibrating at the grid frequency.</p>
</div>
<div class="did-you-know">
  <h4>Try it (thought experiment)</h4>
  <p>Drop a strong neodymium magnet down a vertical copper pipe. Copper is not magnetic — yet the magnet falls in eerie slow motion, drifting down as eddy currents in the pipe wall continuously oppose its descent. It is the single most convincing demonstration of Lenz's law ever devised.</p>
</div>`,
        },
        {
          id: "inductance",
          title: "Self and Mutual Inductance",
          content: `
<p>A coil's own current creates flux through the coil itself. Change the current and that flux changes — so by Faraday's law the coil induces an EMF <em>in itself</em>, and by Lenz's law it opposes the change in its own current. This is <strong>self-induction</strong>, measured by the inductance L:</p>
<p><strong>ε = −L ΔI/Δt</strong> — L in <strong>henries (H)</strong>; 1 H induces 1 V when current changes at 1 A/s</p>
<p>An inductor is electrical inertia. It resists changes in current the way mass resists changes in velocity — and it stores energy in its magnetic field, <strong>W = ½LI²</strong>, the perfect twin of ½mv² (and of the capacitor's ½CV²).</p>
<div class="key-concept">
  <h4>Worked example: the spark at the switch</h4>
  <p>A 0.50 H coil (a relay, say) carries 2.0 A. Opening a switch cuts the current to zero in 0.010 s:</p>
  <p>ε = L ΔI/Δt = 0.50 × (2.0 / 0.010) = <strong>100 V</strong> — from a 12 V circuit!</p>
  <p>The inductor fights the interruption with whatever voltage it takes, often arcing across the opening switch contacts. This "inductive kick" is how a car's ignition coil turns 12 V into the ~20 kV spark that fires the fuel — and why circuits with relays include protective "flyback" diodes to give the current a safe path.</p>
</div>
<p><strong>Mutual inductance</strong> is the two-coil version: changing current in coil 1 changes the flux through neighbouring coil 2, inducing ε₂ = −M ΔI₁/Δt. Energy hops from circuit to circuit with no contact — the principle behind wireless phone chargers, induction motors, and above all the <strong>transformer</strong>, which the next chapter builds an entire electrical grid upon.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Joseph Henry, the American schoolteacher-turned-physicist the unit honours, discovered self-induction in 1832 — and probably observed electromagnetic induction slightly before Faraday, but published later. Priority went to print. Henry got the unit; Faraday got the law (and the farad).</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A flat coil lies with its plane parallel to a uniform magnetic field. The magnetic flux through the coil is:",
          options: [
            "Maximum, Φ = BA",
            "BA/2",
            "Zero",
            "Negative",
          ],
          correctIndex: 2,
          explanation:
            "Flux is Φ = BA cos θ with θ measured from the normal to the coil. Plane parallel to the field means the normal is perpendicular to it (θ = 90°), so no field lines thread through the coil — zero flux. Maximum flux occurs when the field is perpendicular to the coil's plane.",
        },
        {
          question:
            "According to Faraday's law, the magnitude of the induced EMF in a coil equals:",
          options: [
            "The rate of change of flux linkage",
            "The flux linkage through the coil",
            "The magnetic field strength times the current",
            "The resistance times the flux",
          ],
          correctIndex: 0,
          explanation:
            "ε = N ΔΦ/Δt — what matters is how fast the flux linkage changes, not how large it is. A coil soaked in a huge but steady flux induces nothing; a small flux changing rapidly can induce a large EMF. This is why generators must keep moving.",
        },
        {
          question:
            "You push a magnet's north pole toward a coil. By Lenz's law, the near face of the coil becomes:",
          options: [
            "A south pole, accelerating the magnet inward",
            "Alternately north and south",
            "Neutral — coils have no poles",
            "A north pole, opposing the magnet's approach",
          ],
          correctIndex: 3,
          explanation:
            "The induced current always opposes the change creating it, so the coil presents a repelling north pole to the approaching north pole. If it attracted instead, the magnet would accelerate, inducing ever more current — energy from nothing. Lenz's law is energy conservation wearing circuit clothes.",
        },
        {
          question:
            "Transformer cores are built from thin laminated sheets rather than solid iron in order to:",
          options: [
            "Make the core lighter",
            "Reduce energy losses from eddy currents",
            "Increase the magnetic flux",
            "Prevent the windings from short-circuiting",
          ],
          correctIndex: 1,
          explanation:
            "The alternating flux would drive large swirling eddy currents in a solid core, wastefully heating it (I²R). Insulated laminations chop the possible current loops into tiny segments while letting the flux pass freely — same magnetics, far less loss.",
        },
        {
          question:
            "The current through a 0.20 H inductor rises steadily from 0 to 4.0 A in 0.10 s. The back-EMF induced across it is:",
          options: [
            "8.0 V",
            "0.08 V",
            "80 V",
            "2.0 V",
          ],
          correctIndex: 0,
          explanation:
            "ε = L ΔI/Δt = 0.20 × (4.0/0.10) = 8.0 V, directed against the rising current (Lenz). Inductors are electrical inertia: the faster you try to change the current, the harder they push back — the origin of ignition sparks and flyback voltages.",
        },
      ],
    },
    {
      id: "alternating-current",
      title: "Alternating Current",
      subtitle: "RMS values, transformers, and why the grid is AC",
      sections: [
        {
          id: "rms-values",
          title: "RMS Values: The Honest Average",
          content: `
<p>Generator physics hands us sinusoidal current and voltage:</p>
<p>I = I₀ sin ωt, V = V₀ sin ωt — with ω = 2πf (f = 50 Hz in most of the world, 60 Hz in the Americas)</p>
<p>How do you quote a single "value" for something that spends half its time negative? The plain average is zero — useless. But <em>power</em> never averages to zero: heating goes as I², which is positive on both half-cycles. So we average the square, then un-square:</p>
<p><strong>Root-Mean-Square: I(rms) = I₀/√2 ≈ 0.707 I₀, and V(rms) = V₀/√2</strong></p>
<p>The RMS value is defined to be honest about power: an AC supply of V(rms) = 230 V heats a resistor exactly as much as a 230 V battery would. All the DC power formulas survive intact:</p>
<p><strong>P(mean) = I(rms)V(rms) = I(rms)²R = V(rms)²/R</strong></p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>"230 V mains" means 230 V RMS. The peak is V₀ = 230 × √2 ≈ <strong>325 V</strong>, so the voltage actually swings between +325 V and −325 V, 50 times a second. A kettle rated 2.3 kW at 230 V draws I(rms) = P/V = 10 A, hence peak current I₀ = 10√2 ≈ 14 A. Instantaneous power oscillates between 0 and 2 × 2300 = 4.6 kW at 100 Hz, averaging 2.3 kW — the water only cares about the average.</p>
</div>
<p>The √2 factor is specific to sine waves; square or triangular waveforms have different peak-to-RMS ratios, which is why cheap multimeters (which just rescale a rectified average) misread non-sinusoidal signals, while "true-RMS" meters compute the actual mean square.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Insulation, capacitors, and clearances in mains equipment must withstand the <em>peak</em> 325 V (plus surges), while heating budgets use the RMS 230 V. Confusing the two is a classic — and occasionally smoky — engineering error. Also: at 100 Hz power ripple, old incandescent bulbs flickered imperceptibly; some LED lamps with poor drivers make the flicker visible on a phone's slow-motion camera.</p>
</div>`,
        },
        {
          id: "reactance",
          title: "Reactance: How C and L Fight AC",
          content: `
<p>Resistors treat AC and DC alike. Capacitors and inductors do not — they oppose current in a frequency-dependent way called <strong>reactance</strong> (symbol X, units ohms), and they do it <em>without dissipating energy</em>: they borrow energy into their fields for a quarter-cycle and return it the next.</p>
<p><strong>Capacitive reactance:</strong> a capacitor passes current only by repeatedly charging and discharging. The higher the frequency, the less time to fill up, the more current flows:</p>
<p><strong>X(C) = 1/(2πfC)</strong> — huge at low f (blocks DC entirely: f = 0 gives infinite reactance), small at high f</p>
<p><strong>Inductive reactance:</strong> an inductor's back-EMF ε = −L ΔI/Δt fights changing current, and higher frequency means faster change:</p>
<p><strong>X(L) = 2πfL</strong> — zero for DC, growing without limit at high f</p>
<p>They are opposites, and their phase behaviour mirrors it: in a capacitor the current <em>leads</em> the voltage by 90°; in an inductor it <em>lags</em> by 90°. (Mnemonic: CIVIL — in a Capacitor I before V; V before I in an inductor L.)</p>
<div class="key-concept">
  <h4>Key Concept: LC Resonance (Qualitatively)</h4>
  <p>Put L and C together and there is one frequency where their opposing reactances cancel: f₀ = 1/(2π√(LC)). Energy then sloshes freely between the capacitor's electric field and the inductor's magnetic field — an electrical pendulum. Tune a radio and you are adjusting C so the circuit resonates at one station's frequency, responding enormously to it and feebly to all others. Add resistance and the oscillation is damped — the RLC circuit is the mass-spring-damper of electronics, obeying the same mathematics.</p>
</div>
<div class="did-you-know">
  <h4>Filters from two components</h4>
  <p>The frequency dependence of reactance makes filters trivial: a series capacitor blocks the low frequencies and passes the high (a high-pass filter — the "treble" path to a tweeter); a series inductor does the reverse for a woofer. Every loudspeaker crossover, radio tuner, and power-supply smoothing stage is reactance put to work.</p>
</div>
<p>For exam purposes: remember the two formulas, their opposite frequency behaviour, that reactance limits current (I(rms) = V(rms)/X) but dissipates no average power, and the qualitative meaning of resonance.</p>`,
        },
        {
          id: "transformers",
          title: "Transformers: Voltage Conversion by Flux",
          content: `
<p>A transformer is mutual induction perfected: primary and secondary coils wound on a shared laminated iron core, which funnels essentially all the flux from one coil through the other. Alternating current in the primary makes alternating flux; the flux threads the secondary; Faraday's law induces a secondary EMF. Each turn of either coil links the same changing flux, so <em>EMF per turn is the same everywhere</em> — giving the transformer equation:</p>
<p><strong>V(s)/V(p) = N(s)/N(p)</strong></p>
<p>More secondary turns step the voltage up; fewer step it down. An ideal transformer loses nothing, so power in equals power out:</p>
<p><strong>V(p)I(p) = V(s)I(s)</strong> — step voltage up and current steps down in proportion</p>
<div class="key-concept">
  <h4>Worked example</h4>
  <p>A laptop charger steps 230 V down to 19.2 V using a 1200-turn primary:</p>
  <p>N(s) = N(p) × V(s)/V(p) = 1200 × 19.2/230 ≈ <strong>100 turns</strong></p>
  <p>If the laptop draws 3.0 A, the primary current is I(p) = V(s)I(s)/V(p) = (19.2 × 3.0)/230 ≈ <strong>0.25 A</strong>. High-voltage side: low current, thin wire. Low-voltage side: high current, thick wire — look inside any transformer and the winding thicknesses tell the story.</p>
</div>
<p>Real transformers reach 95–99% efficiency — among the most efficient machines ever built — but the residual losses matter at grid scale:</p>
<ul>
  <li><strong>Copper losses:</strong> I²R heating in the windings.</li>
  <li><strong>Eddy-current losses:</strong> minimized by lamination, as in the last chapter.</li>
  <li><strong>Hysteresis losses:</strong> energy spent re-magnetizing the core 100–120 times per second; special silicon steels reduce it.</li>
  <li><strong>Flux leakage:</strong> flux that misses the secondary.</li>
</ul>
<div class="did-you-know">
  <h4>Why your charger is silent and light</h4>
  <p>Transformer size shrinks as frequency rises — less flux change is needed per cycle. Modern chargers first convert mains to DC, chop it electronically at ~100 kHz, and pass it through a tiny high-frequency transformer. That is why a modern phone charger weighs grams while a 1980s power brick with its 50 Hz iron core weighed half a kilo. The transformer equation is unchanged; only f moved.</p>
</div>
<p>Note what a transformer cannot do: pure DC makes constant flux, ΔΦ/Δt = 0, no secondary EMF. Transformers are AC-only devices — the fact on which the entire architecture of the power grid rests.</p>`,
        },
        {
          id: "power-transmission",
          title: "Power Transmission: Why the Grid Runs at 400,000 Volts",
          content: `
<p>Here is the calculation that settled the "war of the currents" and shaped the modern world. A power line has resistance; current through it wastes power as heat:</p>
<p><strong>P(loss) = I²R(cable)</strong></p>
<p>The crucial point: for a fixed power delivery P = VI, the current you must send is I = P/V. Transmit at higher voltage and the current drops in proportion — and the loss drops with the <em>square</em> of the current.</p>
<div class="key-concept">
  <h4>Worked example: the case for high voltage</h4>
  <p>Deliver 100 kW through cables of total resistance 5.0 Ω.</p>
  <p><strong>At 1.0 kV:</strong> I = P/V = 100,000/1,000 = 100 A. Loss = I²R = (100)² × 5.0 = <strong>50 kW — half the power gone</strong> before it arrives.</p>
  <p><strong>At 100 kV:</strong> I = 1.0 A. Loss = (1.0)² × 5.0 = <strong>5.0 W</strong> — 0.005%.</p>
  <p>Raising the voltage 100× cut the loss 10,000×. That square is why transmission voltage is the single most important number in grid design.</p>
</div>
<p>Hence the grid's architecture, transformer by transformer:</p>
<ol>
  <li>Power station generators produce ~20 kV.</li>
  <li>Step-up transformers raise it to 275–400 kV for long-distance lines.</li>
  <li>Regional substations step down to 33 kV, then 11 kV for local distribution.</li>
  <li>The pole- or pavement-mounted final transformer delivers 230 V to homes.</li>
</ol>
<p>And since transformers only work on AC, <em>this</em> is why AC won: Edison's 110 V DC could not be stepped up, so his power stations had to sit within a mile of the customers. Westinghouse and Tesla's AC could span continents.</p>
<div class="did-you-know">
  <h4>The twist: DC returns</h4>
  <p>Modern power electronics can now convert voltages without transformers, and for the very longest hauls, High-Voltage DC (HVDC) actually beats AC — no reactance losses, no need to keep continents synchronized, cheaper cables underwater. Links like the 2000 km, 800 kV lines in China and the UK–Norway interconnector run DC at voltages Edison could not have dreamed of. The war of the currents ended not with a winner but with a merger.</p>
</div>`,
        },
        {
          id: "em-waves-intro",
          title: "Electromagnetic Waves: The Grand Finale",
          content: `
<p>Step back and look at what this subject has assembled:</p>
<ul>
  <li>Charges make electric fields (Coulomb, Gauss).</li>
  <li>Currents — moving charges — make magnetic fields (Ørsted, Ampère).</li>
  <li>Changing magnetic fields make electric fields (Faraday).</li>
</ul>
<p>In the 1860s James Clerk Maxwell unified these into four equations and noticed a missing symmetry: if changing B makes E, shouldn't changing E make B? Adding that final term closed a loop with astonishing consequences: a changing electric field creates a changing magnetic field, which recreates the electric field, and so on — a self-sustaining disturbance that needs no wires, no medium, nothing. The fields leapfrog each other through empty space.</p>
<p>Maxwell's equations even set the speed of this wave, built from the two constants measured on lab benches with batteries and coils:</p>
<p><strong>c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m/s</strong></p>
<p>— exactly the measured speed of light. Maxwell's conclusion, among the greatest in science: <strong>light is an electromagnetic wave</strong>. Optics, electricity, and magnetism collapsed into one theory at a stroke.</p>
<div class="key-concept">
  <h4>Key Concept: One Spectrum</h4>
  <p>In an EM wave, E and B oscillate in phase, perpendicular to each other and to the direction of travel — a transverse wave carrying energy through vacuum. Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays differ only in frequency and wavelength (c = fλ); the physics is identical. Visible light occupies a single octave, roughly 400–700 nm, of a spectrum spanning more than twenty octaves.</p>
</div>
<p>The chapter's AC machinery connects directly: any accelerating charge radiates EM waves. Drive electrons up and down an antenna at 100 MHz and you broadcast FM radio — a transmitting antenna is just an AC circuit whose fields are flung off into space, and a receiving antenna is Faraday induction run by the arriving wave.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Heinrich Hertz confirmed Maxwell's waves in 1887 with a spark-gap transmitter and a wire-loop receiver across his lecture room. Asked about applications, he answered: "It's of no use whatsoever... this is just an experiment that proves Maestro Maxwell was right." Radio, radar, Wi-Fi, GPS, and mobile phones beg to differ — and the unit of frequency bears his name.</p>
</div>
<p>Where does the story go next? Ask what happens when EM waves carry very small energies, and you meet the photon — the door to quantum physics, opening in the next subject.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "UK mains is quoted as 230 V AC. The peak voltage is approximately:",
          options: [
            "230 V",
            "325 V",
            "163 V",
            "460 V",
          ],
          correctIndex: 1,
          explanation:
            "Quoted mains values are RMS. Peak = RMS × √2 = 230 × 1.414 ≈ 325 V. The RMS value is the DC-equivalent for heating power, but insulation must survive the 325 V peaks — a distinction with real engineering consequences.",
        },
        {
          question:
            "As frequency increases, the reactance of a capacitor and of an inductor respectively:",
          options: [
            "Both increase",
            "Both decrease",
            "Increases; decreases",
            "Decreases; increases",
          ],
          correctIndex: 3,
          explanation:
            "X(C) = 1/(2πfC) falls with frequency — rapid charge/discharge passes more current — while X(L) = 2πfL rises, since faster current changes provoke a larger back-EMF. Their opposite behaviours cancel at the resonant frequency f₀ = 1/(2π√(LC)), the basis of radio tuning.",
        },
        {
          question:
            "An ideal transformer has 1000 primary turns and 50 secondary turns, with 230 V across the primary. The secondary voltage is:",
          options: [
            "4600 V",
            "230 V",
            "11.5 V",
            "46 V",
          ],
          correctIndex: 2,
          explanation:
            "V(s) = V(p) × N(s)/N(p) = 230 × 50/1000 = 11.5 V — a step-down transformer. With ideal (lossless) operation the secondary can deliver 20× the primary current, since V(p)I(p) = V(s)I(s).",
        },
        {
          question:
            "Electrical power is transmitted at very high voltage primarily because:",
          options: [
            "For a given power delivered, higher voltage means lower current, and cable heating losses scale as I²R",
            "High voltage travels faster along the cables",
            "High voltage reduces the resistance of the cables",
            "Generators cannot produce low voltages",
          ],
          correctIndex: 0,
          explanation:
            "P = VI, so delivering fixed power at 100× the voltage needs 1/100th the current — and since loss is I²R, the wasted power falls 10,000-fold. The cable resistance itself is unchanged; it is the current through it that is slashed. Transformers make this voltage conversion easy, which is why the grid adopted AC.",
        },
        {
          question:
            "Maxwell identified light as an electromagnetic wave because:",
          options: [
            "Light can be reflected by mirrors",
            "Light carries energy",
            "Light was known to travel through glass",
            "His equations predicted waves travelling at 1/√(μ₀ε₀), which matched the measured speed of light",
          ],
          correctIndex: 3,
          explanation:
            "From μ₀ and ε₀ — constants measured in tabletop experiments with currents and charges — Maxwell's equations predicted self-propagating E and B waves moving at 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s, precisely the known speed of light. The numerical coincidence was too exact to be chance: optics became a branch of electromagnetism.",
        },
      ],
    },
  ],
};
