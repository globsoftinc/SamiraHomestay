/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
        
        // Show language switcher when opening an accordion
        if (typeof showLangSwitcher === 'function') {
            showLangSwitcher()
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== LANGUAGE TOGGLE ===============*/
const translations = {
    en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About',
        navRooms: 'Rooms',
        navPricing: 'Pricing',
        navServices: 'Services',
        navContact: 'Contact',
        bookNow: 'BOOK NOW',
        
        // Home Section
        homeTitle: 'Welcome to',
        homeTitleSub: 'Bandipur Samira Homestay',
        homeDesc: 'Your next holiday home in Bandipur, far from your home.',
        searchPlaceholder: 'Enter your location to find us...',
        searchBtn: 'Search',
        statsRooms: 'Rooms',
        statsReviews: 'Reviews',
        statsSatisfaction: 'Satisfaction',
        
        // About Section
        aboutSubtitle: 'Our Story',
        aboutTitle: 'Why Samira Homestay',
        aboutDesc: 'Located in Nepal\'s ancient hilltop gem, we offer authentic Newari hospitality. Wake up to Himalayan sunrises, savor home-cooked dal bhat, and explore cobblestone streets unchanged for centuries.',
        aboutYears: 'Years',
        aboutExperience: 'Experience',
        aboutLearnMore: 'Learn More',
        aboutAccordion1Title: 'Traditional Newari Experience',
        aboutAccordion1Desc: 'Stay in a lovingly restored Newari home where every wooden beam tells a story. Our rooms blend traditional architecture with modern comforts, featuring local artifacts and handwoven textiles.',
        aboutAccordion2Title: 'Farm-to-Table Cuisine',
        aboutAccordion2Desc: 'Taste Bandipur\'s heritage through home-cooked meals using organic ingredients from our garden. Enjoy traditional dishes like Newari samay baji, sel roti, and freshly brewed local coffee on our terrace.',
        aboutAccordion3Title: 'In the Lap of the Himalayas',
        aboutAccordion3Desc: 'Wake up to panoramic mountain views from your window. Our homestay sits nestled in Bandipur\'s hills, where crisp mountain air and golden sunrises over the Annapurnas greet you each morning.',
        aboutAccordion4Title: 'Premium Hospitality',
        aboutAccordion4Desc: 'Handpicked organic linens, locally-sourced mountain cuisine, and personalized trekking advice. We blend rustic charm with thoughtful service for an unforgettable mountain retreat.',
        
        // Rooms Section
        roomsSubtitle: 'Experience Bandipur',
        roomsTitle: 'Our Accommodations',
        perNight: '/night',
        withBreakfast: 'With Breakfast: NPR',
        viewTariff: 'View Tariff',
        singleRoom: 'Single Room',
        coupleRoom: 'Couple / Double Room',
        familyRoom: 'Family / Triple Room',
        singleDesc: '• Occupancy 1 person • Private bathroom • Single bed • Enhanced amenities',
        coupleDesc: '• Occupancy 2 people • 1 couple bed • Private shower • Cozy traditional decor',
        coupleAltDesc: '• Mountain view • Private bathroom • Mountain air • Enhanced amenities',
        familyDesc: '• Occupancy 3 people • Panoramic Himalayas • Private shower • 1 single + 1 double bed',
        familyAltDesc: '• Multiple beds (3 person) • Shared bathroom • Ideal for groups • Cultural decor',
        
        // Tariff Section
        tariffSubtitle: 'Transparent Pricing',
        tariffTitle: 'Tariff & Packages',
        tariffIntro: 'Affordable rates for every traveler. Choose room-only or all-inclusive group packages.',
        tabRoomTariff: 'Room Tariff',
        tabGroupPackages: 'Group Packages',
        
        // Tariff Tables
        roomTariffWithBreakfast: 'Room Tariff',
        includingBreakfast: '(Including Breakfast)',
        roomOnly: '(Room Only – Without Breakfast)',
        roomType: 'Room Type',
        capacity: 'Capacity',
        ratePerNight: 'Rate (NPR)/Night',
        singleRoomTable: 'Single Room',
        coupleRoomTable: 'Couple Room',
        tripleRoomTable: 'Triple Room',
        person1: '1 Person',
        persons2: '2 Persons',
        persons3: '3 Persons',
        
        // Group Packages
        groupNepalese: 'Group Package – Nepalese',
        groupForeigners: 'Group Package – Foreigners',
        groupNote: 'Rates per person • Includes Chicken Dinner, Room & Morning Breakfast',
        groupBedNote: 'Bed shared: double-to-double, single-to-single',
        groupSize: 'Group Size',
        ratePerPerson: 'Rate (NPR) Per Person/Night',
        group2to10: '2 – 10 Persons',
        group11to18: '11 – 18 Persons',
        groupMore30: 'More than 30 Persons',
        
        // Tariff CTA
        tariffTagline: '"Your Next Home in Bandipur — Come as Guests, Leave Being Family Members."',
        
        // Services Section (Value)
        servicesSubtitle: 'Our Services',
        servicesTitle: 'Amenities & Facilities',
        servicesDesc: 'We provide exceptional hospitality services to make your stay in Bandipur comfortable and memorable. Enjoy our premium amenities during your visit.',
        
        // Services Accordion
        service1Title: 'In-House Restaurant & Cafe',
        service1Desc: 'Enjoy authentic Nepali cuisine and international dishes at our on-site restaurant and cafe, featuring locally-sourced ingredients.',
        service2Title: 'Free High-Speed WiFi',
        service2Desc: 'Stay connected with complimentary high-speed internet access throughout our property, perfect for both work and leisure.',
        service3Title: 'Local Tour Guide Service',
        service3Desc: 'Explore Bandipur\'s hidden gems with our knowledgeable local guides. We arrange visits to cultural sites, viewpoints, and hiking trails.',
        service4Title: 'Travel & Transportation',
        service4Desc: 'We assist with bus tickets, private transfers, and local transportation arrangements for seamless travel throughout Nepal.',
        service5Title: 'Laundry Services',
        service5Desc: 'Fresh clothes for your adventures! Our laundry service keeps you traveling light while we take care of the rest.',
        service6Title: '24/7 Room Service',
        service6Desc: 'Need something at midnight? Our dedicated staff is available round-the-clock to ensure your comfort and satisfaction.',
        
        serviceBestPrice: 'Best Price Guarantee',
        serviceBestPriceDesc: 'We offer the best value for your money. Our tariff is comparable to the market with local and pocket-friendly prices.',
        groupOffer: 'Note: Special Offers for Group Packages!',
        viewTariffLink: 'View our Tariff →',
        
        // Gallery Section
        gallerySubtitle: 'Our Gallery',
        galleryTitle: 'Explore Samira Homestay',
        
        // Blog Section  
        blogSubtitle: 'Stories from Bandipur',
        blogTitle: 'The Samira Homestay Journal',
        
        // Contact Section
        contactSubtitle: 'Contact Us',
        contactTitle: 'Easy to Contact us',
        contactDesc: 'Need help with your booking? Want recommendations for Bandipur attractions? Or need assistance with your stay? We\'re here to help 24/7.',
        callTitle: 'Call',
        callBtn: 'Call Now',
        messageTitle: 'Message',
        messageDesc: 'WhatsApp',
        messageBtn: 'Message Now',
        locationTitle: 'Location',
        locationDesc: 'Dumre-Bandipur Rd, Bandipur 33904',
        visitBtn: 'Visit Now',
        emailTitle: 'Email',
        emailBtn: 'Email Now',
        
        // Reviews Section
        reviewsSubtitle: 'Guest Experiences',
        reviewsTitle: 'What Our Guests Say',
        leaveReview: 'Leave a Review',
        review1Title: '"A Hidden Gem in Bandipur"',
        review1Text: '"The view of the Himalayas from our room was breathtaking. The hosts treated us like family. Their dal bhat was the best we had in Nepal!"',
        review1Author: '- Sarah M.',
        review2Title: '"Authentic Nepali Hospitality"',
        review2Text: '"We fell in love with this place! The traditional Newari architecture, warm hosts, and stunning mountain views made our trip unforgettable."',
        review2Author: '- Michael K.',
        review3Title: '"Perfect Mountain Retreat"',
        review3Text: '"Waking up to sunrise over the Annapurnas was magical. The homemade breakfast with local honey and fresh coffee was incredible."',
        review3Author: '- Emily R.',
        review4Title: '"Cultural Immersion at its Best"',
        review4Text: '"The homestay organized a traditional Nepali cooking class for us - an absolute highlight! The rooms were cozy with authentic decor."',
        review4Author: '- David L.',
        
        // Subscribe Section
        subscribeTitle: 'Experience Bandipur with Us',
        subscribeDesc: 'Book your authentic Himalayan homestay experience today and discover the magic of Bandipur',
        subscribeBtn: 'Book Now',
        
        // Footer
        footerName: 'Bandipur Samira Homestay & Restaurant',
        footerDesc: 'Experience Authentic Nepali Hospitality',
        footerAbout: 'About',
        footerAboutUs: 'About Us',
        footerAccommodations: 'Accommodations',
        footerAmenities: 'Amenities & Facilities',
        footerWriteToUs: 'Write to us',
        footerFollowUs: 'Follow us',
        footerWeAccept: 'We accept',
        footerCopyright: 'Samira Homestay & Restaurant © 2025. All rights reserved',
        footerDeveloped: 'Developed by GlobSoft Inc.',
        
        // Modal
        modalTitle: 'Full Tariff Details',
        modalClose: '×',
        modalBookNow: 'BOOK NOW',
        modalTagline: '"Come as Guests, Leave Being Family Members."',
        modalRoomWithBreakfast: 'Room Tariff (Including Breakfast)',
        modalRoomOnly: 'Room Tariff (Room Only – Without Breakfast)',
        modalRatePerNight: 'Rate/Night',
        modalGroupNepalese: 'Group Package – Nepalese',
        modalGroupForeigners: 'Group Package – Foreigners',
        modalGroupNote: 'Per person • Includes Chicken Dinner, Room & Morning Breakfast • Bed shared: double-to-double, single-to-single',
        modalRatePerPerson: 'Rate Per Person/Night',
        
        // Booking Modal
        bookingTitle: 'Choose Booking Service'
    },
    np: {
        // Navigation
        navHome: 'होम',
        navAbout: 'बारेमा',
        navRooms: 'कोठा',
        navPricing: 'मूल्य',
        navServices: 'सेवा',
        navContact: 'सम्पर्क',
        bookNow: 'बुक गर्नुहोस्',
        
        // Home Section
        homeTitle: 'स्वागत छ',
        homeTitleSub: 'बन्दीपुर समिरा होमस्टेमा',
        homeDesc: 'बन्दीपुरमा तपाईंको अर्को बिदाको घर, तपाईंको घरबाट टाढा।',
        searchPlaceholder: 'हामीलाई भेट्न आफ्नो स्थान प्रविष्ट गर्नुहोस्...',
        searchBtn: 'खोज्नुहोस्',
        statsRooms: 'कोठाहरू',
        statsReviews: 'समीक्षा',
        statsSatisfaction: 'सन्तुष्टि',
        
        // About Section
        aboutSubtitle: 'हाम्रो कथा',
        aboutTitle: 'किन समिरा होमस्टे',
        aboutDesc: 'नेपालको प्राचीन पहाडको शिखरमा अवस्थित, हामी प्रामाणिक नेवारी आतिथ्य प्रदान गर्दछौं। हिमालयी सूर्योदयको साथ बिहान उठ्नुहोस्, घरमा पकाएको दाल भात खानुहोस्।',
        aboutYears: 'वर्ष',
        aboutExperience: 'अनुभव',
        aboutLearnMore: 'थप जान्नुहोस्',
        aboutAccordion1Title: 'परम्परागत नेवारी अनुभव',
        aboutAccordion1Desc: 'मायालुपूर्वक पुनर्स्थापित नेवारी घरमा बस्नुहोस् जहाँ प्रत्येक काठको धामले एउटा कथा बताउँछ।',
        aboutAccordion2Title: 'फार्मदेखि टेबलसम्म',
        aboutAccordion2Desc: 'हाम्रो बगैंचाबाट जैविक सामग्री प्रयोग गरेर घरमा पकाएको खानाबाट बन्दीपुरको सम्पदाको स्वाद लिनुहोस्।',
        aboutAccordion3Title: 'हिमालको काखमा',
        aboutAccordion3Desc: 'आफ्नो झ्यालबाट विस्तृत पहाडको दृश्य देख्दै बिहान उठ्नुहोस्। हाम्रो होमस्टे बन्दीपुरको पहाडमा बसेको छ।',
        aboutAccordion4Title: 'उत्कृष्ट आतिथ्य',
        aboutAccordion4Desc: 'छानिएका जैविक लिनेन, स्थानीय स्रोतको पहाडी खाना, र व्यक्तिगत ट्रेकिङ सल्लाह।',
        
        // Rooms Section
        roomsSubtitle: 'बन्दीपुरको अनुभव',
        roomsTitle: 'हाम्रा आवासहरू',
        perNight: '/रात',
        withBreakfast: 'नाश्तासहित: रु.',
        viewTariff: 'मूल्य हेर्नुहोस्',
        singleRoom: 'एकल कोठा',
        coupleRoom: 'जोडी / डबल कोठा',
        familyRoom: 'पारिवारिक / ट्रिपल कोठा',
        singleDesc: '• १ व्यक्ति • निजी बाथरुम • एकल बेड • उन्नत सुविधा',
        coupleDesc: '• २ व्यक्ति • १ जोडी बेड • निजी शावर • परम्परागत सजावट',
        coupleAltDesc: '• पहाडको दृश्य • निजी बाथरुम • पहाडी हावा • उन्नत सुविधा',
        familyDesc: '• ३ व्यक्ति • विस्तृत हिमाल • निजी शावर • १ एकल + १ डबल बेड',
        familyAltDesc: '• धेरै बेड (३ व्यक्ति) • साझा बाथरुम • समूहका लागि उपयुक्त',
        
        // Tariff Section
        tariffSubtitle: 'पारदर्शी मूल्य',
        tariffTitle: 'मूल्य तथा प्याकेज',
        tariffIntro: 'प्रत्येक यात्रीका लागि किफायती दरहरू। कोठा मात्र वा समूह प्याकेज छान्नुहोस्।',
        tabRoomTariff: 'कोठा मूल्य',
        tabGroupPackages: 'समूह प्याकेज',
        
        // Tariff Tables
        roomTariffWithBreakfast: 'कोठा मूल्य',
        includingBreakfast: '(नाश्ता सहित)',
        roomOnly: '(कोठा मात्र – नाश्ता बिना)',
        roomType: 'कोठाको प्रकार',
        capacity: 'क्षमता',
        ratePerNight: 'दर (रु.)/रात',
        singleRoomTable: 'एकल कोठा',
        coupleRoomTable: 'जोडी कोठा',
        tripleRoomTable: 'ट्रिपल कोठा',
        person1: '१ व्यक्ति',
        persons2: '२ व्यक्ति',
        persons3: '३ व्यक्ति',
        
        // Group Packages
        groupNepalese: 'समूह प्याकेज – नेपाली',
        groupForeigners: 'समूह प्याकेज – विदेशी',
        groupNote: 'प्रति व्यक्ति • चिकन खाना, कोठा र बिहानको नाश्ता सहित',
        groupBedNote: 'बेड साझा: डबल-टु-डबल, एकल-टु-एकल',
        groupSize: 'समूहको आकार',
        ratePerPerson: 'दर (रु.) प्रति व्यक्ति/रात',
        group2to10: '२ – १० व्यक्ति',
        group11to18: '११ – १८ व्यक्ति',
        groupMore30: '३० भन्दा बढी व्यक्ति',
        
        // Tariff CTA
        tariffTagline: '"बन्दीपुरमा तपाईंको अर्को घर — पाहुनाको रूपमा आउनुहोस्, परिवारको सदस्य बनेर जानुहोस्।"',
        
        // Services Section (Value)
        servicesSubtitle: 'हाम्रा सेवाहरू',
        servicesTitle: 'सुविधाहरू',
        servicesDesc: 'बन्दीपुरमा तपाईंको बसाइ आरामदायी र यादगार बनाउन हामी उत्कृष्ट आतिथ्य सेवाहरू प्रदान गर्दछौं।',
        
        // Services Accordion
        service1Title: 'घरभित्रको रेस्टुरेन्ट र क्याफे',
        service1Desc: 'स्थानीय स्रोतका सामग्रीहरू प्रयोग गरी प्रामाणिक नेपाली खाना र अन्तर्राष्ट्रिय व्यञ्जनहरूको आनन्द लिनुहोस्।',
        service2Title: 'निःशुल्क हाई-स्पिड वाइफाइ',
        service2Desc: 'हाम्रो सम्पत्तिभर निःशुल्क हाई-स्पिड इन्टरनेट पहुँचसँग जोडिएर रहनुहोस्।',
        service3Title: 'स्थानीय टूर गाइड सेवा',
        service3Desc: 'हाम्रा जानकार स्थानीय गाइडहरूसँग बन्दीपुरका लुकेका रत्नहरू अन्वेषण गर्नुहोस्।',
        service4Title: 'यात्रा र यातायात',
        service4Desc: 'हामी बस टिकट, निजी स्थानान्तरण, र स्थानीय यातायात व्यवस्थामा सहयोग गर्दछौं।',
        service5Title: 'लुगा धुने सेवा',
        service5Desc: 'तपाईंको साहसिक कार्यका लागि ताजा लुगाहरू! हाम्रो लुगा धुने सेवाले तपाईंलाई हल्का यात्रा गर्न मद्दत गर्छ।',
        service6Title: '२४/७ कोठा सेवा',
        service6Desc: 'आधी रातमा केही चाहिन्छ? हाम्रा समर्पित कर्मचारीहरू घडी-घडी उपलब्ध छन्।',
        
        serviceBestPrice: 'उत्तम मूल्य ग्यारेन्टी',
        serviceBestPriceDesc: 'हामी तपाईंको पैसाको लागि उत्तम मूल्य प्रदान गर्दछौं। हाम्रो मूल्य स्थानीय र किफायती छ।',
        groupOffer: 'नोट: समूह प्याकेजहरूमा विशेष छुट!',
        viewTariffLink: 'हाम्रो मूल्य हेर्नुहोस् →',
        
        // Gallery Section
        gallerySubtitle: 'हाम्रो ग्यालरी',
        galleryTitle: 'समिरा होमस्टे अन्वेषण गर्नुहोस्',
        
        // Blog Section
        blogSubtitle: 'बन्दीपुरका कथाहरू',
        blogTitle: 'समिरा होमस्टे जर्नल',
        
        // Contact Section
        contactSubtitle: 'सम्पर्क गर्नुहोस्',
        contactTitle: 'सम्पर्क गर्न सजिलो',
        contactDesc: 'तपाईंको बुकिङमा सहयोग चाहिन्छ? बन्दीपुर आकर्षणहरूको सिफारिस चाहनुहुन्छ? हामी २४/७ सहयोग गर्न तयार छौं।',
        callTitle: 'कल',
        callBtn: 'अहिले कल गर्नुहोस्',
        messageTitle: 'सन्देश',
        messageDesc: 'व्हाट्सएप',
        messageBtn: 'अहिले सन्देश पठाउनुहोस्',
        locationTitle: 'स्थान',
        locationDesc: 'दुम्रे-बन्दीपुर रोड, बन्दीपुर ३३९०४',
        visitBtn: 'अहिले भ्रमण गर्नुहोस्',
        emailTitle: 'इमेल',
        emailBtn: 'अहिले इमेल गर्नुहोस्',
        
        // Reviews Section
        reviewsSubtitle: 'पाहुनाको अनुभव',
        reviewsTitle: 'हाम्रा पाहुनाहरू के भन्छन्',
        leaveReview: 'समीक्षा दिनुहोस्',
        review1Title: '"बन्दीपुरमा लुकेको रत्न"',
        review1Text: '"हाम्रो कोठाबाट हिमालको दृश्य अचम्मको थियो। घरधनीले हामीलाई परिवार जस्तो व्यवहार गरे। उनीहरूको दाल भात नेपालमा सबैभन्दा राम्रो थियो!"',
        review1Author: '- सारा एम.',
        review2Title: '"प्रामाणिक नेपाली आतिथ्य"',
        review2Text: '"हामी यो ठाउँको प्रेममा पर्यौं! परम्परागत नेवारी वास्तुकला, न्यानो घरधनी, र अचम्मको पहाडको दृश्यले हाम्रो यात्रा अविस्मरणीय बनायो।"',
        review2Author: '- माइकल के.',
        review3Title: '"उत्तम पहाडी विश्राम"',
        review3Text: '"अन्नपूर्णामाथिको सूर्योदयको साथ बिहान उठ्नु जादुई थियो। स्थानीय महसँग घरमै बनाइएको नाश्ता र ताजा कफी अद्भुत थियो।"',
        review3Author: '- एमिली आर.',
        review4Title: '"सांस्कृतिक अनुभव"',
        review4Text: '"होमस्टेले हाम्रो लागि परम्परागत नेपाली खाना पकाउने कक्षा आयोजना गर्यो - एउटा अद्भुत अनुभव! कोठाहरू प्रामाणिक सजावटसहित आरामदायी थिए।"',
        review4Author: '- डेभिड एल.',
        
        // Subscribe Section
        subscribeTitle: 'हामीसँग बन्दीपुरको अनुभव गर्नुहोस्',
        subscribeDesc: 'आज नै आफ्नो प्रामाणिक हिमालयन होमस्टे अनुभव बुक गर्नुहोस् र बन्दीपुरको जादू पत्ता लगाउनुहोस्',
        subscribeBtn: 'बुक गर्नुहोस्',
        
        // Footer
        footerName: 'बन्दीपुर समिरा होमस्टे र रेस्टुरेन्ट',
        footerDesc: 'प्रामाणिक नेपाली आतिथ्यको अनुभव गर्नुहोस्',
        footerAbout: 'बारेमा',
        footerAboutUs: 'हाम्रो बारेमा',
        footerAccommodations: 'आवासहरू',
        footerAmenities: 'सुविधाहरू',
        footerWriteToUs: 'हामीलाई लेख्नुहोस्',
        footerFollowUs: 'हामीलाई फलो गर्नुहोस्',
        footerWeAccept: 'हामी स्वीकार गर्छौं',
        footerCopyright: 'समिरा होमस्टे र रेस्टुरेन्ट © २०२५। सर्वाधिकार सुरक्षित',
        footerDeveloped: 'ग्लोबसफ्ट इंक द्वारा विकसित',
        
        // Modal
        modalTitle: 'पूर्ण मूल्य विवरण',
        modalClose: '×',
        modalBookNow: 'बुक गर्नुहोस्',
        modalTagline: '"पाहुनाको रूपमा आउनुहोस्, परिवारको सदस्य बनेर जानुहोस्।"',
        modalRoomWithBreakfast: 'कोठा मूल्य (नाश्ता सहित)',
        modalRoomOnly: 'कोठा मूल्य (कोठा मात्र – नाश्ता बिना)',
        modalRatePerNight: 'दर/रात',
        modalGroupNepalese: 'समूह प्याकेज – नेपाली',
        modalGroupForeigners: 'समूह प्याकेज – विदेशी',
        modalGroupNote: 'प्रति व्यक्ति • चिकन खाना, कोठा र बिहानको नाश्ता सहित • बेड साझा: डबल-टु-डबल, एकल-टु-एकल',
        modalRatePerPerson: 'दर प्रति व्यक्ति/रात',
        
        // Booking Modal
        bookingTitle: 'बुकिङ सेवा छान्नुहोस्'
    }
}

