// ================================
// SKOON ARCHITECTURE PORTAL
// Multi-language & Navigation System
// ================================

// Language Strings
const translations = {
  en: {
    // Navigation
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_services: 'Services',
    nav_contact: 'Contact',
    nav_portal: 'Portal',
    nav_logout: 'Logout',

    // Home Page
    hero_title: 'SKOON Architecture & Engineering',
    hero_subtitle: 'Project Management & Tender Portal',
    hero_cta: 'Get Started',
    hero_desc: 'Streamline your project workflow with our integrated architecture platform',

    // Features
    feature_1_title: 'Project Management',
    feature_1_desc: 'Track and manage all your projects in one centralized platform',
    feature_2_title: 'Smart Quotations',
    feature_2_desc: 'Get instant cost estimates with our advanced calculation system',
    feature_3_title: 'Document Management',
    feature_3_desc: 'Organize all project files, contracts, and drawings securely',
    feature_4_title: 'Real-time Updates',
    feature_4_desc: 'Stay informed with instant notifications on project status',

    // Services
    services_design: 'Design',
    services_supervision: 'Supervision',
    services_consulting: 'Consulting',

    // Login
    login_title: 'Sign In',
    login_email: 'Email Address',
    login_password: 'Password',
    login_submit: 'Sign In',
    login_forgot: 'Forgot Password?',
    login_no_account: "Don't have an account?",
    login_signup: 'Sign Up',

    // Dashboard
    dashboard_welcome: 'Welcome back',
    dashboard_projects: 'Your Projects',
    dashboard_new_project: 'Request Quotation',
    dashboard_my_projects: 'My Projects',
    dashboard_active: 'Active',
    dashboard_under_review: 'Under Review',
    dashboard_approved: 'Approved',
    dashboard_completed: 'Completed',
    dashboard_view_details: 'View Details',

    // Project Details
    project_title: 'Project Details',
    project_area: 'Area',
    project_scope: 'Scope',
    project_status: 'Status',
    project_files: 'Files',
    project_drawings: 'Drawings',
    project_boq: 'Bill of Quantities',
    project_specifications: 'Specifications',
    project_contracts: 'Contracts',
    project_reports: 'Reports',
    project_no_files: 'No files uploaded yet',
    project_upload: 'Upload File',
    project_download: 'Download',
    project_view: 'View',

    // Quotation Form
    quotation_title: 'Request Quotation',
    quotation_subtitle: 'Tell us about your project',
    quotation_project_name: 'Project Name',
    quotation_area: 'Total Area',
    quotation_scope: 'Project Type',
    quotation_location: 'Location',
    quotation_calculate: 'Calculate Estimate',
    quotation_save: 'Save Request',
    quotation_cancel: 'Cancel',
    quotation_estimate: 'Initial Estimate',
    quotation_approximate: 'Approximate value - Subject to change',

    // Admin Dashboard
    admin_dashboard: 'Dashboard',
    admin_clients: 'Clients',
    admin_projects_list: 'Projects',
    admin_settings: 'Settings',
    admin_total_clients: 'Total Clients',
    admin_active_projects: 'Active Projects',
    admin_under_review_count: 'Under Review',
    admin_new_requests: 'New Requests',
    admin_recent_projects: 'Recent Projects',
    admin_client_name: 'Client',
    admin_project_name: 'Project',
    admin_action: 'Action',
    admin_edit: 'Edit',
    admin_view: 'View',
    admin_delete: 'Delete',
    admin_change_status: 'Change Status',

    // Footer
    footer_about: 'About Us',
    footer_services: 'Services',
    footer_contact: 'Contact',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_rights: 'All rights reserved',
    footer_address: 'Dubai, UAE',
    footer_phone: '+971 4 XXX XXXX',
    footer_email: 'info@skoon.ae',

    // Common
    common_search: 'Search',
    common_filter: 'Filter',
    common_sort: 'Sort',
    common_export: 'Export',
    common_delete: 'Delete',
    common_edit: 'Edit',
    common_save: 'Save',
    common_submit: 'Submit',
    common_cancel: 'Cancel',
    common_loading: 'Loading...',
    common_error: 'Error',
    common_success: 'Success',
    common_warning: 'Warning',
    common_yes: 'Yes',
    common_no: 'No',
    common_sqm: 'sqm',
    common_sqft: 'sqft',
    common_aed: 'AED',
    common_usd: 'USD',
  },
  ar: {
    // Navigation
    nav_projects: 'المشاريع',
    nav_about: 'من نحن',
    nav_services: 'الخدمات',
    nav_contact: 'اتصل بنا',
    nav_portal: 'البوابة',
    nav_logout: 'تسجيل الخروج',

    // Home Page
    hero_title: 'سكون للاستشارات الهندسية',
    hero_subtitle: 'منصة إدارة المشاريع والمناقصات',
    hero_cta: 'ابدأ الآن',
    hero_desc: 'بسّط سير عمل مشاريعك باستخدام منصتنا المتكاملة',

    // Features
    feature_1_title: 'إدارة المشاريع',
    feature_1_desc: 'تتبع وإدارة جميع مشاريعك من منصة واحدة',
    feature_2_title: 'عروض أسعار ذكية',
    feature_2_desc: 'احصل على تقديرات تكاليف فوري باستخدام نظامنا المتقدم',
    feature_3_title: 'إدارة الملفات',
    feature_3_desc: 'نظّم جميع ملفات المشروع والعقود والمخططات بأمان',
    feature_4_title: 'تحديثات فورية',
    feature_4_desc: 'ابقَ مطلعاً على حالة المشروع من خلال التنبيهات الفورية',

    // Services
    services_design: 'التصميم',
    services_supervision: 'الإشراف',
    services_consulting: 'الاستشارات',

    // Login
    login_title: 'تسجيل الدخول',
    login_email: 'البريد الإلكتروني',
    login_password: 'كلمة المرور',
    login_submit: 'دخول',
    login_forgot: 'هل نسيت كلمة المرور؟',
    login_no_account: 'ليس لديك حساب؟',
    login_signup: 'إنشاء حساب',

    // Dashboard
    dashboard_welcome: 'أهلاً وسهلاً',
    dashboard_projects: 'مشاريعك',
    dashboard_new_project: 'طلب عرض سعر',
    dashboard_my_projects: 'مشاريعي',
    dashboard_active: 'نشط',
    dashboard_under_review: 'تحت المراجعة',
    dashboard_approved: 'معتمد',
    dashboard_completed: 'منجز',
    dashboard_view_details: 'عرض التفاصيل',

    // Project Details
    project_title: 'تفاصيل المشروع',
    project_area: 'المساحة',
    project_scope: 'النطاق',
    project_status: 'الحالة',
    project_files: 'الملفات',
    project_drawings: 'المخططات',
    project_boq: 'جدول الكميات',
    project_specifications: 'المواصفات',
    project_contracts: 'العقود',
    project_reports: 'التقارير',
    project_no_files: 'لم يتم تحميل أي ملفات',
    project_upload: 'تحميل ملف',
    project_download: 'تنزيل',
    project_view: 'عرض',

    // Quotation Form
    quotation_title: 'طلب عرض سعر',
    quotation_subtitle: 'أخبرنا عن مشروعك',
    quotation_project_name: 'اسم المشروع',
    quotation_area: 'إجمالي المساحة',
    quotation_scope: 'نوع المشروع',
    quotation_location: 'الموقع',
    quotation_calculate: 'احسب التقدير',
    quotation_save: 'حفظ الطلب',
    quotation_cancel: 'إلغاء',
    quotation_estimate: 'التقدير الأولي',
    quotation_approximate: 'قيمة تقريبية - قابلة للتغيير',

    // Admin Dashboard
    admin_dashboard: 'لوحة التحكم',
    admin_clients: 'العملاء',
    admin_projects_list: 'المشاريع',
    admin_settings: 'الإعدادات',
    admin_total_clients: 'إجمالي العملاء',
    admin_active_projects: 'المشاريع النشطة',
    admin_under_review_count: 'تحت المراجعة',
    admin_new_requests: 'طلبات جديدة',
    admin_recent_projects: 'آخر المشاريع',
    admin_client_name: 'العميل',
    admin_project_name: 'المشروع',
    admin_action: 'الإجراء',
    admin_edit: 'تعديل',
    admin_view: 'عرض',
    admin_delete: 'حذف',
    admin_change_status: 'تغيير الحالة',

    // Footer
    footer_about: 'من نحن',
    footer_services: 'الخدمات',
    footer_contact: 'اتصل بنا',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'شروط الخدمة',
    footer_rights: 'جميع الحقوق محفوظة',
    footer_address: 'دبي، الإمارات العربية المتحدة',
    footer_phone: '+971 4 XXX XXXX',
    footer_email: 'info@skoon.ae',

    // Common
    common_search: 'بحث',
    common_filter: 'تصفية',
    common_sort: 'ترتيب',
    common_export: 'تصدير',
    common_delete: 'حذف',
    common_edit: 'تعديل',
    common_save: 'حفظ',
    common_submit: 'إرسال',
    common_cancel: 'إلغاء',
    common_loading: 'جاري التحميل...',
    common_error: 'خطأ',
    common_success: 'نجح',
    common_warning: 'تحذير',
    common_yes: 'نعم',
    common_no: 'لا',
    common_sqm: 'متر مربع',
    common_sqft: 'قدم مربعة',
    common_aed: 'درهم إماراتي',
    common_usd: 'دولار أمريكي',
  },
};

