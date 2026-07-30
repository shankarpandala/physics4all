export const subject1 = {
  id: "numbers-measurement-proportion",
  number: 1,
  title: "Numbers, Measurement & Proportion",
  description:
    "Rebuild arithmetic to automaticity and conquer proportional reasoning — the grammar of every physics formula. Math track I.",
  phase: 1,
  chapters: [
    {
      id: "numbers-rebuilt",
      title: "Numbers Rebuilt",
      subtitle:
        "Place value, mental arithmetic, negative numbers, and the estimation habits every physicist runs on",
      sections: [
        {
          id: "place-value-and-the-number-line",
          title: "Place Value & the Number Line",
          content: `
<p>Every number you will ever meet in physics lives in one system: <strong>positional notation</strong>. The numeral 4,072 doesn't contain a four, a zero, a seven, and a two — it contains 4 thousands, 0 hundreds, 7 tens, and 2 ones. Each step to the left multiplies the value of a digit by ten; each step to the right divides it by ten. That single idea — <strong>each place is worth ten times its neighbor</strong> — is the engine behind decimals, scientific notation, metric units, and orders of magnitude. Master it here and four later chapters get easier.</p>
<p>The second mental tool is the <strong>number line</strong>: an infinite ruler with zero in the middle, positives stretching right, negatives stretching left. It turns arithmetic into geometry:</p>
<ul>
  <li><strong>Addition</strong> is a move to the right: 3 + 5 means "start at 3, walk 5 right."</li>
  <li><strong>Subtraction</strong> is a move to the left — or better, a <strong>distance</strong>: 9 − 4 asks "how far from 4 to 9?"</li>
  <li><strong>Comparing</strong> numbers means asking which sits further right: −2 is greater than −7 because it is closer to zero on the right side.</li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Numbers Are Positions, Operations Are Movements</h3>
  <p>A thermometer, a voltmeter, an altitude readout — every instrument in physics is a number line with a label. When a temperature "drops 12 degrees" or a charge "goes negative," you are watching a point slide along a line. If you can see arithmetic as motion, half of introductory physics becomes familiar territory.</p>
</div>
<p>Worked example: a weather station reads −3°C at dawn. By noon the temperature has risen 11 degrees. Where are we? Start at −3, walk 11 to the right: three steps bring you to 0, and the remaining eight land you at <strong>8°C</strong>. No rule was memorized — you just moved along the line.</p>
<p>Physics will soon hand you quantities spread across this line at wild scales: the charge of an electron near zero, the mass of the Earth far to the right. The number line is where you will hang all of them.</p>`,
        },
        {
          id: "arithmetic-and-mental-math",
          title: "Arithmetic That Runs Itself",
          content: `
<p>You are not relearning arithmetic to pass a test — you are rebuilding it to <strong>automaticity</strong>, so that when a physics problem needs 25 × 12, your working memory stays free for the physics. The trick adults were rarely taught: fast arithmetic isn't about speed, it's about <strong>restructuring numbers before you compute</strong>.</p>
<p>Three moves cover most mental math:</p>
<ol>
  <li><strong>Break numbers apart (decomposition).</strong> 25 × 12 = 25 × 10 + 25 × 2 = 250 + 50 = <strong>300</strong>. You never multiplied anything harder than 25 × 2.</li>
  <li><strong>Compensate.</strong> 47 + 38: add 40 (getting 87), then take back 2 → <strong>85</strong>. Or 6 × 99 = 6 × 100 − 6 = <strong>594</strong>.</li>
  <li><strong>Use friendly pairs.</strong> Numbers that make 10, 100, or 1000 love each other: 4 × 25 = 100, 8 × 125 = 1000, 2 × 50 = 100. Spot them and rearrange: 4 × 7 × 25 = (4 × 25) × 7 = 700.</li>
</ol>
<div class="analogy">
  <h3>Analogy: Touch Typing for Numbers</h3>
  <p>A touch typist doesn't think about individual keys; their fingers handle the letters while their mind composes the sentence. That's the goal for arithmetic. In a physics problem about a falling ball, the thinking should go into "what does gravity do here?" — not into 4.9 × 4. Fluency isn't a party trick; it's freed-up brainpower.</p>
</div>
<p>Worked example, physics-flavored: a car travels at 72 km per hour. How far does it go in 40 minutes? Restructure: 40 minutes is ⅔ of an hour. One third of 72 is 24, so two thirds is <strong>48 km</strong>. Notice what happened — the "hard" division became a friendly fraction because you reshaped the problem first.</p>
<p>Practice deliberately for a week or two: double and halve numbers, multiply by 5 (multiply by 10, halve it), multiply by 25 (multiply by 100, quarter it). These aren't tricks to collect; they're the same idea — <strong>ten is the hub, and everything routes through it</strong>.</p>`,
        },
        {
          id: "negative-numbers",
          title: "Below Zero: Negative Numbers",
          content: `
<p>Negative numbers make many adults quietly nervous, and physics uses them <em>constantly</em>: negative charge, negative velocity, negative energy, temperatures below zero. Here's the reframe that makes them tame: a negative number is not a "weird number" — it's an ordinary size pointing the <strong>opposite direction</strong>. The minus sign is a direction flag.</p>
<p>With that picture, the rules stop being arbitrary:</p>
<ul>
  <li><strong>Adding a negative = subtracting.</strong> Gaining a debt of 5 dollars is losing 5 dollars: 8 + (−5) = 3.</li>
  <li><strong>Subtracting a negative = adding.</strong> Removing a debt makes you richer: 8 − (−5) = 13.</li>
  <li><strong>Multiplying flips or keeps direction.</strong> Multiplying by −1 means "reverse." So (−3) × 4 = −12 (a reversal), and (−3) × (−4) = +12 — reversing a reversal points you forward again. Two wrongs don't make a right, but two reversals do.</li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Sign = Direction, Size = Magnitude</h3>
  <p>Physicists split every signed quantity into two pieces: its <strong>magnitude</strong> (how much) and its <strong>sign</strong> (which way). A velocity of −20 m/s isn't slower than +20 m/s — it's just as fast, headed the other way. When physics answers come out negative, the number is telling you a direction, not an error.</p>
</div>
<p>Worked example: a diver is 6 m below the surface (position −6 m) and descends another 9 m. New position: −6 + (−9) = <strong>−15 m</strong>. Now she rises 4 m: −15 + 4 = <strong>−11 m</strong>. The arithmetic is just walking the number line; the signs track "up versus down" for you automatically.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>European mathematicians resisted negative numbers into the 1700s, calling them "absurd" and "fictitious." Meanwhile, Chinese mathematicians had computed with them for over 1,500 years, using red rods for positives and black rods for negatives. If negatives feel unnatural, you're in historically excellent company — and, like the holdouts, you'll get over it.</p>
</div>
<p>One warning worth its own sentence: −3² means −(3²) = −9, while (−3)² = +9. The square binds tighter than the minus. That distinction will matter the first time you plug a negative velocity into an energy formula.</p>`,
        },
        {
          id: "order-of-operations",
          title: "Order of Operations",
          content: `
<p>Order of operations is not a schoolroom ritual — it's the <strong>grammar that makes formulas unambiguous</strong>. Physics is written in this grammar. The kinetic-energy formula E = ½mv² only means what it should because everyone agrees the square applies to v alone, before the multiplication. Misread the order, and every formula you meet will silently betray you.</p>
<p>The hierarchy, from strongest binding to weakest:</p>
<ol>
  <li><strong>Parentheses</strong> — whatever is grouped happens first.</li>
  <li><strong>Exponents and roots</strong> — squares, cubes, square roots.</li>
  <li><strong>Multiplication and division</strong> — equal rank, left to right.</li>
  <li><strong>Addition and subtraction</strong> — equal rank, left to right.</li>
</ol>
<p>Two clarifications that fix most adult confusion:</p>
<ul>
  <li>Multiplication does <strong>not</strong> beat division (nor addition beat subtraction). They're peers, processed left to right: 12 ÷ 3 × 2 = 4 × 2 = 8, not 12 ÷ 6 = 2.</li>
  <li>A fraction bar is <strong>invisible parentheses</strong> around top and bottom. The expression (6 + 4) ÷ (2 + 3) written as a tall fraction hides both sets of brackets in the bar — evaluate top and bottom fully before dividing.</li>
</ul>
<p>Worked example with a real formula. Kinetic energy: E = ½ × m × v². For m = 2 kg and v = 10 m/s:</p>
<ul>
  <li>Exponent first: v² = 10² = 100</li>
  <li>Then multiply left to right: ½ × 2 × 100 = 1 × 100 = <strong>100 joules</strong></li>
</ul>
<p>The classic wrong turn is squaring (½ × 2 × 10) = 10 into 100... which happens to give 100 here — a cruel coincidence. Try v = 4: correct is ½ × 2 × 16 = 16 J; the wrong order gives (½ × 2 × 4)² = 16 too! Fine, this formula is forgiving with m = 2. Take m = 3, v = 4: correct is ½ × 3 × 16 = 24 J; wrong order gives (½ × 3 × 4)² = 36 J. Different answers, real consequences.</p>
<div class="key-concept">
  <h3>Key Concept: When in Doubt, Add Parentheses</h3>
  <p>Parentheses are free. Writing (½ × m) × (v²) costs nothing and removes all ambiguity — for you, for your calculator, and later for your code. Professional physicists over-parenthesize all the time; ambiguity is the only sin.</p>
</div>`,
        },
        {
          id: "estimation-and-rounding",
          title: "Estimation & Rounding",
          content: `
<p>Here is a professional secret: physicists estimate <em>before</em> they calculate, every single time. An estimate is a cheap insurance policy — if your careful calculation says a bicycle travels 4,000 km in an hour, the rough estimate you made first is what catches the error. Estimation is not laziness; it is <strong>quality control for thinking</strong>.</p>
<p>Rounding is the tool. The rule you remember (round the digit up if the next digit is 5 or more) is fine, but the skill is choosing <strong>what to round to</strong>:</p>
<ul>
  <li><strong>Round to one or two significant digits</strong> for a quick check: 387 × 52 ≈ 400 × 50 = 20,000. (True answer: 20,124. The estimate did its job.)</li>
  <li><strong>Round in opposite directions when you can.</strong> Rounding 387 up and 52 down means the errors partly cancel — that's why 400 × 50 landed so close.</li>
  <li><strong>Track whether your estimate is high or low.</strong> 9.8 rounded to 10 makes gravity slightly "too strong," so your estimated fall time will come out slightly short. Knowing the direction of the error is half of error analysis, which you'll meet formally later.</li>
</ul>
<div class="analogy">
  <h3>Analogy: The Restaurant Bill</h3>
  <p>You don't add a dinner bill to the cent in your head — you round each dish to the nearest dollar and keep a running total. If the waiter's total is wildly off from yours, you check the itemized bill. Physicists treat every calculation like that bill: the rough total comes first, and the precise answer must agree with it or someone has made a mistake.</p>
</div>
<p>Worked example: roughly how many seconds are in a year? Estimate: 365 days ≈ 400 days is too crude; keep 365. Each day has 24 hours ≈ 25; each hour has 3,600 seconds ≈ 3,500. So 365 × 25 ≈ 9,000 hours, and 9,000 × 3,500 ≈ 31,500,000 — about <strong>3 × 10⁷ seconds</strong>. The exact value is 31,536,000. Our two-minute estimate landed within 1%.</p>
<p>That habit — <em>estimate, then compute, then compare</em> — will run underneath everything you do in this course, and it becomes a superpower in Chapter 4 when we scale it up to Fermi estimation.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "The temperature is −7°C and rises by 12 degrees. What is it now, and what mental model gets you there fastest?",
          options: [
            "5°C — start at −7 on the number line and move 12 to the right",
            "−19°C — negative numbers make additions negative",
            "19°C — drop the minus sign and add",
            "−5°C — move 12 to the left from −7",
          ],
          correctIndex: 0,
          explanation:
            "Addition is a rightward move on the number line: from −7, seven steps reach 0 and the remaining five land at +5°C. Seeing signed arithmetic as motion along a line is exactly how physics treats temperature, position, and velocity changes.",
        },
        {
          question: "What is 12 ÷ 3 × 2?",
          options: [
            "2, because multiplication is done before division",
            "8, because multiplication and division have equal rank and are done left to right",
            "18, because you always work right to left",
            "2, because the 3 × 2 is implicitly grouped",
          ],
          correctIndex: 1,
          explanation:
            "Multiplication and division are peers, evaluated left to right: 12 ÷ 3 = 4, then 4 × 2 = 8. The belief that multiplication 'beats' division is one of the most common adult misconceptions — and formulas like v = d ÷ t × conversion factors will punish it.",
        },
        {
          question:
            "Using E = ½mv² with m = 3 kg and v = 4 m/s, what is the kinetic energy?",
          options: [
            "36 J — compute ½ × 3 × 4 first, then square",
            "6 J — square applies to the whole right side",
            "24 J — square v first (v² = 16), then multiply: ½ × 3 × 16",
            "48 J — ignore the ½ since it is less than 1",
          ],
          correctIndex: 2,
          explanation:
            "Exponents bind before multiplication, and the square applies only to v. So v² = 16, then ½ × 3 × 16 = 24 J. Squaring the whole product (36 J) is the classic order-of-operations error, and it produces confidently wrong physics.",
        },
        {
          question:
            "You estimate 387 × 52 by rounding to 400 × 50 = 20,000. The exact answer is 20,124. Why did this estimate land so close?",
          options: [
            "Rounding always produces errors under 1%",
            "One number was rounded up and the other down, so the errors partly cancelled",
            "Multiplication is immune to rounding errors",
            "It was luck — estimates cannot be systematically accurate",
          ],
          correctIndex: 1,
          explanation:
            "Rounding 387 up (+3%) and 52 down (−4%) pushes the product in opposite directions, so the errors largely cancel. Deliberately rounding in opposite directions is a professional estimator's habit — and tracking the direction of errors is the seed of physics error analysis.",
        },
        {
          question: "What is (−3) × (−4), and what does the sign rule mean?",
          options: [
            "−12 — two negatives stay negative",
            "−7 — multiply then subtract",
            "+12, but only as an arbitrary convention",
            "+12 — multiplying by a negative means reversing direction, and two reversals point forward again",
          ],
          correctIndex: 3,
          explanation:
            "Multiplying by −1 means 'reverse direction' on the number line. Reversing twice restores the original direction, so (−3) × (−4) = +12. This is not an arbitrary rule: physics uses it whenever a reversed velocity or force is reversed again.",
        },
      ],
    },
    {
      id: "fractions-decimals-percent",
      title: "Fractions, Decimals & Percent",
      subtitle:
        "Three costumes for the same idea — crossing the rational-number wall that stops most adult relearners",
      sections: [
        {
          id: "what-a-fraction-really-is",
          title: "What a Fraction Really Is",
          content: `
<p>Research on adult numeracy keeps finding the same bottleneck: fractions. Educators call it the <strong>rational-number wall</strong>, and it's the single best-documented gap between people who find physics readable and people who find it hostile. So let's rebuild the concept from the floor.</p>
<p>A fraction is <strong>one number, not two</strong>. The symbol ¾ is not "a 3 and a 4 in a costume" — it is a single point on the number line, sitting three quarters of the way from 0 to 1. The bar means division: ¾ literally equals 3 ÷ 4 = 0.75. Everything else follows from three readings, and fluency means switching between them freely:</p>
<ul>
  <li><strong>Part of a whole:</strong> ¾ of a pizza — 3 slices when the pizza is cut into 4.</li>
  <li><strong>A division:</strong> 3 chocolate bars shared among 4 people — each gets ¾ of a bar.</li>
  <li><strong>A ratio or rate:</strong> 3 parts salt to 4 parts water; 3 meters per 4 seconds. <em>This</em> reading is the one physics runs on.</li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Equivalent Fractions Are the Same Point</h3>
  <p>½ = 2⁄4 = 50⁄100 = 0.5. Different names, one point on the line. Multiplying top and bottom by the same number doesn't change the value, because you're multiplying by something equal to 1 (like 2⁄2). Hold onto that phrase — <strong>multiplying by a clever form of 1</strong> — because in Chapter 5 it becomes the entire method of unit conversion.</p>
</div>
<p>Worked example: which is larger, 5⁄8 or 2⁄3? Rewrite both over 24 (the least common multiple of 8 and 3): 5⁄8 = 15⁄24 and 2⁄3 = 16⁄24. So <strong>2⁄3 is larger</strong>, by exactly 1⁄24. No decimals needed — though converting works too: 0.625 versus 0.667.</p>
<p>Why physics cares: nearly every formula you'll meet is a fraction in disguise. Speed is distance over time. Density is mass over volume. Pressure is force over area. If fractions feel like fog, those formulas feel like fog. Clear the fog here, and Chapter 3 will feel like revision instead of a wall.</p>`,
        },
        {
          id: "operations-on-fractions",
          title: "Adding, Subtracting, Multiplying, Dividing",
          content: `
<p>The four operations on fractions each have a <em>reason</em>, and knowing the reasons beats memorizing the recipes — recipes evaporate under exam pressure; reasons don't.</p>
<p><strong>Addition and subtraction need matching pieces.</strong> You can't add 1⁄2 + 1⁄3 directly, for the same reason you can't add 2 meters + 3 feet: the units differ. Halves and thirds are different sizes of piece. Convert both to sixths — pieces that fit both: 1⁄2 = 3⁄6 and 1⁄3 = 2⁄6, so the sum is <strong>5⁄6</strong>. The "common denominator" is just a common unit.</p>
<p><strong>Multiplication means "of."</strong> ½ × ¾ asks: what is half <em>of</em> three quarters? Take ¾, cut it in half: 3⁄8. The recipe (multiply tops, multiply bottoms) falls straight out. Notice the humbling consequence: multiplying by a fraction smaller than 1 makes things <em>smaller</em>. Adults who learned "multiplication makes bigger" in childhood trip on this for years.</p>
<p><strong>Division asks "how many fit?"</strong> 3 ÷ ½ asks how many half-pizzas fit in 3 pizzas: 6. Hence dividing by a fraction multiplies by its reciprocal: 3 ÷ ½ = 3 × 2 = 6. Likewise ¾ ÷ ¼ = ¾ × 4 = 3 — three quarter-pieces fit in three-quarters. Dividing by a small number gives a big answer, a fact with deep physics echoes (huge pressure from a small area; huge acceleration from a small mass).</p>
<div class="analogy">
  <h3>Analogy: Coins Before Adding</h3>
  <p>You can't add 3 dimes and 2 quarters by writing "5 somethings" — you convert both to cents (30 + 50 = 80) first. Common denominators are exactly that conversion. Nobody finds the coin version hard; the fraction version is the same move with worse marketing.</p>
</div>
<p>Worked example: a rod of length ⅚ m has ¼ of it painted. How much rod is painted? "¼ of ⅚" → ¼ × ⅚ = 5⁄24 m ≈ 0.21 m. And how much is unpainted? 1 − ¼ = ¾ of it: ¾ × ⅚ = 15⁄24 = ⅝ m. Check: 5⁄24 + 15⁄24 = 20⁄24 = ⅚ ✓. That closing check — do the parts rebuild the whole? — is a habit worth keeping for life.</p>`,
        },
        {
          id: "decimals",
          title: "Decimals: Fractions in Base Ten",
          content: `
<p>A decimal is not a new kind of number — it's a fraction whose denominator is a power of ten, written using the place-value system you rebuilt in Chapter 1. The places right of the decimal point continue the tenfold pattern: tenths, hundredths, thousandths. So 0.375 means 3⁄10 + 7⁄100 + 5⁄1000 = 375⁄1000 = ⅜.</p>
<p>Why science runs on decimals rather than fractions: <strong>decimals compare instantly</strong>. Which is bigger, 7⁄16 or 4⁄9? Not obvious. Which is bigger, 0.4375 or 0.444...? Read left to right, done. Instruments agree — every digital meter, scale, and sensor speaks decimal.</p>
<p>The three skills to make automatic:</p>
<ul>
  <li><strong>Multiplying and dividing by 10, 100, 1000 just slides the decimal point.</strong> 3.75 × 100 = 375; 3.75 ÷ 10 = 0.375. Nothing is really moving but your bookkeeping — each slide is a place-value shift. This is the mechanical heart of metric conversions (2.5 km = 2,500 m) and scientific notation.</li>
  <li><strong>Converting a fraction: just divide.</strong> ⅝ = 5 ÷ 8 = 0.625. Some fractions terminate (⅝ = 0.625), others repeat forever (⅓ = 0.333...). A fraction terminates exactly when its denominator's only prime factors are 2 and 5 — the primes of ten.</li>
  <li><strong>Comparing: pad with zeros and read.</strong> Is 0.72 bigger than 0.598? Write 0.720 versus 0.598: yes. The common adult error is thinking "598 is longer than 72, so 0.598 wins" — length of digits means nothing; position means everything.</li>
</ul>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Decimal notation is startlingly recent. Simon Stevin only popularized decimal fractions in Europe in 1585, in a pamphlet promising to teach "all computations... by whole numbers without fractions." Newton had decimals for barely a century of mathematical tradition when he wrote the Principia; you have five.</p>
</div>
<p>Worked example: a lab balance reads 0.048 kg, and a second object reads 0.31 kg. Total mass? Line up the decimal points — 0.048 + 0.310 = <strong>0.358 kg</strong>. Lining up decimal points is lining up place values: tenths under tenths, hundredths under hundredths. Misalignment is the number-one decimal arithmetic error, and in a lab notebook it produces masses that are wrong by a factor of ten.</p>`,
        },
        {
          id: "percent",
          title: "Percent: The Universal Comparison",
          content: `
<p><strong>Percent</strong> means "per hundred" — that's the whole definition. 35% is 35⁄100 is 0.35. It exists because comparing raw fractions is awkward (is 17⁄40 better than 22⁄50?), while rescaling everything to a denominator of 100 makes comparison instant (42.5% versus 44%).</p>
<p>The one move that unlocks every percent problem: <strong>translate the percent into a decimal multiplier, and the word "of" into ×</strong>.</p>
<ul>
  <li>30% of 250 → 0.30 × 250 = <strong>75</strong></li>
  <li>A 15% increase → multiply by 1.15 (the original 100% plus 15% more)</li>
  <li>A 20% decrease → multiply by 0.80 (only 80% remains)</li>
</ul>
<p>That multiplier view solves the problems that ambush people. If a $200 jacket is marked up 25% and then discounted 25%, is it back to $200? No: 200 × 1.25 × 0.75 = $187.50. The second 25% acted on a <em>bigger</em> base than the first. <strong>Percent changes don't cancel, because percent is always relative to the current value.</strong></p>
<div class="key-concept">
  <h3>Key Concept: Always Ask "Percent of What?"</h3>
  <p>A percent without a stated base is meaningless. "Efficiency rose 5%" — of the original efficiency, or 5 percentage points? Physics is fussy about this: when you later compute that a heat engine is 35% efficient or a measurement has 2% uncertainty, the base (energy input; measured value) is always explicit. Building that reflex now costs minutes and saves whole homework sets.</p>
</div>
<p>Worked examples:</p>
<ol>
  <li>A battery's charge drops from 80% to 60%. That's a fall of 20 <em>percentage points</em>, but a fall of 20⁄80 = <strong>25 percent</strong> of the charge it had. Both statements are true; they answer different questions.</li>
  <li>Reverse percentage — a price after a 20% discount is $64. Original? The $64 is 80% of it, so original = 64 ÷ 0.80 = <strong>$80</strong>. Dividing by the multiplier undoes it — the same undo move you'll use to rearrange physics formulas.</li>
</ol>
<p>In physics, percent is the language of efficiency, uncertainty, and composition (the air is 21% oxygen). It's a small idea used daily forever.</p>`,
        },
        {
          id: "three-faces-one-number",
          title: "Conversions: Three Faces, One Number",
          content: `
<p>Here is the summit of the rational-number wall: seeing instantly that ⅗, 0.6, and 60% are <strong>one number wearing three costumes</strong>. Fluency means converting between all three without ceremony, and choosing the costume that makes the current problem easiest.</p>
<table>
  <thead>
    <tr><th>Fraction</th><th>Decimal</th><th>Percent</th><th>Worth memorizing because...</th></tr>
  </thead>
  <tbody>
    <tr><td>½</td><td>0.5</td><td>50%</td><td>the everywhere-benchmark</td></tr>
    <tr><td>¼ , ¾</td><td>0.25, 0.75</td><td>25%, 75%</td><td>quarters rule money, angles, time</td></tr>
    <tr><td>⅓ , ⅔</td><td>0.333..., 0.667</td><td>33⅓%, 66⅔%</td><td>the repeating pair everyone rounds</td></tr>
    <tr><td>⅕ , ⅖ , ⅗ , ⅘</td><td>0.2, 0.4, 0.6, 0.8</td><td>20–80%</td><td>fifths are the metric-friendly family</td></tr>
    <tr><td>⅛</td><td>0.125</td><td>12.5%</td><td>halving ¼; appears in energy problems</td></tr>
    <tr><td>1⁄10</td><td>0.1</td><td>10%</td><td>the decimal system itself</td></tr>
  </tbody>
</table>
<p>The conversion rules are two arrows: <strong>fraction → decimal</strong> is a division (⅗ = 3 ÷ 5 = 0.6); <strong>decimal → percent</strong> slides the point two places right (0.6 = 60%). Reverse the arrows to go back. That's the entire machinery.</p>
<p>Which costume when?</p>
<ul>
  <li><strong>Fractions</strong> for exact reasoning and cancellation: ⅓ × 3 = 1 exactly, while 0.333 × 3 = 0.999.</li>
  <li><strong>Decimals</strong> for comparing, measuring, and calculators.</li>
  <li><strong>Percents</strong> for communicating to humans.</li>
</ul>
<div class="analogy">
  <h3>Analogy: One Person, Three Outfits</h3>
  <p>The same person wears gym clothes, work clothes, and a wedding suit — different contexts, one identity. Your job is to recognize the person regardless of outfit. When a physics solution flips from "the ball loses ¼ of its energy" to "0.75 of the energy remains" to "75% efficiency," it's one fact changing clothes mid-sentence. Textbooks do this without warning; from now on, so can you.</p>
</div>
<p>Worked example: light passes through two filters. The first transmits ⅔ of the light, the second 75%. Total transmission? Same costume first: ⅔ × ¾ = ½ = 0.5 = <strong>50%</strong>. Pick fractions, and the cancellation is effortless.</p>`,
        },
      ],
      quiz: [
        {
          question: "Which of these is NOT equal to the others?",
          options: ["⅗", "0.6", "60%", "6⁄100"],
          correctIndex: 3,
          explanation:
            "⅗ = 3 ÷ 5 = 0.6 = 60% — one number in three costumes. But 6⁄100 = 0.06 = 6%, ten times smaller. Reading 0.6 as 6⁄100 (instead of 6⁄10) is a classic place-value slip: the first digit after the point counts tenths, not hundredths.",
        },
        {
          question: "Why does 1⁄2 + 1⁄3 require a common denominator?",
          options: [
            "It's a convention with no deeper reason",
            "Halves and thirds are different-sized pieces — like meters and feet, they must be converted to a common unit (sixths) before adding",
            "Because addition of fractions is only defined for even denominators",
            "To make the answer smaller than 1",
          ],
          correctIndex: 1,
          explanation:
            "Adding requires matching units. 1⁄2 = 3⁄6 and 1⁄3 = 2⁄6, so the sum is 5⁄6. Adding tops and bottoms directly (giving 2⁄5) is like adding 3 dimes and 2 quarters and calling it '5 coins worth' — the pieces were never the same size.",
        },
        {
          question:
            "A $200 item is marked up 25%, then discounted 25%. What is the final price?",
          options: [
            "$200 — the changes cancel",
            "$187.50 — the discount acts on the larger, marked-up price",
            "$150 — subtract 50% total",
            "$212.50 — percents always compound upward",
          ],
          correctIndex: 1,
          explanation:
            "200 × 1.25 = 250, then 250 × 0.75 = 187.50. Percent changes never cancel because each acts on the current value, not the original. The multiplier view (×1.25, ×0.75) makes this visible at a glance — and it is exactly how compounding works in radioactive decay and interest alike.",
        },
        {
          question: "What is 3 ÷ ½, and what question does it answer?",
          options: [
            "1.5 — dividing always makes numbers smaller",
            "6 — it asks how many half-sized pieces fit into 3 wholes",
            "⅙ — flip the first fraction and multiply",
            "5 — subtract the denominator",
          ],
          correctIndex: 1,
          explanation:
            "Division asks 'how many fit?' Six halves fit into 3, so 3 ÷ ½ = 3 × 2 = 6. Dividing by a number smaller than 1 gives a larger answer — the same logic that later explains why a small area under a force produces enormous pressure (P = F ÷ A).",
        },
        {
          question:
            "Two filters transmit ⅔ and 75% of light respectively. What fraction of light passes through both?",
          options: [
            "½ — convert to one form and multiply: ⅔ × ¾ = ½",
            "About 1.42 — add the two transmissions",
            "⅔ — the weaker filter decides alone",
            "5⁄7 — average the two fractions",
          ],
          correctIndex: 0,
          explanation:
            "Successive 'of' operations multiply: ¾ of ⅔ of the light survives, and ⅔ × ¾ = 6⁄12 = ½ = 50%. Converting 75% into the fraction costume first makes the cancellation trivial — choosing the convenient representation is the real skill being tested.",
        },
      ],
    },
    {
      id: "ratio-rate-proportion",
      title: "Ratio, Rate & Proportion",
      subtitle:
        "The single most important chapter in the math track — the reasoning pattern behind speed, density, and nearly every physics formula",
      sections: [
        {
          id: "ratios-and-rates",
          title: "Ratios & Rates: Comparing by Division",
          content: `
<p>If this course has one chapter you must not skim, it's this one. Research on physics learning is blunt: students who can reason proportionally can learn physics, and students who can't, struggle everywhere — because <strong>most physics formulas are ratio statements</strong>. Speed, density, pressure, resistance, concentration: all of them are "this per that."</p>
<p>There are two ways to compare quantities. <strong>Comparison by subtraction</strong> asks "how much more?" — a 6 kg dog outweighs a 2 kg cat by 4 kg. <strong>Comparison by division</strong> asks "how many times as much?" — the dog is 3 times the cat's mass. That second kind is a <strong>ratio</strong>, and it has a superpower: it survives rescaling. Photograph the dog and cat at half size and the 4 kg difference becomes meaningless, but the 3-to-1 ratio still holds. Ratios capture <em>structure</em>; differences capture only amounts.</p>
<p>A <strong>rate</strong> is a ratio between different kinds of quantity: 150 km per 2 hours, 30 grams per 3 cm³, $12 per kg. The most useful form is the <strong>unit rate</strong> — how much per <em>one</em>: 75 km per hour, 10 g per cm³. Finding the unit rate first, then scaling to whatever you need, is called the <strong>unitary method</strong>, and it is quietly the most reliable problem-solving algorithm in elementary math:</p>
<ol>
  <li>5 identical books cost $60. Cost per book: 60 ÷ 5 = $12.</li>
  <li>Cost of 8 books: 8 × 12 = <strong>$96</strong>.</li>
</ol>
<p>Down to one, up to many. It never fails, and it works unchanged in physics: if a pump moves 240 liters in 8 minutes, it moves 30 L per minute, so 11 minutes moves 330 L.</p>
<div class="key-concept">
  <h3>Key Concept: A Rate Is a Ratio With a Physical Meaning</h3>
  <p>"Per" is the most important small word in science. Speed is kilometers <em>per</em> hour. Density is grams <em>per</em> cubic centimeter. Power is joules <em>per</em> second. Whenever you see "per," you are looking at a division — and the number tells you how much of the first thing rides along with one unit of the second. Learn to hear "per" as ÷ and half the formulas in this course become sentences you can read.</p>
</div>`,
        },
        {
          id: "bar-models",
          title: "Bar Models: Seeing Ratio Problems",
          content: `
<p>Singapore's math curriculum — a perennial world number one — teaches ratio with a deceptively simple drawing tool: the <strong>bar model</strong>. Instead of jumping to equations, you draw rectangles whose lengths represent quantities. The picture does the algebra for you, and for adults it's a genuinely faster way to crack word problems.</p>
<p><strong>Worked example 1.</strong> Alex and Ben share $120 in the ratio 3 : 2. How much does each get?</p>
<p>Draw Alex as 3 equal boxes and Ben as 2 equal boxes — 5 boxes total sharing $120. Each box is 120 ÷ 5 = $24. So Alex gets 3 × 24 = <strong>$72</strong> and Ben gets 2 × 24 = <strong>$48</strong>. The bar model turned an algebra problem into counting boxes.</p>
<p><strong>Worked example 2 (harder).</strong> After spending ⅖ of her money, Maya has $36 left. How much did she start with?</p>
<p>Draw her money as 5 boxes; she spent 2, so 3 boxes remain and equal $36. One box = 12; five boxes = <strong>$60</strong>. Notice how the model dissolves the usual panic of "reverse" problems — the leftover is <em>visibly</em> 3 boxes, so you never mistakenly compute ⅖ of 36.</p>
<div class="analogy">
  <h3>Analogy: Scaffolding, Not a Crutch</h3>
  <p>The bar model is scaffolding for the equation x + ²⁄₃x = 120 you'll write comfortably after the algebra course (Subject 4). Scaffolding isn't cheating — it's how the building goes up. Even physicists sketch before they calculate; a force diagram is nothing but a grown-up bar model for vectors.</p>
</div>
<p><strong>Worked example 3, physics-flavored.</strong> Bronze is 7 parts copper to 1 part tin by mass. How much copper is in 4 kg of bronze? Eight boxes total; each box is 4 ÷ 8 = 0.5 kg; copper is 7 boxes = <strong>3.5 kg</strong>. Mixture and alloy problems — and later, mole-ratio chemistry and circuit current-splitting — are exactly this picture.</p>
<p>Draw bars until you don't need to. The day the boxes appear in your head unbidden, you have acquired what teachers call proportional reasoning — and you'll spend the rest of this curriculum cashing it in.</p>`,
        },
        {
          id: "direct-and-inverse-proportion",
          title: "Direct & Inverse Proportion",
          content: `
<p>Two quantities are <strong>directly proportional</strong> when doubling one doubles the other — their <em>ratio</em> stays fixed. Distance at constant speed is the classic case: twice the time, twice the distance; d ÷ t never changes. Writing it generally: y = kx for some constant k. The graph is a straight line <strong>through the origin</strong> — zero time, zero distance.</p>
<p>Two quantities are <strong>inversely proportional</strong> when doubling one <em>halves</em> the other — their <em>product</em> stays fixed. Sharing a fixed job is the classic case: twice the workers, half the time; workers × time is constant. Generally: y = k ÷ x, or equivalently x·y = k.</p>
<table>
  <thead>
    <tr><th></th><th>Direct (y = kx)</th><th>Inverse (x·y = k)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Double x...</strong></td><td>y doubles</td><td>y halves</td></tr>
    <tr><td><strong>What's constant</strong></td><td>the ratio y ÷ x</td><td>the product x·y</td></tr>
    <tr><td><strong>Physics examples</strong></td><td>distance & time (fixed speed); mass & volume (fixed density); voltage & current (fixed resistance — Ohm's law)</td><td>pressure & volume of a gas (Boyle's law); speed & travel time (fixed distance); current & resistance (fixed voltage)</td></tr>
  </tbody>
</table>
<p><strong>Worked example (direct):</strong> 3 m of wire has mass 45 g. Mass of 8 m? Unit rate: 15 g per meter, so 8 × 15 = <strong>120 g</strong>.</p>
<p><strong>Worked example (inverse):</strong> a journey takes 6 hours at 40 km/h. How long at 60 km/h? The product speed × time is the fixed distance: 40 × 6 = 240 km. Then 240 ÷ 60 = <strong>4 hours</strong>. Speeding up by half (×1.5) cut the time by the same factor (÷1.5).</p>
<div class="key-concept">
  <h3>Key Concept: Ask "What Stays Constant?"</h3>
  <p>This question is the master key. Every proportion problem — and a shocking fraction of physics problems — is solved by identifying the invariant. Fixed ratio → direct. Fixed product → inverse. Later, whole subjects hang on invariants: energy conservation, momentum conservation, Boyle's law. Chapter 3 of a math course is where physicists are actually made.</p>
</div>
<p>One caution: not every increasing relationship is proportional. A taxi fare with a $5 flag-fall rises with distance but isn't proportional to it — its graph misses the origin, and doubling the distance doesn't double the fare. Always test with the doubling question before you deploy proportion machinery.</p>`,
        },
        {
          id: "speed-distance-time",
          title: "Speed, Distance & Time",
          content: `
<p>Your first real physics formula, arriving a full phase ahead of the physics course: <strong>speed = distance ÷ time</strong>, or v = d ÷ t. It's nothing but a unit rate — kilometers per one hour — which is why it belongs in this chapter. Every technique you've built (unitary method, ratios, proportion) now gets a test drive on the most-used relationship in mechanics.</p>
<p>One relationship, three rearrangements:</p>
<ul>
  <li>v = d ÷ t — how fast? (unit rate)</li>
  <li>d = v × t — how far? (rate × how long)</li>
  <li>t = d ÷ v — how long? (distance shared out at v per hour)</li>
</ul>
<p>Don't memorize a triangle diagram; instead <em>hear the sentence</em>: "at 60 km per hour, each hour delivers 60 km." From that sentence all three forms are obvious.</p>
<p><strong>Worked example 1.</strong> A train covers 210 km in 2 h 30 min. Average speed? Convert time to hours: 2.5 h. Then v = 210 ÷ 2.5 = <strong>84 km/h</strong>. (Mixed units — kilometers with minutes — are the number-one source of wrong answers; convert first, always.)</p>
<p><strong>Worked example 2 (the classic trap).</strong> A cyclist rides 30 km out at 15 km/h and returns at 10 km/h. Average speed for the round trip? <em>Not</em> 12.5. Average speed is total distance ÷ total time. Out: 30 ÷ 15 = 2 h. Back: 30 ÷ 10 = 3 h. Total: 60 km in 5 h → <strong>12 km/h</strong>. You can't average rates directly, because the slower leg eats more time and drags the average toward itself.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>"Speed" hides an assumption: that it was constant. Real trips speed up and slow down, so v = d ÷ t gives the <em>average</em> speed. The instant-by-instant speed — what the speedometer shows — needs the idea of a limit, and chasing that idea rigorously is precisely what forced Newton to invent calculus. You are, right now, one honest question away from calculus.</p>
</div>
<p>Sanity-check habit: before computing, estimate. A 210 km trip in "about two and a half hours" should be "a bit over 80 km/h" — brisk highway driving, plausible. If your calculation had produced 840, the estimate would have flagged the slipped decimal instantly. Numbers in physics always mean something; check them against the world.</p>`,
        },
        {
          id: "density-as-a-ratio",
          title: "Density: Your Second Physics Formula",
          content: `
<p>Why do density problems feel hard for so many students? Not because density is deep — because density is a <em>ratio</em>, and ratio reasoning is exactly the skill schools under-built. You've now built it, so let's collect the reward.</p>
<p><strong>Density is mass per unit volume:</strong> ρ = m ÷ V (physicists write density with the Greek letter ρ, "rho"). It answers: how much stuff is packed into each cubic centimeter? Water: 1 g/cm³. Iron: 7.9 g/cm³. Air: about 0.0012 g/cm³. Same-size boxes of different materials have very different masses — density is the number that captures that.</p>
<p>The crucial mental step: <strong>density belongs to the material, not the object</strong>. Cut an iron bar in half and each half has half the mass and half the volume — but the ratio, 7.9 g/cm³, is untouched. A ratio that stays fixed while amounts change is exactly the "what stays constant?" invariant from the proportion section: for a given material, m and V are directly proportional, and density is the constant of proportionality. Speed is to distance-and-time what density is to mass-and-volume. One reasoning pattern, two costumes.</p>
<p><strong>Worked example 1.</strong> A block measures 4 cm × 5 cm × 2 cm and has mass 316 g. Density? Volume = 40 cm³, so ρ = 316 ÷ 40 = <strong>7.9 g/cm³</strong> — matching iron. Congratulations: you've just identified a metal with arithmetic, which is precisely how Archimedes audited the king's crown.</p>
<p><strong>Worked example 2.</strong> What is the mass of 250 cm³ of water? m = ρ × V = 1 × 250 = <strong>250 g</strong>. And of 250 cm³ of air? 0.0012 × 250 = 0.3 g. Same volume, mass differing by a factor of ≈800 — which is why a "full" balloon still feels empty.</p>
<div class="analogy">
  <h3>Analogy: Crowdedness</h3>
  <p>Density is crowdedness. A packed elevator and a packed stadium have wildly different numbers of people, but can have the same people-per-square-meter. Asking "which is denser?" is never asking "which is bigger or heavier?" — it's asking "which is more crowded?" Floating hangs on this: wood floats not because it's light (a log outweighs a nail) but because it's less crowded than water.</p>
</div>
<p>When density problems appear in Subject 5, they will offer you three quantities and ask for one. That's not a physics puzzle — it's the unitary method wearing a lab coat. You already know the move.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "Alex and Ben share $150 in the ratio 2 : 3. Using a bar model, how much does Ben receive?",
          options: [
            "$60 — Ben has 2 of the 5 boxes",
            "$90 — five equal boxes of $30 each, and Ben has three of them",
            "$100 — Ben gets two thirds",
            "$75 — they split it evenly",
          ],
          correctIndex: 1,
          explanation:
            "Draw 2 boxes for Alex and 3 for Ben: 5 equal boxes share $150, so each box is $30. Ben's three boxes make $90 (Alex gets $60). The bar model reduces ratio-sharing to counting boxes — no algebra required.",
        },
        {
          question:
            "A journey takes 6 hours at 40 km/h. How long does it take at 80 km/h, and why?",
          options: [
            "12 hours — time is directly proportional to speed",
            "4 hours — subtract the speed increase from the time",
            "3 hours — speed and time are inversely proportional when distance is fixed: doubling speed halves the time",
            "6 hours — travel time depends only on the route",
          ],
          correctIndex: 2,
          explanation:
            "The invariant is the distance: speed × time = 40 × 6 = 240 km stays fixed. At 80 km/h, time = 240 ÷ 80 = 3 h. Recognizing 'fixed product → inverse proportion' is the master move; the same logic later runs Boyle's law for gases.",
        },
        {
          question:
            "A cyclist travels 30 km at 15 km/h and returns at 10 km/h. What is the average speed for the whole trip?",
          options: [
            "12.5 km/h — the average of 15 and 10",
            "12 km/h — total distance (60 km) divided by total time (5 h)",
            "13 km/h — weighted toward the faster leg",
            "25 km/h — add the speeds",
          ],
          correctIndex: 1,
          explanation:
            "Average speed is always total distance ÷ total time, never the average of the speeds. The slow leg takes 3 hours against the fast leg's 2, so the slow speed dominates: 60 ÷ 5 = 12 km/h. Rates can't be averaged directly because they carry unequal time weights.",
        },
        {
          question:
            "A metal block has volume 40 cm³ and mass 316 g. Its density is 7.9 g/cm³. If the block is cut exactly in half, the density of each piece is...",
          options: [
            "7.9 g/cm³ — density is a ratio belonging to the material, unchanged by the amount",
            "3.95 g/cm³ — half the block, half the density",
            "15.8 g/cm³ — the same mass packs into less volume",
            "Impossible to say without weighing the pieces",
          ],
          correctIndex: 0,
          explanation:
            "Halving the block halves both mass (158 g) and volume (20 cm³), so the ratio 158 ÷ 20 = 7.9 g/cm³ is untouched. This is what makes density an identifier of materials — and it's the same 'fixed ratio' structure as constant speed. Students who miss this are missing the ratio concept, not the physics.",
        },
        {
          question:
            "A taxi charges a $5 flag-fall plus $2 per km. Why is the fare NOT directly proportional to distance?",
          options: [
            "Because the fare involves money rather than physical quantities",
            "Because doubling the distance doesn't double the fare, and the graph doesn't pass through the origin",
            "It is directly proportional — the fare rises when distance rises",
            "Because proportionality only applies to decreasing quantities",
          ],
          correctIndex: 1,
          explanation:
            "Direct proportion demands a fixed ratio: y = kx, a straight line through the origin. A 1 km ride costs $7 ($7/km) but a 10 km ride costs $25 ($2.50/km) — the ratio isn't constant, and at zero distance the fare is $5, not $0. 'It increases' is not enough; always apply the doubling test.",
        },
      ],
    },
    {
      id: "powers-roots-scientific-notation",
      title: "Powers, Roots & Scientific Notation",
      subtitle:
        "From repeated multiplication to the size of the universe — the notation that makes physics' huge and tiny numbers manageable",
      sections: [
        {
          id: "exponents-and-roots",
          title: "Exponents & Roots",
          content: `
<p>An exponent is compressed multiplication: 2⁵ means 2 × 2 × 2 × 2 × 2 = 32. Say it as "2 to the 5th power." The notation earns its keep because physics quantities multiply <em>relentlessly</em> — areas are lengths squared, volumes are lengths cubed, energies go as speeds squared — and because exponents obey beautifully simple rules:</p>
<ul>
  <li><strong>Multiplying powers adds exponents:</strong> 10³ × 10⁴ = 10⁷. (Three tens times four tens is seven tens multiplied together.)</li>
  <li><strong>Dividing subtracts:</strong> 10⁷ ÷ 10³ = 10⁴.</li>
  <li><strong>A power of a power multiplies:</strong> (10³)² = 10⁶.</li>
</ul>
<p>Push the subtraction rule to its edges and two famous results fall out, no decree required. 10³ ÷ 10³ = 10⁰, but anything divided by itself is 1 — so <strong>10⁰ = 1</strong>. And 10² ÷ 10³ = 10⁻¹, but 100 ÷ 1000 = 1⁄10 — so <strong>a negative exponent means a reciprocal</strong>: 10⁻³ = 1⁄1000 = 0.001. Negative exponents aren't negative numbers; they're small positive ones. That distinction will matter every day of this course.</p>
<p><strong>Roots undo powers.</strong> The square root of 49 asks: what number, squared, gives 49? Answer 7, written √49 = 7. Cube roots undo cubes: ∛64 = 4, since 4³ = 64. Physics reaches for roots whenever it reasons backwards from an area, a volume, or an energy: if a square field has area 200 m², its side is √200 ≈ 14.1 m. If kinetic energy quadruples, speed only doubled — because energy carries a v², undone by a square root.</p>
<div class="key-concept">
  <h3>Key Concept: Squares Grow Fast, and Physics Feels It</h3>
  <p>Doubling a speed quadruples the kinetic energy (2² = 4) — which is why a crash at 100 km/h is four times as destructive as at 50, not twice. Tripling the distance from a planet cuts gravity to a ninth (3² = 9). The nonlinear world of physics is largely the arithmetic of squares.</p>
</div>
<p>Worked example: fold a paper 0.1 mm thick 42 times (in imagination — physical folding gives out near 7). Thickness: 0.1 mm × 2⁴² ≈ 0.1 × 4.4 × 10¹² mm ≈ 440,000 km — past the Moon. Exponential growth is not intuition-friendly; that's precisely why we need the notation.</p>`,
        },
        {
          id: "scientific-notation",
          title: "Scientific Notation",
          content: `
<p>Physics traffics in absurd numbers. The mass of the Earth: 5,972,000,000,000,000,000,000,000 kg. The mass of an electron: 0.000 000 000 000 000 000 000 000 000 000 911 kg. Written that way, they're unusable — uncountable zeros, invisible errors. <strong>Scientific notation</strong> fixes this by splitting every number into two jobs:</p>
<p style="text-align:center"><strong>(a number between 1 and 10) × (a power of ten)</strong></p>
<p>Earth's mass: 5.972 × 10²⁴ kg. Electron: 9.11 × 10⁻³¹ kg. The first factor carries the <em>digits</em> (the precision); the exponent carries the <em>size</em>. Two jobs, cleanly separated.</p>
<p>Converting is place-value gymnastics from Chapter 1: count how many places the decimal point must slide to leave one nonzero digit in front. 34,500 → 3.45 × 10⁴ (four slides left). 0.0072 → 7.2 × 10⁻³ (three slides right; small numbers get negative exponents).</p>
<p>The real payoff is arithmetic — the exponent rules take over the heavy lifting:</p>
<ul>
  <li><strong>Multiply:</strong> multiply the fronts, add the exponents. (3 × 10⁸) × (2 × 10⁻⁵) = 6 × 10³.</li>
  <li><strong>Divide:</strong> divide the fronts, subtract the exponents. (8 × 10⁶) ÷ (4 × 10²) = 2 × 10⁴.</li>
  <li><strong>Tidy up:</strong> if the front leaves the 1–10 range, slide once more: 60 × 10³ → 6 × 10⁴.</li>
</ul>
<p><strong>Worked example.</strong> How long does sunlight take to reach Earth? Distance ≈ 1.5 × 10¹¹ m; light speed ≈ 3 × 10⁸ m/s. Time = distance ÷ speed = (1.5 ÷ 3) × 10¹¹⁻⁸ = 0.5 × 10³ = 5 × 10² s = <strong>500 seconds ≈ 8⅓ minutes</strong>. A calculation spanning eleven orders of magnitude, done in one line, in your head.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Your calculator's "E notation" — 5.972E24 — is scientific notation wearing a keyboard-friendly disguise: E24 means × 10²⁴. Knowing this saves you from the classic blunder of typing 5.972 × 10 ^ 24 with stray parentheses and getting an answer that is off by a factor of ten — an error scientific notation was invented to prevent.</p>
</div>`,
        },
        {
          id: "orders-of-magnitude",
          title: "Orders of Magnitude",
          content: `
<p>An <strong>order of magnitude</strong> is a factor of ten. Two numbers are "an order of magnitude apart" when one is about ten times the other; "three orders" means a factor of about a thousand. It sounds like jargon, but it's really a decision to care about the <em>exponent</em> and treat the front number as a detail — physics' favorite level of precision for a first look at anything.</p>
<p>Why coarse-grain like this? Because at first contact with a problem, the exponent carries almost all the information. Whether a bacterium is 1 or 3 micrometers long barely matters; that it's 10⁻⁶ m rather than 10⁻³ m is everything. A ladder to keep in your head:</p>
<table>
  <thead>
    <tr><th>Scale (m)</th><th>Roughly...</th></tr>
  </thead>
  <tbody>
    <tr><td>10⁻¹⁵</td><td>a proton</td></tr>
    <tr><td>10⁻¹⁰</td><td>an atom</td></tr>
    <tr><td>10⁻⁶</td><td>a bacterium</td></tr>
    <tr><td>10⁰</td><td>you (≈1–2 m)</td></tr>
    <tr><td>10⁷</td><td>Earth's diameter (1.3 × 10⁷ m)</td></tr>
    <tr><td>10¹¹</td><td>Earth–Sun distance</td></tr>
    <tr><td>10¹⁶</td><td>one light-year</td></tr>
    <tr><td>10²¹</td><td>the Milky Way's diameter</td></tr>
    <tr><td>10²⁶</td><td>the observable universe</td></tr>
  </tbody>
</table>
<p>Notice the symmetry worth savoring: you stand roughly halfway (in factors of ten) between a proton and the observable universe — about 41 orders of magnitude in each direction? Not quite: 15 below, 26 above. Closer to atoms than to galaxies, but a middle creature either way.</p>
<div class="analogy">
  <h3>Analogy: The Zoom Slider</h3>
  <p>Think of reality as a map app with a zoom slider, where each notch is ×10. Nine notches out from your street: the whole planet. Nine notches in: a virus. The famous 1977 film <em>Powers of Ten</em> is exactly this ride, and the mental slider it installs is a permanent piece of physics equipment.</p>
</div>
<p><strong>Worked example.</strong> How many times more massive is the Sun (2 × 10³⁰ kg) than the Earth (6 × 10²⁴ kg)? Exponents first: 10³⁰ ÷ 10²⁴ = 10⁶ — about a million. Fronts: 2 ÷ 6 ≈ 0.33. Answer: ≈ 3.3 × 10⁵, a third of a million. For most purposes, "the Sun is five to six orders of magnitude heavier" is the memorable, useful fact — and you computed it without a calculator.</p>`,
        },
        {
          id: "fermi-estimation",
          title: "Fermi Estimation",
          content: `
<p>The physicist Enrico Fermi was famous for producing good rough answers to seemingly impossible questions — how many piano tuners work in Chicago? — using nothing but everyday knowledge and powers of ten. A <strong>Fermi estimate</strong> aims not for the right answer but for the right <em>order of magnitude</em>: within a factor of ten. That sounds unambitious until you see how much it buys.</p>
<p>The method:</p>
<ol>
  <li><strong>Break the question into factors you can roughly guess.</strong></li>
  <li><strong>Round each factor to one digit times a power of ten.</strong></li>
  <li><strong>Multiply, adding exponents as you go.</strong></li>
</ol>
<p>The magic is error cancellation: with several independently guessed factors, some guesses run high and others low, and the product usually lands within a factor of 2–3 of truth — the same opposite-direction cancellation you met while rounding in Chapter 1, now industrialized.</p>
<p><strong>Worked example: how many breaths do you take in a lifetime?</strong></p>
<ul>
  <li>Breathing rate: ≈ 15 per minute ≈ 1.5 × 10¹</li>
  <li>Minutes per day: 60 × 24 = 1,440 ≈ 1.5 × 10³</li>
  <li>Days per year: ≈ 4 × 10²</li>
  <li>Years: ≈ 8 × 10¹</li>
</ul>
<p>Multiply fronts: 1.5 × 1.5 × 4 × 8 ≈ 72. Add exponents: 10¹⁺³⁺²⁺¹ = 10⁷. Total ≈ 72 × 10⁷ ≈ <strong>7 × 10⁸ breaths</strong> — roughly a billion, give or take. No reference book on Earth has this number; you just manufactured it from things you already knew.</p>
<p><strong>Worked example 2: could all of humanity fit in Lake Superior?</strong> A person's volume ≈ 0.07 m³ (they mostly float, like water, and weigh ≈ 70 kg — density reasoning from Chapter 3!). Humanity: 8 × 10⁹ people × 7 × 10⁻² m³ ≈ 5.6 × 10⁸ m³. Lake Superior holds ≈ 1.2 × 10¹³ m³. Verdict: humanity would fill about 0.005% of the lake. All of us, one lake, a rounding error.</p>
<div class="key-concept">
  <h3>Key Concept: Estimation Is a Physicist's License</h3>
  <p>Fermi problems train the exact reflexes real physics demands: decompose, approximate, track powers of ten, and sanity-check the result. Interviewers at national labs and tech firms still pose them, because the skill they reveal — reasoning confidently under uncertainty — is the job. From now on, estimate one absurd thing per week. It's the most enjoyable homework in this course.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "What is 10⁻³ as an ordinary number?",
          options: [
            "−1000 — the minus makes it negative",
            "0.001 — a negative exponent means a reciprocal: 1⁄10³",
            "−0.001 — negative and small",
            "0.003 — the 3 moves after the decimal point",
          ],
          correctIndex: 1,
          explanation:
            "A negative exponent is a reciprocal, not a negative number: 10⁻³ = 1⁄10³ = 1⁄1000 = 0.001, a small positive value. This follows from the division rule (10² ÷ 10³ = 10⁻¹ = 1⁄10). Physics is full of 10⁻¹⁹s and 10⁻³¹s — all tiny, none negative.",
        },
        {
          question:
            "Light travels at 3 × 10⁸ m/s and the Sun is 1.5 × 10¹¹ m away. How long does sunlight take to reach Earth?",
          options: [
            "500 s (about 8 minutes) — divide fronts (1.5 ÷ 3 = 0.5) and subtract exponents (11 − 8 = 3)",
            "0.002 s — light is essentially instantaneous",
            "4.5 × 10¹⁹ s — multiply the numbers",
            "50 s — subtract exponents to get 10³ but ignore the fronts",
          ],
          correctIndex: 0,
          explanation:
            "Time = distance ÷ speed = (1.5 ÷ 3) × 10¹¹⁻⁸ = 0.5 × 10³ = 500 s ≈ 8⅓ min. Scientific notation turns an 11-orders-of-magnitude calculation into one-digit arithmetic plus exponent subtraction — the entire point of the notation.",
        },
        {
          question:
            "Kinetic energy grows as the square of speed. A car doubles its speed from 50 to 100 km/h. Its kinetic energy...",
          options: [
            "doubles — energy tracks speed",
            "triples — one factor for speed, one for mass, one extra",
            "quadruples — 2² = 4, which is why high-speed crashes are so disproportionately destructive",
            "increases by 50 km/h worth",
          ],
          correctIndex: 2,
          explanation:
            "Squares turn a doubling into a quadrupling: (2v)² = 4v². This is the single most practical fact about exponents — stopping distances, crash energies, and wind loads all carry squares, so modest speed increases buy severe consequences.",
        },
        {
          question:
            "In a Fermi estimate with several guessed factors, why does the final answer usually land within a factor of 2–3 of the truth?",
          options: [
            "Because each individual guess is highly accurate",
            "Because independent guesses err in both directions, and their errors partly cancel in the product",
            "Because powers of ten cannot compound errors",
            "It doesn't — Fermi estimates are typically off by factors of 100 or more",
          ],
          correctIndex: 1,
          explanation:
            "Each factor might be off by 2× either way, but overestimates and underestimates multiply against each other and largely cancel. This statistical mercy is why order-of-magnitude reasoning works at all — and why breaking a question into more independent factors often makes the estimate better, not worse.",
        },
        {
          question: "Which is the correct scientific-notation form of 0.00042?",
          options: [
            "42 × 10⁻⁵ — front number can be anything",
            "4.2 × 10⁴ — count the four decimal places",
            "0.42 × 10⁻³ — slide three places",
            "4.2 × 10⁻⁴ — one nonzero digit before the point, decimal slid four places right",
          ],
          correctIndex: 3,
          explanation:
            "Standard form requires the front number to sit between 1 and 10: 4.2. The decimal point slides four places right to get there, so the exponent is −4 (small number, negative exponent). The forms 42 × 10⁻⁵ and 0.42 × 10⁻³ equal the same value but break the convention that makes numbers instantly comparable.",
        },
      ],
    },
    {
      id: "units-and-measurement",
      title: "Units & Measurement",
      subtitle:
        "SI units, conversion as multiplication by 1, dimensional thinking, and honest numbers — where math becomes measurement",
      sections: [
        {
          id: "the-si-system",
          title: "The SI System: One Language for Measurement",
          content: `
<p>A measurement without a unit is a rumor. "The rope is 12" — twelve what? Physics enforces the rule absolutely: <strong>every measured quantity is a number times a unit</strong>, and the unit is not decoration — it's half the information. In 1999, NASA's $327-million Mars Climate Orbiter burned up because one team supplied thrust data in pound-force units while another read them as newtons. Units are not pedantry. Units are survival.</p>
<p>The <strong>SI system</strong> (Système International) is science's shared measurement language. Everything you'll meet in this course is built from a handful of base units:</p>
<table>
  <thead>
    <tr><th>Quantity</th><th>Unit</th><th>Symbol</th><th>Everyday anchor</th></tr>
  </thead>
  <tbody>
    <tr><td>Length</td><td>meter</td><td>m</td><td>a long stride</td></tr>
    <tr><td>Mass</td><td>kilogram</td><td>kg</td><td>a liter of water</td></tr>
    <tr><td>Time</td><td>second</td><td>s</td><td>one "one-Mississippi"</td></tr>
    <tr><td>Temperature</td><td>kelvin</td><td>K</td><td>Celsius shifted so 0 K is absolute zero (0°C = 273.15 K)</td></tr>
    <tr><td>Electric current</td><td>ampere</td><td>A</td><td>a bright LED bulb draws ≈ 0.05 A</td></tr>
  </tbody>
</table>
<p>Everything else is <strong>derived</strong> by combining these: speed in m/s, volume in m³, density in kg/m³, and later force in kg·m/s² (honored with its own name, the newton). Recognizing derived units as combinations is a preview of dimensional thinking, two sections from now.</p>
<p>SI's masterstroke is its <strong>prefixes</strong> — the place-value system from Chapter 1, bolted onto units. Each prefix is a power of ten: kilo (10³), mega (10⁶), giga (10⁹); going down, centi (10⁻²), milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹). One set of prefixes, every unit: a kilometer, a kilogram, a kilowatt; a millimeter, a milliliter, a millisecond. Learn nine prefixes and you can read every instrument in a laboratory.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Since 2019, every SI base unit is defined by fixing a constant of nature — the second by a cesium atom's vibration, the meter by the speed of light, the kilogram via Planck's constant. The platinum-iridium kilogram cylinder in a Paris vault, humanity's last physical unit standard, is now a museum piece. Measurement no longer rests on any object anyone could scratch, steal, or lose.</p>
</div>`,
        },
        {
          id: "unit-conversion-as-multiplication-by-one",
          title: "Unit Conversion: Multiplying by 1",
          content: `
<p>Most people convert units by half-remembered folklore: "multiply by 1000... or was it divide?" Physics has a method with no folklore in it, and it will carry you from this chapter through relativity: <strong>every unit conversion is a multiplication by 1</strong>.</p>
<p>The trick: since 1 km = 1000 m, the fraction (1000 m ⁄ 1 km) equals exactly 1 — top and bottom are the same length in different costumes. Multiplying by it changes nothing real; it only changes the label. Then you let the units <strong>cancel like fractions</strong>:</p>
<p style="text-align:center">3.5 km × (1000 m ⁄ 1 km) = 3,500 m — the km upstairs cancels the km downstairs.</p>
<p>Which way up does the factor go? Let the cancellation decide: put the unit you're <em>leaving</em> where it will cancel. If nothing cancels, the factor is upside down — flip it. The method is self-correcting, which folklore never is.</p>
<p><strong>Worked example (chained factors).</strong> Convert 90 km/h to m/s:</p>
<p style="text-align:center">90 km⁄h × (1000 m ⁄ 1 km) × (1 h ⁄ 3600 s) = 90 × 1000 ÷ 3600 = <strong>25 m/s</strong></p>
<p>Each factor equals 1; km cancels km, h cancels h; only m/s survives. (The shortcut worth memorizing after you trust it: km/h ÷ 3.6 = m/s.)</p>
<p><strong>Worked example (squared units — where folklore dies).</strong> Convert 2.5 m² to cm². Not 250! A square meter is a 100 cm × 100 cm square: 10,000 cm². So 2.5 m² × (100 cm ⁄ 1 m) × (100 cm ⁄ 1 m) = <strong>25,000 cm²</strong>. The conversion factor gets applied once per dimension — automatic with this method, invisible without it.</p>
<div class="key-concept">
  <h3>Key Concept: The Same "Clever 1" You Already Know</h3>
  <p>In Chapter 2 you made equivalent fractions by multiplying by 2⁄2. This is the identical move with units in the costume: (1000 m ⁄ 1 km) is just a clever form of 1. One idea — multiplying by 1 never changes a value, only its appearance — now runs your fraction work AND your unit work. Physics is full of such economies.</p>
</div>
<p>From here on, treat units as algebraic objects that multiply, divide, and cancel. That single habit prevents the most common wrong answers in all of introductory physics — and it's the warm-up for the next section, where units stop being bookkeeping and start doing physics for you.</p>`,
        },
        {
          id: "dimensional-thinking",
          title: "Dimensional Thinking",
          content: `
<p>Here's a superpower disguised as bookkeeping. Every physical quantity has a <strong>dimension</strong> — its recipe in terms of length (L), mass (M), and time (T), regardless of which units dress it up. Speed has dimension L⁄T whether measured in m/s or furlongs per fortnight. Area is L². Density is M⁄L³. Acceleration — speed's rate of change — is L⁄T².</p>
<p>The power comes from one iron rule: <strong>an equation must have the same dimensions on both sides</strong>. You cannot equate meters to seconds, any more than you can owe someone 5 kilograms of money. Consequences:</p>
<ul>
  <li><strong>Error detection.</strong> Suppose you misremember distance fallen as d = ½gt (should it be t²?). Check: g is L⁄T², times t gives L⁄T — a speed, not a distance. Wrong, caught in five seconds, no experiment needed. With t²: L⁄T² × T² = L ✓.</li>
  <li><strong>Formula reconstruction.</strong> Forgot the pendulum period formula? It should involve length ℓ and gravity g (L⁄T²). To build a time from L and L⁄T²: divide ℓ by g to get T², then square-root. So the period ≈ √(ℓ⁄g) — correct up to the dimensionless 2π that dimensions can never see. You just recovered physics from bookkeeping.</li>
  <li><strong>Sanity in every answer.</strong> If a problem asks for a mass and your result carries m³, no further review is required: it's wrong.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Grammar Check for Equations</h3>
  <p>"The purple seven slept furiously" is grammatical nonsense even before you ask if it's true. Dimensional analysis is grammar-checking for physics: it can't confirm an equation is <em>right</em>, but it instantly exposes whole categories of wrongness — and physicists run this check reflexively on every formula they write or recall.</p>
</div>
<p><strong>Worked example.</strong> A student derives that a dropped object's landing speed is v = √(2gh). Check it: inside the root, g × h has dimensions (L⁄T²) × L = L²⁄T². The square root gives L⁄T — a speed ✓. Note what the check costs: nothing. Note what it catches over a career: everything from sign-of-exhaustion slips to deep misunderstandings.</p>
<p>When formulas multiply in Phase 2 — and they will — dimensional thinking is what separates students who memorize twenty formulas nervously from students who carry three ideas confidently and rebuild the rest on demand. Build the reflex now: <em>every</em> equation you meet, ask it to show its dimensions at the door.</p>`,
        },
        {
          id: "significant-figures",
          title: "Significant Figures: Honest Numbers",
          content: `
<p>Measure a table with a ruler marked in millimeters and report the length as 1.274063 m, and you have told a lie — not about the table, but about your ruler. No instrument justifies those last four digits. <strong>Significant figures</strong> are the discipline of reporting exactly as much precision as you actually have: every digit you write is a claim, and honest numbers make only defensible claims.</p>
<p>Reading significance:</p>
<ul>
  <li><strong>Nonzero digits always count:</strong> 47.3 has three sig figs.</li>
  <li><strong>Zeros between digits count:</strong> 4,003 has four.</li>
  <li><strong>Leading zeros never count:</strong> 0.0052 has two — the zeros just locate the decimal point. (Scientific notation says it cleanly: 5.2 × 10⁻³.)</li>
  <li><strong>Trailing zeros after a decimal point count:</strong> 2.500 has four — writing them is a deliberate claim of precision. A bare 2,500 is ambiguous, which is precisely why scientists prefer 2.5 × 10³ (two sig figs) or 2.500 × 10³ (four).</li>
</ul>
<p>Calculating without inflating precision:</p>
<ul>
  <li><strong>Multiplying/dividing:</strong> the answer keeps as many sig figs as the <em>least</em> precise input. 12.3 (three) × 4.6 (two) = 56.58 → report <strong>57</strong>.</li>
  <li><strong>Adding/subtracting:</strong> the answer keeps the least precise <em>decimal place</em>. 12.11 + 0.043 = 12.153 → report <strong>12.15</strong>.</li>
  <li><strong>Round only at the end.</strong> Carry full digits through intermediate steps; premature rounding compounds.</li>
</ul>
<div class="key-concept">
  <h3>Key Concept: A Chain Is as Precise as Its Weakest Measurement</h3>
  <p>Multiplying a superbly measured 3.14159 by a crudely measured 2.1 yields a crude product. No arithmetic can add information that a measurement failed to capture. Calculators are the enemy here — they will happily hand you ten digits of fiction; sig figs are how you decline.</p>
</div>
<p><strong>Worked example.</strong> A block's sides measure 2.1 cm, 3.45 cm, 1.2 cm. Volume: 2.1 × 3.45 × 1.2 = 8.694 cm³. The stingiest inputs have two sig figs, so report <strong>8.7 cm³</strong>. If its mass is 68.5 g, density = 68.5 ÷ 8.694 ≈ 7.879... → <strong>7.9 g/cm³</strong> (two sig figs) — iron again, and now stated with exactly the confidence the ruler deserves.</p>
<p>This is your first taste of measurement uncertainty, which Subject 3 develops properly and lab work lives by. The theme deserves its banner: <strong>physics is not about exact numbers; it's about known precision</strong>.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "Convert 90 km/h to m/s using conversion factors. Which is the correct setup and result?",
          options: [
            "90 × (1000 m ⁄ 1 km) × (1 h ⁄ 3600 s) = 25 m/s — each factor equals 1, and km and h cancel",
            "90 × 3600 ÷ 1000 = 324 m/s — hours convert first",
            "90 ÷ 1000 × 3600 = 324 m/s — the factors flip",
            "90 ÷ 60 = 1.5 m/s — divide by minutes",
          ],
          correctIndex: 0,
          explanation:
            "Each factor is a 'clever form of 1' (top equals bottom), so the value is unchanged while km cancels km and h cancels h: 90 × 1000 ÷ 3600 = 25 m/s. If units don't cancel, a factor is upside down — the method is self-correcting, which is why physicists trust it over memorized rules.",
        },
        {
          question: "How many cm² are in 2.5 m²?",
          options: [
            "250 — multiply by 100",
            "2,500 — multiply by 1000",
            "25,000 — the factor of 100 applies once per dimension: 2.5 × 100 × 100",
            "250,000 — apply 100 three times",
          ],
          correctIndex: 2,
          explanation:
            "A square meter is a 100 cm × 100 cm square = 10,000 cm². Squared units need the conversion factor squared: 2.5 × 10⁴ = 25,000 cm². Writing the factor (100 cm ⁄ 1 m) twice makes this automatic — forgetting it is the single most common conversion error in physics homework.",
        },
        {
          question:
            "A student recalls the distance-fallen formula as d = ½gt (g in m/s², t in seconds). What does a dimensional check reveal?",
          options: [
            "The formula is fine — the ½ fixes the dimensions",
            "The right side has dimensions L⁄T (a speed), not L, so a factor of t is missing: it must be t²",
            "Dimensions can't test formulas containing constants",
            "The formula fails only for large values of t",
          ],
          correctIndex: 1,
          explanation:
            "g × t has dimensions (L⁄T²) × T = L⁄T — a speed, not a distance, so the equation is grammatically impossible; with t² it gives L ✓. Pure numbers like ½ carry no dimensions, so they can't rescue a mismatch. This five-second check catches misremembered formulas before they cost you a problem set.",
        },
        {
          question: "How many significant figures does 0.00520 have?",
          options: [
            "six — count every digit",
            "five — count all zeros after the decimal point",
            "two — trailing zeros never count",
            "three — the leading zeros only place the decimal point, but the trailing zero is a deliberate claim of precision",
          ],
          correctIndex: 3,
          explanation:
            "Leading zeros are placeholders (not significant); the 5, the 2, and the final 0 are significant — that trailing zero asserts the measurement resolved that digit. Scientific notation removes all doubt: 5.20 × 10⁻³ displays exactly its three significant figures, which is one reason scientists prefer it.",
        },
        {
          question:
            "Sides of a block measure 2.1 cm, 3.45 cm, and 1.2 cm. A calculator gives the volume as 8.694 cm³. What should you report, and why?",
          options: [
            "8.694 cm³ — never discard computed digits",
            "8.7 cm³ — the least precise measurements have two significant figures, and no calculation can exceed its weakest input",
            "8.69 cm³ — match the most precise measurement",
            "9 cm³ — always round to whole numbers in a lab",
          ],
          correctIndex: 1,
          explanation:
            "For multiplication, the result inherits the sig-fig count of the least precise factor — here two (2.1 and 1.2). The extra calculator digits are fiction: they claim a precision the ruler never delivered. Report 8.7 cm³. Honest precision is the foundation of the uncertainty analysis you'll meet in real lab work.",
        },
      ],
    },
  ],
};
