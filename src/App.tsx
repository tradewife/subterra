import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden" style={{ color: '#FFEDE4' }}>
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/IMG_7579 (1).jpg')",
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="tracking-tight font-editorial brand-header" style={{ color: '#FFEDE4' }}>Subterra</span>
              </div>
              <Button 
                variant="outline" 
                className="backdrop-blur-sm bg-white/5 px-5 py-2 font-medium text-sm transition-all duration-500 hover:bg-white hover:text-black"
                style={{ 
                  color: '#FFEDE4', 
                  borderColor: '#FFEDE4',
                  backgroundColor: 'rgba(255, 237, 228, 0.05)'
                }}
              >
                Book Free Audit
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section - Full Viewport Height */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="tracking-tight font-editorial hero-heading mb-6" style={{ color: '#FFEDE4' }}>
                Subterra
              </h1>
              
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light" style={{ color: '#FFEDE4', opacity: 0.8 }}>
                Transform fragmented systems into unified platforms that 
                <span className="font-normal" style={{ color: '#FFEDE4' }}> anticipate market shifts</span> and 
                <span className="font-normal" style={{ color: '#FFEDE4' }}> deliver measurable outcomes</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="px-8 py-3 text-base font-medium group shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                  style={{ 
                    backgroundColor: '#FFEDE4', 
                    color: '#000000'
                  }}
                >
                  Unlock Your Advantage
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                  style={{ 
                    color: '#FFEDE4', 
                    borderColor: '#FFEDE4',
                    backgroundColor: 'rgba(255, 237, 228, 0.05)'
                  }}
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge - Now Below Hero */}
        <section className="py-32 px-6 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="tracking-tight font-editorial section-heading mb-6" style={{ color: '#FFEDE4' }}>The Challenge</h2>
              <p className="text-lg max-w-2xl mx-auto font-light" style={{ color: '#FFEDE4', opacity: 0.8 }}>
                Fragmented systems erode your competitive edge
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Silos Stifle Insights",
                  description: "Disconnected vendors reduce actionable data by 20%",
                  source: "Gartner, 2024"
                },
                {
                  title: "Integration Risks Security",
                  description: "65% of breaches occur at vendor handoffs",
                  source: "IBM, 2024"
                },
                {
                  title: "Slow Response Costs Revenue",
                  description: "Unified systems react 4x faster to market changes",
                  source: "McKinsey, 2024"
                },
                {
                  title: "AI Readiness is Critical",
                  description: "Only 15% of websites support modern AI without overhauls",
                  source: "Forrester, 2024"
                }
              ].map((item, index) => (
                <Card key={index} className="border-white/20 bg-white/5 backdrop-blur-xl hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-xl group" style={{ borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="mb-2 card-title-small" style={{ color: '#FFEDE4' }}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="mb-3 leading-relaxed text-sm" style={{ color: '#FFEDE4', opacity: 0.8 }}>{item.description}</p>
                    <Badge variant="secondary" className="text-xs bg-white/10 font-light" style={{ color: '#FFEDE4', opacity: 0.7, borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                      {item.source}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <p className="text-xl font-medium" style={{ color: '#FFEDE4' }}>Will you unify your digital infrastructure to lead?</p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="tracking-tight font-editorial section-heading mb-6" style={{ color: '#FFEDE4' }}>The Subterra Solution</h2>
              <p className="text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: '#FFEDE4', opacity: 0.8 }}>
                A unified platform for predictive, secure intelligence that eliminates silos and delivers superior outcomes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Predictive Revenue Engine",
                  subtitle: "Anticipate, don't react",
                  benefits: [
                    "Forecast customer value with 85% accuracy",
                    "Personalized experiences boost conversions 2-5x",
                    "SaaS firm increased sales velocity by 280%"
                  ]
                },
                {
                  title: "Proactive Security Framework",
                  subtitle: "Protection that performs",
                  benefits: [
                    "AI blocks 99.9% of threats preemptively",
                    "Reduces load times by 70%",
                    "Bank cut security costs by 65%, hit 99.98% uptime"
                  ]
                },
                {
                  title: "Adaptive Brand Experience",
                  subtitle: "Design that evolves",
                  benefits: [
                    "Dynamic visuals align with trends",
                    "Personalized branding lifts engagement 3x",
                    "Retailer grew high-value conversions by 400%"
                  ]
                },
                {
                  title: "AI-Driven Decision Intelligence",
                  subtitle: "Strategy with precision",
                  benefits: [
                    "Custom AI trained on your industry",
                    "Cuts decision latency by 80%",
                    "Healthcare network slashed planning time by 75%"
                  ]
                }
              ].map((solution, index) => (
                <Card key={index} className="border-white/20 bg-white/5 backdrop-blur-xl hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-xl group" style={{ borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                  <CardHeader className="pb-4">
                    <div>
                      <CardTitle className="mb-1 card-title-large" style={{ color: '#FFEDE4' }}>{solution.title}</CardTitle>
                      <CardDescription className="text-base font-normal" style={{ color: '#FFEDE4', opacity: 0.8 }}>
                        {solution.subtitle}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#FFEDE4' }}></div>
                          <span className="text-sm leading-relaxed" style={{ color: '#FFEDE4', opacity: 0.9 }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Transformation */}
        <section className="py-20 px-6 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="tracking-tight font-editorial section-heading mb-6" style={{ color: '#FFEDE4' }}>The Transformation</h2>
              <p className="text-lg font-light" style={{ color: '#FFEDE4', opacity: 0.8 }}>Market leadership in 90 days</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: "Phase 1",
                  title: "Audit",
                  timeline: "Days 1-30",
                  description: "Proprietary diagnostics analyze your digital infrastructure, revealing untapped potential"
                },
                {
                  phase: "Phase 2", 
                  title: "Design",
                  timeline: "Days 31-60",
                  description: "Custom AI platform built for your industry, unifying design, security, and analytics"
                },
                {
                  phase: "Phase 3",
                  title: "Deployment", 
                  timeline: "Days 61-90",
                  description: "Seamless rollout with zero disruption, compatible with existing systems"
                },
                {
                  phase: "Phase 4",
                  title: "Optimization",
                  timeline: "Ongoing",
                  description: "AI refines predictions and performance, maximizing ROI"
                }
              ].map((phase, index) => (
                <Card key={index} className="border-white/20 bg-white/5 backdrop-blur-xl hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-xl group relative" style={{ borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                  <CardHeader className="text-center pb-3">
                    <Badge variant="outline" className="mb-2 bg-white/10 text-xs font-light" style={{ color: '#FFEDE4', opacity: 0.8, borderColor: '#FFEDE4' }}>
                      {phase.phase}
                    </Badge>
                    <CardTitle className="mb-1 card-title-large" style={{ color: '#FFEDE4' }}>{phase.title}</CardTitle>
                    <CardDescription className="font-medium text-sm" style={{ color: '#FFEDE4', opacity: 0.8 }}>
                      {phase.timeline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center leading-relaxed text-sm" style={{ color: '#FFEDE4', opacity: 0.8 }}>{phase.description}</p>
                  </CardContent>
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-0.5" style={{ backgroundColor: '#FFEDE4', opacity: 0.3 }}></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proven Results */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="tracking-tight font-editorial section-heading mb-6" style={{ color: '#FFEDE4' }}>Proven Results</h2>
              <p className="text-lg font-light" style={{ color: '#FFEDE4', opacity: 0.8 }}>Leaders trust Subterra</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  company: "SaaS Company",
                  challenge: "Slow insights lost 35% of deals",
                  solution: "Predictive analytics",
                  result: "62% win rate increase, $180M revenue gain"
                },
                {
                  company: "Fortune 200 Bank",
                  challenge: "Security slowed pages to 7 seconds",
                  solution: "AI-driven protection",
                  result: "0.8-second loads, 99.99% threat prevention"
                },
                {
                  company: "Healthcare System",
                  challenge: "Fragmented vendors",
                  solution: "Unified platform",
                  result: "82% cost reduction, 300% engagement growth"
                }
              ].map((result, index) => (
                <Card key={index} className="border-white/20 bg-white/5 backdrop-blur-xl hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-xl group" style={{ borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      <CardTitle className="card-title-large" style={{ color: '#FFEDE4' }}>{result.company}</CardTitle>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: '#FFEDE4', opacity: 0.6 }}>Challenge:</p>
                        <p className="text-sm" style={{ color: '#FFEDE4', opacity: 0.9 }}>{result.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: '#FFEDE4', opacity: 0.6 }}>Solution:</p>
                        <p className="text-sm" style={{ color: '#FFEDE4', opacity: 0.9 }}>{result.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: '#FFEDE4', opacity: 0.6 }}>Result:</p>
                        <p className="font-medium text-sm" style={{ color: '#FFEDE4' }}>{result.result}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Badge variant="outline" className="text-xs px-4 py-2 bg-white/10 font-light" style={{ color: '#FFEDE4', opacity: 0.7, borderColor: '#FFEDE4' }}>
                Verified by Deloitte, 2024
              </Badge>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="tracking-tight font-editorial section-heading mb-6" style={{ color: '#FFEDE4' }}>The Investment</h2>
              <p className="text-lg font-light" style={{ color: '#FFEDE4', opacity: 0.8 }}>Plans for enterprises ready to lead</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Core Intelligence",
                  price: "$15,000/month",
                  description: "Design and predictive analytics",
                  features: [
                    "6-month pilot for $75,000",
                    "For testing transformation",
                    "Basic AI integration",
                    "Standard support"
                  ],
                  cta: "Start Pilot"
                },
                {
                  name: "Enterprise Advantage",
                  price: "$30,000/month",
                  description: "Full AI, security, analytics platform",
                  features: [
                    "12-month engagement",
                    "For rapid scaling",
                    "Complete platform access",
                    "Priority support"
                  ],
                  cta: "Scale Now",
                  popular: true
                },
                {
                  name: "Strategic Leadership",
                  price: "Custom Pricing",
                  description: "Bespoke AI and C-suite partnership",
                  features: [
                    "For category leaders",
                    "Custom development",
                    "Executive partnership",
                    "White-glove service"
                  ],
                  cta: "Contact Sales"
                }
              ].map((plan, index) => (
                <Card key={index} className={`border transition-all duration-500 hover:shadow-xl relative bg-white/5 backdrop-blur-xl hover:scale-105 ${
                  plan.popular ? 'shadow-xl scale-105' : 'hover:border-white/40'
                }`} style={{ borderColor: plan.popular ? '#FFEDE4' : 'rgba(255, 237, 228, 0.2)' }}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-white text-black px-6 py-1 text-xs font-medium">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="mb-3 card-title-large" style={{ color: '#FFEDE4' }}>{plan.name}</CardTitle>
                    <div className="text-2xl font-medium mt-4" style={{ color: '#FFEDE4' }}>{plan.price}</div>
                    <CardDescription className="text-base mt-3 font-light" style={{ color: '#FFEDE4', opacity: 0.8 }}>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#FFEDE4' }}></div>
                          <span className="text-sm" style={{ color: '#FFEDE4', opacity: 0.9 }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full py-3 text-sm font-medium transition-all duration-300 ${
                        plan.popular 
                          ? 'hover:scale-105 hover:bg-gray-100' 
                          : 'hover:bg-white hover:text-black'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      style={plan.popular ? { 
                        backgroundColor: '#FFEDE4', 
                        color: '#000000'
                      } : { 
                        color: '#FFEDE4', 
                        borderColor: '#FFEDE4',
                        backgroundColor: 'rgba(255, 237, 228, 0.05)'
                      }}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-black/80 backdrop-blur-xl p-6 rounded-xl border-white/20 inline-block" style={{ borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                <p className="text-base font-medium mb-3" style={{ color: '#FFEDE4' }}>
                  transformation@subterra.site
                </p>
                <Badge variant="secondary" className="text-xs bg-white/10 px-3 py-1 font-light" style={{ color: '#FFEDE4', opacity: 0.7, borderColor: '#FFEDE4' }}>
                  First 10 pilots get a free $10,000 audit
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="tracking-tight font-editorial section-heading mb-12" style={{ color: '#FFEDE4' }}>Who We Serve</h2>
            <p className="text-lg mb-12 font-light" style={{ color: '#FFEDE4', opacity: 0.8 }}>Enterprises shaping their markets</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 p-6 rounded-xl border-white/20 backdrop-blur-xl" style={{ borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                <h3 className="mb-6 card-title-large" style={{ color: '#FFEDE4' }}>Subterra is for you if:</h3>
                <ul className="space-y-4 text-left">
                  {[
                    "Your digital presence drives >$25M revenue",
                    "You prioritize strategic advantage",
                    "You can invest in transformation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#FFEDE4' }}></div>
                      <span className="text-base" style={{ color: '#FFEDE4', opacity: 0.9 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border-white/20 backdrop-blur-xl" style={{ borderColor: 'rgba(255, 237, 228, 0.2)' }}>
                <h3 className="mb-6 card-title-large" style={{ color: '#FFEDE4' }}>Not for you if:</h3>
                <ul className="space-y-4 text-left">
                  {[
                    "You focus on short-term savings",
                    "You accept fragmented solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-3 h-0.5 mt-2.5 flex-shrink-0" style={{ backgroundColor: '#FFEDE4' }}></div>
                      <span className="text-base" style={{ color: '#FFEDE4', opacity: 0.9 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="tracking-tight font-editorial section-heading mb-6">Act Now</h2>
            <p className="text-lg mb-12 font-light">Start your transformation</p>
            
            <Card className="bg-black p-8 border-none shadow-xl" style={{ color: '#FFEDE4' }}>
              <CardContent className="text-center">
                <h3 className="mb-4 card-title-large" style={{ color: '#FFEDE4' }}>Book Free Audit</h3>
                <p className="text-base mb-8 leading-relaxed" style={{ color: '#FFEDE4', opacity: 0.8 }}>
                  30-minute consultation + analysis<br />
                  Uncover $1M+ opportunities
                </p>
                <Button 
                  size="lg" 
                  className="px-8 py-3 text-base font-medium hover:scale-105 transition-all duration-300 hover:bg-gray-100"
                  style={{ 
                    backgroundColor: '#FFEDE4', 
                    color: '#000000'
                  }}
                >
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-black border-t border-white/10" style={{ borderColor: 'rgba(255, 237, 228, 0.1)' }}>
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="tracking-tight font-editorial brand-footer" style={{ color: '#FFEDE4' }}>Subterra</span>
            </div>
            <p className="text-base font-medium mb-3" style={{ color: '#FFEDE4', opacity: 0.8 }}>
              Predict, Protect, Perform
            </p>
            <p className="text-sm" style={{ color: '#FFEDE4', opacity: 0.6 }}>
              Transform your digital infrastructure into dominance.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;