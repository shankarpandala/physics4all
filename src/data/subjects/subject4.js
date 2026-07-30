export const subject4 = {
  id: "algebra-geometry-for-physics",
  number: 4,
  title: "Algebra & Geometry for Physics",
  description:
    "The math toolkit that powers the entire Phase 2 tour of physics: rearrange any formula on demand, read physics straight off a graph, and solve triangles with confidence.",
  phase: 2,
  chapters: [
    {
      id: "the-language-of-algebra",
      title: "The Language of Algebra",
      subtitle:
        "Variables, expressions, and the symbol-manipulation moves behind every physics formula",
      sections: [
        {
          id: "letters-that-stand-for-numbers",
          title: "Letters That Stand for Numbers",
          content: `
<p>A variable is nothing more mysterious than a <strong>labeled box that holds a number</strong>. When physics writes v = d/t, it is saying: "take whatever number is in the box labeled d, divide it by whatever number is in the box labeled t, and the result belongs in the box labeled v." The letters aren't the point — the <em>relationship</em> between the boxes is.</p>
<p>An <strong>expression</strong> is a recipe built from variables and numbers: 3x + 5, or d/t, or 2(a + b). It has no equals sign — it's just a quantity waiting to be computed. An <strong>equation</strong> makes a claim: it says two expressions are equal, like v = d/t or 3x + 5 = 20. Expressions you <em>evaluate</em>; equations you <em>solve</em>.</p>
<h3>Substitution: the number-in-the-box move</h3>
<p>Evaluating an expression means replacing each letter with its number and doing the arithmetic. Watch it work:</p>
<ul>
  <li>Evaluate 3x + 5 when x = 4: &nbsp; 3 × 4 + 5 = 12 + 5 = <strong>17</strong></li>
  <li>Evaluate d/t when d = 150 and t = 3: &nbsp; 150 ÷ 3 = <strong>50</strong></li>
  <li>Evaluate 2(a + b) when a = 7, b = 3: &nbsp; 2 × (7 + 3) = 2 × 10 = <strong>20</strong></li>
  <li>Evaluate ½at² when a = 10, t = 3: &nbsp; ½ × 10 × 3² = ½ × 10 × 9 = <strong>45</strong></li>
</ul>
<p>Notice the last one: the ² applies only to t, and you square <em>before</em> multiplying — order of operations (brackets, powers, × and ÷, then + and −) is the grammar of this language.</p>
<div class="analogy">
  <h3>Analogy: A Spreadsheet Cell</h3>
  <p>If you've ever typed =A1/B1 into a spreadsheet, you've already done algebra. A1 and B1 are variables; the formula is an expression; changing the inputs updates the output automatically. Physics formulas are exactly this — v = d/t is =A1/B1 with better labels.</p>
</div>
<div class="key-concept">
  <h3>Key Concept: One Formula, Infinite Problems</h3>
  <p>The power of a variable is generality. "150 km in 3 hours means 50 km/h" solves one trip. v = d/t solves <em>every</em> trip ever taken. That compression — infinitely many facts in five symbols — is why physics is written in algebra.</p>
</div>`,
        },
        {
          id: "simplifying-expressions",
          title: "Simplifying: Collecting Like Terms",
          content: `
<p>Algebraic expressions often arrive messy, and simplifying is just tidying up: combining everything that can be combined so the expression says the same thing in fewer symbols. The one rule that governs it all: <strong>you can only add or subtract like terms</strong> — terms with exactly the same letter part.</p>
<p>Think of terms as objects. 3x means "three x-things." So 3x + 2x = 5x for the same reason 3 apples + 2 apples = 5 apples. But 3x + 2y stays 3x + 2y — apples and oranges don't merge. And 3x + 2x² also stays put: an x-thing and an x²-thing are different objects, just as a meter and a square meter are different quantities.</p>
<h3>Worked examples</h3>
<ol>
  <li>4x + 7 + 2x − 3 &nbsp;→&nbsp; (4x + 2x) + (7 − 3) &nbsp;→&nbsp; <strong>6x + 4</strong></li>
  <li>5a + 3b − 2a + b &nbsp;→&nbsp; (5a − 2a) + (3b + b) &nbsp;→&nbsp; <strong>3a + 4b</strong></li>
  <li>x² + 4x + 3x² − x &nbsp;→&nbsp; (x² + 3x²) + (4x − x) &nbsp;→&nbsp; <strong>4x² + 3x</strong></li>
  <li>2t + 6t − t &nbsp;→&nbsp; <strong>7t</strong> &nbsp;(the invisible coefficient of −t is −1)</li>
</ol>
<p>Multiplication is friendlier: any terms can multiply. 3 × 2x = 6x. And x × x = x², so 2x × 4x = 8x². Multiply the numbers, then combine the letters.</p>
<div class="key-concept">
  <h3>Key Concept: The Sign Travels With the Term</h3>
  <p>In 5a − 2a + 3b, the "−" belongs to the 2a. The most common simplifying error is dropping a minus sign while shuffling terms. Read expressions as a list of signed terms: +5a, −2a, +3b — then collecting is foolproof.</p>
</div>
<div class="did-you-know">
  <h3>Why Physics Cares</h3>
  <p>When several forces act on one object, physics adds them into a single <em>net force</em> — which is literally collecting like terms: 30 N forward − 12 N backward = 18 N forward. Later, when you combine energy terms or add resistances in a circuit, you'll be doing this exact move with physical quantities attached.</p>
</div>`,
        },
        {
          id: "expanding-brackets",
          title: "Expanding Brackets: The Distributive Law",
          content: `
<p>Brackets say "treat this as one package." Expanding unwraps the package by the <strong>distributive law</strong>: whatever multiplies a bracket multiplies <em>every</em> term inside it.</p>
<p>a(b + c) = ab + ac. With numbers you already believe this: 4 × (10 + 2) is 4 × 10 + 4 × 2 = 48 — it's how you multiply 4 × 12 in your head.</p>
<h3>Worked examples</h3>
<ol>
  <li>3(x + 5) = 3x + 15</li>
  <li>4(2x + 3) = 8x + 12</li>
  <li>−2(x − 4) = −2x + 8 &nbsp;<em>(a negative outside flips every sign inside)</em></li>
  <li>x(x + 7) = x² + 7x</li>
  <li>5(2a + 3b − 1) = 10a + 15b − 5 &nbsp;<em>(every term, including the lonely −1)</em></li>
</ol>
<h3>Two brackets: everything meets everything</h3>
<p>To expand (x + 2)(x + 3), each term in the first bracket multiplies each term in the second — four little products in total:</p>
<ul>
  <li>x × x = x²</li>
  <li>x × 3 = 3x</li>
  <li>2 × x = 2x</li>
  <li>2 × 3 = 6</li>
</ul>
<p>Collect like terms: x² + 3x + 2x + 6 = <strong>x² + 5x + 6</strong>. One more: (x − 4)(x + 1) = x² + x − 4x − 4 = <strong>x² − 3x − 4</strong>. Watch the signs travel.</p>
<div class="analogy">
  <h3>Analogy: The Handshake Rule</h3>
  <p>Two people from team one, two from team two: everyone shakes hands with everyone on the other team — 2 × 2 = 4 handshakes. Expanding double brackets is exactly this: four products, no term left out, then tidy up.</p>
</div>
<div class="key-concept">
  <h3>Key Concept: One Pattern to Memorize</h3>
  <p>(a + b)² = a² + 2ab + b² — <em>not</em> a² + b². Check with numbers: (3 + 4)² = 49, while 3² + 4² = 25. That middle term 2ab is real, and forgetting it is the single most famous algebra mistake. This identity returns in Pythagoras proofs, energy formulas, and error estimates all through physics.</p>
</div>`,
        },
        {
          id: "factoring-basics",
          title: "Factoring: Running the Film Backwards",
          content: `
<p>Factoring is expanding in reverse: you take a spread-out expression and repackage it as a product. 8x + 12 becomes 4(2x + 3). Nothing changed in value — you can always check by expanding again — but the <em>form</em> changed, and form is power.</p>
<h3>Step one: hunt the common factor</h3>
<p>Look at every term and ask: what do they all share? Pull it out front.</p>
<ol>
  <li>6x + 9 &nbsp;→&nbsp; both share 3 &nbsp;→&nbsp; <strong>3(2x + 3)</strong></li>
  <li>10a − 15b &nbsp;→&nbsp; both share 5 &nbsp;→&nbsp; <strong>5(2a − 3b)</strong></li>
  <li>x² + 7x &nbsp;→&nbsp; both share x &nbsp;→&nbsp; <strong>x(x + 7)</strong></li>
  <li>4t² + 8t &nbsp;→&nbsp; both share 4t &nbsp;→&nbsp; <strong>4t(t + 2)</strong></li>
</ol>
<p>Always check by expanding: 4t(t + 2) = 4t² + 8t. ✓ If it doesn't expand back, the factoring is wrong — this self-check makes factoring one of the safest skills in algebra.</p>
<h3>Why bother?</h3>
<p>Because a product equals zero only when one of its factors is zero — the key that unlocks quadratic equations in the chapter ahead. And because factored form reveals structure: in physics, mgh₁ − mgh₂ = mg(h₁ − h₂) shows at a glance that only the <em>height difference</em> matters for gravitational energy, not the individual heights. The factored form is the insight.</p>
<div class="analogy">
  <h3>Analogy: Zipping a File</h3>
  <p>Expanding and factoring are unzip and zip. The information is identical either way; you choose the form that suits the job. Need to combine with other terms? Expand. Need to solve, cancel, or see what's shared? Factor.</p>
</div>
<div class="did-you-know">
  <h3>Mental Arithmetic Bonus</h3>
  <p>Factoring is why 17 × 6 + 3 × 6 is easy: it's (17 + 3) × 6 = 120. Physicists and engineers factor constantly in their heads — pulling out common factors before computing is often the difference between a 10-second calculation and a calculator hunt.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "Using v = d/t, what is v when d = 150 km and t = 3 hours?",
          options: ["45 km/h", "153 km/h", "50 km/h", "0.02 km/h"],
          correctIndex: 2,
          explanation:
            "Substitute the numbers into their boxes: v = 150 ÷ 3 = 50 km/h. Substitution — replace each letter with its value, then do the arithmetic — is the move you'll use in every physics chapter that follows.",
        },
        {
          question: "Simplify: 3x + 5 + 2x − 1",
          options: ["5x + 4", "6x + 4", "5x − 4", "10x"],
          correctIndex: 0,
          explanation:
            "Collect like terms with their signs: 3x + 2x = 5x, and 5 − 1 = 4, giving 5x + 4. The x-terms and the plain numbers are different kinds of object, so they never merge into one term like 10x.",
        },
        {
          question: "Expand: 4(2x + 3)",
          options: ["8x + 3", "6x + 7", "24x", "8x + 12"],
          correctIndex: 3,
          explanation:
            "The 4 multiplies every term inside the bracket: 4 × 2x = 8x and 4 × 3 = 12, so the answer is 8x + 12. The classic error is multiplying only the first term (8x + 3).",
        },
        {
          question: "Factor completely: 6x + 9",
          options: ["6(x + 3)", "3(2x + 3)", "2(3x + 6)", "3(2x + 6)"],
          correctIndex: 1,
          explanation:
            "Both terms share a factor of 3: 6x + 9 = 3(2x + 3). Verify by expanding: 3 × 2x = 6x and 3 × 3 = 9. ✓ Always run the film forward again to check a factoring.",
        },
        {
          question: "Which of these is an equation, rather than just an expression?",
          options: ["3x + 2", "5ab", "v = d/t", "2(x − 1)"],
          correctIndex: 2,
          explanation:
            "An equation makes a claim that two things are equal — it needs an equals sign. v = d/t claims that speed equals distance over time. The others are expressions: recipes for a quantity, with nothing asserted.",
        },
      ],
    },
    {
      id: "equations-and-formula-fluency",
      title: "Equations & Formula Fluency",
      subtitle:
        "Solve linear equations and rearrange any formula to automaticity — the single most-used skill in physics",
      sections: [
        {
          id: "the-balance-model",
          title: "Solving Equations: The Balance Model",
          content: `
<p>An equation is a <strong>balanced scale</strong>: the left pan and the right pan hold equal weight. The golden rule of solving is simply this — <strong>whatever you do to one side, do to the other</strong> — and the scale stays balanced. Your goal is to peel everything away from the unknown until it stands alone.</p>
<h3>Worked example, narrated</h3>
<p>Solve 3x − 7 = 14.</p>
<ol>
  <li>The x is wrapped in two operations: multiplied by 3, then 7 subtracted. Undo them in reverse order.</li>
  <li>Add 7 to both sides: &nbsp; 3x = 21</li>
  <li>Divide both sides by 3: &nbsp; x = <strong>7</strong></li>
  <li>Check by substituting back: 3 × 7 − 7 = 14. ✓</li>
</ol>
<h3>More reps</h3>
<ul>
  <li>x + 12 = 30 &nbsp;→&nbsp; subtract 12 &nbsp;→&nbsp; x = 18</li>
  <li>x/4 = 9 &nbsp;→&nbsp; multiply by 4 &nbsp;→&nbsp; x = 36</li>
  <li>5x + 3 = 2x + 18 &nbsp;→&nbsp; subtract 2x: 3x + 3 = 18 &nbsp;→&nbsp; subtract 3: 3x = 15 &nbsp;→&nbsp; x = 5</li>
  <li>2(x − 4) = 10 &nbsp;→&nbsp; expand: 2x − 8 = 10 &nbsp;→&nbsp; 2x = 18 &nbsp;→&nbsp; x = 9 &nbsp;<em>(or divide both sides by 2 first: x − 4 = 5 — often faster)</em></li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Undo in Reverse Order</h3>
  <p>Getting dressed: socks then shoes. Getting undressed: shoes then socks. An equation wraps x in layers of operations, and you unwrap from the outside in — undo the +7 or −7 first, then the ×3. This "inverse operations, reverse order" habit is what makes solving mechanical instead of magical.</p>
</div>
<div class="did-you-know">
  <h3>The Check Is Free</h3>
  <p>Substituting your answer back takes five seconds and catches nearly every error. Physicists check habitually — not because they doubt algebra, but because they know fingers slip. Make the check part of the move, not an afterthought.</p>
</div>`,
        },
        {
          id: "rearranging-formulas",
          title: "Rearranging Formulas: Make Any Letter the Subject",
          content: `
<p>Here is the single most-used math skill in all of physics. Formulas arrive solved for one variable — v = d/t gives you speed — but real problems constantly ask for a different one: how much <em>time</em> will the trip take? You must be able to make <strong>any</strong> letter the subject, quickly and without anxiety. It's the balance model again, applied to letters instead of numbers.</p>
<h3>The full workout on v = d/t</h3>
<ul>
  <li><strong>Solve for d:</strong> multiply both sides by t &nbsp;→&nbsp; vt = d, so <strong>d = vt</strong>. (Distance = speed × time.)</li>
  <li><strong>Solve for t:</strong> start from d = vt, divide both sides by v &nbsp;→&nbsp; <strong>t = d/v</strong>. (Time = distance ÷ speed.)</li>
</ul>
<p>Check with numbers: 150 km at 50 km/h → t = 150/50 = 3 h. Sensible. ✓</p>
<h3>The same three moves, everywhere</h3>
<table>
  <thead>
    <tr><th>Formula</th><th>Solve for…</th><th>Result</th></tr>
  </thead>
  <tbody>
    <tr><td>ρ = m/V (density)</td><td>m</td><td>m = ρV</td></tr>
    <tr><td>ρ = m/V</td><td>V</td><td>V = m/ρ</td></tr>
    <tr><td>P = F/A (pressure)</td><td>F</td><td>F = PA</td></tr>
    <tr><td>W = Fd (work)</td><td>F</td><td>F = W/d</td></tr>
    <tr><td>V = IR (Ohm's law)</td><td>R</td><td>R = V/I</td></tr>
    <tr><td>y = mx + c</td><td>x</td><td>x = (y − c)/m</td></tr>
  </tbody>
</table>
<p>That last one has two steps: subtract c from both sides first, <em>then</em> divide by m. Undo addition before undoing multiplication — same reverse-order rule as before.</p>
<div class="key-concept">
  <h3>Key Concept: Rearrange First, Substitute Last</h3>
  <p>Do the algebra with letters, and only plug in numbers at the end. Letters are easier to move than messy decimals, you can reuse the rearranged formula forever, and errors are far easier to spot in vt = d than in a soup of digits.</p>
</div>
<div class="analogy">
  <h3>Analogy: The Formula Triangle, Retired</h3>
  <p>You may remember the d–v–t "magic triangle" from school. It works — but only for three-letter formulas, and it hides the reasoning. The balance method handles v = d/t today and ½mv² = mgh next month. Learn the general tool; automaticity comes from reps, and this chapter's reps are the investment.</p>
</div>`,
        },
        {
          id: "inequalities",
          title: "Inequalities: Ranges Instead of Answers",
          content: `
<p>Sometimes the answer isn't a number but a <strong>range</strong>. "The elevator carries at most 600 kg." "The fuse blows above 13 A." Inequalities express these: x &lt; 5 (less than), x ≤ 5 (at most), x &gt; 5 (greater than), x ≥ 5 (at least).</p>
<p>The good news: you solve inequalities with the same balance moves as equations. Add, subtract, multiply, divide both sides — the inequality survives. With <strong>one famous exception</strong>.</p>
<h3>The flip rule</h3>
<p>Multiplying or dividing both sides by a <strong>negative</strong> number reverses the inequality sign. Why? Watch the number line: 2 &lt; 5 is true, but multiply both by −1 and you get −2 and −5, and −2 &gt; −5. Negation mirrors the number line, so "left of" becomes "right of."</p>
<h3>Worked examples</h3>
<ol>
  <li>x + 3 &lt; 10 &nbsp;→&nbsp; x &lt; 7</li>
  <li>4x ≥ 20 &nbsp;→&nbsp; x ≥ 5 &nbsp;<em>(divided by positive 4: no flip)</em></li>
  <li>−2x &lt; 10 &nbsp;→&nbsp; divide by −2 and flip &nbsp;→&nbsp; <strong>x &gt; −5</strong></li>
  <li>3x + 2 ≤ 17 &nbsp;→&nbsp; 3x ≤ 15 &nbsp;→&nbsp; x ≤ 5</li>
</ol>
<p>Check example 3 with a test number: x = 0 satisfies x &gt; −5, and indeed −2 × 0 = 0 &lt; 10. ✓ Testing one easy value catches flip mistakes instantly.</p>
<div class="key-concept">
  <h3>Key Concept: Safety Margins Are Inequalities</h3>
  <p>An elevator rated for 600 kg with passengers averaging 75 kg: 75n ≤ 600 gives n ≤ 8 people. A 13 A fuse on 230 V mains limits appliance power to P ≤ 230 × 13 ≈ 3000 W. Engineering rarely asks "what exactly" — it asks "what at most," and that question is an inequality.</p>
</div>
<div class="did-you-know">
  <h3>Reading the Symbols</h3>
  <p>The small end of the symbol points at the small quantity — 3 &lt; 8 reads "3 is less than 8." If you ever blank on which is which, that visual saves you.</p>
</div>`,
        },
        {
          id: "systems-of-two-equations",
          title: "Two Equations, Two Unknowns",
          content: `
<p>One equation with two unknowns has infinitely many solutions — x + y = 10 is satisfied by (1, 9), (4, 6), (200, −190)… But add a <strong>second</strong> equation and usually only one pair survives both. Finding it is called solving a <em>system</em>, and there are two standard tools.</p>
<h3>Method 1: Substitution</h3>
<p>Solve one equation for one letter, then substitute into the other.</p>
<p>y = x + 2 and x + y = 10: replace y in the second equation → x + (x + 2) = 10 → 2x + 2 = 10 → x = 4, then y = 6. Check in both: 6 = 4 + 2 ✓ and 4 + 6 = 10 ✓.</p>
<h3>Method 2: Elimination</h3>
<p>Add or subtract whole equations so one letter cancels.</p>
<ol>
  <li>x + y = 10</li>
  <li>x − y = 4</li>
</ol>
<p>Add them: the +y and −y annihilate → 2x = 14 → <strong>x = 7</strong>, and then y = 3. Elimination shines when the coefficients already match; substitution shines when one equation is already solved for a letter. Both always work — pick the one with less mess.</p>
<h3>A word-problem classic</h3>
<p>Two numbers sum to 25; one is 4 times the other. Equations: a + b = 25 and a = 4b. Substitute: 4b + b = 25 → 5b = 25 → b = 5, a = 20.</p>
<div class="analogy">
  <h3>Analogy: Two Clues, One Culprit</h3>
  <p>Each equation is a clue narrowing the suspects. "Sum is 10" leaves a whole line of suspects; "difference is 4" leaves another line. The solution is where the clues intersect — literally: graph both equations and the answer is the crossing point of two lines.</p>
</div>
<div class="did-you-know">
  <h3>Where Physics Uses This</h3>
  <p>Two-equation systems appear whenever two conditions hold at once: two forces balancing in two directions, a mixture problem (total mass <em>and</em> total value), or finding where two moving objects meet — their two distance equations share one time and one place.</p>
</div>`,
        },
        {
          id: "word-problems-to-equations",
          title: "Turning Words into Equations",
          content: `
<p>The hardest part of a word problem is not the algebra — it's the <strong>translation</strong>. Physics is one long word problem ("a train leaves the station at 60 km/h…"), so this craft is worth deliberate practice. The procedure:</p>
<ol>
  <li><strong>Name the unknown.</strong> Write it down: "let k = number of kilometers."</li>
  <li><strong>Translate phrases into symbols</strong> using the dictionary below.</li>
  <li><strong>Write the equation, solve, then check against the story</strong> — does the answer make real-world sense?</li>
</ol>
<table>
  <thead>
    <tr><th>English</th><th>Algebra</th></tr>
  </thead>
  <tbody>
    <tr><td>"5 more than x"</td><td>x + 5</td></tr>
    <tr><td>"5 less than x"</td><td>x − 5 &nbsp;<em>(not 5 − x!)</em></td></tr>
    <tr><td>"triple x" / "3 times x"</td><td>3x</td></tr>
    <tr><td>"half of x"</td><td>x/2</td></tr>
    <tr><td>"is", "gives", "totals"</td><td>=</td></tr>
    <tr><td>"per" (km per hour)</td><td>÷ (a rate: km/h)</td></tr>
  </tbody>
</table>
<h3>Worked examples</h3>
<p><strong>The taxi.</strong> A taxi charges a 3 € flat fee plus 2 € per km. A ride costs 15 €. How far did it go? Let k = kilometers. Equation: 3 + 2k = 15 → 2k = 12 → <strong>k = 6 km</strong>. Check: 3 + 12 = 15 ✓.</p>
<p><strong>The head start.</strong> You walk at 5 km/h; a friend leaves the same point 1 hour later cycling at 15 km/h. When does she catch you? After she rides t hours, you've walked (t + 1) hours. Same distance when caught: 15t = 5(t + 1) → 15t = 5t + 5 → 10t = 5 → <strong>t = ½ hour</strong>, at 7.5 km from the start.</p>
<div class="key-concept">
  <h3>Key Concept: The Equation Is a Sentence</h3>
  <p>Every equation you write should read aloud as a true statement about the story: "flat fee plus per-km charge equals the total." If you can't say the sentence, the equation isn't ready. This habit — words → sentence → symbols — is exactly how physicists set up F = ma problems.</p>
</div>
<div class="did-you-know">
  <h3>The Answer Audits Itself</h3>
  <p>A negative number of kilometers, a speed of 4000 km/h for a cyclist, a time of −2 s: nonsense answers are gifts. They tell you the translation went wrong before anyone else has to.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "Solve for x: 3x − 7 = 14",
          options: ["x = 3", "x = 7", "x = 21", "x = 7/3"],
          correctIndex: 1,
          explanation:
            "Undo in reverse order: add 7 to both sides (3x = 21), then divide by 3 (x = 7). Check: 3 × 7 − 7 = 14 ✓. The wrong answers come from skipping a step or undoing in the wrong order.",
        },
        {
          question:
            "Rearrange v = d/t to make t the subject. Which is correct?",
          options: ["t = v/d", "t = vd", "t = d/v", "t = d − v"],
          correctIndex: 2,
          explanation:
            "Multiply both sides by t to get vt = d, then divide both sides by v: t = d/v. Sanity-check with numbers: 150 km at 50 km/h gives t = 150/50 = 3 hours — time is distance divided by speed.",
        },
        {
          question: "Solve the inequality: −2x < 10",
          options: ["x > −5", "x < −5", "x < 5", "x > 5"],
          correctIndex: 0,
          explanation:
            "Divide both sides by −2, and because you divided by a negative, flip the inequality: x > −5. Test x = 0: −2 × 0 = 0, and 0 < 10 ✓, confirming that 0 (which is > −5) belongs to the solution.",
        },
        {
          question: "Solve the system: x + y = 10 and x − y = 4",
          options: [
            "x = 4, y = 6",
            "x = 5, y = 5",
            "x = 6, y = 4",
            "x = 7, y = 3",
          ],
          correctIndex: 3,
          explanation:
            "Add the two equations so y cancels: 2x = 14, so x = 7, and then y = 10 − 7 = 3. Check the second equation: 7 − 3 = 4 ✓. Elimination is fastest when the coefficients already match like this.",
        },
        {
          question:
            "A taxi charges a 3 € flat fee plus 2 € per kilometer, and a ride costs 15 €. Which equation finds the distance k?",
          options: [
            "2k − 3 = 15",
            "3k + 2 = 15",
            "3 + 2k = 15",
            "2(k + 3) = 15",
          ],
          correctIndex: 2,
          explanation:
            "Read the story as a sentence: flat fee (3) plus per-km charge (2k) equals the total (15), so 3 + 2k = 15, giving k = 6 km. Option B swaps the roles of the flat fee and the rate — the classic translation slip.",
        },
      ],
    },
    {
      id: "graphs-and-linear-models",
      title: "Graphs & Linear Models",
      subtitle:
        "The coordinate plane, y = mx + c, and reading physics directly from slopes and areas",
      sections: [
        {
          id: "the-coordinate-plane",
          title: "A Map for Numbers",
          content: `
<p>The coordinate plane is a machine for turning number pairs into pictures. Two number lines cross at the <strong>origin</strong> (0, 0): the horizontal <strong>x-axis</strong> and the vertical <strong>y-axis</strong>. Any point in the plane gets an address (x, y): how far right, then how far up. The point (3, 2) sits 3 to the right and 2 up; (−2, 4) sits 2 to the <em>left</em> and 4 up; (0, −3) sits on the y-axis, 3 below the origin.</p>
<p><strong>Order matters</strong>: (3, 2) and (2, 3) are different points, just as "3rd Avenue, 2nd Street" and "2nd Avenue, 3rd Street" are different corners. The axes divide the plane into four quadrants, but in physics you'll usually live in the first one (both positive) — time and distance are rarely negative.</p>
<h3>Plotting a relationship</h3>
<p>The real power move: plot an <em>equation</em>. Take y = 2x + 1 and build a table:</p>
<table>
  <thead><tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead>
  <tbody><tr><td><strong>y</strong></td><td>1</td><td>3</td><td>5</td><td>7</td></tr></tbody>
</table>
<p>Plot (0, 1), (1, 3), (2, 5), (3, 7) — they line up perfectly. Every equation draws a picture, and every picture encodes an equation. This two-way translation is the heart of the chapter.</p>
<div class="analogy">
  <h3>Analogy: The Chessboard and the GPS</h3>
  <p>A chess move like "e4" and a GPS reading like "48.85° N, 2.35° E" both use Descartes' idea: two numbers pin down one location. In physics, the axes usually aren't places at all — the x-axis might be <em>time</em> and the y-axis <em>distance</em>, so a point means "at 3 seconds, the cart was 7 meters along." A moving object becomes a curve you can look at.</p>
</div>
<div class="did-you-know">
  <h3>Legend Has It…</h3>
  <p>René Descartes supposedly dreamed up coordinates while watching a fly on his bedroom ceiling, realizing he could describe its position with two numbers: distance from each wall. True or not, the idea fused algebra and geometry — and made all of graphical physics possible.</p>
</div>`,
        },
        {
          id: "slope",
          title: "Slope: The Rate of Climb",
          content: `
<p>Slope measures how steeply a line climbs. The definition is a ratio: <strong>slope = rise ÷ run</strong> — how much the line goes <em>up</em> for each step it goes <em>across</em>. Between two points (x₁, y₁) and (x₂, y₂):</p>
<p style="text-align:center"><strong>m = (y₂ − y₁) ÷ (x₂ − x₁)</strong></p>
<h3>Worked examples</h3>
<ol>
  <li>Through (2, 3) and (6, 11): rise = 11 − 3 = 8, run = 6 − 2 = 4, so m = 8 ÷ 4 = <strong>2</strong>. The line climbs 2 units for every 1 across.</li>
  <li>Through (0, 5) and (10, 5): rise = 0, so m = <strong>0</strong>. A flat line — no climb at all.</li>
  <li>Through (1, 8) and (3, 2): rise = 2 − 8 = −6, run = 2, so m = <strong>−3</strong>. Negative slope means the line falls as you move right.</li>
</ol>
<p>Subtract in the same order top and bottom — if you start from the second point in the numerator, start from it in the denominator too, and the sign comes out right automatically.</p>
<h3>Slope is a rate</h3>
<p>Here's the physics payoff hiding in plain sight. If the x-axis is time in hours and the y-axis is distance in km, then rise ÷ run is <strong>km ÷ hours</strong> — a speed. Slope always inherits the units "y-units per x-unit": euros per km on a taxi-fare graph, liters per minute on a filling-tank graph, meters per second on a motion graph. Steep line, fast change; shallow line, slow change.</p>
<div class="key-concept">
  <h3>Key Concept: A Straight Line Means a Constant Rate</h3>
  <p>The defining feature of a line is that its slope is the same everywhere — every step across gains the same rise. Constant slope = constant rate. The moment a graph curves, the rate is changing — which, on a distance–time graph, is the visual signature of acceleration.</p>
</div>
<div class="did-you-know">
  <h3>Slope on the Road</h3>
  <p>A road sign reading "8% grade" is a slope: 8 m of rise per 100 m of run, m = 0.08. Ski runs, wheelchair-ramp regulations (typically at most 1:12 ≈ 8.3%), and roof pitches are all slopes hiding in everyday clothes.</p>
</div>`,
        },
        {
          id: "y-equals-mx-plus-c",
          title: "y = mx + c: Every Line in One Formula",
          content: `
<p>Every non-vertical straight line can be written as <strong>y = mx + c</strong>, and the two constants each have a job:</p>
<ul>
  <li><strong>m is the slope</strong> — the rate of climb you just mastered.</li>
  <li><strong>c is the y-intercept</strong> — the value of y when x = 0, where the line crosses the y-axis. (Check: set x = 0 and y = m × 0 + c = c.)</li>
</ul>
<p>So y = 2x + 1 is a line of slope 2 crossing the y-axis at 1. And y = −½x + 4 falls gently (half a unit down per unit across) from a starting height of 4.</p>
<h3>From data to equation</h3>
<p>The taxi from last chapter charges 3 € flat plus 2 € per km. Fare F for k kilometers: <strong>F = 2k + 3</strong> — it's y = mx + c with m = 2 (rate per km) and c = 3 (the cost of just sitting down). A phone plan of 10 € plus 0.05 € per minute: C = 0.05t + 10. Any "starting amount plus steady rate" story is a straight line, and you can now write its equation on sight.</p>
<h3>From equation to line, in seconds</h3>
<ol>
  <li>Put a dot at c on the y-axis.</li>
  <li>From there use the slope: for m = 2, go right 1, up 2; repeat.</li>
  <li>Join the dots with a ruler. Done.</li>
</ol>
<p>Going the other way — from a plotted line to its equation — read c where it crosses the axis, then measure rise over run between two clean grid points to get m.</p>
<div class="key-concept">
  <h3>Key Concept: Two Numbers Tell the Whole Story</h3>
  <p>Once you know a relationship is linear, m and c say everything: c is where you start, m is how fast things change. In physics experiments this is the standard trick — plot the data, fit a line, and the slope and intercept <em>are</em> the measurement. The equation v = u + at is literally y = mx + c: start at velocity u, gain a m/s each second; slope = acceleration, intercept = initial velocity.</p>
</div>`,
        },
        {
          id: "proportionality",
          title: "Proportionality: Straight Through the Origin",
          content: `
<p>The simplest relationship in science: <strong>y is directly proportional to x</strong>, written y ∝ x. It means doubling x doubles y, tripling x triples y — the ratio y/x never changes. As an equation, <strong>y = kx</strong>, where k is the <em>constant of proportionality</em>. That's y = mx + c with c = 0, so the graph is a straight line <strong>through the origin</strong>: zero in, zero out.</p>
<h3>Spotting proportionality</h3>
<table>
  <thead>
    <tr><th>Relationship</th><th>Proportional?</th><th>Why</th></tr>
  </thead>
  <tbody>
    <tr><td>Distance at steady speed: d = 60t</td><td>Yes</td><td>Twice the time, twice the distance; d/t is always 60</td></tr>
    <tr><td>Taxi fare: F = 2k + 3</td><td>No</td><td>Flat fee means doubling km does not double the fare</td></tr>
    <tr><td>Mass of water: m = 1000 V</td><td>Yes</td><td>Twice the volume, twice the mass; k is the density</td></tr>
  </tbody>
</table>
<p>Numerical test: (2, 5) and (4, 10) and (6, 15) — each y/x = 2.5, so proportional with k = 2.5. But (1, 4) and (2, 6)? Ratios 4 and 3 — a line perhaps, but not through the origin, so not proportional.</p>
<h3>Why physicists worship this line</h3>
<p>An enormous amount of physics says "this ∝ that": stretch of a spring ∝ force (Hooke's law), current ∝ voltage (Ohm's law), weight ∝ mass, mass ∝ volume for one material. In each case the constant k <em>is the physics</em> — spring stiffness, 1/resistance, gravitational field strength g ≈ 9.8 N/kg, density. Plot data, get a line through the origin, measure its slope: you've measured a property of nature.</p>
<div class="key-concept">
  <h3>Key Concept: The Origin Is the Test</h3>
  <p>Both features are required: straight <em>and</em> through (0, 0). A straight line missing the origin is linear but not proportional — doubling x won't double y. When a lab result "should" be proportional but the fitted line misses the origin, the intercept often reveals a systematic error, like a scale that wasn't zeroed.</p>
</div>`,
        },
        {
          id: "reading-physics-from-graphs",
          title: "Reading Physics from Graphs: Slope = Speed, Area = Distance",
          content: `
<p>This is the signature skill the motion chapters ahead depend on. A graph of an object's motion isn't decoration — it's an instrument you read, and the two dials are <strong>slope</strong> and <strong>area</strong>.</p>
<h3>Distance–time graphs: slope is speed</h3>
<p>Plot distance (m) against time (s). Slope = rise/run = meters per second = <strong>speed</strong>.</p>
<ul>
  <li>Steep straight line: fast, steady motion.</li>
  <li>Shallow line: slow motion. A line rising 30 m over 5 s means 30 ÷ 5 = <strong>6 m/s</strong>.</li>
  <li>Horizontal line: slope 0 — <strong>stopped</strong> (time passes, distance doesn't).</li>
  <li>Curving ever steeper: speeding up — the slope, hence the speed, is growing.</li>
</ul>
<h3>Velocity–time graphs: area is distance</h3>
<p>Now plot velocity (m/s) against time (s). Travel at 4 m/s for 10 s and you cover 4 × 10 = 40 m — but look: on the graph that product is a rectangle, height 4 and width 10. <strong>The area under a velocity–time graph is the distance traveled.</strong> It works for any shape:</p>
<ul>
  <li>Constant 4 m/s for 10 s: rectangle, area 4 × 10 = <strong>40 m</strong>.</li>
  <li>Speeding up steadily from 0 to 10 m/s over 6 s: triangle, area ½ × 6 × 10 = <strong>30 m</strong>.</li>
  <li>Complicated trip: cut the region into rectangles and triangles, add the pieces.</li>
</ul>
<p>And the slope of a velocity–time graph? Rise/run = (m/s)/s = m/s² — that's <strong>acceleration</strong>. Same graph, two readings.</p>
<div class="key-concept">
  <h3>Key Concept: One Picture, Whole Story</h3>
  <p>A single v–t graph tells you the velocity at every instant (read the height), the acceleration (read the slope), and the total distance (read the area). Three physical quantities from one picture — this is why physicists sketch a graph before touching a formula.</p>
</div>
<div class="did-you-know">
  <h3>You're Previewing Calculus</h3>
  <p>"Slope of the graph" and "area under the graph" are the two central ideas of calculus — derivatives and integrals — wearing everyday clothes. Master them here on straight lines and you've already understood, in pictures, what Newton and Leibniz formalized.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "What is the slope of the line through (2, 3) and (6, 11)?",
          options: ["8", "4", "2", "½"],
          correctIndex: 2,
          explanation:
            "Slope = rise ÷ run = (11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2: the line climbs 2 units for every 1 unit across. Answer ½ comes from dividing run by rise — always put the change in y on top.",
        },
        {
          question: "In y = mx + c, what does c tell you?",
          options: [
            "Where the line crosses the y-axis",
            "How steep the line is",
            "Where the line crosses the x-axis",
            "The area under the line",
          ],
          correctIndex: 0,
          explanation:
            "Set x = 0 and y = c: the line passes through (0, c), its crossing point on the y-axis. In a real-world model, c is the starting value — like a taxi's flat fee before any kilometers tick by. Steepness is m's job.",
        },
        {
          question:
            "A distance–time graph is a straight line that rises 30 m over 5 s. What is the object's speed?",
          options: ["150 m/s", "35 m/s", "25 m/s", "6 m/s"],
          correctIndex: 3,
          explanation:
            "Speed is the slope of a distance–time graph: rise ÷ run = 30 m ÷ 5 s = 6 m/s. Multiplying (150) or adding (35) mixes up the operations — slope is always a division, giving y-units per x-unit.",
        },
        {
          question:
            "Which equation graphs as a straight line through the origin — a direct proportionality?",
          options: ["y = 3x + 2", "y = 3x", "y = x²", "y = 3 ÷ x"],
          correctIndex: 1,
          explanation:
            "y = 3x is y = kx: zero in, zero out, and doubling x doubles y. Adding +2 lifts the line off the origin, x² curves into a parabola, and 3 ÷ x is an inverse relationship that never touches either axis.",
        },
        {
          question:
            "A velocity–time graph shows a constant 4 m/s for 10 s. What distance was covered?",
          options: ["14 m", "4 m", "40 m", "400 m"],
          correctIndex: 2,
          explanation:
            "Distance is the area under a velocity–time graph: a rectangle of height 4 m/s and width 10 s, area 4 × 10 = 40 m. This area rule works for any shape — slice curvy regions into rectangles and triangles and add.",
        },
      ],
    },
    {
      id: "quadratics",
      title: "Quadratics",
      subtitle:
        "Factoring, completing the square, the quadratic formula, and the parabola",
      sections: [
        {
          id: "solving-by-factoring",
          title: "Factoring and the Zero-Product Rule",
          content: `
<p>A <strong>quadratic</strong> equation contains an x² and nothing higher: ax² + bx + c = 0. The square changes the game — quadratics typically have <strong>two</strong> solutions, not one. That's not a nuisance; it's physics being honest. Throw a ball up to a height of 15 m and it's at that height <em>twice</em>: once rising, once falling. The algebra knows.</p>
<h3>The zero-product rule</h3>
<p>The key that unlocks everything: <strong>if two things multiply to zero, at least one of them is zero</strong>. Nothing else has this property — a product of 12 could be 3 × 4 or 2 × 6, but a product of 0 forces a factor to be 0. So if we can write a quadratic as (something)(something) = 0, each factor gives a solution.</p>
<h3>Worked example</h3>
<p>Solve x² − 5x + 6 = 0.</p>
<ol>
  <li>Hunt two numbers that <strong>multiply to +6</strong> and <strong>add to −5</strong>: they're −2 and −3.</li>
  <li>Factor: (x − 2)(x − 3) = 0.</li>
  <li>Zero-product rule: x − 2 = 0 or x − 3 = 0, so <strong>x = 2 or x = 3</strong>.</li>
  <li>Check x = 2: 4 − 10 + 6 = 0 ✓.</li>
</ol>
<h3>More reps</h3>
<ul>
  <li>x² + 7x + 10 = 0 → numbers: +2, +5 → (x + 2)(x + 5) = 0 → x = −2 or x = −5</li>
  <li>x² − x − 12 = 0 → numbers: −4, +3 → (x − 4)(x + 3) = 0 → x = 4 or x = −3</li>
  <li>x² − 9 = 0 → (x − 3)(x + 3) = 0 → x = ±3 &nbsp;<em>(difference of squares)</em></li>
  <li>x² + 4x = 0 → x(x + 4) = 0 → x = 0 or x = −4 &nbsp;<em>(don't divide by x — you'd throw away the x = 0 solution!)</em></li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Get Zero on One Side First</h3>
  <p>The zero-product rule only works against zero. To solve x² = 5x − 6, first move everything left: x² − 5x + 6 = 0, <em>then</em> factor. Factoring against "= 12" tells you nothing.</p>
</div>`,
        },
        {
          id: "completing-the-square",
          title: "Completing the Square",
          content: `
<p>Plenty of quadratics refuse to factor nicely — try finding whole numbers that multiply to 3 and add to 6 for x² + 6x + 3 = 0. <strong>Completing the square</strong> handles every case, by rebuilding the quadratic around a perfect square.</p>
<h3>The core observation</h3>
<p>(x + 3)² = x² + 6x + 9. So x² + 6x is <em>almost</em> a perfect square — it's just missing the 9. The recipe: take half the x-coefficient (half of 6 is 3), square it (9), and that's the missing piece. In general, x² + bx needs (b/2)² to complete the square.</p>
<h3>Worked example</h3>
<p>Solve x² + 6x + 3 = 0.</p>
<ol>
  <li>Move the lone number over: x² + 6x = −3</li>
  <li>Add (6/2)² = 9 to <strong>both</strong> sides: x² + 6x + 9 = 6</li>
  <li>The left side is now a perfect square: (x + 3)² = 6</li>
  <li>Square root both sides — remembering both signs: x + 3 = ±√6</li>
  <li>So <strong>x = −3 + √6 ≈ −0.55</strong> or <strong>x = −3 − √6 ≈ −5.45</strong></li>
</ol>
<p>One more: x² − 4x − 1 = 0 → x² − 4x = 1 → add (−4/2)² = 4 → (x − 2)² = 5 → x = 2 ± √5.</p>
<div class="key-concept">
  <h3>Key Concept: Why ± Appears</h3>
  <p>Squaring destroys sign information: both 2² and (−2)² equal 4. So when you undo a square, both candidates must come back — (x + 3)² = 6 means x + 3 could be √6 <em>or</em> −√6. That ± is exactly where a quadratic's two solutions come from.</p>
</div>
<div class="did-you-know">
  <h3>The Vertex for Free</h3>
  <p>Completing the square rewrites y = x² + 6x + 3 as y = (x + 3)² − 6, and that form is a treasure map: since (x + 3)² is never negative, y bottoms out when x = −3, at y = −6. Maximum heights, minimum costs, peak ranges — completing the square finds the extremes of any quadratic, which is why physics keeps it in the toolbox. It's also, step for step, how the quadratic formula is derived.</p>
</div>`,
        },
        {
          id: "the-quadratic-formula",
          title: "The Quadratic Formula",
          content: `
<p>Run completing-the-square on the fully general quadratic ax² + bx + c = 0 and out comes a formula that solves <strong>every quadratic that will ever exist</strong>:</p>
<p style="text-align:center"><strong>x = (−b ± √(b² − 4ac)) ÷ (2a)</strong></p>
<p>Identify a, b, c (with their signs!), substitute, simplify. No cleverness required — this is the power tool you reach for when factoring doesn't leap out.</p>
<h3>Worked example</h3>
<p>Solve x² + 2x − 8 = 0. Here a = 1, b = 2, c = −8.</p>
<ol>
  <li>Discriminant first: b² − 4ac = 2² − 4 × 1 × (−8) = 4 + 32 = 36</li>
  <li>√36 = 6</li>
  <li>x = (−2 ± 6) ÷ 2</li>
  <li>Two answers: x = 4/2 = <strong>2</strong> and x = −8/2 = <strong>−4</strong></li>
  <li>Check x = 2: 4 + 4 − 8 = 0 ✓</li>
</ol>
<p>One with a ≠ 1: solve 2x² − 5x + 2 = 0. Discriminant: 25 − 16 = 9, √9 = 3, x = (5 ± 3)/4 → x = 2 or x = ½.</p>
<h3>The discriminant: a solution forecast</h3>
<p>The quantity under the root, <strong>b² − 4ac</strong>, predicts what you'll get before you finish:</p>
<table>
  <thead><tr><th>b² − 4ac</th><th>Solutions</th><th>Picture</th></tr></thead>
  <tbody>
    <tr><td>Positive</td><td>Two real solutions</td><td>Parabola crosses the x-axis twice</td></tr>
    <tr><td>Zero</td><td>Exactly one solution</td><td>Parabola just touches the axis</td></tr>
    <tr><td>Negative</td><td>No real solutions</td><td>Parabola never reaches the axis</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h3>Key Concept: "No Real Solutions" Is an Answer</h3>
  <p>Ask when a ball thrown at 10 m/s reaches 20 m of height and the discriminant goes negative: the algebra is telling you <em>it never gets that high</em>. A negative discriminant in a physics problem isn't failure — it's the math reporting that the event doesn't happen.</p>
</div>
<div class="did-you-know">
  <h3>An Old Friend</h3>
  <p>Versions of this formula were known to Babylonian scribes solving land-area problems 4000 years ago — a thousand years before algebra had symbols. You are memorizing one of humanity's oldest power tools.</p>
</div>`,
        },
        {
          id: "parabolas",
          title: "The Parabola: Nature's Favorite Curve",
          content: `
<p>Graph any quadratic y = ax² + bx + c and you get a <strong>parabola</strong> — a symmetric U-shaped curve. Everything about its shape is readable from the equation:</p>
<ul>
  <li><strong>a positive:</strong> opens upward (a smile); <strong>a negative:</strong> opens downward (a frown).</li>
  <li><strong>Bigger |a|:</strong> narrower curve; smaller |a|: wider.</li>
  <li><strong>The vertex</strong> is the turning point — the minimum (smile) or maximum (frown).</li>
  <li><strong>The axis of symmetry</strong> is the vertical mirror line x = −b/(2a) through the vertex.</li>
</ul>
<p>Vertex form makes the geometry explicit: y = (x − 3)² + 2 is a parabola whose vertex sits at <strong>(3, 2)</strong> — the square term is zero at x = 3 and positive everywhere else, so that's the low point. This is completing the square, now read as geometry.</p>
<h3>The physics: why thrown things trace parabolas</h3>
<p>Launch a ball and its height obeys h = v₀t − ½gt² — a quadratic in time, with the −½gt² (g ≈ 9.8 m/s²) supplying the frown. Concretely, h = 20t − 5t²:</p>
<ul>
  <li><strong>When does it land?</strong> Set h = 0: 5t(4 − t) = 0 → t = 0 (launch) or <strong>t = 4 s</strong> (landing). Factoring!</li>
  <li><strong>How high does it get?</strong> By symmetry the peak is midway, at t = 2 s: h = 40 − 20 = <strong>20 m</strong>.</li>
  <li><strong>When is it at 15 m?</strong> 20t − 5t² = 15 → t² − 4t + 3 = 0 → (t − 1)(t − 3) = 0 → at t = 1 s going up and t = 3 s coming down. Two solutions, both real.</li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Symmetry Is Free Information</h3>
  <p>A parabola's two x-crossings sit symmetrically around the vertex, so the peak is always at their midpoint. Up-time equals down-time; launch speed equals landing speed. Before computing anything, symmetry hands you half the answers.</p>
</div>
<div class="did-you-know">
  <h3>Parabolas That Focus</h3>
  <p>A parabolic mirror reflects all incoming parallel rays to a single focus — which is why satellite dishes, telescope mirrors, and car headlights are parabolic. Same curve, entirely different physics: geometry this useful gets reused everywhere.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "What are the solutions of x² − 5x + 6 = 0?",
          options: [
            "x = −2 and x = −3",
            "x = 2 and x = 3",
            "x = 1 and x = 6",
            "x = −1 and x = −6",
          ],
          correctIndex: 1,
          explanation:
            "Find two numbers multiplying to +6 and adding to −5: they are −2 and −3, so (x − 2)(x − 3) = 0, giving x = 2 or x = 3. Note the sign flip: factors (x − 2)(x − 3) give positive solutions. Check: 4 − 10 + 6 = 0 ✓.",
        },
        {
          question: "If (x − 4)(x + 2) = 0, what does the zero-product rule tell you?",
          options: [
            "x must equal −4 or 2",
            "x must equal 8",
            "x must equal 4 and −2 at the same time",
            "x = 4 or x = −2",
          ],
          correctIndex: 3,
          explanation:
            "A product is zero only when a factor is zero: either x − 4 = 0 (so x = 4) or x + 2 = 0 (so x = −2). Each factor yields one solution, and \"or\" is the right word — the equation is satisfied by either value separately.",
        },
        {
          question:
            "For a quadratic ax² + bx + c = 0, the discriminant b² − 4ac comes out negative. What does that mean?",
          options: [
            "The parabola never crosses the x-axis — no real solutions",
            "There are two real solutions",
            "The parabola opens downward",
            "The equation was copied wrong — discriminants can't be negative",
          ],
          correctIndex: 0,
          explanation:
            "A negative discriminant means the square root has no real value: the parabola never reaches the x-axis, so there are no real solutions. In physics this is a meaningful answer — ask when a ball reaches a height it can't attain, and this is how the math says \"never.\"",
        },
        {
          question: "What is the vertex of the parabola y = (x − 3)² + 2?",
          options: ["(−3, 2)", "(3, −2)", "(3, 2)", "(2, 3)"],
          correctIndex: 2,
          explanation:
            "The squared term (x − 3)² is zero at x = 3 and positive everywhere else, so y bottoms out at y = 2 when x = 3: vertex (3, 2). Watch the sign: (x − 3)² puts the vertex at +3, not −3 — that flip trips everyone once.",
        },
        {
          question:
            "A ball's height follows h = 20t − 5t² (meters, seconds). When does it return to the ground?",
          options: ["t = 2 s", "t = 4 s", "t = 5 s", "t = 20 s"],
          correctIndex: 1,
          explanation:
            "Set h = 0 and factor: 5t(4 − t) = 0, so t = 0 (the launch) or t = 4 s (the landing). By symmetry the peak is midway at t = 2 s — that's when it's highest, not when it lands.",
        },
      ],
    },
    {
      id: "geometry-essentials",
      title: "Geometry Essentials",
      subtitle:
        "Triangles, Pythagoras, circles, areas and volumes — spatial fluency without proof drills",
      sections: [
        {
          id: "angles-and-triangles",
          title: "Angle Facts You Actually Use",
          content: `
<p>Physics lives in space, and space is described with angles. You don't need two years of proof drills — you need a small kit of facts, held firmly enough to use without thinking.</p>
<h3>The kit</h3>
<ul>
  <li><strong>Full turn:</strong> 360°. <strong>Straight line:</strong> 180°. <strong>Right angle:</strong> 90°.</li>
  <li><strong>Angles on a straight line add to 180°:</strong> if one is 110°, its neighbor is 70°.</li>
  <li><strong>Vertically opposite angles are equal:</strong> two crossing lines make an X — opposite angles match.</li>
  <li><strong>Parallel lines cut by a slanted line:</strong> the slanted line makes the same angle with both parallels (those matching "F-pattern" angles, and the equal "Z-pattern" angles between the lines). This is why a light ray keeps its angle when crossing between parallel surfaces.</li>
  <li><strong>The angles of any triangle add to 180°.</strong> The workhorse of the whole chapter.</li>
</ul>
<h3>Worked examples</h3>
<ol>
  <li>A triangle has angles 90° and 35°. Third angle: 180 − 90 − 35 = <strong>55°</strong>.</li>
  <li>An isosceles triangle (two equal sides, hence two equal base angles) has a top angle of 40°. Each base angle: (180 − 40) ÷ 2 = <strong>70°</strong>.</li>
  <li>A ramp meets the ground at 15°. The angle between ramp and a vertical wall at its top: the triangle has 90° and 15°, so 180 − 90 − 15 = <strong>75°</strong>.</li>
</ol>
<h3>Naming triangles</h3>
<p><strong>Equilateral:</strong> all sides equal, all angles 60°. <strong>Isosceles:</strong> two sides equal, base angles equal. <strong>Scalene:</strong> all different. <strong>Right triangle:</strong> one 90° angle — the star of physics, because perpendicular directions (horizontal/vertical, east/north) appear everywhere, and the side opposite the right angle, the <strong>hypotenuse</strong>, gets its own theorem next section.</p>
<div class="key-concept">
  <h3>Key Concept: Two Angles Are Really Three</h3>
  <p>Because the sum is locked at 180°, knowing two angles of a triangle means you know all three — no measuring required. Physics uses this constantly: find one angle in a force diagram or a light-ray sketch and the rest cascade out for free.</p>
</div>
<div class="did-you-know">
  <h3>Why 360?</h3>
  <p>The 360° circle is a Babylonian inheritance — they counted in base 60, and 360 divides beautifully (by 2, 3, 4, 5, 6, 8, 9, 10, 12…). Later you'll meet the radian, the "natural" angle unit physics prefers for waves and rotation.</p>
</div>`,
        },
        {
          id: "similar-triangles",
          title: "Congruence & Similarity: Same Shape, Different Size",
          content: `
<p>Two triangles are <strong>congruent</strong> if they're identical — same angles <em>and</em> same sides, one traceable onto the other. They're <strong>similar</strong> if they have the same angles but different sizes: one is a photo-enlargement of the other. Similarity is the one you'll use constantly, because it comes with a superpower: <strong>in similar triangles, corresponding sides are all scaled by the same factor</strong>.</p>
<h3>The shadow trick</h3>
<p>Classic problem, beloved since ancient Greece: find a tree's height without climbing it. A 1.8 m person casts a 1.2 m shadow; at the same moment the tree casts an 8 m shadow. The sun's rays arrive at the same angle for both, and both stand at 90° to the ground — same angles, so the two triangles (object, shadow, sun-ray) are similar.</p>
<ol>
  <li>Scale factor from person's shadow to tree's shadow: 8 ÷ 1.2 = 6.67</li>
  <li>Tree height = 1.8 × 6.67 = <strong>12 m</strong></li>
  <li>Equivalent ratio form: height ÷ shadow is equal for both: 1.8/1.2 = h/8 → h = 8 × 1.5 = 12 m ✓</li>
</ol>
<p>Legend says Thales measured the Great Pyramid exactly this way around 600 BCE — waiting for the moment his own shadow equaled his height, so the pyramid's shadow equaled <em>its</em> height.</p>
<h3>More scaling reps</h3>
<ul>
  <li>A 4 cm × 6 cm photo enlarged so the short side is 10 cm: scale factor 2.5, long side 15 cm.</li>
  <li>On a 1 : 50 000 map, 3 cm of trail = 3 × 50 000 cm = <strong>1.5 km</strong> of real trail.</li>
  <li>Triangles with sides 3, 4, 5 and 6, 8, 10: each side doubled — similar, same angles.</li>
</ul>
<div class="key-concept">
  <h3>Key Concept: Equal Angles → Proportional Sides</h3>
  <p>That one implication does all the work. Spot two triangles sharing angles, and you may immediately write side ratios as equations. This is the geometry behind map scales, camera pinhole images, and — crucially for the optics chapters ahead — how lenses form magnified or shrunken images: image size ÷ object size is a ratio of similar triangles.</p>
</div>
<div class="did-you-know">
  <h3>Similarity Runs Physics Labs</h3>
  <p>Wind-tunnel models work because a 1:20 model airplane in suitably chosen airflow is "similar" to the real thing — the shape of the flow scales like the shape of the craft. Scaling arguments are a professional physicist's daily bread.</p>
</div>`,
        },
        {
          id: "pythagoras",
          title: "Pythagoras: The Most Useful Theorem in Physics",
          content: `
<p>In any right triangle with legs a and b and hypotenuse c (the side facing the right angle):</p>
<p style="text-align:center"><strong>a² + b² = c²</strong></p>
<p>That's it — and it may be the single most-used piece of geometry in all of physics.</p>
<h3>Worked examples</h3>
<ol>
  <li><strong>Find the hypotenuse.</strong> Legs 3 and 4: c² = 9 + 16 = 25 → c = √25 = <strong>5</strong>. (The famous 3–4–5 triangle; builders still use it to check corners are square.)</li>
  <li><strong>Walk east, then north.</strong> 6 km east then 8 km north: displacement² = 36 + 64 = 100 → <strong>10 km</strong> from the start, even though your legs logged 14 km.</li>
  <li><strong>Find a leg.</strong> Ladder 5 m long, foot 1.4 m from the wall: height² = 25 − 1.96 = 23.04 → height = √23.04 = <strong>4.8 m</strong>. Rearranged form: a² = c² − b² — the hypotenuse is always the biggest, so subtract to find a leg.</li>
  <li><strong>Diagonal of a screen.</strong> A 16 × 9 panel scaled to 111 cm × 62 cm: diagonal ≈ √(111² + 62²) ≈ √16 165 ≈ <strong>127 cm</strong> — a "50-inch" TV.</li>
</ol>
<h3>Why physics can't live without it</h3>
<p>Physics constantly splits quantities into <strong>perpendicular components</strong> — horizontal and vertical, east and north — and then needs the combined size back. A plane flying 200 km/h east in a 50 km/h north crosswind moves at √(200² + 50²) ≈ 206 km/h. Two perpendicular forces of 30 N and 40 N combine into a 50 N resultant. Every "combine perpendicular pieces" problem <em>is</em> Pythagoras.</p>
<div class="key-concept">
  <h3>Key Concept: Hypotenuse = Combined Effect</h3>
  <p>Whenever two contributions act at right angles — displacements, velocities, forces, even AC voltages later on — the total is the hypotenuse: total = √(a² + b²). File this as one move; you will use it hundreds of times in Phase 2 and beyond.</p>
</div>
<div class="did-you-know">
  <h3>Older Than Pythagoras</h3>
  <p>Babylonian clay tablet Plimpton 322, a thousand years before Pythagoras, lists whole-number triples like 3–4–5 and 5–12–13. He (or his school) likely earned naming rights with a general proof — of which over 350 now exist, including one by U.S. President James Garfield.</p>
</div>`,
        },
        {
          id: "circles",
          title: "Circles: π and the Two Formulas",
          content: `
<p>A circle is all points at one fixed distance — the <strong>radius r</strong> — from a center. The <strong>diameter</strong> d = 2r spans the circle through the center. And hiding inside every circle, from coins to planetary orbits, is the same number: divide any circle's circumference by its diameter and you get <strong>π ≈ 3.14159…</strong>, the most famous constant in mathematics.</p>
<h3>The two formulas</h3>
<ul>
  <li><strong>Circumference</strong> (distance around): C = πd = 2πr</li>
  <li><strong>Area</strong> (space inside): A = πr²</li>
</ul>
<p>Keep them straight by units: circumference is a length (one factor of r); area is a length squared (r²).</p>
<h3>Worked examples</h3>
<ol>
  <li>Bike wheel, radius 34 cm. One revolution rolls the bike forward one circumference: C = 2π × 34 ≈ <strong>214 cm ≈ 2.1 m</strong>. Over 1 km, that's 1000 ÷ 2.14 ≈ 468 wheel turns — exactly how a bike computer measures distance.</li>
  <li>Circle of radius 5 cm: C = 2π × 5 ≈ 31.4 cm; A = π × 25 ≈ <strong>78.5 cm²</strong>.</li>
  <li>Pizza logic: a 30 cm pizza vs two 20 cm pizzas. Areas: π × 15² ≈ 707 cm² vs 2 × π × 10² ≈ 628 cm². The single large pizza wins — area grows with the <em>square</em> of the radius.</li>
</ol>
<p>That last example is a scaling law worth internalizing: double a circle's radius and its circumference doubles, but its <strong>area quadruples</strong>.</p>
<div class="key-concept">
  <h3>Key Concept: r² Scaling Shows Up Everywhere</h3>
  <p>A pipe twice as wide carries about four times the flow (cross-section area is πr²). A dish antenna twice as wide gathers four times the signal. And light spreading from a bulb dilutes over spheres of area 4πr² — the origin of the inverse-square laws you'll meet for light and gravity.</p>
</div>
<div class="did-you-know">
  <h3>π Is Everywhere, Suspiciously</h3>
  <p>π escapes circles entirely: it appears in the swing time of a pendulum, T = 2π√(L/g), in the statistics bell curve, and in Euler's identity e<sup>iπ</sup> + 1 = 0. When circles and rotations underlie a phenomenon — as with waves and oscillations — π tags along. For calculations, π ≈ 3.14 or the ratio 22/7 is nearly always accurate enough.</p>
</div>`,
        },
        {
          id: "areas-and-volumes",
          title: "Areas & Volumes: The Formulas Physics Uses Daily",
          content: `
<p>Area measures surface (m², cm²); volume measures space (m³, cm³, liters). Physics needs both constantly — pressure divides by an area, density divides by a volume — so this toolkit must be at your fingertips.</p>
<h3>The reference card</h3>
<table>
  <thead><tr><th>Shape</th><th>Area</th></tr></thead>
  <tbody>
    <tr><td>Rectangle</td><td>length × width</td></tr>
    <tr><td>Triangle</td><td>½ × base × height</td></tr>
    <tr><td>Parallelogram</td><td>base × height</td></tr>
    <tr><td>Circle</td><td>πr²</td></tr>
  </tbody>
</table>
<table>
  <thead><tr><th>Solid</th><th>Volume</th></tr></thead>
  <tbody>
    <tr><td>Box</td><td>length × width × height</td></tr>
    <tr><td>Cylinder</td><td>πr² × height</td></tr>
    <tr><td>Sphere</td><td>(4/3)πr³</td></tr>
    <tr><td>Cone or pyramid</td><td>⅓ × base area × height</td></tr>
  </tbody>
</table>
<p>Notice the pattern: box and cylinder are both "base area × height" — a stack of identical slices. The triangle's ½ (half a rectangle) and the cone's ⅓ (a third of its cylinder) are the only fractions to memorize.</p>
<h3>Worked examples</h3>
<ol>
  <li>Box 2 cm × 3 cm × 4 cm: V = <strong>24 cm³</strong>. If it has mass 48 g, its density is ρ = m/V = 48 ÷ 24 = <strong>2 g/cm³</strong> — it will sink in water (density 1 g/cm³). Volume feeds straight into the physics.</li>
  <li>Cylindrical glass, r = 4 cm, height 12 cm: V = π × 16 × 12 ≈ <strong>603 cm³ ≈ 0.6 liters</strong> (1 liter = 1000 cm³; 1 cm³ = 1 mL).</li>
  <li>Triangular sail, base 3 m, height 5 m: A = ½ × 3 × 5 = <strong>7.5 m²</strong> — the area the wind pushes on.</li>
</ol>
<div class="key-concept">
  <h3>Key Concept: Units Are the Answer Key</h3>
  <p>Area formulas multiply two lengths (m²); volume formulas multiply three (m³). If your "volume" came out in cm², a length went missing. Checking units catches errors instantly — and in physics, unit-checking graduates into a full-blown professional technique.</p>
</div>
<div class="did-you-know">
  <h3>Why an Elephant Can't Jump</h3>
  <p>Scale an animal up 10×: its volume — and weight — grows 1000× (length cubed), but its bone cross-section grows only 100× (length squared). Strength-to-weight collapses as size grows. This square–cube law is why ants hoist multiples of their body weight, why cells stay microscopic, and why giant movie monsters are physically impossible.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "A triangle has angles of 90° and 35°. What is the third angle?",
          options: ["55°", "65°", "45°", "125°"],
          correctIndex: 0,
          explanation:
            "The angles of any triangle sum to 180°: third angle = 180 − 90 − 35 = 55°. Because the sum is fixed, two known angles always determine the third — a fact you'll use constantly in force diagrams and ray sketches.",
        },
        {
          question:
            "A 1.8 m person casts a 1.2 m shadow while a tree casts an 8 m shadow. How tall is the tree?",
          options: ["8 m", "9.6 m", "12 m", "14.4 m"],
          correctIndex: 2,
          explanation:
            "The sun's rays hit both at the same angle, so the triangles are similar and height ÷ shadow is the same ratio for both: 1.8/1.2 = 1.5, so the tree is 8 × 1.5 = 12 m. Equal angles → proportional sides is the whole trick.",
        },
        {
          question:
            "You walk 6 km east, then 8 km north. How far are you from your starting point?",
          options: ["14 km", "10 km", "48 km", "100 km"],
          correctIndex: 1,
          explanation:
            "The two legs are perpendicular, so Pythagoras gives the direct distance: √(6² + 8²) = √100 = 10 km. You walked 14 km of path, but displacement — straight-line distance — is the hypotenuse. Don't forget the final square root (100 is c², not c).",
        },
        {
          question: "What is the circumference of a circle with radius 5 cm? (π ≈ 3.14)",
          options: ["15.7 cm", "78.5 cm", "25 cm", "31.4 cm"],
          correctIndex: 3,
          explanation:
            "Circumference C = 2πr = 2 × 3.14 × 5 ≈ 31.4 cm. The value 78.5 is the area (πr² = π × 25) and 15.7 forgets the factor of 2 — remember circumference uses the full diameter: C = πd.",
        },
        {
          question:
            "A box measures 2 cm × 3 cm × 4 cm and has a mass of 48 g. What is its density?",
          options: ["2 g/cm³", "24 g/cm³", "0.5 g/cm³", "1152 g/cm³"],
          correctIndex: 0,
          explanation:
            "Volume first: 2 × 3 × 4 = 24 cm³. Then density ρ = m/V = 48 ÷ 24 = 2 g/cm³ — denser than water (1 g/cm³), so it sinks. This geometry-to-physics pipeline (dimensions → volume → density) is exactly how Subject 5 will use these formulas.",
        },
      ],
    },
    {
      id: "first-trigonometry",
      title: "First Trigonometry",
      subtitle:
        "SOH-CAH-TOA and solving right triangles — the first step toward vectors and projectiles",
      sections: [
        {
          id: "soh-cah-toa",
          title: "Three Ratios That Unlock Triangles",
          content: `
<p>Here's the observation trigonometry is built on: in a right triangle, once you fix one of the other angles, the <strong>shape</strong> is fixed — every such triangle is similar to every other. So the <em>ratios</em> between the sides depend only on the angle. Those ratios get names: sine, cosine, and tangent.</p>
<h3>Labeling the sides</h3>
<p>Relative to your chosen angle θ (never the right angle):</p>
<ul>
  <li><strong>Hypotenuse</strong> — the longest side, facing the 90° angle.</li>
  <li><strong>Opposite</strong> — the side facing θ, across the triangle from it.</li>
  <li><strong>Adjacent</strong> — the side touching θ (that isn't the hypotenuse).</li>
</ul>
<p>Relabeling happens if you switch angles: one angle's opposite is the other's adjacent. Always label <em>from the angle you're using</em>.</p>
<h3>The three ratios — SOH-CAH-TOA</h3>
<table>
  <thead><tr><th>Ratio</th><th>Definition</th><th>Mnemonic</th></tr></thead>
  <tbody>
    <tr><td>sin θ</td><td>Opposite ÷ Hypotenuse</td><td><strong>S</strong>OH</td></tr>
    <tr><td>cos θ</td><td>Adjacent ÷ Hypotenuse</td><td><strong>C</strong>AH</td></tr>
    <tr><td>tan θ</td><td>Opposite ÷ Adjacent</td><td><strong>T</strong>OA</td></tr>
  </tbody>
</table>
<p>A few values worth recognizing: sin 30° = 0.5 (at 30°, the opposite side is exactly half the hypotenuse), cos 60° = 0.5, tan 45° = 1 (a 45° triangle has equal legs), sin 0° = 0, and sin 90° = 1. Your calculator holds every other value — make sure it's in <strong>degree mode</strong>.</p>
<div class="analogy">
  <h3>Analogy: A Ramp's Personality</h3>
  <p>Think of a ramp at angle θ. Walk 1 m along the ramp surface: you gain sin θ meters of height and cover cos θ meters of ground; tan θ is the steepness — rise over run, the slope from the graphs chapter wearing new clothes. Steeper ramp: sin grows, cos shrinks, tan soars.</p>
</div>
<div class="key-concept">
  <h3>Key Concept: Why Physics Cares</h3>
  <p>Physics constantly splits a slanted quantity into horizontal and vertical parts. A ball kicked at 20 m/s at 30° starts with horizontal speed 20 cos 30° ≈ 17.3 m/s and vertical speed 20 sin 30° = 10 m/s. That move — multiply by cos for adjacent, sin for opposite — is the doorway to vectors and projectiles.</p>
</div>`,
        },
        {
          id: "solving-right-triangles",
          title: "Solving Right Triangles",
          content: `
<p>"Solving" a triangle means finding all its sides and angles from partial information. With SOH-CAH-TOA plus Pythagoras, a right triangle surrenders completely if you know just <strong>two facts</strong> (beyond the right angle). The routine:</p>
<ol>
  <li>Sketch and label hypotenuse, opposite, adjacent from the angle you know (or want).</li>
  <li>Pick the ratio linking your two knowns to the unknown.</li>
  <li>Rearrange (formula fluency!) and compute.</li>
</ol>
<h3>Finding a side</h3>
<p><strong>Example 1.</strong> Hypotenuse 10, angle 30°; find the side opposite the angle. Ratio linking opposite and hypotenuse: sine. sin 30° = x/10 → x = 10 × sin 30° = 10 × 0.5 = <strong>5</strong>.</p>
<p><strong>Example 2.</strong> Same triangle, find the adjacent side: cos 30° = y/10 → y = 10 × 0.866 ≈ <strong>8.66</strong>. Check with Pythagoras: 5² + 8.66² = 25 + 75 ≈ 100 = 10² ✓.</p>
<p><strong>Example 3 — unknown in the bottom.</strong> A wire anchored at 55° must reach the top of a 12 m mast: sin 55° = 12/L → L = 12 ÷ sin 55° = 12 ÷ 0.819 ≈ <strong>14.6 m</strong>. When the unknown is downstairs, you <em>divide</em> — rearrange first, then compute.</p>
<h3>Finding an angle: the inverse functions</h3>
<p>Know the sides but not the angle? Run the ratio backwards with sin⁻¹, cos⁻¹, tan⁻¹ (calculator: SHIFT/2nd + sin etc.). These answer the question "which angle has this ratio?"</p>
<p><strong>Example 4.</strong> Opposite 3, adjacent 4: tan θ = 3/4 = 0.75 → θ = tan⁻¹(0.75) ≈ <strong>36.9°</strong>. (The 3–4–5 triangle's angles: 36.9°, 53.1°, 90°.)</p>
<p><strong>Example 5.</strong> A 6 m ladder reaching 5.5 m up a wall: sin θ = 5.5/6 = 0.917 → θ = sin⁻¹(0.917) ≈ <strong>66.5°</strong> — close to the 75° maximum safe-lean angle used in some safety codes.</p>
<div class="key-concept">
  <h3>Key Concept: Choose the Ratio by What You Have</h3>
  <p>Don't memorize problem types; just ask which two sides are in play. Opposite &amp; hypotenuse → sine. Adjacent &amp; hypotenuse → cosine. Opposite &amp; adjacent → tangent. Two knowns, one unknown, one equation — the rest is the rearranging you drilled in Chapter 2.</p>
</div>`,
        },
        {
          id: "angles-of-elevation",
          title: "Angles of Elevation and Depression",
          content: `
<p>Point a finger horizontally, then tilt it up to sight the top of a building: the tilt is the <strong>angle of elevation</strong>. Sight downward from a cliff to a boat and the tilt below horizontal is the <strong>angle of depression</strong>. These angles turn a clinometer (or a phone app and a tape measure) into a rangefinder for heights you could never climb.</p>
<h3>Worked examples</h3>
<p><strong>The building.</strong> Standing 50 m from a building's base, you sight the top at 45° elevation. Height above eye level: tan 45° = h/50 → h = 50 × 1 = <strong>50 m</strong>. (At 45°, height equals distance — a handy field fact.) Add your eye height, ≈ 1.6 m, for the full 51.6 m.</p>
<p><strong>The steeper sight.</strong> From 30 m away, a tower's top sits at 60° elevation: h = 30 × tan 60° = 30 × 1.732 ≈ <strong>52 m</strong>.</p>
<p><strong>The kite.</strong> 80 m of taut string at 50° elevation. Height uses sine (opposite over the string, which is the hypotenuse): h = 80 × sin 50° ≈ 80 × 0.766 ≈ <strong>61 m</strong>. Horizontal distance downrange: 80 × cos 50° ≈ 51 m.</p>
<p><strong>The cliff, in reverse.</strong> From a 40 m cliff top, a boat appears at 25° depression. The depression angle from your horizontal equals the elevation angle from the boat's (Z-pattern angles between parallels). tan 25° = 40/d → d = 40 ÷ 0.466 ≈ <strong>86 m</strong> offshore.</p>
<div class="key-concept">
  <h3>Key Concept: Draw the Triangle First</h3>
  <p>Every elevation problem is the same right triangle: horizontal ground, vertical height, line of sight as hypotenuse. Sketch it, mark the angle at your eye, label the sides — the correct ratio then picks itself. The sketch-first habit is precisely how you'll set up force and projectile diagrams later.</p>
</div>
<div class="did-you-know">
  <h3>Measuring the Unreachable</h3>
  <p>With angles alone, ancient and modern surveyors measured the absurdly distant: Eratosthenes got Earth's circumference from shadow angles in two cities; 19th-century surveyors of the Great Trigonometrical Survey computed Mount Everest's height — 8850 m — from theodolite angles sighted over 150 km away, without setting foot on it.</p>
</div>`,
        },
        {
          id: "sine-cosine-rules",
          title: "Beyond Right Angles: The Sine and Cosine Rules",
          content: `
<p>SOH-CAH-TOA demands a right angle. But triangles in the wild — two roads meeting at 50°, two forces at 120° — often have none. Two upgraded tools handle <em>any</em> triangle. Label the angles A, B, C and let a, b, c be the sides <strong>opposite</strong> them.</p>
<h3>The sine rule: pairs of opposites</h3>
<p style="text-align:center"><strong>a ÷ sin A = b ÷ sin B = c ÷ sin C</strong></p>
<p>Each side divided by the sine of its opposite angle gives the same number. Use it when you have a matched side–angle pair plus one more piece.</p>
<p><strong>Example.</strong> Angle A = 40°, angle B = 60°, and side a = 8 cm. Then b = 8 × sin 60° ÷ sin 40° = 8 × 0.866 ÷ 0.643 ≈ <strong>10.8 cm</strong>. Bigger angle, bigger opposite side — the rule quantifies that instinct.</p>
<h3>The cosine rule: Pythagoras with a correction</h3>
<p style="text-align:center"><strong>c² = a² + b² − 2ab cos C</strong></p>
<p>Use it with two sides and the angle <em>between</em> them, or with all three sides (solve for the angle). Look closely: it's Pythagoras plus a correction term. When C = 90°, cos C = 0, the correction vanishes, and c² = a² + b² reappears — Pythagoras is just the right-angle special case.</p>
<p><strong>Example.</strong> Two straight paths of 5 km and 7 km diverge from camp at 60°. Distance between their endpoints: c² = 25 + 49 − 2 × 5 × 7 × cos 60° = 74 − 70 × 0.5 = 39 → c = √39 ≈ <strong>6.2 km</strong>.</p>
<div class="key-concept">
  <h3>Key Concept: Which Rule When?</h3>
  <p>Have a side–angle opposite pair? <strong>Sine rule.</strong> Have two sides hugging a known angle, or all three sides? <strong>Cosine rule.</strong> Right triangle? Plain SOH-CAH-TOA is faster. That's the entire decision tree.</p>
</div>
<div class="did-you-know">
  <h3>Where You'll Meet Them Again</h3>
  <p>Combining two forces that pull at 120°? The resultant comes from the cosine rule. Navigation fixes, GPS geometry, and the vector additions of Phase 3 all quietly run on these two rules. This section is a preview — Subject 10 builds full trigonometric fluency, including the unit circle and the sinusoidal waves at the heart of sound and light.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "In a right triangle, sin θ equals which ratio?",
          options: [
            "adjacent ÷ hypotenuse",
            "opposite ÷ hypotenuse",
            "opposite ÷ adjacent",
            "hypotenuse ÷ opposite",
          ],
          correctIndex: 1,
          explanation:
            "SOH: Sine = Opposite ÷ Hypotenuse. Adjacent ÷ hypotenuse is cosine (CAH) and opposite ÷ adjacent is tangent (TOA). Always label opposite and adjacent from the angle in question — they swap if you switch angles.",
        },
        {
          question:
            "A right triangle has hypotenuse 10 and an angle of 30°. How long is the side opposite that angle? (sin 30° = 0.5)",
          options: ["5", "8.7", "10", "20"],
          correctIndex: 0,
          explanation:
            "sin 30° = opposite ÷ 10, so opposite = 10 × sin 30° = 10 × 0.5 = 5. The value 8.7 is the adjacent side (10 × cos 30°), and 20 comes from dividing instead of multiplying — rearrange before you compute.",
        },
        {
          question:
            "A right triangle has opposite side 3 and adjacent side 4. What is the angle? (tan⁻¹ finds it)",
          options: ["30°", "45°", "53.1°", "36.9°"],
          correctIndex: 3,
          explanation:
            "tan θ = opposite ÷ adjacent = 3 ÷ 4 = 0.75, so θ = tan⁻¹(0.75) ≈ 36.9°. The other acute angle of this 3–4–5 triangle is 53.1° — you'd get it by taking tan⁻¹(4/3), i.e. by labeling from the other corner.",
        },
        {
          question:
            "Standing 50 m from a building, you sight its top at a 45° angle of elevation. How high is the top above eye level?",
          options: ["25 m", "70.7 m", "50 m", "100 m"],
          correctIndex: 2,
          explanation:
            "tan 45° = height ÷ 50, and tan 45° = 1, so height = 50 m. At 45° elevation, height above eye level always equals your horizontal distance — a triangle with a 45° angle has equal legs. Handy for quick field estimates.",
        },
        {
          question:
            "A triangle has no right angle, but you know angle A, angle B, and side a (opposite A). What's the right tool to find side b?",
          options: [
            "Pythagoras: a² + b² = c²",
            "The sine rule: a ÷ sin A = b ÷ sin B",
            "SOH-CAH-TOA directly",
            "The cosine rule: c² = a² + b² − 2ab cos C",
          ],
          correctIndex: 1,
          explanation:
            "You hold a matched side–angle pair (a and A) plus another angle — exactly the sine rule's setup: b = a × sin B ÷ sin A. Pythagoras and SOH-CAH-TOA need a right angle, and the cosine rule wants two sides with the angle between them.",
        },
      ],
    },
  ],
};
