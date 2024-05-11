import React from 'react';
import Layout from '../components/Layout';
import logo from '../images/logo.jpg'; // Adjust the relative path as necessary

const Home = () => {
  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={headingStyle}>الصفحة الرئيسية</h1>
        <img src={logo} alt="شعار الجامعة" style={logoStyle} />
        
        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>مرحبًا بكم</h2>
          <p style={paragraphStyle}>
            مرحبًا بكم في موقع مرافق جامعة الينبع، المصدر الأساسي لكل ما تحتاجون معرفته عن الحرم الجامعي.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>مرافقنا</h2>
          <p style={paragraphStyle}>
            تعرفوا على مرافقنا المتميزة والخدمات التي نقدمها لدعم رحلتكم التعليمية، من الفصول الدراسية الحديثة والمكتبات الغنية بالموارد، إلى الأنشطة الطلابية والمرافق الترفيهية.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>استكشاف البرامج والفعاليات</h2>
          <p style={paragraphStyle}>
            ندعوكم لاستكشاف موقعنا للتعرف أكثر على البرامج الأكاديمية المتنوعة والفعاليات الجامعية القادمة، وكذلك للاطلاع على آخر الأخبار والمستجدات في جامعة الينبع.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>تواصلوا معنا</h2>
          <p style={paragraphStyle}>
            لا تترددوا في التواصل معنا عبر الصفحة الخاصة بالتواصل لأية استفسارات أو معلومات إضافية قد تحتاجونها.
          </p>
        </section>
      </div>
    </Layout>
  );
};

// Enhanced CSS Styles
const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};

const logoStyle = {
  maxWidth: '450px', // Adjust the size of the logo
  marginBottom: '20px',
};

const headingStyle = {
  fontSize: '2.5rem',
  color: '#0056b3',
  marginBottom: '1rem',
};

const subHeadingStyle = {
  fontSize: '2rem',
  color: '#004080', // Slightly darker shade for subheadings
  marginBottom: '10px',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  margin: '10px 0',
};

const sectionStyle = {
  marginBottom: '20px',
};

export default Home;
