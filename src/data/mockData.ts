// Mock data for the Banco Insights application
// Based on BACEN IFDATA structure and real banking metrics

export interface Institution {
  id: string;
  cnpj: string;
  name: string;
  shortName: string;
  type: string;
  segment: string;
  controlType: string;
  region: string;
  city: string;
  foundedYear: number;
  status: 'active' | 'inactive';
  lastUpdate: string;
}

export interface FinancialData {
  institutionId: string;
  quarter: string;
  year: number;
  assets: {
    total: number;
    credit: number;
    securities: number;
    cash: number;
  };
  liabilities: {
    total: number;
    deposits: number;
    borrowings: number;
    equity: number;
  };
  income: {
    interestRevenue: number;
    interestExpense: number;
    netInterestIncome: number;
    feeIncome: number;
    tradingIncome: number;
    operatingExpenses: number;
    provisions: number;
    netIncome: number;
  };
  ratios: {
    roe: number;
    roa: number;
    efficiency: number;
    capitalRatio: number;
    npl: number;
  };
}

export interface CreditPortfolio {
  institutionId: string;
  quarter: string;
  year: number;
  segments: {
    retail: number;
    corporate: number;
    housing: number;
    rural: number;
  };
  modalities: {
    creditCard: number;
    payrollLoan: number;
    vehicleFinancing: number;
    workingCapital: number;
    overdraft: number;
    other: number;
  };
}

export interface MarketShare {
  institutionId: string;
  quarter: string;
  year: number;
  assetsShare: number;
  creditShare: number;
  depositsShare: number;
  rank: {
    assets: number;
    credit: number;
    deposits: number;
  };
}

// Mock institutions data
export const institutions: Institution[] = [
  {
    id: '1',
    cnpj: '00.000.000/0001-91',
    name: 'Banco do Brasil S.A.',
    shortName: 'Banco do Brasil',
    type: 'Banco Múltiplo',
    segment: 'S1',
    controlType: 'Público',
    region: 'DF',
    city: 'Brasília',
    foundedYear: 1808,
    status: 'active',
    lastUpdate: '2024-12-31'
  },
  {
    id: '2',
    cnpj: '60.872.504/0001-23',
    name: 'Itaú Unibanco Holding S.A.',
    shortName: 'Itaú Unibanco',
    type: 'Banco Múltiplo',
    segment: 'S1',
    controlType: 'Privado Nacional',
    region: 'SP',
    city: 'São Paulo',
    foundedYear: 1943,
    status: 'active',
    lastUpdate: '2024-12-31'
  },
  {
    id: '3',
    cnpj: '00.360.305/0001-04',
    name: 'Caixa Econômica Federal',
    shortName: 'Caixa',
    type: 'Banco Múltiplo',
    segment: 'S1',
    controlType: 'Público',
    region: 'DF',
    city: 'Brasília',
    foundedYear: 1861,
    status: 'active',
    lastUpdate: '2024-12-31'
  },
  {
    id: '4',
    cnpj: '60.746.948/0001-12',
    name: 'Banco Bradesco S.A.',
    shortName: 'Bradesco',
    type: 'Banco Múltiplo',
    segment: 'S1',
    controlType: 'Privado Nacional',
    region: 'SP',
    city: 'Osasco',
    foundedYear: 1943,
    status: 'active',
    lastUpdate: '2024-12-31'
  },
  {
    id: '5',
    cnpj: '90.400.888/0001-42',
    name: 'Banco Santander (Brasil) S.A.',
    shortName: 'Santander Brasil',
    type: 'Banco Múltiplo',
    segment: 'S1',
    controlType: 'Privado Estrangeiro',
    region: 'SP',
    city: 'São Paulo',
    foundedYear: 1982,
    status: 'active',
    lastUpdate: '2024-12-31'
  },
  {
    id: '6',
    cnpj: '18.236.120/0001-58',
    name: 'Nu Pagamentos S.A.',
    shortName: 'Nubank',
    type: 'Banco Digital',
    segment: 'S2',
    controlType: 'Privado Estrangeiro',
    region: 'SP',
    city: 'São Paulo',
    foundedYear: 2013,
    status: 'active',
    lastUpdate: '2024-12-31'
  }
];

