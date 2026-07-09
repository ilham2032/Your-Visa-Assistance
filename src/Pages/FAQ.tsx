import React, { useState } from 'react'
import PageHero from '../Components/PageHero'

const faqs = [
  {
    question: 'Which countries do you provide visa assistance for?',
    answer: 'We provide visa assistance for all 195 countries worldwide. Whether you need a Schengen visa, US visa, UK visa, or any other destination — our team has the expertise to guide you through the entire process.',
  },
  {
    question: 'How long does the visa application process take?',
    answer: 'Processing times vary by country and visa type. Tourist visas typically take 2–4 weeks, while work or student visas may take 6–12 weeks. We offer fast-track services for urgent applications and will provide a realistic timeline during your free consultation.',
  },
  {
    question: 'What documents do I need for a visa application?',
    answer: 'Required documents depend on the destination country and visa type. Common requirements include a valid passport, application form, photographs, proof of financial means, travel itinerary, and invitation letters. We provide a customized checklist for your specific case.',
  },
  {
    question: 'Do you guarantee visa approval?',
    answer: 'While we cannot guarantee approval — as final decisions rest with embassy and consulate officials — our meticulous preparation and document review significantly improve success rates. We have a 98% client satisfaction rate and extensive experience with applications across all countries.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our fees depend on the visa type, destination country, and level of support required. We offer transparent pricing with no hidden costs. Contact us for a free consultation and personalized quote tailored to your needs.',
  },
  {
    question: 'Can you help with visa rejections or appeals?',
    answer: 'Yes. If your visa has been rejected, we analyze the refusal reasons, identify gaps in your application, and help you prepare a stronger reapplication or appeal where applicable.',
  },
  {
    question: 'Do you offer travel coordination alongside visa services?',
    answer: 'Absolutely. We provide integrated travel coordination including flight bookings, itinerary planning, accommodation guidance, and travel insurance — all aligned with your visa requirements and travel dates.',
  },
  {
    question: 'Is the initial consultation really free?',
    answer: 'Yes, your first consultation is completely free with no obligation. During this session, we assess your situation, recommend the best visa path, and outline the steps and costs involved.',
  },
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our visa services, process, and policies."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
      />

      <section className="page-content section-alt">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FAQ