// Language toggle functionality
const langToggle = document.getElementById('lang-toggle')
const langIndicator = document.querySelector('.lang-indicator')
let currentLang = localStorage.getItem('selected-lang') || 'en'

// Update language indicator text
function updateLangIndicator(lang) {
    if (langIndicator) {
        langIndicator.textContent = lang === 'en' ? 'EN' : 'ने'
    }
}

// Apply saved language on page load
function applyLanguage(lang) {
    const t = translations[lang]
    currentLang = lang
    
    // Update indicator
    updateLangIndicator(lang)
    
    // Update active class on language options
    const langOptions = document.querySelectorAll('.lang-option')
    langOptions.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('lang-active')
        } else {
            option.classList.remove('lang-active')
        }
    })
    
    // Save to localStorage
    localStorage.setItem('selected-lang', lang)
    
    // Add language class to body for CSS adjustments
    document.body.classList.remove('lang-en', 'lang-np')
    document.body.classList.add(`lang-${lang}`)
    
    // Navigation
    document.querySelectorAll('.nav__link span').forEach((el, i) => {
        const keys = ['navHome', 'navAbout', 'navRooms', 'navPricing', 'navServices', 'navContact']
        if (keys[i] && t[keys[i]]) el.textContent = t[keys[i]]
    })
    
    // Book Now button (nav)
    const bookNowBtn = document.querySelector('.nav__button')
    if (bookNowBtn) bookNowBtn.textContent = t.bookNow
    
    // Home Section
    const homeTitle = document.querySelector('.home__title')
    if (homeTitle) {
        homeTitle.innerHTML = `${t.homeTitle} <br><span style="font-size: 37px;">${t.homeTitleSub}</span>`
    }
    
    const homeDesc = document.querySelector('.home__description')
    if (homeDesc) homeDesc.textContent = t.homeDesc
    
    const searchInput = document.querySelector('.home__search-input')
    if (searchInput) searchInput.placeholder = t.searchPlaceholder
    
    const searchBtn = document.querySelector('.home__search .button a')
    if (searchBtn) searchBtn.textContent = t.searchBtn
    
    // Stats
    const valueDescs = document.querySelectorAll('.home__value-description')
    const statsKeys = ['statsRooms', 'statsReviews', 'statsSatisfaction']
    valueDescs.forEach((el, i) => {
        if (statsKeys[i] && t[statsKeys[i]]) el.textContent = t[statsKeys[i]]
    })
    
    // About Section
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
        const aboutSubtitle = aboutSection.querySelector('.section__subtitle')
        if (aboutSubtitle) aboutSubtitle.textContent = t.aboutSubtitle
        
        const aboutTitle = aboutSection.querySelector('.section__title')
        if (aboutTitle) aboutTitle.innerHTML = `${t.aboutTitle}<span>.</span>`
        
        const aboutDesc = aboutSection.querySelector('.value__description')
        if (aboutDesc) aboutDesc.textContent = t.aboutDesc
    }
    
    // About Accordion items (first 4 in #about section)
    const aboutAccordions = document.querySelectorAll('#about .value__accordion-item')
    const aboutAccordionTitleKeys = ['aboutAccordion1Title', 'aboutAccordion2Title', 'aboutAccordion3Title', 'aboutAccordion4Title']
    const aboutAccordionDescKeys = ['aboutAccordion1Desc', 'aboutAccordion2Desc', 'aboutAccordion3Desc', 'aboutAccordion4Desc']
    
    aboutAccordions.forEach((item, i) => {
        const title = item.querySelector('.value__accordion-title')
        const desc = item.querySelector('.value__accordion-description')
        if (title && aboutAccordionTitleKeys[i]) title.textContent = t[aboutAccordionTitleKeys[i]]
        if (desc && aboutAccordionDescKeys[i]) desc.textContent = t[aboutAccordionDescKeys[i]]
    })
    
    // Rooms Section
    const popularSubtitle = document.querySelector('#popular .section__subtitle')
    if (popularSubtitle) popularSubtitle.textContent = t.roomsSubtitle
    
    const popularTitle = document.querySelector('#popular .section__title')
    if (popularTitle) popularTitle.innerHTML = `${t.roomsTitle}<span>.</span>`
    
    // Room card titles and descriptions
    const roomCards = document.querySelectorAll('#popular .popular__card')
    roomCards.forEach(card => {
        const title = card.querySelector('.popular__title')
        const desc = card.querySelector('.popular__description')
        const priceNote = card.querySelector('.room-price-note')
        const viewTariffBtn = card.querySelector('.button--sm')
        const bookBtn = card.querySelector('.popular__card-actions .button:not(.button--sm)')
        
        if (title) {
            const titleText = title.textContent.toLowerCase()
            if (titleText.includes('single') || titleText.includes('एकल')) {
                title.textContent = t.singleRoom
                if (desc) desc.textContent = t.singleDesc
            } else if (titleText.includes('couple') || titleText.includes('double') || titleText.includes('जोडी')) {
                title.textContent = t.coupleRoom
                if (desc) desc.textContent = t.coupleDesc
            } else if (titleText.includes('family') || titleText.includes('triple') || titleText.includes('पारिवारिक')) {
                title.textContent = t.familyRoom
                if (desc) desc.textContent = t.familyDesc
            }
        }
        
        if (priceNote) {
            const price = priceNote.textContent.match(/[\d,]+/)?.[0] || ''
            priceNote.textContent = `${t.withBreakfast} ${price}`
        }
        
        if (viewTariffBtn) viewTariffBtn.textContent = t.viewTariff
        if (bookBtn) bookBtn.textContent = t.bookNow
    })
    
    // Tariff Section
    const tariffSubtitle = document.querySelector('#tariff .section__subtitle')
    if (tariffSubtitle) tariffSubtitle.textContent = t.tariffSubtitle
    
    const tariffTitle = document.querySelector('#tariff .section__title')
    if (tariffTitle) tariffTitle.innerHTML = `${t.tariffTitle}<span>.</span>`
    
    const tariffIntro = document.querySelector('.tariff__intro')
    if (tariffIntro) tariffIntro.textContent = t.tariffIntro
    
    // Tariff tabs
    const tariffTabs = document.querySelectorAll('.tariff__tab')
    if (tariffTabs.length >= 2) {
        tariffTabs[0].textContent = t.tabRoomTariff
        tariffTabs[1].textContent = t.tabGroupPackages
    }
    
    // Tariff Table Headers
    const tariffTableHeaders = document.querySelectorAll('.tariff__table-header h3')
    tariffTableHeaders.forEach(header => {
        const text = header.textContent.toLowerCase()
        if (text.includes('including breakfast') || text.includes('नाश्ता सहित')) {
            header.innerHTML = `${t.roomTariffWithBreakfast} <small>${t.includingBreakfast}</small>`
        } else if (text.includes('without breakfast') || text.includes('नाश्ता बिना')) {
            header.innerHTML = `${t.roomTariffWithBreakfast} <small>${t.roomOnly}</small>`
        } else if (text.includes('nepalese') || text.includes('नेपाली')) {
            header.textContent = t.groupNepalese
        } else if (text.includes('foreigners') || text.includes('विदेशी')) {
            header.textContent = t.groupForeigners
        }
    })
    
    // Tariff Table Content
    document.querySelectorAll('.tariff__table').forEach(table => {
        const headers = table.querySelectorAll('th')
        headers.forEach(th => {
            const text = th.textContent.toLowerCase()
            if (text.includes('room type') || text.includes('कोठाको प्रकार')) th.textContent = t.roomType
            if (text.includes('capacity') || text.includes('क्षमता')) th.textContent = t.capacity
            if (text.includes('rate') && text.includes('night')) th.textContent = t.ratePerNight
            if (text.includes('group size') || text.includes('समूहको आकार')) th.textContent = t.groupSize
            if (text.includes('per person')) th.textContent = t.ratePerPerson
        })
        
        const cells = table.querySelectorAll('td')
        cells.forEach(td => {
            const text = td.textContent.toLowerCase()
            if (text.includes('single room') || text === 'एकल कोठा') td.textContent = t.singleRoomTable
            if (text.includes('couple room') || text === 'जोडी कोठा') td.textContent = t.coupleRoomTable
            if (text.includes('triple room') || text === 'ट्रिपल कोठा') td.textContent = t.tripleRoomTable
            if (text === '1 person' || text === '१ व्यक्ति') td.textContent = t.person1
            if (text === '2 persons' || text === '२ व्यक्ति') td.textContent = t.persons2
            if (text === '3 persons' || text === '३ व्यक्ति') td.textContent = t.persons3
            if (text.includes('2 – 10') || text.includes('२ – १०')) td.textContent = t.group2to10
            if (text.includes('11 – 18') || text.includes('११ – १८')) td.textContent = t.group11to18
            if (text.includes('more than 30') || text.includes('३० भन्दा बढी')) td.textContent = t.groupMore30
        })
    })
    
    // Group package notes
    document.querySelectorAll('.tariff__table-note').forEach(note => {
        note.innerHTML = `<i class="bx bx-check-circle"></i> ${t.groupNote}<br><i class="bx bx-info-circle"></i> ${t.groupBedNote}`
    })
    
    // Tariff CTA
    const tariffTagline = document.querySelector('.tariff__tagline')
    if (tariffTagline) tariffTagline.innerHTML = `<em>${t.tariffTagline}</em>`
    
    const tariffCTABtn = document.querySelector('.tariff__cta .button')
    if (tariffCTABtn) tariffCTABtn.textContent = t.bookNow
    
    // Services Section (Value - #value)
    const valueSection = document.getElementById('value')
    if (valueSection) {
        const servicesSubtitle = valueSection.querySelector('.section__subtitle')
        if (servicesSubtitle) servicesSubtitle.textContent = t.servicesSubtitle
        
        const servicesTitle = valueSection.querySelector('.section__title')
        if (servicesTitle) servicesTitle.innerHTML = `${t.servicesTitle}<span>.</span>`
        
        const servicesDesc = valueSection.querySelector('.value__data .value__description')
        if (servicesDesc) servicesDesc.textContent = t.servicesDesc
        
        // Services Accordion
        const serviceAccordions = valueSection.querySelectorAll('.value__accordion-item')
        const serviceTitleKeys = ['service1Title', 'service2Title', 'service3Title', 'service4Title', 'service5Title', 'service6Title']
        const serviceDescKeys = ['service1Desc', 'service2Desc', 'service3Desc', 'service4Desc', 'service5Desc', 'service6Desc']
        
        serviceAccordions.forEach((item, i) => {
            const title = item.querySelector('.value__accordion-title')
            const desc = item.querySelector('.value__accordion-description')
            if (title && serviceTitleKeys[i] && t[serviceTitleKeys[i]]) title.textContent = t[serviceTitleKeys[i]]
            if (desc && serviceDescKeys[i] && t[serviceDescKeys[i]]) desc.textContent = t[serviceDescKeys[i]]
        })
        
        // Best Price section within value
        const bestPriceItems = valueSection.querySelectorAll('.value__content > .value__data')
        if (bestPriceItems.length > 1) {
            const bestPriceData = bestPriceItems[1]
            const bpSubtitle = bestPriceData.querySelector('.section__subtitle')
            const bpTitle = bestPriceData.querySelector('.section__title')
            const bpDesc = bestPriceData.querySelector('.value__description')
            
            if (bpSubtitle) bpSubtitle.textContent = t.serviceBestPrice
            if (bpTitle) bpTitle.innerHTML = `${t.serviceBestPrice}<span>.</span>`
            if (bpDesc && !bpDesc.querySelector('a')) bpDesc.textContent = t.serviceBestPriceDesc
        }
    }
    
    // Group offer note with link
    document.querySelectorAll('.value__description').forEach(desc => {
        if (desc.querySelector('a[href="#tariff"]')) {
            desc.innerHTML = `${t.groupOffer} <a href="#tariff" style="color: var(--first-color); text-decoration: underline; cursor:pointer;">${t.viewTariffLink}</a>`
        }
    })
    
    // Gallery Section
    const gallerySubtitle = document.querySelector('#gallery .section__subtitle')
    if (gallerySubtitle) gallerySubtitle.textContent = t.gallerySubtitle
    
    const galleryTitle = document.querySelector('#gallery .section__title')
    if (galleryTitle) galleryTitle.innerHTML = `${t.galleryTitle}<span>.</span>`
    
    // Blog Section
    const blogSubtitle = document.querySelector('#projects .section__subtitle')
    if (blogSubtitle) blogSubtitle.textContent = t.blogSubtitle
    
    const blogTitle = document.querySelector('#projects .section__title')
    if (blogTitle) blogTitle.innerHTML = `${t.blogTitle}<span>.</span>`
    
    // Contact Section
    const contactSubtitle = document.querySelector('#contact .section__subtitle')
    if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle
    
    const contactTitle = document.querySelector('#contact .section__title')
    if (contactTitle) contactTitle.innerHTML = `${t.contactTitle}<span>.</span>`
    
    const contactDesc = document.querySelector('.contact__description')
    if (contactDesc) contactDesc.textContent = t.contactDesc
    
    // Contact cards
    const contactCards = document.querySelectorAll('.contact__card-box')
    const contactTitleKeys = ['callTitle', 'messageTitle', 'locationTitle', 'emailTitle']
    const contactDescKeys = ['messageDesc', 'messageDesc', 'locationDesc', null]
    const contactBtnKeys = ['callBtn', 'messageBtn', 'visitBtn', 'emailBtn']
    
    contactCards.forEach((card, i) => {
        const title = card.querySelector('.contact__card-title')
        const desc = card.querySelector('.contact__card-description')
        const btn = card.querySelector('.contact__card-button a')
        
        if (title && contactTitleKeys[i]) title.textContent = t[contactTitleKeys[i]]
        if (i === 1 && desc) desc.textContent = t.messageDesc
        if (i === 2 && desc) desc.innerHTML = lang === 'np' ? 'दुम्रे-बन्दीपुर रोड,<br>बन्दीपुर ३३९०४' : 'Dumre-Bandipur Rd,<br>Bandipur 33904'
        if (btn && contactBtnKeys[i]) btn.textContent = t[contactBtnKeys[i]]
    })
    
    // Reviews Section
    const reviewsSection = document.getElementById('reviews')
    if (reviewsSection) {
        const reviewsSubtitle = reviewsSection.querySelector('.section__subtitle')
        if (reviewsSubtitle) reviewsSubtitle.textContent = t.reviewsSubtitle
        
        const reviewsTitle = reviewsSection.querySelector('.section__title')
        if (reviewsTitle) reviewsTitle.innerHTML = `${t.reviewsTitle}<span>.</span>`
        
        const leaveReviewBtn = reviewsSection.querySelector('.contact__card-button a')
        if (leaveReviewBtn) leaveReviewBtn.textContent = t.leaveReview
        
        // Review cards
        const reviewCards = reviewsSection.querySelectorAll('.popular__card')
        const reviewTitleKeys = ['review1Title', 'review2Title', 'review3Title', 'review4Title']
        const reviewTextKeys = ['review1Text', 'review2Text', 'review3Text', 'review4Text']
        const reviewAuthorKeys = ['review1Author', 'review2Author', 'review3Author', 'review4Author']
        
        reviewCards.forEach((card, i) => {
            const title = card.querySelector('.popular__title')
            const text = card.querySelector('.popular__description')
            const author = card.querySelector('.review-author strong')
            
            if (title && reviewTitleKeys[i] && t[reviewTitleKeys[i]]) title.textContent = t[reviewTitleKeys[i]]
            if (text && reviewTextKeys[i] && t[reviewTextKeys[i]]) text.textContent = t[reviewTextKeys[i]]
            if (author && reviewAuthorKeys[i] && t[reviewAuthorKeys[i]]) author.textContent = t[reviewAuthorKeys[i]]
        })
    }
    
    // Subscribe Section
    const subscribeTitle = document.querySelector('.subscribe__title')
    if (subscribeTitle) subscribeTitle.textContent = t.subscribeTitle
    
    const subscribeDesc = document.querySelector('.subscribe__description')
    if (subscribeDesc) subscribeDesc.textContent = t.subscribeDesc
    
    const subscribeBtn = document.querySelector('.subscribe__button')
    if (subscribeBtn) subscribeBtn.textContent = t.subscribeBtn
    
    // Footer
    const footerLogo = document.querySelector('.footer__logo')
    if (footerLogo) {
        const img = footerLogo.querySelector('img')
        footerLogo.innerHTML = ''
        if (img) footerLogo.appendChild(img)
        footerLogo.appendChild(document.createTextNode(' ' + t.footerName))
    }
    
    const footerDesc = document.querySelector('.footer__description')
    if (footerDesc) footerDesc.textContent = t.footerDesc
    
    // Footer titles
    const footerTitles = document.querySelectorAll('.footer__title')
    footerTitles.forEach(title => {
        const text = title.textContent.toLowerCase()
        if (text.includes('about') || text.includes('बारेमा')) title.textContent = t.footerAbout
        if (text.includes('follow') || text.includes('फलो')) title.textContent = t.footerFollowUs
        if (text.includes('accept') || text.includes('स्वीकार')) title.textContent = t.footerWeAccept
    })
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer__link')
    footerLinks.forEach(link => {
        const text = link.textContent.toLowerCase().trim()
        if (text.includes('about us') || text.includes('हाम्रो बारेमा')) link.textContent = t.footerAboutUs
        if (text.includes('accommodations') || text.includes('आवास')) link.textContent = t.footerAccommodations
        if (text.includes('amenities') || text.includes('सुविधा')) link.textContent = t.footerAmenities
        if (text.includes('write') || text.includes('लेख्नुहोस्')) link.textContent = t.footerWriteToUs
    })
    
    // Footer copyright
    const footerCopy = document.querySelector('.footer__copy')
    if (footerCopy) footerCopy.textContent = t.footerCopyright
    
    const footerDev = document.querySelector('.footer__privacy a')
    if (footerDev) footerDev.textContent = t.footerDeveloped
    
    // Tariff Modal
    const tariffModal = document.getElementById('tariffModal')
    if (tariffModal) {
        const modalTitle = tariffModal.querySelector('h3')
        if (modalTitle && modalTitle.querySelector('i')) {
            modalTitle.innerHTML = `<i class="bx bx-purchase-tag" style="color: var(--first-color);"></i> ${t.modalTitle}`
        }
        
        // Modal section headings
        const modalHeadings = tariffModal.querySelectorAll('.tariff-modal-heading')
        modalHeadings.forEach(heading => {
            const text = heading.textContent.toLowerCase()
            if (text.includes('including breakfast') || text.includes('नाश्ता सहित')) {
                heading.innerHTML = `<i class="bx bx-coffee"></i> ${t.modalRoomWithBreakfast}`
            } else if (text.includes('without breakfast') || text.includes('नाश्ता बिना')) {
                heading.innerHTML = `<i class="bx bx-bed"></i> ${t.modalRoomOnly}`
            } else if (text.includes('nepalese') || text.includes('नेपाली')) {
                heading.innerHTML = `<i class="bx bx-flag"></i> ${t.modalGroupNepalese}`
            } else if (text.includes('foreigners') || text.includes('विदेशी')) {
                heading.innerHTML = `<i class="bx bx-globe"></i> ${t.modalGroupForeigners}`
            }
        })
        
        // Modal table headers
        tariffModal.querySelectorAll('.tariff-modal-table th').forEach(th => {
            const text = th.textContent.toLowerCase()
            if (text.includes('room type') || text.includes('कोठाको प्रकार')) th.textContent = t.roomType
            if (text.includes('capacity') || text.includes('क्षमता')) th.textContent = t.capacity
            if (text.includes('rate/night') || text.includes('दर/रात')) th.textContent = t.modalRatePerNight
            if (text.includes('group size') || text.includes('समूहको आकार')) th.textContent = t.groupSize
            if (text.includes('per person/night') || text.includes('प्रति व्यक्ति')) th.textContent = t.modalRatePerPerson
        })
        
        // Modal table cells
        tariffModal.querySelectorAll('.tariff-modal-table td').forEach(td => {
            const text = td.textContent.toLowerCase()
            if (text === 'single room' || text === 'एकल कोठा') td.textContent = t.singleRoomTable
            if (text === 'couple room' || text === 'जोडी कोठा') td.textContent = t.coupleRoomTable
            if (text === 'triple room' || text === 'ट्रिपल कोठा') td.textContent = t.tripleRoomTable
            if (text === '1 person' || text === '१ व्यक्ति') td.textContent = t.person1
            if (text === '2 persons' || text === '२ व्यक्ति') td.textContent = t.persons2
            if (text === '3 persons' || text === '३ व्यक्ति') td.textContent = t.persons3
            if (text.includes('2 – 10') || text.includes('२ – १०')) td.textContent = t.group2to10
            if (text.includes('11 – 18') || text.includes('११ – १८')) td.textContent = t.group11to18
            if (text.includes('more than 30') || text.includes('३० भन्दा बढी')) td.textContent = t.groupMore30
        })
        
        // Modal group notes
        tariffModal.querySelectorAll('.tariff-modal-note').forEach(note => {
            note.textContent = t.modalGroupNote
        })
        
        // Modal tagline and button
        const modalTagline = tariffModal.querySelector('p[style*="font-style: italic"]')
        if (modalTagline) modalTagline.textContent = t.modalTagline
        
        const modalBookBtn = tariffModal.querySelector('.button')
        if (modalBookBtn) modalBookBtn.textContent = t.modalBookNow
    }
    
    // Booking Modal
    const bookingModal = document.getElementById('bookingModal')
    if (bookingModal) {
        const bookingTitle = bookingModal.querySelector('h3')
        if (bookingTitle) bookingTitle.textContent = t.bookingTitle
    }
    
    // Save to localStorage
    localStorage.setItem('selected-lang', lang)
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang)
})

