export const subject20 = {
  id: "waves-vibrations-optics",
  number: 20,
  title: "Waves, Vibrations & Optics",
  description:
    "The MIT 8.03-style hinge course (French's Vibrations and Waves) — normal modes, the wave equation, and Fourier thinking, the prerequisite that unlocks both quantum mechanics and statistical physics.",
  phase: 4,
  chapters: [
    {
      id: "coupled-oscillators-normal-modes",
      title: "Coupled Oscillators & Normal Modes",
      subtitle:
        "Where matrices meet physics — beats, normal modes, and the road to the continuum",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Couple two pendulums with a spring and something remarkable happens: the motion decomposes into special collective patterns — normal modes — each oscillating at its own frequency. This is the moment matrices meet physics, and it is the conceptual template for everything from molecular vibrations to quantum states. Push the number of oscillators toward infinity and you arrive at waves, the subject of the rest of this course.</p>
<h3>Topics</h3>
<ul>
  <li>Matrices meet physics</li>
  <li>Beats</li>
  <li>The many-body limit</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "the-wave-equation",
      title: "The Wave Equation",
      subtitle:
        "Deriving the wave equation on a string, superposition, and standing waves done formally",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Apply F = ma to a tiny piece of stretched string and out comes the wave equation — one of the most important partial differential equations in physics, governing sound, light, and (in modified form) quantum wavefunctions. This chapter derives it honestly, then explores superposition and how boundary conditions select the discrete standing-wave patterns: your first real taste of how confinement leads to quantization.</p>
<h3>Topics</h3>
<ul>
  <li>Derivation on a string</li>
  <li>Superposition</li>
  <li>Boundary conditions</li>
  <li>Standing waves formally</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "fourier-analysis-intro",
      title: "Fourier Analysis Intro",
      subtitle:
        "Fourier series, spectra, wave packets — and a classical preview of the uncertainty principle",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Fourier's insight — any wave can be built from sines and cosines — is one of the most powerful ideas in science, underpinning music, signal processing, and quantum theory alike. Here you learn to decompose signals into spectra and build wave packets, discovering along the way a purely classical fact: a short pulse needs many frequencies. That trade-off, ported to matter waves, <em>is</em> Heisenberg's uncertainty principle.</p>
<h3>Topics</h3>
<ul>
  <li>Fourier series</li>
  <li>Spectra</li>
  <li>Wave packets</li>
  <li>The uncertainty relation previewed classically</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "em-waves-polarization",
      title: "EM Waves & Polarization",
      subtitle:
        "Plane waves, polarization states, and what happens when light meets a boundary",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The electromagnetic waves predicted at the end of Electromagnetism I now get explored as waves: plane-wave solutions, the polarization states that sunglasses and LCD screens exploit, and reflection at boundaries in the spirit of Fresnel. Polarization is also quietly profound — its two-state structure is the classical ancestor of the qubit.</p>
<h3>Topics</h3>
<ul>
  <li>Plane waves</li>
  <li>Polarization states</li>
  <li>Reflection at boundaries (Fresnel-lite)</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "interference-diffraction-quantitative",
      title: "Interference & Diffraction Quantitative",
      subtitle:
        "Phasors, gratings, single-slit patterns, and the fundamental limits of resolution",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Interference and diffraction get the full quantitative treatment using phasors — a graphical technique that turns messy sums of waves into simple geometry. You will predict exact fringe patterns for N slits and gratings, understand why every optical instrument has a fundamental resolution limit, and build the wave-superposition intuition that quantum mechanics will soon demand of you.</p>
<h3>Topics</h3>
<ul>
  <li>Phasors</li>
  <li>N-slit & gratings</li>
  <li>Single-slit</li>
  <li>Resolution limits</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "geometrical-optics-from-waves",
      title: "Geometrical Optics from Waves",
      subtitle:
        "Why rays work at all — the eikonal idea, matrix optics, instruments, and lasers",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Ray optics is not a separate theory — it is the short-wavelength limit of wave optics, and the eikonal idea makes that connection precise. This chapter revisits lenses and instruments with that deeper understanding, introduces the elegant matrix method for tracing rays through optical systems, and ends with the laser: wave physics, atomic physics, and engineering meeting in one device.</p>
<h3>Topics</h3>
<ul>
  <li>The eikonal idea</li>
  <li>Matrix optics taste</li>
  <li>Instruments revisited</li>
  <li>Lasers intro</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
  ],
};
