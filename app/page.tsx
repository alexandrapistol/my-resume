"use client";

import { useState } from "react";
import Image from "next/image";

type Experience = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  points: string[];
  skills: string[];
  url?: string;
};

const experience: Experience[] = [
  {
    company: "Sundhedplus",
    role: "Frontend Developer",
    dates: "Nov 2024 - Present",
    summary: "Loan management platform",
    points: [
      "Develop new features for a React-based loan management product.",
      "Partner closely with backend engineers across the product lifecycle.",
      "Improve performance and code quality across the application.",
    ],
    skills: ["React", "TypeScript", "Redux", "Vite", "SCSS", "Jest", "Docker"],
    url: "https://www.sundhedplus.dk",
  },
  {
    company: "iFOREX Romania",
    role: "Frontend Developer",
    dates: "Aug 2024 - Oct 2024",
    summary: "Online trading platform modernization",
    points: [
      "Contributed to the migration of a legacy trading platform from Knockout.js to React.",
      "Refactored features into reusable components and improved UI consistency.",
      "Delivered iterative improvements in a Scrum team.",
    ],
    skills: ["React", "Redux Toolkit", "Knockout.js", "SCSS", "Webpack"],
    url: "https://www.iforex.eu",
  },
  {
    company: "Quartz:IT",
    role: "Frontend Developer",
    dates: "Nov 2021 - Jul 2024",
    summary: "Credit and loan platform",
    points: [
      "Built and maintained flows for credit applications, loans, users, and companies.",
      "Led modernization from React class components to functional components.",
      "Introduced TypeScript and mentored a junior developer into a full-time role.",
    ],
    skills: ["React", "TypeScript", "Redux"],
    url: "https://quartzit.dk",
  },
  {
    company: "Miracle A/S",
    role: "Frontend Developer",
    dates: "Nov 2019 - Mar 2020",
    summary: "Healthcare appointment scheduling",
    points: [
      "Implemented features in an Angular 8 application for scheduling medical appointments.",
      "Maintained multiple Liferay 6 websites.",
    ],
    skills: ["Angular", "Liferay"],
    url: "https://miracle.dk",
  },
  {
    company: "Career break",
    role: "Full-time parenting",
    dates: "2020 - 2021 and 2017 - 2019",
    summary: "Family",
    points: [
      "Dedicated time to full-time parenting before returning to frontend engineering.",
    ],
    skills: [],
  },
  {
    company: "Steuerhaus",
    role: "Frontend Developer",
    dates: "Oct 2013 - May 2017",
    summary: "Liferay CMS and web development",
    points: [
      "Built Liferay themes, layouts, hooks, and responsive cross-browser websites.",
      "Mentored junior developers and led a frontend team.",
      "Led development of a React/Redux application supporting business objectives.",
    ],
    skills: ["Liferay", "React", "Redux", "jQuery", "Bootstrap"],
  },
  {
    company: "OSF Global Services",
    role: "Web Developer Intern",
    dates: "Jul 2013 - Aug 2013",
    summary: "Web development internship",
    points: [
      "Translated PSD designs into functional web pages with HTML5, CSS3, and jQuery.",
    ],
    skills: ["HTML5", "CSS3", "jQuery"],
    url: "https://osf.digital",
  },
  {
    company: "Mobile Touch",
    role: "Web Developer Intern",
    dates: "Jul 2012 - Aug 2012",
    summary: "Web development internship",
    points: [
      "Learned PHP and CodeIgniter and built a proof-of-concept application.",
    ],
    skills: ["PHP", "CodeIgniter"],
  },
];

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Angular",
  "Redux",
  "REST APIs",
  "SASS / LESS",
  "CSS",
  "HTML5",
  "Git",
  "Liferay CMS",
  "Umbraco",
  "Bootstrap",
  "jQuery",
];
const strengths = [
  "Collaboration",
  "Meticulous and organized",
  "Mentoring",
  "Accessibility",
  "Eye for design",
  "Curious learner",
  "Resourceful",
  "Adaptable",
];
const sections = [
  "About",
  "Experience",
  "Portfolio",
  "Skills",
  "Education",
  "Contact",
];
const Arrow = () => <span aria-hidden="true">↗</span>;

