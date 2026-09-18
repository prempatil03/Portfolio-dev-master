import MobileNav from '/components/MobileNav';
import ProjectsSection from '/components/ProjectsSection';
import ContactForm from '/components/ContactForm';
import SocialLinks from '/components/SocialLinks';
import Footer from '../components/Footer';
import Logo from'../components/Logo';
import Navigation from '../components/Navigation';
import IntroButtons from '../components/IntroButtons';
import { FadeInUp, SlideIn, ScaleIn } from '../components/animations/ScrollAnimation';
import ResumeButton from '../components/ResumeButton';
import CertificatesSection from '../components/CertificatesSection';

import Image from 'next/image';

import { 
  CodeBracketIcon,
  CommandLineIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen">
       {/* Header */}
       <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 dark:bg-gray-950/80 border-b border-transparent dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <Navigation />
          <MobileNav />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pt-24">
  {/* Intro Section */}
<section id="home" className="pt-24 pb-12 flex flex-col items-center scroll-mt-24">
<ScaleIn>
  <div className="relative w-32 h-32 mb-6">
    <Image
      src="/profile.jpeg"
      alt="Premanand Patil"
      width={128}
      height={128}
      className="rounded-full object-cover"
      priority
    />
  </div>
  </ScaleIn>
  
  <FadeInUp delay={0.2}>
  <div className="text-center space-y-4">
    <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400">
      .NET Full Stack Developer
    </p>
    <h1 className="text-3xl font-light text-gray-900 dark:text-gray-100">
      Premanand Patil
    </h1>
    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg">
      Building enterprise ERP, HRMS, and portal solutions with C#, ASP.NET, and SQL Server
    </p>

    <IntroButtons />
  </div>
  </FadeInUp>

</section>

  <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

{/* About Section */}
<section id="about" className="py-12 scroll-mt-20">
<FadeInUp>

  <h2 className="text-2xl mb-8">About Me</h2>
  </FadeInUp>
  <SlideIn delay={0.2}>
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <p>
      Hello! I&apos;m Premanand, a .NET Full Stack Developer based in Pune with 2+ years of experience
      designing and developing enterprise applications including ERP, HRMS, Inventory Management,
      and Customer Portal solutions.
    </p>
    <p>
      I work with C#, ASP.NET MVC, SQL Server, JavaScript, and REST APIs, with a focus on
      authentication, authorization, SQL optimization, and responsive UI. I also use AI-assisted
      IDEs and GitHub Copilot to speed up coding, debugging, and refactoring while keeping
      production-quality standards. I graduated from Savitribai Phule Pune University
      (Information Technology) and currently build products at Suntek Axpress.
    </p>
    {/* Resume Download Button */}
    <ResumeButton />
    <p>
      Here are a few technologies I&apos;ve been working with recently:
    </p>
    <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
      <li>C# / ASP.NET MVC</li>
      <li>SQL Server</li>
      <li>JavaScript</li>
      <li>REST APIs</li>
      <li>Bootstrap / jQuery</li>
      <li>Git / GitHub</li>
    </ul>
  </div>
  </SlideIn>

</section>

<div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

{/* Experience Section */}
<section id="experience" className="py-12 scroll-mt-20">
<FadeInUp>
        <h2 className="text-2xl mb-8">Experience</h2>
        </FadeInUp>
          <div className="space-y-12">
          <SlideIn delay={0.2}>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <BriefcaseIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Developer Engineer
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• Suntek Axpress</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2024 – Present</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-4">
                    <li>Leading development and maintenance of ERP and HRMS systems for enterprise operations</li>
                    <li>Designed and implemented Inventory Management with real-time tracking functionality</li>
                    <li>Built secure Customer Portal with authentication, authorization, and reporting</li>
                    <li>Designed and integrated RESTful APIs; optimized SQL Server queries and stored procedures</li>
                    <li>Developed responsive UI modules using HTML5, CSS3, JavaScript, Bootstrap, and jQuery</li>
                    <li>Used AI-assisted IDEs and GitHub Copilot to accelerate feature development and debugging</li>
                  </ul>
                </div>
              </div>
            </div>
            </SlideIn>

            <SlideIn delay={0.3}>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <BriefcaseIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      UX/UI Intern
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• Kartexa</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Feb 2023 – May 2023</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-4">
                    <li>Designed modern UI/UX layouts using Figma and Adobe XD</li>
                    <li>Built interactive prototypes for payment workflows</li>
                    <li>Conducted user research and improved interfaces based on feedback</li>
                    <li>Collaborated with developers for accurate frontend implementation</li>
                  </ul>
                </div>
              </div>
            </div>
            </SlideIn>

          </div>
        </section>

        <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
        <FadeInUp>

        <h2 className="text-2xl mb-8">Skills</h2>
        </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SlideIn direction="left" delay={0.2}>

            <div className="space-y-4">
              <h3 className="font-medium">Frontend & Design</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>HTML5, CSS3, JavaScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>Bootstrap, jQuery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>Figma, Adobe XD, Responsive Design</span>
                </li>
              </ul>
            </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.3}>

            <div className="space-y-4">
              <h3 className="font-medium">Backend & Tools</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <CommandLineIcon className="h-5 w-5" />
                  <span>C#, .NET Framework, ASP.NET MVC</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CommandLineIcon className="h-5 w-5" />
                  <span>SQL Server, Stored Procedures, REST APIs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CommandLineIcon className="h-5 w-5" />
                  <span>Git, GitHub, AI-assisted IDE / GitHub Copilot</span>
                </li>
              </ul>
            </div>
            </SlideIn>
          </div>
        </section>

        <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Education & Learning */}
        <section id="education" className="py-12 scroll-mt-20">
          <FadeInUp>
            <h2 className="text-2xl mb-8">Education & Learning</h2>
          </FadeInUp>
          <div className="space-y-8">
            <SlideIn delay={0.2}>
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <AcademicCapIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-2">
                      <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Bachelor of Engineering (Information Technology)
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">• Savitribai Phule Pune University</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2017 – 2022 · CGPA: 7.62 / 10.0</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Coursework: Data Structures, DBMS, Web Technologies, Software Engineering
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
            <SlideIn delay={0.3}>
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <AcademicCapIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-2">
                      <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        DevOps Training
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">• Edureka</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Covered Docker, CI/CD pipelines, cloud fundamentals, and deployment automation.
                      Practical project repos will be added later.
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>

        <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

        <CertificatesSection />

        <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Projects Section - Updated with Modal */}
        <ProjectsSection />

        <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
        <h2 className="text-2xl mb-8">Get In Touch</h2>
  <div className="space-y-12">
    <div className="max-w-2xl">
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Based in Pune · Open to new opportunities. Whether you have a question or just
        want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <ContactForm />
    </div>
    
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Connect With Me</h3>
      <SocialLinks />
    </div>

    <div className="w-full border-t border-gray-200 dark:border-gray-800 my-8" />

   {/* Add the Footer at the bottom */}
   <Footer />
    </div>
</section>
      </main>
    </div>
  );
}
