import React from "react";
import { Link } from "react-router";

type PageHeroProps = {
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; to?: string }[];
};

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-decor" aria-hidden="true">
        <svg
          viewBox="0 0 220 140"
          className="page-hero-plane page-hero-plane-1"
        >
          <path
            d="M24 92l132-50-24 34-46 6 16 18-16 8-10-16-22 10 18-22-20-14z"
            fill="rgba(255,255,255,0.24)"
          />
          <path
            d="M24 92l132-50"
            stroke="rgba(255,255,255,0.34)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M76 82l30 6"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M108 56l14 10"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <svg viewBox="0 0 220 160" className="page-hero-map page-hero-map-1">
          <path
            d="M34 40h56l20-16h70v80l-32 16-46-16-34 10-34-12z"
            fill="none"
            stroke="rgba(255,255,255,0.26)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M90 24v48"
            stroke="rgba(255,255,255,0.26)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M146 24v56"
            stroke="rgba(255,255,255,0.26)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M54 40v56"
            stroke="rgba(255,255,255,0.26)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M70 66h30"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M124 72h24"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <svg
          viewBox="0 0 220 140"
          className="page-hero-plane page-hero-plane-2"
        >
          <path
            d="M18 86l122-44-24 30-42 2 14 20-16 8-12-16-24 10 22-22-20-18z"
            fill="rgba(255,255,255,0.16)"
          />
          <path
            d="M18 86l122-44"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M70 74l22 4"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="page-hero-inner">
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="breadcrumb-item">
                {i > 0 && <span className="breadcrumb-sep">/</span>}
                {item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;
