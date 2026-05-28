const productData = [
    // --- ENDODONTICS ---
    { id: 1, category: 'Endodontics', name: 'Mani Manual K-Files 25mm', price: '320 EGP', desc: 'Japanese precision stainless steel files.', img: 'dental_endodontic_files_v2_1779982079850.png' },
    { id: 2, category: 'Endodontics', name: 'M3-Pro Gold Rotary Files', price: '1,200 EGP', desc: 'Double heat-treated gold rotary system.', img: 'assets/products/mani_k_files.jpg' },
    { id: 3, category: 'Endodontics', name: 'Meta Biomed Metapex', price: '650 EGP', desc: 'Calcium hydroxide with Iodoform paste.', img: 'assets/products/metapex.jpg' },
    { id: 4, category: 'Endodontics', name: 'Dentsply Gutta Percha Points', price: '280 EGP', desc: 'ISO color-coded gutta percha.', img: '' },
    { id: 5, category: 'Endodontics', name: 'Paper Points Absorbent', price: '150 EGP', desc: 'Highly absorbent sterilized paper points.', img: '' },
    { id: 6, category: 'Endodontics', name: 'VDW Raypex 6 Apex Locator', price: '18,500 EGP', desc: 'High-precision electronic length measure.', img: '' },

    // --- RESTORATIVE ---
    { id: 20, category: 'Restorative', name: '3M Filtek Z250 XT Universal', price: '1,450 EGP', desc: 'Nano-hybrid universal restorative composite.', img: 'assets/products/3m_filtek_z250.jpg' },
    { id: 21, category: 'Restorative', name: 'GC Fuji I Luting Cement', price: '1,250 EGP', desc: 'Glass ionomer luting cement for crowns.', img: 'assets/products/gc_fuji_1.jpg' },
    { id: 22, category: 'Restorative', name: 'Ivoclar Tetric N-Ceram', price: '1,100 EGP', desc: 'Universal nano-optimized composite.', img: 'assets/products/ivoclar_tetric.jpg' },
    { id: 23, category: 'Restorative', name: '3M Filtek P60 Posterior', price: '1,350 EGP', desc: 'Packable composite for posterior loads.', img: '' },
    { id: 24, category: 'Restorative', name: 'Dentsply Prime & Bond NT', price: '1,600 EGP', desc: 'One-component dental adhesive system.', img: '' },

    // --- PROSTHODONTICS ---
    { id: 40, category: 'Prosthodontics', name: 'Zhermack Tropicalgin Alginate', price: '480 EGP', desc: 'Mango scented chromatic alginate.', img: 'assets/products/zhermack_tropicalgin.png' },
    { id: 41, category: 'Prosthodontics', name: 'Vita 3D Master Shade Guide', price: '3,800 EGP', desc: 'Universal standard for shade matching.', img: 'dental_shade_guide_1779981525069.png' },
    { id: 42, category: 'Prosthodontics', name: 'Cavex ColorChange Alginate', price: '450 EGP', desc: 'Smart alginate with visible color change.', img: 'assets/products/cavex_alginate.jpg' },
    { id: 43, category: 'Prosthodontics', name: 'Zhermack Zeta Plus Kit', price: '1,950 EGP', desc: 'C-Silicone impression material set.', img: 'assets/products/zhermack_zeta_plus.png' },

    // --- IMPLANTOLOGY ---
    { id: 60, category: 'Implantology', name: 'Osstem GS III Surgical Kit', price: '22,000 EGP', desc: 'Comprehensive kit for dental implants.', img: 'dental_implant_kit_1779981511316.png' },
    { id: 61, category: 'Implantology', name: 'Dentium SuperLine Implant', price: '3,500 EGP', desc: 'SLA surface internal hex implant.', img: '' },
    { id: 62, category: 'Implantology', name: 'Implant Motor Woodpecker', price: '45,000 EGP', desc: 'Brushless motor with 20:1 handpiece.', img: '' },

    // --- ORTHODONTICS ---
    { id: 80, category: 'Orthodontics', name: 'Metal Brackets MBT 022', price: '1,800 EGP', desc: 'Precision 3M style metal brackets.', img: '' },
    { id: 81, category: 'Orthodontics', name: 'Niti Archwires 016 Upper', price: '850 EGP', desc: 'Super elastic NiTi alignment wires.', img: '' },
    { id: 82, category: 'Orthodontics', name: 'Ligature Ties (40 Sticks)', price: '250 EGP', desc: 'Colorful high-elasticity ligature ties.', img: '' },

    // --- EQUIPMENT ---
    { id: 100, category: 'Equipment', name: 'Woodpecker UDS-A LED Scaler', price: '8,200 EGP', desc: 'Piezo ultrasonic scaler with tank.', img: 'dental_ultrasonic_scaler_1779981671477.png' },
    { id: 101, category: 'Equipment', name: 'NSK Ti-Max Z95L Handpiece', price: '12,500 EGP', desc: 'Titanium high-speed air turbine.', img: 'assets/products/nsk_handpiece.jpg' },
    { id: 102, category: 'Equipment', name: 'Dental Autoclave 23L Class B', price: '75,000 EGP', desc: 'Large capacity vacuum sterilizer.', img: '' },

    // --- PERIODONTICS ---
    { id: 140, category: 'Periodontics', name: 'Gracey Curettes Set #1/2-#13/14', price: '4,500 EGP', desc: 'Surgical grade periodontal curettes.', img: '' },
    { id: 141, category: 'Periodontics', name: 'Ultrasonic Perio Tips', price: '1,200 EGP', desc: 'Deep pocket cleaning ultrasonic tips.', img: '' },

    // --- LABORATORY ---
    { id: 160, category: 'Laboratory', name: 'Zirconia Blocks (High Translucent)', price: '2,400 EGP', desc: 'Premium blocks for CAD/CAM milling.', img: '' },
    { id: 161, category: 'Laboratory', name: 'Dental Porcelain Furnace', price: '120,000 EGP', desc: 'Precision firing for ceramic restorations.', img: '' },

    // --- STERILIZATION ---
    { id: 180, category: 'Sterilization', name: 'Sterilization Pouches (200pcs)', price: '380 EGP', desc: 'Self-seal sterilization indicator bags.', img: '' },
    { id: 181, category: 'Sterilization', name: 'Enzymatic Detergent 5L', price: '1,100 EGP', desc: 'Instrument pre-cleaning solution.', img: '' }
];

function renderProducts(filter = 'all', searchQuery = '') {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;

    grid.innerHTML = '';
    let filtered = filter === 'all' ? productData : productData.filter(p => p.category === filter);

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">No products found for this selection.</div>';
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card animate-in';
        card.innerHTML = `
            <div class="prod-img">
                ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : `<div class="placeholder-icon"><i class="fas fa-boxes-stacked"></i></div>`}
            </div>
            <div class="prod-info">
                <span class="tag">${p.category}</span>
                <h3>${p.name}</h3>
                <p class="description">${p.desc}</p>
                <p class="price">${p.price}</p>
                <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(id) {
    const product = productData.find(p => p.id === id);
    alert(`Added ${product.name} to cart!`);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Category Filter Buttons (on page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.category);
        });
    });

    // Sub-menu/Hamburger Category Links
    const categoryLinks = document.querySelectorAll('.cat-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.dataset.category;
            renderProducts(cat);
            // Scroll to products
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileCats = document.querySelector('.mobile-nav-categories');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileCats.classList.remove('active');
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mobileCats = document.querySelector('.mobile-nav-categories');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileCats.classList.toggle('active');
        });
    }
});
