const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

const closeMenu = () => {
  if (!menu || !toggle) return;
  menu.classList.remove("is-open");
  toggle.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  // Close all dropdowns when closing menu
  document.querySelectorAll(".nav__item.is-open").forEach((item) => {
    item.classList.remove("is-open");
  });
};

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const nav = document.querySelector(".nav");
const topbar = document.querySelector(".topbar");

const setNavHeight = () => {
  if (nav) {
    document.documentElement.style.setProperty(
      "--nav-height",
      `${nav.offsetHeight}px`
    );
  }
  const isMobile = window.matchMedia("(max-width: 980px)").matches;
  if (!isMobile) {
    closeMenu();
  }
};

const handleScroll = () => {
  if (!nav) return;
  const topbarHeight = topbar ? topbar.offsetHeight : 0;
  const shouldFix = window.scrollY >= topbarHeight;
  nav.classList.toggle("is-fixed", shouldFix);
  document.body.classList.toggle("nav-fixed", shouldFix);
  nav.classList.toggle("is-scrolled", window.scrollY > 10);
};

// Handle all nav menu clicks
if (menu) {
  menu.addEventListener("click", (event) => {
    const isMobile = window.matchMedia("(max-width: 980px)").matches;
    if (!isMobile) return;

    // Get the closest anchor tag
    const anchor = event.target.closest("a");
    if (!anchor) return;

    // If clicking a dropdown parent link (has-caret class)
    if (anchor.classList.contains("has-caret")) {
      event.preventDefault();
      event.stopPropagation();
      
      const item = anchor.closest(".nav__item");
      if (!item) return;

      // Close all other dropdowns
      menu.querySelectorAll(".nav__item.is-open").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open");
        }
      });

      // Toggle current dropdown
      item.classList.toggle("is-open");
    } else {
      // Regular link or dropdown item - close menu
      closeMenu();
    }
  }); // Removed capture phase
}

const scrollTopButton = document.querySelector(".scroll-top");

const toggleScrollTop = () => {
  if (!scrollTopButton) return;
  scrollTopButton.classList.toggle("is-visible", window.scrollY > 320);
};

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

setNavHeight();
handleScroll();
toggleScrollTop();
window.addEventListener("resize", setNavHeight);
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("scroll", toggleScrollTop, { passive: true });

const messageInput = document.querySelector("#contactMessage");
const countOutput = document.querySelector("#contactCount");
if (messageInput && countOutput) {
  const updateCount = () => {
    const length = messageInput.value.length;
    countOutput.textContent = `${length}/500`;
  };
  messageInput.addEventListener("input", updateCount);
  updateCount();
}

const faqButtons = document.querySelectorAll(".faq-item__toggle");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
// Awards carousel manual navigation
const awardsCarousel = document.querySelector('.awards__carousel');
const awardsGrid = document.querySelector('.awards__grid');
const awardCards = document.querySelectorAll('.award-card');
const awardDots = document.querySelectorAll('.award-dot');
const navPrevBtn = document.querySelector('.awards__nav-prev');
const navNextBtn = document.querySelector('.awards__nav-next');

if (awardsCarousel && awardsGrid && awardCards.length > 0 && awardDots.length > 0 && navPrevBtn && navNextBtn) {
  let currentPosition = 0;
  const totalCards = 4;
  const cardWidth = 100 / 2.5; // 40% of viewport for each card position
  
  const updateActiveDot = (position) => {
    awardDots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === position);
    });
  };

  const navigateTo = (position) => {
    // Keep position within bounds
    position = position % totalCards;
    if (position < 0) position = totalCards + position;
    
    currentPosition = position;
    const translateValue = -position * cardWidth;
    awardsGrid.style.transform = `translateX(${translateValue}%)`;
    updateActiveDot(position);
  };

  // Arrow button click handlers
  navNextBtn.addEventListener('click', () => {
    navigateTo(currentPosition + 1);
  });

  navPrevBtn.addEventListener('click', () => {
    navigateTo(currentPosition - 1);
  });

  // Dot click handlers
  awardDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      navigateTo(index);
    });
  });

  // Initialize
  updateActiveDot(0);
}

