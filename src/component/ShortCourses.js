import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  ChevronRight,
  Clock,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

const COLORS = {
  primary: "text-blue-900",
  primaryBg: "bg-cyan-500",
  primaryLightBg: "bg-blue-100",
  primaryLightText: "text-blue-800",
  orange: "text-orange-500",
  orangeBg: "bg-orange-500",
  orangeHoverBg: "hover:bg-orange-600",
  white: "bg-white",
  whiteText: "text-white",
  grayText: "text-gray-600",
  grayBorder: "border border-gray-200",
  grayIcon: "text-gray-400",
  grayHoverBg: "hover:bg-gray-100",
  yellowStar: "text-yellow-500",
  graySubText: "text-gray-500",
  grayCountBg: "bg-gray-200 text-gray-700",
  inputText: "text-gray-700",
  textcolor: "text-red-400",
};

const courseData = [
  {
    id: 1,
    title: "Digital Marketing Fundamentals",
    description:
      "Learn the core principles of digital marketing including SEO, social media, email marketing, and analytics.",
    duration: "8 weeks",
    category: "Marketing",
    level: "Beginner",
    rating: 4.8,
    students: 1245,
    image: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?t=st=1746424128~exp=1746427728~hmac=7d5d54f4dfe40e82927348451f68802bdbea3d7f2ba4a22cd73756f6523bcbc2&w=1800",
    price: "$299",
    featured: true,
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description:
      "A comprehensive course covering HTML, CSS, JavaScript and modern frameworks to build responsive websites.",
    duration: "12 weeks",
    category: "Technology",
    level: "Intermediate",
    rating: 4.9,
    students: 2356,
    image: "https://img.freepik.com/free-photo/blog-blogging-digital-networking-www-global-concept_53876-21189.jpg?t=st=1746424745~exp=1746428345~hmac=fb356edebdef56492fc03266d06a8985c00485eeac7e38a6cdfe66ea8c3c06a7&w=1380",
    price: "$399",
    featured: true,
  },
  {
    id: 3,
    title: "Project Management Professional",
    description:
      "Master the techniques and methodologies needed to successfully manage projects from initiation to completion.",
    duration: "10 weeks",
    category: "Business",
    level: "Advanced",
    rating: 4.7,
    students: 987,
    image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1746424388~exp=1746427988~hmac=df9682292d67fe14f80932afb64280f4322142bce19e42e5655059399bd4a267&w=1800",
    price: "$349",
    featured: false,
  },
  {
    id: 4,
    title: "Data Science Essentials",
    description:
      "Learn to analyze and interpret complex data sets using statistical methods and visualization techniques.",
    duration: "14 weeks",
    category: "Technology",
    level: "Intermediate",
    rating: 4.8,
    students: 1823,
    image: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18141.jpg?t=st=1746424538~exp=1746428138~hmac=2454cce3b0f6851c6232af304693d7783c15f978cf605c1883f588fa5f92bcb2&w=2000",
    price: "$449",
    featured: false,
  },
  {
    id: 5,
    title: "Graphic Design Masterclass",
    description:
      "Develop professional graphic design skills using industry-standard tools like Adobe Photoshop and Illustrator.",
    duration: "8 weeks",
    category: "Design",
    level: "Beginner",
    rating: 4.6,
    students: 1562,
    image: "https://img.freepik.com/free-vector/graphic-design-education-process-classroom-with-two-students-3d-isometric-vector-illustration_1284-30023.jpg?t=st=1746424589~exp=1746428189~hmac=226ce2add740e3b52bf9834467199bb6aa7af73753e43973a2b238432044dc38&w=1380",
    price: "$279",
    featured: false,
  },
  {
    id: 6,
    title: "Financial Accounting",
    description:
      "Understand the fundamentals of financial accounting, reporting, and analysis for business decision-making.",
    duration: "6 weeks",
    category: "Business",
    level: "Beginner",
    rating: 4.5,
    students: 832,
    image: "https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?t=st=1746424631~exp=1746428231~hmac=24e87fe43ebbc916f8ee251c4a224f5e9ad7c6c584109c53fc2433af4f8dbd52&w=2000",
    price: "$249",
    featured: false,
  },
];

const categories = [
  { name: "All Categories", count: courseData.length },
  {
    name: "Business",
    count: courseData.filter((c) => c.category === "Business").length,
  },
  {
    name: "Technology",
    count: courseData.filter((c) => c.category === "Technology").length,
  },
  {
    name: "Marketing",
    count: courseData.filter((c) => c.category === "Marketing").length,
  },
  {
    name: "Design",
    count: courseData.filter((c) => c.category === "Design").length,
  },
];

