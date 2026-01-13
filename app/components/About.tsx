import { Award, Target, Users, TrendingUp } from "lucide-react";

export function About() {
  const stats = [
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Teams Led", value: "15+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-foreground)]">
                Driving Success Through Strategic Leadership
              </h2>
            </div>

            <div className="space-y-4 text-[var(--secondary-foreground)] leading-relaxed">
              <p>
                With over 8 years of experience in project management and
                business analysis, I specialize in bridging the gap between
                business objectives and technical execution. My approach
                combines strategic thinking with hands-on implementation to
                deliver measurable results.
              </p>
              <p>
                I excel in stakeholder management, process optimization, and
                data-driven decision making. My track record includes
                successfully leading cross-functional teams, implementing agile
                methodologies, and delivering complex projects on time and
                within budget.
              </p>
              <p>
                Certified in PMP, CBAP, and Agile methodologies, I bring a
                comprehensive toolkit to every project. Whether it's defining
                project scope, conducting requirements analysis, or managing
                change initiatives, I'm committed to driving organizational
                success.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a
                href="#"
                className="bg-gradient-to-br from-[var(--primary)] to-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-[var(--primary-foreground)] p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-[var(--primary)] to-indigo-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
