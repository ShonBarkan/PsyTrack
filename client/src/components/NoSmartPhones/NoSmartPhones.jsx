import React from 'react';

const NoSmartPhones = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* English Version */}
      <h1 style={{ color: '#ff6347', fontSize: '2rem' }}>Smartphones Aren't Our Jam... Yet! 📱❌</h1>
      <p style={{ color: '#333', fontSize: '1.2rem' }}>
        Oops! Our site isn’t quite ready for smartphones yet. But don’t give up—switch to a computer, and you’ll unlock the full experience! 💻✨
      </p>

      {/* Hebrew Version */}
      <h1 style={{ color: '#ff6347', fontSize: '2rem' }}>סמארטפונים זה לא הקטע שלנו... עדיין! 📱❌</h1>
      <p style={{ color: '#333', fontSize: '1.2rem', direction: 'rtl' }}>
        אופס! האתר שלנו עדיין לא מוכן לסמארטפונים. אבל אל תוותרו—עברו למחשב ותחוו את כל החוויה! 💻✨
      </p>
    </div>
  );
};

export default NoSmartPhones;
