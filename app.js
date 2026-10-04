// ================================
// SKOON ARCHITECTURE PORTAL
// Complete Multi-language & Data System
// ================================

// Language Management
let currentLanguage = localStorage.getItem('language') || 'en';

const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_services: 'Services',
    nav_contact: 'Contact',
    nav_portal: 'Portal',
    nav_logout: 'Logout',
    nav_login: 'Login',

    // Login Pages
    login_title: 'Sign In',
    login_employee: 'Employee Login',
    login_client: 'Client Login',
    login_username: 'Username or Email',
    login_password: 'Password',
    login_submit: 'Sign In',
    login_forgot: 'Forgot Password?',
    login_switch_employee: 'Employee? Login here',
    login_switch_client: 'Client? Login here',
    login_error: 'Invalid username or password',
    login_required: 'Please fill in all fields',

    // Dashboard
    dashboard_welcome: 'Welcome',
    dashboard_employees: 'Employees',
    dashboard_projects: 'Projects',
    dashboard_new_project: 'New Project',
    dashboard_active: 'Active',
    dashboard_under_review: 'Under Review',
    dashboard_tender: 'Tender Stage',
    dashboard_construction: 'Construction',
    dashboard_completed: 'Completed',
    dashboard_my_projects: 'My Projects',
    dashboard_view_details: 'View Details',
    dashboard_project_stage: 'Project Stage',
    dashboard_owner: 'Owner',
    dashboard_contact: 'Contact',

    // Common
    common_search: 'Search',
    common_filter: 'Filter',
    common_logout: 'Logout',
    common_language: 'اللغة العربية',
    common_close: 'Close',
    common_save: 'Save',
    common_cancel: 'Cancel',
    common_edit: 'Edit',
    common_delete: 'Delete',
    common_view: 'View',
    common_download: 'Download',
    common_upload: 'Upload',
    common_status: 'Status',
    common_date: 'Date',
    common_area: 'Area',
    common_location: 'Location',
    common_scope: 'Scope',

    // Footer
    footer_about: 'About SKOON',
    footer_services: 'Our Services',
    footer_contact: 'Contact Us',
    footer_address: 'Dubai, UAE',
    footer_phone: '+971 4 XXX XXXX',
    footer_email: 'info@skoon.ae',
    footer_rights: 'All rights reserved',

    // Messages
    msg_logout_success: 'Logged out successfully',
    msg_login_success: 'Welcome to SKOON Portal',
    msg_error: 'An error occurred',

    // Project Details
    project_overview: 'Overview',
    project_files: 'Files',
    project_timeline: 'Timeline',
    project_description: 'Description',
    project_scope: 'Scope of Work',
    project_documents: 'Project Documents',
    project_no_files: 'No projects found',
    common_name: 'Name',
    common_email: 'Email',
    common_phone: 'Phone',
    common_company: 'Company',
    common_back: 'Back',
    common_clear: 'Clear',
  },

  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_projects: 'المشاريع',
    nav_about: 'عن الشركة',
    nav_services: 'الخدمات',
    nav_contact: 'تواصل معنا',
    nav_portal: 'البوابة',
    nav_logout: 'تسجيل خروج',
    nav_login: 'دخول',

    // Login Pages
    login_title: 'تسجيل دخول',
    login_employee: 'دخول الموظفين',
    login_client: 'دخول العميل',
    login_username: 'اسم المستخدم أو البريد',
    login_password: 'كلمة المرور',
    login_submit: 'دخول',
    login_forgot: 'نسيت كلمة المرور؟',
    login_switch_employee: 'موظف؟ ادخل من هنا',
    login_switch_client: 'عميل؟ ادخل من هنا',
    login_error: 'بيانات الدخول غير صحيحة',
    login_required: 'يرجى ملء جميع الحقول',

    // Dashboard
    dashboard_welcome: 'أهلا وسهلا',
    dashboard_employees: 'الموظفون',
    dashboard_projects: 'المشاريع',
    dashboard_new_project: 'مشروع جديد',
    dashboard_active: 'نشط',
    dashboard_under_review: 'قيد المراجعة',
    dashboard_tender: 'مرحلة المناقصة',
    dashboard_construction: 'قيد الإنشاء',
    dashboard_completed: 'مكتمل',
    dashboard_my_projects: 'مشاريعي',
    dashboard_view_details: 'عرض التفاصيل',
    dashboard_project_stage: 'مرحلة المشروع',
    dashboard_owner: 'المالك',
    dashboard_contact: 'التواصل',

    // Common
    common_search: 'بحث',
    common_filter: 'تصفية',
    common_logout: 'تسجيل خروج',
    common_language: 'English',
    common_close: 'إغلاق',
    common_save: 'حفظ',
    common_cancel: 'إلغاء',
    common_edit: 'تعديل',
    common_delete: 'حذف',
    common_view: 'عرض',
    common_download: 'تحميل',
    common_upload: 'رفع',
    common_status: 'الحالة',
    common_date: 'التاريخ',
    common_area: 'المساحة',
    common_location: 'الموقع',
    common_scope: 'نطاق العمل',

    // Footer
    footer_about: 'عن سكون',
    footer_services: 'خدماتنا',
    footer_contact: 'اتصل بنا',
    footer_address: 'دبي، الإمارات',
    footer_phone: '+971 4 XXX XXXX',
    footer_email: 'info@skoon.ae',
    footer_rights: 'جميع الحقوق محفوظة',

    // Messages
    msg_logout_success: 'تم تسجيل الخروج بنجاح',
    msg_login_success: 'أهلا بك في بوابة سكون',
    msg_error: 'حدث خطأ ما',

    // Project Details
    project_overview: 'نظرة عامة',
    project_files: 'الملفات',
    project_timeline: 'المخطط الزمني',
    project_description: 'الوصف',
    project_scope: 'نطاق العمل',
    project_documents: 'وثائق المشروع',
    project_no_files: 'لم يتم العثور على مشاريع',
    common_name: 'الاسم',
    common_email: 'البريد الإلكتروني',
    common_phone: 'الهاتف',
    common_company: 'الشركة',
    common_back: 'رجوع',
    common_clear: 'مسح',
  },
};

