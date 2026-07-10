
## Cách thêm địa điểm mới

Mở file `assets/js/data.js`, trong mảng `appContent.places` thêm 1 object mới theo cấu trúc:

```js
{
  slug: 'ten-dia-diem',
  title: { vi: 'Tên tiếng Việt', en: 'English name' },
  address: { vi: 'Địa chỉ tiếng Việt', en: 'English address' },
  shortDescription: { vi: 'Mô tả ngắn', en: 'Short description' },
  intro: { vi: 'Đoạn giới thiệu ngắn', en: 'Short intro' },
  builtYear: '...',
  recognizedYear: '...',
  openingHours: { vi: '08:00 - 17:00', en: '08:00 AM - 05:00 PM' },
  image: 'link ảnh card',
  coverImages: ['ảnh bìa 1', 'ảnh bìa 2', 'ảnh bìa 3'],
  articleImage: 'ảnh giữa bài',
  history: { vi: 'Nội dung lịch sử', en: 'History content' },
  culturalMeaning: { vi: 'Ý nghĩa văn hóa', en: 'Cultural meaning' },
  gallery: ['ảnh 1', 'ảnh 2', 'ảnh 3', 'ảnh 4'],
  videoThumbnail: 'ảnh thumbnail video',
  videoUrl: 'link video',
  mapEmbed: 'https://www.google.com/maps?q=...&output=embed',
  latitude: 10.0,
  longitude: 106.0
}

