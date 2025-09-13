export interface ComponentOption {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ComponentCategory {
  id: 'cpu' | 'gpu' | 'ram' | 'storage' | 'case';
  name: string;
  options: ComponentOption[];
}

export const componentCategories: ComponentCategory[] = [
  {
    id: 'cpu',
    name: 'Processor (CPU)',
    options: [
      { id: 'cpu-i5', name: 'Intel Core i5-13600K', price: 25000, imageUrl: 'https://images.unsplash.com/photo-1628289307455-c93a7a37a153?q=80&w=2070&auto=format&fit=crop' },
      { id: 'cpu-i7', name: 'Intel Core i7-13700K', price: 35000, imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3c84e?q=80&w=2070&auto=format&fit=crop' },
      { id: 'cpu-r7', name: 'AMD Ryzen 7 7800X3D', price: 40000, imageUrl: 'https://images.unsplash.com/photo-1619639534633-3a78a1c1d8bd?q=80&w=2070&auto=format&fit=crop' },
    ],
  },
  {
    id: 'gpu',
    name: 'Graphics Card (GPU)',
    options: [
      { id: 'gpu-4060', name: 'NVIDIA GeForce RTX 4060', price: 30000, imageUrl: 'https://images.unsplash.com/photo-1627807025346-d8b5b058b857?q=80&w=2070&auto=format&fit=crop' },
      { id: 'gpu-4070', name: 'NVIDIA GeForce RTX 4070 Ti', price: 75000, imageUrl: 'https://images.unsplash.com/photo-1634549909778-3a8c1e48398a?q=80&w=2070&auto=format&fit=crop' },
      { id: 'gpu-7800xt', name: 'AMD Radeon RX 7800 XT', price: 55000, imageUrl: 'https://images.unsplash.com/photo-1581954369438-9583c4415494?q=80&w=2070&auto=format&fit=crop' },
    ],
  },
  {
    id: 'ram',
    name: 'Memory (RAM)',
    options: [
      { id: 'ram-16gb', name: '16GB DDR5 5200MHz', price: 8000, imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop' },
      { id: 'ram-32gb', name: '32GB DDR5 6000MHz', price: 15000, imageUrl: 'https://images.unsplash.com/photo-1631039849207-6c8f8b357602?q=80&w=2070&auto=format&fit=crop' },
      { id: 'ram-64gb', name: '64GB DDR5 6400MHz', price: 28000, imageUrl: 'https://images.unsplash.com/photo-1616422285434-77a83a04f98a?q=80&w=2070&auto=format&fit=crop' },
    ],
  },
  {
    id: 'storage',
    name: 'Storage (SSD)',
    options: [
      { id: 'ssd-1tb', name: '1TB NVMe M.2 SSD', price: 7000, imageUrl: 'https://images.unsplash.com/photo-1624705001865-680f9345d3e2?q=80&w=2070&auto=format&fit=crop' },
      { id: 'ssd-2tb', name: '2TB NVMe M.2 SSD', price: 13000, imageUrl: 'https://images.unsplash.com/photo-1603460897593-c40c8f3a3a93?q=80&w=1974&auto=format&fit=crop' },
      { id: 'ssd-4tb', name: '4TB NVMe M.2 SSD', price: 25000, imageUrl: 'https://images.unsplash.com/photo-1591796399968-30545a68c4a0?q=80&w=2070&auto=format&fit=crop' },
    ],
  },
    {
    id: 'case',
    name: 'PC Case',
    options: [
      { id: 'case-lianli', name: 'Lian Li O11 Dynamic', price: 12000, imageUrl: 'https://images.unsplash.com/photo-1625941398357-55a5b5505440?q=80&w=2070&auto=format&fit=crop' },
      { id: 'case-nzxt', name: 'NZXT H5 Flow RGB', price: 9000, imageUrl: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=2070&auto=format&fit=crop' },
      { id: 'case-fractal', name: 'Fractal Design North', price: 15000, imageUrl: 'https://images.unsplash.com/photo-1598057076887-957386353911?q=80&w=1974&auto=format&fit=crop' },
    ],
  },
];
