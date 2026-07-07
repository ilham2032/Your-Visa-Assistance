import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-col">
					<h4>Contact</h4>
					<p>Baku, Azerbaijan</p>
					<p><a href="mailto:info@yourvisaassistance.az">info@yourvisaassistance.az</a></p>
				</div>
				<div className="footer-col">
					<h4>Services</h4>
					<p>Visa Consultation</p>
					<p>Application Support</p>
					<p>Document Review</p>
				</div>
				<div className="footer-col">
					<h4>Follow Us</h4>
					<p><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> • <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a> • <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></p>
				</div>
			</div>
			<div className="footer-bottom">© {new Date().getFullYear()} Your Visa Assistance. All rights reserved.</div>
			<style>{`
				.site-footer {
					border-top: 1px solid #e5e7eb;
					padding: 80px 40px;
					margin-top: 0;
					background: #f8fafc;
				}
				.footer-inner {
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					gap: 80px;
					justify-content: space-between;
					margin-bottom: 48px;
				}
				.footer-col {
					color: #6b7280;
					text-align: left;
					flex: 1;
				}
				.footer-col h4 {
					margin: 0 0 16px;
					color: #1f2937;
					font-size: 15px;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 0.5px;
				}
				.footer-col p {
					margin: 0 0 10px;
					font-size: 14px;
					line-height: 1.6;
				}
				.footer-col a {
					color: #6b7280;
					text-decoration: none;
					transition: color 0.3s ease;
				}
				.footer-col a:hover {
					color: #1e3a8a;
				}
				.footer-bottom {
					max-width: 1200px;
					margin: 0 auto;
					color: #9ca3af;
					font-size: 13px;
					text-align: center;
					padding-top: 32px;
					border-top: 1px solid #e5e7eb;
				}
				@media (max-width: 768px) {
					.site-footer {
						padding: 60px 24px;
					}
					.footer-inner {
						flex-direction: column;
						gap: 40px;
						margin-bottom: 32px;
					}
					.footer-col {
						text-align: center;
					}
				}
			`}</style>
		</footer>
	)
}

export default Footer