// Language Management
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  updateActiveLanguageButton();
}

function t(key) {
  return translations[currentLanguage][key] || key;
}

function updateActiveLanguageButton() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
  });
}

// Initialize Language
function initLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  setLanguage(currentLanguage);
}

// Navigation Management
function navigateTo(page) {
  window.location.href = `${page}.html?lang=${currentLanguage}`;
}

// Modal Management
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
  }
});

// Form Handling
function handleFormSubmit(formId, callback) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      callback(data);
      form.reset();
    });
  }
}

// Auth Management
const authService = {
  login(email, password) {
    // Simulate login
    const userData = {
      id: 1,
      name: email.split('@')[0],
      email: email,
      role: email.includes('admin') ? 'admin' : 'client',
    };
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', 'fake-token-' + Date.now());
    return userData;
  },

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = 'index.html';
  },

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isLoggedIn() {
    return !!localStorage.getItem('token');
  },

  isAdmin() {
    const user = this.getUser();
    return user && user.role === 'admin';
  },
};

// Protected Page Check
function checkAuth() {
  const page = document.body.id;
  const protectedPages = ['dashboard-client', 'dashboard-admin', 'project-detail', 'quotation-form'];

  if (protectedPages.includes(page) && !authService.isLoggedIn()) {
    window.location.href = 'login.html';
  }

  if (page === 'dashboard-admin' && !authService.isAdmin()) {
    window.location.href = 'dashboard-client.html';
  }

  // Display user info
  const user = authService.getUser();
  if (user) {
    const userNameEl = document.getElementById('user-name');
    if (userNameEl) {
      userNameEl.textContent = user.name;
    }
  }
}

