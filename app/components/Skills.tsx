import {
  BarChart3,
  Users,
  CheckCircle2,
  TrendingUp,
  FileText,
  Lightbulb,
  Database,
  GitBranch,
  Calendar,
  MessageSquare,
  Target,
  Settings,
} from "lucide-react";
import { BubbleBackground } from "./background/Bubble";

export function Skills() {
  const skillCategories = [
    {
      title: "Project Management",
      icon: Target,
      skills: [
        { name: "Agile & Scrum", level: 95 },
        { name: "Risk Management", level: 90 },
        { name: "Stakeholder Management", level: 95 },
        { name: "Resource Planning", level: 88 },
      ],
    },
    {
      title: "Business Analysis",
      icon: BarChart3,
      skills: [
        { name: "Requirements Gathering", level: 95 },
        { name: "Process Modeling", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "Gap Analysis", level: 92 },
      ],
    },
    {
      title: "Technical Skills",
      icon: Settings,
      skills: [
        { name: "JIRA & Confluence", level: 90 },
        { name: "MS Project", level: 85 },
        { name: "SQL & Power BI", level: 80 },
        { name: "Tableau", level: 75 },
      ],
    },
  ];
  return (
    <section id="skills" className=" bg-[var(--background)]">
      <BubbleBackground>
        <div className="container mx-auto py-20 px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-foreground)] mb-4">
              Skills & Competencies
            </h2>
            <p className="text-[var(--secondary-foreground)] max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-[var(--primary-foreground)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-[var(--primary)] to-indigo-500 transition-all text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-br from-[var(--primary)] to-indigo-500 transition-all h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BubbleBackground>
    </section>
  );
}