// Language toggle click handler - toggles between EN and NP
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'np' : 'en'
        applyLanguage(newLang)
    })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__title, .popular__container, .subscribe__container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})



// Blogs

const sanitizeHTML = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@homestaysamira")
      .then(response => response.json())
      .then(data => {
        const latestArticles = data.items.slice(0, 6);
        latestArticles.forEach(article => {
              const blogCard = document.createElement("article");
              blogCard.classList.add("projects__card");
              
              const sanitizedDescription = sanitizeHTML(article.description);

              blogCard.innerHTML = `

              <article class="projects__card">
                  <div class="projects__image">
                     <img src="${article.description.match(/<img[^>]+src="([^">]+)"/)[1]}" class="projects__img">

                     <a href="${article.link}" class="projects__button button">
                        <i class="bx bx-right-arrow-alt "></i>
                     </a>
                  </div>

                  <div class="projects__content">
                     <span class="projects__subtitle"> ${new Date(article.pubDate).toLocaleDateString()}</span>
                     <h2 class="projects__title">${article.title.substring(0, 50)}...</h2>

                     <p class="projects__description">
                     ${sanitizedDescription.substring(0, 100)}...
                     </p>
                  </div>

                  <div class="projects__buttons">
                       <i class="bx bx-user"></i>${article.author}
                     </a>

                     <a href="https://medium.com/@homestaysamira/" target="_blank" class="projects__link">
                        <i class="bx bx-right-arrow-alt"></i></i> All articles
                     </a>
                  </div>
               </article>
              `;

              blogContainer.appendChild(blogCard);
          });
      })
      .catch(error => console.error("Error fetching Medium blog posts:", error));

});



