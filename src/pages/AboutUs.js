import React from 'react';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={headingStyle}>من نحن</h1>
        <p style={paragraphStyle}>
          نسعى جاهدين لتسهيل العثور على المرافق بالجامعة بسرعة وسهولة. موقع مرافق جامعتي مصمم لتقديم تجربة مستخدم
          فريدة من نوعها، تسمح لك بتحديد وتحديث الوجهات في حرمنا الجامعي بكل يسر وسهولة.
        </p>
        <p style={paragraphStyle}>
          تأسست مرافق جامعتي بهدف تعزيز تجربة التعليم والحياة في الجامعة. نوفر أدوات دقيقة ومعلومات محدثة تساعد
          الطلاب والزوار والموظفين على التنقل داخل الحرم الجامعي بكفاءة.
        </p>
        <p style={paragraphStyle}>
          نحن نؤمن بأن الوصول السهل إلى المعلومات يسهم بشكل كبير في تحسين البيئة التعليمية والحياتية في الجامعة،
          ولذلك نلتزم بتقديم الأفضل دائمًا لكل من يزور جامعتنا.
        </p>
      </div>
    </Layout>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};

const headingStyle = {
  fontSize: '2.5rem',
  color: '#0056b3',
  marginBottom: '1rem',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  margin: '20px 0',
};

export default AboutUs;
