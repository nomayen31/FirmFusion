FirmFusion
FirmFusion is a dynamic job-finding platform built with modern web technologies. It's designed to streamline the job search process for candidates and help companies find the right talent efficiently. This application showcases a variety of features, including user authentication, detailed job listings, company profiles, a blog, and case studies, all within a responsive and visually appealing interface.

🚀 Key Features
Responsive and Modern UI: Built with Tailwind CSS, the application offers a clean, dark-themed user interface that is fully responsive and works beautifully on all devices.

User Authentication: Secure user management is handled by Firebase Authentication. Users can sign in and register using email/password or with one-click options for Google and GitHub.

Comprehensive Job Listings: Browse through featured jobs and a list of companies. Each job has a dedicated page with detailed information, including a job summary, key requirements, and salary range.

Interactive Company Profiles: Explore company-specific pages to view all their open positions, location, and website.

Dynamic Content Management: The platform includes sections for a blog with articles and a case study showcase, demonstrating my ability to handle and present structured content.

Protected Routes: Certain pages, such as job details and user profiles, are protected to ensure that only authenticated users can access them.

Profile Management: Logged-in users can view and update their profile information, such as their name and photo URL.

🛠️ Tech Stack
Frontend: React with Vite for a fast development experience.

Styling: Tailwind CSS for a utility-first approach to styling.

Routing: React Router DOM for client-side navigation.

State Management/Context: React Context API and useContext hook for global state management, specifically for user authentication.

Authentication: Firebase for user authentication, including social sign-in.

Deployment: The project is configured for deployment using Firebase Hosting.

📦 Project Structure
The project is structured with a clear separation of concerns, making it easy to navigate and maintain:

/
├── public/                     # Static assets accessible from the web root
│   ├── image/                  # Project images (slider, hero, logos)
│   ├── caseStudy.json          # JSON data for the case study page
│   └── companies.json          # JSON data for company and job listings
├── src/                        # Main source code directory
│   ├── Components/             # Reusable UI components used across the app
│   │   ├── CompanyCard/
│   │   ├── FeaturesJobs/
│   │   ├── Footer/
│   │   ├── NavBar/
│   │   ├── TestimonialSection/
│   │   └── ...
│   ├── Layout/                 # Defines the overall page structure and wrappers
│   │   ├── MainLayout/
│   │   ├── AuthLayout/
│   │   └── CompanyLayout/
│   ├── Pages/                  # Components for main routes and pages
│   │   ├── Auth/               # Contains Login, Register, ForgotPassword pages
│   │   ├── Blog/               # Blog and BlogDetails pages
│   │   ├── Company/            # CompanyDetails page
│   │   ├── Profile/            # MyProfile and ProfileUpdate pages
│   │   └── ...                 # Other pages (Home, Contact, NotFound, CaseStudy)
│   ├── Router/                 # Centralized routing configuration
│   │   ├── ProtectedRoute.jsx
│   │   └── Routes.jsx
│   ├── providers/              # Global context providers (e.g., AuthProvider)
│   ├── firebase/               # Firebase configuration file
│   ├── index.css               # Global CSS imports and custom styles
│   └── main.jsx                # The main entry file for the React application
├── .env                        # Environment variables for Firebase config
├── .gitignore                  # Files and folders to be ignored by Git
├── package.json                # Project dependencies and npm scripts
├── package-lock.json           # Exact dependency tree
├── tailwind.config.js          # Tailwind CSS customization and configuration
└── vite.config.js              # Vite build configuration

⚙️ Installation and Setup
Prerequisites
Node.js (v18 or higher)

npm (or yarn)

Steps
Clone the repository:

git clone [https://github.com/nomayen31/firmfusion.git](https://github.com/nomayen31/firmfusion.git)
cd firmfusion

Install dependencies:

npm install

Set up Firebase:

Create a new project in the Firebase Console.

Enable Firebase Authentication (Email/Password, Google, GitHub).

Create a .env file in the project root based on the .env.example file and add your Firebase configuration details.

Run the application locally:

npm run dev

The application will be available at http://localhost:5173.

📜 License
This project is open-source and available under the MIT License.