// Mock financial data for T4 2024
export const financialData: FinancialData[] = [
  {
    institutionId: '1',
    quarter: 'T4',
    year: 2024,
    assets: {
      total: 2100000, // R$ 2.1 tri
      credit: 840000,
      securities: 680000,
      cash: 280000
    },
    liabilities: {
      total: 2100000,
      deposits: 1400000,
      borrowings: 420000,
      equity: 280000
    },
    income: {
      interestRevenue: 145200,
      interestExpense: 52800,
      netInterestIncome: 92400,
      feeIncome: 28500,
      tradingIncome: 12800,
      operatingExpenses: 64200,
      provisions: 18900,
      netIncome: 38200
    },
    ratios: {
      roe: 15.2,
      roa: 1.8,
      efficiency: 42.5,
      capitalRatio: 13.4,
      npl: 2.8
    }
  },
  {
    institutionId: '2',
    quarter: 'T4',
    year: 2024,
    assets: {
      total: 1900000, // R$ 1.9 tri
      credit: 720000,
      securities: 580000,
      cash: 260000
    },
    liabilities: {
      total: 1900000,
      deposits: 1250000,
      borrowings: 380000,
      equity: 270000
    },
    income: {
      interestRevenue: 128400,
      interestExpense: 46200,
      netInterestIncome: 82200,
      feeIncome: 32800,
      tradingIncome: 18500,
      operatingExpenses: 58900,
      provisions: 16800,
      netIncome: 42100
    },
    ratios: {
      roe: 16.8,
      roa: 2.2,
      efficiency: 38.4,
      capitalRatio: 14.2,
      npl: 2.4
    }
  }
];

// Mock credit portfolio data
export const creditPortfolios: CreditPortfolio[] = [
  {
    institutionId: '1',
    quarter: 'T4',
    year: 2024,
    segments: {
      retail: 380000, // 45.2%
      corporate: 276000, // 32.8%
      housing: 127000, // 15.1%
      rural: 58000 // 6.9%
    },
    modalities: {
      creditCard: 155400, // 18.5%
      payrollLoan: 107520, // 12.8%
      vehicleFinancing: 74760, // 8.9%
      workingCapital: 131040, // 15.6%
      overdraft: 60480, // 7.2%
      other: 311800 // 37.0%
    }
  }
];

// Mock market share data
export const marketShares: MarketShare[] = [
  {
    institutionId: '1',
    quarter: 'T4',
    year: 2024,
    assetsShare: 18.5,
    creditShare: 20.2,
    depositsShare: 19.8,
    rank: {
      assets: 1,
      credit: 1,
      deposits: 1
    }
  },
  {
    institutionId: '2',
    quarter: 'T4',
    year: 2024,
    assetsShare: 16.8,
    creditShare: 17.3,
    depositsShare: 16.5,
    rank: {
      assets: 2,
      credit: 2,
      deposits: 2
    }
  }
];