// Product Modal Data and Functionality
const productData = [
  {
    id: 0,
    name: 'PS',
    type: 'Prime Savings / Fixed Deposit',
    category: 'Investments',
    description: 'PS is a prime savings and fixed deposit product designed for members who want to earn attractive returns on their savings while maintaining safety and security.',
    features: [
      'Flexible deposit terms and tenors',
      'Competitive interest rates',
      'Monthly or quarterly payout options',
      'Guaranteed capital protection',
      'Easy withdrawal process'
    ],
    image: 'assets/products/product-0.png'
  },
  {
    id: 1,
    name: 'MS',
    type: 'Member Savings',
    category: 'Savings',
    description: 'Member Savings is the foundational account for all ROAACCU members. It provides a secure place to save regularly while earning attractive interest and accessing other loan facilities.',
    features: [
      'Low minimum opening balance',
      'Regular interest payments',
      'Access to loan facilities',
      'Free monthly statements',
      'Dedicated member support'
    ],
    image: 'assets/products/product-1.png'
  },
  {
    id: 2,
    name: 'MI',
    type: 'Member Investment',
    category: 'Investments',
    description: 'Member Investment provides members with an opportunity to invest their savings for higher returns over extended periods.',
    features: [
      'Higher interest rates than savings',
      'Fixed commitment periods',
      'Capital guaranteed',
      'Tax-efficient returns',
      'Automatic renewal options'
    ],
    image: 'assets/products/product-2.png'
  },
  {
    id: 3,
    name: 'SS',
    type: 'Smart Savings',
    category: 'Savings',
    description: 'Smart Savings is an innovative savings product that combines flexibility with competitive returns. Perfect for members seeking a balance between accessibility and growth.',
    features: [
      'No fixed commitment period',
      'Competitive interest rates',
      'Anytime withdrawal access',
      'Bonus rewards program',
      'Digital access via USSD'
    ],
    image: 'assets/products/product-3.png'
  },
  {
    id: 4,
    name: 'RPL',
    type: 'Rubber Power Loan',
    category: 'Loans',
    description: 'Rubber Power Loan is specifically designed for rubber farmers and traders, providing quick access to funds for farm inputs and operational expenses.',
    features: [
      'Quick approval process',
      'Flexible repayment terms',
      'Competitive interest rates',
      'No collateral required for qualified members',
      'Seasonal repayment options'
    ],
    image: 'assets/products/product-4.png'
  },
  {
    id: 5,
    name: 'MD',
    type: 'Mofabra Daakye',
    category: 'Savings',
    description: 'Mofabra Daakye is a special savings product designed with the community in mind, promoting the spirit of collective growth and mutual support.',
    features: [
      'Community-focused approach',
      'Group savings benefits',
      'Enhanced interest rates',
      'Social responsibility initiatives',
      'Flexible group arrangements'
    ],
    image: 'assets/products/product-5.png'
  },
  {
    id: 6,
    name: 'AML',
    type: 'Akatuo Mpuntu Loan',
    category: 'Loans',
    description: 'Akatuo Mpuntu Loan is a multipurpose loan product available to members for various personal and business needs.',
    features: [
      'Fast turnaround processing',
      'Flexible loan amounts',
      'Reasonable interest rates',
      'Extended repayment periods',
      'Multiple use options'
    ],
    image: 'assets/products/product-6.png'
  },
  {
    id: 7,
    name: 'DSC',
    type: 'Direct Sales Loan',
    category: 'Loans',
    description: 'Direct Sales Loan provides merchants and traders with access to working capital for inventory and business expansion.',
    features: [
      'Credit facility for traders',
      'Quick fund disbursement',
      'Favorable repayment terms',
      'Encourages business growth',
      'Simple application process'
    ],
    image: 'assets/products/product-7.png'
  },
  {
    id: 8,
    name: 'LTL',
    type: 'Long Term Loan',
    category: 'Loans',
    description: 'Long Term Loan is designed for members seeking major investments such as property, equipment, or business expansion over an extended period.',
    features: [
      'Extended repayment periods up to 5 years',
      'Large loan amounts available',
      'Fixed interest rates',
      'Secure and stable terms',
      'Minimal documentation required'
    ],
    image: 'assets/products/product-8.png'
  },
  {
    id: 9,
    name: 'LTL-1',
    type: 'Long Term Loan Special',
    category: 'Loans',
    description: 'Long Term Loan Special is a premium long-term financing product with enhanced benefits for qualified members with strong payment history.',
    features: [
      'Preferential interest rates',
      'Longer repayment terms available',
      'Higher loan ceiling',
      'Exclusive to premium members',
      'Fast-track approval process'
    ],
    image: 'assets/products/product-9.png'
  },
  {
    id: 10,
    name: 'STL',
    type: 'Short Term Loan',
    category: 'Loans',
    description: 'Short Term Loan provides quick access to funds for immediate needs with rapid approval and disbursement.',
    features: [
      'Quick approval within 24-48 hours',
      'Lower interest rates',
      'Shorter repayment periods',
      'Simple eligibility criteria',
      'Flexible loan amounts'
    ],
    image: 'assets/products/product-10.png'
  },
  {
    id: 11,
    name: 'FQL',
    type: 'Farmer Quick Loan',
    category: 'Loans',
    description: 'Farmer Quick Loan is tailored for agricultural workers and farmers needing urgent funds for farm operations and inputs.',
    features: [
      'Agricultural loan specialist support',
      'Fast processing for crop seasons',
      'Seasonal installment options',
      'Competitive farming interest rates',
      'Easy documentation'
    ],
    image: 'assets/products/product-11.png'
  },
  {
    id: 12,
    name: 'FTL',
    type: 'Fast Track Loan',
    category: 'Loans',
    description: 'Fast Track Loan guarantees ultra-fast approval and disbursement for emergency financial needs of verified members.',
    features: [
      'Same-day approval possible',
      'Minimal documentation',
      'Instant fund transfer',
      'Available to verified members',
      'No hidden charges'
    ],
    image: 'assets/products/product-12.png'
  },
  {
    id: 13,
    name: 'SFL',
    type: 'Short-Seasoned Farmers\' Loan',
    category: 'Loans',
    description: 'Short-Seasoned Farmers\' Loan is specifically designed for young and new farming ventures needing support.',
    features: [
      'Support for new farmers',
      'Mentorship program included',
      'Flexible repayment tied to harvest season',
      'Lower interest for beginners',
      'Agricultural training support'
    ],
    image: 'assets/products/product-13.png'
  }
];

