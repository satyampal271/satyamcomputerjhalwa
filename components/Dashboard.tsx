import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

// --- MOCK DATA ---
const serviceHistoryTickets = [
  { id: 'SCS-8435', service: 'Laptop Check-Up & Speed Boost', date: '2025-07-10', status: 'Completed' },
  { id: 'SCS-8192', service: 'Data Backup & Recovery', date: '2025-06-21', status: 'Completed' },
  { id: 'SCS-7854', service: 'Windows / OS Installation', date: '2025-04-15', status: 'Cancelled' },
];

const STAGES = ['Service Booked', 'Device Received', 'Diagnosis', 'Repair in Progress', 'Ready for Pickup'];

const activeServiceTickets = [
  { 
    id: 'SCS-9102', 
    service: 'Screen & Keyboard Replacement', 
    device: 'MacBook Pro 14"',
    status: 'Repair in Progress',
    lastUpdate: '2025-07-28'
  },
];

// --- HELPER FUNCTIONS ---
const getStatusClass = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-500/30 text-green-300';
    case 'In Progress': return 'bg-blue-500/30 text-blue-300';
    case 'Cancelled': return 'bg-red-500/30 text-red-300';
    default: return 'bg-yellow-500/30 text-yellow-300';
  }
};

// --- COMPONENTS ---
const ServiceTimeline: React.FC<{ currentStatus: string }> = ({ currentStatus }) => {
    const activeIndex = STAGES.indexOf(currentStatus);

    return (
        <div className="service-timeline my-6">
            {STAGES.map((stage, index) => {
                let statusClass = 'pending';
                if (index < activeIndex) statusClass = 'completed';
                if (index === activeIndex) statusClass = 'active';

                return (
                    <div key={stage} className={`timeline-step ${statusClass}`}>
                        <div className="dot"></div>
                        <div className="label">{stage}</div>
                    </div>
                );
            })}
        </div>
    );
};


const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <main className="py-20 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome back, {user?.name}!</h1>
            <p className="text-xl text-gray-300">Here you can manage your account and view your service history.</p>
          </div>
          
          {/* Active Services Section */}
          <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Active Services</h2>
              {activeServiceTickets.length > 0 ? (
                  <div className="space-y-6">
                      {activeServiceTickets.map(ticket => (
                          <div key={ticket.id} className="glass-card p-6">
                              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                                  <div>
                                      <p className="font-bold text-xl text-white">{ticket.service}</p>
                                      <p className="text-sm text-gray-400">Device: {ticket.device} | Ticket ID: {ticket.id}</p>
                                  </div>
                                  <div className="mt-3 md:mt-0 text-left md:text-right">
                                       <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(ticket.status)}`}>
                                          {ticket.status}
                                        </span>
                                      <p className="text-xs text-gray-500 mt-1">Last Update: {ticket.lastUpdate}</p>
                                  </div>
                              </div>
                              <ServiceTimeline currentStatus={ticket.status} />
                          </div>
                      ))}
                  </div>
              ) : (
                  <div className="glass-card p-8 text-center text-gray-400">
                      <p>You have no active services at the moment.</p>
                  </div>
              )}
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-1">
                 <div className="glass-card p-8 h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-white mb-4">My Account</h2>
                    <div className="flex-grow text-gray-400 py-4 space-y-4">
                       <p>View and edit your profile information, change your password, and manage your account settings.</p>
                    </div>
                     <Link to="/my-account" className="mt-auto block text-center w-full bg-[var(--accent-violet)]/80 text-white font-bold py-3 px-4 rounded-lg hover:bg-[var(--accent-violet)] transition-colors">
                        Go to My Account
                    </Link>
                </div>
            </div>
            <div className="lg:col-span-2">
                 <div className="glass-card p-8 h-full">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-white">Service History</h2>
                       <Link to="/#booking" className="btn-primary py-2 px-5 rounded-md text-sm">
                          Book New Service
                       </Link>
                    </div>
                    
                    <div className="overflow-x-auto">
                      {serviceHistoryTickets.length > 0 ? (
                        <div className="space-y-4">
                          {serviceHistoryTickets.map((ticket) => (
                            <div key={ticket.id} className="bg-[var(--bg-dark-navy)]/50 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                              <div className="flex-1">
                                <p className="font-bold text-white">{ticket.service}</p>
                                <p className="text-sm text-gray-400">Ticket ID: {ticket.id} | Submitted: {ticket.date}</p>
                              </div>
                              <div className="flex-shrink-0">
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(ticket.status)}`}>
                                  {ticket.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-gray-400 py-8">
                            <p>You have no past services.</p>
                        </div>
                      )}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;