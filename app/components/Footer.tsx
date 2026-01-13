"use client";

export function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--primary-foreground)] py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fikayo Famakinwa</h3>
            <p className="text-[var(--secondary-foreground)]">
              Project Manager & Business Analyst specializing in strategic
              leadership and digital transformation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[var(--secondary-foreground)]">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[var(--secondary-foreground)]">
              <li>Project Management</li>
              <li>Business Analysis</li>
              <li>Process Optimization</li>
              <li>Digital Transformation</li>
              <li>Agile Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--secondary-foreground)] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Fikayo Famakinwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