// Historical data for time series (2020-2024)
export const historicalAssets = [
  { quarter: 'T1 2020', bb: 1650000, itau: 1580000, cef: 1420000, bradesco: 1380000, santander: 950000 },
  { quarter: 'T2 2020', bb: 1720000, itau: 1620000, cef: 1450000, bradesco: 1400000, santander: 970000 },
  { quarter: 'T3 2020', bb: 1780000, itau: 1660000, cef: 1480000, bradesco: 1420000, santander: 990000 },
  { quarter: 'T4 2020', bb: 1850000, itau: 1710000, cef: 1520000, bradesco: 1450000, santander: 1010000 },
  { quarter: 'T1 2021', bb: 1880000, itau: 1740000, cef: 1540000, bradesco: 1460000, santander: 1020000 },
  { quarter: 'T2 2021', bb: 1920000, itau: 1770000, cef: 1560000, bradesco: 1480000, santander: 1040000 },
  { quarter: 'T3 2021', bb: 1950000, itau: 1800000, cef: 1580000, bradesco: 1490000, santander: 1050000 },
  { quarter: 'T4 2021', bb: 1980000, itau: 1820000, cef: 1600000, bradesco: 1500000, santander: 1070000 },
  { quarter: 'T1 2022', bb: 2000000, itau: 1840000, cef: 1610000, bradesco: 1510000, santander: 1080000 },
  { quarter: 'T2 2022', bb: 2020000, itau: 1860000, cef: 1620000, bradesco: 1520000, santander: 1090000 },
  { quarter: 'T3 2022', bb: 2040000, itau: 1870000, cef: 1630000, bradesco: 1530000, santander: 1095000 },
  { quarter: 'T4 2022', bb: 2060000, itau: 1880000, cef: 1640000, bradesco: 1540000, santander: 1100000 },
  { quarter: 'T1 2023', bb: 2070000, itau: 1885000, cef: 1645000, bradesco: 1545000, santander: 1105000 },
  { quarter: 'T2 2023', bb: 2080000, itau: 1890000, cef: 1650000, bradesco: 1550000, santander: 1108000 },
  { quarter: 'T3 2023', bb: 2090000, itau: 1895000, cef: 1655000, bradesco: 1555000, santander: 1110000 },
  { quarter: 'T4 2023', bb: 2095000, itau: 1898000, cef: 1658000, bradesco: 1558000, santander: 1112000 },
  { quarter: 'T1 2024', bb: 2098000, itau: 1899000, cef: 1659000, bradesco: 1559000, santander: 1113000 },
  { quarter: 'T2 2024', bb: 2099000, itau: 1899500, cef: 1659500, bradesco: 1559500, santander: 1113500 },
  { quarter: 'T3 2024', bb: 2099500, itau: 1899800, cef: 1659800, bradesco: 1559800, santander: 1113800 },
  { quarter: 'T4 2024', bb: 2100000, itau: 1900000, cef: 1660000, bradesco: 1560000, santander: 1114000 }
];

// Sector aggregated data
export const sectorData = {
  totalAssets: 11200000, // R$ 11.2 tri
  totalCredit: 5800000, // R$ 5.8 tri
  totalDeposits: 7200000, // R$ 7.2 tri
  totalInstitutions: 2147,
  segments: {
    s1: { count: 5, assetsShare: 68.4 },
    s2: { count: 42, assetsShare: 18.2 },
    s3: { count: 89, assetsShare: 8.9 },
    s4: { count: 234, assetsShare: 3.2 },
    s5: { count: 1777, assetsShare: 1.3 }
  },
  creditSegments: [
    { name: 'Pessoa Física', value: 2100000, share: 36.2, growth: 2.8 },
    { name: 'Pessoa Jurídica', value: 2000000, share: 34.5, growth: 5.1 },
    { name: 'Habitacional', value: 1000000, share: 17.2, growth: 8.2 },
    { name: 'Rural', value: 700000, share: 12.1, growth: 6.4 }
  ]
};

// Helper functions to format data
export const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `R$ ${(value / 1000000).toFixed(1)} tri`;
  } else if (value >= 1000) {
    return `R$ ${(value / 1000).toFixed(0)} bi`;
  } else {
    return `R$ ${value.toFixed(0)} mi`;
  }
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatNumber = (value: number): string => {
  return value.toLocaleString('pt-BR');
};

// Chart data generators
export const generateTimeSeriesData = (metric: 'assets' | 'credit' | 'deposits') => {
  return {
    quarters: historicalAssets.map(d => d.quarter),
    bb: historicalAssets.map(d => d.bb),
    itau: historicalAssets.map(d => d.itau),
    cef: historicalAssets.map(d => d.cef),
    bradesco: historicalAssets.map(d => d.bradesco),
    santander: historicalAssets.map(d => d.santander)
  };
};

export const generateMarketShareData = () => {
  return {
    labels: ['Banco do Brasil', 'Itaú Unibanco', 'Caixa', 'Bradesco', 'Santander', 'Outros'],
    values: [18.5, 16.8, 14.2, 13.1, 9.8, 27.6],
    colors: ['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#f1f5f9']
  };
};