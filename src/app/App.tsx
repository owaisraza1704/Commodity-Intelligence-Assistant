import { useState } from "react";
import { TrendingUp, TrendingDown, Minus, User, RefreshCw, Sparkles, AlertCircle, BarChart3, TrendingUpIcon, Calendar } from "lucide-react";

export default function App() {
  const [selectedCommodity, setSelectedCommodity] = useState<"gold" | "silver">("gold");
  const [activeTab, setActiveTab] = useState<"dashboard" | "insights" | "timeline">("dashboard");
  const [lastUpdated] = useState(new Date().toLocaleTimeString());

  const marketData = {
    gold: {
      bias: "bullish",
      confidence: 87,
      reason: "Strong institutional demand and central bank purchases are driving gold prices higher. Federal Reserve's pause on rate hikes combined with persistent inflation concerns continue to support precious metals as safe-haven assets.",
      explanation: "Bullish means gold prices are rising — good for investors holding gold, signaling strong demand.",
      insights: {
        summary: "Gold is in a strong uptrend driven by macroeconomic uncertainty and institutional accumulation.",
        keyDrivers: [
          {
            title: "Central Bank Buying",
            description: "Major central banks, particularly in Asia and emerging markets, have been net buyers of gold for 14 consecutive quarters. China and India lead this trend as they diversify reserves away from the US dollar.",
            impact: "Very Positive",
            timeframe: "Long-term"
          },
          {
            title: "Inflation Hedge Demand",
            description: "With inflation remaining above central bank targets in major economies, investors are seeking gold as a store of value. This is particularly strong in the face of currency devaluation concerns.",
            impact: "Positive",
            timeframe: "Medium-term"
          },
          {
            title: "Rate Pause Cycle",
            description: "The Federal Reserve's pause on interest rate increases reduces the opportunity cost of holding non-yielding assets like gold, making it more attractive compared to bonds.",
            impact: "Positive",
            timeframe: "Short-term"
          }
        ],
        risks: [
          "A stronger-than-expected US dollar could pressure gold prices in the near term",
          "Rapid improvement in geopolitical tensions could reduce safe-haven demand",
          "Unexpected hawkish pivot from central banks could shift investor sentiment"
        ],
        outlook: "The medium-term outlook for gold remains positive, with support from central bank demand and macro uncertainty. Watch for US dollar strength and Fed policy shifts as key risk factors."
      }
    },
    silver: {
      bias: "neutral",
      confidence: 62,
      reason: "Industrial demand remains steady while investment sentiment is mixed. Silver is caught between manufacturing needs and uncertain monetary policy, creating a wait-and-see approach among traders.",
      explanation: "Neutral means silver prices are stable — market is balanced with no clear direction yet.",
      insights: {
        summary: "Silver is trading sideways as industrial demand competes with weakening investment flows.",
        keyDrivers: [
          {
            title: "Green Energy Demand",
            description: "Solar panel production continues to grow, requiring significant silver usage. The renewable energy transition is a structural long-term driver for silver demand.",
            impact: "Positive",
            timeframe: "Long-term"
          },
          {
            title: "Industrial Slowdown Concerns",
            description: "Manufacturing data from major economies shows signs of softening, which could reduce industrial silver consumption in electronics and automotive sectors.",
            impact: "Negative",
            timeframe: "Short-term"
          },
          {
            title: "Gold-Silver Ratio",
            description: "The gold-silver ratio remains elevated, suggesting silver is relatively undervalued compared to gold. This could attract value-oriented investors if the ratio begins to normalize.",
            impact: "Mixed",
            timeframe: "Medium-term"
          }
        ],
        risks: [
          "Recession fears could significantly reduce industrial silver demand",
          "Lack of investment interest compared to gold creates downside risk",
          "Supply increases from major producers could pressure prices"
        ],
        outlook: "Silver's outlook is mixed with competing forces. Industrial demand provides a floor, but lack of investment enthusiasm limits upside. A breakout requires either stronger industrial data or increased precious metal investment flows."
      }
    }
  };

  const data = marketData[selectedCommodity];

  const factors = [
    {
      name: "Inflation",
      impact: "positive",
      confidence: 82,
      description: "Rising inflation drives demand for precious metals as hedge",
      icon: "📈"
    },
    {
      name: "Interest Rates",
      impact: selectedCommodity === "gold" ? "positive" : "neutral",
      confidence: 75,
      description: "Fed signals pause on rate hikes, reducing opportunity cost",
      icon: "💰"
    },
    {
      name: "USD Strength",
      impact: "negative",
      confidence: 68,
      description: "Stronger dollar puts pressure on commodity prices",
      icon: "💵"
    },
    {
      name: "Geopolitics",
      impact: "positive",
      confidence: 79,
      description: "Ongoing tensions increase safe-haven appeal",
      icon: "🌍"
    }
  ];

  const events = [
    {
      title: "Federal Reserve holds rates steady",
      source: "Federal Reserve",
      timestamp: "2 hours ago",
      impact: "positive",
      date: "Apr 7, 2026",
      time: "14:30",
      description: "FOMC maintains the federal funds rate at 5.25-5.50%, citing progress on inflation but continued caution. Chair Powell emphasized data dependency for future decisions.",
      category: "Monetary Policy"
    },
    {
      title: "China central bank increases gold reserves",
      source: "Reuters",
      timestamp: "5 hours ago",
      impact: "positive",
      date: "Apr 7, 2026",
      time: "11:00",
      description: "People's Bank of China reported adding 10 tonnes to gold reserves in March, marking the 17th consecutive month of purchases as part of diversification strategy.",
      category: "Central Banks"
    },
    {
      title: "USD strengthens against major currencies",
      source: "Bloomberg",
      timestamp: "8 hours ago",
      impact: "negative",
      date: "Apr 7, 2026",
      time: "08:15",
      description: "Dollar index rises 0.8% to 104.5 on stronger-than-expected jobs data, creating headwinds for dollar-denominated commodities.",
      category: "Currency"
    },
    {
      title: "Manufacturing data shows steady demand",
      source: "WSJ",
      timestamp: "1 day ago",
      impact: "neutral",
      date: "Apr 6, 2026",
      time: "15:00",
      description: "March PMI data came in at 51.2, indicating continued expansion in manufacturing activity. Silver-intensive sectors like electronics showed moderate growth.",
      category: "Economic Data"
    },
    {
      title: "Geopolitical tensions escalate in Middle East",
      source: "Financial Times",
      timestamp: "2 days ago",
      impact: "positive",
      date: "Apr 5, 2026",
      time: "09:30",
      description: "Rising tensions prompt safe-haven buying across precious metals. Gold sees increased ETF inflows as investors seek portfolio protection.",
      category: "Geopolitics"
    },
    {
      title: "Solar industry reports record installations",
      source: "Bloomberg",
      timestamp: "3 days ago",
      impact: "positive",
      date: "Apr 4, 2026",
      time: "13:20",
      description: "Q1 2026 solar installations up 28% YoY, driving industrial silver demand. Analysts forecast continued strength in renewable energy sector.",
      category: "Industrial Demand"
    },
    {
      title: "Major mining company reduces output forecast",
      source: "Reuters",
      timestamp: "4 days ago",
      impact: "positive",
      date: "Apr 3, 2026",
      time: "10:45",
      description: "Leading precious metals producer cuts 2026 gold production forecast by 5% due to operational challenges at key mines, potentially tightening supply.",
      category: "Supply"
    }
  ];

  const getBiasIcon = () => {
    if (data.bias === "bullish") return <TrendingUp className="w-8 h-8" />;
    if (data.bias === "bearish") return <TrendingDown className="w-8 h-8" />;
    return <Minus className="w-8 h-8" />;
  };

  const getBiasColor = () => {
    if (data.bias === "bullish") return "text-emerald-400";
    if (data.bias === "bearish") return "text-red-400";
    return "text-amber-400";
  };

  const getBiasBgColor = () => {
    if (data.bias === "bullish") return "bg-emerald-500/10 border-emerald-500/20";
    if (data.bias === "bearish") return "bg-red-500/10 border-red-500/20";
    return "bg-amber-500/10 border-amber-500/20";
  };

  const getImpactColor = (impact: string) => {
    if (impact === "positive") return "text-emerald-400";
    if (impact === "negative") return "text-red-400";
    return "text-slate-400";
  };

  const getImpactBg = (impact: string) => {
    if (impact === "positive") return "bg-emerald-500/10";
    if (impact === "negative") return "bg-red-500/10";
    return "bg-slate-500/10";
  };

  return (
    <div className="size-full bg-slate-950 text-slate-100 overflow-auto">
      <div className="min-h-full">
        {/* Top Navigation */}
        <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-slate-950" />
                  </div>
                  <h1 className="text-slate-100">Commodity Intelligence Assistant</h1>
                </div>

                <div className="flex gap-2">
                  {(["dashboard", "insights", "timeline"] as const).map((tab) => {
                    const Icon = tab === "dashboard" ? BarChart3 : tab === "insights" ? TrendingUpIcon : Calendar;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2.5 rounded-lg transition-all capitalize flex items-center gap-2 ${
                          activeTab === tab
                            ? "bg-slate-800 text-slate-100 shadow-lg"
                            : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {tab}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-5">
                <button className="flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm transition-colors px-3 py-2 rounded-lg hover:bg-slate-800/50">
                  <RefreshCw className="w-4 h-4" />
                  <span>Updated {lastUpdated}</span>
                </button>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-6">
          {/* Commodity Toggle */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setSelectedCommodity("gold")}
              className={`px-6 py-3 rounded-xl transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105 ${
                selectedCommodity === "gold"
                  ? "bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20"
                  : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🥇</span>
                <span>Gold</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedCommodity("silver")}
              className={`px-6 py-3 rounded-xl transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105 ${
                selectedCommodity === "silver"
                  ? "bg-gradient-to-br from-slate-400 to-slate-500 text-slate-950 shadow-slate-400/20"
                  : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🥈</span>
                <span>Silver</span>
              </div>
            </button>
          </div>

          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Market Bias Card - HERO SECTION */}
              <div className={`relative p-8 rounded-2xl border-2 ${getBiasBgColor()} shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 ${
                    data.bias === "bullish" ? "bg-emerald-500/5" :
                    data.bias === "bearish" ? "bg-red-500/5" : "bg-amber-500/5"
                  }`}></div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-2">
                      <p className="text-slate-500 mb-2 uppercase tracking-wide text-xs">Market Bias</p>
                      <div className={`flex items-center gap-3 mb-4 ${getBiasColor()}`}>
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          {getBiasIcon()}
                        </div>
                        <span className="text-5xl capitalize tracking-tight">{data.bias}</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        {data.explanation}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                      <p className="text-slate-500 mb-2 uppercase tracking-wide text-xs">Confidence</p>
                      <div className={`text-5xl mb-3 ${getBiasColor()}`}>{data.confidence}%</div>
                      <div className="w-40 h-2.5 bg-slate-800/50 rounded-full overflow-hidden shadow-inner">
                        <div
                          className={`h-full transition-all duration-1000 ${
                            data.bias === "bullish"
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                              : data.bias === "bearish"
                              ? "bg-gradient-to-r from-red-500 to-red-400"
                              : "bg-gradient-to-r from-amber-500 to-amber-400"
                          }`}
                          style={{ width: `${data.confidence}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-900/40 rounded-xl border border-slate-800/50">
                    <AlertCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed">
                      {data.reason}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Influencing Factors */}
              <div>
                <h2 className="text-slate-100 mb-4">Key Influencing Factors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {factors.map((factor) => (
                    <div
                      key={factor.name}
                      className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all cursor-pointer group hover:scale-105 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{factor.icon}</span>
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs uppercase tracking-wide font-medium ${getImpactBg(
                            factor.impact
                          )} ${getImpactColor(factor.impact)}`}
                        >
                          {factor.impact}
                        </span>
                      </div>
                      <h3 className="text-slate-100 mb-2">{factor.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">{factor.description}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-slate-600 to-slate-500 transition-all duration-500"
                            style={{ width: `${factor.confidence}%` }}
                          />
                        </div>
                        <span className="text-slate-500 text-xs font-medium">{factor.confidence}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Events - Simplified Timeline */}
              <div>
                <h2 className="text-slate-100 mb-4">Recent Events</h2>
                <div className="space-y-3">
                  {events.slice(0, 5).map((event, index) => (
                    <div
                      key={index}
                      className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          event.impact === "positive" ? "bg-emerald-400" :
                          event.impact === "negative" ? "bg-red-400" : "bg-slate-400"
                        } group-hover:scale-150 transition-transform duration-300`}></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="text-slate-100 group-hover:text-slate-50 transition-colors">{event.title}</h4>
                            <span
                              className={`px-2.5 py-1 rounded-md text-xs uppercase tracking-wide font-medium whitespace-nowrap ${getImpactBg(
                                event.impact
                              )} ${getImpactColor(event.impact)}`}
                            >
                              {event.impact}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-500">
                            <span className="text-slate-400">{event.source}</span>
                            <span>•</span>
                            <span>{event.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "insights" && (
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-slate-100 mb-2 text-xl">Market Summary</h2>
                    <p className="text-slate-300 leading-relaxed">{data.insights.summary}</p>
                  </div>
                </div>
              </div>

              {/* Key Drivers */}
              <div>
                <h2 className="text-slate-100 mb-4">Key Market Drivers</h2>
                <div className="space-y-4">
                  {data.insights.keyDrivers.map((driver, index) => (
                    <div
                      key={index}
                      className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-slate-100 group-hover:text-slate-50 transition-colors">{driver.title}</h3>
                        <div className="flex gap-2">
                          <span className={`px-2.5 py-1 rounded-md text-xs uppercase tracking-wide font-medium ${
                            driver.impact.includes("Positive") ? "bg-emerald-500/10 text-emerald-400" :
                            driver.impact.includes("Negative") ? "bg-red-500/10 text-red-400" :
                            "bg-slate-500/10 text-slate-400"
                          }`}>
                            {driver.impact}
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-xs uppercase tracking-wide font-medium bg-slate-700/50 text-slate-400">
                            {driver.timeframe}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{driver.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risks */}
              <div>
                <h2 className="text-slate-100 mb-4">Key Risks to Watch</h2>
                <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-xl">
                  <div className="space-y-3">
                    {data.insights.risks.map((risk, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">{risk}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outlook */}
              <div className="p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl">
                <h2 className="text-slate-100 mb-3">Market Outlook</h2>
                <p className="text-slate-300 text-sm leading-relaxed">{data.insights.outlook}</p>
              </div>
            </div>
          )}

          {activeTab === "timeline" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-slate-100 text-xl">Event Timeline</h2>
                <div className="flex gap-2">
                  <button className="px-3 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors text-sm">
                    All Events
                  </button>
                  <button className="px-3 py-2 bg-slate-900/50 border border-slate-800 text-slate-400 rounded-lg hover:border-slate-700 transition-colors text-sm">
                    Positive Only
                  </button>
                  <button className="px-3 py-2 bg-slate-900/50 border border-slate-800 text-slate-400 rounded-lg hover:border-slate-700 transition-colors text-sm">
                    Negative Only
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-800"></div>

                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="relative pl-16">
                      {/* Timeline Dot */}
                      <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-4 border-slate-950 ${
                        event.impact === "positive" ? "bg-emerald-400" :
                        event.impact === "negative" ? "bg-red-400" : "bg-slate-400"
                      }`}></div>

                      {/* Event Card */}
                      <div className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all group">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-slate-500 text-xs">{event.date} • {event.time}</span>
                              <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs uppercase tracking-wide">
                                {event.category}
                              </span>
                            </div>
                            <h3 className="text-slate-100 mb-2 group-hover:text-slate-50 transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-3">{event.description}</p>
                            <div className="flex items-center gap-3 text-xs">
                              <span className="text-slate-500">{event.source}</span>
                              <span className="text-slate-700">•</span>
                              <span className="text-slate-500">{event.timestamp}</span>
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1.5 rounded-lg text-xs uppercase tracking-wide font-medium whitespace-nowrap ml-4 ${getImpactBg(
                              event.impact
                            )} ${getImpactColor(event.impact)}`}
                          >
                            {event.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}