// Mock Data
const mockData = {
  projects: [
    {
      id: 1,
      name: 'Villa Al-Amali',
      area: 450,
      scope: 'Residential Villa',
      status: 'under-review',
      lastUpdate: '2024-10-14',
      files: [
        { name: 'Floor Plan - Rev 02.pdf', category: 'drawings', date: '2024-10-14' },
        { name: 'Elevation - Rev 01.pdf', category: 'drawings', date: '2024-10-12' },
        { name: 'BOQ_Final_Rev03.xlsx', category: 'boq', date: '2024-10-10' },
      ],
    },
    {
      id: 2,
      name: 'Commercial Project',
      area: 1200,
      scope: 'Commercial',
      status: 'approved',
      lastUpdate: '2024-10-13',
      files: [],
    },
    {
      id: 3,
      name: 'Residential Complex',
      area: 3000,
      scope: 'Mixed Use',
      status: 'pending',
      lastUpdate: '2024-10-08',
      files: [],
    },
  ],

  clients: [
    { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', projects: 3, lastActive: '2024-10-14' },
    { id: 2, name: 'Fatima Mohammed', email: 'fatima@example.com', projects: 2, lastActive: '2024-10-13' },
    { id: 3, name: 'Mohammed Hassan', email: 'mohammed@example.com', projects: 1, lastActive: '2024-10-08' },
  ],
};

// Load Projects
function loadProjects(containerId, clientView = true) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const projects = mockData.projects;

  if (projects.length === 0) {
    container.innerHTML = `<p class="text-center text-muted">${t('project_no_files')}</p>`;
    return;
  }

  const html = projects
    .map(
      (project) => `
    <div class="card">
      <div class="card-header">
        <div>
          <h3>${project.name}</h3>
          <p class="text-muted">${project.scope}</p>
        </div>
        <span class="status status-${project.status}">
          <span class="status-dot"></span>
          ${getStatusLabel(project.status)}
        </span>
      </div>
      <div class="card-body">
        <p><strong>${t('project_area')}:</strong> ${project.area} m²</p>
        <p><strong>${t('project_status')}:</strong> ${getStatusLabel(project.status)}</p>
        <p><strong>Last Update:</strong> ${new Date(project.lastUpdate).toLocaleDateString(currentLanguage === 'ar' ? 'ar-AE' : 'en-US')}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-small" onclick="navigateTo('project-detail')">${t('dashboard_view_details')}</button>
      </div>
    </div>
  `
    )
    .join('');

  container.innerHTML = html;
}

