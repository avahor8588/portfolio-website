import React from 'react';
import '../../App.css';

export default function Resume(){
  // In dev, PUBLIC_URL is "". In production (gh-pages), it's "/portfolio-website".
  const resumeUrl = `${process.env.PUBLIC_URL || ''}/resume.pdf`;

  return (
    <div className='container' style={{ padding: '2rem 0 3rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Resume</h1>
      <p style={{ marginBottom: '1rem', color: '#64748b' }}>
        Inline preview below. If your browser blocks PDF preview, use the buttons to view or download.
      </p>

      <div style={{
        width: '100%',
        maxWidth: 1000,
        minHeight: 800,
        margin: '0 auto',
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
      }}>
        <object
          data={`${resumeUrl}#view=FitH`}
          type='application/pdf'
          aria-label='Aamil Vahora Resume PDF'
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: 12 }}
        >
          <iframe
            title='Resume Fallback'
            src={`${resumeUrl}#toolbar=0&view=FitH`}
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: 12 }}
          />
        </object>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: '1rem', flexWrap: 'wrap' }}>
        <a className='btn-primary' href={resumeUrl} target='_blank' rel='noopener noreferrer'>Open in new tab</a>
        <a className='btn-secondary' href={resumeUrl} download>Download PDF</a>
      </div>
    </div>
  );
}
