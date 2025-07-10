export default function ProjectCard({ title, description, image, techIcons, link }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
            <div className="flex gap-2 mb-4">
                {techIcons.map((icon, idx) => (
                    <img key={idx} src={icon} alt="tech" className="w-6 h-6" />
                ))}
            </div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
            >
                View Project
            </a>
        </div>
    );
}
