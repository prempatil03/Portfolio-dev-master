import Link from 'next/link';
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

import Image from 'next/image';

import { 
  EnvelopeIcon, 
  CodeBracketIcon,
  CommandLineIcon,
  BriefcaseIcon,
  ArrowTopRightOnSquareIcon  // Add this import
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen">
       {/* Header */}
       <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
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
    <p className="text-sm uppercase tracking-wider text-gray-600">
      Developer Engineer
    </p>
    <h1 className="text-3xl font-light text-gray-900">
      Premanand Patil
    </h1>
    <p className="text-gray-600 text-lg max-w-lg">
      Full Stack Developer & UI/UX Design Enthusiast
    </p>

    <IntroButtons />
  </div>
  </FadeInUp>

</section>

  <div className="w-full border-t border-gray-200 my-8" />

{/* About Section */}
<section id="about" className="py-12 scroll-mt-20">
<FadeInUp>

  <h2 className="text-2xl mb-8">About Me</h2>
  </FadeInUp>
  <SlideIn delay={0.2}>
  <div className="space-y-6 text-gray-700">
    <p>
      Hello! I&apos;m Premanand, a Developer Engineer based in India. I enjoy creating things that live on the internet, 
      whether that be websites, applications, or anything in between. My goal is to always build products that provide 
      pixel-perfect, performant experiences.
    </p>
    <p>
      I graduated from Savitribai Phule Pune University with a degree in Information Technology, where I honed my coding skills 
      and developed a passion for web development. Currently, I&apos;m focused on building accessible, human-centered 
      products at Suntex Axpress.
    </p>
    {/* Resume Download Button */}
    <ResumeButton />
    <p>
      Here are a few technologies I&apos;ve been working with recently:
    </p>
    <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
      <li>JavaScript (ES6+)</li>
      <li>React.js</li>
      <li>Next.js</li>
      <li>ASP.NET</li>
      <li>Node.js</li>
      <li>SQL Server</li>
    </ul>
  </div>
  </SlideIn>

</section>

<div className="w-full border-t border-gray-200 my-8" />

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
                  <BriefcaseIcon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                      Developer Engineer
                    </h3>
                    <span className="text-sm text-gray-500">• Suntex Axpress</span>
                  </div>
                  <p className="text-sm text-gray-600">2023 - Present</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                    <li>Developed web forms using ASP.NET framework</li>
                    <li>Implemented responsive designs using HTML, CSS, and JavaScript</li>
                    <li>Collaborated with team members using Git version control</li>
                    <li>Maintained and optimized existing web applications</li>
                  </ul>
                </div>
              </div>
            </div>
            </SlideIn>

            <SlideIn delay={0.3}>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <BriefcaseIcon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                      Web Development Intern
                    </h3>
                    <span className="text-sm text-gray-500">• Previous Company</span>
                  </div>
                  <p className="text-sm text-gray-600">2022 - 2023</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                    <li>Assisted in developing web applications</li>
                    <li>Learned and implemented modern web technologies</li>
                    <li>Participated in code reviews and team meetings</li>
                  </ul>
                </div>
              </div>
            </div>
            </SlideIn>

          </div>
        </section>

        <div className="w-full border-t border-gray-200 my-8" />

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
        <FadeInUp>

        <h2 className="text-2xl mb-8">Skills</h2>
        </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SlideIn direction="left" delay={0.2}>

            <div className="space-y-4">
              <h3 className="font-medium">Frontend Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>HTML, CSS, JavaScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>React.js, Next.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>Tailwind CSS, Bootstrap</span>
                </li>
              </ul>
            </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.3}>

            <div className="space-y-4">
              <h3 className="font-medium">Backend Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CommandLineIcon className="h-5 w-5" />
                  <span>ASP.NET, C#</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CommandLineIcon className="h-5 w-5" />
                  <span>SQL Server, MySQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CommandLineIcon className="h-5 w-5" />
                  <span>RESTful APIs</span>
                </li>
              </ul>
            </div>
            </SlideIn>
          </div>
        </section>

        <div className="w-full border-t border-gray-200 my-8" />

        {/* Projects Section - Updated with Modal */}
        <ProjectsSection />

        <div className="w-full border-t border-gray-200 my-8" />

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
        <h2 className="text-2xl mb-8">Get In Touch</h2>
  <div className="space-y-12">
    <div className="max-w-2xl">
      <p className="text-gray-700 mb-8">
        I&apos;m currently looking for new opportunities. Whether you have a question or just 
        want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <ContactForm />
    </div>
    
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Connect With Me</h3>
      <SocialLinks />
    </div>

    <div className="w-full border-t border-gray-200 my-8" />

   {/* Add the Footer at the bottom */}
   <Footer />
    </div>
</section>
      </main>
    </div>
  );
}