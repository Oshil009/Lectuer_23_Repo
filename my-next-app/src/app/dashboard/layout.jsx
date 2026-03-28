import Link from 'next/link';
import './dashboard.css';

export default function DashboardLayout({ children }) {
    return (
        <div className="dashboard-container">
            <nav className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                </ul>
            </nav>
            <main className="content">
                {children}
            </main>
        </div>
    );
}