export default function ShortCourses() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courseData);

  
  useEffect(() => {
    let result = courseData;

    // Filter by category
    if (activeCategory !== "All Categories") {
      result = result.filter((course) => course.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCourses(result);
  }, [activeCategory, searchTerm]);

  return (
    <div className={`${COLORS.white} min-h-screen`}>
      {/* Hero Section */}
      <div className={`${COLORS.primaryBg} ${COLORS.whiteText} py-16`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Short Courses</h1>
            <p className="text-xl mb-8">
              Enhance your skills with our industry-relevant short courses
              designed for working professionals.
            </p>
            <div
              className={`${COLORS.white} rounded-lg p-2 flex items-center max-w-xl mx-auto`}
            >
              <Search size={20} className={`${COLORS.grayIcon} ml-2`} />
              <input
                type="text"
                placeholder="Search for courses..."
                className={`w-full px-4 py-2 outline-none ${COLORS.inputText}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className={`${COLORS.orangeBg} ${COLORS.whiteText} px-6 py-2 rounded-md ${COLORS.orangeHoverBg} transition`}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-3xl font-bold ${COLORS.primary}`}>
            Featured Courses
          </h2>
          <a
            href="#all-courses"
            className={`${COLORS.orange} font-medium flex items-center hover:text-orange-600 transition`}
          >
            View all courses <ChevronRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courseData
            .filter((course) => course.featured)
            .map((course) => (
              <div
                key={course.id}
                className={`${COLORS.white} rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transition transform hover:scale-105 ${COLORS.grayBorder}`}
              >
                <div className="md:w-2/5">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <span
                    className={`inline-block px-3 py-1 ${COLORS.primaryLightBg} ${COLORS.primaryLightText} rounded-full text-sm font-medium mb-3`}
                  >
                    {course.category}
                  </span>
                  <h3 className={`text-xl font-bold ${COLORS.primary} mb-2`}>
                    {course.title}
                  </h3>
                  <p className={`${COLORS.grayText} mb-4`}>
                    {course.description}
                  </p>
                  <div
                    className={`flex items-center ${COLORS.graySubText} mb-4`}
                  >
                    <Clock size={16} className="mr-1" /> {course.duration}
                    <span className="mx-3">•</span>
                    <Users size={16} className="mr-1" />{" "}
                    {course.students.toLocaleString()} students
                    <span className="mx-3">•</span>
                    <div className="flex items-center">
                      <Star
                        size={16}
                        className={`${COLORS.yellowStar} fill-current mr-1`}
                      />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-2xl font-bold ${COLORS.orange}`}>
                      {course.price}
                    </span>
                    <button
                      className={`${COLORS.orangeBg} ${COLORS.whiteText} px-4 py-2 rounded-md ${COLORS.orangeHoverBg} transition flex items-center`}
                    >
                      Enroll now <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* All Courses */}
      <div id="all-courses" className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className={`text-3xl font-bold ${COLORS.primary}`}>
            All Courses
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`${
                activeCategory === cat.name
                  ? COLORS.primaryLightBg
                  : "bg-gray-100"
              } px-4 py-2 rounded-full text-sm font-medium ${
                COLORS.grayCategoryText
              } ${COLORS.grayCategoryHover}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`${COLORS.white} rounded-xl shadow-md overflow-hidden ${COLORS.grayBorder} transition hover:shadow-lg`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span
                  className={`inline-block px-3 py-1 ${COLORS.primaryLightBg} ${COLORS.primaryLightText} rounded-full text-xs font-medium mb-2`}
                >
                  {course.category}
                </span>
                <h3 className={`text-lg font-bold ${COLORS.primary} mb-1`}>
                  {course.title}
                </h3>
                <div
                  className={`flex items-center text-sm ${COLORS.graySubText} mb-3`}
                >
                  <Clock size={14} className="mr-1" /> {course.duration}
                  <span className="mx-2">•</span>
                  <Users size={14} className="mr-1" />{" "}
                  {course.students.toLocaleString()}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-semibold ${COLORS.orange}`}>
                    {course.price}
                  </span>
                  <button
                    className={`${COLORS.orangeBg} ${COLORS.whiteText} text-sm px-3 py-1 rounded-md ${COLORS.orangeHoverBg}`}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className={`${COLORS.primaryBg} py-16 mt-12`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your Skills?
          </h2>
          <p className="text-white text-lg mb-6">
            Join thousands of learners and take the next step in your career
            today.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Browse Courses
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <h2
          className={`text-3xl font-bold text-center mb-10 ${COLORS.primary}`}
        >
          What Our Learners Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit Sharma",
              feedback:
                "The courses are practical and well-structured. They helped me land a promotion!",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              role: "Marketing Manager",
            },
            {
              name: "Priya Verma",
              feedback:
                "Very high quality content. The platform is easy to navigate.",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              role: "UI/UX Designer",
            },
            {
              name: "Rahul Joshi",
              feedback: "The best learning experience I’ve had online so far.",
              avatar: "https://randomuser.me/api/portraits/men/55.jpg",
              role: "Software Engineer",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className={`text-gray-700 italic mb-2`}>
                "{testimonial.feedback}"
              </p>
              <h4 className={`text-lg font-semibold ${COLORS.primary}`}>
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}