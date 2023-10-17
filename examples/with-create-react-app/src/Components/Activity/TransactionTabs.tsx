import React from 'react';
import TransactionListHistory from "./TransactionListHistory";
import TransactionListUsers from "./TransactionListUsers";
import TransactionListRecent from "./TransactionListRecent";


interface TransactionTabsProps {
  handleTabClick: (tab: string) => void;
  activeTab: string;
}

const TransactionTabs: React.FC<TransactionTabsProps> = ({ handleTabClick, activeTab }) => {
  return (
    <div>
      <div className="w-[416px] h-[34px] px-5 py-2.5 justify-start items-center gap-5 inline-flex">
        <div
          className={`justify-start items-center gap-4 flex ${
            activeTab === 'history' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('history')}
        >
          <div className="text-center text-stone-950 text-opacity-80 text-xs font-bold font-['Montserrat'] uppercase leading-[14.40px] tracking-tight">
            history
          </div>
        </div>
        <div
          className={`justify-start items-center gap-4 flex ${
            activeTab === 'users' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('users')}
        >
          <div className="text-center text-stone-950 text-opacity-20 text-xs font-bold font-['Montserrat'] uppercase leading-[14.40px] tracking-tight">
            users
          </div>
        </div>
        <div
          className={`justify-start items-center gap-4 flex ${
            activeTab === 'recent' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('recent')}
        >
          <div className="text-center text-stone-950 text-opacity-20 text-xs font-bold font-['Montserrat'] uppercase leading-[14.40px] tracking-tight">
            recent apps
          </div>
        </div>
      </div>
      <div>
        {/* Render the component based on the active tab */}
        {activeTab === 'history' && <TransactionListHistory />}
        {activeTab === 'users' && <TransactionListUsers />}
        {activeTab === 'recent' && <TransactionListRecent />}
      </div>
    </div>
  );
};

export default TransactionTabs;
