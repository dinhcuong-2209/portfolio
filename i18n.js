(() => {
  const translations = {
    en: {
      work: 'WORK', about: 'ABOUT', role: 'VISUAL ARTIST / MOTION DESIGNER', disciplines: '3D · EVENT VISUAL · EDITING',
      selectedWorks: '01 / SELECTED WORKS', projects: 'PROJECTS', all: 'ALL', event: 'EVENT', motion: 'MOTION', editing: 'EDITING', explorations: '3D EXPLORATIONS',
      eventCategory: 'EVENT VISUAL / LED STAGE', motionCategory: 'MOTION DESIGN', editingCategory: 'VIDEO EDITING', explorationsCategory: '3D EXPLORATIONS',
      aboutKicker: '02 / ABOUT ME', aboutPreview: 'Visual artist & video editor focused on motion graphics, event visuals, 3D and cinematic content.', moreAbout: 'MORE ABOUT ME →', viewMore: 'VIEW MORE', showLess: 'SHOW LESS', close: 'CLOSE ×', project: 'PROJECT',
      aboutTitle: 'ABOUT ME', aboutIntro: "I'm Cường, a Visual Artist & Motion Designer creating event visuals, 3D motion and digital content for stages, screens and brands.",
      experience: 'EXPERIENCE', experienceText: '3+ YEARS — Event Visual / Motion Design / 3D / Video Production', tools: 'TOOLS', whatIDo: 'WHAT I DO', whatIDoText: 'Event Visual · 3D Motion · Motion Design · Video Editing', basedIn: 'BASED IN', location: 'HO CHI MINH CITY, VIETNAM',
      contactKicker: '03 / CONTACT', contactTitle: 'LET’S WORK<br>TOGETHER', email: 'EMAIL', emailAddress: 'EMAIL ADDRESS', instagramProfile: 'INSTAGRAM PROFILE', behanceProfile: 'BEHANCE PROFILE', getInTouch: 'GET IN TOUCH ↗', backHome: '← BACK TO HOME'
    },
    zh: {
      work: '作品', about: '关于', role: '视觉艺术家 / 动态设计师', disciplines: '3D · 活动视觉 · 剪辑',
      selectedWorks: '01 / 精选作品', projects: '项目', all: '全部', event: '活动视觉', motion: '动态设计', editing: '视频剪辑', explorations: '3D 探索',
      eventCategory: '活动视觉 / LED 舞台', motionCategory: '动态设计', editingCategory: '视频剪辑', explorationsCategory: '3D 探索',
      aboutKicker: '02 / 关于我', aboutPreview: '专注于动态影像、活动视觉、3D 与电影感内容的视觉艺术家和视频剪辑师。', moreAbout: '了解更多 →', viewMore: '查看更多', showLess: '收起', close: '关闭 ×', project: '项目',
      aboutTitle: '关于我', aboutIntro: '我是 Cường，一名视觉艺术家与动态设计师，为舞台、屏幕和品牌创作活动视觉、3D 动画与数字内容。',
      experience: '经验', experienceText: '3 年以上 — 活动视觉 / 动态设计 / 3D / 视频制作', tools: '工具', whatIDo: '专业方向', whatIDoText: '活动视觉 · 3D 动画 · 动态设计 · 视频剪辑', basedIn: '所在地', location: '越南胡志明市',
      contactKicker: '03 / 联系', contactTitle: '期待与您<br>合作', email: '邮箱', emailAddress: '邮箱地址', instagramProfile: 'INSTAGRAM 主页', behanceProfile: 'BEHANCE 主页', getInTouch: '联系我 ↗', backHome: '← 返回首页'
    },
    vi: {
      work: 'DỰ ÁN', about: 'VỀ TÔI', role: 'NGHỆ SĨ THỊ GIÁC / THIẾT KẾ CHUYỂN ĐỘNG', disciplines: '3D · VISUAL SỰ KIỆN · DỰNG PHIM',
      selectedWorks: '01 / DỰ ÁN NỔI BẬT', projects: 'DỰ ÁN', all: 'TẤT CẢ', event: 'SỰ KIỆN', motion: 'MOTION', editing: 'DỰNG PHIM', explorations: 'KHÁM PHÁ 3D',
      eventCategory: 'VISUAL SỰ KIỆN / SÂN KHẤU LED', motionCategory: 'THIẾT KẾ CHUYỂN ĐỘNG', editingCategory: 'DỰNG PHIM', explorationsCategory: 'KHÁM PHÁ 3D',
      aboutKicker: '02 / VỀ TÔI', aboutPreview: 'Nghệ sĩ thị giác và dựng phim tập trung vào motion graphics, visual sự kiện, 3D và nội dung điện ảnh.', moreAbout: 'TÌM HIỂU THÊM →', viewMore: 'XEM THÊM', showLess: 'THU GỌN', close: 'ĐÓNG ×', project: 'DỰ ÁN',
      aboutTitle: 'VỀ TÔI', aboutIntro: 'Tôi là Cường, một Nghệ sĩ Thị giác & Motion Designer, sáng tạo visual sự kiện, chuyển động 3D và nội dung số cho sân khấu, màn hình và thương hiệu.',
      experience: 'KINH NGHIỆM', experienceText: 'HƠN 3 NĂM — Visual Sự kiện / Motion Design / 3D / Sản xuất Video', tools: 'CÔNG CỤ', whatIDo: 'CHUYÊN MÔN', whatIDoText: 'Visual Sự kiện · Chuyển động 3D · Motion Design · Dựng phim', basedIn: 'ĐỊA ĐIỂM', location: 'THÀNH PHỐ HỒ CHÍ MINH, VIỆT NAM',
      contactKicker: '03 / LIÊN HỆ', contactTitle: 'CÙNG NHAU<br>HỢP TÁC', email: 'EMAIL', emailAddress: 'ĐỊA CHỈ EMAIL', instagramProfile: 'TRANG INSTAGRAM', behanceProfile: 'TRANG BEHANCE', getInTouch: 'LIÊN HỆ ↗', backHome: '← VỀ TRANG CHỦ'
    }
  };

  const categoryKeys = { EVENT: 'eventCategory', MOTION: 'motionCategory', EDITING: 'editingCategory', '3D': 'explorationsCategory' };

  document.querySelectorAll('.card[data-cat]').forEach(card => {
    const key = categoryKeys[card.dataset.cat];
    const label = card.querySelector('.meta p');
    if (key && label) {
      label.dataset.i18n = key;
      card.dataset.categoryI18n = key;
    }
  });

  const applyLanguage = language => {
    const lang = translations[language] ? language : 'en';
    const dictionary = translations[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = dictionary[element.dataset.i18n];
      if (value === undefined) return;
      if (element.hasAttribute('data-i18n-html')) element.innerHTML = value;
      else element.textContent = value;
    });
    document.querySelectorAll('.card[data-category-i18n]').forEach(card => {
      card.dataset.category = dictionary[card.dataset.categoryI18n];
    });
    document.querySelectorAll('[data-lang]').forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.lang-mobile').forEach(select => { select.value = lang; });
    try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
    document.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language: lang } }));
  };

  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  document.querySelectorAll('.lang-mobile').forEach(select => select.addEventListener('change', () => applyLanguage(select.value)));
  let saved = 'en';
  try { saved = localStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
  applyLanguage(saved);
})();
