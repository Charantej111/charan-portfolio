export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    color: string;
    // Extended details for Case Study
    overview?: string;
    problem?: string;
    solution?: string;
    tools?: string[];
    features?: string[];
    results?: string;
    link?: string;
    screens?: string[];
}

export const projects: Project[] = [
    {
        id: 'ofzen',
        title: 'Ofzen',
        subtitle: 'Company Website',
        category: 'Web Design',
        description:
            'A modern marketing website with strong visual hierarchy, smooth animations, and conversion-focused design.',
        image: '/project_ofzen.jpg',
        tags: ['Figma', 'Web Design', 'Responsive'],
        color: '#FF6B6B',
        overview: 'Ofzen required a digital presence that reflected their innovative approach to wellness. The goal was to build a site that felt organic yet modern.',
        problem: 'The previous website was outdated, non-responsive, and failed to communicate the brand values effectively, leading to high bounce rates.',
        solution: 'We designed a fluid, nature-inspired interface with bio-morphic shapes and smooth scroll animations to evoke a sense of calm and flow.',
        tools: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
        features: [
            'Custom scroll animations',
            'Interactive service cards',
            'Mobile-first responsive layout',
            'Fast loading performance'
        ],
        results: 'Increased user engagement by 40% and doubled the inquiry rate within the first month of launch.',
        link: 'https://ofzen.in/',
        screens: ['/ofzen_screen1.jpg', '/ofzen_screen2.jpg', '/ofzen_screen3.jpg']
    },
    {
        id: 'meatbox',
        title: 'MeatBox',
        subtitle: 'Mobile App',
        category: 'Mobile Design',
        description:
            'Fast, fresh ordering experience with clean categories and streamlined checkout.',
        image: '/project_meatbox.jpg',
        tags: ['Mobile App', 'iOS', 'Android'],
        color: '#4ECDC4',
        overview: 'A niche food delivery app specializing in fresh meat delivery, prioritizing speed and freshness.',
        problem: 'Generic food delivery apps didn\'t cater to the specific needs of fresh meat buyers, such as cut selection and delivery timing.',
        solution: 'Designed a specialized interface allowing users to select cuts, weight, and precise delivery slots to ensure freshness.',
        tools: ['React Native', 'Redux', 'Figma'],
        features: [
            'Custom cut selection UI',
            'Live delivery tracking',
            'Subscription for regular deliveries',
            'Recipe suggestions'
        ],
        results: 'Achieved 10k+ downloads in the first 3 months with a 4.8-star average rating.'
    },
    {
        id: 'catering',
        title: 'Catering Service',
        subtitle: 'Booking Platform',
        category: 'Web Design',
        description:
            'Effortless booking experience with warm imagery, clear menus, and conversion-optimized flow.',
        image: '/project_catering.jpg',
        tags: ['E-commerce', 'UX Design', 'Booking'],
        color: '#FF6B6B',
        overview: 'A digital booking platform for a premium catering service, focusing on visual appeal and ease of ordering.',
        problem: 'The manual booking process was prone to errors and time-consuming for both staff and customers.',
        solution: 'Developed an automated booking system with a visual menu builder, allowing customers to customize their orders and get instant quotes.',
        tools: ['Vue.js', 'Firebase', 'Stripe'],
        features: [
            'Visual menu customization',
            'Real-time price calculation',
            'Secure payment integration',
            'Order management admin panel'
        ],
        results: 'Reduced booking errors by 90% and saved the admin team 20 hours per week.',
        link: 'https://www.skconline.in/',
        screens: ['/catering_screen1.jpg', '/catering_screen2.jpg', '/catering_screen3.jpg']
    },
    {
        id: 'examate',
        title: 'Examate',
        subtitle: 'Study App',
        category: 'Mobile Design',
        description:
            'Helps students plan, practice, and track progress without the stress.',
        image: '/project_examate.jpg',
        tags: ['EdTech', 'Mobile', 'Productivity'],
        color: '#FFE66D',
        overview: 'An exam preparation assistant that helps students manage their study schedules and practice effectively.',
        problem: 'Students often feel overwhelmed by the volume of syllabus and lack a structured way to prepare for exams.',
        solution: 'Created a smart study planner that adapts to the student\'s pace and generates daily goals and revision reminders.',
        tools: ['Flutter', 'Dart', 'Firebase'],
        features: [
            'Adaptive study planner',
            'Flashcards and quizzes',
            'Focus timer (Pomodoro)',
            'Performance analytics'
        ],
        results: 'Helped 5000+ students improve their exam scores by an average of 20%.'
    },
    {
        id: 'coding',
        title: 'Coding Platform',
        subtitle: 'Tracker Dashboard',
        category: 'Dashboard',
        description:
            'Progress tracking dashboard that turns complex learning data into clear, actionable insights.',
        image: '/project_coding.jpg',
        tags: ['UX Research', 'Dashboard', 'Data Viz'],
        color: '#4ECDC4',
        overview: 'A comprehensive dashboard for coding students to track their problem-solving streaks and skill progression.',
        problem: 'Students found it difficult to visualize their progress and identify weak areas due to scattered data across different platforms.',
        solution: 'Aggregated data into a central hub with intuitive charts, heatmaps, and streak indicators to gamify the learning experience.',
        tools: ['React', 'Recharts', 'Node.js', 'MongoDB'],
        features: [
            'Real-time progress updates',
            'Interactive skill heatmaps',
            'Gamified streak tracking',
            'Peer comparison metrics'
        ],
        results: 'Daily active users improved by 25%, and course completion rates saw a 15% uplift.'
    },
    {
        id: 'applyq',
        title: 'ApplyQ',
        subtitle: 'Job Tracker App',
        category: 'Mobile Design',
        description:
            'Job application tracker that keeps deadlines and follow-ups organized.',
        image: '/project_applyq.jpg',
        tags: ['Productivity', 'Mobile', 'Organization'],
        color: '#FF6B6B',
        overview: 'A mobile tool for job seekers to organize their applications, interviews, and follow-ups in one place.',
        problem: 'Job hunting involves managing data across emails, spreadsheets, and portals, leading to missed opportunities.',
        solution: 'Built a Kanban-style application tracker with automated reminders and email integration to centralize the process.',
        tools: ['Swift', 'SwiftUI', 'CoreData'],
        features: [
            'Kanban board status tracking',
            'Automated follow-up reminders',
            'CV/Resume version management',
            'Interview scheduling'
        ],
        results: 'Users reported a 30% reduction in job search anxiety and better interview attendance rates.',
        screens: ['/applyq_screen1.jpg', '/applyq_screen2.jpg', '/applyq_screen3.jpg']
    },
    {
        id: 'koyya',
        title: 'Koyya Enterprises',
        subtitle: 'Corporate Website',
        category: 'Web Design',
        description:
            'Professional corporate presence with structured content and confident visual language.',
        image: '/project_koyya.jpg',
        tags: ['Branding', 'Web Design', 'B2B'],
        color: '#FFE66D',
        overview: 'Koyya Enterprises needed a robust corporate site to showcase their diverse portfolio of services and establish market credibility.',
        problem: 'Their existing site lacked professional polish and content structure, making it hard for potential B2B clients to trust their expertise.',
        solution: 'Implemented a clean, grid-based layout with strong typography and a corporate color palette that conveys stability and trust.',
        tools: ['Next.js', 'TypeScript', 'Sass'],
        features: [
            'Service portfolio showcasing',
            'Client testimonials slider',
            'Lead generation forms',
            'SEO optimized structure'
        ],
        results: 'Generated 50+ quality B2B leads in the first quarter and significantly improved brand perception.',
        link: 'https://koyya.in/'
    }
];
