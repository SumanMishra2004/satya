import React from 'react'
import { Calendar, Download, Eye, FileText, Clock, Star, Users, ExternalLink } from 'lucide-react'

const CurrentIssue = () => {
  const currentIssue = {
    volume: "Volume 3",
    issue: "Issue 1",
    year: "2025",
    month: "March",
    status: "Current Issue",
    publishDate: "March 15, 2025",
    coverImage: "/iedc-logo.jpg",
    totalArticles: 15,
    theme: "Emerging Technologies and Innovation",
    description: "This special issue focuses on cutting-edge research in emerging technologies, artificial intelligence, and sustainable innovation solutions."
  }

  const featuredArticles = [
  {
    id: 1,
    title: "Application of Deep Learning Algorithm for Judicious Use of Anti-VEGF in Diabetic Macular Edema",
    authors: "Anwesa Mondal, Apurba Nandi, Subhasish Pramanik, Lakshmi Kanta Mondal",
    pages: "4569",
    doi: "10.1038/s41598-025-4569", // replace with official DOI if available
    status: "Published",
    featured: true,
    abstract: "Diabetic Macular Edema (DME) is a major complication of diabetic retinopathy characterized by fluid accumulation in the macula, leading to vision impairment. The standard treatment involves anti-VEGF therapy, but ~36% of patients do not respond adequately. This study develops a Hybrid Deep Learning model integrating OCT images and clinical data from 181 patients to predict treatment responses, achieving 85% accuracy and supporting more personalized treatment strategies.",
    keywords: [
      "Deep Learning",
      "Diabetic Macular Edema",
      "Anti-VEGF",
      "Ophthalmology",
      "Hybrid Models"
    ],
    type: "Research Article",
    journal: "Scientific Reports",
    volume: "15",
    issue: "1",
    publisher: "Nature Publishing Group UK",
    citationCount: 6,
    accessCount: 2666,
    publishedDate: "February 7, 2025"
  },
  {
    id: 2,
    title: "Deep Convolutional Neural Network Based Smart Traffic Prediction Using IoT",
    authors: "Apurba Nandi, Santi P. Maity",
    pages: "105–110",
    doi: "10.1109/ICSCIT64012.2025.10456789",
    status: "Published",
    featured: false,
    abstract: "This paper introduces a smart traffic prediction model using IoT-enabled sensors combined with deep convolutional neural networks (CNNs). The proposed system predicts real-time traffic flow patterns and congestion, offering improved efficiency compared to traditional statistical models. Experimental validation shows the framework’s effectiveness in reducing prediction errors, making it highly suitable for intelligent transportation systems.",
    keywords: [
      "Smart Traffic",
      "IoT",
      "Deep Learning",
      "CNN",
      "Intelligent Transport Systems"
    ],
    type: "Conference Paper",
    journal: "2025 IEEE International Conference on Smart Computing and Information Technology (ICSCIT)",
    volume: "",
    issue: "",
    publisher: "IEEE",
    citationCount: 3,
    accessCount: 1450,
    publishedDate: "January 17, 2025"
  },
  {
    id: 3,
    title: "Explainable Deep Learning Models for Early Detection of Alzheimer’s Disease",
    authors: "Apurba Nandi, Debabrata Samanta, Nilanjan Dey, Amira Ashour",
    pages: "78–85",
    doi: "10.1007/978-981-99-1234-5_7",
    status: "Published",
    featured: false,
    abstract: "This chapter presents explainable deep learning frameworks for early detection of Alzheimer’s disease using MRI scans. By integrating Grad-CAM visualization, the study improves transparency and interpretability in diagnostic models. Comparative analysis with baseline CNNs demonstrates enhanced accuracy and explainability, supporting more reliable medical decision-making.",
    keywords: [
      "Explainable AI",
      "Deep Learning",
      "Alzheimer’s Disease",
      "MRI",
      "Grad-CAM"
    ],
    type: "Book Chapter",
    journal: "Handbook of Explainable Artificial Intelligence in Healthcare",
    volume: "",
    issue: "",
    publisher: "Springer",
    citationCount: 8,
    accessCount: 1675,
    publishedDate: "March 5, 2025"
  },
  {
    id: 4,
    title: "A Robust Face Recognition System under Adverse Weather Conditions Using Ensemble Deep Learning",
    authors: "Apurba Nandi, Gourab Mandal, Anirban Bhandari",
    pages: "512–520",
    doi: "10.1109/ICCV64023.2025.11012345",
    status: "Published",
    featured: false,
    abstract: "This work presents a robust face recognition framework designed to operate reliably under adverse weather conditions such as fog, rain, and low-light scenarios. The system integrates ensemble deep learning models with preprocessing filters to extract stable features. Experimental evaluation on distorted datasets confirms significant performance improvement over traditional CNN-based methods.",
    keywords: [
      "Face Recognition",
      "Ensemble Learning",
      "Adverse Weather",
      "Image Preprocessing",
      "CNN"
    ],
    type: "Conference Paper",
    journal: "2025 IEEE International Conference on Computer Vision (ICCV)",
    volume: "",
    issue: "",
    publisher: "IEEE",
    citationCount: 4,
    accessCount: 1320,
    publishedDate: "April 12, 2025"
  },
  {
    id: 5,
    title: "Deep Q Network-Driven Intelligent Systems: Advancing the Dynamics of Student-Alumni Networking and Professional Mentorship",
    authors: "Neepa Kundu, Gourab Mandal, Anirban Bhandari, Udita Bhaskar, Apurba Nandi",
    pages: "445–450",
    doi: "10.1109/INCIP64058.2025.11019749",
    status: "Published",
    featured: false,
    abstract: "Alumni recommendation systems play a crucial role in enhancing student-alumni interactions and facilitating career development. This paper presents an innovative recommendation system utilizing Deep Q-Networks (DQN) to optimize these connections. By integrating skill embeddings and leveraging historical data, the system generates tailored recommendations that foster meaningful connections and improve networking efficiency. Comparative analysis highlights significant improvements over traditional methods, ultimately contributing to better career outcomes for students.",
    keywords: [
      "Alumni Recommendation",
      "Deep Q-Networks",
      "Skill Embeddings",
      "Student Support",
      "Networking"
    ],
    type: "Conference Paper",
    journal: "2025 International Conference on Next Generation Communication & Information Processing (INCIP)",
    volume: "",
    issue: "",
    publisher: "IEEE",
    citationCount: 2,
    accessCount: 1021,
    publishedDate: "January 23, 2025"
  }
];



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800 border-green-200'
      case 'In Press': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Early Access': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      {/* Header Section */}
      <section className='pt-24 md:pt- pb-12 bg-gradient-to-r from-green-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-800 mb-6'>
              Current <span className='text-green-600 font-medium'>Issue</span>
            </h1>
            <div className='w-32 h-0.5 bg-green-500 mx-auto mb-8'></div>
            <p className='text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto'>
              Discover the latest research findings and innovative solutions in our most recent publication, 
              featuring cutting-edge studies from leading researchers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Current Issue Overview */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100'>
            <div className='grid lg:grid-cols-3 gap-8'>
              {/* Issue Cover */}
              <div className='lg:col-span-1 bg-gradient-to-br from-green-500 to-blue-600 p-8 text-white'>
                <div className='text-center mb-8'>
                  <div className='inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4'>
                    <Clock className='w-4 h-4' />
                    {currentIssue.status}
                  </div>
                  <h3 className='text-3xl font-light mb-2'>{currentIssue.volume}</h3>
                  <h4 className='text-2xl font-medium mb-4'>{currentIssue.issue}</h4>
                  
                  <div className='w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6'>
                    <img
                      src={currentIssue.coverImage}
                      alt='Current issue cover'
                      className='w-16 h-16 object-contain'
                    />
                  </div>
                </div>
                
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 text-sm'>
                    <Calendar className='w-4 h-4' />
                    <span>{currentIssue.month} {currentIssue.year}</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm'>
                    <FileText className='w-4 h-4' />
                    <span>{currentIssue.totalArticles} Articles</span>
                  </div>
                  <div className='flex items-center gap-3 text-sm'>
                    <Star className='w-4 h-4' />
                    <span>Special Issue</span>
                  </div>
                </div>

                <button className='w-full mt-8 bg-white/20 hover:bg-white/30 border border-white/30 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                  <Download className='w-4 h-4' />
                  Download Complete Issue
                </button>
              </div>

              {/* Issue Details */}
              <div className='lg:col-span-2 p-8'>
                <div className='mb-8'>
                  <h3 className='text-3xl font-light text-gray-800 mb-4'>
                    {currentIssue.theme}
                  </h3>
                  <p className='text-gray-600 leading-relaxed mb-6'>
                    {currentIssue.description}
                  </p>
                  
                  <div className='grid md:grid-cols-2 gap-6 text-sm'>
                    <div>
                      <h4 className='font-medium text-gray-800 mb-2'>Publication Details</h4>
                      <div className='space-y-1 text-gray-600'>
                        <p>Published: {currentIssue.publishDate}</p>
                        <p>ISSN: 2789-1234 (Online)</p>
                        <p>ISSN: 2789-5678 (Print)</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className='font-medium text-gray-800 mb-2'>Editorial Information</h4>
                      <div className='space-y-1 text-gray-600'>
                        <p>Editor-in-Chief: Dr. Rajesh Kumar</p>
                        <p>Guest Editor: Prof. Elena Rodriguez</p>
                        <p>Pages: 1-140</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2'>
                    <Eye className='w-4 h-4' />
                    View Table of Contents
                  </button>
                  <button className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2'>
                    <ExternalLink className='w-4 h-4' />
                    Editorial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>
              Featured Articles
            </h2>
            <p className='text-lg text-gray-600 font-light'>
              Highlighted research papers from this issue
            </p>
          </div>

          <div className='space-y-8'>
            {featuredArticles.filter(article => article.featured).map((article) => (
              <div
                key={article.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'
              >
                <div className='p-8'>
                  <div className='flex justify-between items-start mb-6'>
                    <div className='flex items-center gap-3'>
                      <Star className='w-5 h-5 text-yellow-500 fill-current' />
                      <span className='text-sm font-medium text-yellow-600'>Featured Article</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(article.status)}`}>
                      {article.status}
                    </div>
                  </div>

                  <h3 className='text-2xl font-medium text-gray-800 mb-4 leading-tight'>
                    {article.title}
                  </h3>

                  <div className='flex items-center gap-4 mb-4 text-sm text-gray-600'>
                    <div className='flex items-center gap-2'>
                      <Users className='w-4 h-4' />
                      <span>{article.authors}</span>
                    </div>
                    <span>•</span>
                    <span>Pages: {article.pages}</span>
                    <span>•</span>
                    <span>{article.type}</span>
                  </div>

                  <p className='text-gray-600 leading-relaxed mb-6'>
                    {article.abstract}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {article.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm'
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className='flex justify-between items-center'>
                    <div className='text-sm text-gray-500'>
                      DOI: {article.doi}
                    </div>
                    <div className='flex gap-3'>
                      <button className='bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors'>
                        View Abstract
                      </button>
                      <button className='bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center gap-2'>
                        <Download className='w-4 h-4' />
                        Download PDF
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>
              All Articles in This Issue
            </h2>
            <p className='text-lg text-gray-600 font-light'>
              Complete list of research papers and articles
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gray-50 border-b border-gray-200'>
                  <tr>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Article</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Authors</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Pages</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Status</th>
                    <th className='px-6 py-4 text-left text-sm font-medium text-gray-600'>Actions</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {featuredArticles.map((article) => (
                    <tr key={article.id} className='hover:bg-gray-50 transition-colors'>
                      <td className='px-6 py-4'>
                        <div>
                          <h4 className='font-medium text-gray-800 mb-1'>{article.title}</h4>
                          <p className='text-sm text-gray-500'>{article.type}</p>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-600'>
                        {article.authors.split(', ')[0]} et al.
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-600'>
                        {article.pages}
                      </td>
                      <td className='px-6 py-4'>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(article.status)}`}>
                          {article.status}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex gap-2'>
                          <button className='p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors'>
                            <Eye className='w-4 h-4' />
                          </button>
                          <button className='p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'>
                            <Download className='w-4 h-4' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CurrentIssue