// Load Clients (Admin)
function loadClients(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const clients = mockData.clients;

  const html = `
    <table>
      <thead>
        <tr>
          <th>${t('admin_client_name')}</th>
          <th>Email</th>
          <th>Projects</th>
          <th>Last Active</th>
          <th>${t('admin_action')}</th>
        </tr>
      </thead>
      <tbody>
        ${clients
          .map(
            (client) => `
          <tr>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.projects}</td>
            <td>${new Date(client.lastActive).toLocaleDateString(currentLanguage === 'ar' ? 'ar-AE' : 'en-US')}</td>
            <td>
              <button class="btn btn-secondary btn-small">${t('admin_view')}</button>
            </td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

// Get Status Label
function getStatusLabel(status) {
  const labels = {
    pending: t('dashboard_active'),
    'under-review': t('dashboard_under_review'),
    approved: t('dashboard_approved'),
    completed: t('dashboard_completed'),
  };
  return labels[status] || status;
}

// Quote Calculation (Mock)
function calculateQuote(area, scope) {
  const baseRates = {
    'residential-villa': 800,
    'residential-apartment': 600,
    'commercial': 500,
    'mixed': 700,
  };

  const rate = baseRates[scope] || 700;
  const estimate = Math.round(area * rate);
  const low = Math.round(estimate * 0.85);
  const high = Math.round(estimate * 1.15);

  return { low, high, estimate };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  checkAuth();

  // Setup language buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      location.reload();
    });
  });

  // Setup navigation
  document.querySelectorAll('[data-navigate]').forEach((el) => {
    el.addEventListener('click', () => {
      navigateTo(el.getAttribute('data-navigate'));
    });
  });

  // Logout button
  document.getElementById('logout-btn')?.addEventListener('click', () => {
    authService.logout();
  });

  // Setup form handlers
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const user = authService.login(email, password);
      if (user.role === 'admin') {
        window.location.href = 'dashboard-admin.html';
      } else {
        window.location.href = 'dashboard-client.html';
      }
    });
  }

  const quotationForm = document.getElementById('quotation-form');
  if (quotationForm) {
    quotationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const area = parseFloat(document.getElementById('quotation-area').value);
      const scope = document.getElementById('quotation-scope').value;
      const quote = calculateQuote(area, scope);
      const resultEl = document.getElementById('quotation-result');
      if (resultEl) {
        resultEl.innerHTML = `
          <div class="alert alert-success">
            <div class="alert-icon">✓</div>
            <div>
              <strong>${t('quotation_estimate')}</strong><br>
              ${quote.low.toLocaleString()} - ${quote.high.toLocaleString()} ${t('common_aed')}
            </div>
          </div>
        `;
      }
    });
  }
});

// Export functions
window.setLanguage = setLanguage;
window.t = t;
window.navigateTo = navigateTo;
window.openModal = openModal;
window.closeModal = closeModal;
window.authService = authService;
window.loadProjects = loadProjects;
window.loadClients = loadClients;
window.calculateQuote = calculateQuote;
