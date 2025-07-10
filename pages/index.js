import Head from 'next/head';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
// import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Van Brantley | Data Analyst</title>
      </Head>
      <Navbar />
      <main className="p-6">
        <section className="h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 transition-colors duration-300">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Van Brantley</h1>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Turning data into insight through analysis and storytelling
          </p>
          <a href="#projects" className="animate-bounce mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black-600 dark:text-white-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

        </section>

        <section id="projects" className="py-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Personal Finance Dashboard"
              description="Excel template designed to help you take control of your finances with clarity and insight."
              image="/images/budget-icon.png"
              techIcons={['/images/excel.jpg']}
              link="https://drive.google.com/drive/folders/1uLYHniJfvrdoWd5NXMsbgfsvkM32ZfnR?usp=sharing"
            />
            <ProjectCard
              title="NYC Rent Explorer"
              description="Interactive map-based dashboard designed to make New York City rent data easy to explore and analyze."
              image="/images/rent-icon.png"
              techIcons={['/images/python.webp', '/images/pandas.png', '/images/streamlit.png']}
              link="https://nyc-rent-explorer.streamlit.app/"
            />
          </div>
        </section>
      </main>
      {/* <ThemeToggle /> */}
    </>
  );
}
