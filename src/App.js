// import { useState } from 'react';
// import { Search, Book, Clock, Award, Star, ChevronDown } from 'lucide-react';

// // Sample data for courses based on the original site
// const courseData = [
//   {
//     id: 1,
//     title: "Digital Marketing Fundamentals",
//     description: "Learn the core principles of digital marketing including SEO, social media, email marketing, and analytics.",
//     duration: "8 weeks",
//     category: "Marketing",
//     level: "Beginner",
//     rating: 4.8,
//     students: 1245,
//     image: "https://picsum.photos/seed/marketing/600/400",
//     price: "$299",
//     featured: true
//   },
//   {
//     id: 2,
//     title: "Web Development Bootcamp",
//     description: "A comprehensive course covering HTML, CSS, JavaScript and modern frameworks to build responsive websites.",
//     duration: "12 weeks",
//     category: "Technology",
//     level: "Intermediate",
//     rating: 4.9,
//     students: 2356,
//     image: "https://picsum.photos/seed/webdev/600/400",
//     price: "$399",
//     featured: true
//   },
//   {
//     id: 3,
//     title: "Project Management Professional",
//     description: "Master the techniques and methodologies needed to successfully manage projects from initiation to completion.",
//     duration: "10 weeks",
//     category: "Business",
//     level: "Advanced",
//     rating: 4.7,
//     students: 987,
//     image: "https://picsum.photos/seed/management/600/400",
//     price: "$349",
//     featured: false
//   },
//   {
//     id: 4,
//     title: "Data Science Essentials",
//     description: "Learn to analyze and interpret complex data sets using statistical methods and visualization techniques.",
//     duration: "14 weeks",
//     category: "Technology",
//     level: "Intermediate",
//     rating: 4.8,
//     students: 1823,
//     image: "https://picsum.photos/seed/datascience/600/400",
//     price: "$449",
//     featured: false
//   },
//   {
//     id: 5,
//     title: "Graphic Design Masterclass",
//     description: "Develop professional graphic design skills using industry-standard tools like Adobe Photoshop and Illustrator.",
//     duration: "8 weeks",
//     category: "Design",
//     level: "Beginner",
//     rating: 4.6,
//     students: 1562,
//     image: "https://picsum.photos/seed/design/600/400",
//     price: "$279",
//     featured: false
//   },
//   {
//     id: 6,
//     title: "Financial Accounting",
//     description: "Understand the fundamentals of financial accounting, reporting, and analysis for business decision-making.",
//     duration: "6 weeks",
//     category: "Business",
//     level: "Beginner",
//     rating: 4.5,
//     students: 832,
//     image: "https://picsum.photos/seed/accounting/600/400",
//     price: "$249",
//     featured: false
//   }
// ];

// // Categories for filtering
// const categories = ["All", "Finance", "Marketing", "Business", "Technology"];

// export default function App() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showFilters, setShowFilters] = useState(false);

//   // Filter courses based on category and search term
//   const filteredCourses = courseData.filter(course => {
//     const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <div className="bg-blue-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl font-bold mb-4">Enhance Your Skills with Our Short Courses</h1>
//             <p className="text-xl mb-8">Flexible, industry-relevant courses designed to help you gain practical skills quickly</p>
//             <div className="relative max-w-2xl mx-auto">
//               <input
//                 type="text"
//                 placeholder="Search for courses..."
//                 className="py-3 px-12 w-full rounded-full shadow-lg text-gray-800"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Search className="absolute left-4 top-3.5 text-gray-500" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//       <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://picsum.photos/seed/marketing/600/400" alt=""/>
//     <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     </div>
// </a>
//       </div>

//       {/* Course Filter Section */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Explore Our Short Courses</h2>

//           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
//             {/* Filter Toggle Button (Mobile) */}
//             <button
//               className="md:hidden flex items-center justify-between bg-white px-4 py-2 rounded-lg shadow border border-gray-200 w-full"
//               onClick={() => setShowFilters(!showFilters)}
//             >
//               <span>Filters</span>
//               <ChevronDown className={`transform ${showFilters ? 'rotate-180' : ''} transition-transform`} size={20} />
//             </button>

//             {/* Category Filters */}
//             <div className={`md:flex gap-2 ${showFilters ? 'flex flex-wrap' : 'hidden'}`}>
//               {categories.map(category => (
//                 <button
//                   key={category}
//                   className={`px-4 py-2 rounded-lg ${
//                     selectedCategory === category
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-white text-gray-700 hover:bg-gray-100'
//                   } transition duration-200 shadow`}
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Course Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course) => (
//               <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
//                 <div className="relative">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {course.category}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
//                   <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

//                   <div className="flex items-center mb-4">
//                     <div className="flex items-center mr-4">
//                       <Clock size={18} className="text-gray-500 mr-1" />
//                       <span className="text-sm text-gray-500">{course.duration}</span>
//                     </div>
//                     <div className="flex items-center mr-4">
//                       <Book size={18} className="text-gray-500 mr-1" />
//                       <span className="text-sm text-gray-500">{course.lessons} lessons</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Award size={18} className="text-gray-500 mr-1" />
//                       <span className="text-sm text-gray-500">{course.skillLevel}</span>
//                     </div>
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <Star size={18} className="text-yellow-500 mr-1" />
//                       <span className="text-sm font-semibold mr-1">{course.rating}</span>
//                       <span className="text-sm text-gray-500">({course.reviews})</span>
//                     </div>
//                     <div className="text-lg font-bold text-blue-600">{course.price}</div>
//                   </div>

//                   <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
//                     Enroll Now
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full py-16 text-center">
//               <p className="text-xl text-gray-600">No courses found matching your criteria. Please try a different search.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <div className="bg-gray-100 py-16 mt-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Our Short Courses</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow-md text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Clock size={28} className="text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">Flexible Learning</h3>
//               <p className="text-gray-600">Study at your own pace and fit learning around your busy schedule with our flexible course structure.</p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Award size={28} className="text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">Industry-Relevant</h3>
//               <p className="text-gray-600">Gain practical skills designed for the real world with curriculum developed by industry experts.</p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Star size={28} className="text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">Certified Outcomes</h3>
//               <p className="text-gray-600">Receive a professional certificate upon completion to showcase your new skills to employers.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-blue-600 py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of students who have advanced their careers with our professionally designed short courses.</p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-200 shadow-lg">
//             Browse All Courses
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import ShortCourses from "./component/ShortCourses";

export default function App() {

  return (
    <ShortCourses/>
  );
}
