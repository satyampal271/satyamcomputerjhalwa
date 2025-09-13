import React, { useState, useMemo } from 'react';
import { componentCategories, ComponentCategory, ComponentOption } from './pcBuilderData';
import { useNavigate } from 'react-router-dom';

type SelectedComponents = {
  [key in ComponentCategory['id']]?: string;
};

const PCBuilder: React.FC = () => {
  const [selected, setSelected] = useState<SelectedComponents>({});
  const navigate = useNavigate();

  const handleSelect = (categoryId: ComponentCategory['id'], optionId: string) => {
    setSelected(prev => ({ ...prev, [categoryId]: optionId }));
  };
  
  const handleBookNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate(`/#booking?service=Custom%20Gaming%20PC%20Build`);
      setTimeout(() => {
          document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  };

  const { totalPrice, summaryItems } = useMemo(() => {
    let total = 0;
    const items: (ComponentOption & { categoryName: string })[] = [];
    
    for (const category of componentCategories) {
      const selectedOptionId = selected[category.id];
      if (selectedOptionId) {
        const option = category.options.find(o => o.id === selectedOptionId);
        if (option) {
          total += option.price;
          items.push({ ...option, categoryName: category.name });
        }
      }
    }
    return { totalPrice: total, summaryItems: items };
  }, [selected]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Component Selection */}
      <div className="lg:col-span-2 space-y-8">
        {componentCategories.map(category => (
          <div key={category.id}>
            <h3 className="text-2xl font-bold text-[var(--accent-cyan)] mb-4 border-b-2 border-[var(--accent-violet)]/30 pb-2">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.options.map(option => (
                <div 
                  key={option.id}
                  onClick={() => handleSelect(category.id, option.id)}
                  className={`glass-card p-4 cursor-pointer flex flex-col h-full transition-all duration-300 ${selected[category.id] === option.id ? 'border-[var(--accent-cyan)] shadow-[0_0_20px_var(--accent-cyan)]/50' : 'border-[var(--accent-violet)]/20'}`}
                >
                  <img src={option.imageUrl} alt={option.name} className="w-full h-32 object-cover rounded-md mb-3" loading="lazy" />
                  <h4 className="text-sm font-semibold text-white flex-grow">{option.name}</h4>
                  <p className="text-lg font-bold text-[var(--accent-cyan)] mt-2">₹{option.price.toLocaleString('en-IN')}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Build Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
            <div className="glass-card p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Your Custom Build</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {summaryItems.length > 0 ? summaryItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 bg-[var(--bg-dark-navy)]/50 p-2 rounded-md">
                    <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" loading="lazy"/>
                    <div>
                    <p className="text-xs text-gray-400">{item.categoryName}</p>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    </div>
                    <p className="text-sm text-[var(--accent-cyan)] ml-auto">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                )) : <p className="text-gray-400 text-center py-8">Select components to start your build.</p>}
            </div>
            <div className="mt-6 border-t border-[var(--accent-violet)]/30 pt-4">
                <div className="flex justify-between items-center text-2xl font-bold">
                <span className="text-white">Total:</span>
                <span className="text-[var(--accent-cyan)]">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
            </div>
             <a
                href="#booking"
                onClick={handleBookNav}
                className={`w-full text-center mt-6 btn-primary py-3 px-8 rounded-md ${totalPrice === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-disabled={totalPrice === 0}
            >
                Book This Build
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PCBuilder;
