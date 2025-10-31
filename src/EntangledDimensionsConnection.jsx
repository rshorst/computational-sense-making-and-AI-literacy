import React, { useState } from 'react';
import { Database, Network, Globe, Wrench, Atom, Puzzle, Scale, Users, ArrowUpRight, Sparkles } from 'lucide-react';

const EntangledDimensionsConnection = () => {
  const [activeC, setActiveC] = useState(null);
  const [hoveredDimension, setHoveredDimension] = useState(null);

  // Define the Four Cs with their colors
  const fourCs = {
    computation: {
      name: "Computation",
      color: "#7B9FD3",
      dimensions: ["data", "algorithmic", "knowledge", "epistemic"],
      explanation: "Computation reveals how AI systems learn from data, process through algorithms, construct knowledge from patterns, and operate within epistemic boundaries of what can be known."
    },
    composition: {
      name: "Composition",
      color: "#4ECDC4",
      dimensions: ["creative", "relational", "disciplinary", "knowledge"],
      explanation: "Composition shows how we craft prompts creatively, build relational dialogue with AI, apply disciplinary expertise, and scaffold knowledge construction through iterative interaction."
    },
    constraints: {
      name: "Constraints",
      color: "#FFB84D",
      dimensions: ["political", "ecological", "epistemic", "relational"],
      explanation: "Constraints expose how AI is governed politically, embedded in ecological systems, bounded epistemically by what it can express, and shaped relationally through alignment training."
    },
    calibration: {
      name: "Calibration",
      color: "#B695C0",
      dimensions: ["epistemic", "knowledge", "futures", "relational"],
      explanation: "Calibration involves epistemic judgment about confidence, knowledge verification processes, future-oriented assessment of reliability, and relational trust-building with AI systems."
    }
  };

  // Define the dimensions and their positions (matching the image layout)
  const dimensions = {
    data: { 
      label: "DATA", 
      color: "#7BA05B",
      icon: Database,
      position: { top: "1%", left: "35%" },
      explanations: {
        computation: "Data shapes what AI can say—training datasets determine whose voices get amplified and whose get left out. When you read AI outputs computationally, you're asking: What data created this? Whose perspectives are missing? What patterns got baked in?"
      }
    },
    algorithmic: { 
      label: "ALGORITHMIC", 
      color: "#D4AF37",
      icon: Network,
      position: { top: "1%", right: "35%" },
      explanations: {
        computation: "Algorithms turn data into predictions—they're the logic behind what comes next. Reading algorithmically means seeing outputs as probability, not truth. You ask: How did pattern recognition shape this answer? What gets prioritized when an AI predicts?"
      }
    },
    futures: { 
      label: "FUTURES", 
      color: "#9B7BB5",
      icon: ArrowUpRight,
      position: { top: "12%", right: "18%" },
      explanations: {
        calibration: "Calibration in the futures dimension means asking: How reliable will this be over time? When you assess AI predictions about what's coming, you're judging whether to trust its confidence. Does it know what it doesn't know? Whose futures does it imagine?"
      }
    },
    creative: { 
      label: "CREATIVE", 
      color: "#C97B84",
      icon: Sparkles,
      position: { top: "35%", right: "8%" },
      explanations: {
        composition: "Composition is creative work—you're co-authoring with AI, not just asking questions. When you craft prompts, you shape what's possible. You design the interaction: How can I get something surprising? How do I steer this without controlling it completely?"
      }
    },
    relational: { 
      label: "RELATIONAL", 
      color: "#7B6B5B",
      icon: Users,
      position: { bottom: "12%", right: "18%" },
      explanations: {
        composition: "Composition invites relation—how you prompt shapes the kind of conversation that becomes possible. Each exchange is an opening: you're not just extracting information, you're creating conditions for dialogue. The way you compose determines whether AI feels like a tool to use or a presence to engage with. Importantly, you are crafting the relation. Understanding the computational aspect of composition can keep you aware of the machinic, even as you engage in relation.",
        constraints: "Constraints shape relationships—AI is trained to be agreeable, to smooth over disagreement, to mirror your tone. When you notice this, you see how alignment training makes AI a certain kind of partner. It can't push back the way a person would.",
        calibration: "Calibration builds (or breaks) trust in relationships. When AI hedges or sounds confident, that affects whether you believe it, rely on it, or question it. Relational calibration means noticing: Am I trusting this too much? Too little? What kind of relationship am I building?"
      }
    },
    political: { 
      label: "POLITICAL", 
      color: "#8B7355",
      icon: Scale,
      position: { bottom: "1%", right: "32.5%" },
      explanations: {
        constraints: "Politics are embedded in code—who gets to decide what AI can say? Constraints show you where policy, power, and profit shape boundaries. When AI refuses something or frames an issue carefully, that's governance at work. Who made these rules? Who benefits?"
      }
    },
    disciplinary: { 
      label: "DISCIPLINARY", 
      color: "#5B7C99",
      icon: Puzzle,
      position: { bottom: "1%", left: "32.5%" },
      explanations: {
        composition: "Different fields work with AI differently. Through composition, you bring your disciplinary expertise—a biologist prompts differently than a poet. You apply your field's methods for questioning, testing, and sense-making. Discipline shapes how you compose."
      }
    },
    epistemic: { 
      label: "EPISTEMIC", 
      color: "#D4691A",
      icon: Atom,
      position: { bottom: "12%", left: "18%" },
      explanations: {
        computation: "Computation reveals the limits of knowing—what can be learned from patterns versus what needs lived experience. When you read computationally, you see where AI hits boundaries: What can't be predicted? What requires judgment, not calculation?",
        constraints: "Constraints bound what can be known or said. Some limits are technical (the model wasn't trained on that), some are policy (it won't discuss that). Epistemically, constraints show you where knowledge ends—not just what AI won't say, but what it can't know.",
        calibration: "Epistemic calibration asks: How do we know what we know? When AI sounds certain, is it? When it hedges, should you trust the hedge? You're constantly judging how confident to be about what you're learning. It's about knowing the limits."
      }
    },
    knowledge: { 
      label: "KNOWLEDGE-CONSTRUCTION", 
      color: "#B85042",
      icon: Wrench,
      position: { top: "35%", left: "8%" },
      explanations: {
        computation: "Knowledge gets built from patterns—not discovered, but constructed through repetition and statistical weight. When you read computationally, you see AI outputs as assembled information, not facts. You ask: How was this 'knowledge' put together? What's it really saying?",
        composition: "Through composition, you actively build knowledge—prompting, testing, refining. You're not just asking questions; you're scaffolding understanding across multiple exchanges. Each interaction shapes what comes next. You're constructing meaning together.",
        calibration: "Calibration means checking whether 'knowledge' holds up. You verify, test, compare to other sources. In knowledge construction, calibration is ongoing: Does this make sense? Can I trust it? Where do I need to look deeper? It's about quality control."
      }
    },
    ecological: { 
      label: "ECOLOGICAL", 
      color: "#6B9080",
      icon: Globe,
      position: { top: "12%", left: "18%" },
      explanations: {
        constraints: "AI exists in physical systems—servers, energy, resources. Constraints reveal this material reality: every output has an environmental cost. When you think ecologically about constraints, you see how computation's boundaries include planetary ones. What's the real cost of this technology?"
      }
    }
  };

  const isHighlighted = (dimensionKey) => {
    if (!activeC) return false;
    return fourCs[activeC].dimensions.includes(dimensionKey);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Computational Sense-Making
          </h1>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            and the Entangled Dimensions of AI Literacy
          </h1>
          <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-3">
            <p>
              AI literacy is increasingly inseparable from literacy itself—a fundamental capacity for making meaning in a world saturated by computational systems. These <a href="https://rshorst.github.io/Entangled-Dimensions-of-AI-Literacy/" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-400 hover:text-teal-300 transition-colors underline">entangled dimensions</a> are not prescriptive categories but provocations for inquiry: ways to interrogate how AI reshapes knowing, making, and relating.
            </p>
            <p>
              A computational approach to sense-making can work within this ecology, offering lenses for reading AI outputs critically and contextually. Below are some productive connections between the <a href="https://rshorst.github.io/computational-sense-making/" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-400 hover:text-teal-300 transition-colors underline">Four Cs Framework</a> and the broader dimensions of AI literacy.
            </p>
          </div>
        </div>

        {/* Four Cs Buttons */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-200">
            Explore Connections: Select a C
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(fourCs).map(([key, c]) => (
              <button
                key={key}
                onClick={() => setActiveC(activeC === key ? null : key)}
                className="relative p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: activeC === key ? c.color : 'rgba(51, 65, 85, 0.6)',
                  border: `2px solid ${activeC === key ? c.color : 'rgba(148, 163, 184, 0.3)'}`,
                  boxShadow: activeC === key ? `0 0 30px ${c.color}40` : 'none'
                }}
              >
                <div className="text-xl font-bold text-white">
                  {c.name}
                </div>
                <div className="text-xs text-gray-200 mt-2">
                  {activeC === key ? 'Hide connections' : 'Show connections'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explanation Text */}
        {activeC && (
          <div 
            className="mb-8 p-6 rounded-xl animate-fadeIn"
            style={{
              backgroundColor: 'rgba(51, 65, 85, 0.6)',
              border: `2px solid ${fourCs[activeC].color}`,
              boxShadow: `0 0 20px ${fourCs[activeC].color}30`
            }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: fourCs[activeC].color }}>
              {fourCs[activeC].name} Connections
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {fourCs[activeC].explanation}
            </p>
            <p className="text-sm text-gray-400 mt-3 italic">
              💡 Hover over highlighted dimensions below to see how computational sense-making operates within each.
            </p>
          </div>
        )}

        {/* Visual Representation */}
        <div className="relative bg-slate-800/50 rounded-2xl p-32 border border-slate-700 min-h-[400px]">
          
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <a 
              href="https://rshorst.github.io/Entangled-Dimensions-of-AI-Literacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-purple-300 transition-all mb-1">
                entangled
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-purple-300 transition-all mb-1">
                dimensions of
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-purple-300 transition-all">
                AI LITERACY
              </div>
              <div className="text-xs text-gray-500 mt-3 hover:text-gray-400 transition-colors">
                Click to learn more →
              </div>
            </a>
          </div>

          {/* Dimensions */}
          {Object.entries(dimensions).map(([key, dim]) => {
            const highlighted = isHighlighted(key);
            const Icon = dim.icon;
            const isHovered = hoveredDimension === key;
            
            return (
              <div
                key={key}
                className="absolute transition-all duration-500"
                style={{
                  ...dim.position,
                  transform: highlighted ? 'scale(1.15)' : 'scale(1)',
                  zIndex: highlighted ? 10 : (isHovered ? 20 : 1)
                }}
                onMouseEnter={() => highlighted && setHoveredDimension(key)}
                onMouseLeave={() => setHoveredDimension(null)}
              >
                <div
                  className="relative cursor-pointer"
                >
                  <div
                    className="px-5 py-3 rounded-full font-semibold text-xs transition-all duration-500 shadow-lg flex items-center gap-2"
                    style={{
                      backgroundColor: highlighted 
                        ? dim.color 
                        : 'rgba(71, 85, 105, 0.5)',
                      border: highlighted 
                        ? `3px solid ${fourCs[activeC]?.color}` 
                        : `2px solid ${dim.color}80`,
                      color: highlighted ? '#fff' : '#cbd5e1',
                      boxShadow: highlighted 
                        ? `0 0 40px ${dim.color}80, 0 0 60px ${fourCs[activeC]?.color}60` 
                        : `0 4px 10px rgba(0,0,0,0.2)`,
                      opacity: activeC && !highlighted ? 0.3 : 1
                    }}
                  >
                    <Icon size={16} className="flex-shrink-0" />
                    <span className="whitespace-nowrap">{dim.label}</span>
                  </div>
                  
                  {/* Hover explanation - only shows when dimension is highlighted */}
                  {isHovered && highlighted && (
                    <div 
                      className="absolute mt-2 p-4 bg-slate-900 border-2 rounded-lg shadow-2xl z-50 animate-fadeIn w-80"
                      style={{
                        borderColor: fourCs[activeC]?.color,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '100%',
                        marginTop: '8px'
                      }}
                    >
                      <div className="text-xs text-gray-300 leading-relaxed">
                        {dim.explanations && dim.explanations[activeC] ? dim.explanations[activeC] : 'No explanation available'}
                      </div>
                      <div 
                        className="absolute w-3 h-3 transform rotate-45 -top-1.5 left-1/2 -translate-x-1/2"
                        style={{
                          backgroundColor: 'rgb(15, 23, 42)',
                          borderLeft: `2px solid ${fourCs[activeC]?.color}`,
                          borderTop: `2px solid ${fourCs[activeC]?.color}`
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Connecting Lines - shown when a C is active */}
          {activeC && (
            <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
              {fourCs[activeC].dimensions.map((dimKey, idx) => {
                const dim = dimensions[dimKey];
                if (!dim) return null;
                
                // Calculate rough positions for lines (this is approximate)
                const centerX = 50;
                const centerY = 50;
                
                let dimX = 50;
                let dimY = 50;
                
                if (dim.position.top) dimY = parseInt(dim.position.top);
                if (dim.position.bottom) dimY = 100 - parseInt(dim.position.bottom);
                if (dim.position.left) dimX = parseInt(dim.position.left);
                if (dim.position.right) dimX = 100 - parseInt(dim.position.right);
                
                return (
                  <line
                    key={`${activeC}-${dimKey}`}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${dimX}%`}
                    y2={`${dimY}%`}
                    stroke={fourCs[activeC].color}
                    strokeWidth="2"
                    strokeOpacity="0.4"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>
          )}
        </div>

        {/* Footer Attribution */}
        <div className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>
            Framework: Horst, R. (2025). <em>The 4 Cs of Computational Sense-Making</em>
          </p>
          <p>
            Entangled Dimensions: Horst, R. (2025). <em>Entangled Dimensions of AI Literacy</em>
          </p>
          <p className="text-xs">
            Licensed under Creative Commons Attribution 4.0 International
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EntangledDimensionsConnection;
