import { Briefcase, GraduationCap } from "lucide-react";
import { BubbleBackground } from "./background/Bubble";

export function Experience() {
  const workExperience = [
    {
      title: "Senior Project Manager",
      company: "Tech Solutions Global",
      period: "2021 - Present",
      description:
        "Leading multiple high-impact projects with budgets exceeding $5M. Implementing agile methodologies and driving digital transformation initiatives across the organization.",
      achievements: [
        "Managed 15+ cross-functional teams",
        "Achieved 98% on-time delivery rate",
        "Reduced project costs by 22% through optimization",
      ],
    },
    {
      title: "Business Analyst & Project Manager",
      company: "Innovation Corp",
      period: "2018 - 2021",
      description:
        "Spearheaded business analysis efforts and managed end-to-end project delivery. Collaborated with C-level executives to align projects with strategic objectives.",
      achievements: [
        "Delivered 30+ successful projects",
        "Improved stakeholder satisfaction by 40%",
        "Implemented new BA frameworks",
      ],
    },
    {
      title: "Business Analyst",
      company: "Enterprise Systems Ltd",
      period: "2016 - 2018",
      description:
        "Conducted requirements gathering, process modeling, and gap analysis for enterprise-level clients. Facilitated workshops and created comprehensive documentation.",
      achievements: [
        "Analyzed and documented 50+ business processes",
        "Reduced requirements defects by 35%",
        "Trained 20+ team members on BA best practices",
      ],
    },
  ];

  const education = [
    {
      degree: "Project Management Professional (PMP)",
      institution: "Project Management Institute",
      period: "2020",
    },
    {
      degree: "Certified Business Analysis Professional (CBAP)",
      institution: "IIBA",
      period: "2019",
    },
    {
      degree: "Master of Business Administration",
      institution: "University of Business Excellence",
      period: "2014 - 2016",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Tech University",
      period: "2010 - 2014",
    },
  ];

  return (
    <section id="experience">
      <BubbleBackground>
        <div className="container py-20 mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">
              Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-foreground)] mb-4">
              Experience & Education
            </h2>
            <p className="text-[var(--secondary-foreground)] max-w-2xl mx-auto">
              A career built on continuous growth, learning, and delivering
              exceptional results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-[var(--primary)] to-indigo-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Work Experience
                </h3>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-300"
                  >
                    <div className="absolute w-4 h-4 bg-gradient-to-br from-[var(--primary)] to-indigo-500 rounded-full -left-[9px] top-0"></div>
                    <div className="bg-[var(--primary-foreground)] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="mb-2">
                        <h4 className="text-xl font-bold text-gray-900">
                          {job.title}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {job.company}
                        </p>
                        <p className="text-gray-500 text-sm">{job.period}</p>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-blue-600 mr-2">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-[var(--primary)] to-indigo-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Education & Certifications
                </h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-indigo-300"
                  >
                    <div className="absolute w-4 h-4 bg-gradient-to-br from-[var(--primary)] to-indigo-500 rounded-full -left-[9px] top-0"></div>
                    <div className="bg-[var(--primary-foreground)] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-indigo-600 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 text-sm">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BubbleBackground>
    </section>
  );
}
