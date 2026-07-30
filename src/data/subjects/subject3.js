export const subject3 = {
  id: "thinking-like-a-physicist",
  number: 3,
  title: "Thinking Like a Physicist",
  description:
    "The scientific method, fair tests, graphs, and estimation — the experimental-skill progression every top school system builds, compressed for adults.",
  phase: 1,
  chapters: [
    {
      id: "scientific-method",
      title: "The Scientific Method",
      subtitle:
        "Observation → hypothesis → experiment — and what models, theories, and physics itself really are",
      sections: [
        {
          id: "from-noticing-to-asking",
          title: "From Noticing to Asking",
          content: `
<p>Every piece of physics you will ever learn began with someone <strong>noticing something and refusing to shrug it off</strong>. Ice floats, but almost every other solid sinks in its own liquid. A spinning top stays up; a stationary one falls over. Your phone loses charge faster in the cold. These are all invitations to ask a question — and the quality of the question determines everything that follows.</p>
<p>Scientists sharpen vague curiosity into questions with three properties:</p>
<ul>
  <li><strong>Specific:</strong> not "why is the sky weird at sunset?" but "why does the sky turn red near the horizon when the Sun is low?"</li>
  <li><strong>About measurable things:</strong> the question points at something you could observe, count, or measure — angle, colour, time, temperature.</li>
  <li><strong>Answerable by evidence:</strong> some possible observation could settle it, at least partially.</li>
</ul>
<p>From a good question comes a <strong>hypothesis</strong>: a proposed answer stated clearly enough to be tested. "Cold weather affects batteries" is too mushy. "My phone battery drains at least twice as fast at 0 °C as at 20 °C" is a real hypothesis — it sticks its neck out.</p>
<div class="key-concept">
  <h3>Key Concept: Falsifiability</h3>
  <p>A scientific hypothesis must be <strong>falsifiable</strong> — there must be some conceivable observation that would prove it wrong. "Invisible undetectable gremlins drain my battery" can never be refuted by any measurement, so it is not a scientific claim. Sticking your neck out is the price of admission.</p>
</div>
<p>Notice what a hypothesis is <em>not</em>: it is not a guess you are emotionally attached to. Physicists deliberately hold hypotheses loosely. The point of the next step — the experiment — is to give nature every opportunity to say "no." A hypothesis that survives serious attempts to kill it earns your confidence; one that is merely defended earns nothing. That mental posture, more than any lab equipment, is what this whole subject is about.</p>`,
        },
        {
          id: "predictions-experiments-evidence",
          title: "Predictions, Experiments & Evidence",
          content: `
<p>A hypothesis becomes useful the moment you squeeze a <strong>prediction</strong> out of it: a concrete "if… then…" statement about something you have not yet observed. If cold really drains batteries faster, <em>then</em> a phone left in the fridge should lose more charge in an hour than an identical phone on the table. Now you have something to check.</p>
<p>The experiment is simply the check. The classic loop looks like this:</p>
<ol>
  <li><strong>Observe</strong> something interesting.</li>
  <li><strong>Hypothesize</strong> an explanation.</li>
  <li><strong>Predict</strong> what should happen in a situation you can arrange.</li>
  <li><strong>Test</strong> — run the experiment and record what actually happens.</li>
  <li><strong>Compare</strong> prediction with outcome, then revise or retest.</li>
</ol>
<p>Two subtleties separate real science from wishful thinking. First, <strong>evidence never "proves" a hypothesis</strong> — it supports it or contradicts it. A thousand successful predictions can be undone by one clean failure; that is exactly what happened to Newtonian gravity when Mercury's orbit misbehaved. Second, the loop is a <em>loop</em>: a failed prediction is not a defeat but the most informative result you can get, because it tells you your picture of the world needs repair.</p>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Hypothesis: a lid dramatically slows how fast a hot drink cools. Prediction: of two identical mugs of hot water filled at the same time, the covered one will still be noticeably hotter after 15 minutes. Fill both mugs from the same kettle, cover one with a saucer, wait 15 minutes, then compare with a kitchen thermometer (or carefully by sip). You have just run the full loop: observation → hypothesis → prediction → test → conclusion. Bonus: was your test <em>fair</em>? Same mug shape? Same starting temperature? Chapter 2 is about exactly that.</p>
</div>
<p>Keep a written record of predictions <em>before</em> testing. Human memory happily rewrites "I expected that" after the fact — paper does not.</p>`,
        },
        {
          id: "models-and-theories",
          title: "Models & Theories",
          content: `
<p>Between a single hypothesis and the grand laws of physics sit two workhorses of scientific thinking: <strong>models</strong> and <strong>theories</strong>.</p>
<p>A <strong>model</strong> is a deliberately simplified stand-in for reality — simple enough to reason with, faithful enough to be useful. The "particle model" pictures matter as tiny balls in motion; it ignores almost everything about atoms, yet it beautifully explains melting, evaporation, and gas pressure. Physicists treat "all models are wrong, but some are useful" not as a confession but as a strategy: you <em>choose</em> what to ignore.</p>
<div class="analogy">
  <h3>Analogy: The Subway Map</h3>
  <p>A subway map is geographically false — distances are distorted, curves straightened, streets erased. Yet it is far more useful for riding the subway than a satellite photo, precisely <em>because</em> of what it leaves out. A physics model is a subway map of nature: judged not by completeness but by whether it gets you where you need to go.</p>
</div>
<p>A <strong>theory</strong>, in scientific usage, is the opposite of "just a guess." It is a broad, coherent explanatory framework that has survived extensive testing and ties many observations together: the particle theory of matter, the theory of electromagnetism, the theory of relativity. In everyday English "theory" means speculation; in science it is the highest status an explanation can earn.</p>
<table>
  <thead>
    <tr><th>Term</th><th>What it is</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Hypothesis</strong></td><td>A testable proposed answer to one question</td><td>"Period of a pendulum depends only on its length"</td></tr>
    <tr><td><strong>Model</strong></td><td>A simplified, workable picture of a system</td><td>Matter as tiny moving particles</td></tr>
    <tr><td><strong>Theory</strong></td><td>A well-tested framework explaining many phenomena</td><td>Newton's theory of gravitation</td></tr>
    <tr><td><strong>Law</strong></td><td>A compact rule (often a formula) describing a pattern</td><td>Ohm's law, V = IR</td></tr>
  </tbody>
</table>
<p>Note that a law <em>describes</em> a pattern while a theory <em>explains</em> it — and laws do not "graduate" into theories or vice versa. They are different kinds of tools.</p>`,
        },
        {
          id: "what-physics-is-and-isnt",
          title: "What Physics Is (and Isn't)",
          content: `
<p>Physics is the search for the <strong>simplest, most general rules</strong> that describe how the universe behaves — rules that apply equally to a falling apple, a falling raindrop, and a falling satellite. Where biology and chemistry study particular systems, physics hunts for the patterns underneath all of them: motion, energy, forces, fields, matter, and how they interconnect.</p>
<p>Three habits define the physicist's approach:</p>
<ul>
  <li><strong>Quantify:</strong> turn "heavy," "fast," and "hot" into numbers with units, because numbers can be compared, predicted, and checked.</li>
  <li><strong>Idealize:</strong> strip a problem to its essentials first (frictionless slope, spherical cow), then add complications one at a time.</li>
  <li><strong>Universalize:</strong> distrust any rule that works only here, only today, or only for you.</li>
</ul>
<p>Just as important is what physics is <em>not</em>. Physics does not answer questions of value ("what should I do?"), taste, or ultimate purpose — not because those questions are unimportant, but because no measurement can settle them. And a field is not scientific just because it uses scientific-sounding language. The test is behavioural: does it make risky, falsifiable predictions, and does it change its mind when they fail?</p>
<div class="did-you-know">
  <h3>Did You Know: Horoscopes Under Test</h3>
  <p>Astrology makes an excellent contrast case. When astrologers' specific predictions have been tested — matching birth charts to personality profiles under controlled conditions, as in Shawn Carlson's famous 1985 double-blind test published in <em>Nature</em> — they perform at chance level. The revealing part is what happened next: nothing. The claims did not change. A field that never updates in response to failed predictions is not doing science, whatever vocabulary it borrows.</p>
</div>
<p>None of this makes physics cold. It is, at heart, an act of optimism: the wager that the universe is comprehensible, that honest questions get honest answers, and that anyone — including an adult restarting from scratch — can check the answers for themselves. That last part is the point of this whole course: you are not asked to believe anything you cannot, in principle, test.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "What makes a hypothesis scientific rather than just an opinion?",
          options: [
            "It is stated by a qualified expert",
            "It is falsifiable — some possible observation could prove it wrong",
            "It has already been proven true",
            "It uses mathematical language",
          ],
          correctIndex: 1,
          explanation:
            "A scientific hypothesis must stick its neck out: there must be some conceivable measurement or observation that would refute it. Claims that no evidence could ever contradict are not scientific, whoever states them.",
        },
        {
          question:
            "In everyday speech, 'theory' means a guess. What does it mean in science?",
          options: [
            "A broad explanatory framework that has survived extensive testing",
            "An idea that has not yet been tested",
            "A hypothesis proposed by a famous scientist",
            "A mathematical formula describing one experiment",
          ],
          correctIndex: 0,
          explanation:
            "In science, 'theory' is the highest status an explanation can earn — a coherent framework (like electromagnetism or relativity) that ties many observations together and has withstood serious attempts to refute it.",
        },
        {
          question:
            "Why do physicists say experiments can support a hypothesis but never prove it?",
          options: [
            "Because experiments always contain errors",
            "Because proof is only possible in biology and chemistry",
            "Because a single future failed prediction could still overturn it, however many past tests it passed",
            "Because hypotheses are opinions and opinions cannot be proven",
          ],
          correctIndex: 2,
          explanation:
            "Evidence accumulates support but can never guarantee future success. Newtonian gravity passed tests for two centuries before Mercury's orbit exposed its limits — one clean, well-verified failure outweighs a thousand successes.",
        },
        {
          question:
            "The particle model treats atoms as tiny featureless balls, which is known to be false in detail. Why do physicists still use it?",
          options: [
            "Out of respect for tradition",
            "Because no better model of the atom exists",
            "Because using a false model is acceptable if the conclusions are checked twice",
            "Because a deliberately simplified model can capture exactly the behaviour that matters, like a subway map",
          ],
          correctIndex: 3,
          explanation:
            "Models are judged by usefulness, not completeness. Like a subway map that distorts geography to make routes clear, the particle model ignores atomic detail yet correctly explains melting, evaporation, and gas pressure.",
        },
        {
          question:
            "Which of these is a genuinely testable prediction, in the 'if… then…' sense?",
          options: [
            "Cold weather is bad for electronics",
            "If I leave one of two identical charged phones at 0 °C and one at 20 °C for an hour, the cold one will have lost more charge",
            "Batteries contain energy that can be affected by many factors",
            "Everyone knows phones die faster in winter",
          ],
          correctIndex: 1,
          explanation:
            "A useful prediction specifies a concrete arrangement and a measurable outcome that could fail to occur. The other statements are too vague for any observation to contradict them cleanly.",
        },
      ],
    },
    {
      id: "fair-tests-and-variables",
      title: "Fair Tests & Variables",
      subtitle:
        "Comparing, relating, and controlling variables — mastered through the classic pendulum investigation",
      sections: [
        {
          id: "from-comparing-to-relating",
          title: "From Comparing to Relating",
          content: `
<p>The world's strongest school science systems teach experimental skill as a ladder, one rung per year, and it is worth climbing the same ladder deliberately as an adult — it takes minutes, not years, but skipping rungs leaves gaps.</p>
<p><strong>Rung 1 — Comparing.</strong> The simplest experiment answers "which one?" Which paper towel absorbs more water? Which pan heats up faster? A comparison needs only two things: a common task and an honest judge. Even here, fairness sneaks in — comparing towels is meaningless if one towel is twice the size of the other.</p>
<p><strong>Rung 2 — Relating.</strong> The next question is "how does one thing change with another?" Not "which ball bounces higher?" but "how does bounce height change as I drop the ball from higher up?" You are now relating two quantities — drop height and bounce height — and the answer is not a winner but a <em>pattern</em>: more of this gives more of that, or less, or no change at all.</p>
<p><strong>Rung 3 — Controlling.</strong> The hardest and most important rung: when many things <em>could</em> matter, how do you find out which ones actually do? The answer — change one thing at a time while holding everything else fixed — is the subject of the rest of this chapter.</p>
<div class="analogy">
  <h3>Analogy: Debugging a Recipe</h3>
  <p>Your bread came out dense. Was it the new flour, the colder kitchen, or the shorter kneading time? If you change all three next bake and it improves, you have learned almost nothing. Any cook who changes one thing per bake is already doing controlled experimentation — physicists just do it on purpose, every time.</p>
</div>
<p>Notice that each rung asks a sharper question of nature than the last. "Which?" becomes "how much?" becomes "what actually causes what?" That final question — causation, untangled from coincidence — is the one the fair test is built to answer, and it is the single most transferable skill in this entire course: it works on bread, medicine, marketing claims, and pendulums alike.</p>`,
        },
        {
          id: "naming-the-variables",
          title: "Naming the Variables",
          content: `
<p>A <strong>variable</strong> is anything in an experiment that can change or be changed. Fair-test design starts by listing them and assigning each one a role:</p>
<ul>
  <li><strong>Independent variable</strong> — the one thing <em>you deliberately change</em>. (Also called the input.)</li>
  <li><strong>Dependent variable</strong> — the thing <em>you measure</em> to see the effect. (The output.)</li>
  <li><strong>Controlled variables</strong> — everything else that could plausibly matter, which you <em>hold fixed</em>.</li>
</ul>
<p>A test is "fair" precisely when only the independent variable differs between trials. Then, and only then, can a change in the outcome be pinned on the thing you changed.</p>
<table>
  <thead>
    <tr><th>Question</th><th>Independent</th><th>Dependent</th><th>Must control</th></tr>
  </thead>
  <tbody>
    <tr><td>Does sugar dissolve faster in hotter water?</td><td>Water temperature</td><td>Time to dissolve</td><td>Amount of water, amount of sugar, stirring, sugar grain size</td></tr>
    <tr><td>Does a heavier car roll further down a ramp?</td><td>Mass of toy car</td><td>Distance rolled</td><td>Ramp angle, release height, same car body, same floor</td></tr>
    <tr><td>Does bounce height depend on drop height?</td><td>Drop height</td><td>Bounce height</td><td>Same ball, same surface, no throw (just release)</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h3>Key Concept: One Variable at a Time</h3>
  <p>If two things change between trials and the result differs, you cannot tell which one was responsible — the experiment is <strong>confounded</strong>, and no amount of clever analysis afterwards can fully rescue it. Change one variable; measure one variable; freeze the rest.</p>
</div>
<p>Two practical habits complete the setup. First, <strong>decide in advance</strong> what you will change, what you will measure, and what you will hold fixed — writing it down keeps you honest. Second, <strong>repeat each trial</strong> at least three times. No two runs ever come out identical; repeats reveal how much natural scatter your setup has, so you can tell a real effect from ordinary wobble. We will quantify that wobble in Chapter 3.</p>`,
        },
        {
          id: "the-pendulum-investigation",
          title: "The Pendulum Investigation",
          content: `
<p>Here is the most celebrated fair-test exercise in the world. In Japan, every grade-5 student spends weeks on it; it appears in curricula from Singapore to Finland because it is the perfect controlled-variables workout. The question: a pendulum swings back and forth with some <strong>period</strong> (the time for one complete swing). What does the period depend on?</p>
<p>Three candidates suggest themselves, and intuition argues loudly for all of them:</p>
<ul>
  <li><strong>Length</strong> of the string — surely a longer pendulum swings more slowly?</li>
  <li><strong>Mass</strong> of the bob — surely a heavier bob is harder to move, so slower?</li>
  <li><strong>Amplitude</strong> — surely a wider swing takes longer, since the bob travels further?</li>
</ul>
<p>The investigation is three fair tests, one per candidate. To test mass, you swing pendulums of the same length and same amplitude with different bobs. To test amplitude, same length and same bob, different release angles. To test length, same bob and same amplitude, different string lengths. One independent variable per test; everything else frozen.</p>
<p>The result surprises almost everyone: <strong>only length matters</strong>. Double the mass — no change. Swing wider (within modest angles) — no change. But lengthen the string and the period grows: four times the length gives twice the period. Intuition loses two out of three, which is exactly why we run experiments. (The full law, coming in later subjects, is T = 2π√(L/g) — notice mass and amplitude simply do not appear.)</p>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Tie a small weight (a few metal washers, or keys) to a string and hang it from a door frame or table edge. Time <strong>10 complete swings</strong> with your phone's stopwatch and divide by 10 — timing one swing is too error-prone. Now run the three fair tests: double the washers (same length, small swing); double the release angle (same length, same washers); then quadruple the length, say 25 cm → 1 m (same washers, small swing). You should find the first two periods unchanged and the third roughly doubled, from about 1.0 s to about 2.0 s.</p>
</div>
<p>Galileo reportedly began this line of thought watching a lamp swing in Pisa's cathedral, timing it against his own pulse. Your phone is a better stopwatch; the reasoning is identical.</p>`,
        },
        {
          id: "designing-good-experiments",
          title: "Designing Good Experiments",
          content: `
<p>You now have all the pieces. Here is the checklist a physicist runs through — consciously at first, automatically forever after — before trusting any experiment, their own included:</p>
<ol>
  <li><strong>One question, stated up front.</strong> What exactly are you asking, and what would each possible answer look like in the data?</li>
  <li><strong>One independent variable.</strong> Everything else that could plausibly matter is listed and pinned down.</li>
  <li><strong>A measurable dependent variable.</strong> "Better," "faster-ish," and "seems stronger" are not measurements. Choose a number and a unit.</li>
  <li><strong>Repeats.</strong> At least three trials per setting, so scatter is visible.</li>
  <li><strong>A range, not two points.</strong> Test five lengths, not two — patterns (and surprises) live in the range.</li>
  <li><strong>Records made in the moment.</strong> Data written down as it happens, including the runs that "went wrong."</li>
</ol>
<p>Equally valuable is knowing the classic failure modes, because you will see them everywhere once named:</p>
<ul>
  <li><strong>Confounding:</strong> two variables changed at once — the bread-recipe mistake. The fix is structural, not statistical: redesign the test.</li>
  <li><strong>Cherry-picking:</strong> keeping the trials that fit your hunch and quietly discarding the rest. Anomalies may be excluded, but only for a documented physical reason ("bumped the table"), never for disagreeing with you.</li>
  <li><strong>Tiny samples:</strong> one lucky trial proves nothing. Coincidence is astonishingly good at impersonating causation over small numbers.</li>
  <li><strong>Moving goalposts:</strong> deciding what counts as success <em>after</em> seeing the results.</li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Fair Testing Is a Life Skill</h3>
  <p>"This supplement worked for my cousin," "sales rose after the redesign," "it rained right after they seeded the clouds" — each is an uncontrolled, unrepeated, one-variable-among-many observation. You do not need a laboratory to ask the physicist's question: <em>compared to what, with what else held fixed, how many times?</em></p>
</div>
<p>Design is nine-tenths of experimental skill. A fair test with kitchen equipment beats a sloppy test with precision instruments, every single time.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "In an experiment to see whether water temperature affects how fast sugar dissolves, what is the dependent variable?",
          options: [
            "The water temperature",
            "The amount of sugar",
            "The time the sugar takes to dissolve",
            "The size of the cup",
          ],
          correctIndex: 2,
          explanation:
            "The dependent variable is the outcome you measure — here, dissolving time. Temperature is the independent variable (deliberately changed), while sugar amount, water amount, and stirring must be controlled.",
        },
        {
          question:
            "In the classic pendulum investigation, which factor actually changes the pendulum's period?",
          options: [
            "The length of the string only",
            "The mass of the bob only",
            "Both the mass and the amplitude",
            "Length, mass, and amplitude all matter equally",
          ],
          correctIndex: 0,
          explanation:
            "Fair tests show that (for modest swing angles) neither mass nor amplitude changes the period — only length does. Quadrupling the length doubles the period, reflected in the law T = 2π√(L/g), where mass and amplitude never appear.",
        },
        {
          question:
            "To test fairly whether the mass of the bob affects a pendulum's period, you should change the mass while keeping…",
          options: [
            "the mass constant and varying the length",
            "the string length and release amplitude the same in every trial",
            "everything different, to explore more possibilities at once",
            "the period the same in every trial",
          ],
          correctIndex: 1,
          explanation:
            "A fair test changes only the variable under investigation. Testing mass means every trial uses the same length and same amplitude; only the bob changes. Otherwise you cannot attribute any difference to mass alone.",
        },
        {
          question:
            "You changed both the ramp angle and the car's mass, and the car rolled further. What can you conclude?",
          options: [
            "Mass makes cars roll further",
            "Ramp angle makes cars roll further",
            "Both factors contributed equally",
            "Nothing definite — the experiment is confounded because two variables changed at once",
          ],
          correctIndex: 3,
          explanation:
            "When two variables change together, the effect cannot be attributed to either one — the experiment is confounded. The fix is to redesign: vary the angle with mass fixed, then vary the mass with angle fixed.",
        },
        {
          question: "Why time 10 pendulum swings and divide by 10, rather than timing a single swing?",
          options: [
            "The pendulum needs 10 swings to reach full speed",
            "Your reaction-time error gets spread across 10 swings, shrinking its effect on the result tenfold",
            "The period only stabilizes after several swings",
            "Stopwatches cannot measure times shorter than 10 seconds",
          ],
          correctIndex: 1,
          explanation:
            "Your start/stop reaction error (a few tenths of a second) is roughly the same whether you time 1 swing or 10. Dividing a 10-swing measurement by 10 also divides that error by 10 — a classic trick for improving precision with no new equipment.",
        },
      ],
    },
    {
      id: "data-and-graphs",
      title: "Data & Graphs",
      subtitle:
        "Tables, bar and line graphs, patterns and averages — and a first honest look at uncertainty",
      sections: [
        {
          id: "tables-that-work",
          title: "Tables That Work",
          content: `
<p>Raw experience is fleeting; <strong>data is experience written down in a form you can reason about later</strong>. The humble table is where that starts, and a few conventions — the same ones used in every professional lab — make the difference between a table you can trust and a pile of numbers.</p>
<ul>
  <li><strong>Units live in the header, once.</strong> Write "Length (cm)" at the top, then plain numbers below. A column mixing "25 cm" and "0.3 m" is an accident waiting to happen.</li>
  <li><strong>Independent variable in the left column</strong>, in a sensible order (usually increasing). Dependent variable(s) to the right.</li>
  <li><strong>One column per repeat, plus a mean.</strong> Three trials means three columns and an average — never just the average, because the spread of the repeats is information you will want later.</li>
  <li><strong>Record immediately, and record everything.</strong> Data written from memory an hour later is fiction with confidence. Failed runs get recorded too, with a note.</li>
</ul>
<p>Here is what pendulum data looks like done properly:</p>
<table>
  <thead>
    <tr><th>Length (cm)</th><th>Trial 1 — time for 10 swings (s)</th><th>Trial 2 (s)</th><th>Trial 3 (s)</th><th>Mean (s)</th><th>Period (s)</th></tr>
  </thead>
  <tbody>
    <tr><td>25</td><td>10.1</td><td>9.9</td><td>10.2</td><td>10.1</td><td>1.01</td></tr>
    <tr><td>50</td><td>14.3</td><td>14.1</td><td>14.4</td><td>14.3</td><td>1.43</td></tr>
    <tr><td>100</td><td>20.0</td><td>20.3</td><td>19.9</td><td>20.1</td><td>2.01</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h3>Key Concept: The Mean Tames the Wobble</h3>
  <p>Repeated measurements never agree exactly — hand timing, air currents, and release wobble all inject scatter. The <strong>mean</strong> (add the trials, divide by how many) smooths out this random scatter, and the trials' spread tells you how much to trust it. One reading is an anecdote; three readings and a mean are a measurement.</p>
</div>
<p>Notice something satisfying in that table: quadrupling the length from 25 cm to 100 cm did double the period, 1.01 s → 2.01 s. The pattern was in the data — but it takes a graph to make patterns leap out, which is where we go next.</p>`,
        },
        {
          id: "bar-or-line",
          title: "Bar or Line? Choosing and Building Graphs",
          content: `
<p>A graph is a machine for turning columns of numbers into a shape your visual system can read instantly. Choosing the right kind is the first decision, and it hinges on the independent variable:</p>
<ul>
  <li><strong>Bar graph — for categories.</strong> When the things compared are separate kinds with no in-between (materials, brands, days of the week), draw bars. There is no such thing as "halfway between wood and steel," so connecting them with a line would be nonsense.</li>
  <li><strong>Line graph (or scatter plot) — for continuous quantities.</strong> When the independent variable can take any value in a range (length, temperature, time), plot points and look for the trend. In-between values exist, so the trend between points is meaningful.</li>
</ul>
<p>Quick test: could the x-axis value be 37.4? If yes, it is continuous — points and a trend line. If the question is absurd, bars.</p>
<p>A graph worth drawing is worth drawing properly. The professional checklist:</p>
<ol>
  <li><strong>Independent variable on the horizontal axis</strong>, dependent on the vertical — "y against x" means y is measured, x is chosen.</li>
  <li><strong>Both axes labelled with quantity and unit:</strong> "Length (cm)", "Period (s)".</li>
  <li><strong>Scales chosen so the data fills the plot</strong>, with evenly spaced, round-numbered gridlines. A graph squashed into one corner hides its own story.</li>
  <li><strong>Points marked clearly</strong>, and for continuous data, a single <strong>smooth trend</strong> — a straight line or gentle curve capturing the overall pattern, not a jittery connect-the-dots through every point.</li>
</ol>
<div class="analogy">
  <h3>Analogy: The Trend Line as a Voting Booth</h3>
  <p>Each data point casts a vote about where the true relationship lies, but every voter is slightly unreliable — scatter is guaranteed. Drawing a smooth best-fit line through the middle of the points is letting the votes average out. Zigzagging through every single point treats each unreliable voter as infallible, faithfully reproducing the noise instead of the signal.</p>
</div>
<p>That last habit — trusting the trend over the individual point — marks the biggest single step from school plotting to scientific plotting.</p>`,
        },
        {
          id: "reading-stories-from-graphs",
          title: "Reading Stories from Graphs",
          content: `
<p>Making graphs is half the skill; <strong>reading</strong> them is the half that pays off daily, since the world communicates in graphs — news charts, fitness apps, energy bills. A line graph tells its story through shape, and physicists read shape with three questions.</p>
<p><strong>1. Which way does it go?</strong> Rising: the quantities increase together. Falling: one grows as the other shrinks. Flat: the dependent variable simply does not care — remember pendulum period against mass: a perfectly flat line is a strong, useful result, not a failed experiment.</p>
<p><strong>2. How steep, and is the steepness changing?</strong> The <strong>slope</strong> is the rate of change — how much the y-quantity changes per unit of x. On a distance–time graph, slope literally <em>is</em> speed: steeper means faster, flat means stopped, and a slope that steepens over time means acceleration. Learning to see slope as "how fast y responds to x" is one of the highest-value reading skills in all of physics.</p>
<p><strong>3. Is it a straight line through the origin?</strong> That special shape means <strong>direct proportionality</strong>: double x, and y doubles. Straight but missing the origin means "linear but with a head start" — related, but not proportional. Curves tell subtler stories: period versus length curves like a square root (flattening as it rises), which is a genuine clue about the underlying law.</p>
<div class="key-concept">
  <h3>Key Concept: Interpolate Freely, Extrapolate Carefully</h3>
  <p><strong>Interpolation</strong> — reading between your measured points — is usually safe: you have data on both sides. <strong>Extrapolation</strong> — extending the trend beyond your data — is a bet that the pattern continues where you never looked. Sometimes it must be done, but every extrapolation deserves suspicion: a spring stretches proportionally right up until it doesn't.</p>
</div>
<p>Finally, read graphs defensively. A vertical axis that starts at 90 instead of 0 makes a 2% difference look like a cliff; a cherry-picked time window can turn any wiggle into a trend. The same conventions that make graphs powerful make them easy to abuse — and now you know exactly where to look.</p>`,
        },
        {
          id: "first-look-at-uncertainty",
          title: "A First Look at Uncertainty",
          content: `
<p>Here is a truth that separates physics from arithmetic: <strong>no measurement is exact</strong>. Every number you will ever measure comes with a fuzz of doubt, and mature science does not hide the fuzz — it measures it, reports it, and reasons with it.</p>
<p>Where does the fuzz come from? Your ruler has finite markings; your reaction time varies; the room's drafts nudge the pendulum. These effects come in two flavours:</p>
<ul>
  <li><strong>Random scatter</strong> — trial-to-trial wobble in both directions. Repeats and averaging beat it down.</li>
  <li><strong>Systematic error</strong> — a consistent push one way: a stopwatch that runs slow, a ruler measured from its worn end, a scale that reads 0.2 kg with nothing on it. Averaging is helpless here; only checking the instrument catches it.</li>
</ul>
<p>The simplest honest report of a repeated measurement is <strong>mean ± half the spread</strong>. Timing swings gave 10.1, 9.9, and 10.2 s: the mean is 10.1 s and the spread is 0.3 s, so report 10.1 ± 0.15 s — "our best value is 10.1, and we would not be shocked by anything within about 0.15 of it." That little ± converts a bare claim into a testable one: two results agree when their ± ranges overlap.</p>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Measure your own reaction time with a ruler and a friend. They hold a 30 cm ruler vertically by the top; you position your open finger and thumb at the 0 cm mark, and catch it the instant they drop it (no warning). Record the catch distance, repeat 10 times, and tabulate. Convert with t = √(2d ÷ 980) (d in cm, t in seconds): catching at 20 cm means about 0.20 s. Now look at your table like a scientist: how big is your scatter? Is your mean improving over the 10 trials (a practice effect — a systematic drift!)? You have just done a complete uncertainty analysis with a ruler.</p>
</div>
<p>An <strong>anomaly</strong> — one reading far outside the pack — deserves investigation, not silent deletion: find the cause ("I flinched early"), note it, and repeat the trial. Uncertainty handled this honestly is not weakness. It is precisely what makes measurements comparable, claims checkable, and science self-correcting.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "You measured how far a toy car rolls on four different floor surfaces: tile, carpet, wood, and rug. Which graph suits this data?",
          options: [
            "A line graph, because distance is continuous",
            "A pie chart, to show each surface's share",
            "A bar graph, because the surfaces are separate categories with no in-between values",
            "No graph is possible with only four data points",
          ],
          correctIndex: 2,
          explanation:
            "The independent variable (surface type) is categorical — there is no value 'between tile and carpet' — so bars are correct. Line graphs are reserved for continuous independent variables like length, time, or temperature.",
        },
        {
          question: "On a distance–time graph, what does the slope of the line represent?",
          options: [
            "The total distance travelled",
            "The speed of motion",
            "The time elapsed",
            "The mass of the moving object",
          ],
          correctIndex: 1,
          explanation:
            "Slope is the rate of change of the vertical quantity per unit of the horizontal one — here, distance per time, which is speed. Steeper means faster; a flat section means stationary.",
        },
        {
          question:
            "Three timing trials give 14.3 s, 14.1 s, and 14.4 s. What is the best value to report?",
          options: [
            "14.4 s, since the largest reading is the most complete",
            "14.1 s, since the smallest reading has the least error",
            "42.8 s, the total of all three",
            "About 14.3 s — the mean of the trials, with roughly ± 0.15 s of uncertainty",
          ],
          correctIndex: 3,
          explanation:
            "The mean (14.27 ≈ 14.3 s) is the best single estimate because random scatter partially cancels when you average. The spread of 0.3 s suggests an uncertainty of about ± 0.15 s — the honest way to report the result.",
        },
        {
          question:
            "A kitchen scale reads 0.2 kg with nothing on it, so every measurement comes out 0.2 kg too high. This is an example of…",
          options: [
            "a systematic error, which averaging repeated readings cannot remove",
            "random scatter, which averaging removes",
            "an anomaly that should be deleted from the data",
            "acceptable uncertainty that needs no correction",
          ],
          correctIndex: 0,
          explanation:
            "A consistent push in one direction is a systematic error. Unlike random scatter, it never averages away — every reading is shifted the same way. The cure is checking and correcting the instrument (here, taring the scale).",
        },
        {
          question:
            "Your data on spring stretch versus load is beautifully linear from 0 to 500 g. A friend uses your trend line to predict the stretch at 5 kg. Why should you both be cautious?",
          options: [
            "Trend lines can only be used at the exact points measured",
            "Predictions require at least 100 data points",
            "This is extrapolation far beyond the measured range — the linear pattern may break down (springs eventually deform)",
            "The prediction is invalid because grams must first be converted to newtons",
          ],
          correctIndex: 2,
          explanation:
            "Reading within your measured range (interpolation) is well-supported; extending the pattern to ten times the maximum load (extrapolation) assumes the spring stays linear where you have no evidence — and real springs stop obeying Hooke's law and permanently deform.",
        },
      ],
    },
    {
      id: "estimation-and-sanity-checks",
      title: "Estimation & Sanity Checks",
      subtitle:
        "Order-of-magnitude reasoning, Fermi problems, and letting units catch your mistakes",
      sections: [
        {
          id: "the-power-of-ten",
          title: "Thinking in Powers of Ten",
          content: `
<p>Ask a physicist how many people live in your city and you may get the answer "about 10⁶." Not evasion — a different, deliberately chosen precision called an <strong>order of magnitude</strong>: the nearest power of ten. It sounds crude, but thinking in powers of ten is one of the sharpest tools in physics, for two reasons.</p>
<p>First, <strong>most real questions only need the exponent</strong>. Will the file fit on the drive? Can this battery run that heater? Is this news statistic even possible? For all of these, knowing whether the answer is closer to 10³ or 10⁶ settles the matter; the third significant figure never gets consulted.</p>
<p>Second, <strong>orders of magnitude are hard to get wrong by much</strong>. Your guess for a city's population might be off by a factor of two, but rarely by a factor of a hundred. Working in powers of ten deliberately plays to the strength of rough knowledge.</p>
<p>To find an order of magnitude, write the number in scientific notation and round: 3,200 = 3.2 × 10³ ≈ 10³, while 82,000 = 8.2 × 10⁴ rounds up to 10⁵. A feel for the scale of things is worth building deliberately:</p>
<table>
  <thead>
    <tr><th>Length</th><th>Order of magnitude</th></tr>
  </thead>
  <tbody>
    <tr><td>Thickness of paper</td><td>10⁻⁴ m</td></tr>
    <tr><td>An ant</td><td>10⁻³ m</td></tr>
    <tr><td>A human</td><td>10⁰ m (≈ 2 m)</td></tr>
    <tr><td>Height of Everest</td><td>10⁴ m</td></tr>
    <tr><td>Diameter of Earth</td><td>10⁷ m</td></tr>
    <tr><td>Earth to Sun</td><td>10¹¹ m</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h3>Key Concept: Each Step Is a Factor of Ten</h3>
  <p>The gap between 10⁴ and 10⁶ is not "2 more" — it is <strong>100 times</strong>. Order-of-magnitude thinking is multiplicative: a billion (10⁹) is not "a bit past" a million (10⁶), it is a thousand millions. A million seconds is 12 days; a billion seconds is 32 <em>years</em>. Most bad intuitions about big numbers are failures to feel this difference.</p>
</div>
<p>From here on, before computing anything precisely, we will ask: <em>roughly what size should the answer be?</em> That one habit catches more errors than any calculator.</p>`,
        },
        {
          id: "fermi-problems",
          title: "Fermi Problems",
          content: `
<p>Enrico Fermi, one of the great physicists of the twentieth century, was famous for estimating seemingly unknowable quantities — legend says he estimated the strength of the first atomic-bomb test by dropping scraps of paper and watching how far the blast wave carried them, landing within a factor of two of the instrumented value. A <strong>Fermi problem</strong> honours that spirit: estimate something outrageous using only common knowledge and courage.</p>
<p>The classic: <em>how many piano tuners work in Chicago?</em> The method is always the same — <strong>break the impossible number into a chain of guessable ones</strong>:</p>
<ol>
  <li>Chicago has roughly 3 × 10⁶ people — about 10⁶ households.</li>
  <li>Maybe 1 household in 20 has a piano → ~5 × 10⁴ pianos.</li>
  <li>A piano gets tuned about once a year → 5 × 10⁴ tunings/year.</li>
  <li>A tuner does ~4 tunings a day, ~250 days a year → ~10³ tunings per tuner per year.</li>
  <li>So Chicago supports about 5 × 10⁴ ÷ 10³ ≈ <strong>50 tuners</strong>.</li>
</ol>
<p>Directory listings historically said: a few dozen. The magic is that individual errors tend to <strong>cancel</strong>: guess pianos too high and tunings-per-year too low, and the product barely moves. A chain of five guesses, each within a factor of 2–3, usually lands the final answer within a factor of 10 — which is exactly what you need to call nonsense on a claim, size a plan, or decide whether a precise calculation is worth doing.</p>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Estimate how many litres of water your household uses per day. Chain it: showers (minutes × ~10 L/min) + toilet flushes (count × ~6 L) + dishes, laundry, cooking, drinking. Write down your total — then check yourself against your water bill or meter, which reports actual usage (often in m³: 1 m³ = 1,000 L). Landing within a factor of 2 on your first try is genuinely good Fermi form. Where was your worst single guess?</p>
</div>
<p>Estimate first, look up later. The estimate builds the intuition; the lookup then calibrates it — and every future estimate gets sharper.</p>`,
        },
        {
          id: "let-the-units-do-the-work",
          title: "Let the Units Do the Work",
          content: `
<p>Units are not decorations after a number — they are <strong>algebra that checks your reasoning for free</strong>. Treat every unit as a symbol that multiplies, divides, and cancels exactly like x and y, and two superpowers follow.</p>
<p><strong>Superpower 1: conversions become unmissable.</strong> To convert, multiply by fractions equal to 1. Converting 90 km/h to m/s:</p>
<p style="text-align:center">90 km/h × (1,000 m / 1 km) × (1 h / 3,600 s) = 25 m/s</p>
<p>The km cancels, the h cancels, and only m/s survives. If you had flipped a fraction, the units would refuse to cancel — the mistake announces itself before the arithmetic even happens.</p>
<p><strong>Superpower 2: formulas can be sanity-checked without knowing physics.</strong> An equation is only meaningful if both sides carry the same units — you cannot equate metres to seconds any more than you can pay a bill in kilograms. Suppose you half-remember distance fallen as d = ½gt, with g ≈ 9.8 m/s² and t in seconds. Check: (m/s²) × s = m/s. That is a <em>speed</em>, not a distance — the formula must be wrong. The correct d = ½gt² gives (m/s²) × s² = m. ✓ You just debugged a physics formula with no physics at all, only unit bookkeeping. This habit, called <strong>dimensional analysis</strong>, scales all the way to research: professionals run it on every result, reflexively.</p>
<div class="did-you-know">
  <h3>Did You Know: The $327 Million Unit Error</h3>
  <p>In 1999 NASA's Mars Climate Orbiter burned up in the Martian atmosphere because one team's software output thruster impulse in pound-force seconds while another's expected newton-seconds — a factor of 4.45 slipped through every review. The spacecraft arrived 170 km lower than planned. The most expensive unit-conversion mistake in history is now the standard cautionary tale: <em>always carry the units</em>.</p>
</div>
<p>Make it mechanical: write units beside every number, cancel them like fractions, and refuse to box any answer whose units are wrong. Wrong units mean a wrong answer, with certainty; right units do not guarantee a right answer, but they eliminate the entire family of errors that carelessness produces most often.</p>`,
        },
        {
          id: "the-sanity-check-toolkit",
          title: "The Sanity-Check Toolkit",
          content: `
<p>A calculator will happily tell you that a bathtub holds 4,000,000 litres or that a cyclist rides at 900 km/h. The final skill of this subject — the one that quietly guards all the others — is the reflex of interrogating every answer before accepting it. Four checks, run in seconds:</p>
<ol>
  <li><strong>The size check.</strong> Compare against benchmarks you carry in your head. Build this shelf deliberately: a human is ~70 kg; brisk walking is ~1.5 m/s and highway driving ~30 m/s; a car is ~1,500 kg; a flight of stairs is ~3 m; a bathtub is ~150 L; a phone battery stores ~10 Wh; room temperature is ~20 °C. Any result wildly off-shelf is guilty until proven innocent.</li>
  <li><strong>The unit check.</strong> From the previous section — wrong units, wrong answer, no appeal.</li>
  <li><strong>The direction check.</strong> Should the answer grow or shrink as inputs change? More friction should mean stopping sooner; if your formula says otherwise, the formula (or your algebra) is broken.</li>
  <li><strong>The extreme-case check.</strong> Push inputs to limits where the answer is obvious. A formula for pendulum period should give a huge period for an absurdly long string and zero for zero length. Extreme cases are where wrong formulas fail most loudly.</li>
</ol>
<div class="analogy">
  <h3>Analogy: The Restaurant Bill</h3>
  <p>Six people dine, and the bill says $4,700. You do not re-add every line — you instantly know it is wrong, because six dinners is a few hundred dollars, and you demand a recount. Sanity-checking physics answers is the same reflex pointed at nature: rough expected size first, precision second. The goal of this chapter is that a 900 km/h cyclist feels exactly as absurd to you as that bill.</p>
</div>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Estimate the total mass of air in your bedroom — most people are shocked. Pace out the room's dimensions (say 4 m × 3 m × 2.5 m = 30 m³) and use the benchmark that air's density is about 1.2 kg/m³: roughly <strong>36 kg of air</strong> — about the mass of a ten-year-old child, floating invisibly around you. Then run the toolkit on it: units (m³ × kg/m³ = kg ✓), direction (bigger room → more air ✓), extreme case (an empty room of zero volume → zero air ✓). It survives every check — which is exactly why physicists believe surprising numbers when they earn it.</p>
</div>
<p>Estimation, units, and sanity checks form one habit: <strong>never let a number pass unexamined</strong>. Carry that habit forward and every formula in the phases ahead becomes something you can verify — not something you must take on faith.</p>`,
        },
      ],
      quiz: [
        {
          question: "What is the order of magnitude of 82,000?",
          options: [
            "10⁴, because 82,000 starts with an 8",
            "10⁵, because 8.2 × 10⁴ rounds to 10⁵",
            "10⁸, because there are 8 in the number",
            "10³, the nearest round unit",
          ],
          correctIndex: 1,
          explanation:
            "82,000 = 8.2 × 10⁴. Since 8.2 is closer to 10 than to 1, it rounds up, giving an order of magnitude of 10⁵. (A common convention: mantissas above about 3.16, i.e. √10, round up.)",
        },
        {
          question:
            "Why do Fermi estimates built from a chain of rough guesses often land surprisingly close to the truth?",
          options: [
            "Because each individual guess is usually exact",
            "Because the method only works for questions about pianos",
            "Because overestimates and underestimates in the chain tend to cancel each other out",
            "Because multiplying numbers always reduces error",
          ],
          correctIndex: 2,
          explanation:
            "Each factor is only good to within perhaps 2–3×, but errors are as likely high as low, so in a product they partially cancel. A five-step chain typically lands within a factor of 10 — exactly the precision an order-of-magnitude question needs.",
        },
        {
          question:
            "You half-remember a formula for distance fallen: d = ½gt, with g in m/s² and t in seconds. What does a unit check reveal?",
          options: [
            "The right side gives m/s — a speed, not a distance — so the formula must be wrong",
            "The units work out, so the formula is correct",
            "Units cannot be used to check formulas, only conversions",
            "The formula is wrong because g should be in kilograms",
          ],
          correctIndex: 0,
          explanation:
            "(m/s²) × s = m/s, a speed. Since a distance must come out in metres, the formula fails the dimensional check. The correct d = ½gt² gives (m/s²) × s² = m. Units debug formulas even when you have forgotten the physics.",
        },
        {
          question: "What destroyed NASA's Mars Climate Orbiter in 1999?",
          options: [
            "A collision with space debris",
            "A software team supplied thruster data in pound-force seconds while another expected newton-seconds",
            "An error in Newton's law of gravitation",
            "A failure of the launch rocket",
          ],
          correctIndex: 1,
          explanation:
            "One team's software reported impulse in imperial units (pound-force seconds) while the trajectory software expected metric (newton-seconds). The unnoticed factor of 4.45 sent the $327 million spacecraft 170 km too deep into Mars's atmosphere — history's most expensive unit error.",
        },
        {
          question:
            "A calculation tells you a cyclist's speed is 900 km/h. Which sanity check most immediately flags the problem?",
          options: [
            "The unit check — km/h is not a valid unit of speed",
            "The extreme-case check — cyclists cannot ride uphill",
            "No check flags it; the calculation should simply be redone from scratch",
            "The size check — benchmark speeds (brisk walk ≈ 5 km/h, highway car ≈ 100 km/h, airliner ≈ 900 km/h) show a cyclist cannot plausibly match an airliner",
          ],
          correctIndex: 3,
          explanation:
            "The units (km/h) are fine — it is the size that is absurd. Comparing against mental benchmarks instantly shows 900 km/h is airliner speed, roughly 30 times a strong cyclist's pace, so an error (likely a unit slip or misplaced power of ten) must be hiding in the calculation.",
        },
      ],
    },
  ],
};
