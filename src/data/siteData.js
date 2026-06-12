export const navItems = [
  ['Trang chủ', '/'],
  ['Giới thiệu', '/gioi-thieu'],
  ['Dịch vụ', '/dich-vu'],
  ['Bảng giá', '/bang-gia'],
  ['Quy trình', '/quy-trinh'],
  ['Đặt lịch', '/dat-lich'],
  ['Liên hệ', '/lien-he'],
]

export const fallbackServices = [
  { id: 1, name: 'Giặt sấy theo kg', description: 'Phân loại màu, giặt sạch và sấy thơm cho nhu cầu hằng ngày.' },
  { id: 2, name: 'Giặt hấp / giặt khô', description: 'Xử lý vest, áo khoác và đồ cao cấp cần chăm sóc kỹ.' },
  { id: 3, name: 'Giặt chăn ga gối nệm', description: 'Làm sạch chăn ga, gối, nệm mỏng theo từng bộ.' },
  { id: 4, name: 'Giặt giày dép', description: 'Vệ sinh giày, khử mùi và làm khô đúng cách.' },
  { id: 5, name: 'Ủi đồ', description: 'Ủi thẳng áo sơ mi, quần tây, đồng phục và trang phục công sở.' },
  { id: 6, name: 'Giao nhận tận nhà', description: 'Nhận và trả đồ trong khu vực bán kính 3km.' },
]

export const fallbackPrices = [
  { id: 1, name: 'Giặt thường', priceText: '15.000đ/kg', note: 'Phù hợp quần áo thường ngày' },
  { id: 2, name: 'Giặt + sấy thơm', priceText: '25.000đ/kg', note: 'Sấy khô, thơm lâu' },
  { id: 3, name: 'Giặt hấp vest / áo khoác / đồ cao cấp', priceText: 'Từ 50.000đ/cái', note: 'Xử lý theo chất liệu' },
  { id: 4, name: 'Giặt chăn ga gối nệm', priceText: '40.000đ - 80.000đ/bộ', note: 'Tùy kích thước' },
  { id: 5, name: 'Giặt giày', priceText: 'Từ 50.000đ/đôi', note: 'Vệ sinh, khử mùi' },
  { id: 6, name: 'Ủi đồ', priceText: 'Từ 10.000đ/cái', note: 'Ủi phẳng, treo gọn' },
]

export const defaultStore = {
  brandName: 'Giặt Sấy Hiệp',
  address: '14/75 Nguyễn Quang Diêu, Tân Quý, Tân Phú, Tp HCM',
  googleMapEmbedUrl: '14/75 Nguyen Quang Dieu, Tan Quy, Tan Phu, Ho Chi Minh',
  googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=14%2F75%20Nguyen%20Quang%20Dieu%2C%20Tan%20Quy%2C%20Tan%20Phu%2C%20Ho%20Chi%20Minh',
  hotline: '0900 000 000',
  zaloUrl: 'https://zalo.me/0900000000',
  facebookUrl: 'https://facebook.com/',
  openingHours: '7:00 - 21:00 hằng ngày',
  deliveryPolicy: 'Hỗ trợ giao nhận trong bán kính 3km',
}
