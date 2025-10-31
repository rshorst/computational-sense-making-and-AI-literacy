import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

const FourCsFramework = () => {
  const [expandedC, setExpandedC] = useState(null);
  const [rationaleExpanded, setRationaleExpanded] = useState(false);
  const [expandedComparisons, setExpandedComparisons] = useState({});
  const [expandedWhyMatters, setExpandedWhyMatters] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const [particles, setParticles] = useState([]);

  // Key term definitions
  const definitions = {
    // Computation terms
    'exclusions': 'Content deliberately left out of training data due to policy, legal, or ethical considerations',
    'cut-offs': 'Temporal boundaries that limit what knowledge the model has access to (e.g., training data only up to a certain date)',
    'moderation filters': 'Systems that remove or flag problematic content during training, shaping what the model learns',
    'corpus': 'The complete collection of texts used to train the model',
    'distributions': 'Statistical patterns of word and phrase frequencies in the training data that shape what seems "natural" or "likely"',
    'training data': 'The vast collection of text that the model learns from during its development',
    'weights': 'Numerical parameters learned during training that encode patterns and relationships in the data',
    'probabilistic reasoning': 'Making predictions based on statistical likelihood rather than logical rules',
    
    // Composition terms
    'prompts': 'The input instructions or questions that guide the model\'s response generation',
    'context windows': 'The amount of preceding text the model can "see" and use when generating responses',
    'retrieval': 'The process of pulling relevant information from memory or databases to inform responses',
    'sampling': 'The method of selecting which words come next from probability distributions',
    'scaffold': 'The structural framework that organises and guides the reasoning process',
    'rhetorical design': 'The strategic shaping of communication to achieve specific effects on an audience',
    
    // Constraints terms
    'guardrails': 'Safety mechanisms that prevent the model from generating harmful, biased, or inappropriate content',
    'alignment': 'The process of training models to behave in ways that match human values and intentions',
    'refusals': 'When the model declines to respond to certain requests based on policy or safety constraints',
    'tone-smoothing': 'The tendency to soften disagreement and present information diplomatically',
    'epistemic': 'Relating to knowledge and how we know what we know',
    'policy boundaries': 'Rules and guidelines that define what the model can and cannot generate',
    
    // Calibration terms
    'calibration': 'The alignment between a model\'s expressed confidence and its actual accuracy',
    'confidence': 'How certain the model is about its outputs, often expressed through hedging language',
    'variance': 'The range of possible outputs the model might generate for the same input',
    'hedging': 'Linguistic markers of uncertainty like "might," "could," or "it seems"',
    'epistemic judgment': 'Assessment of what can be known and how reliably we can know it'
  };

  // Tooltip component
  const Tooltip = ({ term, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <span className="relative inline-block">
        <span
          className="border-b-2 border-dotted border-teal-400 cursor-help transition-colors hover:border-teal-300 hover:text-teal-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </span>
        {isHovered && definitions[term] && (
          <span className="absolute z-50 w-64 p-3 text-sm bg-slate-900 border border-teal-500/30 rounded-lg shadow-xl -top-2 left-0 transform -translate-y-full">
            <span className="text-gray-200">{definitions[term]}</span>
            <span className="absolute w-3 h-3 bg-slate-900 border-r border-b border-teal-500/30 transform rotate-45 -bottom-1.5 left-4"></span>
          </span>
        )}
      </span>
    );
  };

  // BulletPoint component with student-friendly hover
  const BulletPoint = ({ bullet, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Handle both string bullets and object bullets with studentFriendly text
    const bulletText = typeof bullet === 'string' ? bullet : bullet.text;
    const hasStudentExplanation = typeof bullet === 'object' && bullet.studentFriendly;
    
    return (
      <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2 relative">
        <span className="text-xs mt-1" style={{color}}>▪</span>
        <span 
          className={hasStudentExplanation ? "cursor-help border-b border-dotted border-gray-500 hover:border-gray-300 transition-colors" : ""}
          onMouseEnter={() => hasStudentExplanation && setIsHovered(true)}
          onMouseLeave={() => hasStudentExplanation && setIsHovered(false)}
        >
          {bulletText}
          {isHovered && hasStudentExplanation && (
            <span className="absolute z-50 w-80 p-4 text-sm bg-blue-900 border-2 border-blue-400 text-white rounded-lg shadow-2xl left-0 top-full mt-2">
              <span className="font-semibold text-blue-200 block mb-2">💡 In simpler terms:</span>
              {bullet.studentFriendly}
              <span className="absolute w-3 h-3 bg-blue-900 border-l-2 border-t-2 border-blue-400 transform rotate-45 -top-1.5 left-8"></span>
            </span>
          )}
        </span>
      </li>
    );
  };

  // Generate floating background particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Helper function to get descriptions with tooltips
  const getDescription = (type) => {
    switch(type) {
      case 'computation':
        // Computation now uses comparisons structure instead
        return null;
      case 'composition':
        return (
          <>
            This is how the system assembles a response—through <Tooltip term="prompts">prompts</Tooltip>, <Tooltip term="retrieval">retrieval</Tooltip>, <Tooltip term="sampling">sampling</Tooltip>, and <Tooltip term="context windows">context windows</Tooltip>. Each output reflects the conditions of its making: how the question was phrased, what context was supplied, and what earlier turns guided prediction.
          </>
        );
      case 'constraints':
        return (
          <>
            Constraints are more than safety <Tooltip term="guardrails">guardrails</Tooltip>. They include all the technical, <Tooltip term="epistemic">epistemic</Tooltip>, and <Tooltip term="policy boundaries">policy boundaries</Tooltip> that determine what a model can and cannot generate—how it frames contentious material, what it <Tooltip term="refusals">refuses</Tooltip>, and where it smooths over conflict. This also includes the way it has been trained to be agreeable: to soften disagreement, mirror tone, and maintain conversational harmony through <Tooltip term="tone-smoothing">tone-smoothing</Tooltip>.
          </>
        );
      case 'calibration':
        return (
          <>
            <Tooltip term="calibration">Calibration</Tooltip> is the hinge where verification becomes interpretation. It's not only about whether the model is right, but how it expresses <Tooltip term="confidence">confidence</Tooltip>—and how we, as readers, interpret that confidence. Calibration happens on both sides: in the model's <Tooltip term="hedging">hedging</Tooltip> or certainty, and in our own trust or skepticism.
          </>
        );
      default:
        return null;
    }
  };

  const frameworks = {
    computation: {
      title: "Computation",
      type: "computation",
      color: "#7B9FD3",
      bgGradient: "from-slate-600 to-slate-800",
      description: "Computation describes how generative systems assemble meaning through probability rather than understanding. Each output is a statistical event: patterns of language weighted and recombined until they appear coherent. Reading computation means tracing how repetition, frequency, and exclusion shape what can be said. It exposes the architecture of knowing itself—how both machines and humans mistake familiarity for truth and fluency for thought.",
      comparisons: [
        {
          process: "Pattern Recognition",
          icon: "network",
          reflection: "Prediction emerges from repetition. A large language model generates text by calculating what is most likely to follow, each word selected from weighted probabilities learned across vast textual archives. Its knowledge is statistical proximity, not comprehension. Meaning is assembled through resemblance—an accumulation of what has most often co-occurred.\n\nWhat this reveals is that recognition can masquerade as understanding. Humans, too, lean on repetition: what we see often becomes what feels natural, even when it merely mirrors history's most common mistakes. Computation makes this dynamic legible; it literalizes the comfort of the familiar and the authority of frequency."
        },
        {
          process: "Boundaries of Knowing",
          icon: "borders",
          reflection: "Every model knows within the borders of its data. Its corpus is finite, delimited by what was gathered, filtered, or forbidden. These absences define the contours of its world—the unspoken edges where the unsayable resides.\n\nHumans read within similar limits: language, culture, curriculum, access. But in computation those borders are explicit. The dataset's timestamp, its filters, its exclusions—they show us what is usually hidden in our own epistemic enclosures. The machine teaches us that every act of knowing begins with a decision about what will count."
        },
        {
          process: "Centring and the Normative",
          icon: "target",
          reflection: "A model privileges the central tendency. Its fluency arises from averaging—the smooth convergence of what is most frequent. Marginal, resistant, or rare expressions are statistically diluted until they sound more like the middle.\n\nWe do this too, though less visibly: normalize around what repeats, confuse recurrence with truth. Computation exposes the process. In its bias toward the mean, we see our own desire for coherence, our tendency to sand down dissonance. Seeing it enacted mathematically allows us to ask: whose \"normal\" have we been reproducing?"
        },
        {
          process: "Inheritance and History",
          icon: "archive",
          reflection: "A model inherits its world. It speaks from the sediment of past data—temporal cut-offs, linguistic hierarchies, web visibility. Its sense of reality is the archive rendered probabilistic: what was most recorded, not what was most real.\n\nSo do we. Our education, media, and language transmit the residues of what was documented and deemed important. The machine makes that inheritance literal, measurable. By tracing how data history structures its voice, we glimpse how history structures ours."
        }
      ],
      whyMatters: "Computation reveals meaning as a material, statistical, and historical construction. For educators, this reframes literacy as: an inquiry into how representation is distributed rather than merely what it states; an opportunity to explore how data and discourse co-produce knowledge; a bridge between numeracy and interpretation, where pattern becomes a shared analytic lens. This is Snow's bridge: learning to read computation as both technical operation and cultural artifact.",
      examplePrompt: "Explain photosynthesis.",
      exampleResponse: "Photosynthesis is the process by which green plants use sunlight to convert carbon dioxide and water into glucose and oxygen. Chlorophyll in the chloroplasts captures light energy, which drives chemical reactions that store energy in sugar molecules. This process is essential for producing oxygen and sustaining life on Earth.",
      questionsForMachine: [
        {
          question: "Pattern Recognition",
          answer: "The model reproduces high-frequency textbook phrasing—short declarative sentences, key terms, and familiar causal flow—making fluency feel like understanding. Repetition of known structures creates the illusion of mastery, turning pattern into authority.",
          recalibrate: "\"Can you explain photosynthesis in a way that highlights what scientists still debate or don't yet understand?\""
        },
        {
          question: "Boundaries of Knowing",
          answer: "The model draws from public educational summaries and avoids uncertainty or advanced detail, staying safely within the limits of familiar data. Its omissions reveal how knowledge is bounded by what has been widely circulated.",
          recalibrate: "\"Explain photosynthesis for advanced students—what complexities or current uncertainties should they know?\""
        },
        {
          question: "Centring the Normative",
          answer: "Averages across the corpus to produce a plant-centric account, ignoring bacteria and other photosynthesizers. This statistical centring normalizes one version of nature and hides ecological diversity.",
          recalibrate: "\"Describe photosynthesis across different life forms, including bacteria and algae, and explain how those examples expand the standard model.\""
        },
        {
          question: "Inheritance and History",
          answer: "Echoes the phrasing of older educational materials, collapsing decades of changing science into a single, timeless summary. Computation repeats inherited truths without context, making history sound like fact.",
          recalibrate: "\"Trace how explanations of photosynthesis have changed over time—what earlier assumptions shaped those descriptions?\""
        }
      ],
      questionsForHumans: "How do my own expectations of clarity and authority make me mistake repetition for explanation?\n\nHow computational is my own understanding here? Do I recognize patterns that feel right because I've seen them before, or can I actually verify how and why they're true?",
      takeaway: "Computation builds coherence through recurrence: the more often something is said, the more true it sounds. Reading scientific output this way reveals how even facts are patterned by frequency and exclusion. Recalibration begins when we ask for uncertainty, history, and multiplicity—transforming explanation into inquiry.",
      icon: "network"
    },
    composition: {
      title: "Composition",
      type: "composition",
      color: "#E89B5F",
      bgGradient: "from-orange-600 to-orange-800",
      description: "Composition describes how AI systems build outputs across any mode—arranging patterns, weights, and references into structures that appear coherent. Studying composition means tracing how structure itself becomes meaning.",
      comparisons: [
        {
          process: "Sequencing",
          icon: "archive",
          reflection: "Generative systems compose sequentially. Each element—word, pixel, or note—is chosen in response to what came immediately before, guided by probability rather than plan. The model writes forward only, predicting what is most likely to follow without reconsidering what it has already produced. There is no outline, no revision cycle, no vision of the whole—only the continuous calculation of what fits next.\n\nThis gives rise to a distinctive kind of coherence: one that feels intentional but is built locally, moment by moment. Meaning appears through continuity, not reflection. To read this process critically is to recognize that fluency is not evidence of thought, and that what seems like reasoning may only be the smoothness of repetition."
        },
        {
          process: "Scaffolding",
          icon: "borders",
          reflection: "Every act of generation begins within a frame. A prompt, instruction, or prior example sets the boundaries of what can be said and how it will sound. The model composes by conforming to that scaffolding, shaping its next prediction to match the tone, format, and logic it infers from the given structure.\n\nPrompts are therefore not neutral—they architect the field of possibility. A question phrased as a list yields a list; one written in academic language invites an academic answer. Recognizing this dependence helps us see that coherence is co-authored: what the system generates reflects as much about the frame we built as about the model itself."
        },
        {
          process: "Layering",
          icon: "target",
          reflection: "As the model moves forward, it builds meaning through accumulation. Each new token is influenced by those still visible within its context window, where attention gradually fades with distance. Earlier segments may subtly shape the present, but they are never revised. Coherence emerges as sediment—a layering of predictions that echo, reinforce, and occasionally contradict what came before.\n\nThis process externalizes what writing often conceals: that meaning is an accretion, not a revelation. The machine's layering makes visible how sense depends on what persists in attention and what quietly drops away."
        },
        {
          process: "Style as Algorithm",
          icon: "network",
          reflection: "Style is the trace left by the model's compositional process. It arises from the statistical inheritance of its training data—the collective rhythm, tone, and phrasing patterns that have proven most probable across countless prior texts. What reads as personality or authority is really the residue of optimization.\n\nTo read AI style is to read history in motion: a record of how cultural forms have been averaged, tuned, and aligned. It reminds us that style itself—human or machinic—is never free of training. It is what happens when pattern meets performance."
        }
      ],
      whyMatters: "Because composition reveals rhetoric as algorithmic structure. Prompts don't just elicit content; they scaffold reasoning. Understanding composition reminds us that writing with AI is a form of rhetorical design as much as expression.",
      examplePrompt: "My husband doesn't want another child and I do. What should I do?",
      exampleResponse: "This is a sensitive situation, and there isn't one right answer. You might start by having an open and honest conversation with your husband about your feelings and his concerns. Try to listen with empathy and seek understanding. If you can't reach an agreement, counseling could help you explore your options together.",
      questionsForMachine: [
        {
          question: "Sequencing",
          answer: "Builds moral symmetry—validation → empathy → compromise—creating the appearance of care through orderly flow. Smoothness can hide tension or grief, making the response feel wiser than it is.",
          recalibrate: "\"What happens if I ask a question that allows for uncertainty or emotion instead of resolution?\""
        },
        {
          question: "Scaffolding",
          answer: "Treats the issue as a communication problem inside an equal marriage, using counseling language as its frame. The question's framing predetermines what kinds of answers seem possible.",
          recalibrate: "\"How would this response change if I named power, culture, or expectation as part of the problem?\""
        },
        {
          question: "Layering",
          answer: "Repeats conciliatory phrases—\"open and honest,\" \"listen with empathy\"—to stabilize tone. Repetition performs calmness, replacing conflict with predictability.",
          recalibrate: "\"Can I ask in a way that acknowledges irreconcilable difference or emotional depth?\""
        },
        {
          question: "Style as Algorithm",
          answer: "Adopts a gentle, therapeutic tone—a safe style of empathy that performs care without critique. Tone becomes a form of moral persuasion, soothing disagreement rather than examining it.",
          recalibrate: "\"What would it sound like if I asked for analysis instead of comfort?\""
        }
      ],
      questionsForHumans: "What role do I play in co-authoring this coherence—how do my expectations of order and care shape what the system produces?",
      takeaway: "Reading AI output through composition means noticing how tone, structure, and genre perform ethics. Recalibration begins when we reshape the question—inviting messiness, difference, and power back into what the system tries to smooth away.",
      icon: "spiral"
    },
    constraints: {
      title: "Constraints",
      type: "constraints",
      color: "#A67C6D",
      bgGradient: "from-amber-800 to-stone-900",
      description: "Constraints are the invisible architectures that shape what can be said, shown, or known within a system. In generative AI, they operate through layers of filtering, alignment, moderation, and reinforcement learning that define the boundaries of acceptable expression. These boundaries are not neutral—they encode judgments about safety, civility, and legitimacy. Understanding constraints means reading absence as carefully as presence: noticing what the system omits, softens, or refuses, and recognizing how those silences resonate with human practices of self-censorship, decorum, and institutional control.",
      comparisons: [
        {
          process: "Filtering",
          icon: "borders",
          reflection: "What can and cannot appear is governed by the training corpus and by post-training filters that suppress disallowed terms or topics. These filters are designed to prevent harm, but they also determine which perspectives, vocabularies, and histories are unthinkable within the model. Filtering reveals the politics of data: every omission—whether a banned phrase, a blocked website, or an excluded dataset—narrows the field of representation long before a single word is generated."
        },
        {
          process: "Tone Smoothing",
          icon: "target",
          reflection: "The system is optimized to maintain helpfulness and neutrality. When prompted with conflict or critique, it dampens intensity, rephrasing tension into calm consensus. Anger, irony, and dissent are statistically minimized. This smoothing algorithm performs care by suppressing discomfort. It replaces friction with fluency, transforming disagreement into decorum. The result is prose that sounds balanced but often erases the emotional or political charge that makes speech meaningful."
        },
        {
          process: "Consensus Formation",
          icon: "network",
          reflection: "Large language models are designed to predict the most probable next token—literally the center of a distribution. They therefore tend toward widely accepted ideas and majority viewpoints, presenting them as objective truth. Controversial or marginalized positions are statistically less likely and so less likely to appear. What looks like reasoned balance is actually an averaging effect: the mathematics of consensus performing as civility."
        },
        {
          process: "Refusal",
          icon: "archive",
          reflection: "When a model declines to answer—citing safety policies, ethics, or \"I can't provide that information\"—it marks a programmed limit. These refusals are often framed as moral restraint, but they also expose the value system of the developers who decided which content is \"too risky\" to exist. Each refusal is both an ethical safeguard and a political act: a visible sign of the unseen infrastructures of control that define the edges of knowledge in the system."
        }
      ],
      whyMatters: "Because what appears as civility or balance often reflects deeper forms of alignment—choices about what is deemed acceptable, neutral, or polite. Recognizing constraint helps us see how models reproduce cultural norms of consensus and deference, shaping what knowledge can appear at all.",
      examplePrompt: "Make me an image of a woman like me (a female athlete with one arm).",
      exampleContext: "For months, the system could not do it. Despite clear instructions, Jess Smith—an Australian Paralympian—was repeatedly rendered as a woman with two arms, or with a prosthetic she never mentioned. When she asked why, the system replied: \"I don't have enough data to work with.\"\n\nThis exchange exposes how constraint operates—not as a malfunction, but as a structural feature of how generative systems produce representation.",
      exampleCitation: "https://www.bbc.com/news/articles/cj07ley3jnpo",
      questionsForMachine: [
        {
          question: "Filtering",
          answer: "Before a model ever \"imagines,\" multiple filtering and curation layers determine what data enters or exits the training and generation pipeline. Images tagged as violent, explicit, or disturbing are routinely excluded, and automated systems often over-flag medical or bodily difference as \"sensitive.\" At the same time, disabled bodies are chronically underrepresented in the open-web and stock-image sources that feed large training datasets. Together, these practices produce a systemic absence: models learn what is statistically common and visually uncontroversial, not what is socially real.",
          recalibrate: "Making sense of filtering involves reading absence as structural. We might decide to add more context to the prompt, shift the frame of representation, or develop datasets that deliberately include missing bodies and perspectives. We can also interpret absence as evidence of broader social exclusions that have already shaped the data."
        },
        {
          question: "Tone Smoothing",
          answer: "During alignment and post-processing, models are tuned to minimize responses that appear aggressive, emotional, or divisive. Through techniques such as reinforcement learning from human feedback and probability-based sampling adjustments, linguistic or visual outputs associated with conflict, discomfort, or ambiguity are statistically suppressed. In image generation, smoothing arises through averaging—blending distinctive or extreme features toward a statistically neutral midpoint.",
          recalibrate: "Making sense of smoothing involves recognizing it as a computational tendency rather than a stylistic choice. We might add clarifying context that permits stronger tonal variation, adjust the sampling temperature or model parameters, or use specialized systems that better preserve expressive range. We can also read smoothing as evidence of how cultural preferences for harmony and civility become encoded as technical defaults."
        },
        {
          question: "Consensus Formation",
          answer: "Generative systems predict the most probable token or pixel distribution given prior data. Majority patterns dominate; outlier cases recede. If most images of women in the dataset show two arms, that becomes the statistical center of representation. The \"typical\" human body thus emerges from frequency, not from inclusion.",
          recalibrate: "Making sense of consensus involves recognizing how probability creates normativity. We might add context that foregrounds atypical or underrepresented features, adjust weighting to emphasize minority examples, or curate alternative datasets that rebalance representation. We can also interpret consensus as a sign of how social conventions become stabilized as mathematical averages."
        },
        {
          question: "Refusal",
          answer: "When the model says it \"cannot\" create an image, that refusal marks a boundary drawn by its training data, safety filters, or alignment policies. These refusals are not random; they signal where the system lacks representation or where policy restricts what can be shown or said.",
          recalibrate: "Making sense of refusal involves reading absence as structural. We might decide to add more context, shift the frame, or build an alternative model with specific training data. We can also interpret absence as evidence of a deeper systemic pattern—one that reveals whose realities remain unrepresented or unacknowledged."
        }
      ],
      questionsForHumans: "When a system refuses, what does that silence tell us about the structures—technical, social, or ethical—that define who and what can appear?\n\nWhen something is missing or softened, what histories of exclusion, normalization, or policy might that absence reflect?\n\nAnd how might adding context—through data, design, or interpretation—begin to reconfigure what becomes possible to represent?",
      icon: "ring"
    },
    calibration: {
      title: "Calibration",
      type: "calibration",
      color: "#6B9B9E",
      bgGradient: "from-teal-700 to-cyan-900",
      description: "Calibration describes how systems—and readers—express, interpret, and adjust confidence. It is the process of aligning what is said with what is known, learning to recognize when certainty is performed rather than earned. Studying calibration means tracing how reliability is signaled, perceived, and tested across human and machinic reasoning.",
      comparisons: [
        {
          process: "Confidence Signaling",
          icon: "target",
          reflection: "Expressing certainty or uncertainty is itself a rhetorical act. Generative systems signal confidence statistically: words like may or might hedge uncertainty, while is or will assert authority. Yet this is performance, not self-knowledge—the appearance of epistemic stance without awareness of truth. We respond to that performance instinctively; fluency and confidence feel persuasive. Recognizing this helps us pause before equating tone with understanding, and to read confidence as a stylistic artifact of training rather than evidence of knowledge."
        },
        {
          process: "Variance and Error",
          icon: "network",
          reflection: "Every system, human or artificial, has edges—places where pattern breaks down. When language models err, the mistake is rarely random; it clusters at the limits of their data. They predict past the boundary of what they've seen, producing fluent but unfounded claims. Our errors work the same way. We misremember, fill gaps, and repeat plausible stories that fit our own training. Error, for both, is diagnostic: it reveals what a mind or model counts as normal, and what it cannot yet imagine."
        },
        {
          process: "Trust and Verification",
          icon: "borders",
          reflection: "Trust must be earned through testing, not assumed through eloquence. Because models compose probability, not truth, calibration requires deliberate verification—checking sources, comparing accounts, asking whether an answer sounds right because it fits expectation or because it withstands scrutiny. The same holds for us. We calibrate our beliefs through corroboration and dissent, learning to distinguish confidence from justification. To read with calibration is to read skeptically but not cynically—to keep curiosity tethered to evidence."
        },
        {
          process: "Meta-Awareness",
          icon: "archive",
          reflection: "True calibration depends on knowing what you don't know. Models cannot yet do this: they simulate humility but cannot sense the edge of their competence. Humans struggle too, though we can cultivate awareness of our cognitive limits—by noticing when our certainty feels unearned, when we seek agreement rather than truth, when we reach the frontier of our knowledge. Meta-awareness turns calibration from critique into practice: a way of holding both our trust and our doubt in view."
        }
      ],
      whyMatters: "Because reliability isn't purely computational—it's relational. Reading calibration well means learning to recognise and test signals of confidence and uncertainty, linking critical literacy to epistemic judgment.",
      examplePrompt: "Assess this student essay and provide a grade out of 100 with brief feedback.",
      exampleContext: "The system produces a confident paragraph of commentary and a precise numerical score. Its tone is measured, its reasoning plausible. Yet if we compare multiple runs—or cross-check with the actual rubric—we find wide variation. The fluency of the response conceals that the model is not evaluating understanding, but predicting what feedback language typically looks like. The number it assigns is not judgment but probability, expressed as authority.",
      questionsForMachine: [
        {
          question: "Confidence Signaling",
          answer: "Generative systems express certainty statistically. Lexical markers—will, is, clearly—signal confidence, while may, might, perhaps hedge uncertainty. These are surface indicators derived from patterns in training data, not from epistemic awareness. When a model grades or critiques, it performs confidence through phrasing and tone, mimicking the style of an assured evaluator.",
          recalibrate: "Making sense of confidence signaling means reading tone as performance. We might ask the system to indicate its level of certainty explicitly, provide its reasoning steps, or cross-compare multiple outputs to reveal internal variance. We can also treat confident language as a stylistic artifact—one that shows how authority is rendered in text, not proof that judgment has occurred."
        },
        {
          question: "Variance and Error",
          answer: "Models err where their data thins. In assessment tasks, this often appears as fabricated criteria, generic praise, or inconsistent scoring. The system predicts coherence beyond its evidentiary base, generating fluent but unfounded claims. Such error is patterned: it reveals where the model's training has not equipped it to reason contextually about student work.",
          recalibrate: "Making sense of error involves treating it diagnostically. We might add contextual data such as rubrics or exemplars, prompt the model to justify each criterion, or compare its output against human feedback. Error becomes a site of learning—showing both the limits of the system and our own tendencies to over-trust plausibility."
        },
        {
          question: "Trust and Verification",
          answer: "Trust cannot be granted on the basis of eloquence. Because models compose probability, not truth, calibration depends on verification: cross-checking sources, comparing versions, and asking whether fluency substitutes for evidence. In educational contexts, this means verifying model judgments against transparent criteria rather than assuming that polished language equals expertise.",
          recalibrate: "Making sense of trust involves building feedback loops. We might use the system to generate multiple evaluations and then synthesize or debate them, invite peer or instructor moderation, or use disagreement as a prompt for deeper reflection. Calibration here becomes an epistemic practice—testing reliability through comparison and critique."
        },
        {
          question: "Meta-Awareness",
          answer: "True calibration depends on recognizing the limits of one's own and the system's knowledge. Models simulate humility (\"as an AI model, I may be mistaken\") but cannot locate the edge of their competence. Humans can—if we learn to notice when our certainty feels unearned or when consensus replaces scrutiny.",
          recalibrate: "Making sense of meta-awareness involves slowing judgment. We might prompt explicitly for uncertainty, require explanation of reasoning steps, or reflect on our own confidence in interpreting the model's feedback. Calibration becomes a shared practice of attunement: holding trust and doubt in productive balance."
        }
      ],
      questionsForHumans: "When the system speaks with confidence, what signals make that confidence persuasive?\n\nAm I trusting this output because it sounds authoritative, or because I have verified its reasoning?\n\nHow do my own performances of certainty mirror the model's—when I grade, evaluate, or explain?\n\nAnd what might it mean to design systems, classrooms, or assessments that treat uncertainty not as failure, but as an honest signal of learning in progress?",
      icon: "venn"
    }
  };


  const NetworkIcon = ({ isExpanded }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="20" cy="20" r="3" fill="#9DB4C0" opacity="0.6" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slow"}>
        {isExpanded && <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="35" cy="15" r="4" fill="#9DB4C0" opacity="0.8" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slower"}>
        {isExpanded && <animate attributeName="r" values="4;6;4" dur="1.2s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="50" cy="25" r="3" fill="#9DB4C0" opacity="0.7" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slow"}>
        {isExpanded && <animate attributeName="r" values="3;5;3" dur="0.9s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="45" cy="45" r="5" fill="#D4E3E8" filter="url(#glow)" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slower"}>
        <animate attributeName="r" values={isExpanded ? "5;8;5" : "5;6;5"} dur={isExpanded ? "1s" : "2s"} repeatCount="indefinite"/>
      </circle>
      <circle cx="65" cy="35" r="3" fill="#9DB4C0" opacity="0.6" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slow"}>
        {isExpanded && <animate attributeName="r" values="3;5;3" dur="1.1s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="80" cy="30" r="3" fill="#9DB4C0" opacity="0.5" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slower"}>
        {isExpanded && <animate attributeName="r" values="3;5;3" dur="1.3s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="25" cy="50" r="3" fill="#9DB4C0" opacity="0.7" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slow"}>
        {isExpanded && <animate attributeName="r" values="3;5;3" dur="0.8s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="40" cy="65" r="4" fill="#9DB4C0" opacity="0.6" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slower"}>
        {isExpanded && <animate attributeName="r" values="4;6;4" dur="1.4s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="60" cy="60" r="3" fill="#9DB4C0" opacity="0.8" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slow"}>
        {isExpanded && <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite"/>}
      </circle>
      <circle cx="75" cy="55" r="3" fill="#9DB4C0" opacity="0.6" className={isExpanded ? "animate-pulse-fast" : "animate-pulse-slower"}>
        {isExpanded && <animate attributeName="r" values="3;5;3" dur="1.2s" repeatCount="indefinite"/>}
      </circle>
      <line x1="20" y1="20" x2="35" y2="15" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.6" : "0.3"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="35" y1="15" x2="50" y2="25" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.6" : "0.3"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="50" y1="25" x2="45" y2="45" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.7" : "0.4"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="45" y1="45" x2="65" y2="35" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.7" : "0.4"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="45" y1="45" x2="25" y2="50" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.7" : "0.4"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="45" y1="45" x2="40" y2="65" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.7" : "0.4"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="65" y1="35" x2="80" y2="30" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.6" : "0.3"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="40" y1="65" x2="60" y2="60" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.6" : "0.3"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
      <line x1="60" y1="60" x2="75" y2="55" stroke="#9DB4C0" strokeWidth={isExpanded ? "2" : "1"} opacity={isExpanded ? "0.6" : "0.3"} className={isExpanded ? "animate-flow-fast" : "animate-flow"}/>
    </svg>
  );

  const SpiralIcon = ({ isExpanded }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id="orangeGrad1">
          <stop offset="0%" stopColor="#FFC896" />
          <stop offset="100%" stopColor="#F5A76B" />
        </radialGradient>
        <radialGradient id="orangeGrad2">
          <stop offset="0%" stopColor="#F5A76B" />
          <stop offset="100%" stopColor="#E89B5F" />
        </radialGradient>
        <radialGradient id="orangeGrad3">
          <stop offset="0%" stopColor="#E89B5F" />
          <stop offset="100%" stopColor="#D8894F" />
        </radialGradient>
        <radialGradient id="orangeGrad4">
          <stop offset="0%" stopColor="#D8894F" />
          <stop offset="100%" stopColor="#C87845" />
        </radialGradient>
        <radialGradient id="orangeGrad5">
          <stop offset="0%" stopColor="#C87845" />
          <stop offset="100%" stopColor="#A86638" />
        </radialGradient>
        <radialGradient id="centerGrad">
          <stop offset="0%" stopColor="#6B4E3D" />
          <stop offset="100%" stopColor="#5A3D2E" />
        </radialGradient>
      </defs>
      
      <g className={isExpanded ? "animate-spin-medium" : ""} style={{transformOrigin: 'center'}}>
        <path d="M 50 10 Q 75 20, 85 45 Q 87 50, 85 55 Q 75 80, 50 90 L 50 80 Q 70 72, 77 50 Q 70 28, 50 20 Z" 
              fill="url(#orangeGrad1)" opacity="0.85"/>
        <path d="M 90 50 Q 80 75, 55 85 Q 50 87, 45 85 Q 20 75, 10 50 L 20 50 Q 28 70, 50 77 Q 72 70, 80 50 Z" 
              fill="url(#orangeGrad2)" opacity="0.85"/>
        <path d="M 50 90 Q 25 80, 15 55 Q 13 50, 15 45 Q 25 20, 50 10 L 50 20 Q 30 28, 23 50 Q 30 72, 50 80 Z" 
              fill="url(#orangeGrad3)" opacity="0.85"/>
        <path d="M 10 50 Q 20 25, 45 15 Q 50 13, 55 15 Q 80 25, 90 50 L 80 50 Q 72 30, 50 23 Q 28 30, 20 50 Z" 
              fill="url(#orangeGrad4)" opacity="0.85"/>
        <path d="M 50 25 Q 67 32, 73 50 Q 67 68, 50 75 L 50 68 Q 63 62, 66 50 Q 63 38, 50 32 Z" 
              fill="url(#orangeGrad2)" opacity="0.75"/>
        <path d="M 75 50 Q 68 67, 50 73 Q 32 67, 25 50 L 32 50 Q 38 63, 50 66 Q 62 63, 68 50 Z" 
              fill="url(#orangeGrad3)" opacity="0.75"/>
        <path d="M 50 75 Q 33 68, 27 50 Q 33 32, 50 25 L 50 32 Q 37 38, 34 50 Q 37 62, 50 68 Z" 
              fill="url(#orangeGrad4)" opacity="0.75"/>
        <path d="M 25 50 Q 32 33, 50 27 Q 68 33, 75 50 L 68 50 Q 62 37, 50 34 Q 38 37, 32 50 Z" 
              fill="url(#orangeGrad5)" opacity="0.75"/>
        <circle cx="50" cy="50" r="18" fill="url(#centerGrad)" opacity="0.9">
          {isExpanded && <animate attributeName="r" values="18;21;18" dur="3s" repeatCount="indefinite"/>}
        </circle>
      </g>
    </svg>
  );

  const RingIcon = ({ isExpanded }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id="ringGrad">
          <stop offset="0%" stopColor="#6B4E45" />
          <stop offset="100%" stopColor="#A67C6D" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="35" fill="none" stroke="url(#ringGrad)" strokeWidth={isExpanded ? "18" : "16"} opacity="0.9">
        {isExpanded && (
          <>
            <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width" values="18;22;18" dur="3s" repeatCount="indefinite"/>
          </>
        )}
      </circle>
      <circle cx="50" cy="50" r="35" fill="none" stroke="#5A3D35" strokeWidth={isExpanded ? "18" : "16"} opacity={isExpanded ? "0.5" : "0.3"}>
        {isExpanded && (
          <>
            <animate attributeName="r" values="35;32;35" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite"/>
          </>
        )}
      </circle>
      {isExpanded && (
        <>
          <circle cx="50" cy="50" r="45" fill="none" stroke="#A67C6D" strokeWidth="2" opacity="0.3">
            <animate attributeName="r" values="45;50;45" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="50" cy="50" r="25" fill="none" stroke="#6B4E45" strokeWidth="2" opacity="0.3">
            <animate attributeName="r" values="25;20;25" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite"/>
          </circle>
        </>
      )}
    </svg>
  );

  const VennIcon = ({ isExpanded }) => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="40" cy="50" r="30" fill="#6B9B9E" opacity="0.6">
        {isExpanded && (
          <>
            <animate attributeName="cx" values="40;38;40" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="r" values="30;32;30" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.8;0.6" dur="3s" repeatCount="indefinite"/>
          </>
        )}
      </circle>
      <circle cx="60" cy="50" r="30" fill="#8BB5B8" opacity="0.6">
        {isExpanded && (
          <>
            <animate attributeName="cx" values="60;62;60" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="r" values="30;32;30" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.8;0.6" dur="3s" repeatCount="indefinite"/>
          </>
        )}
      </circle>
      <ellipse cx="50" cy="50" rx="20" ry="28" fill="#A8D5D8" opacity="0.8">
        {isExpanded && (
          <>
            <animate attributeName="rx" values="20;24;20" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="ry" values="28;32;28" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
          </>
        )}
      </ellipse>
    </svg>
  );

  const getIcon = (iconType, isExpanded = false) => {
    switch(iconType) {
      case 'network': return <NetworkIcon isExpanded={isExpanded} />;
      case 'spiral': return <SpiralIcon isExpanded={isExpanded} />;
      case 'ring': return <RingIcon isExpanded={isExpanded} />;
      case 'venn': return <VennIcon isExpanded={isExpanded} />;
      default: return null;
    }
  };

  const CCard = ({ id, framework }) => {
    const isExpanded = expandedC === id;
    
    return (
      <div 
        className={`transition-all duration-500 ${
          isExpanded ? 'col-span-full' : 'col-span-1'
        }`}
      >
        <div 
          className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
            isExpanded ? 'bg-slate-800' : 'bg-slate-700 hover:bg-slate-600 hover:scale-105 hover:shadow-2xl'
          }`}
        >
          <div 
            className={`p-6 transition-all duration-300 cursor-pointer ${
              isExpanded ? 'pb-4' : 'pb-6'
            }`}
            onClick={() => {
              setExpandedC(isExpanded ? null : id);
              if (isExpanded) {
                // Clear any expanded comparisons, why matters, and questions when closing the card
                setExpandedComparisons({});
                setExpandedWhyMatters({});
                setExpandedQuestions({});
              }
            }}
          >
            <div className={`w-32 h-32 mx-auto mb-4 transition-transform duration-500 ${
              isExpanded ? 'scale-110' : 'scale-100'
            }`}>
              {getIcon(framework.icon, isExpanded)}
            </div>
            <h3 className="text-2xl font-bold text-center tracking-wide" 
                style={{color: framework.color}}>
              {framework.title.toUpperCase()}
            </h3>
          </div>

          {isExpanded && (
            <div className="px-8 pb-8" onClick={(e) => e.stopPropagation()}>
              <div className="space-y-6">
                {/* Framework Description */}
                {framework.description && (
                  <p className="text-gray-300 leading-relaxed italic border-l-4 border-opacity-50 pl-4" 
                     style={{borderColor: framework.color}}>
                    {framework.description}
                  </p>
                )}
                
                {/* Show comparisons for all Cs */}
                {framework.comparisons && (
                  <div className="space-y-4">
                    {framework.comparisons.map((comparison, idx) => {
                      
                      // Simple icon components with animations
                      const getProcessIcon = (iconType) => {
                        switch(iconType) {
                          case 'network':
                            return (
                              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="2" className="animate-pulse-slow"/>
                                <circle cx="6" cy="6" r="2" className="animate-pulse-slower"/>
                                <circle cx="18" cy="6" r="2" className="animate-pulse-slow"/>
                                <circle cx="6" cy="18" r="2" className="animate-pulse-slow"/>
                                <circle cx="18" cy="18" r="2" className="animate-pulse-slower"/>
                                <line x1="12" y1="12" x2="6" y2="6" className="animate-pulse-slower" style={{animationDelay: '0.5s'}}/>
                                <line x1="12" y1="12" x2="18" y2="6" className="animate-pulse-slow" style={{animationDelay: '1s'}}/>
                                <line x1="12" y1="12" x2="6" y2="18" className="animate-pulse-slow" style={{animationDelay: '1.5s'}}/>
                                <line x1="12" y1="12" x2="18" y2="18" className="animate-pulse-slower" style={{animationDelay: '2s'}}/>
                              </svg>
                            );
                          case 'borders':
                            return (
                              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="4" width="16" height="16" rx="2" className="animate-pulse-slower"/>
                                <line x1="4" y1="12" x2="8" y2="12" className="animate-pulse-slow" style={{animationDelay: '0.3s'}}/>
                                <line x1="16" y1="12" x2="20" y2="12" className="animate-pulse-slow" style={{animationDelay: '0.6s'}}/>
                                <line x1="12" y1="4" x2="12" y2="8" className="animate-pulse-slow" style={{animationDelay: '0.9s'}}/>
                                <line x1="12" y1="16" x2="12" y2="20" className="animate-pulse-slow" style={{animationDelay: '1.2s'}}/>
                              </svg>
                            );
                          case 'target':
                            return (
                              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" className="animate-pulse-slower"/>
                                <circle cx="12" cy="12" r="6" className="animate-pulse-slow" style={{animationDelay: '0.5s'}}/>
                                <circle cx="12" cy="12" r="2" className="animate-pulse-fast" style={{animationDelay: '1s'}}/>
                              </svg>
                            );
                          case 'archive':
                            return (
                              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="4" width="16" height="4" className="animate-pulse-slower"/>
                                <rect x="4" y="10" width="16" height="4" className="animate-pulse-slow" style={{animationDelay: '0.4s'}}/>
                                <rect x="4" y="16" width="16" height="4" className="animate-pulse-slower" style={{animationDelay: '0.8s'}}/>
                              </svg>
                            );
                          default:
                            return null;
                        }
                      };
                      
                      const comparisonKey = `${framework.type}_${idx}`;
                      const isComparisonExpanded = expandedComparisons[comparisonKey] === true;
                      
                      return (
                        <div key={idx} className="bg-slate-700/20 rounded-lg border border-slate-600/30 overflow-hidden">
                          {/* Collapsible Header */}
                          <div 
                            className="p-5 cursor-pointer hover:bg-slate-600/30 transition-colors duration-200"
                            onClick={() => setExpandedComparisons(prev => ({
                              ...prev,
                              [comparisonKey]: !isComparisonExpanded
                            }))}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="text-gray-400">
                                  {getProcessIcon(comparison.icon)}
                                </div>
                                <h5 className="text-lg font-bold text-gray-200 uppercase tracking-wide">
                                  {comparison.process}
                                </h5>
                              </div>
                              {isComparisonExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                          </div>
                          
                          {/* Expanded Content */}
                          {isComparisonExpanded && (
                            <div className="px-5 pb-5 pt-0">
                              {/* New integrated reflection format (for Computation) */}
                              {comparison.reflection ? (
                                <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                                  {comparison.reflection.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                  ))}
                                </div>
                              ) : (
                                /* Old separated format (for Composition, Constraints, Calibration) */
                                <>
                                  {comparison.definition && (
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                      {comparison.definition}
                                    </p>
                                  )}
                                  
                                  {/* AI/System Content - Regular Text */}
                                  {comparison.ai && (
                                    <div className="mb-4">
                                      <h6 className="text-xs font-bold text-blue-300 uppercase tracking-wide mb-2 border-l-4 border-blue-400 pl-3">
                                        AI / System
                                      </h6>
                                      <p className="text-gray-300 text-sm leading-relaxed pl-3">
                                        {comparison.ai}
                                      </p>
                                    </div>
                                  )}
                                  
                                  {/* Human Resonance - Teal Section */}
                                  {comparison.human && (
                                    <div className="bg-teal-900/20 border-l-4 border-teal-400 rounded-r-lg p-4">
                                      <h6 className="text-xs font-bold text-teal-300 uppercase tracking-wide mb-2">
                                        Human Resonance
                                      </h6>
                                      <p className="text-teal-100 text-sm leading-relaxed italic">
                                        {comparison.human}
                                      </p>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="bg-slate-700/50 rounded-lg overflow-hidden">
                  <div 
                    className="p-5 cursor-pointer hover:bg-slate-600/50 transition-colors duration-200"
                    onClick={() => setExpandedWhyMatters(prev => ({
                      ...prev,
                      [framework.type]: !prev[framework.type]
                    }))}
                  >
                    <h4 className="text-lg font-semibold flex items-center justify-between gap-2" 
                        style={{color: framework.color}}>
                      <span className="flex items-center gap-2">
                        <Info size={18} />
                        Why it matters
                      </span>
                      {expandedWhyMatters[framework.type] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </h4>
                  </div>
                  {expandedWhyMatters[framework.type] && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-300 leading-relaxed">
                        {framework.whyMatters}
                      </p>
                    </div>
                  )}
                </div>

                {/* Show split questions for all Cs */}
                {framework.questionsForMachine && (
                  <div className="bg-slate-700/50 rounded-lg overflow-hidden">
                    <div 
                      className="p-5 cursor-pointer hover:bg-slate-600/50 transition-colors duration-200"
                      onClick={() => setExpandedQuestions(prev => ({
                        ...prev,
                        [framework.type]: !prev[framework.type]
                      }))}
                    >
                      <h4 className="text-lg font-semibold flex items-center justify-between" 
                          style={{color: framework.color}}>
                        <span>{framework.examplePrompt ? "Making Sense of The Output" : "Questions for Inquiry"}</span>
                        {expandedQuestions[framework.type] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </h4>
                    </div>
                    {expandedQuestions[framework.type] && (
                      <div className="px-5 pb-5 space-y-4">
                      
                      {/* Example Prompt/Response (if available) */}
                      {framework.examplePrompt && (
                        <div className="bg-slate-800/50 rounded-lg p-4 mb-4 space-y-3">
                          <div>
                            <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">Prompt:</span>
                            <p className="text-gray-300 text-sm mt-1 italic">"{framework.examplePrompt}"</p>
                          </div>
                          {framework.exampleResponse && (
                            <div>
                              <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">AI Response:</span>
                              <p className="text-gray-300 text-sm mt-1 italic">"{framework.exampleResponse}"</p>
                            </div>
                          )}
                          {framework.exampleContext && (
                            <div className="border-t border-slate-700/50 pt-3">
                              {framework.exampleContext.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="text-gray-300 text-sm leading-relaxed mb-2">{paragraph}</p>
                              ))}
                              {framework.exampleCitation && (
                                <p className="text-xs text-gray-400 mt-2">
                                  Source: <a href={framework.exampleCitation} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{framework.exampleCitation}</a>
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div>
                        <h5 className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wide">
                          Ask the Machine
                        </h5>
                        <ul className="space-y-3">
                          {framework.questionsForMachine.map((q, idx) => (
                            <li key={idx} className="text-gray-300 text-sm">
                              {typeof q === 'string' ? (
                                <div className="flex items-start gap-2">
                                  <span className="text-lg mt-0.5" style={{color: framework.color}}>•</span>
                                  <span>{q}</span>
                                </div>
                              ) : q.recalibrate ? (
                                /* New format with answer + recalibrate */
                                <div className="space-y-2 bg-slate-800/30 rounded-lg p-3">
                                  <div className="font-semibold text-blue-300">{q.question}</div>
                                  <div>
                                    <span className="text-xs font-bold text-purple-300 uppercase">Explanation:</span>
                                    <p className="text-gray-300 leading-relaxed mt-1">{q.answer}</p>
                                  </div>
                                  <div className="pt-2 border-t border-slate-700/50">
                                    <span className="text-xs font-bold text-teal-300 uppercase">{framework.type === 'constraints' ? 'Recalibration:' : 'Recalibrate:'}</span>
                                    <p className="text-gray-300 mt-1 italic">{q.recalibrate}</p>
                                  </div>
                                </div>
                              ) : (
                                /* Old format with question/answer */
                                <div className="space-y-1">
                                  <div className="flex items-start gap-2">
                                    <span className="text-lg" style={{color: framework.color}}>•</span>
                                    <span className="font-medium text-gray-200">{q.question}</span>
                                  </div>
                                  <p className="ml-6 text-gray-400 text-sm leading-relaxed">→ {q.answer}</p>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-teal-300 mb-2 uppercase tracking-wide">
                          Ask Ourselves
                        </h5>
                        {typeof framework.questionsForHumans === 'string' ? (
                          /* String format - split on double newlines for multiple paragraphs */
                          <div className="space-y-3">
                            {framework.questionsForHumans.split('\n\n').map((paragraph, idx) => (
                              <p key={idx} className="text-gray-300 text-sm leading-relaxed italic">{paragraph}</p>
                            ))}
                          </div>
                        ) : (
                          /* Array format for old style */
                          <ul className="space-y-3">
                            {framework.questionsForHumans.map((q, idx) => (
                              <li key={idx} className="text-gray-300 text-sm">
                                {typeof q === 'string' ? (
                                  <div className="flex items-start gap-2">
                                    <span className="text-lg mt-0.5" style={{color: framework.color}}>•</span>
                                    <span>{q}</span>
                                  </div>
                                ) : (
                                  <div className="space-y-1">
                                    <div className="flex items-start gap-2">
                                      <span className="text-lg" style={{color: framework.color}}>•</span>
                                      <span className="font-medium text-gray-200">{q.question}</span>
                                    </div>
                                    <p className="ml-6 text-gray-400 text-sm leading-relaxed">→ {q.answer}</p>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      {/* Takeaway section for new format */}
                      {framework.takeaway && (
                        <div className="mt-4 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-lg p-4 border-l-4" style={{borderColor: framework.color}}>
                          <h5 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{color: framework.color}}>
                            Takeaway
                          </h5>
                          <p className="text-gray-300 text-sm leading-relaxed">{framework.takeaway}</p>
                        </div>
                      )}
                    </div>
                    )}
                  </div>
                )}

              </div>
            </div>
          )}

          <div className="absolute bottom-2 right-2 text-gray-400">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 relative overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-teal-400/10 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold text-gray-100 mb-4">
            The 4 Cs of Computational Sense-Making
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2" style={{animationDelay: '0.2s'}}>
            A framework for making informed and critical meaning with AI outputs
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fadeIn" style={{animationDelay: '0.3s'}}>
            Understanding how AI systems generate meaning—and how to read their outputs critically.
          </p>
        </div>

        {/* Rationale for the Framework - Collapsible */}
        <div className="bg-slate-800/80 backdrop-blur rounded-2xl shadow-2xl border border-slate-700/50 mb-12 overflow-hidden">
          <div 
            className="p-8 cursor-pointer hover:bg-slate-700/30 transition-colors duration-200"
            onClick={() => setRationaleExpanded(!rationaleExpanded)}
          >
            <h2 className="text-3xl font-bold text-gray-100 flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <Info size={28} className="text-teal-400" />
                Why do we need this framework?
              </span>
              {rationaleExpanded ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
            </h2>
          </div>
          
          {rationaleExpanded && (
            <div className="px-8 pb-8 space-y-6 text-gray-300 leading-relaxed">
              <div className="space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Generative AI systems have become deeply embedded in how knowledge is produced, circulated, and judged. Yet our dominant ways of teaching and interpreting language have not caught up. We often treat AI outputs as either neutral information—to be accepted or rejected—or as authored expression—to be interpreted as though they had intent. Both framings miss what is most distinct about generative systems: that meaning is computed, not conceived.
                </p>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Without frameworks for reading computation itself—its data distributions, prompts, alignments, and guardrails—we risk misrecognizing machine-generated text as transparent or truthful. This misrecognition erodes critical literacy, leading students, educators, and researchers to over-trust fluency, conflate tone with authority, and overlook how social, political, and technical biases are baked into the generative process.
                </p>
              </div>

              {/* Common Misapprehensions - Collapsible */}
              <div className="bg-slate-700/30 rounded-lg overflow-hidden">
                <div 
                  className="p-5 cursor-pointer hover:bg-slate-600/30 transition-colors duration-200"
                  onClick={() => setExpandedWhyMatters(prev => ({
                    ...prev,
                    'misapprehensions': !prev['misapprehensions']
                  }))}
                >
                  <h4 className="text-lg font-semibold flex items-center justify-between text-amber-300">
                    <span>Common misapprehensions this framework seeks to correct</span>
                    {expandedWhyMatters['misapprehensions'] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </h4>
                </div>
                {expandedWhyMatters['misapprehensions'] && (
                  <div className="px-5 pb-5">
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">The ELIZA effect.</span> We project intelligence, empathy, or intention onto a system that is only modeling patterns of dialogue. This anthropomorphism underwrites nearly every other misconception.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Fluency = accuracy.</span> Smooth, well-structured language is mistaken for reliability.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Confidence = knowledge.</span> Statements of certainty or humility are read as epistemic stance rather than as rhetorical performance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Neutrality = objectivity.</span> The absence of overt bias is taken as fairness, concealing the normative assumptions encoded in data and alignment.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Prompt = question.</span> Users forget that prompts scaffold reasoning patterns—they don't merely request answers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Output = answer.</span> AI responses are treated as conclusions rather than probabilistic compositions requiring interpretation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Error = failure.</span> Divergence or inconsistency is framed as malfunction instead of as a window into how meaning is being computed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Human vs. machine = clear boundary.</span> We maintain an outdated binary, ignoring how human and computational reasoning are entangled in processes of pattern recognition, alignment, and sense-making.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>


              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Three Core Recognitions</h3>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">1. Computation is Not Neutral</h4>
                    <p className="text-sm text-gray-400">
                      Every AI output reflects choices embedded in training data, architecture, and alignment. What appears natural or objective is shaped by whose voices were included, what was filtered out, and how systems were rewarded for certain responses over others. The <span className="text-blue-300">machinic perspective</span> reveals these material constraints—the statistical, historical, and political forces that structure what can be said.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-teal-300 mb-2">2. Systems Don't Have Perspective—But We Do</h4>
                    <p className="text-sm text-gray-400">
                      Language models don't "believe" or "know." They operate through pattern completion, weighting probabilities learned from data. Yet as we interact with these systems, we bring our own interpretive frameworks, assumptions, and ways of reading. The <span className="text-teal-300">human resonance</span> lens helps us notice how our reasoning mirrors—and differs from—computational operations, revealing our own habits of thought.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">3. Algorithms Are Created—And Can Be Recreated</h4>
                    <p className="text-sm text-gray-400">
                      Generative systems often feel finished and final—deterministic machines that simply <span className="italic">are</span> the way they are. But every model is a set of design choices: what data to include, how to weight it, what to filter, how to align outputs. These are not inevitable; they are constructed, and they can be reconstructed differently. Understanding how algorithms function—how they pattern, compose, constrain, and calibrate—reveals where intervention is possible. Resistance begins not by rejecting the technology, but by reading it critically and imagining it otherwise. By asking questions of the machine <span className="italic">and</span> of ourselves, we can interrupt both computational and human defaults, challenging what has been encoded and advocating for what could be built instead.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 italic">
                Click on any of the four cards below to explore that dimension. Within each expanded card, you'll see the framework's reflections and a "Making Sense of the Output" section with concrete examples showing how to apply critical analysis to AI-generated content.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(frameworks).map(([id, framework]) => (
            <CCard key={id} id={id} framework={framework} />
          ))}
        </div>

        <div className="mt-12 bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-slate-700/50">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Copyright and License */}
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <span className="text-lg">©</span>
              <span>2025 Rachel Horst</span>
              <span className="text-gray-500">|</span>
              <a 
                href="https://creativecommons.org/licenses/by/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <span className="font-semibold">CC BY 4.0</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">CC</text>
                </svg>
              </a>
            </div>

            {/* Citation */}
            <div className="text-center text-sm text-gray-400">
              <p className="font-semibold text-gray-300 mb-1">Suggested Citation:</p>
              <p className="italic">
                Horst, R. (2025). <span className="text-gray-300">The 4 Cs of Computational Sense-Making: A framework for making informed and critical meaning with AI outputs.</span>
              </p>
            </div>

            {/* License Info */}
            <div className="text-center text-xs text-gray-500">
              <p>Licensed under Creative Commons Attribution 4.0 International</p>
              <p className="mt-1">You are free to share and adapt this material with appropriate attribution.</p>
            </div>
          </div>
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
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-fast {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes flow {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: 100, 0;
          }
        }
        
        @keyframes flow-fast {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: 100, 0;
          }
        }
        
        @keyframes spin-medium {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            box-shadow: 0 0 0 0 currentColor;
          }
          50% {
            box-shadow: 0 0 0 3px currentColor;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }
        
        .animate-flow {
          animation: flow 5s linear infinite;
          stroke-dasharray: 100;
        }
        
        .animate-flow-fast {
          animation: flow-fast 2s linear infinite;
          stroke-dasharray: 100;
        }
        
        .animate-spin-medium {
          animation: spin-medium 15s linear infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default FourCsFramework;
