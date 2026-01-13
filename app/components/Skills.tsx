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
  Settings
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Project Management',
      icon: Target,
      skills: [
        { name: 'Agile & Scrum', level: 95 },
        { name: 'Risk Management', level: 90 },
        { name: 'Stakeholder Management', level: 95 },
        { name: 'Resource Planning', level: 88 },
      ],
    },
    {
      title: 'Business Analysis',
      icon: BarChart3,
      skills: [
        { name: 'Requirements Gathering', level: 95 },
        { name: 'Process Modeling', level: 90 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Gap Analysis', level: 92 },
      ],
    },
    {
      title: 'Technical Skills',
      icon: Settings,
      skills: [
        { name: 'JIRA & Confluence', level: 90 },
        { name: 'MS Project', level: 85 },
        { name: 'SQL & Power BI', level: 80 },
        { name: 'Tableau', level: 75 },
      ],
    },
  ];

  const coreCompetencies = [
    { icon: Users, label: 'Team Leadership' },
    { icon: CheckCircle2, label: 'Quality Assurance' },
    { icon: TrendingUp, label: 'Strategic Planning' },
    { icon: FileText, label: 'Documentation' },
    { icon: Lightbulb, label: 'Problem Solving' },
    { icon: Database, label: 'Data Management' },
    { icon: GitBranch, label: 'Change Management' },
    { icon: Calendar, label: 'Time Management' },
    { icon: MessageSquare, label: 'Communication' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Competencies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
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

        {/* Core Competencies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreCompetencies.map((competency, index) => {
              const Icon = competency.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon size={24} />
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{competency.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
