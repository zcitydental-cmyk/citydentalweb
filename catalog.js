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
    { id: 40, category: 'Prosthodontics', name: 'Acrostone self cure P+L  150g  green', price: '350 EGP', desc: 'Powder + Liquid 150g Self-curing acrylic material for dental laboratory use. Made in Egypt', img: '' },
    { id: 41, category: 'Prosthodontics', name: 'Acrostone self cure P+L  150g  colors', price: '350 EGP', desc: 'Powder + Liquid 150g Self-curing acrylic material for dental laboratory use. Made in Egypt', img: '' },
    { id: 42, category: 'Prosthodontics', name: 'Acrostone self cure Liquid 75ml', price: '175 EGP', desc: 'Liquid 75ml Self-curing acrylic material for dental laboratory use. Made in Egypt', img: '' },
    { id: 43, category: 'Prosthodontics', name: 'Acrostone soft liner  P+L 150g', price: '1260 EGP', desc: 'Powder + Liquid 150g Soft relining material for acrylic dentures to improve comfort. Made in Egypt', img: '' },
    { id: 44, category: 'Prosthodontics', name: 'Glass ionomer cement china P+L', price: '150 EGP', desc: '20 g Powder + 15 ml Liquid Used for dental restorations, luting crowns, bridges, and liners. Made in China', img: '' },
    { id: 45, category: 'Prosthodontics', name: 'GC Fuji 1 capsule', price: '145 for one capsule EGP', desc: 'Radiopaque glass ionomer luting cement for crowns, bridges, and brackets. Made in Japan Box : 50 cap.', img: 'assets/products/gc_fuji_1.jpg' },
    { id: 46, category: 'Prosthodontics', name: 'GC Fuji 1 P + L', price: '3850 EGP', desc: '35 g Powder + 20 ml Liquid Radiopaque glass ionomer luting cement for crowns, bridges, and brackets. Made in Japan', img: 'assets/products/gc_fuji_1.jpg' },
    { id: 47, category: 'Prosthodontics', name: 'GC Fuji-cem capsule', price: '210 for one capsule EGP', desc: 'Box : 50 cap. Self-adhesive resin luting cement for crowns, bridges, inlays, and onlays. Made in Japan', img: '' },
    { id: 48, category: 'Prosthodontics', name: 'Medicem promedica', price: '1850 EGP', desc: 'Size: 15g Powder + 10g (approx. 8mL) Liquid. Glass ionomer luting cement for crowns, bridges, inlays, onlays, and orthodontic bands. Made in Germany', img: '' },
    { id: 49, category: 'Prosthodontics', name: 'Provitemp automix itena', price: '1600 EGP', desc: 'Size: 1 automix syringe (5mL / approx. 8.6g) + 10 mixing tips. Non-eugenol, resin-based temporary cement for provisional crowns and bridges. Made in France.', img: '' },
    { id: 50, category: 'Prosthodontics', name: 'Dentotemp itena', price: '1500 for 1syr. EGP', desc: 'Size: 2 automix syringe (5mL / approx. 8.6g) + 20 mixing tips. Long-term temporary cement for provisional crowns, bridges, and implant-retained restorations. Made in France.', img: '' },
    { id: 51, category: 'Prosthodontics', name: 'Totalcem itena', price: '1950 EGP', desc: 'Size: 1 automix syringe (8g) + 20 mixing tips. Self-etch and self-adhesive resin cement for permanent luting of crowns, bridges, inlays, onlays, and posts. Made in France.', img: '' },
    { id: 52, category: 'Prosthodontics', name: 'Cavex temporary cement', price: '750 EGP', desc: 'Size: 35g Base + 16g Catalyst. Eugenol-free temporary cement for provisional crowns and bridges. Made in Netherlands .', img: '' },
    { id: 53, category: 'Prosthodontics', name: 'Micron luting prevest', price: '550 EGP', desc: 'Size: 15g Powder + 10mL Liquid. Translucent fine particle glass ionomer luting cement for crowns, bridges, and inlays. Made in India.', img: '' },
    { id: 54, category: 'Prosthodontics', name: 'Nova glass-L luting', price: '720 EGP', desc: 'Size: 15g Powder + 10mL Liquid. Radiopaque glass ionomer luting cement for crowns, bridges, and inlays. Made in Turkey.', img: '' },
    { id: 55, category: 'Prosthodontics', name: 'z-prime plus Bisco', price: '440 EGP', desc: 'Size: 4ml bottle. Single-component primer used to enhance adhesion between resin cements and zirconia, alumina, or metal restorations. Made in USA.', img: '' },
    { id: 56, category: 'Prosthodontics', name: 'Breeze self-adhesive resin cement', price: '1850 EGP', desc: 'Size: 1 automix syringe (typically 7.8g / 4mL). Self-adhesive resin cement used for permanent cementation of crowns, bridges, inlays, onlays, and posts. Made in USA.', img: '' },
    { id: 57, category: 'Prosthodontics', name: 'Han temp crown', price: '1550 EGP', desc: 'Size: 50mL cartridge. Temporary crown and bridge material used for making provisional restorations. Made in South Korea .', img: '' },
    { id: 58, category: 'Prosthodontics', name: 'Ultradent silane', price: '525 EGP', desc: 'Size: 1 syringe (1.2 mL / 0.96 g) + 2 delivery tips. Single-component silane coupling agent used to enhance bond strength between resin cements and porcelain/composite restorations. Made in USA .', img: '' },
    { id: 59, category: 'Prosthodontics', name: 'Denture box citizen', price: '33 EGP', desc: 'Size: small / large. Plastic storage box with ventilation holes used for dentures, orthodontic retainers, or mouthguards. Made in China.', img: '' },
    { id: 60, category: 'Prosthodontics', name: 'Denture box', price: '20 EGP', desc: 'Size: small / large. Plastic storage box with ventilation holes used for dentures, orthodontic retainers, or mouthguards. Made in Egypt.', img: '' },
    { id: 61, category: 'Prosthodontics', name: 'Impression bite trays large', price: '950 EGP', desc: 'Size: 40 pcs. large Disposable plastic bite registration trays with net liners used for accurate bite impressions and check-bites. Made in China.', img: '' },
    { id: 62, category: 'Prosthodontics', name: 'Impression bite trays small', price: '950 EGP', desc: 'Size: 50 pcs. small Disposable plastic bite registration trays with net liners used for accurate bite impressions and check-bites. Made in China.', img: '' },
    { id: 63, category: 'Prosthodontics', name: 'Impression bite trays interior', price: '950 EGP', desc: 'Size: 20 pcs. interior Disposable plastic bite impression trays with a mesh liner designed for taking accurate bite registrations and impressions of interior arches. Made in China.', img: '' },
    { id: 64, category: 'Prosthodontics', name: 'Veneer applicator sticks', price: '160 EGP', desc: 'Size: Box 20 pcs. Disposable placement sticks featuring sticky adhesive tips designed for secure holding, handling, and precise positioning of delicate dental veneers, inlays, or crowns. Made in China.', img: '' },
    { id: 65, category: 'Prosthodontics', name: 'Zhermack Hydrogum 5', price: '535 EGP', desc: 'Weight: 453 g (1 lb). Fast-setting, high-precision alginate impression material featuring 5 days of dimensional stability and a mangoustan scent. Made in Italy .', img: '' },
    { id: 66, category: 'Prosthodontics', name: 'Alginate Cavex CA37', price: '495 EGP', desc: 'Weight: 500 g (1 lb). All-purpose, normal-setting alginate impression material used for making dental impressions with solid tear resistance and smooth surface reproduction. Made in Netherlands.', img: 'assets/products/cavex_alginate.jpg' },
    { id: 67, category: 'Prosthodontics', name: 'Zhermack Tropicalgin', price: '475 EGP', desc: 'Weight: 453 g (1 lb). Normal-setting, chromatic alginate impression material with a color-phase indicator and a lemon and tropical scent. Made in Italy.', img: 'assets/products/zhermack_tropicalgin.png' },
    { id: 68, category: 'Prosthodontics', name: 'Zhermack Zetalgin', price: '295 EGP', desc: 'Weight: 453 g (1 lb). Alginate impression material used for making dental impressions, featuring a mint scent. Made in Italy.', img: '' },
    { id: 69, category: 'Prosthodontics', name: 'Zhermack Zetaplus Intro Kit L', price: '295 EGP', desc: 'Kit Contents: Zetaplus Putty (900 mL) Oranwash L Light Body (140 mL) Indurent Gel Catalyst (60 mL) Mixing Pad & Measuring Spoon C-Silicone dental impression material kit used for two-stage impression technique or single-stage technique with two viscosities. Made in Italy.', img: 'assets/products/zhermack_zeta_plus.png' },
    { id: 70, category: 'Prosthodontics', name: 'Zhermack Zetaplus Putty', price: '1050 EGP', desc: 'Zetaplus Putty (900 mL) High final hardness C-Silicone putty impression material used for preliminary dental impressions, featuring a mint scent Made in Italy.', img: 'assets/products/zhermack_zeta_plus.png' },
    { id: 71, category: 'Prosthodontics', name: 'Zhermack Oranwash L', price: '625 EGP', desc: 'Oranwash L Light Body (140 mL) Hydrocompatible, low-viscosity C-Silicone light body impression material used for second-stage dental impressions, featuring an orange scent. Made in Italy.', img: '' },
    { id: 72, category: 'Prosthodontics', name: 'Zhermack Indurent Gel', price: '550 EGP', desc: 'Indurent Gel Catalyst (60 mL) Gel catalyst specifically designed for use with Zhermack C-Silicone dental impression materials (such as Zetaplus and Oranwash). Made in Italy.', img: '' },
    { id: 73, category: 'Prosthodontics', name: 'Zhermack Elite HD+ Light Body', price: '1450 EGP', desc: 'Hydrophilic, low-viscosity A-Silicone (addition silicone) light body impression material with a fast-setting formula, designed for high-precision dental impressions. Volume / Kit Contents: 100 mL total (2 x 50 mL cartridges) + 12 yellow mixing tips. Made in Italy.', img: '' },
    { id: 74, category: 'Prosthodontics', name: 'Zhermack Elite HD+ Putty Soft', price: '1850 EGP', desc: 'High-precision, addition silicone (A-Silicone) putty soft impression material featuring a fast-setting formula, ideal for two-stage or single-stage dental impression techniques. Volume / Kit Contents: 500 mL total (250 mL Base + 250 mL Catalyst) and 2 measuring spoons. Made in Italy.', img: '' },
    { id: 75, category: 'Prosthodontics', name: 'Dentax Modelling Wax', price: '225 EGP', desc: 'Dental modelling wax sheets used in laboratories for modeling prosthetic bases, fabricating bite rims, and creating wax-ups. Type: Modelling Wax (Pink / Red). Made in Egypt .', img: '' },
    { id: 76, category: 'Prosthodontics', name: 'Dentax Carving Wax', price: '30 EGP', desc: 'Dental carving wax blocks specifically formulated for dental students and technicians to practice tooth morphology, carving, and anatomical shaping. Type: Carving Wax (available in multiple colors: Red, Yellow, Blue). Made in Egypt .', img: '' },
    { id: 77, category: 'Prosthodontics', name: 'Zhermack Occlufast Rock', price: '825 EGP', desc: 'Thixotropic, extra-hard A-Silicone (addition silicone) material specifically developed for high-precision bite registration with an ultra-fast setting time. Volume / Kit Contents: 100 mL total (2 x 50 mL cartridges) + 12 green mixing tips. Made in Italy.', img: '' },
    { id: 78, category: 'Prosthodontics', name: 'Aluminum Impression Trays', price: '15 EGP', desc: 'dental impression trays used to hold alginate or other impression materials securely in place, featuring holes that ensure optimal mechanical retention. Material:  aluminum. Available Sizes: Size 1, Size 2, Size 3 (available as full arch pairs or partials) Made in Egypt .', img: '' },
    { id: 79, category: 'Prosthodontics', name: 'Stainless Steel Impression Trays', price: '55 EGP', desc: 'dental impression trays designed to hold alginate and various impression materials firmly. Material: High-quality, durable stainless steel,  autoclavable for repeated sterilization. Size : 1 , 2 , 3 , particle (1/2) Made in Egypt .', img: '' },
    { id: 80, category: 'Prosthodontics', name: 'Hiflex Tracing Sticks (green stricks)', price: '325 EGP', desc: 'Thermoplastic impression compound sticks (Green Sticks) used for border molding, extension of impression trays, and capturing accurate functional margins. Quantity: 10 sticks per box. Made by Prevest (India)', img: '' },
    { id: 81, category: 'Prosthodontics', name: 'Dental Rubber Mixing Bowls', price: '20 EGP', desc: 'Flexible bowls used for manual mixing of alginates, plaster, and stone. Made in Egypt.', img: '' },
    { id: 82, category: 'Prosthodontics', name: 'Dental Cement Spatula', price: '45 EGP', desc: 'Double-ended stainless steel spatula used for manual mixing of dental cements and liners. Made in Pakistan.', img: '' },
    { id: 83, category: 'Prosthodontics', name: 'Dental Syringe metal', price: '225 EGP', desc: 'Surgical-grade stainless steel aspirating syringe used for administering local anesthesia cartridges. Made in Pakistan.', img: '' },
    { id: 84, category: 'Prosthodontics', name: 'Dental Wax Carver', price: '45 EGP', desc: 'Double-ended stainless steel instrument used for carving, shaping, and modeling dental wax designs and patterns. Made in Pakistan.', img: '' },
    { id: 85, category: 'Prosthodontics', name: 'Dental Plaster Knife / Wax Knife', price: '40 EGP', desc: 'Double-ended instrument with a wooden handle, used in dental laboratories for cutting, scraping, and trimming plaster models or wax. Made in Pakistan.', img: '' },
    { id: 86, category: 'Prosthodontics', name: 'Gingival Retraction Cord Applicator', price: '65 EGP', desc: 'Double-ended stainless steel instrument designed for placing and packing retraction cords into the sulcus. Made in Pakistan.', img: '' },
    { id: 87, category: 'Prosthodontics', name: 'Gingival Retraction Cord (Z-Twist Type)', price: '125 EGP', desc: 'Gingival retraction cord impregnated with epinephrine, used for temporary tissue displacement and fluid control before taking dental impressions. Available Sizes: 000, 00, 0, 1, 2. Made in China.', img: '' },
    { id: 88, category: 'Prosthodontics', name: 'AtriaPak Gingival Retraction Cord', price: '250 EGP', desc: 'Knitted, non-medicated gingival retraction cord used for temporary gingival tissue displacement and sulcus expansion before impressions. Length: 254 cm (100 inches) per bottle. Available Sizes: 000, 00, 0, 1, 2,3. Made by Atriamed', img: '' },
    { id: 89, category: 'Prosthodontics', name: 'VOCO Retraction Paste', price: '220 EGP', desc: 'Astringent retraction paste used for effective temporary widening and drying of the gingival sulcus before impression taking. Contains aluminum chloride to ensure highly efficient hemostasis and fluid control. Made by VOCO (Germany)', img: '' },
    { id: 90, category: 'Prosthodontics', name: 'Denston Hard Dental Stone', price: '125 EGP', desc: 'hard dental stone featuring high compressive strength and low expansion, used for pouring master models, crowns, and bridge frameworks. Weight: 1 Kg. Made by Atay Yapı (Turkey)', img: '' },
    { id: 91, category: 'Prosthodontics', name: 'Denston Extra Hard Dental Stone', price: '125 EGP', desc: 'extra hard  stone featuring maximum fracture resistance and high precision, ideal for fabricating dies, implant models, and complex prosthodontic work. Weight: 1 Kg. Made by Atay Yapı (Turkey)', img: '' },
    { id: 92, category: 'Prosthodontics', name: 'Surgical Blades', price: '290 EGP', desc: 'Sterile, single-use carbon steel blades used for precise surgical incisions and soft tissue cutting. Packaging: 100 Pcs per box (individually foil-wrapped and sterilized by GAMMA radiation). Available Sizes: 11, 15, 15c. Made in china.', img: '' },
    { id: 93, category: 'Prosthodontics', name: 'Stainless Steel Kidney Dish (Kidney Tray)', price: '25 EGP', desc: 'Stainless steel kidney tray used in dental clinics and medical facilities for holding soiled dressings, discarded materials, or small instruments during procedures. Designed with a kidney-shaped profile to fit easily against the patient\'s body to catch any fluids or debris. Made in Egypt.', img: '' },
    { id: 94, category: 'Prosthodontics', name: 'Dental Edentulous Cast (Gypsum Model)', price: '20 EGP', desc: 'Pre-cast dental plaster model representing an edentulous (toothless) arch, used in dental laboratories and universities for educational purposes, training, and fabricating complete dentures. Made in Egypt.', img: '' },
    { id: 95, category: 'Prosthodontics', name: 'Dental Dentulous Cast (Gypsum Study Model)', price: '30 EGP', desc: 'Pre-cast dental plaster model representing a fully dentulous (with teeth) upper and lower arch in occlusion, used in dental laboratories and universities for study, orthodontic analysis, and student training. Made in Egypt.', img: '' },
    { id: 96, category: 'Prosthodontics', name: 'El-Banna Dental  Model', price: '225 EGP', desc: 'Used by students for preclinical training (cavity preparation & cutting). Features removable acrylic teeth and a pink base. Made in Egypt.', img: '' },
    { id: 97, category: 'Prosthodontics', name: 'Citizen Plastic Impression Trays', price: '220 EGP', desc: 'plastic trays used for holding impression material to take accurate oral molds. Disposable ( autoclavable ) and designed for single-use to ensure optimal hygiene. Made in China.', img: '' },
    { id: 98, category: 'Prosthodontics', name: 'Dental Rubber Base Dispensing Gun (1:1 / 2:1)', price: '350 EGP', desc: 'Used for dispensing rubber base, silicones, and other dual-cartridge impression materials. Ensures effortless, even extrusion with a comfortable manual grip Made in China.', img: '' },
    { id: 99, category: 'Prosthodontics', name: 'Plastic Alginate Mixing Spatulas', price: '10 EGP', desc: 'Used for hand-mixing dental impression materials (like alginate) and plaster in rubber bowls. Made of flexible, durable plastic that is easy to clean. Made in Egypt .', img: '' },
    { id: 100, category: 'Prosthodontics', name: 'Aomai Dental Butane Torch small', price: '175 EGP', desc: 'Refillable gas torch used in dental laboratories for heating wax, carvers, and dental instruments. Features an adjustable jet flame, lock switch, and a stable base. Brand: Aomai.', img: '' },
    { id: 101, category: 'Prosthodontics', name: 'Aomai Dental Butane Torch large', price: '270 EGP', desc: 'Refillable gas torch used in dental laboratories for heating wax, carvers, and dental instruments. Features an adjustable jet flame, lock switch, and a stable base. Brand: Aomai.', img: '' },
    { id: 102, category: 'Prosthodontics', name: 'Butane Gas Refill Canister (غاز تعبئة الولاعات)', price: '65 EGP', desc: 'Used for refilling butane torches, lighters, and various dental lab burners. Contains highly purified butane gas to ensure a clean, consistent flame. Made in Egypt', img: '' },

    // --- IMPLANTOLOGY ---
    { id: 110, category: 'Implantology', name: 'Osstem GS III Surgical Kit', price: '22,000 EGP', desc: 'Comprehensive kit for dental implants.', img: 'dental_implant_kit_1779981511316.png' },
    { id: 111, category: 'Implantology', name: 'Dentium SuperLine Implant', price: '3,500 EGP', desc: 'SLA surface internal hex implant.', img: '' },
    { id: 112, category: 'Implantology', name: 'Implant Motor Woodpecker', price: '45,000 EGP', desc: 'Brushless motor with 20:1 handpiece.', img: '' },

    // --- ORTHODONTICS ---
    { id: 120, category: 'Orthodontics', name: 'Metal Brackets MBT 022', price: '1,800 EGP', desc: 'Precision 3M style metal brackets.', img: '' },
    { id: 121, category: 'Orthodontics', name: 'Niti Archwires 016 Upper', price: '850 EGP', desc: 'Super elastic NiTi alignment wires.', img: '' },
    { id: 122, category: 'Orthodontics', name: 'Ligature Ties (40 Sticks)', price: '250 EGP', desc: 'Colorful high-elasticity ligature ties.', img: '' },

    // --- EQUIPMENT ---
    { id: 130, category: 'Equipment', name: 'Woodpecker UDS-A LED Scaler', price: '8,200 EGP', desc: 'Piezo ultrasonic scaler with tank.', img: 'dental_ultrasonic_scaler_1779981671477.png' },
    { id: 131, category: 'Equipment', name: 'NSK Ti-Max Z95L Handpiece', price: '12,500 EGP', desc: 'Titanium high-speed air turbine.', img: 'assets/products/nsk_handpiece.jpg' },
    { id: 132, category: 'Equipment', name: 'Dental Autoclave 23L Class B', price: '75,000 EGP', desc: 'Large capacity vacuum sterilizer.', img: '' },

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
    if (product) {
        alert(`Added ${product.name} to cart!`);
    }
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
            if (navLinks && navLinks.classList.contains('active')) {
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
