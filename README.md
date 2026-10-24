# 🚀 Veda Technology — Business & Services Website

A modern, responsive business website concept for a technology and digital-services organization. Built using HTML5, CSS3, and JavaScript, the project showcases technology programs, digital services, training and internship information, FAQs, and a contact section.

## 📌 Table of Contents

- Overview
- Features
- Technologies Used
- Project Structure
- Getting Started
- Website Sections
- JavaScript Functionality
- Responsive Design
- SEO and Accessibility
- Contact Form Configuration
- Deployment
- Future Improvements
- License

## 🌟 Overview

The Veda Technology website is designed to provide a professional online presence for a technology-focused organization.

The project emphasizes clean layouts, reusable content cards, responsive navigation, accessible interactions, and a consistent technology-inspired visual identity.

### Project Objectives

- Develop a responsive multi-section business website.
- Practice semantic HTML and modern CSS layouts.
- Implement interactive features using JavaScript.
- Present programs and digital services using reusable UI components.
- Apply basic SEO and accessibility practices.
- Learn Git, GitHub, and static website deployment.

## ✨ Features

- **Professional Homepage:** Modern hero section with a clear call to action.
- **About Section:** Introduces the organization's learning-first approach.
- **Technology Programs:** Sample cards for web development, programming, and UI design.
- **Digital Services:** Organized list of illustrative technology service categories.
- **Training and Internships:** Explains a sample hands-on learning journey.
- **FAQ Accordion:** Expandable questions and answers.
- **Responsive Navigation:** Hamburger menu for smaller screens.
- **Contact Form:** Required-field validation and email-draft functionality.
- **Responsive Layout:** Designed for desktop, tablet, and mobile devices.
- **Modern Visual Design:** Gradients, cards, hover effects, and typography.
- **SEO Basics:** Page title, meta description, semantic sections, and heading hierarchy.
- **Accessibility:** Keyboard focus indicators, accessible menu controls, and reduced-motion support.
- **Dynamic Copyright Year:** Automatically updates through JavaScript.

## 🛠️ Technologies Used

| Technology   | Purpose                                           |
| ------------ | ------------------------------------------------- |
| HTML5        | Website structure and semantic content            |
| CSS3         | Styling, layouts, animations, and responsiveness  |
| JavaScript   | Navigation, FAQ interactions, and form validation |
| Google Fonts | DM Sans and Space Grotesk typography              |
| Git          | Version control                                   |
| GitHub       | Source code hosting and deployment                |

## 📁 Project Structure

```
veda-technology-website/
│
├── index.html     # Main website structure
├── style.css      # Styling and responsive layouts
├── script.js      # Interactive functionality
└── README.md      # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- A modern web browser.
- A code editor such as Visual Studio Code.
- Git (optional, for version control).

### Installation

**1. Clone the repository**

Replace the example URL with your actual GitHub repository URL.

```
git clone https://github.com/YOUR-USERNAME/veda-technology-website.git
```

**2. Navigate to the project directory**

```
cd veda-technology-website
```

**3. Open the project**

Open `index.html` in your browser.

Alternatively, open the folder in Visual Studio Code and run `index.html` using the Live Server extension.

No package installation or build process is required.

## 🧩 Website Sections

### 1. Homepage

Introduces the website with a headline, supporting text, call-to-action buttons, and an abstract technology-inspired illustration.

### 2. About

Explains the website's sample organizational philosophy and highlights learning, creativity, and continuous improvement.

### 3. Technology Programs

Displays illustrative learning categories using reusable cards.

- Web Development
- Programming Foundations
- UI and Digital Design

These examples do not confirm that the organization currently offers these programs.

### 4. IT and Digital Services

Presents example service categories, including website development, digital presence, technical learning support, and project prototyping.

Replace these examples with services verified through official public company information.

### 5. Training and Internships

Introduces a sample learning journey consisting of exploration, practice, and reflection.

Current openings, eligibility, stipends, certificates, and placement support must be confirmed directly with the organization.

### 6. FAQ

Answers common questions about programs, internships, certificates, services, and contact form behavior.

### 7. Contact

Includes a form for collecting a visitor's name, email, area of interest, and message.

The form uses browser-side validation and can open a prefilled email draft when configured with a verified business email address.

## ⚙️ JavaScript Functionality

The `script.js` file implements the following features:

- **Mobile Navigation:** Opens and closes the hamburger menu.
- **Menu Accessibility:** Updates `aria-expanded`, provides descriptive labels, and supports the Escape key.
- **FAQ Accordion:** Expands and collapses answers, keeping one answer open at a time.
- **Copyright Year:** Displays the current year automatically.
- **Form Validation:** Checks required fields and validates the email format using browser-native validation.
- **Email Draft:** Opens the visitor's default email application with a prepared inquiry when the business email is configured.

## 📱 Responsive Design

The website uses CSS Grid, Flexbox, flexible typography, and media queries to adapt to different screen sizes.

| Device  | Design approach                                   |
| ------- | ------------------------------------------------- |
| Desktop | Multi-column layouts and horizontal navigation    |
| Tablet  | Adjusted spacing and flexible card layouts        |
| Mobile  | Single-column sections and collapsible navigation |

The stylesheet includes breakpoints for medium and smaller screens, along with a reduced-motion preference for visitors who request fewer animations.

## 🔍 SEO and Accessibility

The project includes basic SEO and accessibility practices:

- Descriptive HTML document title.
- Meta description and viewport settings.
- Semantic HTML elements such as `header`, `nav`, `main`, `section`, and `footer`.
- Logical heading hierarchy.
- Meaningful navigation labels.
- Visible keyboard focus indicators.
- Accessible FAQ controls.
- A skip-to-content link.
- Reduced-motion support.

For a production deployment, also add optimized images, a custom domain if available, HTTPS, and a sitemap where appropriate. Use structured data only when the information is verified.

## 📧 Contact Form Configuration

The form does not send data to a backend or store submissions.

To enable the email-draft feature, open `script.js` and find:

```
const VERIFIED_BUSINESS_EMAIL = "";
```

Replace the empty string with a verified business email address:

```
const VERIFIED_BUSINESS_EMAIL = "hello@example.com";
```

Use the actual authorized business email instead of the example address.

When a visitor submits the valid form, their default email application opens with a prefilled subject and message. The visitor must review and send the email themselves.

For production use, consider a secure backend or reputable form service if direct server-side submission is required.

## 🌐 Deployment

### Deploy with GitHub Pages

1. Create a repository on GitHub.
2. Upload or push all project files.
3. Open the repository's **Settings**.
4. Navigate to **Pages**.
5. Select the appropriate branch and folder as the deployment source.
6. Save the settings and wait for deployment.
7. Open the generated website URL and test it on different devices.

Follow GitHub's current Pages instructions if the interface changes.

## 💡 Future Improvements

- Add verified company information and official contact details.
- Add dedicated pages for programs and services.
- Integrate a secure backend contact form.
- Add search or category filtering for programs.
- Add real project images and an authorized company logo.
- Add privacy policy and terms pages if required.
- Optimize performance and conduct accessibility testing.
- Add automated tests and a continuous deployment workflow.
- Add a custom domain and analytics only when appropriate.

