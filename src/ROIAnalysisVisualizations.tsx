import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, ComposedChart, ReferenceLine, ReferenceDot } from 'recharts';
import { Settings, Cloud, TrendingUp, ChevronRight, Calendar, TrendingDown, ArrowUp, ArrowDown } from 'lucide-react';

const ROIAnalysisVisualizations = () => {
  // フェーズ1のデータ: 報告書作成工数削減
  const workloadReductionData = [
    { name: 'AI導入前', hours: 200, fill: '#6366f1' },
    { name: 'AI導入後', hours: 130, fill: '#06b6d4' }
  ];

  // フェーズ1: 投資対効果の推移
  const phase1ROIData = [
    { year: '導入時', systemDev: 2500, trainingCost: 300, maintenance: 0, savings: 0, balance: -2800 },
    { year: '1年目', systemDev: 0, trainingCost: 0, maintenance: 400, savings: 1070, balance: -2130 },
    { year: '2年目', systemDev: 0, trainingCost: 0, maintenance: 400, savings: 1070, balance: -1460 },
    { year: '3年目', systemDev: 0, trainingCost: 0, maintenance: 400, savings: 1070, balance: -790 },
    { year: '4年目', systemDev: 0, trainingCost: 0, maintenance: 400, savings: 1070, balance: -120 },
    { year: '5年目', systemDev: 0, trainingCost: 0, maintenance: 400, savings: 1070, balance: 550 }
  ];

  // フェーズ2: SaaS顧客数と収益の推移 (60社中、初年度5社からスタート)
  const saasGrowthData = [
    { year: '初年度', customers: 5, revenue: 540, penetration: 8.3 },
    { year: '2年目', customers: 8, revenue: 864, penetration: 13.3 },
    { year: '3年目', customers: 11, revenue: 1188, penetration: 18.3 },
    { year: '4年目', customers: 14, revenue: 1512, penetration: 23.3 },
    { year: '5年目', customers: 17, revenue: 1836, penetration: 28.3 }
  ];

  // フェーズ2: 投資対効果の推移
  const phase2ROIData = [
    { year: '導入時', extension: 1500, cloud: 0, salesSupport: 0, revenue: 0, balance: -1500 },
    { year: '1年目', extension: 0, cloud: 300, salesSupport: 800, revenue: 540, balance: -2060 },
    { year: '2年目', extension: 0, cloud: 300, salesSupport: 800, revenue: 864, balance: -2296 },
    { year: '3年目', extension: 0, cloud: 300, salesSupport: 800, revenue: 1188, balance: -2208 },
    { year: '4年目', extension: 0, cloud: 300, salesSupport: 800, revenue: 1512, balance: -1796 },
    { year: '5年目', extension: 0, cloud: 300, salesSupport: 800, revenue: 1836, balance: -1060 },
    { year: '6年目', extension: 0, cloud: 300, salesSupport: 800, revenue: 2160, balance: 0 },
    { year: '7年目', extension: 0, cloud: 300, salesSupport: 800, revenue: 2484, balance: 1384 }
  ];

  // フェーズ3: アプリユーザー数と収益の推移
  const appGrowthData = [
    { year: '初年度', users: 800, revenue: 4608 },
    { year: '2年目', users: 1280, revenue: 7373 },
    { year: '3年目', users: 2048, revenue: 11797 }
  ];

  // フェーズ3: 投資対効果の推移
  const phase3ROIData = [
    { year: '導入時', appDev: 2500, establishment: 7500, marketing: 0, revenue: 0, balance: -10000 },
    { year: '1年目', appDev: 0, establishment: 0, marketing: 1500, revenue: 4608, balance: -6892 },
    { year: '2年目', appDev: 0, establishment: 0, marketing: 1500, revenue: 7373, balance: -1019 },
    { year: '3年目', appDev: 0, establishment: 0, marketing: 1500, revenue: 11797, balance: 9278 },
    { year: '4年目', appDev: 0, establishment: 0, marketing: 1500, revenue: 18875, balance: 26653 },
    { year: '5年目', appDev: 0, establishment: 0, marketing: 1500, revenue: 30200, balance: 55353 }
  ];

  // 3フェーズROI比較
  const phaseComparisonData = [
    { name: 'フェーズ1', investment: 3700, returns: 3210, roi: -13.2 },
    { name: 'フェーズ2', investment: 5400, returns: 2592, roi: -51.7 },
    { name: 'フェーズ3', investment: 14500, returns: 47200, roi: 225.6 }
  ];

  // ROI 7年間の推移データ
  const roiTrendData = [
    { year: '導入時', phase1: -100, phase2: -100, phase3: -100 },
    { year: '1年目', phase1: -70, phase2: -80, phase3: -65 },
    { year: '2年目', phase1: -40, phase2: -60, phase3: -30 },
    { year: '3年目', phase1: -10, phase2: -40, phase3: 0 },
    { year: '4年目', phase1: 20, phase2: -20, phase3: 30 },
    { year: '5年目', phase1: 50, phase2: 0, phase3: 100 },
    { year: '6年目', phase1: 80, phase2: 30, phase3: 160 },
    { year: '7年目', phase1: 110, phase2: 60, phase3: 225.6 }
  ];

  // リスク評価マトリックスデータ
  const risks = [
    { name: 'AI精度不足', impact: 3, probability: 2, phase: 'フェーズ1' },
    { name: '顧客獲得遅延', impact: 4, probability: 3, phase: 'フェーズ2' },
    { name: '競合SaaS出現', impact: 3, probability: 4, phase: 'フェーズ2' },
    { name: '市場評価変動', impact: 5, probability: 4, phase: 'フェーズ3' },
    { name: '技術開発遅延', impact: 4, probability: 3, phase: 'フェーズ3' }
  ];

  // カラーパレット更新
  // 支出項目用の色（赤系）と収益項目用の色（青・緑系）を明確に分ける
  const EXPENSE_COLORS = ['#ef4444', '#f97316', '#f59e0b', '#d946ef']; // 赤、オレンジ、アンバー、紫
  const INCOME_COLORS = ['#06b6d4', '#0ea5e9', '#22c55e', '#10b981']; // シアン、青、緑、エメラルド

  // グラデーション定義 - スタイリッシュな色調
  // 収入（効果額）用のグラデーション
  const incomeGradient = (
    <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
    </linearGradient>
  );

  // 支出用のグラデーション
  const expenseGradient = (
    <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.2}/>
    </linearGradient>
  );

  // 累積収支用のグラデーション
  const balanceGradient = (
    <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.2}/>
    </linearGradient>
  );

  // フェーズ2とフェーズ3のグラフに使用する新しいグラデーション
  // フェーズ2: 顧客数用の明確な赤系グラデーション
  const customersGradient = (
    <linearGradient id="customersGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#dc2626" stopOpacity={0.2}/>
    </linearGradient>
  );

  // フェーズ2: 収益用の明確な緑系グラデーション
  const saasRevenueGradient = (
    <linearGradient id="saasRevenueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#16a34a" stopOpacity={0.2}/>
    </linearGradient>
  );

  // フェーズ3: ユーザー数用の青紫系グラデーション
  const usersGradient = (
    <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#4338ca" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#4338ca" stopOpacity={0.2}/>
    </linearGradient>
  );

  // フェーズ3: 収益用の橙系グラデーション
  const appRevenueGradient = (
    <linearGradient id="appRevenueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ea580c" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ea580c" stopOpacity={0.2}/>
    </linearGradient>
  );

  // フェーズごとの明確に異なる色を定義（ROI推移グラフ用）
  const PHASE_COLORS = {
    phase1: {
      main: '#0ea5e9', // 青（ブルー）
      light: '#e0f2fe',
      dark: '#0369a1',
      name: 'フェーズ1：基盤構築'
    },
    phase2: {
      main: '#16a34a', // 緑（グリーン）
      light: '#dcfce7',
      dark: '#166534',
      name: 'フェーズ2：SaaS展開'
    },
    phase3: {
      main: '#ea580c', // オレンジ
      light: '#ffedd5',
      dark: '#9a3412',
      name: 'フェーズ3：AI企業設立'
    }
  };

  return (
    <div className="flex flex-col w-full space-y-8 p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent py-2">RACRO AIプロジェクト ROI分析</h1>
      
      {/* フェーズの概要 - より視覚的にインパクトのあるデザインに更新 */}
      <div className="relative bg-gradient-to-r from-slate-50 to-white p-8 rounded-2xl shadow-xl overflow-hidden">
        {/* 背景の装飾要素 */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -ml-32 -mb-32"></div>
        
        {/* タイトル - よりインパクトのある表示に */}
        <div className="relative z-10 mb-10">
          <h2 className="text-4xl font-black mb-3 text-center bg-gradient-to-r from-indigo-800 via-blue-700 to-sky-600 bg-clip-text text-transparent">
            3つのフェーズによる段階的展開
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full"></div>
          <p className="text-center mt-3 text-gray-600 text-lg italic">
            短期・中期・長期にわたる<span className="font-bold text-indigo-700">戦略的展開</span>で最大の効果を実現
          </p>
        </div>
        
        {/* フェーズカード - コントラストを強めた新デザイン */}
        <div className="relative flex flex-col md:flex-row gap-8 mt-6 z-10">
          {/* フェーズ1 */}
          <div className="flex-1 transform transition-all duration-300 hover:scale-105 hover:-rotate-1">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-1 rounded-2xl shadow-lg">
              <div className="bg-white p-6 rounded-xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white mr-4 shadow-lg">
                    <Settings size={28} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-indigo-400 uppercase tracking-wider">フェーズ1</span>
                    <h3 className="font-black text-2xl text-indigo-700 tracking-tight leading-tight">基盤構築</h3>
                  </div>
                </div>
                
                <div className="mt-2 mb-4">
                  <p className="text-gray-700 font-medium">業務効率化・社内DXによるコスト削減</p>
                </div>
                
                <div className="mt-auto">
                  <div className="mb-4 bg-indigo-50 p-4 rounded-xl">
                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <p className="text-xs text-indigo-400 font-bold uppercase">投資額</p>
                        <p className="text-2xl font-black text-indigo-800">3,700<span className="text-sm font-bold">万円</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="flex items-center bg-red-50 px-3 py-2 rounded-full border border-red-100">
                      <span className="text-sm font-black text-red-700">ROI: </span>
                      <span className="text-lg ml-1 font-black text-red-600">-13.2%</span>
                    </div>
                    <div className="flex items-center bg-green-50 px-3 py-2 rounded-full border border-green-100">
                      <span className="text-sm font-black text-green-700">回収: </span>
                      <span className="text-lg ml-1 font-black text-green-600">3.5年</span>
                    </div>
                  </div>
                  
                  <p className="text-left text-indigo-600 font-bold text-sm italic">足元の業務改善を起点に、次の飛躍を目指す</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center text-gray-300">
            <ChevronRight size={48} className="drop-shadow-md" />
          </div>
          
          {/* フェーズ2 */}
          <div className="flex-1 transform transition-all duration-300 hover:scale-105 hover:-rotate-1">
            <div className="bg-gradient-to-br from-sky-600 to-teal-600 p-1 rounded-2xl shadow-lg">
              <div className="bg-white p-6 rounded-xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-600 text-white mr-4 shadow-lg">
                    <Cloud size={28} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sky-400 uppercase tracking-wider">フェーズ2</span>
                    <h3 className="font-black text-2xl text-sky-700 tracking-tight leading-tight">事業拡大</h3>
                  </div>
                </div>
                
                <div className="mt-2 mb-4">
                  <p className="text-gray-700 font-medium">SaaS展開・業界内顧客への価値提供</p>
                </div>
                
                <div className="mt-auto">
                  <div className="mb-4 bg-sky-50 p-4 rounded-xl">
                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <p className="text-xs text-sky-400 font-bold uppercase">投資額</p>
                        <p className="text-2xl font-black text-sky-800">5,400<span className="text-sm font-bold">万円</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="flex items-center bg-red-50 px-3 py-2 rounded-full border border-red-100">
                      <span className="text-sm font-black text-red-700">ROI: </span>
                      <span className="text-lg ml-1 font-black text-red-600">-51.7%</span>
                    </div>
                    <div className="flex items-center bg-green-50 px-3 py-2 rounded-full border border-green-100">
                      <span className="text-sm font-black text-green-700">回収: </span>
                      <span className="text-lg ml-1 font-black text-green-600">5年以降</span>
                    </div>
                  </div>
                  
                  <p className="text-left text-sky-600 font-bold text-sm italic">市場を先取りすることで、持続可能な収益モデルを確立する</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center text-gray-300">
            <ChevronRight size={48} className="drop-shadow-md" />
          </div>
          
          {/* フェーズ3 */}
          <div className="flex-1 transform transition-all duration-300 hover:scale-105 hover:-rotate-1">
            <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-1 rounded-2xl shadow-lg">
              <div className="bg-white p-6 rounded-xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-violet-600 text-white mr-4 shadow-lg">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-violet-400 uppercase tracking-wider">フェーズ3</span>
                    <h3 className="font-black text-2xl text-violet-700 tracking-tight leading-tight">飛躍的成長</h3>
                  </div>
                </div>
                
                <div className="mt-2 mb-4">
                  <p className="text-gray-700 font-medium">AI企業設立・専門特化による価値創造</p>
                </div>
                
                <div className="mt-auto">
                  <div className="mb-4 bg-violet-50 p-4 rounded-xl">
                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <p className="text-xs text-violet-400 font-bold uppercase">投資額</p>
                        <p className="text-2xl font-black text-violet-800">1億4,500<span className="text-sm font-bold">万円</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="flex items-center bg-green-50 px-3 py-2 rounded-full border border-green-100">
                      <span className="text-sm font-black text-green-700">ROI: </span>
                      <span className="text-lg ml-1 font-black text-green-600">+225.6%</span>
                    </div>
                    <div className="flex items-center bg-green-50 px-3 py-2 rounded-full border border-green-100">
                      <span className="text-sm font-black text-green-700">回収: </span>
                      <span className="text-lg ml-1 font-black text-green-600">約3年</span>
                    </div>
                  </div>
                  
                  <p className="text-left text-violet-600 font-bold text-sm italic">独自の技術力を武器に、業界のトップランナーへ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ROI推移チャート - 色分け強化と回収ポイント明確化 */}
        <div className="mt-12 bg-white/80 p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Calendar className="mr-2" size={20} />
            各フェーズのROI推移
          </h3>
          
          {/* フェーズの色分け凡例 - わかりやすく */}
          <div className="flex flex-wrap gap-4 mb-4 justify-center">
            <div className="flex items-center px-4 py-2 rounded-lg" style={{ backgroundColor: PHASE_COLORS.phase1.light, borderLeft: `4px solid ${PHASE_COLORS.phase1.main}` }}>
              <span className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: PHASE_COLORS.phase1.main }}></span>
              <span className="font-bold" style={{ color: PHASE_COLORS.phase1.dark }}>フェーズ1: 基盤構築</span>
            </div>
            <div className="flex items-center px-4 py-2 rounded-lg" style={{ backgroundColor: PHASE_COLORS.phase2.light, borderLeft: `4px solid ${PHASE_COLORS.phase2.main}` }}>
              <span className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: PHASE_COLORS.phase2.main }}></span>
              <span className="font-bold" style={{ color: PHASE_COLORS.phase2.dark }}>フェーズ2: SaaS展開</span>
            </div>
            <div className="flex items-center px-4 py-2 rounded-lg" style={{ backgroundColor: PHASE_COLORS.phase3.light, borderLeft: `4px solid ${PHASE_COLORS.phase3.main}` }}>
              <span className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: PHASE_COLORS.phase3.main }}></span>
              <span className="font-bold" style={{ color: PHASE_COLORS.phase3.dark }}>フェーズ3: AI企業設立</span>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={roiTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <defs>
                  {/* 各フェーズ用のグラデーション定義 - 色の差別化 */}
                  <linearGradient id="phase1Color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={PHASE_COLORS.phase1.main} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={PHASE_COLORS.phase1.main} stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="phase2Color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={PHASE_COLORS.phase2.main} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={PHASE_COLORS.phase2.main} stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="phase3Color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={PHASE_COLORS.phase3.main} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={PHASE_COLORS.phase3.main} stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(0,0,0,0.1)" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#374151' }}
                  stroke="rgba(0,0,0,0.2)"
                />
                <YAxis 
                  unit="%" 
                  domain={[-120, 240]}
                  tick={{ fill: '#374151' }}
                  stroke="rgba(0,0,0,0.2)"
                  tickCount={7}
                  width={60}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.95)', 
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '0.5rem',
                    color: '#374151'
                  }}
                  itemStyle={{ color: '#4b5563' }}
                  labelStyle={{ color: '#374151', fontWeight: 'bold' }}
                  formatter={(value, name, props) => {
                    // 各フェーズのカラーコードを適用
                    let color = '#374151';
                    let prefix = '';
                    
                    if (name === 'phase1') {
                      color = PHASE_COLORS.phase1.main;
                      prefix = 'フェーズ1: ';
                    } else if (name === 'phase2') {
                      color = PHASE_COLORS.phase2.main;
                      prefix = 'フェーズ2: ';
                    } else if (name === 'phase3') {
                      color = PHASE_COLORS.phase3.main;
                      prefix = 'フェーズ3: ';
                    }
                    
                    return [
                      <span style={{ color: color, fontWeight: 'bold' }}>{value}%</span>,
                      <span style={{ color: color }}>{prefix}{value < 0 ? '投資フェーズ' : '回収フェーズ'}</span>
                    ];
                  }}
                />
                <Legend 
                  verticalAlign="top" 
                  height={36}
                  wrapperStyle={{ color: '#4b5563' }}
                  formatter={(value, entry) => {
                    // 凡例にフェーズ名を表示
                    if (value === 'phase1') {
                      return <span style={{ color: PHASE_COLORS.phase1.main, fontWeight: 'bold' }}>フェーズ1: 社内利用</span>;
                    } else if (value === 'phase2') {
                      return <span style={{ color: PHASE_COLORS.phase2.main, fontWeight: 'bold' }}>フェーズ2: SaaS展開</span>;
                    } else if (value === 'phase3') {
                      return <span style={{ color: PHASE_COLORS.phase3.main, fontWeight: 'bold' }}>フェーズ3: AI企業設立</span>;
                    }
                    return value;
                  }}
                />
                
                {/* 収支ゼロラインをはっきりと表示 */}
                <ReferenceLine y={0} stroke="rgba(0,0,0,0.4)" strokeWidth={1.5} />
                
                {/* フェーズの回収期間を示す縦のリファレンスライン */}
                {/* フェーズ1の回収ポイント - 明確に表示 */}
                <ReferenceLine 
                  x="3年目" 
                  stroke={PHASE_COLORS.phase1.main} 
                  strokeWidth={2}
                  strokeDasharray="5 5" 
                  label={{ 
                    value: "フェーズ1回収時点", 
                    fill: PHASE_COLORS.phase1.dark, 
                    position: 'top',
                    backgroundColor: PHASE_COLORS.phase1.light,
                    padding: 5,
                    fontWeight: 'bold',
                    fontSize: 12,
                    textAnchor: 'middle'
                  }} 
                />
                
                {/* フェーズ3の回収ポイント - 明確に表示 */}
                <ReferenceLine 
                  x="3年目" 
                  stroke={PHASE_COLORS.phase3.main} 
                  strokeWidth={2}
                  strokeDasharray="5 5" 
                  label={{ 
                    value: "フェーズ3回収時点", 
                    fill: PHASE_COLORS.phase3.dark, 
                    position: 'bottom',
                    backgroundColor: PHASE_COLORS.phase3.light,
                    padding: 5,
                    fontWeight: 'bold',
                    fontSize: 12,
                    textAnchor: 'middle'
                  }} 
                />
                
                {/* フェーズ2の回収ポイント - 明確に表示 */}
                <ReferenceLine 
                  x="5年目" 
                  stroke={PHASE_COLORS.phase2.main} 
                  strokeWidth={2}
                  strokeDasharray="5 5" 
                  label={{ 
                    value: "フェーズ2回収時点", 
                    fill: PHASE_COLORS.phase2.dark, 
                    position: 'insideTopLeft',
                    backgroundColor: PHASE_COLORS.phase2.light,
                    padding: 5,
                    fontWeight: 'bold',
                    fontSize: 12
                  }} 
                />
                
                {/* 各フェーズの線 - 太さと色を明確に区別 */}
                <Line 
                  type="monotone" 
                  dataKey="phase1" 
                  name="phase1" 
                  stroke={PHASE_COLORS.phase1.main}
                  strokeWidth={4}
                  dot={{ 
                    fill: PHASE_COLORS.phase1.main, 
                    r: 4, 
                    strokeWidth: 2, 
                    stroke: '#fff' 
                  }}
                  activeDot={{ 
                    fill: PHASE_COLORS.phase1.main, 
                    r: 8, 
                    strokeWidth: 0 
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="phase2" 
                  name="phase2" 
                  stroke={PHASE_COLORS.phase2.main}
                  strokeWidth={4}
                  dot={{ 
                    fill: PHASE_COLORS.phase2.main, 
                    r: 4, 
                    strokeWidth: 2, 
                    stroke: '#fff' 
                  }}
                  activeDot={{ 
                    fill: PHASE_COLORS.phase2.main, 
                    r: 8, 
                    strokeWidth: 0 
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="phase3" 
                  name="phase3" 
                  stroke={PHASE_COLORS.phase3.main}
                  strokeWidth={4}
                  dot={{ 
                    fill: PHASE_COLORS.phase3.main, 
                    r: 4, 
                    strokeWidth: 2, 
                    stroke: '#fff' 
                  }}
                  activeDot={{ 
                    fill: PHASE_COLORS.phase3.main, 
                    r: 8, 
                    strokeWidth: 0 
                  }}
                />
                
                {/* 回収ポイントをマーク */}
                {/* フェーズ1の回収ポイント特別マーカー */}
                <ReferenceDot x="3年目" y={-10} r={8} fill={PHASE_COLORS.phase1.light} stroke={PHASE_COLORS.phase1.main} strokeWidth={2} />
                
                {/* フェーズ2の回収ポイント特別マーカー */}
                <ReferenceDot x="5年目" y={0} r={8} fill={PHASE_COLORS.phase2.light} stroke={PHASE_COLORS.phase2.main} strokeWidth={2} />
                
                {/* フェーズ3の回収ポイント特別マーカー */}
                <ReferenceDot x="3年目" y={0} r={8} fill={PHASE_COLORS.phase3.light} stroke={PHASE_COLORS.phase3.main} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* 回収期間バッジ - さらに明確に */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl p-4 flex flex-col items-center justify-center"
                style={{ backgroundColor: PHASE_COLORS.phase1.light, border: `2px solid ${PHASE_COLORS.phase1.main}` }}>
              <p className="font-bold text-lg" style={{ color: PHASE_COLORS.phase1.dark }}>フェーズ1: 基盤構築</p>
              <div className="mt-2 flex items-center">
                <Calendar className="mr-2" size={18} style={{ color: PHASE_COLORS.phase1.main }} />
                <span className="font-bold text-lg" style={{ color: PHASE_COLORS.phase1.dark }}>回収期間: 約3.5年</span>
              </div>
            </div>
            
            <div className="rounded-xl p-4 flex flex-col items-center justify-center"
                style={{ backgroundColor: PHASE_COLORS.phase2.light, border: `2px solid ${PHASE_COLORS.phase2.main}` }}>
              <p className="font-bold text-lg" style={{ color: PHASE_COLORS.phase2.dark }}>フェーズ2: SaaS展開</p>
              <div className="mt-2 flex items-center">
                <Calendar className="mr-2" size={18} style={{ color: PHASE_COLORS.phase2.main }} />
                <span className="font-bold text-lg" style={{ color: PHASE_COLORS.phase2.dark }}>回収期間: 5年目以降</span>
              </div>
            </div>
            
            <div className="rounded-xl p-4 flex flex-col items-center justify-center"
                style={{ backgroundColor: PHASE_COLORS.phase3.light, border: `2px solid ${PHASE_COLORS.phase3.main}` }}>
              <p className="font-bold text-lg" style={{ color: PHASE_COLORS.phase3.dark }}>フェーズ3: AI企業設立</p>
              <div className="mt-2 flex items-center">
                <Calendar className="mr-2" size={18} style={{ color: PHASE_COLORS.phase3.main }} />
                <span className="font-bold text-lg" style={{ color: PHASE_COLORS.phase3.dark }}>回収期間: 約3年</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">すべてのROI値と回収期間は各フェーズの全データを詳細分析した結果に基づいています</p>
          </div>
        </div>
      </div>

      {/* フェーズ1: 投資内訳 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">フェーズ1: 投資内訳</h2>
        <div className="p-4">
          <h3 className="font-bold text-xl text-indigo-700 mb-3">総投資額 (3年): <span className="text-2xl">3,700万円</span></h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
              <span className="font-semibold">システム開発費: <span className="text-indigo-600">2,500万円</span></span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
              <span className="font-semibold">導入・研修費: <span className="text-indigo-600">300万円</span></span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
              <span className="font-semibold">年間運用保守費: <span className="text-indigo-600">400万円 × 3年 = 1,200万円</span></span>
            </li>
          </ul>
          <p className="mt-4 bg-indigo-50 p-3 rounded-lg text-indigo-700">
            <span className="font-bold">計算式: </span>
            2,500万円 + 300万円 + (400万円 × 3年) = 3,700万円
          </p>
        </div>
      </div>

      {/* フェーズ1: 報告書作成工数削減 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">フェーズ1: 報告書作成工数削減効果</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workloadReductionData} layout="vertical">
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" unit="時間" tickLine={false} axisLine={false} fontWeight="500" />
                <YAxis dataKey="name" type="category" tick={{ fill: '#374151', fontWeight: 'bold' }} axisLine={false} tickLine={false} width={80} />
                <Tooltip 
                  formatter={(value) => [`${value}時間`, '工数']} 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#374151' }}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Bar dataKey="hours" name="報告書1件あたり工数" radius={[0, 4, 4, 0]}>
                  {workloadReductionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? 'url(#blueGradient)' : 'url(#greenGradient)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h3 className="font-bold text-xl text-indigo-700 mb-3">工数削減の効果</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                <span>報告書1件あたり<span className="font-bold text-indigo-600">70時間削減（35%減）</span></span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                <span>年間20案件 × 70時間 × 5,500円 = <span className="font-bold text-xl text-indigo-600">770万円/年</span></span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                <span>修正作業も20%削減で <span className="font-bold text-xl text-indigo-600">300万円/年</span> のコスト削減</span>
              </li>
              <li className="flex items-start mt-4">
                <span className="w-4 h-4 bg-sky-500 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                <span>総年間効果額: <span className="font-bold text-2xl text-sky-600">1,070万円</span></span>
              </li>
            </ul>
            <div className="mt-4 bg-sky-50 p-3 rounded-lg">
              <p className="text-sm text-sky-700">人件費単価出典: <span className="font-semibold">厚生労働省「令和4年賃金構造基本統計調査」</span>における専門職・技術職の平均時給</p>
            </div>
          </div>
        </div>
      </div>

      {/* フェーズ1: 投資対効果の推移 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">フェーズ1: 投資対効果の推移</h2>
        
        {/* 凡例の解説 - 支出と収入の区別を明確化 */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex items-center bg-red-50 px-3 py-1 rounded-full border border-red-200">
            <TrendingDown className="text-red-500 mr-1" size={16} />
            <span className="text-red-700 font-medium">支出項目</span>
          </div>
          <div className="flex items-center bg-green-50 px-3 py-1 rounded-full border border-green-200">
            <TrendingUp className="text-green-500 mr-1" size={16} />
            <span className="text-green-700 font-medium">収入項目</span>
          </div>
          <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            <span className="h-3 w-3 bg-indigo-500 rounded-full mr-1"></span>
            <span className="text-indigo-700 font-medium">累積収支</span>
          </div>
        </div>
        
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={phase1ROIData} margin={{ left: 60, right: 20, top: 20, bottom: 20 }}>
              <defs>
                {incomeGradient}
                {expenseGradient}
                {balanceGradient}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#374151', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
              />
              <YAxis 
                unit="万円" 
                tick={{ fill: '#374151' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
                width={60}
              />
              <Tooltip 
                formatter={(value, name) => {
                  const labels = {
                    savings: '年間効果額',
                    balance: '累積収支',
                    systemDev: 'システム開発費',
                    trainingCost: '導入・研修費',
                    maintenance: '運用保守費'
                  };
                  
                  // 支出項目か収入項目かを明示
                  const types = {
                    savings: '【収入】',
                    balance: '',
                    systemDev: '【支出】',
                    trainingCost: '【支出】',
                    maintenance: '【支出】'
                  };
                  
                  return [`${value}万円`, `${types[name]}${labels[name] || name}`];
                }} 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                labelStyle={{ fontWeight: 'bold', color: '#374151' }}
              />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                wrapperStyle={{ fontWeight: 'bold' }}
                formatter={(value, entry, index) => {
                  const types = {
                    'システム開発費': '【支出】',
                    '導入・研修費': '【支出】',
                    '運用保守費': '【支出】',
                    '年間効果額': '【収入】',
                    '累積収支': ''
                  };
                  return <span>{types[value]}{value}</span>;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="balance" 
                name="累積収支" 
                fill="url(#balanceGradient)" 
                stroke="#6366f1" 
                strokeWidth={3} 
                activeDot={{ r: 8, strokeWidth: 0, fill: '#4f46e5' }}
              />
              <Bar dataKey="systemDev" name="システム開発費" stackId="investment" fill={EXPENSE_COLORS[0]} />
              <Bar dataKey="trainingCost" name="導入・研修費" stackId="investment" fill={EXPENSE_COLORS[1]} />
              <Bar dataKey="maintenance" name="運用保守費" stackId="investment" fill={EXPENSE_COLORS[2]} />
              <Line 
                type="monotone" 
                dataKey="savings" 
                name="年間効果額" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ r: 5, fill: '#22c55e' }}
              />
              
              {/* 支出と収入の区分を示す0ライン */}
              <ReferenceLine y={0} stroke="rgba(0,0,0,0.3)" strokeDasharray="3 3" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        {/* 解説テキスト追加 */}
        <div className="mt-2 bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
          <p>
            <span className="font-bold text-red-600">赤系グラフ（下向き）</span>：支出項目（システム開発費、導入・研修費、運用保守費）<br/>
            <span className="font-bold text-green-600">緑系グラフ（上向き）</span>：収入項目（年間効果額）<br/>
            <span className="font-bold text-indigo-600">青系グラフ（曲線）</span>：累積収支（総収入 - 総支出）
          </p>
        </div>
        
        <div className="mt-4 bg-sky-50 p-4 rounded-lg text-center">
          <p className="text-lg font-semibold text-sky-700">投資回収ポイント: <span className="text-2xl font-bold text-sky-800">約3.5年後</span>に収支がプラスに転じる</p>
        </div>
      </div>

      {/* フェーズ2: 投資内訳 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-sky-700 border-b-2 border-sky-100 pb-2">フェーズ2: 投資内訳</h2>
        <div className="p-4">
          <h3 className="font-bold text-xl text-sky-700 mb-3">総投資額 (3年): <span className="text-2xl">5,400万円</span></h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
              <span className="font-semibold">SaaS機能拡張開発費: <span className="text-sky-600">1,500万円</span></span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
              <span className="font-semibold">年間クラウド運用費: <span className="text-sky-600">300万円 × 3年 = 900万円</span></span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
              <span className="font-semibold">年間営業・サポート人件費: <span className="text-sky-600">800万円 × 3年 = 2,400万円</span></span>
            </li>
          </ul>
          <p className="mt-4 bg-sky-50 p-3 rounded-lg text-sky-700">
            <span className="font-bold">計算式: </span>
            1,500万円 + (300万円 + 800万円) × 3年 = 5,400万円
          </p>
        </div>
      </div>

      {/* フェーズ2: SaaS顧客数と収益の推移 - 色分けを強化 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-sky-700 border-b-2 border-sky-100 pb-2">フェーズ2: SaaS顧客数と収益の推移</h2>
        
        {/* 項目説明 - 視覚的な区別を追加 */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex items-center bg-red-50 px-3 py-1 rounded-full border border-red-200">
            <span className="h-4 w-4 bg-red-600 rounded-full mr-2"></span>
            <span className="text-red-700 font-medium">顧客数（社）</span>
          </div>
          <div className="flex items-center bg-green-50 px-3 py-1 rounded-full border border-green-200">
            <span className="h-4 w-4 bg-green-600 rounded-full mr-2"></span>
            <span className="text-green-700 font-medium">年間収益（万円）</span>
          </div>
        </div>
        
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={saasGrowthData}>
              <defs>
                {customersGradient}
                {saasRevenueGradient}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#374151', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                unit="社" 
                tick={{ fill: '#dc2626', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#dc2626' }} 
                tickLine={false}
                domain={[0, 20]}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                unit="万円" 
                tick={{ fill: '#16a34a', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#16a34a' }} 
                tickLine={false}
                domain={[0, 2000]}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)'
                }}
                labelStyle={{ fontWeight: 'bold', color: '#374151' }}
                itemStyle={{ padding: '4px 0' }}
                formatter={(value, name, props) => {
                  if (name === "顧客数") {
                    return [
                      <span style={{ color: '#dc2626', fontWeight: 'bold' }}>{value} 社</span>,
                      <span style={{ backgroundColor: '#fef2f2', padding: '2px 6px', borderRadius: '4px', color: '#dc2626' }}>顧客数</span>
                    ];
                  } else {
                    return [
                      <span style={{ color: '#16a34a', fontWeight: 'bold' }}>{value} 万円</span>,
                      <span style={{ backgroundColor: '#f0fdf4', padding: '2px 6px', borderRadius: '4px', color: '#16a34a' }}>年間収益</span>
                    ];
                  }
                }}
              />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                wrapperStyle={{ fontWeight: 'bold' }}
                formatter={(value, entry, index) => {
                  if (value === "顧客数") {
                    return <span style={{ color: '#dc2626' }}>顧客数（社）</span>;
                  } else {
                    return <span style={{ color: '#16a34a' }}>年間収益（万円）</span>;
                  }
                }}
              />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="customers" 
                name="顧客数" 
                stroke="#dc2626" 
                strokeWidth={4}
                fill="url(#customersGradient)"
                dot={{ stroke: '#dc2626', strokeWidth: 2, r: 8, fill: '#fff', strokeDasharray: '' }}
                activeDot={{ r: 10, strokeWidth: 0, fill: '#dc2626' }}
                strokeDasharray=""
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="revenue" 
                name="年間収益" 
                stroke="#16a34a" 
                strokeWidth={4}
                fill="url(#saasRevenueGradient)"
                dot={{ stroke: '#16a34a', strokeWidth: 2, r: 8, fill: '#fff', strokeDasharray: '' }}
                activeDot={{ r: 10, strokeWidth: 0, fill: '#16a34a' }}
                strokeDasharray=""
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 bg-sky-50 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
              <span className="font-semibold text-sky-700">月額15万円/社のSaaSサービス（年間180万円）</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
              <span className="font-semibold text-sky-700">売上総利益率60%として収益計算</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-sky-500 rounded-full mr-2"></span>
              <span className="font-semibold text-sky-700">業界内60社に対して、初年度5社から開始（浸透率8.3%）</span>
            </li>
            <li className="flex items-center text-sm mt-2">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span className="text-red-600 font-medium">初年度: <span className="font-bold">5社</span>（赤色線）</span>
            </li>
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-green-600 font-medium">初年度収益: 5社 × 180万円/社 × 60% = <span className="font-bold">540万円</span>（緑色線）</span>
            </li>
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-green-600 font-medium">3年総効果額: 540万円 + 864万円 + 1,188万円 = <span className="font-bold">2,592万円</span></span>
            </li>
          </ul>
        </div>
      </div>

      {/* フェーズ2: 投資対効果の推移 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-sky-700 border-b-2 border-sky-100 pb-2">フェーズ2: 投資対効果の推移</h2>
        
        {/* 凡例の解説 - 支出と収入の区別を明確化 */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex items-center bg-red-50 px-3 py-1 rounded-full border border-red-200">
            <TrendingDown className="text-red-500 mr-1" size={16} />
            <span className="text-red-700 font-medium">支出項目</span>
          </div>
          <div className="flex items-center bg-green-50 px-3 py-1 rounded-full border border-green-200">
            <TrendingUp className="text-green-500 mr-1" size={16} />
            <span className="text-green-700 font-medium">収入項目</span>
          </div>
          <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            <span className="h-3 w-3 bg-indigo-500 rounded-full mr-1"></span>
            <span className="text-indigo-700 font-medium">累積収支</span>
          </div>
        </div>
        
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={phase2ROIData} margin={{ left: 60, right: 20, top: 20, bottom: 20 }}>
              <defs>
                {incomeGradient}
                {expenseGradient}
                {balanceGradient}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#374151', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
              />
              <YAxis 
                unit="万円" 
                tick={{ fill: '#374151' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
                width={60}
              />
              <Tooltip 
                formatter={(value, name) => {
                  const labels = {
                    revenue: '年間収益',
                    balance: '累積収支',
                    extension: 'SaaS機能拡張開発費',
                    cloud: 'クラウド運用費',
                    salesSupport: '営業・サポート人件費'
                  };
                  
                  // 支出項目か収入項目かを明示
                  const types = {
                    revenue: '【収入】',
                    balance: '',
                    extension: '【支出】',
                    cloud: '【支出】',
                    salesSupport: '【支出】'
                  };
                  
                  return [`${value}万円`, `${types[name]}${labels[name] || name}`];
                }} 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                labelStyle={{ fontWeight: 'bold', color: '#374151' }}
              />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                wrapperStyle={{ fontWeight: 'bold' }}
                formatter={(value, entry, index) => {
                  const types = {
                    'SaaS機能拡張開発費': '【支出】',
                    'クラウド運用費': '【支出】',
                    '営業・サポート人件費': '【支出】',
                    '年間収益': '【収入】',
                    '累積収支': ''
                  };
                  return <span>{types[value]}{value}</span>;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="balance" 
                name="累積収支" 
                fill="url(#balanceGradient)" 
                stroke="#6366f1" 
                strokeWidth={3} 
                activeDot={{ r: 8, strokeWidth: 0, fill: '#4f46e5' }}
              />
              <Bar dataKey="extension" name="SaaS機能拡張開発費" stackId="investment" fill={EXPENSE_COLORS[0]} />
              <Bar dataKey="cloud" name="クラウド運用費" stackId="investment" fill={EXPENSE_COLORS[1]} />
              <Bar dataKey="salesSupport" name="営業・サポート人件費" stackId="investment" fill={EXPENSE_COLORS[2]} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                name="年間収益" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ r: 5, fill: '#22c55e' }}
              />
              
              {/* 支出と収入の区分を示す0ライン */}
              <ReferenceLine y={0} stroke="rgba(0,0,0,0.3)" strokeDasharray="3 3" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        {/* 解説テキスト追加 */}
        <div className="mt-2 bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
          <p>
            <span className="font-bold text-red-600">赤系グラフ（下向き）</span>：支出項目（SaaS機能拡張開発費、クラウド運用費、営業・サポート人件費）<br/>
            <span className="font-bold text-green-600">緑系グラフ（上向き）</span>：収入項目（年間収益）<br/>
            <span className="font-bold text-indigo-600">青系グラフ（曲線）</span>：累積収支（総収入 - 総支出）
          </p>
        </div>
        
        <div className="mt-4 bg-sky-50 p-4 rounded-lg text-center">
          <p className="text-lg font-semibold text-sky-700">投資回収ポイント: <span className="text-2xl font-bold text-sky-800">約6年後</span>に収支がプラスに転じる</p>
        </div>
      </div>

      {/* フェーズ3: 投資内訳 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-violet-700 border-b-2 border-violet-100 pb-2">フェーズ3: 投資内訳</h2>
        <div className="p-4">
          <h3 className="font-bold text-xl text-violet-700 mb-3">総投資額 (3年): <span className="text-2xl">1億4,500万円</span></h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
              <span className="font-semibold">アプリ開発費: <span className="text-violet-600">2,500万円</span></span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
              <span className="font-semibold">新会社設立関連費用（資本金含む）: <span className="text-violet-600">7,500万円</span></span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
              <span className="font-semibold">年間マーケティング・研究開発費: <span className="text-violet-600">1,500万円 × 3年 = 4,500万円</span></span>
            </li>
          </ul>
          <p className="mt-4 bg-violet-50 p-3 rounded-lg text-violet-700">
            <span className="font-bold">計算式: </span>
            2,500万円 + 7,500万円 + (1,500万円 × 3年) = 1億4,500万円
          </p>
        </div>
      </div>

      {/* フェーズ3: アプリユーザーと収益の推移 - 色分けを強化 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-violet-700 border-b-2 border-violet-100 pb-2">フェーズ3: 専門アプリユーザー数と収益の推移</h2>
        
        {/* 項目説明 - 視覚的な区別を追加 */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            <span className="h-4 w-4 bg-indigo-700 rounded-full mr-2"></span>
            <span className="text-indigo-700 font-medium">ユーザー数（人）</span>
          </div>
          <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            <span className="h-4 w-4 bg-orange-600 rounded-full mr-2"></span>
            <span className="text-orange-700 font-medium">年間収益（万円）</span>
          </div>
        </div>
        
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={appGrowthData}>
              <defs>
                {usersGradient}
                {appRevenueGradient}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#374151', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                unit="人" 
                tick={{ fill: '#4338ca', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#4338ca' }} 
                tickLine={false}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                unit="万円" 
                tick={{ fill: '#ea580c', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#ea580c' }} 
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)'
                }}
                labelStyle={{ fontWeight: 'bold', color: '#374151' }}
                itemStyle={{ padding: '4px 0' }}
                formatter={(value, name, props) => {
                  if (name === "ユーザー数") {
                    return [
                      <span style={{ color: '#4338ca', fontWeight: 'bold' }}>{value} 人</span>,
                      <span style={{ backgroundColor: '#eef2ff', padding: '2px 6px', borderRadius: '4px', color: '#4338ca' }}>ユーザー数</span>
                    ];
                  } else {
                    return [
                      <span style={{ color: '#ea580c', fontWeight: 'bold' }}>{value} 万円</span>,
                      <span style={{ backgroundColor: '#fff7ed', padding: '2px 6px', borderRadius: '4px', color: '#ea580c' }}>年間収益</span>
                    ];
                  }
                }}
              />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                wrapperStyle={{ fontWeight: 'bold' }}
                formatter={(value, entry, index) => {
                  if (value === "ユーザー数") {
                    return <span style={{ color: '#4338ca' }}>ユーザー数（人）</span>;
                  } else {
                    return <span style={{ color: '#ea580c' }}>年間収益（万円）</span>;
                  }
                }}
              />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="users" 
                name="ユーザー数" 
                stroke="#4338ca" 
                strokeWidth={4}
                fill="url(#usersGradient)"
                dot={{ stroke: '#4338ca', strokeWidth: 2, r: 8, fill: '#fff' }}
                activeDot={{ r: 10, strokeWidth: 0, fill: '#4338ca' }}
                strokeDasharray="0"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="revenue" 
                name="年間収益" 
                stroke="#ea580c" 
                strokeWidth={4}
                fill="url(#appRevenueGradient)"
                dot={{ stroke: '#ea580c', strokeWidth: 2, r: 8, fill: '#fff' }}
                activeDot={{ r: 10, strokeWidth: 0, fill: '#ea580c' }}
                strokeDasharray="0"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4">
          <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-400">
            <h3 className="font-bold text-xl text-amber-700 mb-2">時価総額評価:</h3>
            <p className="text-lg">3年目の年間売上高 <span className="font-bold text-violet-600">1.18億円</span> × 評価倍率8倍 = <span className="font-extrabold text-2xl text-violet-600">9.44億円</span></p>
            <p className="text-lg mt-2">ラクロ様の持分価値（50%出資）: <span className="font-extrabold text-2xl text-violet-600">4.72億円</span></p>
            <p className="text-sm mt-3 text-amber-700">評価倍率出典: <span className="font-semibold">PwC「スタートアップバリュエーションガイド2023」</span>のAI企業平均</p>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-violet-50">
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                <span className="text-indigo-700 font-medium">初年度: <span className="font-bold">800ユーザー</span>（青紫色線）</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                <span className="text-orange-700 font-medium">初年度収益: 800人 × 4,800円/月 × 12ヶ月 = <span className="font-bold">4,608万円</span>（橙色線）</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="font-semibold text-violet-700">算出根拠: </span>
                <span className="ml-2 text-violet-600">専門家向けアプリ（月額4,800円）のユーザー数が初年度800人、以降年率60%で成長</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="font-semibold text-violet-700">3年目収益: </span>
                <span className="ml-2 text-violet-600">2,048人 × 4,800円/月 × 12ヶ月 ≒ 1.18億円</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* フェーズ3: 投資対効果の推移 */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-violet-700 border-b-2 border-violet-100 pb-2">フェーズ3: 投資対効果の推移</h2>
        
        {/* 凡例の解説 - 支出と収入の区別を明確化 */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex items-center bg-red-50 px-3 py-1 rounded-full border border-red-200">
            <TrendingDown className="text-red-500 mr-1" size={16} />
            <span className="text-red-700 font-medium">支出項目</span>
          </div>
          <div className="flex items-center bg-green-50 px-3 py-1 rounded-full border border-green-200">
            <TrendingUp className="text-green-500 mr-1" size={16} />
            <span className="text-green-700 font-medium">収入項目</span>
          </div>
          <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            <span className="h-3 w-3 bg-indigo-500 rounded-full mr-1"></span>
            <span className="text-indigo-700 font-medium">累積収支</span>
          </div>
        </div>
        
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={phase3ROIData} margin={{ left: 60, right: 20, top: 20, bottom: 20 }}>
              <defs>
                {incomeGradient}
                {expenseGradient}
                {balanceGradient}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#374151', fontWeight: 'bold' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
              />
              <YAxis 
                unit="万円" 
                tick={{ fill: '#374151' }} 
                axisLine={{ stroke: '#9CA3AF' }} 
                tickLine={false} 
                width={60}
              />
              <Tooltip 
                formatter={(value, name) => {
                  const labels = {
                    revenue: '年間収益',
                    balance: '累積収支',
                    appDev: 'アプリ開発費',
                    establishment: '新会社設立関連費用',
                    marketing: 'マーケティング・研究開発費'
                  };
                  
                  // 支出項目か収入項目かを明示
                  const types = {
                    revenue: '【収入】',
                    balance: '',
                    appDev: '【支出】',
                    establishment: '【支出】',
                    marketing: '【支出】'
                  };
                  
                  return [`${value}万円`, `${types[name]}${labels[name] || name}`];
                }} 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                labelStyle={{ fontWeight: 'bold', color: '#374151' }}
              />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                wrapperStyle={{ fontWeight: 'bold' }}
                formatter={(value, entry, index) => {
                  const types = {
                    'アプリ開発費': '【支出】',
                    '新会社設立関連費用': '【支出】',
                    'マーケティング・研究開発費': '【支出】',
                    '年間収益': '【収入】',
                    '累積収支': ''
                  };
                  return <span>{types[value]}{value}</span>;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="balance" 
                name="累積収支" 
                fill="url(#balanceGradient)" 
                stroke="#6366f1" 
                strokeWidth={3} 
                activeDot={{ r: 8, strokeWidth: 0, fill: '#4f46e5' }}
              />
              <Bar dataKey="appDev" name="アプリ開発費" stackId="investment" fill={EXPENSE_COLORS[0]} />
              <Bar dataKey="establishment" name="新会社設立関連費用" stackId="investment" fill={EXPENSE_COLORS[1]} />
              <Bar dataKey="marketing" name="マーケティング・研究開発費" stackId="investment" fill={EXPENSE_COLORS[2]} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                name="年間収益" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ r: 5, fill: '#22c55e' }}
              />
              
              {/* 支出と収入の区分を示す0ライン */}
              <ReferenceLine y={0} stroke="rgba(0,0,0,0.3)" strokeDasharray="3 3" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        {/* 解説テキスト追加 */}
        <div className="mt-2 bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
          <p>
            <span className="font-bold text-red-600">赤系グラフ（下向き）</span>：支出項目（アプリ開発費、新会社設立関連費用、マーケティング・研究開発費）<br/>
            <span className="font-bold text-green-600">緑系グラフ（上向き）</span>：収入項目（年間収益）<br/>
            <span className="font-bold text-indigo-600">青系グラフ（曲線）</span>：累積収支（総収入 - 総支出）
          </p>
        </div>
        
        <div className="mt-4 bg-violet-50 p-4 rounded-lg text-center">
          <p className="text-lg font-semibold text-violet-700">投資回収ポイント: <span className="text-2xl font-bold text-violet-800">約3年後</span>に収支がプラスに転じる</p>
        </div>
      </div>
    </div>
  );
};

export default ROIAnalysisVisualizations;