const portfolio = [
  {
    category: "Fintech",
    title: "Sundhed+",
    description:
      "React-based fintech platform supporting credit-application onboarding, role-based loan management, payment flows and a client portal, with a focus on feature delivery, maintainability, and performance",
    image: "/sundhedplus-mobile.webp",
    imageAlt: "Sundhed+ mobile payment approval interface",
    bgColor: "bg-[#e6f0ed]",
    tags: ["React 18", "TypeScript", "Redux", "Formik"],
    tagColor: "bg-teal-50 text-teal-800",
    categoryColor: "text-[#4c857b]",
  },
  {
    category: "Independent project",
    title: "KydSync",
    description:
      "A personal logistics hub for a single parent that centralizes kids' schedules, AI-assisted meal planning, WhatsApp chat summarization, and an appointments/homework tracker — built with Next.js, Node.js, and Tailwind",
    image: "/kydsync-dashboard.png",
    imageAlt: "KydSync family schedule dashboard",
    bgColor: "bg-[#fff7ed]",
    tags: ["React", "Next.js", "Express", "Prisma", "Supabase"],
    tagColor: "bg-[#fff1e8] text-[#a85d42]",
    categoryColor: "text-[#d48a6c]",
  },
  {
    category: "Enterprise web",
    title: "Enterprise platforms",
    description:
      "Enterprise portals and websites, custom Liferay themes, layouts, templates and hooks, alongside mentoring frontend developers and leading collaborative delivery.",
    isSpecial: true,
    tags: ["Liferay", "Apache Velocity", "CMS", "jQuery", "Responsive UI", "Mentoring", "Frontend leadership"],
    tagColor: "bg-white/70 text-[#315552]",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#f8faf9]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#top"
            className="font-black tracking-[-0.08em]"
            onClick={() => setOpen(false)}
          >
            ALP<span className="text-teal-700">.</span>
          </a>
          <button
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            Menu
          </button>
          <nav
            className="hidden gap-6 md:flex"
            aria-label="Main navigation"
          >
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-600 hover:text-teal-700"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        {open && (
          <nav
            className="border-t border-slate-200 px-5 py-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3">
              {sections.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold text-slate-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
      <section
        id="top"
        className="overflow-hidden border-b border-[#d6e3df] bg-[#edf5f1]"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div className="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-[10rem] bg-[#c9ddd6] sm:inset-x-12" />
            <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-[#f0c8b5]/80 blur-sm" />
            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-[7rem_7rem_1.5rem_1.5rem] border-8 border-[#f7f3ea]
                shadow-[0_28px_60px_rgba(56,91,85,.2)]`}
            >
              <Image
                src="/alp.jpg"
                alt="Alexandra Pistol"
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 42vw"
                className="object-cover object-[31%_35%]"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/70 bg-[#fdfaf5]/90 px-4 py-3 shadow-lg backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[.13em] text-[#4c857b]">
                10+ years
              </p>
              <p className="mt-1 text-sm font-bold text-[#315552]">
                Frontend experience
              </p>
            </div>
          </div>
          <div className="relative z-10 self-center lg:order-1">
            <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#4c857b]">
              Frontend Engineer · Iasi, Romania
            </p>
            <h1 className="text-5xl font-black leading-[.95] tracking-[-.075em] text-[#1e3c3d] sm:text-7xl">
              Alexandra<br />
              Pistol<span className="text-[#d48a6c]">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#526c6a]">
              Frontend Engineer with 10+ years of experience building production
              web applications, modernizing codebases, and making clear,
              accessible interfaces.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:alexandra.pistol@gmail.com"
                className={`rounded-full bg-[#4c857b] px-5 py-3 text-sm font-bold
                  text-white transition hover:bg-[#3d6d65]`}
              >
                Get in touch <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/alexandrapistol/"
                target="_blank"
                rel="noreferrer"
                className={`rounded-full border border-[#9db8b2] px-5 py-3 text-sm
                  font-bold text-[#315552] transition hover:border-[#4c857b]
                  hover:text-[#3d6d65]`}
              >
                LinkedIn <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-20 lg:grid-cols-[.55fr_1.45fr] lg:px-8"
      >
        <Label number="01" title="About" />
        <div>
          <h2 className="text-3xl font-black tracking-[-.05em] sm:text-4xl">
            A thoughtful engineer with a product mindset.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I build and maintain applications with React, TypeScript, JavaScript,
            and modern frontend practices. My work spans fintech, healthcare, and
            enterprise applications - from new features and API integration to
            legacy modernization and mentoring.
          </p>
        </div>
      </section>
      <section id="experience" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <Label number="02" title="Experience" />
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-.05em] sm:text-4xl">
            Building reliable products, one meaningful improvement at a time.
          </h2>
          <div className="mt-12 divide-y divide-slate-200">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.dates}`}
                className="grid gap-5 py-9 lg:grid-cols-[.55fr_1.45fr]"
              >
                <div>
                  <p className="text-sm font-bold">{job.dates}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.summary}</p>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-[-.03em]">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-medium text-teal-700">
                        {job.company}
                      </p>
                    </div>
                    {job.url && (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${job.company}`}
                        className={`rounded-full border border-slate-200 px-3
                          py-1.5 hover:border-teal-700 hover:text-teal-700`}
                      >
                        <Arrow />
                      </a>
                    )}
                  </div>
                  <ul className="mt-5 space-y-2 text-[15px] leading-6 text-slate-600">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {job.skills.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full bg-teal-50 px-3 py-1 text-xs
                            font-bold text-teal-800`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="portfolio" className="border-b border-slate-200 bg-[#f8faf9]">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <Label number="03" title="Portfolio" />
          <div className="mt-4 flex max-w-3xl flex-col gap-3">
            <h2 className="text-3xl font-black tracking-[-.05em] sm:text-4xl">
              Selected product work.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              A small selection of work across loan management, family planning,
              and enterprise web platforms.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolio.map((item) =>
              item.isSpecial ? (
                <article
                  key={item.title}
                  className="flex min-h-full flex-col rounded-3xl border border-[#d6e3df] bg-[#dcece8] p-6 shadow-sm"
                >
                  <div className="flex h-72 items-end rounded-2xl bg-[#4c857b] p-6">
                    <div>
                      <p
                        className={`text-sm font-bold uppercase
                          tracking-[.14em] ${item.categoryColor}`}
                      >
                        {item.category}
                      </p>
                      <p
                        className="mt-3 text-4xl font-black leading-none
                          tracking-[-.07em] text-white"
                      >
                        {item.title}
                        <br />
                        work<span className="text-[#f0c8b5]">.</span>
                      </p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-2xl font-black tracking-[-.04em]">
                      Enterprise platforms
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-xs
                            font-bold ${item.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ) : (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-3xl border border-[#d6e3df] bg-white shadow-sm"
                >
                  <div className={`relative h-72 overflow-hidden ${item.bgColor} p-6`}>
                    <Image
                      src={item.image || ""}
                      alt={item.imageAlt || ""}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain object-center p-5 transition
                        duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p
                      className={`text-sm font-bold uppercase
                        tracking-[.14em] ${item.categoryColor}`}
                    >
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-xs
                            font-bold ${item.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-20 lg:grid-cols-[.55fr_1.45fr] lg:px-8"
      >
        <Label number="04" title="Skills" />
        <div>
          <h2 className="text-3xl font-black tracking-[-.05em]">
            Tools I reach for.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border border-slate-300 px-4 py-2
                  text-sm font-semibold text-slate-600`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {strengths.map((strength, index) => (
              <div
                key={strength}
                className="border-t border-slate-300 py-4 font-semibold"
              >
                <span className="mr-3 text-sm text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {strength}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="education"
        className="border-y border-slate-200 bg-teal-50"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 lg:grid-cols-[.55fr_1.45fr] lg:px-8">
          <Label number="05" title="Education" />
          <div className="grid gap-9">
            <div>
              <p className="text-sm font-bold text-teal-700">2010 - 2013</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-.04em]">
                Bachelor&apos;s Degree, Computer Science
              </h2>
              <p className="mt-2 text-slate-600">
                Universitatea Alexandru Ioan Cuza, Iasi
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-teal-700">Mar 2019</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-.04em]">
                Microsoft 70-480: Programming in HTML5 with JavaScript & CSS3
              </h2>
              <p className="mt-2 text-slate-600">
                Validated skills in document structures, program flow, data
                access and security, and CSS3 applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.3fr_.7fr] lg:px-8">
          <div>
            <Label number="06" title="Contact" dark />
            <h2 className="mt-5 text-4xl font-black tracking-[-.06em] sm:text-6xl">
              Let&apos;s build something useful.
            </h2>
          </div>
          <div className="self-end space-y-4 text-lg">
            <a
              className="block border-b border-white/20 pb-3 hover:text-teal-200"
              href="mailto:alexandra.pistol@gmail.com"
            >
              alexandra.pistol@gmail.com <Arrow />
            </a>
            <a
              className="block border-b border-white/20 pb-3 hover:text-teal-200"
              href="https://www.linkedin.com/in/alexandrapistol/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/alexandrapistol <Arrow />
            </a>
            <p className="text-sm text-slate-300">
              Iasi, Romania · English (fluent), Romanian (native), French
              (elementary)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Label({
  number,
  title,
  dark = false,
}: {
  number: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-sm font-bold uppercase tracking-[.18em] ${
        dark ? "text-teal-200" : "text-teal-700"
      }`}
    >
      {number} / {title}
    </p>
  );
}
