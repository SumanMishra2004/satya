import React from 'react'
import { Calendar, Download, Eye, FileText, Users } from 'lucide-react'

const Archive = () => {
  const archiveIssues = [
    {
      id: 1,
      volume: "Volume 2",
      issue: "Issue 4",
      year: "2024",
      month: "December",
      coverImage: "/iedc-logo.jpg",
      totalArticles: 12,
      downloadCount: "2.1K",
      articles: [
        
  {
    id: 1,
    title: "Application of Deep Learning Algorithm for Judicious Use of Anti-VEGF in Diabetic Macular Edema",
    authors: "Anwesa Mondal, Apurba Nandi, Subhasish Pramanik, Lakshmi Kanta Mondal",
    pages: "4569",
    doi: "10.1038/s41598-025-4569",
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
]

      
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      {/* Header Section */}
      <section className='pt-24 md:pt-40 pb-12 bg-gradient-to-r from-purple-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-800 mb-6'>
              Journal <span className='text-purple-600 font-medium'>Archive</span>
            </h1>
            <div className='w-32 h-0.5 bg-purple-500 mx-auto mb-8'></div>
            <p className='text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto'>
              Explore our collection of past issues featuring cutting-edge research and innovative solutions 
              across multiple disciplines of advanced research and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Issues */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='space-y-12'>
            {archiveIssues.map((issue) => (
              <div
                key={issue.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'
              >
                <div className='grid lg:grid-cols-4 gap-8 p-8'>
                  {/* Issue Cover */}
                  <div className='lg:col-span-1'>
                    <div className='bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white h-80 flex flex-col justify-between'>
                      <div>
                        <h3 className='text-2xl font-light mb-2'>{issue.volume}</h3>
                        <h4 className='text-xl font-medium mb-4'>{issue.issue}</h4>
                        <div className='w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4'>
                          <img
                            src={issue.coverImage}
                            alt='Issue cover'
                            className='w-12 h-12 object-contain'
                          />
                        </div>
                      </div>
                      
                      <div className='space-y-3'>
                        <div className='flex items-center gap-2 text-sm'>
                          <Calendar className='w-4 h-4' />
                          <span>{issue.month} {issue.year}</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                          <FileText className='w-4 h-4' />
                          <span>{issue.totalArticles} Articles</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                          <Download className='w-4 h-4' />
                          <span>{issue.downloadCount} Downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Articles List */}
                  <div className='lg:col-span-3'>
                    <div className='mb-6'>
                      <h3 className='text-2xl font-light text-gray-800 mb-2'>
                        {issue.volume}, {issue.issue} - {issue.month} {issue.year}
                      </h3>
                      <p className='text-gray-600'>Featured research articles and papers</p>
                    </div>

                    <div className='space-y-6'>
                      {issue.articles.map((article, index) => (
                        <div
                          key={index}
                          className='border border-gray-200 rounded-lg p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300'
                        >
                          <div className='flex justify-between items-start mb-4'>
                            <h4 className='text-lg font-medium text-gray-800 leading-tight pr-4'>
                              {article.title}
                            </h4>
                            <div className='flex gap-2 flex-shrink-0'>
                              <button className='p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'>
                                <Eye className='w-4 h-4' />
                              </button>
                              <button className='p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'>
                                <Download className='w-4 h-4' />
                              </button>
                            </div>
                          </div>

                          <div className='space-y-3'>
                            <div className='flex items-center gap-2 text-sm text-gray-600'>
                              <Users className='w-4 h-4' />
                              <span>{article.authors}</span>
                            </div>
                            
                            <div className='flex gap-6 text-sm text-gray-500'>
                              <span>Pages: {article.pages}</span>
                              <span>DOI: {article.doi}</span>
                            </div>
                            
                            <p className='text-gray-600 text-sm leading-relaxed'>
                              {article.abstract}
                            </p>
                          </div>

                          <div className='flex gap-3 mt-4'>
                            <button className='bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors'>
                              View Abstract
                            </button>
                            <button className='bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors'>
                              Download PDF
                            </button>
                          </div>
                        </div>
                      ))}

                      {issue.totalArticles > issue.articles.length && (
                        <div className='text-center py-4'>
                          <button className='text-purple-600 hover:text-purple-700 font-medium'>
                            View All {issue.totalArticles} Articles →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='py-16 bg-gradient-to-r from-purple-50 to-blue-50'>
        <div className='max-w-4xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-4'>
              Archive Statistics
            </h2>
            <p className='text-lg text-gray-600 font-light'>
              Our growing collection of research publications
            </p>
          </div>
          
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>30+</div>
              <div className='text-gray-600'>Total Articles</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>6</div>
              <div className='text-gray-600'>Issues Published</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>5.4K</div>
              <div className='text-gray-600'>Total Downloads</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-purple-600 mb-2'>45+</div>
              <div className='text-gray-600'>Contributing Authors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Archive
