export const subject29 = {
  id: "computational-physics",
  number: 29,
  title: "Computational Physics",
  description:
    "Physics's third pillar alongside theory and experiment: simulate motion, chaos, quantum wavefunctions, and the Ising model in Python — and analyze data like an experimentalist.",
  phase: 5,
  chapters: [
    {
      id: "tools",
      title: "Tools",
      subtitle: "Python, NumPy, and plotting — the working physicist's stack",
      sections: [
        {
          id: "the-third-pillar",
          title: "The Third Pillar: Why Physicists Compute",
          content: `
<p>For three centuries physics ran on two legs: theory (write down the equations) and experiment (check them against nature). The trouble is that most equations physicists write down cannot be solved with pencil and paper. Three gravitating bodies, a pendulum swinging at large amplitude, a fluid with turbulence, a magnet near its critical point — the equations are known exactly and the solutions are unobtainable analytically. The third pillar, <strong>computation</strong>, attacks these head-on: replace continuous mathematics with billions of small arithmetic steps and let a machine grind through them. Every subject you have studied so far becomes explorable rather than merely admirable.</p>
<p>The working physicist's stack is remarkably standard: <strong>Python</strong> as the language, <strong>NumPy</strong> for fast numerical arrays, <strong>Matplotlib</strong> for plots, and often <strong>SciPy</strong> for polished algorithms. Install Python 3 (from python.org, or the Anaconda distribution which bundles everything), then at a terminal:</p>
<pre>pip install numpy matplotlib scipy jupyterlab</pre>
<p>Save this as <strong>first.py</strong> and run it with <strong>python first.py</strong> — your first computational physics:</p>
<pre>import numpy as np

g = 9.81                     # m/s^2
t = np.linspace(0, 2, 9)     # 9 evenly spaced times from 0 to 2 s
y = 0.5 * g * t**2           # distance fallen at each time — no loop!
for ti, yi in zip(t, y):
    print(f"t = {ti:.2f} s   fallen {yi:5.2f} m")</pre>
<p>Notice the style: <strong>y = 0.5 * g * t**2</strong> computed the fall distance at all nine times in one line. That habit — operating on whole arrays at once — is the subject of the next section, and it is what makes Python fast enough for real physics.</p>
<div class="key-concept">
  <h4>Computation is experiment</h4>
  <p>Treat a simulation the way you treat an apparatus: calibrate it on problems whose answers you know, estimate its errors, and distrust any result you have not checked at two different resolutions. A program that runs is not a program that is right — the discipline of this subject is learning to tell the difference.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Computational physics has a birthday: in 1955 Fermi, Pasta, Ulam, and Tsingou used the MANIAC computer to simulate a chain of nonlinear springs, expecting the energy to thermalize. It didn't — it sloshed back almost perfectly, a shock that seeded both chaos theory and soliton physics. The first computational experiment ever run found something nobody predicted.</p>
</div>`,
        },
        {
          id: "numpy-arrays",
          title: "NumPy: Arrays That Think in Bulk",
          content: `
<p>A Python list can hold anything — numbers, strings, other lists — and that flexibility costs dearly: every element is a separate object, and every operation on it passes through the interpreter. A NumPy <strong>ndarray</strong> is the opposite bargain: every element has the same type, stored in one contiguous block of memory, so an operation like squaring runs as a single compiled C loop over raw numbers. The speed difference is not marginal:</p>
<pre>import numpy as np
N = 10_000_000
x = np.linspace(0, 10, N)

total = 0.0                  # pure Python: seconds
for xi in x:
    total += xi**2

total = np.sum(x**2)         # vectorized: milliseconds, ~100x faster</pre>
<p>Both compute the same number; the second hands the whole job to compiled code. This is <strong>vectorization</strong>, and it is the single most important idiom in scientific Python. The toolkit:</p>
<ul>
  <li><strong>Elementwise math:</strong> x + y, x * y, x**2, np.sin(x), np.exp(x) all act on every element at once.</li>
  <li><strong>Slicing:</strong> x[1:-1] is a view of the interior points — the key to finite-difference methods in the PDE chapter, where x[2:] − 2*x[1:-1] + x[:-2] is a second derivative in one line.</li>
  <li><strong>Boolean masks:</strong> x[x &gt; 0] selects elements by condition; np.sum(x &gt; 0) counts them.</li>
  <li><strong>Reductions:</strong> np.sum, np.mean, np.std, np.max collapse an array to a number.</li>
  <li><strong>Broadcasting:</strong> a scalar (or a compatible smaller array) is automatically stretched to match — 2*x needs no loop and no copies of 2.</li>
</ul>
<p>Arrays can be multidimensional: a 100 × 100 grid of temperatures is np.zeros((100, 100)), and T[i, j] or whole-row slices T[0, :] address it naturally. Almost every simulation in this subject is a small amount of physics wrapped around arrays like these.</p>
<div class="key-concept">
  <h4>The vectorization reflex</h4>
  <p>Whenever you catch yourself writing a Python for-loop over array elements, stop and ask: is there an array expression for this? Usually there is, it is faster by two orders of magnitude, and — once the idiom is familiar — it reads more like the mathematics it implements.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>NumPy underlies almost all of modern machine learning's ancestry: the array-programming model it popularized in science is the same one at the heart of frameworks like PyTorch — which is why physicists tend to feel at home in ML code, and vice versa.</p>
</div>`,
        },
        {
          id: "plotting-matplotlib",
          title: "Matplotlib: Plots You Can Trust",
          content: `
<p>A simulation's output is thousands or millions of numbers; understanding lives in pictures. Matplotlib is the standard plotting library, and its basic anatomy covers ninety percent of daily use:</p>
<pre>import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 4*np.pi, 400)
plt.plot(t, np.exp(-t/8)*np.sin(t), label="damped oscillation")
plt.plot(t, np.exp(-t/8), "k--", label="envelope")
plt.xlabel("time (s)")
plt.ylabel("displacement (m)")
plt.legend()
plt.savefig("damped.png", dpi=200)
plt.show()</pre>
<p>Axis labels with units are not decoration — an unlabeled plot is a number without a unit, and the habit of always labeling is what separates lab-grade figures from sketches. Beyond the basics, three tools earn their keep constantly:</p>
<ul>
  <li><strong>Logarithmic axes.</strong> plt.semilogy makes exponential decay a straight line whose slope reads off the decay constant; plt.loglog makes a power law y = A·xⁿ a straight line of slope n. Fitting a straight line by eye to log-log data is a genuine physicist's superpower — it is how you diagnose whether Monte Carlo error really falls as 1/√N in the next chapters.</li>
  <li><strong>Images of 2D fields.</strong> plt.imshow(T) renders a grid — a temperature field, an Ising lattice, a wavefunction's probability density — as a heatmap; add plt.colorbar() so the colors mean something.</li>
  <li><strong>Multiple panels.</strong> fig, axes = plt.subplots(2, 2) gives a grid of axes for comparing runs side by side, such as the same orbit at four step sizes.</li>
</ul>
<p>Plot early and often. The Euler-method disaster in the next chapter is invisible in a table of numbers and unmissable in a phase-space plot; the Ising model's phase transition announces itself in an imshow snapshot before any statistic is computed.</p>
<div class="key-concept">
  <h4>Plot the thing you are checking</h4>
  <p>Do not only plot the trajectory — plot the diagnostic: energy versus time, error versus step size, residuals versus x. The main plot shows what happened; the diagnostic plot shows whether to believe it.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Many of physics' great discoveries were, operationally, someone noticing a straight line on the right axes: Hubble's expanding universe was a velocity–distance plot of a couple dozen galaxies, and critical exponents in phase transitions were read off log-log plots decades before theory could compute them.</p>
</div>`,
        },
        {
          id: "notebooks-reproducibility",
          title: "Notebooks and Reproducible Physics",
          content: `
<p>Jupyter notebooks (run <strong>jupyter lab</strong> in a terminal) interleave executable code cells, their outputs, plots, and formatted notes in one document — a lab notebook where the apparatus is embedded in the page. For exploratory physics this is ideal: tweak a parameter, re-run a cell, watch the plot change. Notebooks also give you conveniences like <strong>%timeit expression</strong>, which times a line of code properly (averaged over many runs), settling any vectorization argument in seconds.</p>
<p>But notebooks have a famous failure mode: <strong>hidden state</strong>. Cells can be run in any order, so the variables in memory may reflect a history no longer visible on screen — a cell you edited and re-ran, another you deleted, a third you never ran at all. The result is a notebook that shows one thing and did another. The professional antidotes are simple habits:</p>
<ul>
  <li><strong>Restart &amp; Run All</strong> before trusting or sharing any result. If the notebook cannot reproduce its own outputs from a cold start, top to bottom, the outputs are not results yet.</li>
  <li><strong>Fix your random seeds.</strong> rng = np.random.default_rng(42) makes stochastic simulations exactly repeatable — indispensable for debugging, and for anyone else re-running your work.</li>
  <li><strong>Keep parameters together.</strong> Collect step sizes, lattice sizes, and physical constants in one clearly marked cell at the top, so a figure can always be traced to the exact settings that produced it.</li>
  <li><strong>Promote stable code to .py files.</strong> Once a function like an RK4 stepper works, move it to a module and import it; keep notebooks for exploration and presentation, not for hosting your only copy of critical code.</li>
</ul>
<div class="key-concept">
  <h4>Reproducibility is the experiment's lab book</h4>
  <p>In experimental physics, an uncontrolled apparatus invalidates the data. Computationally, the apparatus is your code plus its parameters plus its seeds — control all three and any result can be regenerated, checked, and extended months later. This is not bureaucracy; it is what makes a computation evidence.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Several high-profile scientific retractions have traced back to spreadsheet slips and unreproducible analysis scripts rather than bad data. Journals and collaborations (LIGO among them) now routinely publish the analysis code and notebooks alongside the paper — the gravitational-wave discovery came with a tutorial notebook anyone can run.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why is np.sum(x**2) vastly faster than a Python for-loop accumulating xi**2 over the same ten million values?",
          options: [
            "NumPy secretly uses fewer values, sampling the array statistically",
            "The NumPy version runs on the graphics card automatically",
            "The loop over elements runs in compiled C over one contiguous block of memory, instead of the Python interpreter handling each element as a separate object",
            "Python's for-loops are limited to one thousand iterations per second",
          ],
          correctIndex: 2,
          explanation:
            "A NumPy array stores identically-typed numbers contiguously, so an operation like squaring-and-summing is dispatched once to a compiled loop. A Python list forces the interpreter to fetch, unbox, operate, and rebox every element individually — roughly a hundred times slower. Same arithmetic, radically different machinery.",
        },
        {
          question:
            "With x a NumPy array, what does the expression x[x > 0] produce?",
          options: [
            "A new array containing only the elements of x that are positive",
            "The number of positive elements in x",
            "A boolean True/False for the whole array",
            "An error — arrays cannot be indexed by conditions",
          ],
          correctIndex: 0,
          explanation:
            "x > 0 evaluates elementwise to a boolean array, and using it as an index selects exactly the elements where it is True. This boolean-mask idiom replaces a loop-plus-if in one readable expression; np.sum(x > 0) would give the count instead, since True sums as 1.",
        },
        {
          question:
            "You suspect your data follows an exponential decay, y = A·e^(−t/τ). Which plot would make this hypothesis easiest to check by eye?",
          options: [
            "y versus t on ordinary linear axes",
            "y versus 1/t on linear axes",
            "log y versus log t (log-log axes)",
            "log y versus t (semilog axes) — the decay becomes a straight line of slope −1/τ",
          ],
          correctIndex: 3,
          explanation:
            "Taking the log of y = A·e^(−t/τ) gives ln y = ln A − t/τ: linear in t. On semilog axes the hypothesis becomes 'is this a straight line?', which the eye judges superbly, and the slope hands you the decay constant. Log-log axes are the analogous tool for power laws, where the slope gives the exponent.",
        },
        {
          question:
            "Before trusting the figures in a Jupyter notebook, the essential step is to:",
          options: [
            "export the notebook to PDF so the outputs are frozen",
            "restart the kernel and run all cells from top to bottom, confirming the outputs regenerate",
            "re-run only the plotting cells, since they produce the figures",
            "increase the number of cells so each step is smaller",
          ],
          correctIndex: 1,
          explanation:
            "Notebook cells can be executed out of order, so the visible outputs may depend on hidden state from cells since edited or deleted. Restart & Run All is the cold-start test: if the notebook reproduces its results from nothing, the analysis is self-contained. Freezing or partially re-running would preserve the ambiguity rather than resolve it.",
        },
      ],
    },
    {
      id: "solving-motion-numerically",
      title: "Solving Motion Numerically",
      subtitle: "From Euler to RK4 — drag, chaos, and N-body orbits",
      sections: [
        {
          id: "euler-and-its-betrayal",
          title: "Euler's Method — and Why It Betrays You",
          content: `
<p>Newton's second law is a differential equation, and any differential equation — however high its order — can be written as a set of first-order equations by promoting velocities to variables. The simple harmonic oscillator ẍ = −ω²x becomes two equations: dx/dt = v and dv/dt = −ω²x. The state (x, v) is a point in phase space, and the equations tell us its velocity through that space.</p>
<p>The oldest idea for following it is <strong>Euler's method</strong>: Taylor-expand y(t + h) = y(t) + h·y′(t) + O(h²), drop the O(h²), and step along the tangent line. Each step commits an error of order h²; over the ~1/h steps needed to cross a fixed time interval, the errors accumulate to a global error of order h. Halve the step, halve the error — painfully slow improvement. But the real trouble is worse than slowness:</p>
<pre>import numpy as np
# SHO with omega = 1: dx/dt = v, dv/dt = -x. Exact orbit: a circle.
h, T = 0.05, 50.0
x, v = 1.0, 0.0
for n in range(int(T/h)):
    x, v = x + h*v, v - h*x     # Euler: both updates use OLD values
E = 0.5*v**2 + 0.5*x**2
print(E)                        # started at 0.500... prints ~6.07</pre>
<p>The energy has grown twelvefold. The geometry explains it: the exact orbit is a circle in phase space, and every tangent line to a circle lies <em>outside</em> it — so each Euler step lands slightly outside the true orbit, multiplying the amplitude by √(1 + h²) every step. The spiral outward is exponential, and shrinking h only slows the betrayal; it never stops it. For any oscillatory or orbital problem, plain Euler is quietly injecting energy.</p>
<div class="key-concept">
  <h4>Two habits that catch lies</h4>
  <p>First, test every integrator on a problem with a known exact solution before using it on one without. Second, monitor a conserved quantity — energy, momentum, probability — as the simulation runs. Conservation laws are physics' built-in unit tests: violated conservation is the numerical method talking, not nature.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Euler described the method in 1768 for hand calculation. A tiny sign change — using the freshly updated x in the v update — yields the "semi-implicit Euler" method, which conserves energy on average and was effectively how Newton's contemporaries stepped orbits by hand. One line of code separates spiral disaster from stable orbits.</p>
</div>`,
        },
        {
          id: "runge-kutta-4",
          title: "Runge–Kutta 4: The Workhorse",
          content: `
<p>Euler fails because it commits to the slope at the interval's start, which is already stale by the interval's middle. The fix is to probe ahead: take a trial half-step, evaluate the slope there, and use <em>that</em> to make the real step. That "midpoint method" already achieves global error O(h²). Pushing the idea to four carefully chosen slope samples gives the classic fourth-order Runge–Kutta method, <strong>RK4</strong> — for a century the default workhorse of scientific computing:</p>
<pre>def rk4_step(f, y, t, h):
    k1 = f(t, y)                      # slope at the start
    k2 = f(t + h/2, y + h/2*k1)       # slope at midpoint, using k1
    k3 = f(t + h/2, y + h/2*k2)       # midpoint again, using k2
    k4 = f(t + h,   y + h*k3)         # slope at the end
    return y + (h/6)*(k1 + 2*k2 + 2*k3 + k4)</pre>
<p>The weights (1, 2, 2, 1)/6 are Simpson's rule in disguise, and they conspire to cancel error terms through h⁴: the global error is <strong>O(h⁴)</strong>. Halving the step size buys a factor of <em>sixteen</em> in accuracy for only twice the work. Repeat the Euler experiment of the last section with rk4_step at the same h = 0.05 and the energy after fifty time units is 0.4999999… — the spiral is gone for any practical purpose.</p>
<p>Because y can be a NumPy array, this one function integrates everything in this chapter: pass it a state vector of any length and a function f(t, y) returning the derivatives. Two practical rules complete the toolkit:</p>
<ul>
  <li><strong>Convergence test:</strong> run at h and at h/2; if the answers agree to your required precision, h is small enough. If they don't, keep halving. Never trust a single resolution.</li>
  <li><strong>Adaptive libraries:</strong> scipy.integrate.solve_ivp adjusts the step size on the fly, taking small steps through violent dynamics and long strides through calm — use it for production work, but only after you have built RK4 once yourself and know what it is doing.</li>
</ul>
<div class="key-concept">
  <h4>Order matters more than speed</h4>
  <p>A method of order p has error ∝ hᵖ. To improve an Euler answer 10,000-fold you need 10,000× more steps; RK4 needs 10×. High order is how computations become cheap — the same lesson returns with spectral methods in the PDE chapter.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Carl Runge and Wilhelm Kutta published their methods around 1900, for human computers. The trajectory calculations for early spaceflight — including those checked by hand at NASA — used exactly this family of methods, decades before "software" was a word.</p>
</div>`,
        },
        {
          id: "projectile-with-drag",
          title: "Projectile with Air Drag",
          content: `
<p>Introductory physics throws projectiles in a vacuum because that is the only version solvable in closed form. Real air exerts a drag force F = ½ρC<sub>d</sub>A v², directed against the velocity — proportional to speed <em>squared</em>, and coupling the x and y motions through the total speed. Write the drag per unit mass as c·|v|·v and no textbook formula survives; the numerics doesn't flinch:</p>
<pre>import numpy as np
def f(t, s):                     # state s = [x, y, vx, vy]
    vx, vy = s[2], s[3]
    v = np.hypot(vx, vy)         # drag couples x and y through |v|
    c = 0.005                    # drag constant / mass, in 1/m
    return np.array([vx, vy, -c*v*vx, -9.81 - c*v*vy])

s = np.array([0, 0, 30.0, 30.0]) # 42.4 m/s at 45 degrees
t, h = 0.0, 0.01
while s[1] >= 0:                 # until it lands
    s = rk4_step(f, s, t, h); t += h
print(f"range = {s[0]:.1f} m")   # ~112 m; vacuum theory says 183 m</pre>
<p>Drag stole almost forty percent of the range. Explore the physics by editing two numbers:</p>
<ul>
  <li><strong>Terminal velocity.</strong> Drop the projectile from rest and its speed saturates at v<sub>t</sub> = √(g/c) ≈ 44 m/s, where drag balances gravity — our launch speed is already near terminal velocity, which is why drag bites so hard here.</li>
  <li><strong>Optimal angle.</strong> Loop over launch angles and the maximum range shifts from the vacuum's 45° down toward ~38°: with drag, time spent aloft is time spent losing speed, so flatter trajectories win. Every artillery table and long-drive golf tip encodes this.</li>
  <li><strong>Asymmetry.</strong> Plot the trajectory: the descent is steeper than the ascent, because the projectile comes down slower than it went up. Vacuum parabolas are symmetric; reality is not.</li>
</ul>
<div class="key-concept">
  <h4>The numerical method is the same; only f changes</h4>
  <p>Nothing about rk4_step knows physics. Swapping the vacuum for drag — or for a rocket burning fuel, or a charged particle in a magnetic field — means editing only the derivative function f. This separation of integrator from physics is the central software design pattern of computational mechanics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Computing exactly these trajectories was the original purpose of ENIAC, the first general-purpose electronic computer (1945): wartime artillery firing tables, each entry a numerically integrated drag trajectory that had previously taken a human computer about twenty hours.</p>
</div>`,
        },
        {
          id: "double-pendulum-chaos",
          title: "The Double Pendulum: Meeting Chaos",
          content: `
<p>Hang one pendulum from the bob of another and you have a system with two angles and two angular velocities — a four-component state vector (θ₁, θ₂, ω₁, ω₂). The equations of motion follow from the Lagrangian of Subject 21; deriving them is an evening of careful algebra and the derivs function that results is a dozen dense lines. But once written, RK4 integrates it like anything else. What comes out is unlike anything else.</p>
<p>At small energies the motion is orderly — two coupled oscillation modes. Release it from large angles and the motion never repeats: the inner arm lurches, the outer arm whips over the top, and the trajectory looks random despite being perfectly deterministic. The diagnostic experiment is to run <em>twin</em> simulations differing immeasurably in their start:</p>
<pre>s1 = np.array([2.0, 2.0, 0.0, 0.0])       # both arms thrown high
s2 = s1 + np.array([1e-8, 0, 0, 0])       # nudged by 10 nanoradians
h = 1e-3
for n in range(20000):
    s1 = rk4_step(derivs, s1, 0, h)
    s2 = rk4_step(derivs, s2, 0, h)
    if n % 2000 == 0:
        print(f"t = {n*h:5.1f}   gap = {abs(s1[0]-s2[0]):.2e}")</pre>
<p>Plot the gap on semilog axes: a straight line — <strong>exponential growth</strong>, e^(λt), until the gap saturates at the size of the motion itself and the twins are doing entirely different things. The growth rate λ is the <strong>Lyapunov exponent</strong>, and its inverse sets the prediction horizon. The brutal arithmetic: improving your knowledge of the initial state from 10⁻⁸ to 10⁻¹⁶ — eight orders of magnitude — merely <em>doubles</em> how long the forecast stays good. Prediction horizons grow logarithmically with precision; perfect long-term prediction would need infinitely precise initial data.</p>
<div class="key-concept">
  <h4>Chaos is not randomness</h4>
  <p>Rerun either twin with the same initial state and the same step size and you get the identical trajectory, bit for bit. Chaos is deterministic sensitivity, not noise — and energy is still conserved, which remains your check that the integrator (not the physics) is behaving. Weather is the same phenomenon at scale: the atmosphere's Lyapunov time of a few days is why forecasts beyond two weeks are impossible in principle, not just in practice.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Edward Lorenz found sensitive dependence in 1961 by re-entering a simulation's starting values rounded to three decimal places instead of six — and watching the rerun diverge completely. The "butterfly effect" was born as a numerical-precision accident.</p>
</div>`,
        },
        {
          id: "n-body-energy-audit",
          title: "N-Body Orbits and the Energy Audit",
          content: `
<p>Gravity's N-body problem has no general closed-form solution for N ≥ 3 — and it is a few lines of NumPy. Each body feels the pairwise inverse-square pull of every other:</p>
<pre>G = 1.0                        # choose units where G = 1
def accel(pos, mass, eps=1e-3):
    a = np.zeros_like(pos)     # pos has shape (N, 3)
    for i in range(len(mass)):
        d = pos - pos[i]                          # vectors to all bodies
        r3 = (np.sum(d*d, axis=1) + eps**2)**1.5
        r3[i] = np.inf                            # no self-force
        a[i] = np.sum(mass[:, None]*d / r3[:, None], axis=0)
    return G*a</pre>
<p>Two details are doing quiet work. The cost is O(N²) — every pair interacts — which is fine for hundreds of bodies and the reason galaxy-scale codes use tree approximations. And the <strong>softening length</strong> ε fudges the force at tiny separations, preventing a near-collision from producing near-infinite accelerations that no fixed step size could follow.</p>
<p>Now, the integrator choice matters more than ever, because orbits run for millions of periods. RK4's small per-step error has a bias: energy drifts <em>secularly</em>, one direction, so a long RK4 orbit slowly spirals. The standard cure is the <strong>leapfrog</strong> (velocity Verlet) scheme — kick, drift, kick:</p>
<pre>v   += 0.5*h*accel(pos, m)     # half kick
pos += h*v                     # full drift
v   += 0.5*h*accel(pos, m)     # half kick</pre>
<p>Leapfrog is only second-order accurate, but it is <strong>symplectic</strong> and time-reversible: it exactly conserves a quantity close to the true energy, so the energy error <em>oscillates within a bounded band forever</em> instead of drifting. For long orbital or molecular-dynamics runs, this beats raw order.</p>
<div class="key-concept">
  <h4>The energy audit</h4>
  <p>Every few hundred steps, compute E = Σ½mv² − Σ Gm_im_j/r_ij and log it. A slow one-way drift means the step is too big or the integrator is wrong for the job; a sudden jump usually means a close encounter your step size could not resolve. No N-body result is publishable — or believable — without this plot.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Symplectic integrations by Laskar and by Wisdom showed the solar system itself is chaotic, with a Lyapunov time of roughly five million years — and that Mercury has a ~1% chance of destabilizing before the Sun dies. We know the fate of the planets only statistically, by ensemble simulation.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Euler's method is applied to a frictionless harmonic oscillator with a very small step size. Over many periods, the computed energy:",
          options: [
            "is exactly conserved, since the physics conserves it",
            "grows exponentially, because each step lands slightly outside the true circular phase-space orbit",
            "decays to zero as numerical friction damps the motion",
            "fluctuates randomly around the true value",
          ],
          correctIndex: 1,
          explanation:
            "The exact orbit is a circle in phase space, and every tangent line lies outside a circle — so each Euler step multiplies the amplitude by √(1 + h²ω²). The growth per step is tiny for small h but relentless and exponential. This is why monitoring conserved quantities is essential: the drift is invisible in the trajectory over a few periods and glaring in the energy plot.",
        },
        {
          question:
            "An RK4 simulation is repeated with the step size halved. Approximately how does the global error change?",
          options: [
            "It halves",
            "It falls by a factor of 4",
            "It falls by a factor of 8",
            "It falls by a factor of 16",
          ],
          correctIndex: 3,
          explanation:
            "RK4's global error scales as h⁴, so h → h/2 shrinks the error by 2⁴ = 16 at the cost of only twice the function evaluations. This leverage is why high-order methods dominate: Euler (error ∝ h) would need 16× more steps for the same gain. Verifying this factor experimentally is also the standard test that an RK4 implementation is correct.",
        },
        {
          question:
            "Adding realistic air drag to a projectile simulation, the launch angle that maximizes range becomes:",
          options: [
            "less than 45°, because flatter trajectories spend less time losing speed to drag",
            "exactly 45°, unchanged from the vacuum result",
            "more than 45°, to gain altitude above the densest air",
            "exactly 90°, straight up",
          ],
          correctIndex: 0,
          explanation:
            "The vacuum's 45° optimum balances height and horizontal speed, but drag charges rent for every second aloft: high, slow arcs bleed energy. Numerical experiments with quadratic drag put the optimum near 35–40° for typical parameters. This is found by simply looping the simulation over angles — a three-line experiment once the integrator exists.",
        },
        {
          question:
            "Two double-pendulum simulations start with initial angles differing by 10⁻⁸ radians. The defining signature of chaos is that their separation:",
          options: [
            "stays proportional to 10⁻⁸ forever, since the equations are deterministic",
            "grows linearly with time",
            "grows exponentially with time, until it saturates at the size of the motion itself",
            "shrinks as the trajectories are attracted back together",
          ],
          correctIndex: 2,
          explanation:
            "Chaotic systems amplify state differences as e^(λt), with λ the Lyapunov exponent — a straight line on a semilog plot of the gap. The consequence is a prediction horizon that grows only logarithmically with precision: eight orders of magnitude better initial data buys roughly double the forecast time. The motion remains perfectly deterministic; identical inputs still give identical outputs.",
        },
        {
          question:
            "For integrating planetary orbits over millions of periods, the second-order leapfrog method is preferred to fourth-order RK4 because leapfrog:",
          options: [
            "is more accurate per step",
            "is symplectic, so its energy error stays bounded forever instead of drifting steadily in one direction",
            "requires no evaluations of the force",
            "can use an infinitely large time step",
          ],
          correctIndex: 1,
          explanation:
            "RK4 is more accurate over short times, but its per-step energy error is biased: over millions of periods it accumulates into a secular drift and the orbit spirals. Leapfrog's symplectic structure exactly preserves a quantity close to the true energy, so its (larger) per-step error oscillates in a bounded band forever. For long-time Hamiltonian dynamics, the right conservation structure beats raw order of accuracy.",
        },
      ],
    },
    {
      id: "monte-carlo-methods",
      title: "Monte Carlo Methods",
      subtitle: "Random numbers as a computational superpower",
      sections: [
        {
          id: "pseudorandom-lcg",
          title: "Pseudorandom Numbers: The LCG Idea",
          content: `
<p>A computer is a deterministic machine, so "random numbers" from a computer are a beautiful cheat: <strong>pseudorandom</strong> sequences, generated by a formula, that pass statistical tests for randomness. The classic recipe is the <strong>linear congruential generator</strong> (LCG): keep an integer state x, and repeatedly set x → (a·x + c) mod m. With well-chosen constants the sequence hops around the integers below m in an order that looks patternless:</p>
<pre>m, a, c = 2**31 - 1, 48271, 0     # the "minimal standard" LCG
x = 42                            # the seed
def lcg():
    global x
    x = (a*x + c) % m
    return x / m                  # map to uniform [0, 1)

print([round(lcg(), 3) for _ in range(5)])
# [0.001, 0.571, 0.257, 0.448, 0.654]</pre>
<p>Three properties matter. The sequence is <strong>periodic</strong> — the state must eventually repeat, so the period is at most m, and good generators achieve nearly that. The sequence is completely determined by the <strong>seed</strong>: start from 42 again and you get the identical stream, which turns randomness into something reproducible. And the <em>quality</em> depends delicately on a, c, m: bad constants produce correlations that silently poison simulations. The notorious example is IBM's RANDU generator from the 1960s — plot consecutive triples of its output as points in 3D and they all fall on just 15 parallel planes.</p>
<p>In practice you never roll your own. NumPy's generator (the PCG64 algorithm — an LCG descendant with a scrambled output and a period near 2¹²⁸) is excellent:</p>
<pre>rng = np.random.default_rng(seed=1)
u = rng.random(5)                 # uniform [0, 1)
z = rng.normal(0, 1, 5)          # Gaussian, mean 0, sigma 1
n = rng.integers(0, 10, 5)       # random ints 0..9</pre>
<div class="key-concept">
  <h4>Seed everything, always</h4>
  <p>A seeded simulation is a repeatable experiment: a bug seen once can be seen again, a published figure can be regenerated exactly, and two algorithm variants can be compared on identical noise. Only switch to fresh seeds when accumulating independent runs for statistics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Donald Knuth devoted a half-volume of The Art of Computer Programming to random numbers and called RANDU "truly horrible"; a decade of simulation results had to be reexamined. His deeper warning: "random numbers should not be generated with a method chosen at random."</p>
</div>`,
        },
        {
          id: "mc-integration",
          title: "Monte Carlo Integration and the 1/√N Law",
          content: `
<p>Throw darts uniformly at the unit square and count the fraction landing inside the quarter-circle x² + y² &lt; 1. That fraction estimates the quarter-circle's area, π/4 — so four times the fraction estimates π:</p>
<pre>rng = np.random.default_rng(0)
for N in [100, 10_000, 1_000_000]:
    x, y = rng.random(N), rng.random(N)
    inside = np.sum(x*x + y*y &lt; 1)
    print(N, 4*inside/N)     # 2.72, then 3.1448, then 3.141408</pre>
<p>The N = 100 estimate is embarrassing; a million darts give π to three decimals. The general tool is the <strong>mean-value method</strong>: since ∫ₐᵇ f dx = (b − a)·⟨f⟩, sample x uniformly and average:</p>
<pre>x = rng.uniform(a, b, N)
fx = f(x)
I   = (b - a)*fx.mean()
err = (b - a)*fx.std()/np.sqrt(N)   # a standard error, for free</pre>
<p>The error estimate comes from the central limit theorem: an average of N independent samples has standard deviation σ/√N. Hence the <strong>1/√N law</strong>: every extra decimal digit of accuracy costs 100× more samples. That sounds terrible — the trapezoid rule converges far faster in one dimension — so why does Monte Carlo run the world's physics?</p>
<p><strong>Dimension.</strong> A grid method with n points per axis needs N = nᵈ points in d dimensions, so at fixed total cost its error degrades exponentially with d: the trapezoid rule's error scales as N^(−2/d). Monte Carlo's 1/√N does not contain d at all. By d ≈ 8 Monte Carlo wins, and the integrals of statistical physics — over the coordinates of 10²³ particles — or of quantum field theory are effectively infinite-dimensional. Randomness is not a compromise there; it is the only method that survives.</p>
<div class="key-concept">
  <h4>Always report the error bar</h4>
  <p>A Monte Carlo result without its σ/√N uncertainty is a rumor. The estimate and its error come from the same samples at no extra cost — compute both, and check the error really shrinks as 1/√N by doubling N. That check is a one-line loglog plot and has caught many broken generators.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Stanislaw Ulam conceived the method in 1946 while playing solitaire during his recovery from illness — wondering whether the chance of winning was easier to estimate by dealing many hands than by combinatorics. He and von Neumann's team named it after the casino at Monte Carlo, where Ulam's uncle gambled.</p>
</div>`,
        },
        {
          id: "metropolis-algorithm",
          title: "The Metropolis Algorithm",
          content: `
<p>Statistical mechanics (Subject 28) says a system at temperature T occupies microstate s with probability P(s) ∝ e^(−E(s)/k_BT), and every thermal average is ⟨A⟩ = Σ A(s)P(s). Try to compute that sum for a modest 32 × 32 Ising lattice and you face 2¹⁰²⁴ states — more than atoms in the observable universe, squared and squared again. Uniform random sampling fails too: almost every random spin configuration has enormous energy and utterly negligible Boltzmann weight, so you would average over noise.</p>
<p>The 1953 Metropolis algorithm solves this with <strong>importance sampling</strong>: instead of sampling states uniformly and weighting them, generate states with frequency proportional to their Boltzmann weight, then average plainly. It builds a Markov chain — a random walk through configuration space — with an acceptance rule of disarming simplicity. From the current state, propose a small change (flip one spin) costing energy ΔE:</p>
<pre>def accept(dE, T, rng):          # k_B = 1 units
    return dE &lt;= 0 or rng.random() &lt; np.exp(-dE/T)</pre>
<p>Downhill moves are always accepted; uphill moves are accepted with probability e^(−ΔE/T). Why exactly that? The condition of <strong>detailed balance</strong>: in equilibrium, the flow of probability from state i to state j must equal the flow back, P(i)W(i→j) = P(j)W(j→i). The Metropolis rule makes the ratio of transition rates W(i→j)/W(j→i) equal e^(−ΔE/T), which is precisely P(j)/P(i) — so the Boltzmann distribution is the stationary distribution of the walk. Run long enough and the chain <em>is</em> a thermal system.</p>
<p>The uphill acceptances are not a defect to minimize: they are temperature itself. Accept only downhill moves and you have a zero-temperature quench that jams in the nearest local energy minimum; the occasional thermal "mistake" is what lets the system explore, fluctuate, and find true equilibrium.</p>
<div class="key-concept">
  <h4>Two costs of correlation</h4>
  <p>Successive chain states differ by one spin flip, so they are strongly correlated — not independent samples. Practical consequences: discard an initial equilibration stretch before measuring (the "burn-in"), and thin or block-average measurements when estimating error bars, since the naive σ/√N formula assumes independence it doesn't have.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The 1953 paper ran on Los Alamos's MANIAC; Arianna Rosenbluth wrote the implementation, arguably the first Markov-chain Monte Carlo program in history. The algorithm now ranks on standard lists of the ten most influential algorithms of the twentieth century — it underlies everything from lattice QCD to Bayesian statistics.</p>
</div>`,
        },
        {
          id: "simulating-ising",
          title: "Simulating the Ising Model",
          content: `
<p>Now assemble the pieces into the classic simulation of computational physics. The 2D Ising model puts spins s = ±1 on a square lattice with energy E = −J Σ s_i s_j summed over nearest-neighbor pairs. Flipping one spin only touches its four neighbors, so the energy cost is local: ΔE = 2J·s_ij·(sum of the four neighbors). That locality is what makes Metropolis cheap. The whole simulation:</p>
<pre>L, T = 32, 2.0                    # lattice size; temperature (J = kB = 1)
rng = np.random.default_rng(1)
s = rng.choice([-1, 1], size=(L, L))
for sweep in range(2000):         # one sweep = L*L attempted flips
    for _ in range(L*L):
        i, j = rng.integers(L, size=2)
        nb = s[(i+1)%L, j] + s[(i-1)%L, j] + s[i, (j+1)%L] + s[i, (j-1)%L]
        dE = 2*s[i, j]*nb
        if dE &lt;= 0 or rng.random() &lt; np.exp(-dE/T):
            s[i, j] *= -1
print(abs(s.mean()))              # magnetization per spin: ~0.85 at T = 2.0</pre>
<p>The % L arithmetic wraps the edges — <strong>periodic boundary conditions</strong>, making the lattice a torus with no special edge sites. Discard the first few hundred sweeps as equilibration, then measure. Now do physics: run the loop for temperatures from 1.5 to 3.5 and plot |M| against T, and add plt.imshow(s) snapshots along the way.</p>
<ul>
  <li><strong>Low T (≈1.5):</strong> the lattice locks into nearly uniform ±1 — spontaneous magnetization, order from nothing but nearest-neighbor agreement.</li>
  <li><strong>High T (≈3.5):</strong> a salt-and-pepper mess, M ≈ 0 up to 1/√N fluctuations.</li>
  <li><strong>Near T_c = 2/ln(1 + √2) ≈ 2.269:</strong> fluctuating domains of every size, from single spins to lattice-spanning continents; M wanders wildly between measurements. You are looking at critical fluctuations — the scale-free structure behind Subject 28's diverging susceptibility.</li>
</ul>
<div class="key-concept">
  <h4>Critical slowing down</h4>
  <p>Near T_c the correlated domains are huge, but single-spin flips only chip at their edges, so the chain decorrelates agonizingly slowly — error bars balloon exactly where the physics is most interesting. Cluster algorithms (Wolff, Swendsen–Wang) flip whole correlated droplets at once and tame the problem; knowing they exist is part of Monte Carlo literacy.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Onsager's exact solution of the 2D Ising model (1944) gives your simulation a rare luxury: an exact answer to test against, including T_c = 2.269… In 3D no exact solution exists — there, simulations like this one, plus renormalization theory, are how the critical exponents are actually known.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A Monte Carlo simulation is run twice with the same seed passed to np.random.default_rng. The two runs:",
          options: [
            "produce identical results — the pseudorandom sequence is completely determined by the seed",
            "produce statistically similar but numerically different results",
            "produce identical results only if run on the same day",
            "cannot be compared, since randomness makes each run unique",
          ],
          correctIndex: 0,
          explanation:
            "Pseudorandom generators are deterministic formulas: the seed fixes the entire sequence, so the simulation is exactly repeatable. This is a feature, not a flaw — it makes stochastic bugs reproducible and published results regenerable. For independent statistical runs you deliberately vary the seed; for debugging and comparison you deliberately fix it.",
        },
        {
          question:
            "A Monte Carlo integral currently has a statistical error of 0.01, and you need 0.001. Roughly how many more samples are required?",
          options: [
            "10× more",
            "20× more",
            "100× more, since the error falls as 1/√N",
            "1000× more",
          ],
          correctIndex: 2,
          explanation:
            "The central limit theorem gives a statistical error of σ/√N: shrinking the error tenfold requires N to grow by 10² = 100. Each additional decimal digit costs a factor of a hundred — slow, but crucially the rate contains no reference to the dimension of the integral, which is what makes the method unbeatable in high dimensions.",
        },
        {
          question:
            "Why is Monte Carlo the method of choice for a 100-dimensional integral, despite converging only as 1/√N?",
          options: [
            "In high dimensions random samples become effectively evenly spaced",
            "Grid-based methods need points growing exponentially with dimension, while the Monte Carlo error rate is independent of dimension",
            "The 1/√N law accelerates to 1/N when the dimension exceeds ten",
            "High-dimensional integrands are always constant, so any method works",
          ],
          correctIndex: 1,
          explanation:
            "A grid with just 10 points per axis needs 10¹⁰⁰ evaluations in 100 dimensions — impossible before the universe ends. Monte Carlo's σ/√N error never mentions d: a million random samples give roughly percent-level accuracy whether d is 1 or 1000. Deterministic rules win in low dimensions; randomness is the only survivor in high ones, which is where statistical and quantum physics live.",
        },
        {
          question:
            "In the Metropolis algorithm, a proposed move that raises the energy by ΔE is accepted with probability e^(−ΔE/k_BT). What would go wrong if uphill moves were always rejected?",
          options: [
            "Nothing — the simulation would simply converge faster",
            "The lattice would overflow to infinite energy",
            "The random number generator would repeat its period",
            "The walk would behave like a zero-temperature quench, jamming in a local energy minimum instead of sampling the Boltzmann distribution",
          ],
          correctIndex: 3,
          explanation:
            "Occasional uphill acceptance is temperature: it produces exactly the e^(−E/k_BT) weighting demanded by detailed balance, and it lets the system climb out of local minima to explore configuration space. Pure downhill motion is energy minimization, not thermal equilibrium — it freezes the system in the nearest metastable state and yields averages belonging to T = 0, not to your intended T.",
        },
        {
          question:
            "An Ising simulation is run just below, at, and just above T_c ≈ 2.27. The signature of the critical point in the lattice snapshots is:",
          options: [
            "a perfectly uniform lattice of aligned spins",
            "uncorrelated salt-and-pepper noise",
            "fluctuating domains at every size scale, with the magnetization wandering wildly between measurements",
            "a checkerboard of perfectly alternating spins",
          ],
          correctIndex: 2,
          explanation:
            "Uniform alignment is the low-T ordered phase, and structureless noise is the high-T disordered phase. Criticality is the scale-free regime in between: correlated domains from single spins up to the lattice size, diverging fluctuations, and painfully slow equilibration (critical slowing down). Those lattice-spanning fluctuations are the real-space face of the diverging correlation length behind universal critical exponents.",
        },
      ],
    },
    {
      id: "pdes-waves-numerically",
      title: "PDEs & Waves Numerically",
      subtitle: "Heat, waves, Laplace, and the Schrödinger equation on a grid",
      sections: [
        {
          id: "heat-equation-ftcs",
          title: "The Heat Equation: FTCS and the Stability Cliff",
          content: `
<p>The heat equation ∂T/∂t = D ∂²T/∂x² governs diffusion of anything — heat, ink, probability. To compute with it, chop space into points x_i a distance Δx apart and time into steps Δt. Derivatives become differences: the second derivative at point i is (T_{i+1} − 2T_i + T_{i−1})/Δx², a discrete "how does my value compare to my neighbors' average". Stepping time forward with an Euler step gives the <strong>FTCS scheme</strong> (forward time, centered space) — and thanks to NumPy slicing, the entire solver is one line in a loop:</p>
<pre>import numpy as np
nx = 101
dx = 1.0/(nx - 1); D = 1.0
dt = 0.4*dx*dx/D                  # alpha = D*dt/dx^2 = 0.4  — stable
T = np.zeros(nx); T[40:60] = 100.0   # a hot block in a cold rod
for n in range(5000):
    T[1:-1] += D*dt/dx**2 * (T[2:] - 2*T[1:-1] + T[:-2])</pre>
<p>Run it and the block's sharp edges melt into a spreading Gaussian mound — diffusion before your eyes. Now change the 0.4 to 0.6. Within a few hundred steps the solution is a violently growing sawtooth reaching 10⁷² — not inaccurate, <em>insane</em>. The boundary is razor sharp:</p>
<div class="key-concept">
  <h4>The stability condition</h4>
  <p>FTCS is stable only when α = D·Δt/Δx² ≤ ½. The shortest wavelength the grid can hold — the point-to-point zigzag — is multiplied by (1 − 4α) each step; once α exceeds ½ that factor's magnitude exceeds 1 and the zigzag mode doubles relentlessly, feeding on roundoff error. Stability is a property of the scheme, not a matter of running "carefully".</p>
</div>
<p>The condition has a physical reading: Δt must be shorter than the time heat takes to diffuse across one cell, so information cannot be asked to jump cells. It also has a price tag: refine the grid by halving Δx and you must quarter Δt — eight times the work in 1D for one doubling of resolution, and worse in higher dimensions. Implicit schemes (Crank–Nicolson) accept more algebra per step — solving a linear system — in exchange for stability at any Δt; knowing that trade exists is the start of serious PDE literacy.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Because roundoff seeds the instability, an unstable scheme can look fine for hundreds of steps before erupting — early numerical weather forecasts in the 1950s died exactly this way, blowing up mid-forecast. The blowup signature, a grid-scale checkerboard, is so characteristic that practitioners diagnose it on sight.</p>
</div>`,
        },
        {
          id: "wave-equation-courant",
          title: "The Wave Equation and the Courant Condition",
          content: `
<p>The wave equation ∂²u/∂t² = c² ∂²u/∂x² is second order in time, so a step needs two levels of history: the new value is computed from the present <em>and</em> the previous one. Center the differences in both time and space and solve for the future:</p>
<p style="text-align:center;">u_i^(n+1) = 2u_i^n − u_i^(n−1) + r²(u_{i+1}^n − 2u_i^n + u_{i−1}^n), &nbsp; r = cΔt/Δx</p>
<pre>c, dx = 1.0, 0.01
dt = 0.9*dx/c                        # Courant number r = 0.9
r2 = (c*dt/dx)**2
x = np.arange(0, 1 + dx, dx)
u  = np.exp(-((x - 0.3)/0.05)**2)    # a Gaussian pluck, at rest
up = u.copy()                        # previous time level
for n in range(2000):
    un = np.empty_like(u)
    un[1:-1] = 2*u[1:-1] - up[1:-1] + r2*(u[2:] - 2*u[1:-1] + u[:-2])
    un[0] = un[-1] = 0.0             # fixed ends
    up, u = u, un</pre>
<p>Animate u and the pluck splits into two pulses running left and right at speed c; each reflects off the fixed ends <em>inverted</em>, exactly as a rope clamped at the wall does (free ends — copying the neighbor's value instead of zero — reflect upright). Standing waves emerge when reflections overlap: Subjects 8 and 13, now emergent from arithmetic.</p>
<p>Stability here is governed by the <strong>Courant–Friedrichs–Lewy (CFL) condition</strong>: r = cΔt/Δx ≤ 1. The reasoning is beautifully physical. In one time step, the real wave travels a distance cΔt, but the numerical update only consults nearest neighbors — information propagates at most one cell, Δx, per step. If cΔt &gt; Δx, the true solution depends on data the scheme never sees; no scheme ignorant of relevant physics can be stable. The numerical domain of dependence must contain the physical one.</p>
<div class="key-concept">
  <h4>A happy accident at r = 1</h4>
  <p>For this 1D scheme, r exactly 1 makes the numerical solution <em>exact</em> — the update becomes d'Alembert's traveling-wave solution in disguise. Almost no scheme is this lucky, and in 2D/3D the CFL bound tightens (r ≤ 1/√d), but it shows stability limits are physics, not pessimism.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Courant, Friedrichs, and Lewy published the CFL condition in 1928 — before electronic computers existed — as a step in a pure-mathematics proof. It now constrains every weather model, earthquake code, and movie-studio water simulation on Earth.</p>
</div>`,
        },
        {
          id: "laplace-relaxation",
          title: "Laplace by Relaxation: Jacobi and Gauss–Seidel",
          content: `
<p>Laplace's equation ∇²V = 0 — the electrostatic potential in empty space, steady-state temperature, soap films — is a different kind of problem. There is no time: the boundary values are given, and the interior must be found <em>all at once</em>. On a grid, the discrete Laplacian says something wonderfully simple: at every interior point,</p>
<p style="text-align:center;">V_ij = ¼(V above + V below + V left + V right)</p>
<p>— every point is the average of its four neighbors, the discrete version of the mean-value property of harmonic functions. That immediately suggests <strong>Jacobi relaxation</strong>: guess anything for the interior, then repeatedly replace every point with its neighbors' average until nothing changes. Here is a grounded box whose top edge is held at 100 V:</p>
<pre>V = np.zeros((100, 100))
V[0, :] = 100.0                          # top edge fixed at 100 V
for it in range(20000):
    Vnew = V.copy()                      # edges keep their fixed values
    Vnew[1:-1, 1:-1] = 0.25*(V[2:, 1:-1] + V[:-2, 1:-1]
                           + V[1:-1, 2:] + V[1:-1, :-2])
    if np.max(np.abs(Vnew - V)) &lt; 1e-4:  # converged?
        break
    V = Vnew</pre>
<p>plt.imshow(V) reveals the potential draping smoothly from the hot edge into the grounded box, equipotentials curving exactly as Subject 15 sketched them. Relaxation is honest but slow: information about the boundary creeps inward one cell per iteration and then must settle, so a 100 × 100 grid takes on the order of 10⁴ Jacobi iterations — and by symmetry the center should reach exactly 25 V (the average of one edge at 100 and three at 0), which the iteration approaches from below, still half a percent shy at our loose tolerance.</p>
<p>Two upgrades matter. <strong>Gauss–Seidel</strong> sweeps the grid updating <em>in place</em>, so each point uses neighbors already refreshed this sweep — no Vnew copy, and convergence roughly twice as fast. <strong>Successive over-relaxation (SOR)</strong> then <em>overshoots</em> each update by a tuned factor ω between 1 and 2, cutting the iteration count from O(N²) toward O(N) — the difference between minutes and seconds on fine grids.</p>
<div class="analogy">
  <h3>Analogy: The Settling Rubber Sheet</h3>
  <p>Clamp a rubber sheet's edges at the boundary heights and let it settle: each point sags to the average of its surroundings, wobbles propagating and dying until the sheet is smooth. Relaxation methods are that settling, performed by arithmetic — and "relaxation" is the honest physical name.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Before computers, engineers ran relaxation by hand on grid paper — Richard Southwell's teams solved dam-stress and airflow problems in the 1930s with squads of human "computers" averaging neighbors for weeks. The algorithm predates the machine by decades.</p>
</div>`,
        },
        {
          id: "schrodinger-split-step",
          title: "The Schrödinger Equation: A Quantum Movie",
          content: `
<p>The time-dependent Schrödinger equation, iħ ∂ψ/∂t = −(ħ²/2m) ∂²ψ/∂x² + V(x)ψ, is a diffusion-like equation with an imaginary diffusion constant — and that i changes everything. Try FTCS on it and you hit a wall deeper than instability: the scheme fails to be <strong>unitary</strong>. The exact evolution ψ → e^(−iĤt/ħ)ψ preserves the norm ∫|ψ|²dx = 1 — total probability, the sanity of the theory — while the discretized step does not, so the total probability of finding the particle anywhere drifts from 1. A wavefunction with norm 1.3 is not slightly wrong; it is meaningless.</p>
<p>The <strong>split-step Fourier method</strong> fixes this with a beautiful factorization. The Hamiltonian is kinetic plus potential, Ĥ = K̂ + V̂, and for a small step e^(−i(K̂+V̂)Δt) ≈ e^(−iV̂Δt/2) e^(−iK̂Δt) e^(−iV̂Δt/2) (the symmetric Strang splitting, accurate to O(Δt³)). Each factor is trivial in the right basis: V̂ is diagonal in position space — just multiply ψ(x) by a phase — and K̂ is diagonal in momentum space, one FFT away, where it multiplies by e^(−ik²Δt/2) (units ħ = m = 1). Every factor is a pure phase, so each step is <em>exactly</em> unitary by construction:</p>
<pre>x = np.linspace(-50, 50, 2048)
dx = x[1] - x[0]; dt = 0.01
k = 2*np.pi*np.fft.fftfreq(len(x), d=dx)
V = np.where(np.abs(x) &lt; 1, 1.0, 0.0)      # barrier, height 1
psi = np.exp(-(x + 15)**2/4 + 1j*x)        # packet moving right, E ~ 0.5
psi /= np.sqrt(np.sum(np.abs(psi)**2)*dx)  # normalize
expV = np.exp(-0.5j*dt*V)                  # half potential step
expK = np.exp(-0.5j*dt*k**2)               # full kinetic step
for n in range(4000):
    psi = expV*np.fft.ifft(expK*np.fft.fft(expV*psi))
print(np.sum(np.abs(psi)**2)*dx)           # 1.0000000000 — unitary!</pre>
<p>Plot |ψ|² every few hundred steps and you get the quantum movie Subject 22 could only describe: the Gaussian packet glides toward the barrier, piles up against it, and splits — most of it reflecting, while a faint pulse emerges on the far side and travels on. With these numbers about 13% <strong>tunnels</strong> through a barrier twice its energy. Vary the barrier width and watch transmission die exponentially, exactly as the WKB formula predicts.</p>
<div class="key-concept">
  <h4>Choose schemes that share your physics' symmetries</h4>
  <p>Leapfrog conserved energy for orbits because it is symplectic; split-step conserves probability because it is unitary. The recurring deep lesson of this subject: the best numerical method is the one that builds the conservation law into its structure rather than approximating it.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The FFT that powers each step — rediscovered by Cooley and Tukey in 1965, anticipated by Gauss in 1805 — reduces the Fourier transform from N² to N·log N operations. Without it, this simulation would run thousands of times slower; with it, real research codes evolve quantum wavepackets in 3D.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "An explicit FTCS heat-equation solver works at grid spacing Δx. The grid is refined to Δx/2. To remain stable, the time step must:",
          options: [
            "stay the same — stability depends only on D",
            "be halved",
            "be doubled, since finer grids are more accurate",
            "be quartered, because stability requires Δt ≤ Δx²/2D",
          ],
          correctIndex: 3,
          explanation:
            "The FTCS stability condition is α = D·Δt/Δx² ≤ ½, so Δt scales with Δx². Halving Δx forces Δt down fourfold — eight times the total work in 1D for each doubling of spatial resolution. This punishing scaling is the main motivation for implicit schemes like Crank–Nicolson, which remain stable at any Δt in exchange for solving a linear system each step.",
        },
        {
          question:
            "The physical meaning of the Courant condition cΔt/Δx ≤ 1 for the explicit wave equation scheme is that:",
          options: [
            "in one time step the real wave must not travel farther than the one cell the numerical update can see, so the scheme's domain of dependence contains the physics'",
            "the wave speed must be less than the speed of light",
            "the grid must contain at least c points per wavelength",
            "the time step must be an integer fraction of the wave period",
          ],
          correctIndex: 0,
          explanation:
            "Each update consults only nearest neighbors, so numerical information moves at most Δx per Δt. If the true wave outruns that (cΔt > Δx), the correct solution depends on data the scheme never receives, and no amount of accuracy can save it — the result is explosive instability. The CFL condition is causality imposed on the grid, published by Courant, Friedrichs, and Lewy in 1928, before computers existed.",
        },
        {
          question:
            "In Jacobi relaxation for Laplace's equation, each iteration replaces every interior grid point with:",
          options: [
            "the value it had two iterations ago",
            "the average of its four nearest neighbors, repeated until the changes fall below tolerance",
            "the boundary value of the nearest edge",
            "a random value drawn from the boundary distribution",
          ],
          correctIndex: 1,
          explanation:
            "The discrete Laplace equation says exactly that each point equals its neighbors' average — the mean-value property of harmonic functions. Iterating that assignment 'relaxes' any initial guess toward the unique solution fixed by the boundary values, like a clamped rubber sheet settling. Gauss–Seidel accelerates it by using freshly updated neighbors within the same sweep, and SOR by deliberately overshooting each update.",
        },
        {
          question:
            "For the time-dependent Schrödinger equation, the split-step Fourier method is preferred over a naive explicit scheme chiefly because each split-step factor is a pure phase, which guarantees:",
          options: [
            "that the wavefunction remains real at all times",
            "second-order spatial accuracy",
            "exact unitarity — the total probability ∫|ψ|²dx stays 1 to machine precision",
            "that no Fourier transforms are needed",
          ],
          correctIndex: 2,
          explanation:
            "Quantum evolution is unitary: probability is conserved. Naive discretizations break this, so the norm drifts and the 'wavefunction' loses meaning. Splitting e^(−iĤΔt) into potential and kinetic factors, each applied as a phase in the basis where it is diagonal (position space and momentum space via FFT), makes every step exactly norm-preserving by construction — the quantum sibling of choosing symplectic integrators for orbits.",
        },
        {
          question:
            "A student runs the FTCS heat solver with α = 0.6 and sees the solution erupt into a rapidly growing point-to-point zigzag. What happened?",
          options: [
            "The initial condition was too sharp for diffusion to handle",
            "Roundoff seeded the grid's shortest-wavelength mode, which the scheme amplifies every step once α exceeds ½",
            "The thermal diffusivity D was set to a negative value",
            "The boundary conditions leaked heat into the domain",
          ],
          correctIndex: 1,
          explanation:
            "Stability analysis tracks each Fourier mode: FTCS multiplies the point-to-point checkerboard mode by (1 − 4α) per step, which exceeds 1 in magnitude when α > ½. Tiny roundoff errors always contain a whiff of that mode, and it then doubles relentlessly — producing the characteristic grid-scale sawtooth reaching astronomical values within hundreds of steps. The physics is fine; the scheme's stability boundary was crossed.",
        },
      ],
    },
    {
      id: "data-and-fitting",
      title: "Data & Fitting",
      subtitle: "Least squares, uncertainty, and honest model comparison",
      sections: [
        {
          id: "least-squares-derived",
          title: "Least Squares, Derived",
          content: `
<p>You measured N data points (x_i, y_i), each y_i with Gaussian uncertainty σ_i, and you believe a model y = f(x; parameters). Which parameters are best? "Best" deserves a derivation, not a convention. If the model is true, each measurement scatters around it with probability ∝ e^(−(y_i − f(x_i))²/2σ_i²); assuming independent errors, the probability of the whole data set is the product. Maximizing that likelihood means minimizing its negative log — which is, up to constants,</p>
<p style="text-align:center; font-size:1.1em;"><strong>χ² = Σ (y_i − f(x_i))²/σ_i²</strong></p>
<p><strong>Least squares is maximum likelihood for Gaussian errors.</strong> The squares aren't arbitrary; they are the Gaussian's exponent. And the weights 1/σ_i² say precise points count more — a point known to ±0.1 pulls the fit a hundred times harder than one known to ±1.</p>
<p>For a straight line f = mx + b, set ∂χ²/∂m = ∂χ²/∂b = 0 and two linear "normal equations" pop out, solvable in closed form:</p>
<pre>x = np.array([1., 2., 3., 4., 5.])
y = np.array([2.1, 3.9, 6.2, 8.1, 9.8])
w = np.ones_like(x)               # use w = 1/sigma**2 with real errors
S, Sx, Sy = w.sum(), (w*x).sum(), (w*y).sum()
Sxx, Sxy = (w*x*x).sum(), (w*x*y).sum()
D = S*Sxx - Sx**2
m = (S*Sxy - Sx*Sy)/D             # slope      -> 1.96
b = (Sxx*Sy - Sx*Sxy)/D           # intercept  -> 0.14
sig_m, sig_b = np.sqrt(S/D), np.sqrt(Sxx/D)   # parameter uncertainties</pre>
<p>The last line is the part beginners skip and professionals live by: the <em>parameters have error bars too</em>, read off from the curvature of χ² around its minimum (a sharp valley pins the parameters; a shallow one leaves them loose). For nonlinear models, scipy.optimize.curve_fit does the minimization numerically and returns the covariance matrix, whose diagonal square roots are these same uncertainties.</p>
<div class="key-concept">
  <h4>Know the assumptions you bought</h4>
  <p>The derivation assumed Gaussian, independent errors — so least squares is exquisitely sensitive to outliers, since a 5σ point contributes 25 to χ². One bad point can drag the whole line. Always plot data with the fit; robust methods (least absolute deviations) exist for contaminated data.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Least squares had a priority feud: Legendre published it in 1805, but Gauss claimed he'd used it since 1795 — and clinched the argument by using it to recover the lost asteroid Ceres from a handful of observations, telling astronomers exactly where to point their telescopes.</p>
</div>`,
        },
        {
          id: "error-propagation",
          title: "Propagating Uncertainty",
          content: `
<p>You rarely measure the quantity you want directly: you measure a pendulum's length and period and <em>compute</em> g. How do the input uncertainties flow through to the answer? Taylor-expand the formula around the measured values: a small error δx shifts f by (∂f/∂x)δx. For independent errors the shifts add in quadrature (they are as likely to cancel as reinforce), giving the master formula:</p>
<p style="text-align:center; font-size:1.05em;">σ_f² = (∂f/∂x)²σ_x² + (∂f/∂y)²σ_y² + …</p>
<p>Three special cases handle most lab work:</p>
<ul>
  <li><strong>Sums and differences:</strong> absolute errors add in quadrature: σ_f = √(σ_x² + σ_y²). Beware differences of nearly equal quantities — the value shrinks but the error doesn't, so the <em>relative</em> error explodes.</li>
  <li><strong>Products and quotients:</strong> relative errors add in quadrature: (σ_f/f)² = (σ_x/x)² + (σ_y/y)².</li>
  <li><strong>Powers:</strong> f = xⁿ multiplies the relative error by |n| — squaring a measurement doubles its percentage uncertainty.</li>
</ul>
<p><strong>Worked example.</strong> g = 4π²L/T² with L = 1.000 ± 0.005 m (0.5%) and T = 2.006 ± 0.010 s (0.5%). The T² doubles its contribution to 1.0%, so σ_g/g = √(0.5² + 1.0²)% ≈ 1.1%, giving g = 9.81 ± 0.11 m/s². Note where to spend effort: the timing dominates, so a better stopwatch beats a better ruler.</p>
<p>When the formula is messy — or nonlinear enough that the linear Taylor step is dubious — there is a wonderfully honest alternative: <strong>Monte Carlo propagation</strong>. Draw thousands of virtual measurements from the input distributions, push each through the formula, and read off the output's spread:</p>
<pre>rng = np.random.default_rng(0)
N = 100_000
L = rng.normal(1.000, 0.005, N)
T = rng.normal(2.006, 0.010, N)
g = 4*np.pi**2 * L / T**2
print(g.mean(), g.std())     # 9.811  0.110 — matches the formula</pre>
<p>This handles correlations, asymmetries, and any formula you can type, and it reproduces the quadrature result whenever the linear approximation holds — a built-in cross-check.</p>
<div class="key-concept">
  <h4>A measurement without an uncertainty is not a measurement</h4>
  <p>g = 9.81 ± 0.11 is a claim that can be tested against 9.80665; bare "9.81" is a number with no scientific content. Propagation is what turns instrument specs into the error bar every conclusion rests on.</p>
</div>`,
        },
        {
          id: "chi-square-goodness",
          title: "Chi-Square: Is the Fit Any Good?",
          content: `
<p>A least-squares fit always returns parameters — even when the model is nonsense. Judging whether the model <em>fits</em> is a separate question, and χ² answers it. If the model is correct and the error bars honest, each term (y_i − f(x_i))²/σ_i² averages about 1: points typically miss the curve by about one error bar. With p fitted parameters eating p of the data's freedoms, the expectation is χ² ≈ N − p, the number of <strong>degrees of freedom</strong>. Hence the working statistic:</p>
<p style="text-align:center; font-size:1.1em;"><strong>reduced χ² = χ²/(N − p) ≈ 1 for a healthy fit</strong></p>
<pre>from scipy.optimize import curve_fit
def line(x, m, b): return m*x + b
popt, pcov = curve_fit(line, x, y, sigma=sig, absolute_sigma=True)
perr = np.sqrt(np.diag(pcov))          # 1-sigma parameter errors
resid = (y - line(x, *popt))/sig
chi2 = np.sum(resid**2)
print(chi2/(len(x) - 2))               # the verdict</pre>
<p>Reading the verdict:</p>
<ul>
  <li><strong>χ²/dof ≈ 1:</strong> data scatter matches the error bars around the model. Consistency — not proof.</li>
  <li><strong>χ²/dof ≫ 1</strong> (say 5): the data reject something — either the model is missing physics, or the error bars are underestimated. Both happen constantly; distinguishing them is the analyst's job.</li>
  <li><strong>χ²/dof ≪ 1</strong> (say 0.1): the fit is <em>too</em> good — points hugging the curve far tighter than the error bars allow. Almost always overestimated errors; occasionally something worse, like fitted noise or fabricated data.</li>
</ul>
<p>The number is not the whole story: <strong>plot the residuals</strong> (y_i − f(x_i))/σ_i against x. A healthy fit shows structureless scatter within ±2. Curvature, waves, or runs of same-sign residuals reveal systematic model failure even when χ²/dof looks acceptable — the eye detects patterns a single statistic averages away.</p>
<div class="key-concept">
  <h4>Goodness of fit is falsification, quantified</h4>
  <p>χ² formalizes Popper: a model earns credibility by surviving a chance to fail. A fit with χ²/dof = 1.05 over 200 points is a model that made 200 quantitative predictions and matched every one within its stated precision.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Statistical audits use the too-good tail: Mendel's classic pea-count ratios are suspiciously close to theory (χ² far below expectation, likely a helpful assistant curating data), and Millikan's oil-drop notebooks show discarded drops. Honest error bars fail about a third of the time at the 1σ level — data that never miss are data to question.</p>
</div>`,
        },
        {
          id: "model-comparison",
          title: "Comparing Models Honestly",
          content: `
<p>Here is a trap disguised as a triumph: add a parameter to any model and χ² can only decrease — the old model is the new one with the extra parameter zeroed, so the bigger model's minimum is at least as low. Push to the limit and a polynomial of degree N − 1 threads all N points <em>exactly</em>: χ² = 0. Perfect fit; useless model. Between the points it oscillates wildly, and its predictions for new data are garbage. It has not learned the physics — it has memorized the noise. This is <strong>overfitting</strong>, and every field that fits data (physics included) has published examples of it.</p>
<pre>for p in range(1, 8):
    coef = np.polyfit(x, y, p)
    chi2 = np.sum(((y - np.polyval(coef, x))/sig)**2)
    print(p, round(chi2, 2), round(chi2 + 2*(p + 1), 2))  # AIC-style</pre>
<p>Run this on straight-line data and χ² keeps sliding as p grows — but the third column, which adds a <strong>penalty of 2 per parameter</strong> (the Akaike information criterion, AIC), bottoms out at p = 1 and rises again. That is the honest accounting: complexity must pay rent. The toolkit:</p>
<ul>
  <li><strong>Reduced χ²:</strong> dividing by N − p already penalizes parameters mildly; prefer the simpler model when χ²/dof values are comparable.</li>
  <li><strong>Significant improvement:</strong> one added parameter that is genuinely useless typically lowers χ² by about 1. A drop of 1 or 2 is bookkeeping; a drop of 20 means the new term captures real structure.</li>
  <li><strong>Information criteria:</strong> AIC = χ² + 2p (or the stricter BIC = χ² + p·ln N): choose the minimum.</li>
  <li><strong>Cross-validation, the gold standard:</strong> fit on part of the data, test on the rest. Overfitted models collapse on data they haven't seen; real models generalize. This is precisely how machine learning polices itself.</li>
</ul>
<div class="key-concept">
  <h4>Prediction is the criterion</h4>
  <p>A model's job is not to pass through data but to predict data not yet taken. Occam's razor here is theorem-shaped: among models fitting equally well, the simpler predicts better, because the extra parameters were fitting noise that will never repeat.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Fermi once dismissed a four-parameter model by quoting von Neumann: "With four parameters I can fit an elephant, and with five I can make him wiggle his trunk." In 2010 physicists took it literally, publishing an actual elephant drawn from four complex parameters — trunk wiggle included.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does least-squares fitting minimize the sum of squared residuals weighted by 1/σ_i², rather than, say, the sum of absolute deviations?",
          options: [
            "Squares are faster for computers to evaluate",
            "It is a historical convention with no deeper justification",
            "For independent Gaussian errors, minimizing this weighted sum is exactly maximizing the likelihood of the data — and the weights make precise points count more",
            "Absolute values would allow negative residuals to cancel positive ones",
          ],
          correctIndex: 2,
          explanation:
            "Each Gaussian measurement contributes probability ∝ e^(−(y−f)²/2σ²); maximizing the product over points is minimizing Σ(y−f)²/σ² — the squares come from the Gaussian's exponent, and 1/σ² weighting falls out automatically. This pedigree also exposes the method's weakness: with non-Gaussian outliers the assumption fails, and a single 5σ point (contributing 25 to χ²) can drag the whole fit.",
        },
        {
          question:
            "A quantity is computed as q = x·y, where x is measured to 3% and y to 4% (independent errors). The uncertainty in q is about:",
          options: [
            "5%, because relative errors of products add in quadrature: √(3² + 4²)",
            "7%, because relative errors add directly",
            "12%, because relative errors multiply",
            "1%, the difference of the two errors",
          ],
          correctIndex: 0,
          explanation:
            "For products and quotients the propagation formula gives (σ_q/q)² = (σ_x/x)² + (σ_y/y)² — quadrature, not straight addition, because independent errors partially cancel. Here √(9 + 16) = 5%. Straight addition (7%) would be the pessimistic bound for fully correlated errors; quadrature is correct for independent ones.",
        },
        {
          question:
            "A fit to 22 data points with 2 parameters yields χ² = 180, so χ²/dof = 9. The sound conclusion is:",
          options: [
            "the fit is excellent, since χ² is large",
            "nothing — χ² carries no information about fit quality",
            "the parameters should be reported with the fit as-is",
            "the data reject something: either the model is missing real physics, or the error bars are underestimated",
          ],
          correctIndex: 3,
          explanation:
            "A correct model with honest errors gives about one unit of χ² per degree of freedom — points missing the curve by about one error bar. Averaging 9 means points miss by ~3σ systematically: the model fails to describe the data, or the σ's are too small (both are common). The residual plot usually distinguishes them — structured residuals indict the model, uniformly inflated ones indict the error bars.",
        },
        {
          question:
            "A different fit returns χ²/dof = 0.1 — the data hug the model far more tightly than the error bars predict. The most likely explanation is:",
          options: [
            "the model is exceptionally good physics",
            "the measurement uncertainties σ_i were overestimated",
            "the experiment had too few data points to matter",
            "χ² values below 1 are impossible, so the code has a bug",
          ],
          correctIndex: 1,
          explanation:
            "Honest 1σ error bars should be missed about a third of the time; scatter ten times smaller than stated is itself statistically implausible. The routine cause is inflated σ's (which also inflate the fitted parameters' error bars); the disreputable causes include fitted noise and curated data — famously suspected in Mendel's too-perfect pea ratios. 'Too good to be true' is a quantitative verdict, not a proverb.",
        },
        {
          question:
            "Adding more parameters to a model always lowers χ². The honest ways to decide whether a more complex model is actually better include:",
          options: [
            "always choosing the model with the lowest raw χ²",
            "always choosing the model with the most parameters, since flexibility is good",
            "penalizing parameter count (e.g. AIC = χ² + 2p) or testing predictions on held-out data",
            "refitting until every residual is exactly zero",
          ],
          correctIndex: 2,
          explanation:
            "The bigger model contains the smaller as a special case, so its minimum χ² is never higher — raw χ² comparison always crowns complexity, culminating in the useless degree-(N−1) polynomial through every point. Complexity must pay rent: information criteria charge per parameter, and cross-validation asks the only question that matters — does the model predict data it has not seen? Fitting noise never generalizes.",
        },
      ],
    },
  ],
};
