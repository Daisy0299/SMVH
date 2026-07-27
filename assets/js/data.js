const appContent = {
  translations: {
    vi: {
      brandSubtitle: 'Khám phá di sản địa phương',
      aboutTitle: 'Tittle',
      aboutDescription: 'description',
      searchPlaceholder: 'Tìm kiếm địa điểm, từ khóa...',
      footerInfoTitle: 'Thông tin liên hệ',
      footerEmail: 'Gmail:',
      footerPhone: 'SĐT: ',
      footerCopyright: '© 2026 . Phường Thới An giữ toàn quyền bản quyền.',
      readMore: 'Xem chi tiết',
      statisticsPlaces: 'Địa điểm văn hóa',
      statisticsImages: 'Hình ảnh tư liệu',
      statisticsVisits: 'Lượt ghé thăm',
      statisticsFestivals: 'Lễ hội truyền thống',
      noResults: 'Chưa tìm thấy địa điểm phù hợp.',
      previous: '‹',
      next: '›',
      detailHistoricalOrigin: 'Lịch sử & Nguồn gốc',
      detailCulturalMeaning: 'Ý nghĩa văn hóa',
      detailGalleryVideo: 'Ảnh & Video',
      detailMap: 'Vị trí',
      detailShare: 'Chia sẻ địa điểm này',
      detailOpenMap: 'Mở Google Maps',
      detailOpening: 'Giờ mở cửa',
      detailRecognized: 'Năm công nhận',
      detailBuilt: 'Năm xây dựng',
      detailBack: 'Quay về trang chủ',
      detailVideoLabel: 'Video giới thiệu',
      shareFacebook: 'Facebook',
      shareZalo: 'Zalo',
      shareCopy: 'Copy link',
      shareCopied: 'Đã sao chép',
    },
    en: {
      brandSubtitle: 'Discover local heritage',
      aboutTitle: 'Tittle',
      aboutDescription: 'description',
      searchPlaceholder: 'Search destinations, keywords...',
      footerInfoTitle: 'Contact information',
      footerEmail: 'Email:',
      footerPhone: 'Phone:',
      footerCopyright: '© 2026 . Thoi An Ward All rights reserved.',
      readMore: 'Read more',  
      statisticsPlaces: 'Cultural places',
      statisticsImages: 'Archive images',
      statisticsVisits: 'Total visits',
      statisticsFestivals: 'Traditional festivals',
      noResults: 'No matching destination was found.',
      previous: '‹',
      next: '›',
      detailHistoricalOrigin: 'History & Origin',
      detailCulturalMeaning: 'Cultural meaning',
      detailGalleryVideo: 'Gallery & Video',
      detailMap: 'Location',
      detailShare: 'Share this destination',
      detailOpenMap: 'Open Google Maps',
      detailOpening: 'Opening hours',
      detailRecognized: 'Recognized',
      detailBuilt: 'Built',
      detailBack: 'Back to homepage',
      detailVideoLabel: 'Introduction video',
      shareFacebook: 'Facebook',
      shareZalo: 'Zalo',
      shareCopy: 'Copy link',
      shareCopied: 'Copied',
    }
  },
  slides: [
    {
      slug: 'vuon-cau-do',
      image: './assets/images/Khu di tích lịch sử Vườn Cau đỏ/7.png',
      title: {
        vi: 'Khu di tích lịch sử Vườn Cau Đỏ',
        en: 'Red Areca Nut Garden Historical Relic Site'
      },
      subtitle: {
        vi: 'Khu tưởng niệm Vườn Cau Đỏ là căn cứ địa cách mạng kiên cường của Chiến khu An Phú Đông, biểu tượng sáng ngời cho chủ nghĩa anh hùng và tinh thần bất khuất của quân dân Sài Gòn - Gia Định.',
        en: 'Red Areca Nut Garden Memorial Area was a resilient revolutionary base of the An Phu Dong War Zone, serving as a shining symbol of heroism and the indomitable spirit of the people and armed forces of Saigon - Gia Dinh.'
      }
    },
    {
      slug: 'dinh-quoi-an',
      image: 'assets/images/co-do-hue.svg',
      title: {
        vi: 'Đình Quới An',
        en: ''
      },
      subtitle: {
        vi: 'Đình Quới An là ngôi đình cổ kính mang bề dày lịch sử lâu đời của đất Sài Gòn - Gia Định, nơi lưu giữ bản sắc phong thần quý giá do vua Tự Đức ban tặng năm 1852 và là trung tâm sinh hoạt tâm linh, tín ngưỡng cộng đồng bền vững của nhân dân địa phương qua nhiều thế hệ.',
        en: 'Explore royal history, architecture and ceremonial heritage.'
      }
    },
    {
      slug: 'vo-tien-su',
      image: 'assets/images/co-do-hue.svg',
      title: {
        vi: 'Võ Tiên Sư',
        en: 'The Imperial City of Hue, where Nguyen memories still live'
      },
      subtitle: {
        vi: 'Võ Tiên Sư là công trình tín ngưỡng dân gian lâu đời của vùng đất Thới An, nơi tôn vinh, tri ân bậc Tiên sư khai sáng truyền thống và là không gian sinh hoạt tâm linh gắn kết cộng đồng cư dân địa phương.',
        en: 'Explore royal history, architecture and ceremonial heritage.'
      }
    },

  ],
  places: [
    {
      slug: 'vuon-cau-do',
      title: { vi: 'Cố đô Huế', en: 'Imperial City of Hue' },
      address: { vi: 'Thành phố Huế, Thừa Thiên Huế', en: 'Hue City, Thua Thien Hue' },
      shortDescription: {
        vi: 'Quần thể di tích cung đình lưu giữ không gian chính trị, nghệ thuật và nghi lễ của triều Nguyễn.',
        en: 'A royal heritage complex preserving the political, artistic and ceremonial life of the Nguyen dynasty.'
      },
      intro: {
        vi: 'Huế là trung tâm quyền lực của triều Nguyễn và là một trong những quần thể di sản quan trọng nhất Việt Nam.',
        en: 'Hue was the royal center of the Nguyen dynasty and remains one of Vietnam’s most important heritage complexes.'
      },
      builtYear: '1804',
      recognizedYear: '1993',
      openingHours: { vi: '06:30 - 17:30', en: '06:30 AM - 05:30 PM' },
      image: 'assets/images/co-do-hue.svg',
      coverImages: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg'
      ],
      articleImage: 'assets/images/co-do-hue.svg',
      history: {
        vi: 'Cố đô Huế được xây dựng từ đầu thế kỷ XIX dưới triều vua Gia Long, phát triển thành một đô thị hoàng gia với Hoàng thành, Tử Cấm Thành, lăng tẩm và hệ thống đàn miếu bao quanh. Không gian này không chỉ thể hiện quyền lực nhà nước phong kiến mà còn phản ánh tư duy quy hoạch, mỹ thuật và phong thủy đặc sắc của người Việt.',
        en: 'The Imperial City of Hue was established in the early nineteenth century under Emperor Gia Long and developed into a royal city with the Citadel, the Forbidden Purple City, royal tombs and ceremonial temples. It embodies state power while revealing distinctive Vietnamese planning, aesthetics and feng shui principles.'
      },
      culturalMeaning: {
        vi: 'Huế là nơi hội tụ nhã nhạc cung đình, nghệ thuật trang trí, nghi thức tế lễ và ký ức lịch sử của cả một giai đoạn đất nước. Đối với cộng đồng, di sản này là biểu tượng của chiều sâu văn hóa miền Trung và là nguồn cảm hứng cho giáo dục, du lịch và sáng tạo đương đại.',
        en: 'Hue gathers court music, decorative arts, ceremonial practices and the historical memory of an era. For local communities, it represents the cultural depth of Central Vietnam and inspires education, tourism and contemporary creativity.'
      },
      gallery: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg'
      ],
      videoThumbnail: 'assets/images/co-do-hue.svg',
      videoUrl: 'https://www.youtube.com/',
      mapEmbed: 'https://www.google.com/maps?q=Hue%20Imperial%20City&output=embed',
      latitude: 16.4637,
      longitude: 107.5909
    },
    {
      slug: 'co-do-hue',
      title: { vi: 'Cố đô Huế', en: 'Imperial City of Hue' },
      address: { vi: 'Thành phố Huế, Thừa Thiên Huế', en: 'Hue City, Thua Thien Hue' },
      shortDescription: {
        vi: 'Quần thể di tích cung đình lưu giữ không gian chính trị, nghệ thuật và nghi lễ của triều Nguyễn.',
        en: 'A royal heritage complex preserving the political, artistic and ceremonial life of the Nguyen dynasty.'
      },
      intro: {
        vi: 'Huế là trung tâm quyền lực của triều Nguyễn và là một trong những quần thể di sản quan trọng nhất Việt Nam.',
        en: 'Hue was the royal center of the Nguyen dynasty and remains one of Vietnam’s most important heritage complexes.'
      },
      builtYear: '1804',
      recognizedYear: '1993',
      openingHours: { vi: '06:30 - 17:30', en: '06:30 AM - 05:30 PM' },
      image: 'assets/images/co-do-hue.svg',
      coverImages: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg'
      ],
      articleImage: 'assets/images/co-do-hue.svg',
      history: {
        vi: 'Cố đô Huế được xây dựng từ đầu thế kỷ XIX dưới triều vua Gia Long, phát triển thành một đô thị hoàng gia với Hoàng thành, Tử Cấm Thành, lăng tẩm và hệ thống đàn miếu bao quanh. Không gian này không chỉ thể hiện quyền lực nhà nước phong kiến mà còn phản ánh tư duy quy hoạch, mỹ thuật và phong thủy đặc sắc của người Việt.',
        en: 'The Imperial City of Hue was established in the early nineteenth century under Emperor Gia Long and developed into a royal city with the Citadel, the Forbidden Purple City, royal tombs and ceremonial temples. It embodies state power while revealing distinctive Vietnamese planning, aesthetics and feng shui principles.'
      },
      culturalMeaning: {
        vi: 'Huế là nơi hội tụ nhã nhạc cung đình, nghệ thuật trang trí, nghi thức tế lễ và ký ức lịch sử của cả một giai đoạn đất nước. Đối với cộng đồng, di sản này là biểu tượng của chiều sâu văn hóa miền Trung và là nguồn cảm hứng cho giáo dục, du lịch và sáng tạo đương đại.',
        en: 'Hue gathers court music, decorative arts, ceremonial practices and the historical memory of an era. For local communities, it represents the cultural depth of Central Vietnam and inspires education, tourism and contemporary creativity.'
      },
      gallery: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/ho-hoan-kiem.svg'
      ],
      videoThumbnail: 'assets/images/co-do-hue.svg',
      videoUrl: 'https://www.youtube.com/',
      mapEmbed: 'https://www.google.com/maps?q=Hue%20Imperial%20City&output=embed',
      latitude: 16.4637,
      longitude: 107.5909
    },
    {
      slug: 'co-do-hue',
      title: { vi: 'Cố đô Huế', en: 'Imperial City of Hue' },
      address: { vi: 'Thành phố Huế, Thừa Thiên Huế', en: 'Hue City, Thua Thien Hue' },
      shortDescription: {
        vi: 'Quần thể di tích cung đình lưu giữ không gian chính trị, nghệ thuật và nghi lễ của triều Nguyễn.',
        en: 'A royal heritage complex preserving the political, artistic and ceremonial life of the Nguyen dynasty.'
      },
      intro: {
        vi: 'Huế là trung tâm quyền lực của triều Nguyễn và là một trong những quần thể di sản quan trọng nhất Việt Nam.',
        en: 'Hue was the royal center of the Nguyen dynasty and remains one of Vietnam’s most important heritage complexes.'
      },
      builtYear: '1804',
      recognizedYear: '1993',
      openingHours: { vi: '06:30 - 17:30', en: '06:30 AM - 05:30 PM' },
      image: 'assets/images/co-do-hue.svg',
      coverImages: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg'
      ],
      articleImage: 'assets/images/co-do-hue.svg',
      history: {
        vi: 'Cố đô Huế được xây dựng từ đầu thế kỷ XIX dưới triều vua Gia Long, phát triển thành một đô thị hoàng gia với Hoàng thành, Tử Cấm Thành, lăng tẩm và hệ thống đàn miếu bao quanh. Không gian này không chỉ thể hiện quyền lực nhà nước phong kiến mà còn phản ánh tư duy quy hoạch, mỹ thuật và phong thủy đặc sắc của người Việt.',
        en: 'The Imperial City of Hue was established in the early nineteenth century under Emperor Gia Long and developed into a royal city with the Citadel, the Forbidden Purple City, royal tombs and ceremonial temples. It embodies state power while revealing distinctive Vietnamese planning, aesthetics and feng shui principles.'
      },
      culturalMeaning: {
        vi: 'Huế là nơi hội tụ nhã nhạc cung đình, nghệ thuật trang trí, nghi thức tế lễ và ký ức lịch sử của cả một giai đoạn đất nước. Đối với cộng đồng, di sản này là biểu tượng của chiều sâu văn hóa miền Trung và là nguồn cảm hứng cho giáo dục, du lịch và sáng tạo đương đại.',
        en: 'Hue gathers court music, decorative arts, ceremonial practices and the historical memory of an era. For local communities, it represents the cultural depth of Central Vietnam and inspires education, tourism and contemporary creativity.'
      },
      gallery: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/ho-hoan-kiem.svg'
      ],
      videoThumbnail: 'assets/images/co-do-hue.svg',
      videoUrl: 'https://www.youtube.com/',
      mapEmbed: 'https://www.google.com/maps?q=Hue%20Imperial%20City&output=embed',
      latitude: 16.4637,
      longitude: 107.5909
    },
    {
      slug: 'co-do-hue',
      title: { vi: 'Cố đô Huế', en: 'Imperial City of Hue' },
      address: { vi: 'Thành phố Huế, Thừa Thiên Huế', en: 'Hue City, Thua Thien Hue' },
      shortDescription: {
        vi: 'Quần thể di tích cung đình lưu giữ không gian chính trị, nghệ thuật và nghi lễ của triều Nguyễn.',
        en: 'A royal heritage complex preserving the political, artistic and ceremonial life of the Nguyen dynasty.'
      },
      intro: {
        vi: 'Huế là trung tâm quyền lực của triều Nguyễn và là một trong những quần thể di sản quan trọng nhất Việt Nam.',
        en: 'Hue was the royal center of the Nguyen dynasty and remains one of Vietnam’s most important heritage complexes.'
      },
      builtYear: '1804',
      recognizedYear: '1993',
      openingHours: { vi: '06:30 - 17:30', en: '06:30 AM - 05:30 PM' },
      image: 'assets/images/co-do-hue.svg',
      coverImages: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg'
      ],
      articleImage: 'assets/images/co-do-hue.svg',
      history: {
        vi: 'Cố đô Huế được xây dựng từ đầu thế kỷ XIX dưới triều vua Gia Long, phát triển thành một đô thị hoàng gia với Hoàng thành, Tử Cấm Thành, lăng tẩm và hệ thống đàn miếu bao quanh. Không gian này không chỉ thể hiện quyền lực nhà nước phong kiến mà còn phản ánh tư duy quy hoạch, mỹ thuật và phong thủy đặc sắc của người Việt.',
        en: 'The Imperial City of Hue was established in the early nineteenth century under Emperor Gia Long and developed into a royal city with the Citadel, the Forbidden Purple City, royal tombs and ceremonial temples. It embodies state power while revealing distinctive Vietnamese planning, aesthetics and feng shui principles.'
      },
      culturalMeaning: {
        vi: 'Huế là nơi hội tụ nhã nhạc cung đình, nghệ thuật trang trí, nghi thức tế lễ và ký ức lịch sử của cả một giai đoạn đất nước. Đối với cộng đồng, di sản này là biểu tượng của chiều sâu văn hóa miền Trung và là nguồn cảm hứng cho giáo dục, du lịch và sáng tạo đương đại.',
        en: 'Hue gathers court music, decorative arts, ceremonial practices and the historical memory of an era. For local communities, it represents the cultural depth of Central Vietnam and inspires education, tourism and contemporary creativity.'
      },
      gallery: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/ho-hoan-kiem.svg'
      ],
      videoThumbnail: 'assets/images/co-do-hue.svg',
      videoUrl: 'https://www.youtube.com/',
      mapEmbed: 'https://www.google.com/maps?q=Hue%20Imperial%20City&output=embed',
      latitude: 16.4637,
      longitude: 107.5909
    },
    {
      slug: 'co-do-hue',
      title: { vi: 'Cố đô Huế', en: 'Imperial City of Hue' },
      address: { vi: 'Thành phố Huế, Thừa Thiên Huế', en: 'Hue City, Thua Thien Hue' },
      shortDescription: {
        vi: 'Quần thể di tích cung đình lưu giữ không gian chính trị, nghệ thuật và nghi lễ của triều Nguyễn.',
        en: 'A royal heritage complex preserving the political, artistic and ceremonial life of the Nguyen dynasty.'
      },
      intro: {
        vi: 'Huế là trung tâm quyền lực của triều Nguyễn và là một trong những quần thể di sản quan trọng nhất Việt Nam.',
        en: 'Hue was the royal center of the Nguyen dynasty and remains one of Vietnam’s most important heritage complexes.'
      },
      builtYear: '1804',
      recognizedYear: '1993',
      openingHours: { vi: '06:30 - 17:30', en: '06:30 AM - 05:30 PM' },
      image: 'assets/images/co-do-hue.svg',
      coverImages: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg'
      ],
      articleImage: 'assets/images/co-do-hue.svg',
      history: {
        vi: 'Cố đô Huế được xây dựng từ đầu thế kỷ XIX dưới triều vua Gia Long, phát triển thành một đô thị hoàng gia với Hoàng thành, Tử Cấm Thành, lăng tẩm và hệ thống đàn miếu bao quanh. Không gian này không chỉ thể hiện quyền lực nhà nước phong kiến mà còn phản ánh tư duy quy hoạch, mỹ thuật và phong thủy đặc sắc của người Việt.',
        en: 'The Imperial City of Hue was established in the early nineteenth century under Emperor Gia Long and developed into a royal city with the Citadel, the Forbidden Purple City, royal tombs and ceremonial temples. It embodies state power while revealing distinctive Vietnamese planning, aesthetics and feng shui principles.'
      },
      culturalMeaning: {
        vi: 'Huế là nơi hội tụ nhã nhạc cung đình, nghệ thuật trang trí, nghi thức tế lễ và ký ức lịch sử của cả một giai đoạn đất nước. Đối với cộng đồng, di sản này là biểu tượng của chiều sâu văn hóa miền Trung và là nguồn cảm hứng cho giáo dục, du lịch và sáng tạo đương đại.',
        en: 'Hue gathers court music, decorative arts, ceremonial practices and the historical memory of an era. For local communities, it represents the cultural depth of Central Vietnam and inspires education, tourism and contemporary creativity.'
      },
      gallery: [
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/co-do-hue.svg',
        'assets/images/ho-hoan-kiem.svg'
      ],
      videoThumbnail: 'assets/images/co-do-hue.svg',
      videoUrl: 'https://www.youtube.com/',
      mapEmbed: 'https://www.google.com/maps?q=Hue%20Imperial%20City&output=embed',
      latitude: 16.4637,
      longitude: 107.5909
    },
  ]
};