// Translation Helper
function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

// Set Language
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// ================================
// USER ACCOUNTS DATA
// ================================

// Employee Accounts
const employeeAccounts = {
  'admin': { password: '123', name: 'Admin', role: 'admin', email: 'admin@skoon.ae' },
  'khalid': { password: '123', name: 'Khalid', role: 'deputy-gm', email: 'khalid@skoon.ae' },
  'eslam': { password: '123', name: 'Eslam', role: 'manager', email: 'eslam@skoon.ae' },
  'ahmad': { password: '123', name: 'Ahmad', role: 'employee', email: 'ahmad@skoon.ae' },
  'iman': { password: '123', name: 'Iman', role: 'employee', email: 'iman@skoon.ae' },
};

// Client Accounts
const clientAccounts = {
  'saeed-kharbash': { password: '123', name: 'Saeed Kharbash', email: 'saeed@example.com', projectId: 1 },
  'mana-abdulaziz': { password: '123', name: 'Mana Abdulaziz', email: 'mana@example.com', projectId: 2 },
  'eman-abdelqadir': { password: '123', name: 'Eman Abdelqadir', email: 'eman@example.com', projectId: 3 },
  'rashed-al-janahi': { password: '123', name: 'Rashed Al-Janahi', email: 'rashed@example.com', projectId: 4 },
  'essa-kharbash': { password: '123', name: 'Essa Kharbash', email: 'essa@example.com', projectId: 5 },
  'majed-almheiri': { password: '123', name: 'Majed Almheiri', email: 'majed@example.com', projectId: 6 },
  'hanif-ebrahimi': { password: '123', name: 'Hanif Ebrahimi', email: 'hanif@example.com', projectId: 7 },
  'jaiedco': { password: '123', name: 'Jaiedco Development', email: 'jaiedco@example.com', projectId: 8 },
  'aurum-hotel': { password: '123', name: 'Aurum State Hotel', email: 'aurum@example.com', projectId: 9 },
};

