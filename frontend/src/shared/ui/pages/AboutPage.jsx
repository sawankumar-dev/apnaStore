import React from "react";
// import { Linkedin, Github, Mail, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";

const teamMembers = [
  {
    id: 1,
    name: "Sawan Kumar",
    role: "Founder & CEO",
    initials: "SK",
    description:
      "Visionary behind MoonStore, leading product strategy, innovation, and business growth.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:sawan@example.com",
    website: "https://moonstore.com",
  },
  {
    id: 2,
    name: "Amit Kumar Sharma",
    role: "Frontend Developer",
    initials: "AK",
    description:
      "Passionate React developer focused on building scalable, responsive, and user-friendly web applications.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:amit@example.com",
    website: "https://portfolio.com",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-transparent text-white">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
          About MoonStore
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Building the Future of
          <span className="text-emerald-400"> E-Commerce</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-8">
          MoonStore is a modern e-commerce platform designed with speed,
          simplicity, and scalability in mind. Our mission is to provide
          customers with a seamless shopping experience while empowering
          developers with clean architecture and modern technologies.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-[#0d111c] p-8">
            <h3 className="text-xl font-semibold text-emerald-400">
              🚀 Our Mission
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Deliver premium shopping experiences through modern web
              technologies and user-centric design.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0d111c] p-8">
            <h3 className="text-xl font-semibold text-emerald-400">
              💡 Our Vision
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Build scalable digital commerce platforms that simplify online
              business for everyone.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0d111c] p-8">
            <h3 className="text-xl font-semibold text-emerald-400">
              ❤️ Our Values
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Innovation, transparency, quality, teamwork, and customer
              satisfaction are at the core of everything we build.
            </p>
          </div>

        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Meet Our Team
          </h2>

          <p className="mt-3 text-slate-400">
            The people behind MoonStore.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-slate-800 bg-[#0d111c] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-emerald-700 text-3xl font-bold">
                {member.initials}
              </div>

              <h3 className="mt-6 text-center text-2xl font-bold">
                {member.name}
              </h3>

              <p className="text-center font-medium text-emerald-400">
                {member.role}
              </p>

              <p className="mt-5 text-center leading-7 text-slate-400">
                {member.description}
              </p>

              <div className="mt-8 flex justify-center gap-5">

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-slate-800 p-3 hover:bg-blue-600 transition"
                >
                  <CiLinkedin size={20} />
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-slate-800 p-3 hover:bg-black transition"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href={member.email}
                  className="rounded-lg bg-slate-800 p-3 hover:bg-red-500 transition"
                >
                  <CiMail size={20} />
                </a>

                <a
                  href={member.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-slate-800 p-3 hover:bg-emerald-500 transition"
                >
                  <CiGlobe size={20} />
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default AboutPage;