/**
 * Ad Popup Script - Simplified Version
 * Shows ad when page loads and allows closing
 */

(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
      // Delay before showing popup (in milliseconds)
      showDelay: 1000, // 1 second after page load
      
      // Your website URL (update this!)
      targetUrl: 'http://globweb.globsoft.tech',
      
      // Your ad image URL (update this!)
      adImageUrl: 'assets/img/globweb.png',
      
      // Alt text for accessibility
      adImageAlt: 'Advertisement - Click to visit our website'
  };
  
  // DOM Elements
  let overlay, closeBtn, adLink, adImage;
  
  // Initialize popup
  function init() {
      // Wait for DOM to be fully loaded
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setup);
      } else {
          setup();
      }
  }
  
  // Setup function
  function setup() {
      // Get DOM elements
      overlay = document.getElementById('adPopupOverlay');
      closeBtn = document.getElementById('adPopupClose');
      adLink = document.querySelector('.ad-popup-link');
      adImage = document.querySelector('.ad-popup-image');
      
      // Verify elements exist
      if (!overlay || !closeBtn || !adLink || !adImage) {
          console.error('Ad popup elements not found');
          return;
      }
      
      // Update link and image from config
      adLink.href = CONFIG.targetUrl;
      adImage.src = CONFIG.adImageUrl;
      adImage.alt = CONFIG.adImageAlt;
      
      // Setup event listeners
      setupEventListeners();
      
      // Show popup after delay
      setTimeout(showPopup, CONFIG.showDelay);
  }
  
  // Setup event listeners
  function setupEventListeners() {
      // Close button click
      closeBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          closePopup();
      });
      
      // Close on overlay click (outside popup)
      overlay.addEventListener('click', function(e) {
          if (e.target === overlay) {
              closePopup();
          }
      });
      
      // Close on Escape key
      document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && overlay.classList.contains('ad-popup-active')) {
              closePopup();
          }
      });
  }
  
  // Show popup
  function showPopup() {
      overlay.classList.add('ad-popup-active');
      document.body.classList.add('ad-popup-no-scroll');
      
      // Set focus to close button for accessibility
      setTimeout(() => {
          closeBtn.focus();
      }, 300);
  }
  
  // Close popup
  function closePopup() {
      overlay.classList.remove('ad-popup-active');
      document.body.classList.remove('ad-popup-no-scroll');
  }
  
  // Start initialization
  init();
  
})();
