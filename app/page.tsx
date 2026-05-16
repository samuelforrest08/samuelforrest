export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <img
          src="/pfp.png"
          alt="Samuel Forrest"
          className="rounded-full bg-gray-100 w-16 h-16 object-cover shrink-0"
        />
        <div>
          <h1 className="text-xl font-bold">Samuel Forrest</h1>
          <p className="text-neutral-400 text-sm mt-0.5">
            Software Developer & Student
          </p>
        </div>
      </div>

      <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
        About
      </h2>

      <div className="space-y-3 text-neutral-300 leading-relaxed text-sm">
        <p>
          I'm a 17-year-old student in the UK completing my A Levels, before
          joining Barclays in August as a Software Developer Degree Apprentice.
        </p>
        <p>
          My main interest is software development, especially building fast,
          well-designed apps that run in the browser. My core tech stack is
          Next.js, Tailwind, Supabase and TypeScript, and I use AI tools such as
          Claude Code to speed up development.
        </p>
        <p>
          Key achievements include strong GCSE results of 9999999987, an A* in
          the EPQ, and work experience at British Airways, AAIB and HUDJO. I've
          also completed freelance web development projects, done tutoring,
          volunteered in the community, and worked as CTO of Apprentadream.
        </p>
        <p>
          Outside of work I'm entrepreneurial by nature — I own over 10 domain
          names and am currently building a startup, aiming to launch by
          September 2026.
        </p>
        <p>
          In my free time I enjoy tennis, chess, watersports and the saxophone.
        </p>
      </div>

      <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-10 mb-4">
        Social Media
      </h2>

      <ul className="space-y-2 text-sm text-neutral-300">
        <li>
          View all my projects on GitHub —{" "}
          <a
            href="https://github.com/samuelforrest08"
            className="text-neutral-100 hover:underline"
          >
            @samuelforrest08
          </a>
        </li>
        <li>
          I post frequently on X —{" "}
          <a
            href="https://x.com/samuelforrest08"
            className="text-neutral-100 hover:underline"
          >
            @samuelforrest08
          </a>
        </li>
        <li>
          View my LinkedIn profile —{" "}
          <a
            href="https://www.linkedin.com/in/samuelforrest08/"
            className="text-neutral-100 hover:underline"
          >
            @samuelforrest08
          </a>
        </li>
        <li>
          Check out my Instagram —{" "}
          <a
            href="https://www.instagram.com/samuelforrest08/"
            className="text-neutral-100 hover:underline"
          >
            @samuelforrest08
          </a>
        </li>
        <li>
          View my latest YouTube videos —{" "}
          <a
            href="https://www.youtube.com/@samuelforrest08"
            className="text-neutral-100 hover:underline"
          >
            @samuelforrest08
          </a>
        </li>
      </ul>

      <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-10 mb-4">
        Contact
      </h2>

      <div className="space-y-3 text-neutral-300 leading-relaxed text-sm">
        <p>
          Feel free to contact me at{" "}
          <a
            href="mailto:samuel@daps.org.uk"
            className="text-neutral-100 hover:underline"
          >
            samuel@samuelforrest.co.uk
          </a>
          . I can usually be found online under the username{" "}
          <span className="text-neutral-100">samuelforrest08</span>.
        </p>
      </div>
    </div>
  );
}