// ================================
// PROJECTS DATA - 9 Real Projects
// ================================

const projectsData = [
  {
    id: 1,
    code: 'SD-P153',
    name: 'Saeed Kharbash Villa',
    owner: 'Saeed Kharbash',
    status: 'construction',
    stage: 'Under Construction',
    location: 'Dubai',
    area: '850 m²',
    image: 'SD-P153-Saeed-Kharbash.svg',
    description: 'Modern luxury villa with contemporary design',
    type: 'Residential',
    documents: {
      drawings: ['Foundation Plan.pdf', 'Floor Plans.pdf', 'Elevations.pdf'],
      specifications: ['Architectural Specs.pdf', 'MEP Specifications.pdf'],
      tender: ['BOQ.pdf', 'Tender Invitation.pdf'],
      reports: ['Design Report.pdf', 'Cost Estimate.pdf'],
    },
  },
  {
    id: 2,
    code: 'SD-P238',
    name: 'Mana Abdulaziz Villa',
    owner: 'Mana Abdulaziz',
    status: 'contract',
    stage: 'Contract Signing',
    location: 'Dubai',
    area: '920 m²',
    image: 'SD-P238-Mana-Abdulaziz-Front.svg',
    description: 'Contemporary villa with modern architectural design',
    type: 'Residential',
    documents: {
      drawings: ['Site Plan.pdf', 'Architectural Plans.pdf', 'Sections.pdf'],
      specifications: ['General Specs.pdf', 'Finishes Schedule.pdf'],
      tender: ['BOQ - Structural.pdf', 'BOQ - Finishes.pdf', 'Tender Terms.pdf'],
      reports: ['Preliminary Design.pdf'],
    },
  },
  {
    id: 3,
    code: 'SD-P253',
    name: 'Eman Abdelqadir Villa',
    owner: 'Eman Abdelqadir',
    status: 'tender',
    stage: 'Tender Stage',
    location: 'Dubai',
    area: '780 m²',
    image: 'SD-P253-Eman-Abdelqadir-Front.svg',
    description: 'Classical modern villa with premium finishes',
    type: 'Residential',
    documents: {
      drawings: ['Site Plan.pdf', 'Floor Plans.pdf', 'Elevation & Sections.pdf'],
      specifications: ['Architectural Specifications.pdf', 'Material Specifications.pdf'],
      tender: ['BOQ - All Works.pdf', 'Tender Conditions.pdf'],
      reports: ['Design Concept.pdf', 'Cost Analysis.pdf'],
    },
  },
  {
    id: 4,
    code: 'SD-P251',
    name: 'Rashed Al-Janahi Villa',
    owner: 'Rashed Al-Janahi',
    status: 'construction',
    stage: 'Under Construction',
    location: 'Dubai',
    area: '1,200 m²',
    image: 'SD-P251-Rashed-Al-Janahi-Front.svg',
    description: 'Luxury villa with elegant design and swimming pool',
    type: 'Residential',
    documents: {
      drawings: ['Master Plan.pdf', 'Architectural Plans.pdf', 'Structural Plans.pdf'],
      specifications: ['Full Specifications.pdf', 'MEP Specifications.pdf'],
      tender: ['BOQ - Complete.pdf', 'Tender Documents.pdf'],
      reports: ['Design Report.pdf', 'Project Timeline.pdf'],
    },
  },
  {
    id: 5,
    code: 'SD-P281',
    name: 'Essa Kharbash Villa',
    owner: 'Essa Kharbash',
    status: 'construction',
    stage: 'Under Construction',
    location: 'Dubai',
    area: '950 m²',
    image: 'SD-P281-Essa-Kharbash-Front-1.svg',
    description: 'Contemporary villa with bold architectural elements',
    type: 'Residential',
    documents: {
      drawings: ['Twin Villa Plans.pdf', 'Landscaping Plan.pdf', 'Site Layout.pdf'],
      specifications: ['Twin Villa Specs.pdf', 'Utility Specifications.pdf'],
      tender: ['BOQ - Twin Project.pdf', 'Tender Invitation.pdf'],
      reports: ['Design Report.pdf', 'Cost Estimate.pdf'],
    },
  },
  {
    id: 6,
    code: 'SD-P284',
    name: 'Majed Almheiri Villa (Linear House)',
    owner: 'Majed Almheiri',
    status: 'construction',
    stage: 'Under Construction',
    location: 'Dubai',
    area: '1,100 m²',
    image: 'SD-P284-Majed-Almheiri-Linear-House.svg',
    description: 'Linear modern villa with sleek design',
    documents: {
      drawings: ["Linear House Plans.pdf", "Sections.pdf", "Elevations.pdf"],
      specifications: ["Linear Design Specs.pdf", "Finishes Specs.pdf"],
      tender: ["BOQ - Linear.pdf", "Tender Documents.pdf"],
      reports: ["Design Report - Linear House.pdf", "Construction Timeline.pdf"],
    },
    type: 'Residential',
  },
  {
    id: 7,
    code: 'SD-P301',
    name: 'Hanif Ebrahimi Villa',
    owner: 'Hanif Ebrahimi',
    status: 'construction',
    stage: 'Under Construction',
    location: 'Dubai',
    area: '1,350 m²',
    image: 'SD-P301-Hanif-Ebrahimi-Garage-Front.svg',
    description: 'Premium villa with architectural excellence',
    documents: {
      drawings: ["Garage Plans.pdf", "Parking Layout.pdf", "Elevations.pdf"],
      specifications: ["Garage Specifications.pdf", "Material Schedule.pdf"],
      tender: ["BOQ - Garage.pdf", "Tender Terms.pdf"],
      reports: ["Design Report - Garage.pdf", "Cost Estimation.pdf"],
    },
    type: 'Residential',
  },
  {
    id: 8,
    code: 'SD-P338',
    name: 'Jaiedco Development (Twin Towers)',
    owner: 'Jaiedco Development',
    status: 'construction',
    stage: 'Under Construction',
    location: 'Dubai',
    area: '45,000 m²',
    image: 'SD-P338-Jaiedco-Main-Tower-1.svg',
    description: 'Premium residential development with two towers',
    documents: {
      drawings: ["Tower Master Plan.pdf", "Floor Plans.pdf", "Structural Plans.pdf"],
      specifications: ["Building Specifications.pdf", "MEP Full Specs.pdf", "Finishes Schedule.pdf"],
      tender: ["BOQ - Tower - Part 1.pdf", "BOQ - Tower - Part 2.pdf", "Tender Documents.pdf"],
      reports: ["Design Report - Main Tower.pdf", "Project Delivery Schedule.pdf", "Cost Analysis.pdf"],
    },
    type: 'Commercial',
  },
  {
    id: 9,
    code: 'SD-P256',
    name: 'Aurum State Hotel',
    owner: 'Aurum State Hotel',
    status: 'construction',
    stage: 'Under Construction',
    location: 'Dubai',
    area: '28,000 m²',
    image: 'SD-P256-AURUM-Front-View.svg',
    description: 'Luxury hotel with premium amenities and design',
    documents: {
      drawings: ["Hotel Master Plan.pdf", "Floor Plans.pdf", "Sections.pdf", "Elevations.pdf"],
      specifications: ["Hotel Specifications.pdf", "MEP Specifications.pdf", "Finishes Schedule.pdf"],
      tender: ["BOQ - Aurum Hotel.pdf", "BOQ - Finishes.pdf", "Tender Terms.pdf"],
      reports: ["Design Report - Aurum.pdf", "Project Schedule.pdf", "Cost Estimation.pdf"],
    },
    type: 'Hospitality',
  },
];

