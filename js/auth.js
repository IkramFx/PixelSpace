// State untuk autentikasi
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Fungsi untuk handle login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Validasi sederhana
    if (!email || !password) {
        showAlert('error', 'Harap isi email dan password.');
        return;
    }
    
    // Simulasi login (dalam aplikasi nyata ini akan berkomunikasi dengan backend)
    // Untuk demo, kita terima semua login
    currentUser = {
        name: "John Doe",
        email: email,
        initials: email.substring(0, 2).toUpperCase()
    };
    
    // Simpan ke localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update UI
    updateUIAfterLogin();
    
    // Close modal
    closeModal('loginModal');
    
    // Reset form
    document.getElementById('loginForm').reset();
    
    showAlert('success', 'Login berhasil! Selamat datang di DigitalMarket.');
}

// Fungsi untuk handle register
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Validasi
    if (!name || !email || !phone || !password || !confirmPassword) {
        showAlert('error', 'Harap isi semua field.');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('error', 'Format email tidak valid.');
        return;
    }
    
    if (password.length < 6) {
        showAlert('error', 'Password harus minimal 6 karakter.');
        return;
    }
    
    if (password !== confirmPassword) {
        showAlert('error', 'Password dan konfirmasi password tidak cocok.');
        return;
    }
    
    // Simulasi registrasi berhasil
    currentUser = {
        name: name,
        email: email,
        phone: phone,
        initials: name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
    };
    
    // Simpan ke localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update UI
    updateUIAfterLogin();
    
    // Close modal
    closeModal('registerModal');
    
    // Reset form
    document.getElementById('registerForm').reset();
    
    showAlert('success', 'Registrasi berhasil! Akun Anda telah dibuat.');
}

// Fungsi untuk logout
function logout() {
    if (confirm('Apakah Anda ingin logout?')) {
        currentUser = null;
        localStorage.removeItem('currentUser');
        
        // Update UI
        updateUIAfterLogout();
        
        showAlert('success', 'Anda telah logout.');
    }
}

// Update UI setelah login
function updateUIAfterLogin() {
    const authButtons = document.querySelector('.auth-buttons');
    const userProfile = document.getElementById('userProfile');
    
    if (authButtons) {
        authButtons.classList.add('hidden');
    }
    
    if (userProfile && currentUser) {
        userProfile.classList.remove('hidden');
        userProfile.innerHTML = `<span>${currentUser.initials}</span>`;
        
        // Update event listener untuk logout
        userProfile.removeEventListener('click', handleProfileClick);
        userProfile.addEventListener('click', handleProfileClick);
    }
}

// Update UI setelah logout
function updateUIAfterLogout() {
    const authButtons = document.querySelector('.auth-buttons');
    const userProfile = document.getElementById('userProfile');
    
    if (authButtons) {
        authButtons.classList.remove('hidden');
    }
    
    if (userProfile) {
        userProfile.classList.add('hidden');
        userProfile.removeEventListener('click', handleProfileClick);
    }
}

// Handle profile click
function handleProfileClick() {
    // Tampilkan dropdown menu untuk logout
    const dropdown = document.createElement('div');
    dropdown.className = 'profile-dropdown';
    dropdown.innerHTML = `
        <div class="dropdown-item" id="viewProfile">Lihat Profil</div>
        <div class="dropdown-item" id="logoutBtn">Logout</div>
    `;
    
    // Position dropdown
    const profile = document.getElementById('userProfile');
    dropdown.style.position = 'absolute';
    dropdown.style.top = `${profile.offsetTop + profile.offsetHeight}px`;
    dropdown.style.right = '20px';
    dropdown.style.backgroundColor = 'white';
    dropdown.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    dropdown.style.borderRadius = '8px';
    dropdown.style.zIndex = '1000';
    dropdown.style.minWidth = '150px';
    
    document.body.appendChild(dropdown);
    
    // Add event listeners
    document.getElementById('viewProfile').addEventListener('click', function() {
        alert(`Profil:\nNama: ${currentUser.name}\nEmail: ${currentUser.email}\nTelepon: ${currentUser.phone || 'Tidak tersedia'}`);
        document.body.removeChild(dropdown);
    });
    
    document.getElementById('logoutBtn').addEventListener('click', function() {
        logout();
        document.body.removeChild(dropdown);
    });
    
    // Close dropdown ketika klik di luar
    document.addEventListener('click', function closeDropdown(e) {
        if (!profile.contains(e.target) && !dropdown.contains(e.target)) {
            document.body.removeChild(dropdown);
            document.removeEventListener('click', closeDropdown);
        }
    });
}

