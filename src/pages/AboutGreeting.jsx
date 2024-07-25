import React from 'react';
import '../styles/about/aboutgreeting.css';

const AboutGreeting = () => {
  return (
    <div className="AboutGreeting-page">
      <aside className="sidebar">
      <div className="AboutGreeting-title">AboutGreeting</div>
        <div className="logo">LOGO</div>
        <div className="greeting">인사말</div>
      </aside>
            <section className="greeting-section">
        <p>안녕하세요! 여행의 새로운 길을 열어주는 PHOTATO에 오신 것을 환영합니다.

PHOTATO는 여러분의 소중한 여행 사진을 통해 최고의 국내 여행지를 추천하는 혁신적인 서비스입니다. 여행지 선택이 고민되시나요? PHOTATO가 도와드리겠습니다. 여러분이 업로드한 사진에서 GPS 정보를 분석하여 위치 정보를 제공하고, 주변의 유명한 관광지와 아름다운 자연 경관을 한눈에 확인할 수 있도록 도와드립니다.

사진 속 풍경만큼이나 멋진 여행지를 찾고 계신가요? PHOTATO는 여러분의 사진을 통해 발견한 위치를 기반으로 주변의 숨겨진 명소와 인기 관광지를 추천합니다. 또한, 해당 위치 주변의 숙소를 추천해드리며, 객실의 이미지를 왜곡 없이 VR 또는 360º 동영상으로 제공하여 실제와 같은 경험을 선사합니다. 여행의 즐거움은 맛있는 음식과 함께 완성되죠. PHOTATO는 사용자 리뷰와 평점을 반영하여 해당 위치 주변의 인기 맛집도 맞춤형으로 추천해드립니다.

PHOTATO는 직관적인 UI/UX를 통해 사용자가 쉽게 사진을 업로드하고, 다양한 여행지 사진을 확인할 수 있도록 설계되었습니다. 또한, 사용자의 선호도를 반영한 개인 맞춤형 여행 추천 기능으로, 여러분의 여행 경험을 더욱 특별하게 만들어 드립니다.

사진 한 장으로 시작되는 여행, 지금 바로 PHOTATO에서 시작하세요! 여러분의 사진이 가이드가 되어, 잊지 못할 추억을 만들어드리겠습니다. PHOTATO와 함께라면, 새로운 여행지 발견의 설렘이 여러분을 기다리고 있습니다.</p>
      </section>
    </div>
  );
};

export default AboutGreeting;