// Modal elements
const modal = document.getElementById('productModal');
const modalOverlay = document.getElementById('productModalOverlay');
const modalClose = document.getElementById('productModalClose');
const modalPrev = document.getElementById('productModalPrev');
const modalNext = document.getElementById('productModalNext');
const productCards = document.querySelectorAll('.product-card');

let currentProductId = 0;

const updateProductModal = (productId) => {
  const product = productData[productId];
  if (!product) return;

  currentProductId = productId;

  // Update image
  document.getElementById('productModalImage').src = product.image;

  // Update title and type
  document.getElementById('productModalTitle').textContent = product.name;
  document.getElementById('productModalSubtitle').textContent = product.type;

  // Update description
  document.getElementById('productModalDescription').textContent = product.description;

  // Update features
  const featuresList = document.getElementById('productModalFeatures');
  featuresList.innerHTML = product.features
    .map(feature => `<li><span class="material-symbols-rounded">check_circle</span>${feature}</li>`)
    .join('');

  // Update pagination
  document.getElementById('productModalPagination').textContent = `${productId + 1} of ${productData.length} products`;

  // Update button states
  modalPrev.disabled = productId === 0;
  modalNext.disabled = productId === productData.length - 1;
};

const openModal = (productId) => {
  updateProductModal(productId);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// Event listeners for product cards
productCards.forEach(card => {
  const viewBtn = card.querySelector('.product-card__view');
  const productId = parseInt(card.getAttribute('data-product-id'));

  viewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openModal(productId);
  });

  card.addEventListener('click', (e) => {
    if (e.target.closest('.product-card__view')) return;
    openModal(productId);
  });
});

// Modal controls
modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', closeModal);

modalPrev.addEventListener('click', () => {
  if (currentProductId > 0) {
    updateProductModal(currentProductId - 1);
  }
});

modalNext.addEventListener('click', () => {
  if (currentProductId < productData.length - 1) {
    updateProductModal(currentProductId + 1);
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.classList.contains('is-open')) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && currentProductId > 0) updateProductModal(currentProductId - 1);
    if (e.key === 'ArrowRight' && currentProductId < productData.length - 1) updateProductModal(currentProductId + 1);
  }
});

// Prevent body scroll when modal is open
document.addEventListener('wheel', (e) => {
  if (modal.classList.contains('is-open')) {
    e.preventDefault();
  }
}, { passive: false });

const revealTargets = document.querySelectorAll("section, .footer__grid");
if (revealTargets.length > 0) {
  revealTargets.forEach((target) => target.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}
