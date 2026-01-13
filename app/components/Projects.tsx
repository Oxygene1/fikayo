import { ExternalLink, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Enterprise Resource Planning Implementation",
      description:
        "Led the end-to-end implementation of an ERP system for a Fortune 500 company, coordinating between 50+ stakeholders and managing a $2M budget. Delivered 3 weeks ahead of schedule with 20% cost savings.",
      image:
        "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjgyMjY4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["ERP", "Change Management", "Stakeholder Engagement"],
      duration: "12 months",
      team: "15 members",
      outcome: "20% efficiency increase",
    },
    {
      title: "Digital Transformation Initiative",
      description:
        "Orchestrated a comprehensive digital transformation strategy for a healthcare provider, including process re-engineering, system integration, and staff training. Improved patient satisfaction by 35%.",
      image:
        "https://images.unsplash.com/photo-1627634771105-08a3a12ad228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHRlYW18ZW58MXx8fHwxNzY4MTYzOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Digital Strategy", "Process Optimization", "Healthcare"],
      duration: "18 months",
      team: "25 members",
      outcome: "35% satisfaction increase",
    },
    {
      title: "Data Analytics Platform Deployment",
      description:
        "Managed the deployment of a centralized data analytics platform, conducting extensive requirements analysis and user acceptance testing. Enabled real-time decision making across 5 departments.",
      image:
        "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4MjIzNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Data Analytics", "Business Intelligence", "Agile"],
      duration: "9 months",
      team: "12 members",
      outcome: "Real-time insights",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Conducted comprehensive business analysis and led process improvement initiatives for a global supply chain operation. Reduced operational costs by 18% and improved delivery times by 25%.",
      image:
        "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4MjEyMTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Supply Chain", "Process Improvement", "Cost Optimization"],
      duration: "10 months",
      team: "18 members",
      outcome: "18% cost reduction",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-foreground)] mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--secondary-foreground)] max-w-2xl mx-auto">
            A showcase of successful projects demonstrating strategic leadership
            and measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:px-10 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-md overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-br from-[var(--primary)] to-indigo-500 bg-clip-text text-transparent mb-3 transition-colors">
                  {project.title}
                </h3>

                <p className="text-[var(--secondary-foreground)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b border-gray-200">
                  <div className="text-center">
                    <Calendar
                      size={20}
                      className="mx-auto text-blue-600 mb-1"
                    />
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {project.duration}
                    </p>
                  </div>
                  <div className="text-center">
                    <Users size={20} className="mx-auto text-blue-600 mb-1" />
                    <p className="text-xs text-gray-500">Team Size</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {project.team}
                    </p>
                  </div>
                  <div className="text-center">
                    <ExternalLink
                      size={20}
                      className="mx-auto text-blue-600 mb-1"
                    />
                    <p className="text-xs text-gray-500">Outcome</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