// ================================
// AUTHENTICATION SYSTEM
// ================================

const authService = {
  // Employee Login
  loginEmployee(username, password) {
    const account = employeeAccounts[username.toLowerCase()];
    if (!account || account.password !== password) {
      return null;
    }
    
    const userData = {
      id: username,
      name: account.name,
      email: account.email,
      role: account.role,
      type: 'employee',
    };
    
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', 'token-' + Date.now());
    localStorage.setItem('loginType', 'employee');
    
    return userData;
  },

  // Client Login
  loginClient(username, password) {
    const account = clientAccounts[username.toLowerCase()];
    if (!account || account.password !== password) {
      return null;
    }
    
    const userData = {
      id: username,
      name: account.name,
      email: account.email,
      type: 'client',
      projectId: account.projectId,
    };
    
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', 'token-' + Date.now());
    localStorage.setItem('loginType', 'client');
    
    return userData;
  },

  // Logout
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('loginType');
    window.location.href = 'index.html';
  },

  // Get Current User
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if Logged In
  isLoggedIn() {
    return !!localStorage.getItem('token');
  },

  // Get User Type
  getUserType() {
    return localStorage.getItem('loginType') || null;
  },

  // Check if Employee
  isEmployee() {
    return this.getUserType() === 'employee';
  },

  // Check if Client
  isClient() {
    return this.getUserType() === 'client';
  },
};

