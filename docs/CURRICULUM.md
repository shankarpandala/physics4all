# Physics4All — Master Curriculum

**From absolute zero to the frontier: a research-backed path for adults relearning physics — class 1 through graduation, with every bit of math you need.**

This curriculum was synthesized from deep research into (1) how the world's strongest physics-education systems (Singapore, China, Russia, Japan, South Korea, Finland, Estonia, UK, Germany, India, plus IB/AP) teach physics from class 1 to class 12; (2) how the world's best universities (MIT, Cambridge, Oxford, LMU Munich, the IITs, and the Russian Landau school) structure the undergraduate physics degree; and (3) the complete mathematics pathway physics requires, verified against official syllabi, the Khan Academy ladder, and the Boas / Riley–Hobson–Bence / Arfken math-methods canon. Full research reports with sources: [`docs/research/`](research/).

---

## Design principles (what the research says)

1. **Spiral, three-pass architecture.** Every top school system covers the same backbone — *mechanics → matter & heat → sound & waves → light → electricity & magnetism → modern physics* — three times: phenomena (primary), a complete one-formula quantitative tour (lower secondary, the Russian grade 7–9 / Chinese grade 8–9 model), then a theory-structured pass with vectors and trig (upper secondary). We keep all three passes, compressed for adults.
2. **Two-pass university architecture.** Every elite university teaches physics twice: a phenomenological *general physics* pass (MIT 8.01/8.02/8.03, Sivukhin's course, LMU's E-track), then the *theoretical core four* — classical (Lagrangian) mechanics → electrodynamics → quantum mechanics → statistical mechanics (LMU's T-track, Landau's course, the Cambridge/Oxford/IIT cores). The order of the core four is essentially invariant worldwide.
3. **Math just-in-time, one step ahead.** No strong system teaches math years in advance or years late: algebra arrives with first physics formulas, trig/vectors with projectiles, calculus with real Newtonian dynamics, vector calculus immediately before electrodynamics, linear algebra immediately before quantum formalism, variational calculus at the moment of Lagrangians. Math subjects are interleaved here on exactly that schedule.
4. **Energy is the unifying spine** (Bavaria's grade-9 course, Finland's compulsory modules, Singapore's themes) — conservation reasoning escalates continuously from Phase 1 to Phase 6.
5. **Waves are the hinge.** MIT makes waves (8.03) the prerequisite for both quantum mechanics and statistical physics. The waves course is where oscillations, Fourier thinking, and interference intuition get built — it gets full weight here.
6. **Special relativity early, general relativity late.** Oxford and MIT teach SR in years 1–2; GR is a capstone needing tensors and variational methods.
7. **Problem culture is the differentiator.** Russia's задачник (problem-book) tradition, China's gaokao/olympiad depth, India's JEE ecosystem: mass syllabi are lean, but every chapter is drilled with problems. Every chapter here carries worked examples + a quiz + a problem set.
8. **Phenomena before formalism.** Equations attach to phenomena you have already seen and manipulated — never the reverse (Japan's one-phenomenon-per-year design, Finland's phenomenon-based learning). Interactive simulations play that role for an adult at a screen.

**Total: 6 phases · 34 subjects · ~208 chapters · ~1,000 hours (≈2 years at 10 h/week, or faster with prior background — every subject starts with a "can I skip this?" diagnostic).**

---

## The shape of the journey

| Phase | School/university equivalent | What you get | Est. hours |
|---|---|---|---|
| **1. Foundations** | Classes 1–7, compressed | Number sense → proportional reasoning; all physics phenomena qualitatively; scientific method | ~57 h |
| **2. The First Full Tour** | Classes 8–10 (Peryshkin/PEP model) | *All* of physics at one-formula depth + algebra & geometry | ~127 h |
| **3. Quantitative Physics** | Classes 11–12 (H2/A-level/NCERT/AP) | The full theory pass with vectors & trig + precalculus | ~163 h |
| **4. University General Physics** | BSc years 1–2 (MIT 8.01→8.033) | Calculus-based physics: mechanics, E&M, waves, SR + calculus through linear algebra/ODEs | ~258 h |
| **5. The Theoretical Core** | BSc years 2–3 | The core four: Lagrangian mechanics, electrodynamics, quantum mechanics, statistical mechanics + math methods + computation | ~255 h |
| **6. Advanced & Frontier** | BSc years 3–4 / graduation | Solid state, nuclear & particle, astrophysics & cosmology, general relativity, QFT gateway | ~146 h |

## Math ↔ physics dependency chart

| Math (subject) | Unlocks (physics) |
|---|---|
| S1 Numbers, Measurement & Proportion | S2 Phenomena, S5–S9 (density, speed, Ohm's law are ratio statements) |
| S4 Algebra & Geometry for Physics | Phase 2 tour (formula rearrangement, graphs; slope = speed, area = distance) |
| S10 Precalculus & Vectors | Phase 3 (force decomposition, projectiles, SHM sinusoids, log-scale reasoning) |
| S16 Calculus I & II | S17 mechanics (F = ma as a differential equation), S19 E&M integrals |
| S18 Multivariable & Vector Calculus | S19/S25 electromagnetism (Gauss & Stokes ARE Maxwell's equations) |
| S22 Differential Equations & Linear Algebra | S20 waves (normal modes = eigenproblems), S26 quantum mechanics (states = vectors, observables = Hermitian operators) |
| S23 Mathematical Methods (Boas-level) | S24–S28 core four (variational calculus → Lagrangians; PDEs & special functions → hydrogen atom; probability → entropy; tensors → S21/S33 relativity; group theory → S31 particles) |

---

# PHASE 1 — FOUNDATIONS
*Seeing like a physicist (classes 1–7, compressed for adults). Phenomena first, no formalism. Weeks, not years.*

### Subject 1 · Numbers, Measurement & Proportion (Math I) — ~25 h
*Rebuild arithmetic to automaticity and conquer the "rational-number wall" — the best-documented adult gap and the grammar of every physics formula.*

| # | Chapter | Topics |
|---|---|---|
| 1.1 | Numbers Rebuilt | Place value & the number line · arithmetic operations & mental math · negative numbers · order of operations · estimation & rounding |
| 1.2 | Fractions, Decimals & Percent | What a fraction is · all four operations on fractions · decimals · percent · conversions between all three (the rational-number wall) |
| 1.3 | Ratio, Rate & Proportion | Ratios & rates · the unitary method · direct & inverse proportion · scaling arguments · Singapore bar models · speed–distance–time · density as a ratio |
| 1.4 | Powers, Roots & Scientific Notation | Exponents & roots · scientific notation · orders of magnitude · Fermi estimation |
| 1.5 | Units & Measurement | SI units · unit conversion as multiplication by 1 · dimensional thinking · measuring length/mass/time/temperature · significant figures intro |

🎮 *Interactives:* bar-model builder, order-of-magnitude slider ("powers of ten" zoom), unit-conversion trainer.
📚 *Anchors:* Khan Academy Arithmetic → Pre-algebra (diagnostic-first: test out, don't re-watch).

### Subject 2 · The Phenomena of Physics — ~20 h
*The entire primary-science "starter set" (UK Y1–6, Japan G3–6, Singapore P3–6, Korea G3–6) as guided at-home experiments and simulations.*

| # | Chapter | Topics |
|---|---|---|
| 2.1 | Matter & Materials | States of matter · properties of materials · melting/freezing/evaporation · the particle picture (qualitative) |
| 2.2 | Forces All Around | Pushes & pulls · gravity & weight · friction · elastic/spring forces · magnets & poles · balance & levers · floating & sinking |
| 2.3 | Light & Shadow | Light sources · straight-line travel · shadows · reflection & mirrors · transparency |
| 2.4 | Sound & Vibration | Sound from vibration · pitch & loudness · how sound travels · hearing |
| 2.5 | Heat & Cold | Temperature vs heat · warming & cooling · expansion & contraction · conduction/convection/radiation qualitatively · insulation |
| 2.6 | Electricity & Circuits | Battery-and-bulb circuits · conductors & insulators · switches · series vs parallel qualitatively · electromagnets · electrical safety |
| 2.7 | Energy Everywhere | Energy forms · conversions & storage · generation · the conservation idea (the P6/G6 capstone in Singapore & Japan) |
| 2.8 | Earth & Sky | Day & night · seasons · Moon phases · the Solar System · stars and the scale of the universe |

🎮 *Interactives:* circuit sandbox, shadow/light-ray playground, states-of-matter particle sim, solar-system scale explorer.

### Subject 3 · Thinking Like a Physicist — ~12 h
*The experimental-skill progression every top system builds: compare → relate → control variables → quantify uncertainty.*

| # | Chapter | Topics |
|---|---|---|
| 3.1 | The Scientific Method | Observation → hypothesis → experiment · models & theories · what physics is (and isn't) |
| 3.2 | Fair Tests & Variables | Comparing · relating variables · controlling variables (the Japanese G5 pendulum investigation) · designing simple experiments |
| 3.3 | Data & Graphs | Tables · bar & line graphs · reading and interpreting graphs · averages & patterns · first look at measurement uncertainty |
| 3.4 | Estimation & Sanity Checks | Order-of-magnitude reasoning · back-of-envelope calculations · checking answers with units |

🎮 *Interactives:* virtual pendulum lab (control the variables yourself), graph-reading challenges.

---

# PHASE 2 — THE FIRST FULL TOUR
*All of physics once, at one-formula depth (classes 8–10; the Russian Peryshkin grade 7–9 / Chinese PEP grade 8–9 backbone). Problem sets throughout.*

### Subject 4 · Algebra & Geometry for Physics (Math II) — ~35 h

| # | Chapter | Topics |
|---|---|---|
| 4.1 | The Language of Algebra | Variables & expressions · simplifying · expanding & factoring basics |
| 4.2 | Equations & Formula Fluency | Linear equations · rearranging any formula (make x the subject — to automaticity) · inequalities · systems of two equations · word problems → equations |
| 4.3 | Graphs & Linear Models | Coordinate plane · slope & intercept · y = mx + c · proportionality as a line through the origin · reading physics from graphs (slope = speed, area = distance) |
| 4.4 | Quadratics | Factoring · completing the square · the quadratic formula · parabolas |
| 4.5 | Geometry Essentials | Angles & triangles · congruence & similarity · Pythagoras · circles · areas & volumes (results and spatial fluency, not proof drills) |
| 4.6 | First Trigonometry | SOH-CAH-TOA · solving right triangles · angles of elevation · sine & cosine rules intro |

📚 Khan Academy Algebra 1 + Geometry essentials.

### Subject 5 · Motion & Forces (First Pass) — ~25 h

| # | Chapter | Topics |
|---|---|---|
| 5.1 | Describing Motion | Distance & displacement · speed v = d/t · distance–time graphs · acceleration · velocity–time graphs |
| 5.2 | Mass, Density & Measurement | Mass vs weight · density ρ = m/V · measuring instruments · why density explains floating |
| 5.3 | Forces & Inertia | Force as interaction · Newton's first law & inertia · friction · elastic force & Hooke's law · force diagrams · balanced vs unbalanced forces · resultants |
| 5.4 | Pressure & Buoyancy | Pressure P = F/A · pressure in liquids · atmospheric pressure · Pascal's principle · Archimedes' principle & floating (the great Russian/Chinese grade-8 block) |
| 5.5 | Work, Energy, Power & Machines | Work W = Fd · kinetic & potential energy · conservation intro · power · levers & moments · pulleys · efficiency · the "golden rule" of mechanics |

🎮 *Interactives:* motion-graph matching game, buoyancy tank, lever/pulley playground.

### Subject 6 · Heat & the Particle Model (First Pass) — ~15 h

| # | Chapter | Topics |
|---|---|---|
| 6.1 | The Particle Model of Matter | Molecules · diffusion · Brownian motion · states explained · gas pressure from particle collisions |
| 6.2 | Temperature & Internal Energy | Thermometers & scales · internal energy · thermal expansion |
| 6.3 | Heat Transfer | Conduction · convection · radiation · applications & insulation |
| 6.4 | Specific & Latent Heat | Heating curves · Q = mcΔT · phase changes & latent heat |
| 6.5 | Heat Engines & Energy Use | Internal combustion · steam turbines · efficiency · energy resources |

🎮 *Interactives:* particle-model sim (heat it, compress it), heating-curve explorer.

### Subject 7 · Sound, Light & Optics (First Pass) — ~18 h

| # | Chapter | Topics |
|---|---|---|
| 7.1 | Sound | Vibrations & waves · speed of sound · pitch/frequency · loudness/amplitude · echoes & ultrasound |
| 7.2 | Wave Basics | Transverse & longitudinal waves · wavelength, frequency, amplitude · v = fλ |
| 7.3 | Reflection & Mirrors | Law of reflection · plane-mirror images · curved mirrors |
| 7.4 | Refraction & Lenses | Refraction · total internal reflection & optical fibres · converging/diverging lenses · ray diagrams · magnification |
| 7.5 | The Eye, Cameras & Instruments | The eye & vision correction · cameras · microscope · telescope |
| 7.6 | Colour & the EM Spectrum | Dispersion & rainbows · colour · the electromagnetic-spectrum family tour (radio → gamma) |

🎮 *Interactives:* ray-optics bench (drag lenses & mirrors), wave-property visualizer.

### Subject 8 · Electricity & Magnetism (First Pass) — ~22 h

| # | Chapter | Topics |
|---|---|---|
| 8.1 | Static Electricity | Charge · electrization · attraction & repulsion · the elementary charge · lightning · electric field qualitatively |
| 8.2 | Current & Circuits | Current · voltage · resistance · circuit diagrams · series & parallel circuits |
| 8.3 | Ohm's Law & Resistance | V = IR · what resistance depends on · resistivity intro |
| 8.4 | Electrical Power & Home Electricity | P = VI · Joule heating · kWh & electricity bills · fuses, earthing, safety |
| 8.5 | Magnetism | Magnets & fields · Earth's magnetic field · magnetic field of a current · electromagnets |
| 8.6 | Motors, Generators & Induction | Force on a current-carrying wire · the DC motor · electromagnetic induction · generators · transformers & the grid |

🎮 *Interactives:* full circuit-builder with meters, motor/generator animation you can crank.

### Subject 9 · Atoms, Nuclei & Energy (First Pass) — ~12 h

| # | Chapter | Topics |
|---|---|---|
| 9.1 | Inside the Atom | Atomic models in history (Thomson → Rutherford → Bohr) · electrons, protons, neutrons · isotopes |
| 9.2 | Radioactivity | Alpha, beta, gamma · half-life · detection · safety & uses |
| 9.3 | Nuclear Energy | Fission · fusion · reactors · mass-energy intro |
| 9.4 | Energy & Society | Energy resources · renewables · sustainability · the energy future |

🎮 *Interactives:* half-life dice sim, Rutherford scattering sim.

---

# PHASE 3 — QUANTITATIVE PHYSICS
*The theory-structured second pass (classes 11–12; Singapore H2 / A-level / NCERT / AP level). Vectors, trig, multi-step problems.*

### Subject 10 · Precalculus & Vectors (Math III) — ~40 h

| # | Chapter | Topics |
|---|---|---|
| 10.1 | Functions | Function concept · composition · inverses · transformations · rational functions · qualitative/asymptotic reasoning |
| 10.2 | Exponentials & Logarithms | Exponential growth & decay · e · log rules (to automaticity) · log scales (dB, pH, Richter) · semilog plots |
| 10.3 | Trigonometry Mastery | The unit circle (from memory) · radians · graphs of sin/cos/tan · amplitude, period, phase · Pythagorean/sum/double-angle identities · trig equations · inverse trig |
| 10.4 | Vectors | Components · addition · dot product · cross product · geometric meaning · vectors in physics |
| 10.5 | Complex Numbers | Arithmetic · the Argand plane · polar form · Euler's formula preview |
| 10.6 | Sequences, Series & Approximation | Arithmetic & geometric series · binomial theorem · the art of approximation (small-x expansions — the most-used move in physics) |
| 10.7 | Limits & the Idea of Calculus | Limits & continuity · the derivative as slope/rate · the integral as area · kinematics with basic calculus (the Singapore Additional-Math move) |
| 10.8 | Probability & Statistics Foundations | Counting · probability rules · distributions intro · mean & variance · the normal curve |

🎮 *Interactives:* unit-circle explorer, vector-addition sandbox, function-transformation playground.
📚 Khan Academy Algebra 2 → Trigonometry → Precalculus.

### Subject 11 · Mechanics (Second Pass — with vectors) — ~35 h

| # | Chapter | Topics |
|---|---|---|
| 11.1 | Measurement & Uncertainty | SI system · dimensional analysis · error propagation basics · significant figures properly |
| 11.2 | Kinematics in 1D & 2D | The suvat equations · free fall · projectile motion · relative motion |
| 11.3 | Newton's Laws Properly | The three laws · force decomposition on inclines · friction models · tension & normal forces · connected bodies · apparent weight |
| 11.4 | Momentum & Collisions | Impulse · conservation of momentum · elastic & inelastic collisions · recoil & rockets |
| 11.5 | Work, Energy & Conservation | Work by a varying force · KE & PE · conservative forces · energy conservation · power |
| 11.6 | Circular Motion & Gravitation | Centripetal acceleration · banked curves · Newton's law of gravitation · orbits & Kepler's laws · gravitational field & potential energy · satellites |
| 11.7 | Rotation & Statics | Torque · moment of inertia · angular momentum · rolling · equilibrium & stability |
| 11.8 | Oscillations | Simple harmonic motion · pendulum & spring · energy in SHM · damping & resonance |
| 11.9 | Fluids | Pressure revisited · continuity equation · Bernoulli's principle · viscosity intro |

🎮 *Interactives:* projectile simulator with air-drag toggle, orbit designer (Kepler sandbox), collision lab.

### Subject 12 · Thermal Physics (Second Pass) — ~18 h

| # | Chapter | Topics |
|---|---|---|
| 12.1 | Temperature & Ideal Gases | Thermal equilibrium & the zeroth law · gas laws · ideal-gas equation · kinetic-theory derivation of pressure · molecular speeds |
| 12.2 | The First Law | Internal energy · heat & work · specific heats of gases · isothermal & adiabatic processes · P–V diagrams |
| 12.3 | The Second Law (intro) | Heat engines · refrigerators · Carnot efficiency · entropy first look |
| 12.4 | Thermal Properties of Matter | Calorimetry revisited · phase diagrams · humidity · real gases |

🎮 *Interactives:* gas-in-a-box kinetic sim, P–V diagram engine-cycle explorer.

### Subject 13 · Waves & Optics (Second Pass) — ~20 h

| # | Chapter | Topics |
|---|---|---|
| 13.1 | Wave Motion | Travelling waves · y = A sin(kx − ωt) · wave speed on strings · energy & intensity |
| 13.2 | Superposition | Interference · standing waves · harmonics & music · beats |
| 13.3 | Sound & Doppler | Quantitative sound · intensity & decibels · the Doppler effect · shock waves |
| 13.4 | Wave Optics | Huygens' principle · double-slit interference · diffraction · gratings · polarization · thin films |
| 13.5 | Ray Optics Quantitative | Mirror & lens equations · optical instruments · resolution |

🎮 *Interactives:* wave-superposition sandbox, double-slit simulator, standing-wave string.

### Subject 14 · Fields, Circuits & Electromagnetism (Second Pass) — ~30 h

| # | Chapter | Topics |
|---|---|---|
| 14.1 | Electric Fields | Coulomb's law · field lines & field strength · potential & potential difference · equipotentials · charged-particle motion in fields |
| 14.2 | Capacitance | Capacitors · energy storage · dielectrics · RC charge/discharge qualitatively |
| 14.3 | DC Circuits | EMF & internal resistance · Kirchhoff's laws · resistor networks · meters · potentiometer & Wheatstone bridge |
| 14.4 | Magnetic Fields | Fields of currents · force on moving charges (F = qvB) and wires (F = BIL) · the Lorentz force · mass spectrometer · Hall effect |
| 14.5 | Electromagnetic Induction | Magnetic flux · Faraday's & Lenz's laws · generators · eddy currents · self & mutual inductance |
| 14.6 | Alternating Current | RMS values · reactance · transformers · power transmission · LC/RLC qualitatively · EM waves intro |

🎮 *Interactives:* field-line visualizer (drag charges/magnets), Faraday's-law induction lab.

### Subject 15 · Modern Physics (Second Pass) — ~20 h

| # | Chapter | Topics |
|---|---|---|
| 15.1 | Special Relativity Intro | The postulates · time dilation · length contraction · simultaneity · E = mc² (first quantitative pass) |
| 15.2 | Quantization of Light | The blackbody problem · photoelectric effect · photons · Compton scattering · X-rays |
| 15.3 | Wave–Particle Duality & Atoms | de Broglie waves · electron diffraction · Bohr model & atomic spectra · energy levels · uncertainty principle intro |
| 15.4 | The Nucleus, Quantitatively | Binding energy & mass defect · the decay law N = N₀e^(−λt) · fission & fusion energetics |
| 15.5 | Semiconductors & Electronics | Energy bands qualitatively · diodes & LEDs · transistors · logic gates |
| 15.6 | Particles & the Universe (a taste) | Standard Model tour · cosmic rays · evidence for the Big Bang — the "physics is alive" motivator |

🎮 *Interactives:* photoelectric-effect lab, Bohr-atom spectrum explorer.

---

# PHASE 4 — UNIVERSITY GENERAL PHYSICS
*The calculus-based pass (BSc years 1–2; MIT 8.01 → 8.033 spine). Math courses run just-in-time, exactly one step ahead.*

### Subject 16 · Calculus I & II (Math IV) — ~50 h

| # | Chapter | Topics |
|---|---|---|
| 16.1 | Limits & Derivatives | Formal limits · differentiation rules · chain rule · implicit differentiation · related rates |
| 16.2 | Applications of Derivatives | Optimization · linearization · L'Hôpital · curve analysis |
| 16.3 | Integration | The fundamental theorem · substitution · integration by parts · partial fractions · trig integrals · improper integrals |
| 16.4 | Applications of Integration | Areas & volumes · arc length · work & centre of mass · average value |
| 16.5 | Infinite Series | Convergence · power series · Taylor & Maclaurin series · error bounds · series as physics's favourite tool |
| 16.6 | Intro Differential Equations | Separable & first-order linear ODEs · exponential models · direction fields |
| 16.7 | Parametric & Polar | Parametric curves · polar coordinates · vector-valued functions & motion |

📚 MIT OCW 18.01/18.02-level; Stewart or Thomas.

### Subject 17 · Classical Mechanics I (calculus-based) — ~40 h
*(MIT 8.01 + Kleppner/Morin flavour)*

| # | Chapter | Topics |
|---|---|---|
| 17.1 | Kinematics via Calculus | Position, velocity, acceleration as derivatives · motion from integrals · drag & terminal velocity (your first real ODE) |
| 17.2 | Newton's Laws as Differential Equations | Solving F = ma · the oscillator preview · numerical solutions intro |
| 17.3 | Momentum & Systems of Particles | Centre of mass · variable-mass systems (rockets) · collisions in 2D |
| 17.4 | Energy Methods | Work–energy via integrals · potential energy & force (F = −dU/dx) · potential wells & stability · energy diagrams |
| 17.5 | Angular Momentum & Rigid Bodies | Rotational dynamics properly · moment of inertia by integration · gyroscopes & precession |
| 17.6 | Oscillations in Depth | SHM as an ODE · damped & driven oscillations · resonance quantitatively · coupled oscillators intro |
| 17.7 | Central Forces & Orbits | Effective potential · the orbit equation · Kepler's laws derived · orbital transfers |
| 17.8 | Noninertial Frames | Pseudo-forces · rotating frames · the Coriolis force · tides |

🎮 *Interactives:* ODE phase-space explorer, driven-oscillator resonance lab, effective-potential orbit sim.
📚 Kleppner & Kolenkow; Morin; MIT OCW 8.01.

### Subject 18 · Multivariable & Vector Calculus (Math V) — ~40 h

| # | Chapter | Topics |
|---|---|---|
| 18.1 | Functions of Several Variables | Partial derivatives · the gradient · chain rule · differentials |
| 18.2 | Optimization & Lagrange Multipliers | Critical points · constrained optimization (needed again in stat mech) |
| 18.3 | Multiple Integrals | Double & triple integrals · Jacobians · cylindrical & spherical coordinates |
| 18.4 | Vector Fields | Line integrals · conservative fields & potentials · surface integrals & flux |
| 18.5 | The Big Theorems | Green's, Stokes', and the divergence theorem · div/grad/curl intuition — the Maxwell-ready toolkit |

📚 MIT OCW 18.02; Schey, *Div, Grad, Curl, and All That*.

### Subject 19 · Electromagnetism I (calculus-based) — ~35 h
*(MIT 8.02 → Purcell level)*

| # | Chapter | Topics |
|---|---|---|
| 19.1 | Electrostatics with Calculus | Coulomb → fields of continuous charge distributions · Gauss's law & its applications |
| 19.2 | Potential Theory | V from E and E from V · energy of charge configurations · conductors |
| 19.3 | Capacitors & Dielectrics | Capacitance calculations · energy stored in fields · dielectrics microscopically |
| 19.4 | Current & DC Circuits | Current density · microscopic Ohm's law · RC circuits as ODEs |
| 19.5 | Magnetostatics | Biot–Savart · Ampère's law · magnetic dipoles · magnetism in matter intro |
| 19.6 | Induction & Inductance | Faraday's law in integral form · inductors · LR, LC, RLC circuits as ODEs · energy in magnetic fields |
| 19.7 | Maxwell's Equations & Light | Displacement current · the complete set · the wave solution · the EM spectrum revisited · energy flow & Poynting intro |

🎮 *Interactives:* Gauss's-law flux visualizer, RLC circuit scope, EM plane-wave animation.
📚 Purcell & Morin; MIT OCW 8.02.

### Subject 20 · Waves, Vibrations & Optics (the hinge course) — ~30 h
*(MIT 8.03 — the prerequisite to both quantum and statistical physics)*

| # | Chapter | Topics |
|---|---|---|
| 20.1 | Coupled Oscillators & Normal Modes | Matrices meet physics · beats · the many-body limit |
| 20.2 | The Wave Equation | Derivation on a string · superposition · boundary conditions · standing waves formally |
| 20.3 | Fourier Analysis Intro | Fourier series · spectra · wave packets · the uncertainty relation previewed classically |
| 20.4 | EM Waves & Polarization | Plane waves · polarization states · reflection at boundaries (Fresnel-lite) |
| 20.5 | Interference & Diffraction Quantitative | Phasors · N-slit & gratings · single-slit · resolution limits |
| 20.6 | Geometrical Optics from Waves | The eikonal idea · matrix optics taste · instruments revisited · lasers intro |

🎮 *Interactives:* normal-modes sandbox, Fourier-series builder (draw a wave, see its spectrum), diffraction explorer.
📚 French, *Vibrations and Waves*; MIT OCW 8.03.

### Subject 21 · Special Relativity (full course) — ~18 h
*(MIT 8.033)*

| # | Chapter | Topics |
|---|---|---|
| 21.1 | Postulates & the Lorentz Transformation | Derivation · spacetime diagrams · the invariant interval |
| 21.2 | Relativistic Kinematics | Velocity addition · relativistic Doppler · the classic paradoxes resolved |
| 21.3 | Four-Vectors & Dynamics | 4-momentum · E² = (pc)² + (mc²)² · collisions & particle creation · mass–energy |
| 21.4 | Relativity & Electromagnetism | How E and B mix between frames · magnetism as a relativistic effect |
| 21.5 | Toward General Relativity | The equivalence principle · gravitational time dilation · GPS |

🎮 *Interactives:* spacetime-diagram lab, relativistic-collision calculator.
📚 Morin, *Special Relativity*; Taylor & Wheeler, *Spacetime Physics*.

### Subject 22 · Differential Equations & Linear Algebra (Math VI) — ~45 h

| # | Chapter | Topics |
|---|---|---|
| 22.1 | Second-Order ODEs | Linear ODEs with constant coefficients · oscillator applications · resonance, mathematically |
| 22.2 | Systems of ODEs & Phase Portraits | Coupled systems · eigen-analysis of systems · stability |
| 22.3 | Laplace Transforms & Green's-Function Idea | Transform methods · impulse response |
| 22.4 | Linear Algebra Core | Vector spaces · linear independence & bases · matrices as transformations · determinants |
| 22.5 | Eigenvalues & Diagonalization | Eigenproblems · symmetric/Hermitian matrices · quadratic forms · normal modes revisited |
| 22.6 | Inner-Product Spaces | Orthogonality · projections · Gram–Schmidt · function spaces & Fourier as linear algebra — the quantum-ready chapter |

📚 MIT OCW 18.03 + 18.06 (Strang).

---

# PHASE 5 — THE THEORETICAL CORE
*The core four, in the near-universal world order, plus the math-methods and computation spines (BSc years 2–3).*

### Subject 23 · Mathematical Methods for Physicists (Math VII, Boas-level) — ~45 h

| # | Chapter | Topics |
|---|---|---|
| 23.1 | Complex Analysis | Analytic functions · contour integration · residues · physical applications |
| 23.2 | Calculus of Variations | Functionals · the Euler–Lagrange equation · brachistochrone · constraints — the door to Lagrangian mechanics |
| 23.3 | Partial Differential Equations | Laplace, heat, and wave equations · separation of variables in Cartesian, cylindrical, spherical coordinates · boundary-value problems |
| 23.4 | Special Functions | Legendre & Bessel functions · Hermite polynomials · spherical harmonics · Sturm–Liouville theory & orthogonality |
| 23.5 | Fourier & Integral Transforms | Fourier transforms · convolution · the Dirac delta · Green's functions |
| 23.6 | Tensors & Index Notation | Einstein summation · Kronecker delta & Levi-Civita · Cartesian tensors · the inertia tensor |
| 23.7 | Probability for Physics | Distributions · central limit theorem · random walks · Stirling's formula & Gaussian integrals — the stat-mech toolkit |
| 23.8 | Group Theory Primer | Symmetry groups · the representation idea · rotations, SO(3) and SU(2) preview |

📚 Boas, *Mathematical Methods in the Physical Sciences*; Riley/Hobson/Bence for depth.

### Subject 24 · Classical Mechanics II — Lagrangian & Hamiltonian — ~35 h
*(Taylor / Landau vol. 1 level)*

| # | Chapter | Topics |
|---|---|---|
| 24.1 | The Principle of Least Action | The variational formulation · generalized coordinates · constraints |
| 24.2 | Lagrangian Mechanics | Euler–Lagrange in practice · cyclic coordinates · effective-potential problems |
| 24.3 | Symmetry & Conservation | Noether's theorem — the deep meaning of conservation laws |
| 24.4 | Two-Body & Central Forces Revisited | Reduced mass · scattering · cross sections |
| 24.5 | Rigid-Body Motion | Euler angles · the inertia tensor · Euler's equations · tops & precession |
| 24.6 | Small Oscillations | The normal-modes formalism · molecular vibrations |
| 24.7 | Hamiltonian Mechanics | Legendre transform · phase space · Poisson brackets · Liouville's theorem · canonical transformations · Hamilton–Jacobi glimpse |
| 24.8 | Nonlinear Dynamics & Chaos | Sensitivity to initial conditions · attractors · the driven pendulum revisited |
| 24.9 | From Classical to Quantum & Continuum | Action-angle variables & adiabatic invariants · fluids & elasticity taste |

🎮 *Interactives:* double-pendulum chaos lab, phase-space portrait explorer.
📚 Taylor, *Classical Mechanics*; Landau & Lifshitz vol. 1; Susskind TTM 1.

### Subject 25 · Electrodynamics — ~40 h
*(Griffiths level)*

| # | Chapter | Topics |
|---|---|---|
| 25.1 | Electrostatics Redone | Vector calculus at full strength · boundary-value problems · method of images · separation of variables · multipole expansion |
| 25.2 | Fields in Matter | Polarization & the D field · dielectrics · magnetization & the H field |
| 25.3 | Magnetostatics Deepened | The vector potential · magnetic multipoles |
| 25.4 | Electrodynamics | Maxwell's equations complete · gauge freedom · field energy & momentum · Poynting's theorem · the stress tensor |
| 25.5 | EM Waves | In vacuum, media, and conductors · dispersion · waveguides · reflection & transmission (Fresnel) |
| 25.6 | Potentials & Radiation | Retarded potentials · dipole radiation · antennas · the Larmor formula · synchrotron & bremsstrahlung glimpse |
| 25.7 | Relativistic Electrodynamics | The field tensor · covariant Maxwell equations · fields of moving charges |

📚 Griffiths, *Introduction to Electrodynamics* (5th ed.); David Tong's notes.

### Subject 26 · Quantum Mechanics I — ~40 h
*(Griffiths level)*

| # | Chapter | Topics |
|---|---|---|
| 26.1 | Why Quantum | The failures of classical physics · the experiments that forced the theory |
| 26.2 | The Wavefunction & Schrödinger Equation | Probability interpretation · normalization · expectation values · operators intro |
| 26.3 | One-Dimensional Problems | Infinite & finite wells · tunnelling · scattering off steps & barriers · the harmonic oscillator (analytic + ladder operators) · free particles & wave packets |
| 26.4 | The Formalism | Hilbert space · Dirac notation · Hermitian operators & observables · eigenvalues & eigenstates · the uncertainty principle derived · time evolution |
| 26.5 | QM in Three Dimensions | Separation in spherical coordinates · the hydrogen atom · quantum numbers |
| 26.6 | Angular Momentum & Spin | L operators & ladder algebra · spin-½ · Stern–Gerlach · addition of angular momenta intro |
| 26.7 | Identical Particles | Bosons & fermions · the Pauli principle · the periodic table explained |

🎮 *Interactives:* wavefunction sandbox (draw a potential, watch eigenstates), tunnelling explorer, Bloch-sphere spin lab.
📚 Griffiths & Schroeter, *Introduction to Quantum Mechanics* (3rd ed.); MIT OCW 8.04.

### Subject 27 · Quantum Mechanics II — ~35 h
*(Shankar/Sakurai level — the MIT 8.05/8.06 pass)*

| # | Chapter | Topics |
|---|---|---|
| 27.1 | Formalism Deepened | Schrödinger vs Heisenberg pictures · symmetries & unitary operators · translation & rotation generators |
| 27.2 | Time-Independent Perturbation Theory | Nondegenerate & degenerate cases · fine structure · Zeeman & Stark effects |
| 27.3 | Variational & WKB Methods | The approximation toolkit · tunnelling rates |
| 27.4 | Time-Dependent Perturbations | Fermi's golden rule · radiative transitions · selection rules · how lasers work |
| 27.5 | Scattering Theory | Partial waves · the Born approximation · cross sections |
| 27.6 | Entanglement & Interpretation | EPR · Bell inequalities · decoherence · the measurement problem · qubits & quantum information taste |
| 27.7 | Path Integrals & Advanced Glimpses | Feynman's sum over histories · Aharonov–Bohm · Berry phase glimpse |

📚 Shankar, *Principles of Quantum Mechanics*; Sakurai & Napolitano; MIT OCW 8.05/8.06.

### Subject 28 · Thermodynamics & Statistical Mechanics — ~35 h
*(Schroeder/Blundell level)*

| # | Chapter | Topics |
|---|---|---|
| 28.1 | Energy & the First Law Revisited | Equilibrium · the ideal gas microscopically · equipartition · heat & work |
| 28.2 | Entropy & the Second Law | Multiplicity & combinatorics · Boltzmann entropy · temperature defined statistically · the third law |
| 28.3 | Engines & Free Energy | Carnot properly · thermodynamic potentials · Maxwell relations · phase equilibria · chemical potential |
| 28.4 | Boltzmann Statistics | The canonical ensemble · partition-function machinery · applications (paramagnets, oscillators, molecules) |
| 28.5 | Quantum Statistics | The Gibbs factor · Fermi–Dirac & Bose–Einstein · the electron gas · blackbody radiation derived · Bose–Einstein condensation · Debye solids |
| 28.6 | Phase Transitions & Critical Phenomena | The Ising model · mean-field theory · universality · the renormalization idea |
| 28.7 | Transport & Fluctuations | Random walks & diffusion · Brownian motion · fluctuation–dissipation glimpse |

🎮 *Interactives:* Ising-model simulator, entropy/multiplicity dice lab, blackbody-spectrum explorer.
📚 Schroeder, *An Introduction to Thermal Physics*; Blundell & Blundell.

### Subject 29 · Computational Physics — ~25 h
*(Compulsory in every modern program — and the adult relearner's superpower.)*

| # | Chapter | Topics |
|---|---|---|
| 29.1 | Tools | Python & NumPy for physics · plotting · notebooks |
| 29.2 | Solving Motion Numerically | Euler → RK4 · projectile with drag · the double pendulum (chaos) · N-body orbits |
| 29.3 | Monte Carlo Methods | Random numbers · Monte Carlo integration · simulating the Ising model |
| 29.4 | PDEs & Waves Numerically | Heat & wave equations · relaxation for Laplace · the time-dependent Schrödinger equation |
| 29.5 | Data & Fitting | Least squares · uncertainty · model comparison — real lab-analysis skills |

---

# PHASE 6 — ADVANCED & FRONTIER
*Graduation-level electives: the union of the UK year-3 core (GR + particles) and the US elective set, ending at the QFT gateway.*

### Subject 30 · Solid State Physics — ~30 h
*(Simon, "The Oxford Solid State Basics" level)*

| # | Chapter | Topics |
|---|---|---|
| 30.1 | Bonding & Crystal Structure | Lattices · the reciprocal lattice · X-ray diffraction |
| 30.2 | Vibrations & Phonons | 1D chains · dispersion relations · heat capacity (Einstein & Debye models) |
| 30.3 | Electrons in Solids | The free-electron gas · Bloch's theorem · band structure · nearly-free & tight-binding models |
| 30.4 | Semiconductors | Bands · doping · pn junctions · transistors · LEDs & solar cells |
| 30.5 | Magnetism & Superconductivity | Dia-, para-, ferromagnetism · London theory · BCS glimpse · quantum materials outlook |

### Subject 31 · Nuclear & Particle Physics — ~28 h
*(Griffiths "Elementary Particles" / Krane level)*

| # | Chapter | Topics |
|---|---|---|
| 31.1 | Nuclear Structure | Binding energy · the shell model · stability |
| 31.2 | Nuclear Processes | Decay theory · fission & reactors · fusion in stars and on Earth |
| 31.3 | The Particle Zoo & Detectors | Accelerators · detectors · the discovery history |
| 31.4 | The Standard Model | Quarks & leptons · forces & bosons · reading Feynman diagrams · QED, QCD, weak-interaction overview |
| 31.5 | Symmetries & Conservation | Isospin · parity violation · CP · neutrino oscillations |
| 31.6 | Beyond the Standard Model | The Higgs discovery · dark matter · the hierarchy problem · baryogenesis — the open questions |

### Subject 32 · Astrophysics & Cosmology — ~28 h
*(Carroll & Ostlie / Ryden level)*

| # | Chapter | Topics |
|---|---|---|
| 32.1 | Observing the Universe | Telescopes across the spectrum · the distance ladder · magnitudes |
| 32.2 | Stars | Stellar-structure equations · nuclear burning · the HR diagram · stellar evolution |
| 32.3 | Stellar Endpoints | White dwarfs · neutron stars & pulsars · astrophysical black holes · supernovae |
| 32.4 | Galaxies & Large-Scale Structure | The Milky Way · galaxy types · the dark-matter evidence |
| 32.5 | Cosmology | Hubble expansion · the FRW universe · Big Bang nucleosynthesis · the CMB · dark energy · inflation · the timeline of the universe |

### Subject 33 · General Relativity — ~35 h
*(Hartle/Schutz "physics-first" level)*

| # | Chapter | Topics |
|---|---|---|
| 33.1 | The Mathematics of Curved Spacetime | Manifolds & metrics · tensors properly · geodesics · covariant derivative & curvature |
| 33.2 | From Equivalence Principle to Field Equations | Newton → Einstein · the Einstein equations · the weak-field limit |
| 33.3 | The Schwarzschild Solution | Orbits · perihelion precession · light bending · gravitational redshift · GPS revisited |
| 33.4 | Black Holes | Event horizons · the Kerr glimpse · black-hole thermodynamics (Hawking glimpse) |
| 33.5 | Gravitational Waves | Linearized theory · the physics of LIGO · multimessenger astronomy |
| 33.6 | Relativistic Cosmology | FRW derived · the Friedmann equations · the cosmological constant |

### Subject 34 · Quantum Fields & the Frontier (Gateway) — ~25 h
*(Lancaster & Blundell, "QFT for the Gifted Amateur" level — a conceptual-plus-honest gateway)*

| # | Chapter | Topics |
|---|---|---|
| 34.1 | Why Fields | The problems of relativistic QM · creation & annihilation · the second-quantization idea |
| 34.2 | A Taste of Canonical Quantization | Klein–Gordon · the quantum field as a set of oscillators · particles as excitations |
| 34.3 | Interactions & Feynman Diagrams | What the perturbation expansion means · virtual particles · reading simple amplitudes |
| 34.4 | Gauge Symmetry & the Standard Model | The U(1) gauge idea → QED · the Higgs mechanism conceptually |
| 34.5 | The Open Frontier | The renormalization idea · the quantum-gravity problem · strings & loops glimpse · what we don't know — and the graduate roadmap (Jackson, Sakurai, Peskin, Carroll) |

---

## How an adult should move through this

- **Diagnostics, not lockstep.** Every subject opens with a self-test; pass it and skip ahead. Phases 1–2 may take a numerate adult weeks, not the years they take children.
- **Never skip:** proportional reasoning (S1.3), formula fluency (S4.2), the unit circle (S10.3), vectors (S10.4), Taylor-expansion thinking (S10.6/16.5), vector calculus before electrodynamics, linear algebra before quantum formalism.
- **Interleave math and physics** within a phase rather than finishing all math first — each math chapter exists because a physics chapter a few weeks later needs it.
- **Problems are the point.** Reading physics without solving problems is watching someone else exercise. Every chapter ships with a quiz and problems; the spiral means yesterday's hard problem is tomorrow's warm-up.