// Check login status saat page load
function checkLoginStatus() {
    if (currentUser) {
        updateUIAfterLogin();
    } else {
        updateUIAfterLogout();
    }
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Toggle password visibility
function togglePasswordVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Validasi email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show alert message
function showAlert(type, message) {
    // Remove existing alert
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert-message alert-${type}`;
    alert.textContent = message;
    alert.style.position = 'fixed';
    alert.style.top = '20px';
    alert.style.right = '20px';
    alert.style.padding = '15px 20px';
    alert.style.borderRadius = '8px';
    alert.style.zIndex = '9999';
    alert.style.fontWeight = '500';
    alert.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    alert.style.transition = 'all 0.3s ease';
    
    if (type === 'success') {
        alert.style.backgroundColor = '#10b981';
        alert.style.color = 'white';
    } else {
        alert.style.backgroundColor = '#ef4444';
        alert.style.color = 'white';
    }
    
    document.body.appendChild(alert);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 300);
    }, 3000);
}

// Setup event listeners untuk auth
function setupAuthEventListeners() {
    // Modal buttons
    const openLoginModalBtn = document.getElementById('openLoginModal');
    const openRegisterModalBtn = document.getElementById('openRegisterModal');
    const closeLoginModalBtn = document.getElementById('closeLoginModal');
    const closeRegisterModalBtn = document.getElementById('closeRegisterModal');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    
    // Form elements
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
    const toggleRegisterConfirmPassword = document.getElementById('toggleRegisterConfirmPassword');
    const forgotPassword = document.getElementById('forgotPassword');
    const appleLoginBtn = document.getElementById('appleLoginBtn');
    const appleRegisterBtn = document.getElementById('appleRegisterBtn');
    
    // Event listeners untuk modal
    if (openLoginModalBtn) {
        openLoginModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('loginModal');
        });
    }
    
    if (openRegisterModalBtn) {
        openRegisterModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('registerModal');
        });
    }
    
    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener('click', function() {
            closeModal('loginModal');
        });
    }
    
    if (closeRegisterModalBtn) {
        closeRegisterModalBtn.addEventListener('click', function() {
            closeModal('registerModal');
        });
    }
    
    if (switchToRegister) {
        switchToRegister.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('loginModal');
            openModal('registerModal');
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('registerModal');
            openModal('loginModal');
        });
    }
    
    // Close modal ketika klik di luar
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal('loginModal');
            }
        });
    }
    
    if (registerModal) {
        registerModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal('registerModal');
            }
        });
    }
    
    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Password toggles
    if (toggleLoginPassword) {
        toggleLoginPassword.addEventListener('click', function() {
            togglePasswordVisibility('login-password', this);
        });
    }
    
    if (toggleRegisterPassword) {
        toggleRegisterPassword.addEventListener('click', function() {
            togglePasswordVisibility('register-password', this);
        });
    }
    
    if (toggleRegisterConfirmPassword) {
        toggleRegisterConfirmPassword.addEventListener('click', function() {
            togglePasswordVisibility('register-confirm-password', this);
        });
    }
    
    // Forgot password
    if (forgotPassword) {
        forgotPassword.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Fitur reset password akan mengirim email ke alamat email Anda. (Fitur demo)');
        });
    }
    
    // Apple login/register buttons
    if (appleLoginBtn) {
        appleLoginBtn.addEventListener('click', function() {
            alert('Fitur login dengan Apple akan diimplementasikan pada versi produksi. (Fitur demo)');
        });
    }
    
    if (appleRegisterBtn) {
        appleRegisterBtn.addEventListener('click', function() {
            alert('Fitur register dengan Apple akan diimplementasikan pada versi produksi. (Fitur demo)');
        });
    }
}

// Initialize auth module
function initAuth() {
    checkLoginStatus();
    setupAuthEventListeners();
}

// Export fungsi yang diperlukan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        currentUser,
        handleLogin,
        handleRegister,
        logout,
        checkLoginStatus,
        initAuth
    };
}