// ================================
// PAGE FUNCTIONS
// ================================

// Initialize Page
function initPage() {
  // Set Language
  setLanguage(currentLanguage);
  
  // Check Authentication
  const user = authService.getUser();
  const userNameEl = document.getElementById('user-name');
  const userRoleEl = document.getElementById('user-role');
  
  if (user) {
    if (userNameEl) userNameEl.textContent = user.name;
    if (userRoleEl) userRoleEl.textContent = user.type === 'employee' ? t('login_employee') : t('login_client');
  }
}

// Load Projects for Dashboard
function loadProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const user = authService.getUser();
  let projects = projectsData;

  // Filter for clients (show only their project)
  if (authService.isClient() && user.projectId) {
    projects = projectsData.filter(p => p.id === user.projectId);
  }

  const html = projects
    .map(project => `
      <div class="project-card">
        <div class="project-image">
          <img src="project-images/${project.image}" alt="${project.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${project.code}'">
        </div>
        <div class="project-info">
          <h3>${project.code}</h3>
          <p><strong>${t('dashboard_project_stage')}:</strong> ${project.stage}</p>
          <p><strong>${t('dashboard_owner')}:</strong> ${project.owner}</p>
          <p><strong>${t('common_area')}:</strong> ${project.area}</p>
          <p>${project.description}</p>
        </div>
        <div class="project-footer">
          <span class="status-badge status-${project.status}">${project.stage}</span>
          <button class="btn btn-small" onclick="viewProject(${project.id})">${t('dashboard_view_details')}</button>
        </div>
      </div>
    `)
    .join('');

  container.innerHTML = html;
}

// View Project Details
function viewProject(projectId) {
  localStorage.setItem('currentProject', projectId);
  window.location.href = 'project-detail.html?lang=' + currentLanguage;
}

// Get Project by ID
function getProject(id) {
  return projectsData.find(p => p.id === parseInt(id));
}

// Toggle Language
function toggleLanguage() {
  const newLang = currentLanguage === 'en' ? 'ar' : 'en';
  setLanguage(newLang);
}

// Logout User
function logout() {
  authService.logout();
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', initPage);
