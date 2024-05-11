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
          <h2 style={subHeadingStyle}>مرحبًا بكم في مرافق جامعتي</h2>
          <p style={paragraphStyle}>
            منصتكم الأولى لاستكشاف حرم جامعتكم بكل سهولة ويسر. نقدم لكم دليلًا شاملاً للتنقل داخل الجامعة، مما يسهل عليكم الوصول إلى جميع المرافق الأكاديمية والخدمية.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>تصفح الخرائط التفاعلية</h2>
          <p style={paragraphStyle}>
            استخدموا خرائطنا التفاعلية لتجدوا أسرع الطرق إلى الفصول الدراسية، المكتبات، الكافتيريات، وغيرها من المرافق الهامة. خرائطنا مصممة لتكون سهلة الاستخدام ومفيدة لجميع الطلاب الجدد.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>معلومات مفصلة عن المرافق</h2>
          <p style={paragraphStyle}>
            لكل مرفق في الجامعة، الموارد المتوفرة، وخدمات خاصة. هذه المعلومات تساعدكم في التخطيط الأمثل ليومكم الدراسي.
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
  marginBottom: '50px',
};

export default Home;
