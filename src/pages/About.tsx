export function About() {
  return (
    <div className="container prose prose-neutral max-w-3xl py-10">
      <h1>About LATAM Leaderboard</h1>
      <p>
        LATAM Leaderboard is a community initiative dedicated to establishing task-oriented, transparent evaluation standards for AI systems serving Latin America. We're helping build the engine to measure real work, not just language fluency.
      </p>
      <p>
        LATAM Leaderboard is more than a ranking system, it's the foundation for establishing our region as a global AI innovation hub. Whether you're a researcher, developer, or AI enthusiast, there's a place for you in building these evaluation standards.
      </p>

      <h2>Our Mission</h2>
      <p>
        We create rigorous, region-specific, task-oriented benchmarks, in Spanish and Portuguese and across LATAM industries, so researchers, developers, and companies can train, choose, and ship models that actually move the needle in production.
      </p>

      <h2>Why This Matters</h2>
      <h3>From Culture to Capability</h3>
      <p>
        AI evaluation has been dominated by English-centric benchmarks that fail to capture the nuanced performance requirements of Latin American markets. We're changing that by creating rigorous, region-specific evaluation standards that empower our community to build and choose AI solutions with confidence.
      </p>
      <p>
        Capturing regional idiosyncrasies is essential but not sufficient. The main bottleneck is evaluation: without precise, task-level signals, models can't reliably learn instructions, follow constraints, or deliver production outcomes.
      </p>
      <h3>Signals for Learning (and RL)</h3>
      <p>
        As training shifts toward reinforcement and feedback-driven methods, we need clear, auditable success criteria. Our benchmarks are designed so their results can serve as training/validation signals—making "what good looks like" explicit for LATAM tasks.
      </p>
      <h3>Bridging the Evaluation Gap</h3>
      <p>
        High-quality evaluations in Spanish and Portuguese are scarce, especially for concrete tasks. That gap blocks informed decisions and slows model progress for real LATAM use cases.
      </p>

      <h2>How We Evaluate Models</h2>
      <p>We run publicly accessible benchmarks based on multiple forks of lm-evaluation-harness, focusing on:</p>
      <ul>
        <li>Task definitions with acceptance criteria (what counts as success).</li>
        <li>Reproducible setups (versioned configs, seeds, and data).</li>
        <li>Outcome-first scoring (task success plus supporting metrics appropriate to each task).</li>
        <li>Transparent reports (what the benchmark covers—and what it doesn't).</li>
      </ul>

      <h3>Evolving Standards</h3>
      <ul>
        <li>Phase 1: Comprehensive language understanding benchmarks.</li>
        <li>Phase 2: Real-world task evaluation (e.g., translation, transcription, summarization, instruction following, and structured outputs).</li>
        <li>Phase 3: Community-contributed benchmarks and specialized datasets, with feedback formats suitable for training and RL workflows.</li>
      </ul>

      <h2>Community Collaboration</h2>
      <h3>For AI Product Managers (AI PMs)</h3>
      <p>
        Translate business outcomes into benchmarks and training signals. Define what "good" means so models can be steered toward real KPIs.
      </p>
      <h3>For Researchers &amp; Universities</h3>
      <p>
        Contribute benchmarks, methodologies, and datasets. Help set academic standards that align with real regional needs.
      </p>
      <h3>For Model Developers</h3>
      <p>
        Showcase model performance on region-specific tasks. Get actionable insight into strengths, weaknesses, and where to focus further training.
      </p>
      <h3>For Companies &amp; Practitioners</h3>
      <p>
        Access reliable performance data to guide implementation. Propose your actual tasks—we'll help express them as clear benchmarks with acceptance criteria.
      </p>

      <h2>Our Commitment</h2>
      <ul>
        <li><strong>Open Science:</strong> Benchmarks, code, and results are public by default.</li>
        <li><strong>Academic Rigor:</strong> Transparent methodology and careful scope—no leaderboard theater.</li>
        <li><strong>Regional Focus:</strong> Built around LATAM languages and the tasks that drive productivity.</li>
        <li><strong>Community Ownership:</strong> We maintain the infrastructure; the community shapes the standards.</li>
      </ul>

      <h2>Help Build Latin America's AI Future</h2>
      <p>
        LATAM Leaderboard is more than a ranking, it's the evaluation layer that lets our region train and deploy systems that solve real problems.
      </p>

      <h2>Ready to contribute?</h2>
      <p>
        LATAM Leaderboard is proudly supported by compute infrastructure from Surus, with development and methodology contributions from the broader LATAM AI community.
      </p>
    </div>
  )
}



