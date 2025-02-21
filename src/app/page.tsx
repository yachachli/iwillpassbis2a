import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="w-full p-6 bg-blue-600 dark:bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            🧬 BIS2A midterm 2 Core Concepts
          </h1>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href="#redox" className="hover:underline">
                  Redox ⚡
                </a>
              </li>
              <li>
                <a href="#glycolysis" className="hover:underline">
                  Glycolysis 🍎
                </a>
              </li>
              <li>
                <a href="#citric" className="hover:underline">
                  Citric Cycle 🔄
                </a>
              </li>
              <li>
                <a href="#oxphos" className="hover:underline">
                  Oxidative Phos. 🔋
                </a>
              </li>
              <li>
                <a href="#photosynthesis" className="hover:underline">
                  Photosynthesis 🍃
                </a>
              </li>
              <li>
                <a href="#regulation" className="hover:underline">
                  Regulation 🔧
                </a>
              </li>
              <li>
                <a href="#extras" className="hover:underline">
                  Extras ✨
                </a>
              </li>
              <li>
                <a href="#study-tips" className="hover:underline">
                  Study Tips 📚
                </a>
              </li>
              <li>
                <a href="#enzyme" className="hover:underline">
                  Enzymes 🧪
                </a>
              </li>
              <li>
                <a href="#signal" className="hover:underline">
                  Signal Transduction 📡
                </a>
              </li>
              <li>
                <a href="#transport" className="hover:underline">
                  Membrane Transport 🚪
                </a>
              </li>
              <li>
                <a href="#amino" className="hover:underline">
                  Amino Acid Metabolism 🍖
                </a>
              </li>
              <li>
                <a href="#nucleic" className="hover:underline">
                  Nucleic Acid Metabolism 🧬
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ &amp; Glossary 📖
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:underline">
                  Case Studies 🔍
                </a>
              </li>
              <li>
                <a href="#energetics" className="hover:underline">
                  Energetics ⚖️
                </a>
              </li>
              <li>
                <a href="#midterm" className="hover:underline">
                  Midterm Strategies 🎯
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hey Yahli (third person salutation)! 👋
          </h2>
          <p className="mb-4">
            This website is your one-stop resource for mastering key BIS2A midterm 2 concepts! From redox reactions and glycolysis to the citric acid cycle, oxidative phosphorylation, photosynthesis, metabolic regulation, and more advanced topics - I&apos;ve got you covered. Dive in, explore each section, and boost your understanding with detailed explanations and helpful visuals. This was built during Hack Night by Yahli.
          </p>
        </section>

        {/* Redox Reactions */}
        <section id="redox" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Redox Reactions &amp; Electron Carriers ⚡
          </h2>
          <p className="mb-2">
            Redox (reduction-oxidation) reactions are fundamental to energy transfer in biological systems. In these reactions:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Oxidation</strong> = loss of electrons 🔻
            </li>
            <li>
              <strong>Reduction</strong> = gain of electrons 🔺
            </li>
            <li>
              The <strong>reducing agent</strong> donates electrons (and is oxidized).
            </li>
            <li>
              The <strong>oxidizing agent</strong> accepts electrons (and is reduced).
            </li>
          </ul>
          <p className="mb-2">
            <strong>Example:</strong> NADH → NAD<sup>+</sup> is a classic case where NADH is oxidized while serving as the reducing agent.
          </p>
          <p>
            Mastering redox potentials (E°′) and free energy changes (ΔG°′) is key to predicting the spontaneity and direction of these reactions.
          </p>
        </section>

        {/* Glycolysis & Fermentation */}
        <section id="glycolysis" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Glycolysis &amp; Fermentation 🍎
          </h2>
          <p className="mb-2">
            <strong>Glycolysis</strong> breaks down one molecule of glucose into two molecules of pyruvate while producing a net gain of ATP and NADH.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Substrate-level phosphorylation</strong> is the direct formation of ATP during glycolysis.
            </li>
            <li>
              Several irreversible steps ensure the pathway moves in one direction.
            </li>
          </ul>
          <p className="mb-2">
            When oxygen is limited, cells switch to <strong>fermentation</strong> to regenerate NAD<sup>+</sup> from NADH:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Lactic acid fermentation</strong>: Pyruvate is reduced to lactate (common in muscle cells during intense exercise) 🏃‍♂️.
            </li>
            <li>
              <strong>Alcohol fermentation</strong>: Pyruvate converts to ethanol (via acetaldehyde) and CO<sub>2</sub> (typical in yeast) 🍺.
            </li>
          </ul>
          <p>
            These adaptations ensure that ATP production continues even without oxygen.
          </p>
        </section>

        {/* Citric Acid Cycle */}
        <section id="citric" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">Citric Acid Cycle 🔄</h2>
          <p className="mb-2">
            Also known as the Krebs cycle, this pathway completely oxidizes the acetyl group from acetyl CoA, producing NADH, FADH<sub>2</sub>, and GTP (or ATP), along with CO<sub>2</sub> as a byproduct.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Decarboxylation steps</strong> remove carbon atoms as CO<sub>2</sub> 📉.
            </li>
            <li>
              It supplies energy carriers to the electron transport chain.
            </li>
          </ul>
          <p>
            The cycle is pivotal not only for energy production but also as a source of intermediates for biosynthesis.
          </p>
        </section>

        {/* Oxidative Phosphorylation */}
        <section id="oxphos" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">Oxidative Phosphorylation 🔋</h2>
          <p className="mb-2">
            Occurring in the mitochondria, this process harnesses electrons from NADH and FADH<sub>2</sub> via the electron transport chain (ETC) to create a proton gradient that powers ATP synthesis through ATP synthase.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Chemiosmosis:</strong> Protons (H<sup>+</sup>) flow down their gradient to generate ATP.
            </li>
            <li>
              The strength of the proton gradient and the integrity of the inner mitochondrial membrane are key to efficient energy conversion.
            </li>
          </ul>
          <p>
            This highly exergonic process makes ATP the central energy currency of the cell.
          </p>
        </section>

        {/* Photosynthesis */}
        <section id="photosynthesis" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">Photosynthesis 🍃</h2>
          <p className="mb-2">
            Photosynthesis is split into two major parts:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Light Reactions:</strong> Capture sunlight to generate ATP and NADPH, while splitting water to release O<sub>2</sub> 🌞.
            </li>
            <li>
              <strong>Calvin Cycle:</strong> Uses ATP and NADPH to fix CO<sub>2</sub> into sugars.
            </li>
          </ul>
          <p>
            Plants may also use <strong>cyclic electron flow</strong> when the requirement is solely for ATP.
          </p>
        </section>

        {/* Metabolic Regulation */}
        <section id="regulation" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Metabolic Regulation &amp; Enzyme Kinetics 🔧
          </h2>
          <p className="mb-2">
            Cells regulate metabolic flux through several mechanisms:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Allosteric Regulation:</strong> Molecules bind to sites other than the active site to modulate enzyme activity (e.g., ATP inhibiting PFK, AMP stimulating it).
            </li>
            <li>
              <strong>Feedback Inhibition:</strong> End products inhibit upstream enzymes to prevent overproduction.
            </li>
            <li>
              <strong>Covalent Modifications:</strong> Phosphorylation/dephosphorylation alters enzyme activity.
            </li>
          </ul>
          <p>
            Such regulation allows cells to swiftly adapt to changes in energy demand and nutrient availability.
          </p>
        </section>

        {/* Extras */}
        <section id="extras" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Concepts &amp; Fun Facts ✨</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Lipid Metabolism:</strong> Fatty acids undergo β-oxidation to produce acetyl CoA.
            </li>
            <li>
              <strong>Protein Metabolism:</strong> Amino acids are deaminated and fed into pathways like glycolysis or the citric acid cycle.
            </li>
            <li>
              <strong>Thermodynamics:</strong> ΔE°′ and ΔG°′ guide electron flow and reaction spontaneity.
            </li>
            <li>
              <strong>Brown Fat Tissue:</strong> Generates heat via uncoupling proteins rather than storing energy as ATP 🥶🔥.
            </li>
            <li>
              <strong>Enzyme Inhibition:</strong> Competitive inhibitors (like malonate) and noncompetitive inhibitors affect enzyme activity differently.
            </li>
          </ul>
          <p>
            These topics broaden your perspective on how energy and matter are managed in living organisms.
          </p>
        </section>

        {/* Study Tips */}
        <section id="study-tips" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">Study Tips &amp; Resources 📚</h2>
          <p className="mb-2">
            Here are some tips to maximize your learning:
          </p>
          <ul className="list-decimal pl-6 mb-4">
            <li>
              <strong>Visualize Pathways:</strong> Draw and annotate diagrams to track electron flow, ATP production, and regulation.
            </li>
            <li>
              <strong>Use Flashcards:</strong> Create cards for key terms like oxidation, allosteric regulation, and substrate-level phosphorylation.
            </li>
            <li>
              <strong>Practice Problems:</strong> Reinforce your knowledge with questions similar to those on your test.
            </li>
            <li>
              <strong>Group Study:</strong> Explaining concepts to peers solidifies your own understanding.
            </li>
            <li>
              <strong>Interactive Simulations:</strong> Explore online animations and tools that model metabolic pathways.
            </li>
          </ul>
          <p>
            Remember: take breaks, hydrate, and celebrate your progress! 🎉
          </p>
        </section>

        {/* Enzyme Structure & Function */}
        <section id="enzyme" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Enzyme Structure &amp; Function 🧪
          </h2>
          <p className="mb-2">
            Enzymes are biological catalysts that speed up chemical reactions. Key points include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Active Site:</strong> The region where substrates bind and reactions occur.
            </li>
            <li>
              <strong>Induced Fit:</strong> The active site changes shape upon substrate binding for optimal catalysis.
            </li>
            <li>
              <strong>Michaelis-Menten Kinetics:</strong> Describes the relationship between substrate concentration and reaction rate.
            </li>
            <li>
              <strong>Regulation:</strong> Enzymes can be activated or inhibited by different molecules.
            </li>
          </ul>
          <p>
            Understanding these concepts is key to grasping how enzymes control metabolic pathways.
          </p>
        </section>

        {/* Signal Transduction */}
        <section id="signal" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Signal Transduction &amp; Cellular Communication 📡
          </h2>
          <p className="mb-2">
            Cells use signaling pathways to respond to external stimuli. Key elements include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Receptors:</strong> Proteins that detect and bind signaling molecules.
            </li>
            <li>
              <strong>Second Messengers:</strong> Small molecules (e.g., cAMP, Ca<sup>2+</sup>) that relay signals internally.
            </li>
            <li>
              <strong>Protein Kinases &amp; Phosphatases:</strong> Enzymes that add or remove phosphate groups.
            </li>
            <li>
              <strong>Amplification:</strong> A small signal can trigger a large cellular response.
            </li>
          </ul>
          <p>
            Signal transduction is essential for coordinating hormone responses, growth, and immune functions.
          </p>
        </section>

        {/* Membrane Transport */}
        <section id="transport" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Membrane Transport &amp; Ion Channels 🚪
          </h2>
          <p className="mb-2">
            Cells maintain homeostasis by regulating molecule and ion movement:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Passive Transport:</strong> Movement down a concentration gradient (e.g., diffusion).
            </li>
            <li>
              <strong>Active Transport:</strong> Movement against a gradient, requiring energy.
            </li>
            <li>
              <strong>Ion Channels:</strong> Proteins that allow specific ions to pass through the membrane.
            </li>
            <li>
              <strong>Endocytosis &amp; Exocytosis:</strong> Processes for engulfing or expelling materials.
            </li>
          </ul>
          <p>
            These mechanisms are vital for nutrient uptake and waste removal.
          </p>
        </section>

        {/* Amino Acid & Protein Metabolism */}
        <section id="amino" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Amino Acid &amp; Protein Metabolism 🍖
          </h2>
          <p className="mb-2">
            Proteins are made of amino acids and play roles in nearly every cellular function. Topics include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Protein Synthesis:</strong> Ribosomes translate mRNA into polypeptides.
            </li>
            <li>
              <strong>Deamination:</strong> Removal of an amino group, often resulting in urea formation.
            </li>
            <li>
              <strong>Glucogenic &amp; Ketogenic Amino Acids:</strong> Some amino acids can be converted into glucose, others into ketone bodies.
            </li>
          </ul>
          <p>
            These processes enable the cell to repurpose amino acids for energy or new protein synthesis.
          </p>
        </section>

        {/* Nucleic Acid Metabolism */}
        <section id="nucleic" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Nucleic Acid Metabolism &amp; Genetic Code 🧬
          </h2>
          <p className="mb-2">
            DNA and RNA carry genetic information. Key processes include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>DNA Replication:</strong> Precise copying of DNA before cell division.
            </li>
            <li>
              <strong>Transcription:</strong> Synthesis of RNA from a DNA template.
            </li>
            <li>
              <strong>Translation:</strong> Ribosomes synthesize proteins from mRNA.
            </li>
            <li>
              <strong>Genetic Code:</strong> The rules for translating nucleotide sequences into amino acids.
            </li>
          </ul>
          <p>
            A strong understanding of these processes is essential for molecular biology.
          </p>
        </section>

        {/* FAQ & Glossary */}
        <section id="faq" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">FAQ &amp; Glossary 📖</h2>
          <p className="mb-2">
            Quick references for key terms and concepts:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>What is ΔG?</strong> <br />
              The change in free energy of a reaction. Negative ΔG means the reaction is spontaneous.
            </li>
            <li>
              <strong>Role of NADH?</strong> <br />
              An electron carrier that transfers electrons during redox reactions.
            </li>
            <li>
              <strong>What is allosteric regulation?</strong> <br />
              Modulation of enzyme activity via binding at a site other than the active site.
            </li>
            <li>
              <strong>Substrate-level phosphorylation?</strong> <br />
              Direct formation of ATP from ADP during a metabolic reaction.
            </li>
          </ul>
          <p>
            Refer back to this section as you encounter new terms during your studies.
          </p>
        </section>

        {/* Case Studies & Applications */}
        <section id="case-studies" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">Case Studies &amp; Applications 🔍</h2>
          <p className="mb-2">
            Real-world examples show how biochemistry impacts health and disease:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Mitochondrial Disorders:</strong> Defects in oxidative phosphorylation can lead to muscle and neurological issues.
            </li>
            <li>
              <strong>Metabolic Syndrome:</strong> A cluster of conditions resulting from metabolic dysregulation.
            </li>
            <li>
              <strong>Cancer Metabolism:</strong> Tumors often rely on glycolysis despite the presence of oxygen (the Warburg effect).
            </li>
            <li>
              <strong>Diabetes:</strong> Disruptions in insulin signaling affect glucose uptake and metabolism.
            </li>
          </ul>
          <p>
            Exploring these cases helps connect biochemical concepts to clinical scenarios.
          </p>
        </section>

        {/* Endergonic/Exergonic & Spontaneity */}
        <section id="energetics" className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Endergonic vs. Exergonic Reactions &amp; Spontaneity ⚖️
          </h2>
          <p className="mb-2">
            Understanding the energy profile of reactions is key to predicting their behavior:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Exergonic Reactions:</strong> Release energy (ΔG &lt; 0) and are spontaneous. Think of these as “energy-releasing” processes.
            </li>
            <li>
              <strong>Endergonic Reactions:</strong> Require an input of energy (ΔG &gt; 0) and are non-spontaneous on their own.
            </li>
            <li>
              <strong>Spontaneity:</strong> Determined by the sign of ΔG. Negative ΔG indicates a reaction that can occur without added energy.
            </li>
            <li>
              Often, cells couple endergonic reactions to exergonic ones (for example, ATP hydrolysis) so that the overall process becomes spontaneous.
            </li>
          </ul>
          <p>
            Always check ΔG and the reaction’s context to decide if a reaction is energetically favorable.
          </p>
        </section>

        {/* Midterm Question Strategies */}
        <section id="midterm" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Midterm Question Strategies 🎯
          </h2>
          <p className="mb-2">
            Here are some tips to help you approach practice midterm questions effectively:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Read Carefully:</strong> Ensure you understand every part of the question. Look for keywords like "oxidation," "reduction," or "phosphorylation."
            </li>
            <li>
              <strong>Break It Down:</strong> Identify the underlying concept (e.g., redox balance, energy coupling) before choosing your answer.
            </li>
            <li>
              <strong>Compare Reactions:</strong> When given reaction tables, compare ΔE°&apos; and ΔG°&apos; values to predict spontaneity.
            </li>
            <li>
              <strong>Use Diagrams:</strong> Sketch metabolic pathways or reaction schemes. Visual aids help you understand the flow of electrons and energy.
            </li>
            <li>
              <strong>Eliminate Options:</strong> For multiple-choice questions, rule out answers that conflict with key concepts.
            </li>
          </ul>
          <p>
            With practice, you&apos;ll learn to quickly identify the critical details that differentiate similar answer choices.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 bg-gray-200 dark:bg-gray-800 text-center">
        <p>
          &copy; {new Date().getFullYear()} Yahli made this &amp; is positive he will still fail this test.
        </p>
        <p className="text-sm mt-2">
          Good luck, and happy studying! 🚀
        </p>
      </footer>
    </div>
  );
}
