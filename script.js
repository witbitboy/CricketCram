/* ══════════════════════════════════════════════════════════
   Cricket-Cram — script.js
   Application logic, question data, auth, and drawer logic
   ══════════════════════════════════════════════════════════ */

/* ── SECTION A: QUESTION DATA & APP LOGIC ────────────────── */
/* ═══════════════════════════════════════════════════════════
   SECTION A — QUESTION DATA
   ═══════════════════════════════════════════════════════════ */

/* ── AP WORLD HISTORY MCQ ────────────────────────────────── */
/* 55 questions across Periods 1-4, matching real AP World exam */
const WORLD_SETS = [

  /* ── Period 1 (1200-1450): Mongol Empire ── */
  { period:"Period 1 (1200\u20131450)", set:"Mongol Empire",
    stim:"'They came, they uprooted, they burned, they slew, they plundered, and they departed.' \u2014 Ibn al-Athir, Arab chronicler, c. 1220. The Mongols under Genghis Khan and his successors created the largest contiguous land empire in history by 1279.",
    qs:[
      {q:"Ibn al-Athir's account best illustrates which historical pattern?",ch:["Pastoral nomads periodically disrupted and transformed sedentary civilizations","Islamic scholars generally welcomed foreign rulers who converted to Islam","Trade networks collapsed permanently following Mongol conquests","The Mongols primarily targeted Christian states in their campaigns"],ans:0},
      {q:"Which of the following was a long-term consequence of Mongol rule across Eurasia?",ch:["Permanent destruction of all overland trade routes across Central Asia","Facilitation of cross-continental exchange of goods, diseases, and ideas","Widespread forced conversion of conquered peoples to Islam","Unification of all Eurasian peoples under a single religious tradition"],ans:1},
      {q:"The Pax Mongolica is BEST described as:",ch:["A peace treaty signed between the Mongol khanates and China","A period of relative stability and trade across Mongol-controlled Eurasia","A religious truce between Islam and Buddhism within the Mongol Empire","A diplomatic alliance between the Mongols and European crusader states"],ans:1},
      {q:"The Mongol destruction of Baghdad in 1258 most directly ended which political institution?",ch:["The Byzantine Empire","The Abbasid Caliphate","The Seljuk Sultanate","The Mamluk Sultanate of Egypt"],ans:1},
      {q:"Which of the following best explains how the Mongols were able to conquer such vast territories?",ch:["Superior iron-working technology that produced better weapons than any opponents","Skilled cavalry tactics, psychological terror, and sophisticated siege warfare adopted from conquered peoples","Religious zeal inspired by a new monotheistic faith","Alliances with European crusader states that opened two-front wars"],ans:1},
    ]},

  /* ── Period 1 (1200-1450): Indian Ocean & Silk Roads ── */
  { period:"Period 1 (1200\u20131450)", set:"Indian Ocean & Silk Road trade",
    stim:"Map showing Indian Ocean trade routes c. 1300, connecting East Africa, Arabia, South Asia, and Southeast Asia. Silk Road routes connect China through Central Asia to the Middle East and Europe. Goods exchanged include: gold, ivory, silk, spices, cotton textiles, and porcelain.",
    qs:[
      {q:"The Indian Ocean trade network was primarily enabled by which environmental factor?",ch:["European colonial navies controlling sea lanes","Monsoon winds that enabled predictable seasonal voyages","Chinese naval superiority enforced by warships","Ottoman control of key maritime chokepoints"],ans:1},
      {q:"Swahili city-states along East Africa most directly resulted from which of the following?",ch:["Arab and Persian merchants intermarrying with Bantu-speaking coastal populations, creating a hybrid culture","Portuguese conquest and administration of the interior kingdoms","The spread of Buddhism from India along the coast","Chinese tributary missions establishing permanent colonies"],ans:0},
      {q:"Which best explains why Islam spread widely across the Indian Ocean network by 1400?",ch:["Arab caliphate armies forced conversion among coastal populations through military conquest","Muslim merchants served as cultural intermediaries, and rulers converted for commercial advantages","The Pope commissioned missionaries to follow trade routes and counter Islam","Islamic rulers offered tax exemptions to any merchant who converted"],ans:1},
      {q:"Ibn Battuta's 14th-century travels across the Islamic world are BEST used as evidence for which historical argument?",ch:["The decline of overland trade routes after the Black Death","The extent of a shared Islamic commercial and cultural network spanning three continents","The political unification of Muslim-majority societies under a single caliphate","The dominance of Arab merchants over all Indian Ocean commerce"],ans:1},
      {q:"The Mali Empire's control of trans-Saharan trade routes contributed most directly to which development?",ch:["The spread of Christianity throughout West Africa","The accumulation of enormous wealth, demonstrated by Mansa Musa's 1324 pilgrimage to Mecca","The military conquest of the North African coast","The decline of long-distance trade in Sub-Saharan Africa"],ans:1},
    ]},

  /* ── Period 1 (1200-1450): State-Building ── */
  { period:"Period 1 (1200\u20131450)", set:"State-building & political systems",
    stim:"In the 13th and 14th centuries, multiple political systems competed across Eurasia: the Mongol khanates, the Delhi Sultanate in South Asia, the Mali Empire in West Africa, and the Byzantine Empire in the eastern Mediterranean.",
    qs:[
      {q:"Which of the following best describes how the Yuan Dynasty (Mongol China) governed its Chinese subjects?",ch:["The Mongols fully adopted Chinese administrative traditions and Confucian governance","The Mongols maintained a distinct ruling class, excluded Chinese from top positions, and kept Chinese administrative structures for local governance","The Mongols abolished all Chinese traditions and replaced them with Islamic law","The Mongols united China and Japan under a single administrative system"],ans:1},
      {q:"The Delhi Sultanate is significant in South Asian history primarily because it:",ch:["Was the first state to unify the entire Indian subcontinent","Introduced Islam as a significant political and cultural force in South Asia","Established Hinduism as the official state religion across the subcontinent","Drove out all Buddhist communities from the Indian subcontinent by force"],ans:1},
      {q:"Which of the following best describes the role of the Byzantine Empire in the period 1200\u20131450?",ch:["It was expanding rapidly, conquering new territory in the Middle East","It was in significant decline, having lost much territory to the Crusaders and Seljuk Turks, but remained a center of Orthodox Christianity","It was the dominant economic power in the Mediterranean, controlling most trade","It had recently converted to Islam and was allying with the Ottoman Turks"],ans:1},
      {q:"The Black Death (1347\u20131353) most directly affected European and Middle Eastern societies by:",ch:["Permanently ending long-distance trade across Eurasia","Killing an estimated one-third of Europe's population, causing severe labor shortages and social disruption","Eliminating the Mongol khanates as a political force","Strengthening the authority of the Catholic Church as people turned to religion"],ans:1},
    ]},

  /* ── Period 2 (1450-1750): European Expansion ── */
  { period:"Period 2 (1450\u20131750)", set:"European maritime expansion & Columbian Exchange",
    stim:"'The discovery of America, and that of a passage to the East Indies by the Cape of Good Hope, are the two greatest and most important events recorded in the history of mankind.' \u2014 Adam Smith, The Wealth of Nations, 1776",
    qs:[
      {q:"Adam Smith's statement reflects which broader historical development?",ch:["The rise of Atlantic trade networks and European global commerce","The decline of Asian economies relative to European ones","Religious transformations brought by Jesuit missionary activity","The abolition of mercantilist economic policies in Britain"],ans:0},
      {q:"Which best illustrates a demographic consequence of the Columbian Exchange on the Americas?",ch:["Rapid population growth among indigenous peoples due to new food crops from Europe","A catastrophic population collapse of indigenous peoples due to epidemic diseases like smallpox","The migration of millions of Europeans who replaced indigenous populations within decades","An increase in indigenous political power due to access to European weapons"],ans:1},
      {q:"A historian critiquing Adam Smith's framing of European expansion would most likely argue it ignores which of the following?",ch:["The devastating impact on indigenous American populations and enslaved Africans","The economic benefits for Spain and Portugal","The role of wind patterns and ocean currents in enabling Atlantic crossings","The development of joint-stock companies as financial innovations"],ans:0},
      {q:"The encomienda system established by Spain in the Americas primarily functioned as:",ch:["A system of direct royal administration replacing indigenous governance","A grant of indigenous labor to Spanish colonists, who were supposed to Christianize workers in exchange","A trade network for exchanging European manufactured goods for American silver","A system of land grants to missionaries to establish self-sufficient religious communities"],ans:1},
      {q:"The Portuguese development of the caravel and use of lateen sails contributed most directly to which development?",ch:["The Protestant Reformation by undermining Church authority over navigation","European ability to sail against the wind and explore the African coast and Atlantic","The Ottoman Empire's dominance of Mediterranean trade routes","The decline of Chinese naval power in the Indian Ocean"],ans:1},
      {q:"Which of the following best describes the Columbian Exchange's long-term impact on global population?",ch:["It decreased global population due to disease and warfare","It had no net effect since diseases moved in both directions","New World crops like maize and potatoes contributed to long-term population growth in Europe, Africa, and Asia","It primarily benefited the Americas by introducing more productive livestock"],ans:2},
    ]},

  /* ── Period 2 (1450-1750): Gunpowder Empires & Trade ── */
  { period:"Period 2 (1450\u20131750)", set:"Gunpowder empires & global trade networks",
    stim:"Between 1450 and 1750, new land-based empires in Asia and the Middle East expanded using gunpowder weapons: the Ottoman, Safavid, and Mughal empires. Simultaneously, European powers established new maritime trade networks connecting the Atlantic, Pacific, and Indian Oceans.",
    qs:[
      {q:"The Ottoman, Safavid, and Mughal empires are grouped together as 'gunpowder empires' primarily because:",ch:["All three shared the same religion (Sunni Islam) and legal system","All three used gunpowder weapons (firearms and artillery) as a key factor in military expansion and state consolidation","All three were founded by Turkic-speaking peoples and shared a common culture","All three were allied against European colonial powers in the Indian Ocean"],ans:1},
      {q:"The Atlantic slave trade between 1500 and 1800 most directly resulted in which demographic change?",ch:["A rapid increase in the population of West Africa due to new food crops","The forced migration of approximately 12 million Africans to the Americas","The voluntary migration of free African merchants who settled in Caribbean port cities","A significant decrease in population in North Africa due to Ottoman slave raids"],ans:1},
      {q:"Which of the following best explains the establishment of the Manila Galleon trade route (1565\u20131815)?",ch:["Spanish desire to spread Catholicism to China and Japan","The exchange of American silver for Chinese luxury goods such as silk and porcelain, connecting the Atlantic and Pacific economies","Portuguese control of the Strait of Malacca, forcing Spain to find an alternative route to Asia","The need to transport enslaved Filipinos to work on silver mines in Peru"],ans:1},
      {q:"Mercantilism, as practiced by European states in this period, was based on the idea that:",ch:["Free trade between nations maximized global wealth for all participants","Wealth was unlimited and all nations could prosper simultaneously through trade","A nation's wealth was measured by its gold and silver reserves, and colonies should supply raw materials to the mother country","Individual entrepreneurs, not the state, should direct economic activity"],ans:2},
      {q:"The joint-stock company (such as the Dutch VOC or English East India Company) was significant primarily because it:",ch:["Gave individual merchants monopoly control over entire trade routes","Allowed investors to pool capital and share risk for large overseas ventures, reducing the financial barrier to participation","Replaced the role of monarchs in sponsoring exploration and colonization","Was the primary institution through which Christianity spread in Asia"],ans:1},
    ]},

  /* ── Period 3 (1750-1900): Revolutions & Industrialization ── */
  { period:"Period 3 (1750\u20131900)", set:"Revolutions & industrialization",
    stim:"British coal output (millions of tons): 1750: 5 \u00b7 1800: 15 \u00b7 1850: 50 \u00b7 1900: 225. 'The factory system created new classes \u2014 the capitalist and the proletarian.' \u2014 Karl Marx, 1848. 'Liberty, equality, fraternity!' \u2014 French Republic, 1789.",
    qs:[
      {q:"The coal production data most directly reflects which historical development?",ch:["The steam engine's application to mining and manufacturing, creating exponential demand for fuel","Expansion of Atlantic trade requiring ships to carry more ballast","Government subsidies for fossil fuel extraction introduced under Napoleon","Agricultural decline forcing rural workers into coal mines"],ans:0},
      {q:"Which best explains why Britain industrialized before other European nations?",ch:["Coal and iron deposits, extensive colonial markets, navigable rivers, and an entrepreneurial culture protected by property rights","A larger population providing cheap urban labor","Earlier democratic reforms enabling entrepreneurship by the middle class","Superior military technology that prevented French competition"],ans:0},
      {q:"The factory system most directly changed which pre-existing social pattern?",ch:["Gender and family roles, as women and children entered wage labor outside the home","Religious practice, as factory owners promoted church attendance to instill discipline","Political participation, as workers immediately received the right to vote","Agricultural productivity, as new fertilizers became available through industrial chemistry"],ans:0},
      {q:"The French Revolution's ideals of liberty and equality most directly inspired which of the following?",ch:["The Haitian Revolution (1791\u20131804), in which enslaved people overthrew French colonial rule","The Industrial Revolution in Britain by establishing free market principles","The Ottoman Empire's modernization reforms (Tanzimat) in the 1830s","The unification of Germany and Italy under conservative nationalist governments"],ans:0},
      {q:"The abolition of the Atlantic slave trade and then slavery itself in the 19th century was MOST directly caused by:",ch:["A sudden change in European moral values with no economic basis","A combination of enslaved people's resistance, abolitionist movements, and changing economic interests after industrialization","Military force by the United States Navy enforcing international treaties","The collapse of plantation agriculture due to soil exhaustion in the Caribbean"],ans:1},
      {q:"Which of the following best describes the condition of the working class in early industrial Britain, as documented by sources like Engels' 1845 report?",ch:["Workers enjoyed higher wages and better living standards than agricultural laborers","Urban workers faced dangerous working conditions, long hours, low wages, and crowded, unsanitary housing","Factory owners provided adequate housing and medical care as a form of paternalism","Child labor was prohibited and workers had legal protections from the start of industrialization"],ans:1},
    ]},

  /* ── Period 3 (1750-1900): Imperialism & Nationalism ── */
  { period:"Period 3 (1750\u20131900)", set:"Imperialism, nationalism & resistance",
    stim:"By 1900, European powers controlled approximately 84% of the globe's land surface. The Berlin Conference of 1884\u20131885 divided Africa among European colonial powers with little regard for existing political boundaries or ethnic groups. Nationalist movements were also reshaping Europe, leading to the unifications of Italy (1861) and Germany (1871).",
    qs:[
      {q:"The Berlin Conference (1884\u20131885) is significant primarily because it:",ch:["Formally ended the Atlantic slave trade through international treaty","Established the rules by which European powers would divide and colonize Africa, excluding African representatives entirely","Created the first international organizations to protect human rights in colonized territories","Resolved conflicts between Britain and France over control of Egypt and the Suez Canal"],ans:1},
      {q:"Which of the following best represents a form of resistance to European imperialism in Africa during this period?",ch:["The formation of joint-stock companies by African merchants to compete with European firms","The Ethiopian victory over Italy at the Battle of Adwa (1896)","African rulers welcoming European missionaries as a source of military technology","The adoption of European legal systems as a form of cultural adaptation"],ans:1},
      {q:"Social Darwinism was used by European imperialists primarily to:",ch:["Argue that industrialization harmed the working class and must be regulated","Provide a pseudo-scientific justification for European racial hierarchy and the 'civilizing mission' of colonialism","Promote international cooperation between European and Asian states","Challenge the authority of the Catholic Church in colonized territories"],ans:1},
      {q:"The Meiji Restoration in Japan (1868) is BEST described as:",ch:["A violent popular revolution that overthrew the emperor and established a republic","A rapid program of industrialization and Westernization led by a new government to resist European imperialism through modernization","A conservative reaction that restored traditional samurai rule and rejected Western influence","A gradual process of democratization in which the Japanese parliament gained full sovereignty"],ans:1},
        {q:"Which of the following best explains why nationalism contributed to political change in Europe between 1750 and 1900?",ch:["It led to the formation of a single unified European state to resist Ottoman expansion","Shared cultural, linguistic, and ethnic identities motivated movements to create or expand nation-states, contributing to the unification of Germany and Italy and the decline of multiethnic empires","It caused European nations to abandon colonial ambitions and focus on internal development","It promoted cosmopolitanism and the rejection of borders among European intellectuals"],ans:1},
    ]},

  /* ── Period 4 (1900-present): World Wars & Globalization ── */
  { period:"Period 4 (1900\u2013present)", set:"World Wars, decolonization & Cold War",
    stim:"'We face neither East nor West; we face forward.' \u2014 Kwame Nkrumah, Ghana, 1957. 'The colonial system is the greatest threat to world peace.' \u2014 Jawaharlal Nehru, Bandung Conference, 1955. By 1975, the vast majority of former European colonies had achieved independence.",
    qs:[
      {q:"Nkrumah's statement most directly reflects which geopolitical movement?",ch:["Non-Alignment, rejecting both American and Soviet spheres of influence during the Cold War","Pan-Africanism's demand for immediate continental military unification","Socialist internationalism aligned fully with the Soviet Union","Capitalist modernization theory advocated by the United States"],ans:0},
      {q:"Which best explains why decolonization accelerated dramatically after 1945?",ch:["Weakening of European powers after WWII, moral discrediting of racial hierarchy by the Holocaust, and growing nationalist movements","U.S. military intervention on behalf of colonial subjects in Asia and Africa","The Soviet Union's successful global communist revolution inspiring colonial peoples","Economic collapse of all European colonial powers that made empire financially impossible"],ans:0},
      {q:"The Cold War competition between the United States and Soviet Union most directly shaped decolonization by:",ch:["Preventing newly independent nations from joining the United Nations","Leading both superpowers to compete for influence in newly independent states, providing aid, military support, and ideological models","Unifying Western Europe and its former colonies in a single anti-communist alliance","Causing the United States to support independence movements to weaken European allies"],ans:1},
      {q:"The Green Revolution of the 1960s\u20131970s most directly affected developing nations by:",ch:["Introducing democratic governance to formerly authoritarian states","Dramatically increasing agricultural yields through new crop varieties and fertilizers, reducing famine but increasing dependence on chemical inputs","Eliminating economic inequality between the Global North and Global South","Ending traditional subsistence farming in Asia and Africa"],ans:1},
      {q:"Which of the following best explains the rapid economic growth of East Asian 'tiger economies' (South Korea, Taiwan, Singapore, Hong Kong) in the late 20th century?",ch:["Discovery of vast oil reserves that funded industrialization","State-directed investment in export manufacturing, education, and infrastructure, combined with access to U.S. markets during the Cold War","Rejection of global trade in favor of economic self-sufficiency","Foreign aid from the Soviet Union that provided industrial technology"],ans:1},
      {q:"The creation of the United Nations (1945) and Bretton Woods institutions (World Bank, IMF) most directly reflected which post-WWII goal?",ch:["Establishing a world government to replace sovereign nation-states","Creating international frameworks for collective security and economic cooperation to prevent another global war","Punishing Axis powers by imposing permanent reparations and occupation","Dividing the world into American and Soviet spheres of influence"],ans:1},
    ]},
];

/* ── AP BIOLOGY MCQ ──────────────────────────────────────── */
/* 60 questions matching the real AP Bio exam (College Board)  */
const BIO_SETS = [
  /* ── Unit 1: Chemistry of Life ── */
  { period:"Unit 1", set:"Chemistry of life",
    stim:"A researcher adds a drop of iodine solution (which turns dark blue-black in the presence of starch) to four unknown substances: A turns dark blue-black; B remains orange-brown; C turns light orange; D turns dark blue-black.",
    qs:[
      {q:"Based on the iodine test, which substances most likely contain starch?",ch:["B and C only","A and D only","A, B, and D","All four substances"],ans:1},
      {q:"Which property of water best explains its role as a solvent in living systems?",ch:["Its high specific heat capacity","Its polarity and ability to form hydrogen bonds","Its high heat of vaporization","Its cohesion and surface tension"],ans:1},
      {q:"A peptide bond forms between which two functional groups of amino acids?",ch:["Two amino groups","An amino group and a carboxyl group","Two carboxyl groups","An amino group and an R group"],ans:1},
      {q:"Which level of protein structure is directly determined by the sequence of amino acids?",ch:["Primary structure","Secondary structure","Tertiary structure","Quaternary structure"],ans:0},
      {q:"Saturated fatty acids differ from unsaturated fatty acids in that saturated fatty acids:",ch:["Contain fewer carbon atoms","Have one or more double bonds in their hydrocarbon chain","Have no double bonds in their hydrocarbon chain and pack tightly together","Are always found in plant oils"],ans:2},
    ]},

  /* ── Unit 2: Cell Structure & Function ── */
  { period:"Unit 2", set:"Cell structure & membranes",
    stim:"Diagram of a eukaryotic cell membrane showing a phospholipid bilayer with embedded integral proteins, peripheral proteins, cholesterol molecules, and glycoproteins. The cell is at 37°C.",
    qs:[
      {q:"Which component of the cell membrane is primarily responsible for maintaining fluidity at varying temperatures?",ch:["Phospholipid fatty acid tails","Cholesterol molecules embedded in the bilayer","Integral membrane proteins","Carbohydrate chains on glycoproteins"],ans:1},
      {q:"A cell is placed in a hypertonic solution. Which of the following best describes the direction of net water movement?",ch:["Water moves into the cell by osmosis","Water moves out of the cell by osmosis","Water moves in both directions equally","No net movement of water occurs"],ans:1},
      {q:"Which process requires NO energy expenditure by the cell?",ch:["Active transport of Na\u207a against a concentration gradient","Endocytosis of large particles","Facilitated diffusion of glucose via carrier proteins","Sodium-potassium pump operation"],ans:2},
      {q:"Which organelle is primarily responsible for producing ATP through aerobic respiration in eukaryotes?",ch:["Ribosome","Endoplasmic reticulum","Mitochondrion","Golgi apparatus"],ans:2},
      {q:"A scientist treats cells with a drug that disrupts the proton gradient across the inner mitochondrial membrane. Which process is MOST directly affected?",ch:["Glycolysis","The Krebs cycle","Oxidative phosphorylation (ATP synthase)","Pyruvate oxidation"],ans:2},
      {q:"The sodium-potassium pump moves 3 Na\u207a out and 2 K\u207a in per ATP. This process is an example of:",ch:["Facilitated diffusion","Primary active transport","Secondary active transport","Osmosis"],ans:1},
    ]},

  /* ── Unit 3: Cellular Energetics ── */
  { period:"Unit 3", set:"Cellular energetics",
    stim:"Graph showing rate of photosynthesis vs. CO\u2082 concentration at 10\u00b0C and 25\u00b0C. Both curves plateau, but the 25\u00b0C curve plateaus at a higher rate.",
    qs:[
      {q:"The plateau in the photosynthesis curve most likely indicates that:",ch:["CO\u2082 concentration is no longer limiting; another factor such as light is now limiting","Temperature is too high, denaturing enzymes","The chloroplasts have exhausted their chlorophyll supply","CO\u2082 is toxic at high concentrations"],ans:0},
      {q:"Why does the 25\u00b0C curve plateau at a higher rate than the 10\u00b0C curve?",ch:["Higher temperature increases enzyme activity, allowing faster Calvin cycle reactions","CO\u2082 is more soluble at higher temperatures","Light reactions occur faster at higher temperatures","Stomata are more open at 25\u00b0C"],ans:0},
      {q:"In cellular respiration, which stage produces the most ATP per glucose molecule?",ch:["Glycolysis","Pyruvate oxidation","The Krebs cycle","Oxidative phosphorylation (electron transport chain)"],ans:3},
      {q:"Where does glycolysis occur in a eukaryotic cell?",ch:["Mitochondrial matrix","Inner mitochondrial membrane","Cytoplasm","Nucleus"],ans:2},
      {q:"Which molecule directly donates electrons to the electron transport chain?",ch:["ATP","NADH","Pyruvate","Glucose"],ans:1},
      {q:"During the light-dependent reactions, which molecule is split to release oxygen?",ch:["CO\u2082","NADPH","Glucose","H\u2082O"],ans:3},
      {q:"The Calvin cycle uses the products of the light reactions to fix carbon dioxide. Which two molecules from the light reactions are required?",ch:["O\u2082 and glucose","NADPH and ATP","ADP and P\u1d35","CO\u2082 and H\u2082O"],ans:1},
      {q:"Under anaerobic conditions in animal cells, pyruvate is converted to lactate. What is the PRIMARY purpose of this reaction?",ch:["To produce additional ATP","To regenerate NAD\u207a so glycolysis can continue","To store energy for later use","To remove toxic CO\u2082"],ans:1},
    ]},

  /* ── Unit 4: Cell Communication & Cell Cycle ── */
  { period:"Unit 4", set:"Cell communication & cell cycle",
    stim:"A diagram showing a signaling pathway: a ligand binds a receptor tyrosine kinase, which autophosphorylates, activating a relay protein that activates a transcription factor, ultimately increasing gene expression.",
    qs:[
      {q:"In the signaling pathway shown, the transcription factor represents which stage of signal transduction?",ch:["Signal reception","Signal transduction","Cellular response","Signal amplification only"],ans:2},
      {q:"Which of the following is an example of a G protein-coupled receptor pathway?",ch:["Insulin binding its receptor and activating a tyrosine kinase","Epinephrine binding its receptor and activating adenylyl cyclase to produce cAMP","A steroid hormone binding an intracellular receptor","A neurotransmitter opening a ligand-gated ion channel"],ans:1},
      {q:"A cell in G\u2081 of the cell cycle receives a signal indicating DNA damage. The most likely consequence is:",ch:["The cell immediately enters mitosis","Cell cycle arrest at the G\u2081 checkpoint via p53 activation","The cell undergoes meiosis","DNA replication begins without delay"],ans:1},
      {q:"Which phase of mitosis involves chromosomes aligning at the cell\u2019s metaphase plate?",ch:["Prophase","Metaphase","Anaphase","Telophase"],ans:1},
      {q:"Apoptosis is BEST described as:",ch:["Uncontrolled cell proliferation leading to tumor formation","Programmed cell death involving caspase activation and orderly cell dismantling","Cell death caused by external physical damage","Cell division in response to growth factors"],ans:1},
    ]},

  /* ── Unit 5: Heredity ── */
  { period:"Unit 5", set:"Heredity & genetics",
    stim:"Pedigree showing an autosomal recessive condition. Two unaffected parents (generation II) have three children: one affected son (III-1) and two unaffected daughters (III-2, III-3).",
    qs:[
      {q:"What are the most likely genotypes of the two unaffected parents in generation II?",ch:["Both homozygous dominant (AA \u00d7 AA)","Both heterozygous carriers (Aa \u00d7 Aa)","One homozygous dominant and one heterozygous (AA \u00d7 Aa)","One carrier and one affected (Aa \u00d7 aa)"],ans:1},
      {q:"What is the probability that the next child of these parents will be affected?",ch:["0%","25%","50%","75%"],ans:1},
      {q:"A plant with genotype AaBb is self-fertilized. Assuming independent assortment, what fraction of offspring will be AAbb?",ch:["1/16","3/16","1/4","9/16"],ans:0},
      {q:"In a test cross, a purple-flowered plant (dominant phenotype) is crossed with a white-flowered plant. All offspring are purple-flowered. What does this indicate about the purple-flowered parent?",ch:["It is heterozygous (Pp)","It is homozygous dominant (PP)","It is homozygous recessive (pp)","The trait is incompletely dominant"],ans:1},
      {q:"Which of the following best describes linked genes?",ch:["Genes located on separate chromosomes that assort independently","Genes on the same chromosome that tend to be inherited together","Genes that always show codominance","Genes that produce the same phenotype in both sexes"],ans:1},
      {q:"The ABO blood type gene has three alleles: I\u1d2c, I\u1d2e, and i. A person with genotype I\u1d2cI\u1d2e has which blood type?",ch:["Type A","Type B","Type AB","Type O"],ans:2},
    ]},

  /* ── Unit 6: Gene Expression & Regulation ── */
  { period:"Unit 6", set:"Gene expression & regulation",
    stim:"A researcher finds that a bacterium only produces \u03b2-galactosidase (an enzyme that breaks down lactose) when lactose is present and glucose is absent. She is studying the lac operon.",
    qs:[
      {q:"In the lac operon, when glucose is absent and lactose is present, the operon is:",ch:["Repressed because the repressor protein is active","Induced because lactose (as allolactose) inactivates the repressor","Transcribed at a basal rate regardless of conditions","Silenced by DNA methylation"],ans:1},
      {q:"During transcription, which of the following serves as the template strand?",ch:["The coding (non-template) strand of DNA","The antisense (template) strand of DNA","mRNA produced during translation","The tRNA anticodon sequence"],ans:1},
      {q:"Which type of RNA carries the genetic message from DNA to the ribosome?",ch:["tRNA","rRNA","mRNA","snRNA"],ans:2},
      {q:"A point mutation changes a codon from UUU (Phe) to UUC. The result is still Phe. This type of mutation is called:",ch:["Missense","Nonsense","Silent (synonymous)","Frameshift"],ans:2},
      {q:"MicroRNAs (miRNAs) regulate gene expression primarily by:",ch:["Directly methylating promoter regions","Binding complementary sequences in mRNAs and promoting their degradation or blocking translation","Acetylating histone proteins to open chromatin","Encoding repressor proteins that bind operators"],ans:1},
      {q:"Which process converts the information in mRNA into a protein sequence?",ch:["Transcription","Replication","Translation","Transduction"],ans:2},
      {q:"A deletion of one nucleotide in the coding sequence of a gene would most likely cause a:",ch:["Silent mutation","Missense mutation","Frameshift mutation","Nonsense mutation only if it creates a stop codon"],ans:2},
    ]},

  /* ── Unit 7: Natural Selection ── */
  { period:"Unit 7", set:"Natural selection & evolution",
    stim:"Data: Mean beak depth of medium ground finches in the Gal\u00e1pagos before drought: 9.2 mm. After drought (which eliminated small, soft seeds, leaving only large, hard seeds): 10.1 mm. Sample size: 300+ birds.",
    qs:[
      {q:"The change in mean beak depth after the drought BEST illustrates which evolutionary mechanism?",ch:["Genetic drift in a small isolated population","Natural selection favoring individuals with traits suited to changed conditions","Mutation introducing new alleles into the population","Gene flow from a neighboring island population"],ans:1},
      {q:"Which of the following is NOT required for natural selection to occur?",ch:["Variation in a heritable trait exists in the population","Some variants leave more offspring than others","The trait is passed from parent to offspring","Mutations occur at a high rate every generation"],ans:3},
      {q:"Genetic drift is most significant in which scenario?",ch:["A large, diverse population in a stable environment","A small, isolated population following a bottleneck event","A population with high gene flow from neighboring populations","A population under strong directional selection"],ans:1},
      {q:"Two species of birds have similar-looking wings, but their common ancestor was a flightless bird. The wings evolved independently. This is an example of:",ch:["Homologous structures","Analogous structures (convergent evolution)","Vestigial structures","Genetic drift"],ans:1},
      {q:"Which condition is NOT required for Hardy-Weinberg equilibrium?",ch:["Large population size","Random mating","No gene flow between populations","Strong directional selection acting on the population"],ans:3},
      {q:"A population of beetles lives on dark soil. Birds preferentially eat lighter-colored beetles. Over many generations, the beetle population becomes darker. This is an example of:",ch:["Stabilizing selection","Disruptive selection","Directional selection","Sexual selection"],ans:2},
    ]},

  /* ── Unit 8: Ecology ── */
  { period:"Unit 8", set:"Ecology",
    stim:"Data from a study of an oak forest: Producers fix 20,000 kcal/m\u00b2/yr. Primary consumers store 2,000 kcal/m\u00b2/yr. Secondary consumers store 200 kcal/m\u00b2/yr. Tertiary consumers store 20 kcal/m\u00b2/yr.",
    qs:[
      {q:"What is the approximate ecological efficiency between the producers and primary consumers in this forest?",ch:["1%","10%","50%","100%"],ans:1},
      {q:"Based on the data, which level supports the largest biomass?",ch:["Tertiary consumers","Secondary consumers","Primary consumers","Producers"],ans:3},
      {q:"Which of the following BEST describes the relationship between nitrogen-fixing bacteria in root nodules and legume plants?",ch:["Parasitism","Commensalism","Mutualism","Competition"],ans:2},
      {q:"A keystone species is BEST defined as a species that:",ch:["Has the largest biomass in its ecosystem","Has a disproportionately large effect on its ecosystem relative to its abundance","Is at the top of the food chain","Is the most abundant species in a community"],ans:1},
      {q:"Which of the following is an example of primary succession?",ch:["Forest re-establishing after a wildfire that left soil intact","Plants colonizing bare rock exposed by a retreating glacier","A field returning to forest after farmland is abandoned","Shrubs recolonizing a drained wetland"],ans:1},
      {q:"The global carbon cycle is most directly disrupted by burning fossil fuels because it:",ch:["Increases the rate of photosynthesis globally","Returns ancient sequestered carbon to the atmosphere as CO\u2082","Reduces decomposition rates in the soil","Increases the rate of nitrogen fixation"],ans:1},
      {q:"Which of the following BEST describes logistic population growth?",ch:["Exponential growth that continues indefinitely","Growth that slows as population density approaches the carrying capacity (K)","Growth entirely independent of population density","Growth that oscillates indefinitely above and below K"],ans:1},
      {q:"The competitive exclusion principle states that:",ch:["Two species can never coexist in the same biome","Two species competing for identical resources cannot coexist indefinitely; one will outcompete the other","Predators always drive prey to local extinction","Species diversity is determined solely by habitat size"],ans:1},
      {q:"Biogeochemical cycles describe how:",ch:["Energy flows through an ecosystem in one direction only","Chemical elements are cycled between living organisms and the abiotic environment","Populations grow and decline in response to limiting factors","Species diversity changes over geological time"],ans:1},
      {q:"In the nitrogen cycle, which organisms convert N\u2082 gas from the atmosphere into ammonia (NH\u2083)?",ch:["Nitrifying bacteria","Denitrifying bacteria","Nitrogen-fixing bacteria","Decomposers"],ans:2},
      {q:"Which of the following would MOST likely reduce the biodiversity of an ecosystem?",ch:["Introduction of a keystone predator","Increased habitat fragmentation and loss","Moderate disturbance such as small-scale fires","High plant species richness"],ans:1},
      {q:"Eutrophication of a lake caused by fertilizer runoff most directly leads to:",ch:["Increased biodiversity due to greater nutrient availability","Algal blooms followed by oxygen depletion (hypoxia) and death of aquatic organisms","Greater water clarity because algae filter out sediment","Increased populations of large predatory fish"],ans:1},
      {q:"Which of the following is a density-DEPENDENT limiting factor for population growth?",ch:["A severe drought affecting all individuals equally regardless of density","A volcanic eruption destroying habitat","Competition for food that intensifies as population density increases","A flood that destroys a fixed percentage of habitat"],ans:2},
      {q:"A pioneer species in primary succession on bare rock would MOST likely be a:",ch:["Large tree with deep roots","Grass that germinates rapidly in open soil","Lichen that can break down rock and accumulate organic matter","Decomposer that requires existing organic soil"],ans:2},
      {q:"The process by which two species each evolve in response to selection pressures imposed by the other is called:",ch:["Convergent evolution","Allopatric speciation","Coevolution","Adaptive radiation"],ans:2},
      {q:"An invasive species can disrupt an ecosystem MOST directly by:",ch:["Increasing genetic diversity of native species through interbreeding","Outcompeting native species for resources, altering community structure","Providing additional prey items that support native predators","Increasing the productivity of primary producers"],ans:1},
      {q:"The IUCN Red List classifies species as endangered when they face a:",ch:["Minor risk of extinction in the distant future","Very high risk of extinction in the wild in the near future","Moderate decline compared to historical population levels","Complete loss from captive breeding populations"],ans:1},
    ]},

  /* ── OFFICIAL CB RELEASED: 2019 AP Bio Exam — Natural Selection ── */
  { period:"Unit 7 — Official CB Released", set:"Natural selection (2019 AP Bio exam)",
    stim:"The following data describe beak depth (mm) in medium ground finches (Geospiza fortis) on Isla Daphne Major, Galápagos. Before a severe drought (1976): mean beak depth = 9.4 mm. After the drought (1978): mean beak depth = 10.2 mm. During the drought, large, hard seeds were the only remaining food source; smaller, softer seeds were depleted first.",
    qs:[
      {q:"Which of the following BEST explains the increase in mean beak depth observed between 1976 and 1978?",ch:["Individual birds with small beaks grew larger beaks in response to food availability during the drought","Birds with deeper beaks had higher survival rates because they could crack large, hard seeds, and survivors passed alleles for deeper beaks to offspring","Birds immigrated from a neighboring island where average beak depth was greater, raising the population mean","Random genetic drift shifted allele frequencies for beak depth in this small, isolated population"],ans:1},
      {q:"A researcher wants to confirm that the beak-depth shift was caused by natural selection rather than phenotypic plasticity. Which additional data set would BEST support the natural selection explanation?",ch:["Evidence that no birds migrated onto the island during 1976–1978","Data showing a statistically significant positive correlation between beak depth and survival during the drought, combined with evidence that beak depth is heritable","Measurements showing that living birds' beak depths changed during the drought period without reproduction","Proof that the drought was unusually severe compared to historical drought events on the island"],ans:1},
    ]},

  /* ── OFFICIAL CB RELEASED: 2012 AP Bio Exam — Cell Communication ── */
  { period:"Unit 4 — Official CB Released", set:"Cell communication (2012 AP Bio exam)",
    stim:"Cholera toxin from Vibrio cholerae enters intestinal epithelial cells and permanently activates a G protein by preventing GTP hydrolysis. The permanently active G protein continuously stimulates adenylyl cyclase to produce cAMP. Elevated intracellular cAMP keeps Cl⁻ channels open, causing massive secretion of Cl⁻ and water into the intestinal lumen — resulting in severe, life-threatening diarrhea.",
    qs:[
      {q:"Which step in the normal signal transduction pathway is MOST directly disrupted by the cholera toxin?",ch:["Binding of the extracellular signal molecule to the G protein–coupled receptor","Inactivation of the G protein following signal transduction, which normally terminates the signaling cascade","Activation of adenylyl cyclase by the G protein, which is blocked","Opening of chloride ion channels in response to elevated cAMP"],ans:1},
      {q:"A pharmaceutical researcher proposes blocking the cAMP phosphodiesterase enzyme (which normally degrades cAMP) as a cholera treatment. Which prediction is correct regarding this proposed treatment?",ch:["It would reduce cAMP levels in intestinal cells and thereby reduce Cl⁻ secretion and fluid loss","It would further elevate cAMP levels in intestinal cells, worsening Cl⁻ secretion and fluid loss","It would have no effect because phosphodiesterase is not involved in the cholera toxin pathway","It would activate the G protein, counteracting the effect of the cholera toxin"],ans:1},
    ]},
];
/* 100 questions matching the real AP Psychology exam           */
const PSYCH_SETS = [
  /* ── Unit 1: Scientific Foundations ── */
  { period:"Unit 1", set:"History & research methods",
    stim:"A researcher randomly assigns 80 participants to two groups. Group A receives a new study drug; Group B receives a placebo. Neither participants nor the researchers who administer the drug know who received which treatment (double-blind procedure). After 6 weeks, Group A shows a 30% improvement in memory scores vs. 10% for Group B.",
    qs:[
      {q:"The double-blind procedure is used primarily to control for which of the following?",ch:["Confirmation bias in the researcher's hypothesis","Demand characteristics and experimenter expectancy effects","Random sampling error","Confounding variables related to participant age"],ans:1},
      {q:"The improvement shown by the placebo group is BEST explained by:",ch:["The study drug leaking into Group B's treatment","The placebo effect — participants' expectations influencing their outcomes","Random assignment error","Regression to the mean in both groups"],ans:1},
      {q:"Which research method would be MOST appropriate for determining a cause-and-effect relationship?",ch:["Naturalistic observation","Case study","Controlled experiment","Correlational survey"],ans:2},
      {q:"A correlation of r = \u22120.85 between hours of social media use and GPA indicates:",ch:["Social media causes lower GPA","Social media has no relationship with GPA","A strong negative relationship between social media use and GPA","A weak positive relationship"],ans:2},
      {q:"A researcher studies one individual\u2019s brain injury in depth over many years. This is an example of a:",ch:["Survey","Case study","Experiment","Longitudinal study"],ans:1},
      {q:"The mode of a data set is the:",ch:["Middle score when data are ranked","Average of all scores","Most frequently occurring score","Range between highest and lowest scores"],ans:2},
      {q:"Which of the following BEST describes the concept of random assignment?",ch:["Every member of the population has an equal chance of being selected for the study","Participants are assigned to conditions by chance, reducing pre-existing differences between groups","Participants self-select into the group they prefer","The researcher assigns participants based on their baseline scores"],ans:1},
      {q:"An institutional review board (IRB) primarily ensures that research:",ch:["Is conducted efficiently and within budget","Protects the rights and welfare of human participants","Uses the most sophisticated statistical methods","Produces results that can be replicated"],ans:1},
      {q:"The Hawthorne effect refers to:",ch:["The tendency to conform to group norms","Changes in behavior because participants know they are being observed","A statistical artifact caused by small sample sizes","Improved performance following positive reinforcement"],ans:1},
      {q:"Standard deviation measures:",ch:["The middle value in a distribution","The most common value in a distribution","The spread or variability of scores around the mean","The difference between the highest and lowest scores"],ans:2},
    ]},

  /* ── Unit 2: Biological Bases of Behavior ── */
  { period:"Unit 2", set:"Biological bases of behavior",
    stim:"A PET scan study shows that a patient who suffered damage to the left frontal lobe (Broca\u2019s area) can understand speech but cannot produce fluent speech. Another patient with damage to the left temporal lobe (Wernicke\u2019s area) produces fluent but meaningless speech.",
    qs:[
      {q:"Based on the case descriptions, Broca\u2019s area is primarily associated with:",ch:["Understanding spoken language","Production of fluent, grammatically correct speech","Processing visual information","Regulating emotional responses"],ans:1},
      {q:"The part of the brain most responsible for regulating breathing, heartbeat, and other basic life functions is the:",ch:["Cerebellum","Hypothalamus","Medulla oblongata","Corpus callosum"],ans:2},
      {q:"Which neurotransmitter is MOST directly associated with motor control and is depleted in Parkinson\u2019s disease?",ch:["Serotonin","Acetylcholine","Dopamine","GABA"],ans:2},
      {q:"An action potential travels along the axon in which direction?",ch:["From axon terminal to cell body","From dendrites to axon terminals (cell body to axon terminal)","Bidirectionally depending on the signal strength","Only in myelinated neurons, from node to node"],ans:1},
      {q:"The endocrine system communicates via:",ch:["Electrical impulses along nerve fibers","Chemical messengers (hormones) released into the bloodstream","Neurotransmitters released at synapses","Reflexes coordinated by the spinal cord"],ans:1},
      {q:"The peripheral nervous system is divided into the:",ch:["Central and autonomic nervous systems","Somatic and autonomic nervous systems","Sympathetic and parasympathetic nervous systems","Sensory and motor cortices"],ans:1},
      {q:"The fight-or-flight response is primarily controlled by the:",ch:["Parasympathetic nervous system","Sympathetic nervous system","Somatic nervous system","Central nervous system alone"],ans:1},
      {q:"Split-brain research by Sperry and Gazzaniga demonstrated that in most people the left hemisphere is primarily responsible for:",ch:["Spatial reasoning and pattern recognition","Language and analytical processing","Emotional processing and facial recognition","Controlling the left side of the body"],ans:1},
      {q:"Which imaging technique measures brain activity by detecting changes in blood oxygenation (BOLD signal)?",ch:["EEG","PET scan","fMRI","CT scan"],ans:2},
      {q:"The reticular activating system (RAS) in the brainstem is primarily responsible for:",ch:["Processing visual information from the retina","Regulating arousal, alertness, and sleep-wake cycles","Coordinating fine motor movements","Forming new long-term memories"],ans:1},
    ]},

  /* ── Unit 3: Sensation & Perception ── */
  { period:"Unit 3", set:"Sensation & perception",
    stim:"A participant in a signal detection experiment correctly identifies a faint tone 70% of the time (hits) and falsely reports hearing a tone when none is present 15% of the time (false alarms). The researcher then increases the cost of missing a real tone; the participant\u2019s hit rate rises to 90% but false alarms increase to 40%.",
    qs:[
      {q:"According to signal detection theory, which factor BESIDES sensory sensitivity affected the participant\u2019s performance after the cost change?",ch:["The absolute threshold","Response criterion (bias)","The just-noticeable difference","Weber\u2019s constant for that modality"],ans:1},
      {q:"The just-noticeable difference (JND) is BEST defined as:",ch:["The minimum stimulus intensity detectable 50% of the time","The smallest detectable change in stimulus intensity","The point at which a stimulus becomes painful","The maximum intensity a sense organ can detect"],ans:1},
      {q:"According to Weber\u2019s law, the JND for a 100 g weight is 2 g. What would be the JND for a 500 g weight, assuming the same Weber fraction?",ch:["2 g","5 g","10 g","20 g"],ans:2},
      {q:"Which monocular depth cue involves objects that are farther away appearing smaller?",ch:["Binocular disparity","Relative size","Convergence","Retinal disparity"],ans:1},
      {q:"The perception of a continuous melody when notes are played in sequence (even with silent gaps) is explained by which Gestalt principle?",ch:["Proximity","Similarity","Closure","Continuity"],ans:3},
      {q:"Feature detectors in the visual cortex (as discovered by Hubel and Wiesel) respond BEST to:",ch:["Overall brightness changes across the visual field","Specific patterns such as lines, edges, and angles at particular orientations","The wavelength of light (color information)","Movement of the entire visual scene"],ans:1},
      {q:"Dark adaptation occurs primarily because:",ch:["The pupil dilates to allow more light","Rhodopsin (visual pigment) in rod cells regenerates in the absence of bright light","Cones become more sensitive after prolonged darkness","The visual cortex increases its sensitivity to incoming signals"],ans:1},
      {q:"The gate-control theory of pain proposes that:",ch:["Pain is always proportional to tissue damage","Neural gates in the spinal cord can modulate pain signals before they reach the brain","Pain is entirely a psychological phenomenon","Endorphins completely block pain signals at the receptor level"],ans:1},
      {q:"The frequency theory of pitch perception states that:",ch:["Different areas of the basilar membrane respond to different frequencies","The rate of neural firing matches the frequency of a sound wave","Higher pitch sounds activate more hair cells simultaneously","Pitch perception depends entirely on the pinna shape"],ans:1},
      {q:"Perceptual constancy refers to the tendency to:",ch:["Perceive ambiguous stimuli in familiar ways","Perceive objects as stable even as the retinal image changes","Group nearby stimuli together perceptually","Detect stimuli below the threshold of conscious awareness"],ans:1},
    ]},

  /* ── Unit 4: Learning ── */
  { period:"Unit 4", set:"Learning",
    stim:"In Pavlov\u2019s classic experiment, a dog that previously had no response to a bell now salivates at the bell\u2019s sound after the bell was repeatedly paired with food. When only the bell is presented for many trials, salivation gradually stops. One week later, with no additional training, the bell again elicits a weak salivation response.",
    qs:[
      {q:"The process by which salivation to the bell was established is called:",ch:["Operant conditioning","Classical conditioning","Observational learning","Habituation"],ans:1},
      {q:"The bell is the ______ and the food is the ______.",ch:["Unconditioned stimulus; conditioned stimulus","Conditioned stimulus; unconditioned stimulus","Neutral stimulus (before conditioning); conditioned stimulus (after conditioning)","Conditioned response; unconditioned response"],ans:1},
      {q:"The gradual cessation of salivation when only the bell is presented is called:",ch:["Stimulus generalization","Spontaneous recovery","Extinction","Discrimination"],ans:2},
      {q:"The weak salivation response that reappears after one week without training is called:",ch:["Reacquisition","Spontaneous recovery","Second-order conditioning","Disinhibition"],ans:1},
      {q:"In operant conditioning, a behavior that INCREASES in frequency because it removes an unpleasant stimulus is maintained by:",ch:["Positive reinforcement","Negative reinforcement","Positive punishment","Negative punishment"],ans:1},
      {q:"A rat in a Skinner box presses a lever every 25 responses to receive food. This schedule of reinforcement is:",ch:["Fixed ratio","Variable ratio","Fixed interval","Variable interval"],ans:0},
      {q:"Variable ratio schedules of reinforcement produce which behavioral pattern?",ch:["Slow, steady responding with a pause after each reinforcer","High, steady response rates that are highly resistant to extinction","Responding that increases just before the reward period ends","Inconsistent responding with long pauses"],ans:1},
      {q:"Bandura\u2019s Bobo doll experiments demonstrated that children can learn aggressive behaviors through:",ch:["Classical conditioning","Operant conditioning with direct reinforcement","Observational learning (modeling)","Insight learning"],ans:2},
      {q:"Latent learning refers to:",ch:["Learning that occurs but is not demonstrated until there is incentive to do so","Learning that occurs only through direct reinforcement","Learning that fades quickly without practice","Learning that transfers from one skill to a different, unrelated skill"],ans:0},
      {q:"Which of the following is an example of negative punishment?",ch:["Giving a child candy for completing homework","Shocking a rat when it presses the wrong lever","Taking away a teenager\u2019s phone for breaking curfew","Having a headache go away after taking ibuprofen"],ans:2},
    ]},

  /* ── Unit 5: Cognitive Psychology ── */
  { period:"Unit 5", set:"Cognitive psychology & memory",
    stim:"A participant studies a list of 20 words and then immediately tries to recall them. She recalls the first few words and the last few words with much higher accuracy than the words in the middle of the list.",
    qs:[
      {q:"The recall pattern described is known as the:",ch:["Tip-of-the-tongue phenomenon","Spacing effect","Serial position effect","Retroactive interference effect"],ans:2},
      {q:"The superior recall of the LAST words on the list is called the ______ effect, and is explained by those words still being in ______.",ch:["Primacy; long-term memory","Recency; short-term (working) memory","Primacy; short-term memory","Recency; long-term memory"],ans:1},
      {q:"Working memory is BEST described as:",ch:["Unlimited capacity storage for autobiographical memories","A temporary system for actively holding and manipulating information","The process of converting sensory input into long-term memory","Implicit memory for skills and procedures"],ans:1},
      {q:"The process of converting information from short-term to long-term memory is called:",ch:["Encoding","Consolidation","Retrieval","Priming"],ans:1},
      {q:"A student studies for an exam using the same room where the exam will be held. This strategy uses which memory principle?",ch:["The spacing effect","Encoding specificity","The serial position effect","Proactive interference"],ans:1},
      {q:"Retroactive interference occurs when:",ch:["Old memories interfere with learning new information","New learning interferes with retrieval of previously learned information","Emotional arousal blocks memory consolidation","Sleep deprivation prevents encoding of new memories"],ans:1},
      {q:"The misinformation effect (Loftus) demonstrates that eyewitness memory can be altered by:",ch:["Sleep deprivation prior to witnessing the event","Misleading post-event information introduced through questions","High levels of stress during the event","The passage of time alone"],ans:1},
      {q:"Implicit memory is BEST illustrated by:",ch:["Recalling your first day of school","Knowing the capital of France","Riding a bike without consciously thinking about the movements","Remembering your grandmother\u2019s phone number"],ans:2},
      {q:"Which memory system stores information for a fraction of a second in its original sensory form?",ch:["Short-term memory","Long-term memory","Sensory memory","Working memory"],ans:2},
      {q:"The availability heuristic leads people to judge the frequency of an event based on:",ch:["Statistical base rates","How easily examples come to mind","The logical structure of the problem","Mathematical probability calculations"],ans:1},
    ]},

  /* ── Unit 6: Developmental Psychology ── */
  { period:"Unit 6", set:"Developmental psychology",
    stim:"Piaget observed that children below age 7 typically believe that when water is poured from a short, wide glass into a tall, narrow glass, the tall glass contains more water. Children above age 7 typically recognize that the amount of water has not changed.",
    qs:[
      {q:"The ability to recognize that the amount of water is unchanged despite the change in appearance is called:",ch:["Object permanence","Conservation","Egocentrism","Centration"],ans:1},
      {q:"According to Piaget, children who cannot yet conserve are in which stage of cognitive development?",ch:["Sensorimotor","Preoperational","Concrete operational","Formal operational"],ans:1},
      {q:"Object permanence, the understanding that objects continue to exist even when out of sight, develops in which Piagetian stage?",ch:["Sensorimotor","Preoperational","Concrete operational","Formal operational"],ans:0},
      {q:"Vygotsky\u2019s zone of proximal development (ZPD) refers to:",ch:["Tasks a child can complete independently","The gap between what a child can do alone and what they can do with guidance","The range of tasks that are too difficult even with adult help","The period in development when language acquisition occurs most rapidly"],ans:1},
      {q:"Ainsworth\u2019s Strange Situation identified securely attached infants as those who:",ch:["Show no distress when the caregiver leaves and ignore them upon return","Show distress when the caregiver leaves and are easily comforted upon return","Show extreme distress and cannot be comforted upon return","Show no distress and actively avoid the caregiver upon return"],ans:1},
      {q:"Kohlberg\u2019s preconventional level of moral reasoning is characterized by:",ch:["Following rules to maintain social order and fulfill duty","Reasoning based on consequences to oneself (avoiding punishment/gaining reward)","Reasoning based on universal ethical principles","Reasoning based on social contracts and individual rights"],ans:1},
      {q:"The rooting reflex in newborns is an example of a:",ch:["Learned behavior","Conditioned response","Innate reflex","Imprinted behavior"],ans:2},
      {q:"Erikson\u2019s psychosocial stage of \u2018Identity vs. Role Confusion\u2019 is primarily associated with which life period?",ch:["Early childhood (ages 3\u20136)","Middle childhood (ages 6\u201312)","Adolescence (ages 12\u201318)","Early adulthood (ages 18\u201340)"],ans:2},
      {q:"Teratogens are BEST defined as:",ch:["Genetic mutations that cause developmental disorders","Environmental agents that can harm a developing embryo or fetus","Hormones that regulate prenatal growth","Nutritional deficiencies in the mother\u2019s diet"],ans:1},
      {q:"The critical period for language acquisition suggests that:",ch:["Language can be learned with equal ease at any age","Language is most easily acquired during childhood; difficulty increases significantly after puberty","Adults cannot learn new languages","Language acquisition is entirely genetically determined"],ans:1},
    ]},

  /* ── Unit 7: Motivation, Emotion & Personality ── */
  { period:"Unit 7", set:"Motivation, emotion & personality",
    stim:"Maslow\u2019s Hierarchy of Needs pyramid (from bottom to top): Physiological \u2192 Safety \u2192 Love/Belonging \u2192 Esteem \u2192 Self-Actualization.",
    qs:[
      {q:"According to Maslow, which need must generally be addressed BEFORE esteem needs?",ch:["Self-actualization","Love and belonging","Transcendence","Cognitive needs"],ans:1},
      {q:"The James-Lange theory of emotion proposes that:",ch:["Emotions and physiological arousal occur simultaneously","We experience emotion as a result of perceiving our physiological responses to a stimulus","Cognitive appraisal of a situation determines the specific emotion felt","The thalamus simultaneously sends signals to the cortex and body, producing emotion and arousal at the same time"],ans:1},
      {q:"The Cannon-Bard theory of emotion proposes that:",ch:["Physiological reactions precede and cause emotional experiences","The thalamus simultaneously sends signals to the cortex (emotion) and the body (arousal)","Cognitive appraisal determines which emotion is felt","The amygdala is the sole determinant of emotional experience"],ans:1},
      {q:"The two-factor theory (Schachter-Singer) states that emotion is determined by:",ch:["Physiological arousal alone","Cognitive appraisal alone","Physiological arousal AND cognitive labeling of that arousal","Unconscious drives and social expectations"],ans:2},
      {q:"According to Freud, the ego operates according to the:",ch:["Pleasure principle","Reality principle","Moral principle","Collective unconscious"],ans:1},
      {q:"Carl Rogers\u2019 humanistic theory emphasized the importance of ______ for psychological health.",ch:["Unconscious conflict resolution","Unconditional positive regard and self-concept congruence","Achieving the highest stages of moral development","Reinforcement of adaptive behaviors"],ans:1},
      {q:"Which personality assessment presents ambiguous images that subjects interpret, theoretically revealing unconscious thoughts?",ch:["MMPI-2","Myers-Briggs Type Indicator (MBTI)","Rorschach inkblot test","Big Five personality inventory"],ans:2},
      {q:"The Big Five personality traits (OCEAN) do NOT include:",ch:["Openness to experience","Conscientiousness","Ego strength","Neuroticism"],ans:2},
      {q:"Intrinsic motivation refers to engaging in a behavior:",ch:["To obtain an external reward or avoid punishment","Because the activity itself is inherently satisfying or interesting","To satisfy a biological drive such as hunger","To meet social expectations"],ans:1},
      {q:"Overjustification effect occurs when:",ch:["External rewards increase intrinsic motivation over time","Providing external rewards for an already intrinsically motivating activity decreases future intrinsic motivation","Punishment eliminates an undesired behavior permanently","Setting extremely high goals leads to lower performance"],ans:1},
    ]},

  /* ── Unit 8: Clinical Psychology ── */
  { period:"Unit 8", set:"Psychological disorders",
    stim:"A 28-year-old reports experiencing episodes of intense fear, racing heart, shortness of breath, and a sense of impending doom that last 10\u201320 minutes. The episodes occur without warning and are not linked to a specific situation. Between episodes, she worries constantly about when the next episode will occur.",
    qs:[
      {q:"The described episodes are MOST consistent with which disorder?",ch:["Generalized anxiety disorder","Specific phobia","Panic disorder","Social anxiety disorder"],ans:2},
      {q:"The DSM-5 classifies psychological disorders primarily based on:",ch:["Underlying neurobiological causes","Clusters of symptoms, duration, and functional impairment","Psychoanalytic defense mechanisms","Social deviance alone"],ans:1},
      {q:"Major depressive disorder (MDD) is characterized by:",ch:["Alternating periods of depression and mania","Persistent depressed mood or loss of interest lasting at least 2 weeks, with associated symptoms","Mild, chronic low mood lasting at least 2 years (dysthymia)","Depressive episodes triggered only by seasonal changes"],ans:1},
      {q:"Schizophrenia is BEST characterized by:",ch:["Alternating episodes of mania and depression","Pervasive distrust and suspicion of others","Positive symptoms (hallucinations, delusions, disorganized thought) and negative symptoms (flat affect, alogia)","Persistent anxiety and avoidance of social situations"],ans:2},
      {q:"The diathesis-stress model of psychological disorders proposes that disorders result from:",ch:["Purely biological factors such as genetic mutations","Purely environmental factors such as childhood trauma","An interaction between a biological predisposition and environmental stressors","Unconscious conflicts from early childhood alone"],ans:2},
      {q:"Obsessive-compulsive disorder (OCD) involves:",ch:["Intrusive, unwanted thoughts (obsessions) and repetitive behaviors performed to reduce anxiety (compulsions)","Persistent flashbacks and hyperarousal following a traumatic event","Repeated episodes of binge eating followed by compensatory behaviors","Dramatic mood swings between mania and depression"],ans:0},
      {q:"PTSD (post-traumatic stress disorder) is classified in the DSM-5 under:",ch:["Anxiety disorders","Depressive disorders","Trauma- and stressor-related disorders","Dissociative disorders"],ans:2},
      {q:"Antisocial personality disorder is characterized by:",ch:["Intense fear of abandonment and unstable relationships","Pervasive disregard for and violation of others\u2019 rights, often with lack of remorse","Grandiosity, need for admiration, and lack of empathy","Dramatic, attention-seeking behavior and shallow emotions"],ans:1},
      {q:"Which neurotransmitter is MOST implicated in the biological basis of depression, and is the target of SSRIs?",ch:["Dopamine","GABA","Serotonin","Acetylcholine"],ans:2},
      {q:"Autism spectrum disorder (ASD) is BEST characterized by:",ch:["Deficits in social communication/interaction and restricted, repetitive behaviors","Persistent inattention and hyperactivity across multiple settings","Alternating episodes of mania and depression","Sudden onset of psychotic symptoms in adolescence"],ans:0},
    ]},

  /* ── Unit 9: Treatment of Psychological Disorders ── */
  { period:"Unit 9", set:"Treatment of psychological disorders",
    stim:"A therapist works with a client who has a specific phobia of spiders. The therapist begins by teaching relaxation techniques, then gradually exposes the client to increasingly anxiety-provoking spider-related stimuli, starting with the word \u2018spider\u2019 and ending with holding a live spider.",
    qs:[
      {q:"The therapeutic approach described is BEST identified as:",ch:["Psychoanalysis","Systematic desensitization","Cognitive restructuring","Aversion therapy"],ans:1},
      {q:"Systematic desensitization is grounded in which learning principle?",ch:["Operant conditioning with positive reinforcement","Classical conditioning and counter-conditioning","Observational learning","Cognitive reappraisal"],ans:1},
      {q:"Cognitive-behavioral therapy (CBT) targets:",ch:["Unconscious conflicts and repressed memories","Maladaptive thought patterns and the behaviors that maintain them","Only behavioral symptoms through conditioning","The therapeutic relationship and unconditional positive regard"],ans:1},
      {q:"Which class of drugs is MOST commonly prescribed for depression and works by blocking the reuptake of serotonin?",ch:["Benzodiazepines","Antipsychotics","Selective serotonin reuptake inhibitors (SSRIs)","Mood stabilizers (e.g., lithium)"],ans:2},
      {q:"Electroconvulsive therapy (ECT) is primarily used as a treatment for:",ch:["Schizophrenia with prominent positive symptoms","Severe, treatment-resistant depression","Generalized anxiety disorder","Borderline personality disorder"],ans:1},
      {q:"A client\u2019s therapist reflects back the client\u2019s feelings and provides unconditional positive regard without directing the session. This BEST describes:",ch:["Rational-emotive behavior therapy (REBT)","Psychoanalysis","Client-centered (humanistic) therapy","Behavioral therapy"],ans:2},
      {q:"Meta-analyses comparing psychotherapy types typically find that:",ch:["Cognitive-behavioral therapy is dramatically superior to all other forms","Most established psychotherapies produce similar overall outcomes (the \u2018Dodo bird verdict\u2019)","Psychodynamic therapy is ineffective compared to medication","Only behavioral therapies with clear evidence bases produce lasting change"],ans:1},
      {q:"The deinstitutionalization movement in the mid-20th century was primarily made possible by the development of:",ch:["Psychoanalysis as a widely available outpatient treatment","Antipsychotic medications that allowed many patients to live outside hospitals","Community mental health centers funded by the government","Evidence-based behavioral therapies"],ans:1},
        {q:"EMDR (Eye Movement Desensitization and Reprocessing) is primarily used to treat:",ch:["Schizophrenia","PTSD and trauma-related conditions","Bipolar disorder","Generalized anxiety disorder"],ans:1},
      {q:"A psychologist following the biopsychosocial model would consider which set of factors when treating a patient?",ch:["Only biological factors such as genetics and neurochemistry","Only psychological factors such as thoughts and emotions","Biological, psychological, AND social/cultural factors together","Only environmental and social factors"],ans:2},
    ]},

  /* ── Unit 9 continued: Social psychology ── */
  { period:"Unit 9 — Social", set:"Social psychology",
    stim:"In Milgram\u2019s obedience experiments, approximately 65% of participants administered what they believed to be the maximum 450-volt shock to a confederate learner when instructed by an authority figure in a lab coat, despite the confederate\u2019s apparent distress.",
    qs:[
      {q:"Milgram\u2019s results are BEST explained by which concept?",ch:["Diffusion of responsibility among many participants","Obedience to authority, particularly when the authority is perceived as legitimate","Conformity to peer pressure from other participants","Deindividuation caused by the laboratory setting"],ans:1},
      {q:"In Asch\u2019s conformity experiments, participants gave obviously incorrect answers to match the group. This demonstrates:",ch:["Obedience to legitimate authority","Normative social influence \u2014 conforming to fit in and avoid rejection","Informational social influence \u2014 believing the group has accurate information","Groupthink in high-stakes decision-making"],ans:1},
      {q:"The fundamental attribution error refers to the tendency to:",ch:["Overestimate situational factors and underestimate dispositional factors when explaining others\u2019 behavior","Overestimate dispositional factors and underestimate situational factors when explaining others\u2019 behavior","Attribute our own successes to ability and failures to luck","Assume others share our attitudes and beliefs"],ans:1},
      {q:"Cognitive dissonance theory (Festinger) predicts that when our actions conflict with our attitudes, we tend to:",ch:["Change our behavior to match our pre-existing attitudes","Experience discomfort and often change our attitudes to justify the behavior","Ignore the inconsistency entirely","Seek social support to validate our original attitude"],ans:1},
      {q:"The bystander effect predicts that as the number of witnesses to an emergency INCREASES, the probability that any one person will help:",ch:["Increases because more people are available to help","Decreases due to diffusion of responsibility","Remains constant regardless of group size","Depends entirely on the severity of the emergency"],ans:1},
      {q:"Social facilitation refers to the finding that the presence of others tends to:",ch:["Decrease performance on all tasks","Improve performance on well-learned or simple tasks, but impair performance on complex or novel tasks","Improve performance on complex tasks but impair simple ones","Have no effect on individual performance"],ans:1},
      {q:"Which of the following BEST describes the concept of deindividuation?",ch:["Heightened self-awareness caused by being the focus of group attention","Loss of self-awareness and restraint in group situations, often leading to impulsive behavior","The tendency to conform to perceived group norms even in private","Increased prosocial behavior when individuals feel anonymous"],ans:1},
      {q:"Stereotype threat (Steele) refers to:",ch:["The tendency to hold negative stereotypes about out-groups","A situational predicament where individuals risk confirming a negative stereotype about their group, which can impair performance","The automatic activation of stereotypes in implicit memory","Social pressure to conform to the stereotypic behavior of one\u2019s group"],ans:1},
      {q:"In social psychology, the \u2018door-in-the-face\u2019 technique works by:",ch:["Making a small initial request that is almost always accepted, then following with a larger request","Making a large initial request that is refused, then following with a smaller, more reasonable request (the actual target)","Framing a request in terms of the requester\u2019s authority","Repeating a request multiple times until the target complies"],ans:1},
      {q:"Prejudice, discrimination, and stereotyping differ in that:",ch:["Prejudice is behavioral, discrimination is cognitive, and stereotyping is emotional","Stereotyping is cognitive (beliefs), prejudice is affective (attitudes/feelings), and discrimination is behavioral (actions)","All three are identical phenomena measured differently","Discrimination is the cause of both prejudice and stereotyping"],ans:1},
    ]},
];

/* ── AP PRECALCULUS MCQ ──────────────────────────────────── */
/* 40 questions matching the real AP Precalculus exam (4 units) */
const CALC_SETS = [
  /* ── Unit 1: Polynomial & Rational Functions ── */
  { period:"Unit 1", set:"Polynomial & rational functions — No Calculator",
    stim:"Graph of a polynomial function f(x): zeros at x = \u22122, x = 1 (multiplicity 2), and x = 4; y-intercept at (0, 8); end behavior: as x\u2192+\u221e, f(x)\u2192+\u221e and as x\u2192\u2212\u221e, f(x)\u2192\u2212\u221e.",
    qs:[
      {q:"Based on the end behavior described, what is the degree of f(x)?",ch:["Even degree with a positive leading coefficient","Odd degree with a positive leading coefficient","Even degree with a negative leading coefficient","Odd degree with a negative leading coefficient"],ans:1},
      {q:"Since x = 1 is a zero with multiplicity 2, what is the behavior of f at x = 1?",ch:["The graph crosses the x-axis at x = 1","The graph touches but does not cross the x-axis at x = 1","The graph has a vertical asymptote at x = 1","The graph has a removable discontinuity at x = 1"],ans:1},
      {q:"For a rational function g(x) = (x\u00b2 \u2212 4)/(x \u2212 2), which of the following correctly describes g(x)?",ch:["g(x) = x + 2 for all x","g(x) = x + 2 with a removable discontinuity (hole) at x = 2","g(x) has a vertical asymptote at x = 2","g(x) is undefined for all real x"],ans:1},
      {q:"Which of the following functions has a horizontal asymptote at y = 0?",ch:["h(x) = (3x\u00b2 + 1)/(x\u00b2 + 4)","h(x) = (2x\u00b3 + 5)/(x\u00b2 \u2212 1)","h(x) = (x + 3)/(x\u00b3 + 1)","h(x) = (x\u00b2 \u2212 9)/(x \u2212 3)"],ans:2},
      {q:"A polynomial f(x) has degree 4 with a negative leading coefficient. Which end behavior is correct?",ch:["As x\u2192\u00b1\u221e, f(x)\u2192+\u221e","As x\u2192\u00b1\u221e, f(x)\u2192\u2212\u221e","As x\u2192+\u221e, f(x)\u2192+\u221e and as x\u2192\u2212\u221e, f(x)\u2192\u2212\u221e","As x\u2192+\u221e, f(x)\u2192\u2212\u221e and as x\u2192\u2212\u221e, f(x)\u2192+\u221e"],ans:1},
      {q:"A rational function r(x) = (2x\u00b2 + 3x \u2212 2)/(x\u00b2 \u2212 4). What are the vertical asymptotes?",ch:["x = 2 only","x = \u22122 only","x = 2 and x = \u22122","x = 1/2 and x = \u22122"],ans:2},
      {q:"Which of the following is true about the graph of f(x) = |x \u2212 3| \u2212 2?",ch:["It has a minimum value of 3 at x = 2","It has a minimum value of \u22122 at x = 3","It has a maximum value of 2 at x = 3","It has no minimum value"],ans:1},
      {q:"The remainder when p(x) = x\u00b3 \u2212 4x\u00b2 + 5x \u2212 2 is divided by (x \u2212 2) equals:",ch:["0","4","2","8"],ans:0},
      {q:"A polynomial has real zeros at x = \u22121, x = 0, and x = 3 and no other real zeros. Which could be the degree of this polynomial?",ch:["2","3","4 with a complex conjugate pair of additional zeros","Both 3 and 4 are possible"],ans:3},
      {q:"The graph of y = f(x) has a slant asymptote. This occurs when:",ch:["The degree of the numerator equals the degree of the denominator","The degree of the numerator is exactly one more than the degree of the denominator","The degree of the numerator is less than the degree of the denominator","The denominator has no real zeros"],ans:1},
    ]},

  /* ── Unit 2: Exponential & Logarithmic Functions ── */
  { period:"Unit 2", set:"Exponential & logarithmic functions — No Calculator",
    stim:"A population of bacteria triples every 4 hours. At t = 0, there are 200 bacteria. The population can be modeled by P(t) = 200 \u00b7 3^(t/4), where t is in hours.",
    qs:[
      {q:"According to the model, how many bacteria are present at t = 8 hours?",ch:["600","1,200","1,800","2,400"],ans:2},
      {q:"Using the model P(t) = 200 \u00b7 3^(t/4), at what time t does the population first exceed 5,000?",ch:["t \u2248 11.3 hr","t \u2248 13.0 hr","t \u2248 15.7 hr","t \u2248 18.4 hr"],ans:0},
      {q:"What is the explicit formula for an exponential function where f(0) = 3, f(1) = 6, f(2) = 12?",ch:["f(x) = 3 \u00b7 2\u02e3","f(x) = 2 \u00b7 3\u02e3","f(x) = 6 \u00b7 2\u02e3","f(x) = 3\u02e3 + 2"],ans:0},
      {q:"log\u2082(64) equals:",ch:["4","5","6","8"],ans:2},
      {q:"Which transformation maps f(x) = e\u02e3 to g(x) = e^(x\u22123) + 2?",ch:["Shift left 3 units, up 2 units","Shift right 3 units, up 2 units","Shift right 3 units, down 2 units","Shift left 3 units, down 2 units"],ans:1},
      {q:"Which of the following is equivalent to log(AB\u00b2/C)?",ch:["log A + 2 log B \u2212 log C","log A + log B\u00b2 + log C","2 log A + log B \u2212 log C","log A \u00b7 2 log B / log C"],ans:0},
      {q:"Solve for x: 5^(2x) = 125",ch:["x = 1","x = 1.5","x = 2","x = 3"],ans:1},
      {q:"The half-life of carbon-14 is 5,730 years. Approximately what percentage of the original carbon-14 remains after 11,460 years?",ch:["50%","33%","25%","12.5%"],ans:2},
      {q:"The inverse of f(x) = ln(x + 3) is:",ch:["f\u207b\u00b9(x) = e\u02e3 \u2212 3","f\u207b\u00b9(x) = e\u02e3 + 3","f\u207b\u00b9(x) = ln(x) \u2212 3","f\u207b\u00b9(x) = 1/ln(x + 3)"],ans:0},
      {q:"A continuous growth model is A(t) = A\u2080e^(rt). If a population doubles in 10 years, what is the approximate value of r?",ch:["r \u2248 0.0693","r \u2248 0.0500","r \u2248 0.1000","r \u2248 0.1386"],ans:0},
    ]},

  /* ── Unit 3: Trigonometric & Polar Functions ── */
  { period:"Unit 3", set:"Trigonometric & polar functions — No Calculator",
    stim:"A unit circle is drawn with angles labeled at 0, \u03c0/6, \u03c0/4, \u03c0/3, \u03c0/2, 2\u03c0/3, 3\u03c0/4, 5\u03c0/6, \u03c0 and their corresponding (cos \u03b8, sin \u03b8) coordinates.",
    qs:[
      {q:"What is the exact value of sin(5\u03c0/6)?",ch:["\u2212\u221a3/2","\u221a3/2","1/2","\u22121/2"],ans:2},
      {q:"A sinusoidal function has amplitude 3, period 4\u03c0, and midline y = 1. Which equation could represent this function?",ch:["y = 3 sin(x/2) + 1","y = 3 sin(2x) + 1","y = 3 sin(x/2) \u2212 1","y = (1/3) sin(2x) + 1"],ans:0},
      {q:"In a right triangle, if sin \u03b8 = 5/13, what is cos \u03b8?",ch:["12/13","5/12","13/12","8/13"],ans:0},
      {q:"Which of the following gives the period of f(x) = 4 cos(3x \u2212 \u03c0/2) + 1?",ch:["\u03c0/3","2\u03c0/3","2\u03c0","3\u03c0"],ans:1},
      {q:"The phase shift of f(x) = sin(2x \u2212 \u03c0) is:",ch:["Shift left \u03c0 units","Shift right \u03c0/2 units","Shift right \u03c0 units","Shift left \u03c0/2 units"],ans:1},
      {q:"arcsin(1/2) equals:",ch:["\u03c0/6","\u03c0/4","\u03c0/3","\u03c0/2"],ans:0},
      {q:"A Ferris wheel with radius 20 m has its center 25 m above the ground. A rider starts at the bottom. Which function models the rider\u2019s height h(t) in meters if the wheel completes one rotation every 40 seconds?",ch:["h(t) = 20 sin(2\u03c0t/40) + 25","h(t) = \u221220 cos(2\u03c0t/40) + 25","h(t) = 20 cos(2\u03c0t/40) + 25","h(t) = \u221220 sin(2\u03c0t/40) + 5"],ans:1},
      {q:"If \u03b8 is in the second quadrant and sin \u03b8 = 3/5, what is tan \u03b8?",ch:["3/4","\u22123/4","4/3","\u22124/3"],ans:1},
      {q:"The graph of y = sec(x) has vertical asymptotes where:",ch:["sin(x) = 0","cos(x) = 0","tan(x) = 0","sin(x) = 1"],ans:1},
      {q:"In polar coordinates, the point (r, \u03b8) = (4, 2\u03c0/3) has rectangular coordinates:",ch:["(\u22122, 2\u221a3)","(2, 2\u221a3)","(\u22122\u221a3, 2)","(2\u221a3, \u22122)"],ans:0},
    ]},

  /* ── Unit 4: Functions & Analytical Applications ── */
  { period:"Unit 4", set:"Functions & composition — Calculator Active",
    stim:"Functions defined as: f(x) = 2x + 3, g(x) = x\u00b2 \u2212 1, and h(x) = \u221a(x + 4).",
    qs:[
      {q:"What is (f \u2218 g)(x)?",ch:["2x\u00b2 + 1","2x\u00b2 \u2212 2 + 3 = 2x\u00b2 + 1","4x\u00b2 + 12x + 8","(2x + 3)\u00b2 \u2212 1"],ans:1},
      {q:"What is f\u207b\u00b9(x), the inverse of f(x) = 2x + 3?",ch:["f\u207b\u00b9(x) = (x \u2212 3)/2","f\u207b\u00b9(x) = (x + 3)/2","f\u207b\u00b9(x) = 2x \u2212 3","f\u207b\u00b9(x) = 1/(2x + 3)"],ans:0},
      {q:"What is the domain of h(x) = \u221a(x + 4)?",ch:["x \u2265 \u22124","x > \u22124","All real numbers","x \u2264 \u22124"],ans:0},
      {q:"If k(x) = f(x \u2212 2) + 5, describe the transformation from f to k.",ch:["Shift right 2 units and up 5 units","Shift left 2 units and up 5 units","Shift right 2 units and down 5 units","Shift left 2 units and down 5 units"],ans:0},
      {q:"Which of the following functions is NOT one-to-one?",ch:["f(x) = 3x + 7","f(x) = x\u00b3","f(x) = x\u00b2","f(x) = e\u02e3"],ans:2},
      {q:"(g \u2218 f)(2) where f(x) = 2x + 3 and g(x) = x\u00b2 \u2212 1 equals:",ch:["24","48","6","48"],ans:0},
      {q:"The average rate of change of f(x) = x\u00b2 on the interval [2, 5] is:",ch:["4","7","9","25"],ans:1},
      {q:"A function f is even if:",ch:["f(\u2212x) = \u2212f(x) for all x","f(\u2212x) = f(x) for all x","f(x + c) = f(x) for some constant c","f is symmetric about the y = x line"],ans:1},
      {q:"The vertical line test is used to determine whether a graph represents:",ch:["A one-to-one function","A function (each x-value maps to exactly one y-value)","An invertible function","An even function"],ans:1},
      {q:"If f(x) = x\u00b2 \u2212 4 and g(x) = \u221a(x + 4), then f(g(x)) simplifies to:",ch:["x \u2212 4","x + 4 \u2212 4 = x","x","x\u00b2"],ans:2},
    ]},

  /* ── OFFICIAL CB RELEASED: 2024 AP Precalc Exam — No Calculator ── */
  { period:"Official CB — No Calculator", set:"Polynomial functions (2024 AP Precalc exam)",
    stim:"The polynomial function p is given by p(x) = (x + 2)(x \u2212 1)\u00b2(x \u2212 4). The graph of p is shown in the xy-plane. The function has zeros at x = \u22122, x = 1 (multiplicity 2), and x = 4. As x \u2192 +\u221e, p(x) \u2192 +\u221e; as x \u2192 \u2212\u221e, p(x) \u2192 \u2212\u221e.",
    qs:[
      {q:"[No Calculator] Which of the following describes the behavior of the graph of p at the zero x = 1?",ch:["The graph of p crosses the x-axis at x = 1 because the multiplicity is odd","The graph of p is tangent to the x-axis at x = 1 and does not cross, because the multiplicity is even","The graph of p has a vertical asymptote at x = 1","The graph of p has a removable discontinuity at x = 1"],ans:1},
      {q:"[No Calculator] The function q is defined by q(x) = \u2212p(x). Which of the following correctly describes the end behavior of q?",ch:["As x \u2192 +\u221e, q(x) \u2192 +\u221e and as x \u2192 \u2212\u221e, q(x) \u2192 \u2212\u221e","As x \u2192 +\u221e, q(x) \u2192 \u2212\u221e and as x \u2192 \u2212\u221e, q(x) \u2192 +\u221e","As x \u2192 \u00b1\u221e, q(x) \u2192 +\u221e","As x \u2192 \u00b1\u221e, q(x) \u2192 \u2212\u221e"],ans:1},
    ]},

  /* ── OFFICIAL CB RELEASED: 2024 AP Precalc Exam — Calculator ── */
  { period:"Official CB — Calculator", set:"Sinusoidal models (2024 AP Precalc exam)",
    stim:"The table shows depth of water (feet) at a tidal location at selected times. t = 0 hr: d = 6.0 ft | t = 3 hr: d = 11.5 ft | t = 6 hr: d = 6.0 ft | t = 9 hr: d = 0.5 ft | t = 12 hr: d = 6.0 ft. A sinusoidal function of the form d(t) = A sin(Bt + C) + D can model this data.",
    qs:[
      {q:"[Calculator OK] Based on the table, what are the amplitude and midline of the sinusoidal function that models the depth of water?",ch:["Amplitude = 11 ft, midline y = 0.5","Amplitude = 5.5 ft, midline y = 6.0","Amplitude = 11.5 ft, midline y = 6.0","Amplitude = 5.5 ft, midline y = 0.5"],ans:1},
      {q:"[Calculator OK] Using the sinusoidal model, a boat requires a water depth of at least 8 feet to navigate safely. During a 12-hour period starting at t = 0, for approximately how many hours is the water deep enough for the boat?",ch:["About 4.4 hours","About 6.0 hours","About 7.6 hours","About 9.0 hours"],ans:0},
    ]},
];
function flattenSets(sets) {
  const out = [];
  sets.forEach(s => s.qs.forEach((q, i) =>
    out.push({ ...q, period: s.period, set: s.set, stim: s.stim, first: i === 0 })
  ));
  return out;
}
const ALL_QUESTIONS = {
  world: flattenSets(WORLD_SETS),
  bio:   flattenSets(BIO_SETS),
  psych: flattenSets(PSYCH_SETS),
  calc:  flattenSets(CALC_SETS),
};

/* ═══════════════════════════════════════════════════════════
   SECTION B — APP STATE
   ═══════════════════════════════════════════════════════════ */
let activeCourse = 'world'; // 'world' | 'bio' | 'psych' | 'calc'
let cur      = 0;
let allQ     = [];
let mcqAns   = [];
let mcqDone  = false;
let mcqTID   = null;
let mcqTime  = 55 * 60;
let wTID     = null;
let wTime    = 100 * 60;
let leqSelections = { world: 0 };
const grading = {};

/* ── Per-course config ──────────────────────────────────── */
const COURSE_CONFIG = {
  world: {
    name: 'AP World History',
    accentVar: '--world-accent',
    accentVal: '#5B9B6A',
    lightVar: '--world-light',
    lightVal: '#D4EDDA',
    badgeClass: 'badge-world',
    fillClass: 'fill-world',
    modalTitle: 'AP World History: Modern',
    modalSub: 'Choose which section you\'d like to study',
    options: [
      { icon:'✏️', label:'Multiple Choice (MCQ)', meta:'55 questions · 55 min · 40% of score', action:"closeModal();startMCQ('world');" },
      { icon:'📝', label:'Writing Section', meta:'SAQ · DBQ · LEQ · 100 min · 60% of score', action:"closeModal();startWriting('world');" },
    ],
    resultNote: 'MCQ = 40% of total AP score. Writing (SAQ, DBQ, LEQ) makes up 60%.',
    breakdownLabel: 'Performance by period',
    mcqTime: 55 * 60,
  },
  bio: {
    name: 'AP Biology',
    accentVar: '--bio-accent',
    accentVal: '#4A90D9',
    lightVar: '--bio-light',
    lightVal: '#D0E8F8',
    badgeClass: 'badge-bio',
    fillClass: 'fill-bio',
    modalTitle: 'AP Biology',
    modalSub: 'Choose which section you\'d like to practice',
    options: [
      { icon:'🔬', label:'Multiple Choice (MCQ)', meta:'60 questions · timed · ~90 min', action:"closeModal();startMCQ('bio');" },
      { icon:'📝', label:'Free Response (FRQ)', meta:'Experimental design · Conceptual FRQ · AI graded', action:"closeModal();startWriting('bio');" },
    ],
    resultNote: 'MCQ = 50% of AP Bio score. FRQ makes up the remaining 50%.',
    breakdownLabel: 'Performance by unit',
    mcqTime: 90 * 60,
  },
  psych: {
    name: 'AP Psychology',
    accentVar: '--psych-accent',
    accentVal: '#9B6BB5',
    lightVar: '--psych-light',
    lightVal: '#EBD9F5',
    badgeClass: 'badge-psych',
    fillClass: 'fill-psych',
    modalTitle: 'AP Psychology',
    modalSub: 'Choose which section you\'d like to practice',
    options: [
      { icon:'🧩', label:'Multiple Choice (MCQ)', meta:'100 questions · timed · ~70 min', action:"closeModal();startMCQ('psych');" },
      { icon:'📝', label:'Free Response (FRQ)', meta:'Concept application · Research methods · AI graded', action:"closeModal();startWriting('psych');" },
    ],
    resultNote: 'MCQ = ~66% of AP Psych score. FRQ makes up the remaining ~34%.',
    breakdownLabel: 'Performance by unit',
    mcqTime: 70 * 60,
  },
  calc: {
    name: 'AP Precalculus',
    accentVar: '--calc-accent',
    accentVal: '#D97B4A',
    lightVar: '--calc-light',
    lightVal: '#FAE0CC',
    badgeClass: 'badge-calc',
    fillClass: 'fill-calc',
    modalTitle: 'AP Precalculus',
    modalSub: 'Choose which section you\'d like to practice',
    options: [
      { icon:'🔢', label:'Multiple Choice (MCQ)', meta:'40 questions · timed · ~40 min', action:"closeModal();startMCQ('calc');" },
      { icon:'📐', label:'Free Response (FRQ)', meta:'Functions · Modeling · AI graded', action:"closeModal();startWriting('calc');" },
    ],
    resultNote: 'MCQ = ~50% of AP Precalc score. FRQ makes up the remaining ~50%.',
    breakdownLabel: 'Performance by unit',
    mcqTime: 40 * 60,
  },
};

/* ═══════════════════════════════════════════════════════════
   SECTION C — SCREEN & NAV ROUTING
   ═══════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  if (id) document.getElementById(id).classList.add('active');
}
function showExamNav(label) {
  document.getElementById('exam-nav').classList.add('visible');
  document.getElementById('exam-nav-title').innerHTML =
    `${COURSE_CONFIG[activeCourse].name} &nbsp;/&nbsp; <b>${label}</b>`;
}
function hideExamNav() { document.getElementById('exam-nav').classList.remove('visible'); }
function goHome() {
  clearInterval(mcqTID); clearInterval(wTID);
  hideExamNav(); showScreen('s-home');
}

function openModal(course) {
  activeCourse = course;
  const cfg = COURSE_CONFIG[course];
  document.getElementById('modal-heading').textContent = cfg.modalTitle;
  document.getElementById('modal-sub').textContent = cfg.modalSub;
  let html = '';
  cfg.options.forEach(o => {
    html += `<button class="modal-option" style="--modal-accent:${cfg.accentVal};--modal-bg:${cfg.lightVal}20"
               onclick="${o.action}">
               <div class="modal-option-icon">${o.icon}</div>
               <div>
                 <div class="modal-option-label">${o.label}</div>
                 <div class="modal-option-meta">${o.meta}</div>
               </div>
               <div class="modal-option-arrow" style="color:${cfg.accentVal}">→</div>
             </button>`;
  });
  document.getElementById('modal-options').innerHTML = html;
  document.getElementById('modal-overlay').style.display = 'flex';
}
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

/* ═══════════════════════════════════════════════════════════
   SECTION D — MCQ LOGIC
   ═══════════════════════════════════════════════════════════ */
function startMCQ(course) {
  activeCourse = course;
  allQ    = ALL_QUESTIONS[course];
  cur     = 0;
  mcqAns  = new Array(allQ.length).fill(-1);
  mcqDone = false;
  mcqTime = COURSE_CONFIG[course].mcqTime;
  clearInterval(mcqTID);

  // Set course colours on MCQ screen
  const cfg = COURSE_CONFIG[course];
  document.getElementById('progress-fill').className = 'mcq-progress-fill ' + cfg.fillClass;
  document.getElementById('btn-mcq-submit').className = 'btn btn-accent btn-block btn-' + course;

  showScreen('s-mcq');
  showExamNav('Multiple Choice');
  renderQ();
  tickMCQTimer();
  mcqTID = setInterval(() => {
    mcqTime--;
    tickMCQTimer();
    if (mcqTime <= 0) { clearInterval(mcqTID); submitMCQ(); }
  }, 1000);
}
function retakeMCQ() { startMCQ(activeCourse); }

function tickMCQTimer() {
  const m = Math.floor(mcqTime / 60), s = mcqTime % 60;
  const el = document.getElementById('exam-timer');
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.className = 'exam-timer' + (mcqTime <= 300 ? ' urgent' : '');
}

function renderQ() {
  const q = allQ[cur], total = allQ.length;
  const answered = mcqAns.filter(a => a >= 0).length;
  document.getElementById('q-counter').textContent  = `Question ${cur+1} of ${total}`;
  document.getElementById('q-answered').textContent = `${answered} answered`;
  document.getElementById('progress-fill').style.width = `${Math.round((cur+1)/total*100)}%`;

  const LETTERS = ['A','B','C','D'];
  const cfg = COURSE_CONFIG[activeCourse];
  let html = '';
  if (q.first) {
    html += `<div class="set-badge ${cfg.badgeClass}">📋 ${q.period} &nbsp;·&nbsp; ${q.set}</div>`;
    // Show Calculator / No Calculator badge for all Precalc sets
    if (activeCourse === 'calc') {
      const setName = (q.set || '').toLowerCase();
      const isNoCalc = setName.includes('no calculator');
      const isCalc   = setName.includes('calculator active') || setName.includes('calculator ok') || setName.includes('official cb — calculator');
      if (isNoCalc || isCalc) {
        html += `<div style="display:inline-flex;align-items:center;gap:5px;font-family:'Nunito',sans-serif;font-size:11px;font-weight:800;padding:3px 10px;border-radius:10px;margin-bottom:8px;${isNoCalc?'background:rgba(192,69,58,0.09);color:#C0453A;border:1px solid rgba(192,69,58,0.2)':'background:rgba(58,140,82,0.09);color:#3A8C52;border:1px solid rgba(58,140,82,0.2)'}">${isNoCalc?'🚫 No Calculator':'✅ Calculator Active'}</div>`;
      }
    }
    html += `<div class="stimulus" style="border-left-color:${cfg.accentVal}">${q.stim.replace(/\n/g,'<br>')}
               <div class="stimulus-attr">Question set: ${q.set}</div></div>`;
  } else {
    html += `<div class="set-badge ${cfg.badgeClass}">📋 ${q.period} &nbsp;·&nbsp; ${q.set}
               <span style="opacity:.6;font-weight:500"> (continued)</span></div>`;
  }
  const choicesHtml = q.ch.map((c, i) => {
    let cls = 'choice';
    if (mcqDone) {
      if (i === q.ans) cls += ' correct';
      else if (mcqAns[cur] === i) cls += ' wrong';
    } else if (mcqAns[cur] === i) cls += ' selected';
    return `<button class="${cls}"
              onclick="pickAnswer(${i})"
              ${mcqDone ? 'disabled' : ''}
              style="--course-accent:${cfg.accentVal};--course-light:${cfg.lightVal}40">
              <span class="choice-letter">${LETTERS[i]}</span>
              <span class="choice-text">${c}</span>
            </button>`;
  }).join('');

  html += `<div class="qcard"><div class="qnum">Question ${cur+1} of ${total}</div>
             <div class="qtext">${q.q}</div>
             <div class="choices">${choicesHtml}</div></div>`;
  document.getElementById('q-area').innerHTML = html;

  document.getElementById('btn-prev').disabled = (cur === 0);
  document.getElementById('btn-next').style.display = cur < total-1 ? '' : 'none';
  document.getElementById('btn-mcq-submit').style.display =
    (!mcqDone && cur === total-1) ? 'block' : 'none';
}

function pickAnswer(i) {
  if (mcqDone) return;
  mcqAns[cur] = i;
  document.querySelectorAll('.choice').forEach((el, idx) =>
    el.classList.toggle('selected', idx === i)
  );
  const answered = mcqAns.filter(a => a >= 0).length;
  document.getElementById('q-answered').textContent = `${answered} answered`;
  if (cur === allQ.length - 1) document.getElementById('btn-mcq-submit').style.display = 'block';
}

function mcqNav(dir) {
  cur = Math.max(0, Math.min(allQ.length-1, cur+dir));
  renderQ();
}

function submitMCQ() {
  clearInterval(mcqTID);
  mcqDone = true;
  let correct = 0;
  allQ.forEach((q,i) => { if (mcqAns[i] === q.ans) correct++; });
  const pct = Math.round(correct / allQ.length * 100);

  document.getElementById('r-pct').textContent  = pct + '%';
  document.getElementById('r-raw').textContent  = `${correct} / ${allQ.length} correct`;
  document.getElementById('r-note').textContent = COURSE_CONFIG[activeCourse].resultNote;
  document.getElementById('r-breakdown-title').textContent = COURSE_CONFIG[activeCourse].breakdownLabel;

  const cfg = COURSE_CONFIG[activeCourse];
  let band, bg, fg;
  if      (pct >= 80) { band='Projected AP Score: 5 ⭐'; bg='rgba(58,140,82,0.12)'; fg='#3A8C52'; }
  else if (pct >= 65) { band='Projected AP Score: 4';    bg='rgba(74,144,217,0.12)'; fg='#4A90D9'; }
  else if (pct >= 50) { band='Projected AP Score: 3';    bg='rgba(212,144,43,0.12)'; fg='#D4902B'; }
  else if (pct >= 35) { band='Projected AP Score: 2';    bg='rgba(192,69,58,0.08)';  fg='#C0453A'; }
  else                { band='Projected AP Score: 1';    bg='rgba(192,69,58,0.06)';  fg='#C0453A'; }
  const bel = document.getElementById('r-band');
  bel.textContent = band; bel.style.background = bg;
  bel.style.color = fg; bel.style.border = `1.5px solid ${fg}55`;

  document.getElementById('results-home-btn').className = `btn btn-accent btn-${activeCourse}`;

  // Breakdown by period
  const periods = {};
  allQ.forEach((q,i) => {
    if (!periods[q.period]) periods[q.period] = {c:0, t:0};
    periods[q.period].t++;
    if (mcqAns[i] === q.ans) periods[q.period].c++;
  });
  document.getElementById('r-breakdown').innerHTML =
    Object.entries(periods).map(([p,d]) =>
      `<div class="period-row">
         <span style="font-size:14px">${p}</span>
         <span class="period-score" style="color:${cfg.accentVal}">
           ${d.c}/${d.t} &nbsp;<span style="color:var(--text-faint);font-weight:400">(${Math.round(d.c/d.t*100)}%)</span>
         </span>
       </div>`
    ).join('');

  const L = ['A','B','C','D'];
  document.getElementById('r-review').innerHTML =
    allQ.map((q,i) => {
      const ok = mcqAns[i] === q.ans;
      const ua = mcqAns[i] >= 0 ? L[mcqAns[i]] : '—';
      return `<div class="rev-item">
                <div class="rev-q"><strong>Q${i+1}:</strong> ${q.q}</div>
                <div class="${ok?'rev-ok':'rev-bad'}">${ok ? '✓ Correct' : `✗ You chose ${ua} · Correct: ${L[q.ans]}`}</div>
                ${!ok ? `<div class="rev-ans">Correct answer: ${q.ch[q.ans]}</div>` : ''}
              </div>`;
    }).join('');

  showExamNav('MCQ Results');
  showScreen('s-mcq-results');
}

/* ═══════════════════════════════════════════════════════════
   SECTION E — WRITING LOGIC
   ═══════════════════════════════════════════════════════════ */
function startWriting(course) {
  activeCourse = course;
  wTime = (course === 'world') ? 100*60 : 50*60;
  clearInterval(wTID);
  showScreen('s-writing-' + course);
  showExamNav('Free Response');
  tickWritingTimer();
  wTID = setInterval(() => { wTime--; tickWritingTimer(); if (wTime<=0) clearInterval(wTID); }, 1000);
  // Reset tabs to first
  const tabs = document.querySelectorAll(`#s-writing-${course} .wtab`);
  const contents = document.querySelectorAll(`#s-writing-${course} .tab-content`);
  tabs.forEach((t,i) => { t.classList.toggle('active', i===0); t.setAttribute('aria-selected', i===0?'true':'false'); });
  contents.forEach((c,i) => c.classList.toggle('active', i===0));
}

function tickWritingTimer() {
  const h=Math.floor(wTime/3600), m=Math.floor((wTime%3600)/60), s=wTime%60;
  const el=document.getElementById('exam-timer');
  el.textContent = h>0
    ? `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
    : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.className = 'exam-timer' + (wTime<=300?' urgent':'');
}

function showWritingTab(course, id) {
  const screen = document.getElementById('s-writing-' + course);
  screen.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  screen.querySelectorAll('.wtab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
  document.getElementById('tc-' + course + '-' + id).classList.add('active');
  const tabBtn = document.getElementById('tab-' + course + '-' + id);
  tabBtn.classList.add('active'); tabBtn.setAttribute('aria-selected','true');
}

function updateWC(id) {
  const text = document.getElementById(id + '-ans').value.trim();
  const count = text ? text.split(/\s+/).length : 0;
  document.getElementById(id + '-wc').textContent = count + ' word' + (count===1?'':'s');
}

function setLEQ(course, n) {
  leqSelections[course] = n;
  const labels = {
    1: '✓ Option 1 selected — Mongol Empire &amp; Eurasian trade (c. 1200–1450)',
    2: '✓ Option 2 selected — Columbian Exchange &amp; Americas/Europe economies (c. 1450–1750)',
    3: '✓ Option 3 selected — Nationalism &amp; political change in Europe/Americas (c. 1750–1900)',
  };
  const el = document.getElementById(course + '-leq-hint');
  el.innerHTML = labels[n];
  el.style.color = COURSE_CONFIG[course].accentVal;
  el.style.background = COURSE_CONFIG[course].lightVal + '60';
  el.style.fontStyle = 'normal';
}

/* ═══════════════════════════════════════════════════════════
   SECTION F — AI GRADING
   ═══════════════════════════════════════════════════════════ */

const GRADE_CONFIG = {
  world: {
    saq: {
      maxPts: 3,
      system: `You are an experienced College Board AP World History exam reader.
Grade this SAQ strictly using the official rubric. 3 parts, 1 point each.
Award credit ONLY for specific, historically accurate content.
Return ONLY valid JSON (no markdown, no extra text):
{"part_a":{"score":0,"feedback":"one sentence"},
 "part_b":{"score":0,"feedback":"one sentence"},
 "part_c":{"score":0,"feedback":"one sentence"},
 "total":0,
 "overall":"two sentences: one strength, one specific suggestion"}`,
      catLabels: { part_a:'Part (a)', part_b:'Part (b)', part_c:'Part (c)' },
      catMax:    { part_a:1, part_b:1, part_c:1 },
    },
    dbq: {
      maxPts: 7,
      system: `You are an experienced College Board AP World History exam reader.
Grade this DBQ using the official 7-point rubric.
Prompt: "Evaluate the extent to which the Industrial Revolution transformed social and economic structures 1750–1900."
Documents: Ure 1835, mill worker 1832, Engels 1845, Chadwick 1842, Smiles 1859, Marx/Engels 1848, Japanese govt 1890.
Return ONLY valid JSON (no markdown):
{"thesis":{"score":0,"feedback":"one sentence"},
 "contextualization":{"score":0,"feedback":"one sentence"},
 "document_content":{"score":0,"feedback":"one sentence — note: out of 2"},
 "outside_evidence":{"score":0,"feedback":"one sentence"},
 "sourcing":{"score":0,"feedback":"one sentence"},
 "complexity":{"score":0,"feedback":"one sentence"},
 "total":0,
 "overall":"two sentences: one strength, one specific suggestion"}`,
      catLabels: { thesis:'Thesis', contextualization:'Contextualization', document_content:'Document evidence', outside_evidence:'Outside evidence', sourcing:'Sourcing (HAPP)', complexity:'Complexity' },
      catMax:    { thesis:1, contextualization:1, document_content:2, outside_evidence:1, sourcing:1, complexity:1 },
    },
    leq: {
      maxPts: 6,
      getSystem: (n) => `You are an experienced College Board AP World History exam reader.
Grade this LEQ using the official 6-point rubric.
The student chose Option ${n}: ${n===1?'Mongol Empire and Eurasian trade (c. 1200–1450)':n===2?'Columbian Exchange and economies of the Americas/Europe (c. 1450–1750)':'Nationalism and political change in Europe/Americas (c. 1750–1900)'}.
Return ONLY valid JSON (no markdown):
{"thesis":{"score":0,"feedback":"one sentence"},
 "contextualization":{"score":0,"feedback":"one sentence"},
 "evidence":{"score":0,"feedback":"one sentence — note: out of 2"},
 "historical_reasoning":{"score":0,"feedback":"one sentence"},
 "complexity":{"score":0,"feedback":"one sentence"},
 "total":0,
 "overall":"two sentences: one strength, one specific suggestion"}`,
      catLabels: { thesis:'Thesis', contextualization:'Contextualization', evidence:'Evidence', historical_reasoning:'Historical reasoning', complexity:'Complexity' },
      catMax:    { thesis:1, contextualization:1, evidence:2, historical_reasoning:1, complexity:1 },
    },
  },
  bio: {
    frq1: {
      maxPts: 10,
      system: `You are an experienced AP Biology exam reader grading the 2022 AP Bio FRQ #1.
Grade this FRQ on cellular respiration (glycolysis, Krebs cycle, ETC, fermentation) using the official AP Biology rubric standards.
Parts: (a) glycolysis location + fate of pyruvate with O₂, (b) two electron carriers + role in ATP synthesis, (c) effect of Complex I blockage on proton gradient + ATP yield, (d) lactic acid fermentation description + necessity.
Return ONLY valid JSON (no markdown):
{"part_a":{"score":0,"feedback":"one sentence","max":2},
 "part_b":{"score":0,"feedback":"one sentence","max":2},
 "part_c":{"score":0,"feedback":"one sentence","max":3},
 "part_d":{"score":0,"feedback":"one sentence","max":2},
 "communication":{"score":0,"feedback":"one sentence","max":1},
 "total":0,
 "overall":"two sentences: one strength, one specific improvement"}`,
      catLabels: { part_a:'(a) Glycolysis & pyruvate', part_b:'(b) Electron carriers', part_c:'(c) Complex I blockage', part_d:'(d) Fermentation', communication:'Scientific communication' },
      catMax: { part_a:2, part_b:2, part_c:3, part_d:2, communication:1 },
    },
    frq2: {
      maxPts: 6,
      system: `You are an experienced AP Biology exam reader grading the 2019 AP Bio FRQ #2.
Grade this FRQ on Mendelian genetics (pea plant flower color) using AP Biology rubric standards.
Parts: (a) dominant/recessive identification with evidence, (b) genotypes of parents and F1 with reasoning, (c) genotype of true-breeding F2 purple plant + explanation, (d) independent assortment + Mendel's Law.
Return ONLY valid JSON (no markdown):
{"part_a":{"score":0,"feedback":"one sentence","max":1},
 "part_b":{"score":0,"feedback":"one sentence","max":2},
 "part_c":{"score":0,"feedback":"one sentence","max":1},
 "part_d":{"score":0,"feedback":"one sentence","max":2},
 "total":0,
 "overall":"two sentences: one strength, one specific improvement"}`,
      catLabels: { part_a:'(a) Dominant/recessive', part_b:'(b) Genotypes', part_c:'(c) F₂ genotype', part_d:'(d) Independent assortment' },
      catMax: { part_a:1, part_b:2, part_c:1, part_d:2 },
    },
  },
  psych: {
    frq1: {
      maxPts: 7,
      system: `You are an experienced AP Psychology exam reader.
Grade this FRQ (concept application to Maya scenario) using AP Psychology rubric standards.
Each part requires correct DEFINITION + APPLICATION to earn full credit. Definitions alone = partial credit.
Parts: (a) encoding specificity, (b) serial position effect, (c) cortisol and stress, (d) spaced practice, (e) hippocampus/explicit memory.
Return ONLY valid JSON (no markdown):
{"part_a":{"score":0,"feedback":"one sentence"},
 "part_b":{"score":0,"feedback":"one sentence"},
 "part_c":{"score":0,"feedback":"one sentence"},
 "part_d":{"score":0,"feedback":"one sentence"},
 "part_e":{"score":0,"feedback":"one sentence"},
 "total":0,
 "overall":"two sentences: one strength, one specific improvement"}`,
      catLabels: { part_a:'(a) Encoding specificity', part_b:'(b) Serial position effect', part_c:'(c) Cortisol & stress', part_d:'(d) Spaced practice', part_e:'(e) Memory structure' },
      catMax: { part_a:1, part_b:1, part_c:2, part_d:2, part_e:1 },
    },
    frq2: {
      maxPts: 7,
      system: `You are an experienced AP Psychology exam reader.
Grade this FRQ (research methods — Mozart/math experiment) using AP Psychology rubric standards.
Parts: (a) IV/DV identification, (b) random assignment purpose, (c) causation reasoning, (d) placebo effect, (e) APA ethical principle.
Return ONLY valid JSON (no markdown):
{"part_a":{"score":0,"feedback":"one sentence"},
 "part_b":{"score":0,"feedback":"one sentence"},
 "part_c":{"score":0,"feedback":"one sentence"},
 "part_d":{"score":0,"feedback":"one sentence"},
 "part_e":{"score":0,"feedback":"one sentence"},
 "total":0,
 "overall":"two sentences: one strength, one specific improvement"}`,
      catLabels: { part_a:'(a) IV/DV identification', part_b:'(b) Random assignment', part_c:'(c) Causation', part_d:'(d) Placebo effect', part_e:'(e) APA ethics' },
      catMax: { part_a:2, part_b:1, part_c:1, part_d:1, part_e:2 },
    },
  },
  calc: {
    frq1: {
      maxPts: 6,
      system: `You are an experienced AP Precalculus exam reader grading the 2024 AP Precalc FRQ #1 (No Calculator).
Grade this FRQ on polynomial functions p(x) = −(x+1)(x−1)(x−3)² using AP Precalculus rubric standards.
Parts: (a) relationship between p and q (reflection), (b) end behavior with degree/leading coefficient reasoning, (c) crossing vs. touching at each zero using multiplicity, (d) local max location + increasing intervals.
Return ONLY valid JSON (no markdown):
{"part_a":{"score":0,"feedback":"one sentence"},
 "part_b":{"score":0,"feedback":"one sentence"},
 "part_c":{"score":0,"feedback":"one sentence"},
 "part_d":{"score":0,"feedback":"one sentence"},
 "total":0,
 "overall":"two sentences: one strength, one specific improvement"}`,
      catLabels: { part_a:'(a) p vs. q relationship', part_b:'(b) End behavior', part_c:'(c) Zero behavior/multiplicity', part_d:'(d) Local max + intervals' },
      catMax: { part_a:1, part_b:2, part_c:2, part_d:1 },
    },
    frq2: {
      maxPts: 6,
      system: `You are an experienced AP Precalculus exam reader grading the 2024 AP Precalc FRQ #2 (Calculator).
Grade this FRQ on sinusoidal modeling of tidal water depth using AP Precalculus rubric standards.
Parts: (a) amplitude, midline, period with explanations, (b) equation for d(t), (c) depth at t=4, (d) time intervals when depth ≥ 8 ft.
Return ONLY valid JSON (no markdown):
{"part_a":{"score":0,"feedback":"one sentence"},
 "part_b":{"score":0,"feedback":"one sentence"},
 "part_c":{"score":0,"feedback":"one sentence"},
 "part_d":{"score":0,"feedback":"one sentence"},
 "total":0,
 "overall":"two sentences: one strength, one specific improvement"}`,
      catLabels: { part_a:'(a) Amplitude, midline, period', part_b:'(b) Equation d(t)', part_c:'(c) Depth at t=4', part_d:'(d) Safe docking intervals' },
      catMax: { part_a:2, part_b:1, part_c:1, part_d:2 },
    },
  },
};

async function gradeEssay(course, type) {
  const key = course + '-' + type;
  if (grading[key]) return;

  const answer = document.getElementById(key + '-ans').value.trim();
  if (answer.length < 80) {
    document.getElementById(key + '-fb').innerHTML =
      `<div class="feedback-card" style="color:var(--red)">Please write a more complete response before grading.</div>`;
    return;
  }

  // LEQ requires selection
  if (type === 'leq' && (!leqSelections[course] || leqSelections[course] === 0)) {
    document.getElementById(key + '-fb').innerHTML =
      `<div class="feedback-card" style="color:var(--red)">Please select a prompt above before grading.</div>`;
    return;
  }

  grading[key] = true;
  const btn = document.getElementById(key + '-btn');
  btn.disabled = true; btn.textContent = 'Grading…';
  document.getElementById(key + '-fb').innerHTML =
    `<div class="feedback-card loading-state">
       <div class="spinner" style="border-top-color:${COURSE_CONFIG[course].accentVal}"></div>
       Grading with the official rubric…
     </div>`;

  const cfg = GRADE_CONFIG[course][type];
  const systemPrompt = cfg.getSystem
    ? cfg.getSystem(leqSelections[course] || 1)
    : cfg.system;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 900,
        system: systemPrompt,
        messages: [{ role: 'user', content: `Student response:\n\n${answer}` }],
      }),
    });
    const data = await res.json();
    let raw = data.content.map(b => b.text || '').join('').trim();
    raw = raw.replace(/^```json\s*/g,'').replace(/^```\s*/g,'').replace(/```\s*$/g,'').trim();
    const parsed = JSON.parse(raw);
    renderFeedback(course, type, parsed, cfg.maxPts, cfg.catLabels, cfg.catMax);
    document.getElementById('tab-' + key).classList.add('graded');
  } catch(err) {
    document.getElementById(key + '-fb').innerHTML =
      `<div class="feedback-card" style="color:var(--red)">Grading failed — please check your connection and try again.</div>`;
    console.error('Grading error:', err);
  }

  grading[key] = false;
  btn.disabled = false;
  btn.textContent = '↺ Regrade response';
}

function renderFeedback(course, type, data, maxPoints, catLabels, catMax) {
  const pct = Math.round(data.total / maxPoints * 100);
  const scoreColor = pct >= 70 ? 'var(--green)' : pct >= 50 ? 'var(--amber)' : 'var(--red)';
  const perfLabel  = pct >= 70 ? 'Strong performance' : pct >= 50 ? 'Developing' : 'Needs work';

  const rows = Object.entries(catLabels).map(([key, label]) => {
    if (!data[key]) return '';
    const item = data[key];
    const max = catMax[key];
    const passed = item.score > 0;
    return `<div class="fb-row">
              <span class="fb-label">${label}</span>
              <span class="fb-note">${item.feedback}</span>
              <span class="fb-pill ${passed?'pill-pass':'pill-fail'}">${item.score}/${max}</span>
            </div>`;
  }).join('');

  const key = course + '-' + type;
  document.getElementById(key + '-fb').innerHTML = `
    <div class="feedback-card">
      <div class="fb-header">
        <div>
          <div class="fb-score-num" style="color:${scoreColor}">
            ${data.total}<span style="font-size:26px;color:var(--text-faint)"> / ${maxPoints}</span>
          </div>
          <div class="fb-score-label">${pct}% &nbsp;·&nbsp; ${perfLabel}</div>
        </div>
        <div class="fb-overall">${data.overall}</div>
      </div>
      <div class="fb-breakdown">${rows}</div>
    </div>`;
}

/* ── SECTION B: REVIEW DRAWER ────────────────────────────── */
// ── Supabase (review drawer) ────────────────────────────────
  // ─────────────────────────────────────────────────────────────
  // SUPABASE CREDENTIALS — paste your values here if you change them
  // ─────────────────────────────────────────────────────────────
  const REVIEW_SUPABASE_URL  = 'https://jvmmtlsbokazwvdhzdhz.supabase.co'; // ← Project URL
  const REVIEW_SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bW10bHNib2thend2ZGh6ZGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MTIzMzEsImV4cCI6MjA5Mjk4ODMzMX0.V4KVdY4gbGLJkUoaBLMJCO910yfBmgZlIOAz2ziT9ec'; // ← Anon key
  // ─────────────────────────────────────────────────────────────

  const { createClient: createReviewClient } = supabase;
  const reviewDb = createReviewClient(REVIEW_SUPABASE_URL, REVIEW_SUPABASE_ANON);

  // ── Drawer open / close ─────────────────────────────────────
  function openReviewDrawer() {
    document.getElementById('review-drawer').classList.add('open');
    document.getElementById('review-backdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('review-drawer-input').focus(), 420);
  }

  function closeReviewDrawer() {
    document.getElementById('review-drawer').classList.remove('open');
    document.getElementById('review-backdrop').classList.remove('open');
    document.body.style.overflow = '';
  }

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeReviewDrawer();
  });

  // ── Char counter ────────────────────────────────────────────
  document.getElementById('review-drawer-input').addEventListener('input', function() {
    const len = this.value.length;
    const counter = document.getElementById('review-char-count');
    counter.textContent = `${len} / 1000`;
    counter.classList.toggle('warn', len > 800);
  });

  // ── Submit ──────────────────────────────────────────────────
  async function submitReviewDrawer() {
    const message = document.getElementById('review-drawer-input').value.trim();

    document.getElementById('review-status-success').classList.remove('show');
    document.getElementById('review-status-error').classList.remove('show');

    if (!message || message.length < 5) {
      reviewShowError('Please write something before submitting.');
      return;
    }

    reviewSetLoading(true);

    const { error } = await reviewDb
      .from('reviews')      // ← table name
      .insert({ message }); // ← inserts into `message` column; created_at defaults to now()

    reviewSetLoading(false);

    if (error) {
      console.error('Supabase review error:', error);
      reviewShowError('Submission failed: ' + (error.message || 'unknown error'));
    } else {
      document.getElementById('review-status-success').classList.add('show');
      document.getElementById('review-drawer-input').value = '';
      document.getElementById('review-char-count').textContent = '0 / 1000';
    }
  }

  function reviewSetLoading(on) {
    const btn = document.getElementById('review-submit-btn');
    document.getElementById('review-btn-label').innerHTML = on
      ? '<div class="review-spinner"></div> Submitting…'
      : 'Send Feedback';
    btn.disabled = on;
  }

  function reviewShowError(msg) {
    document.getElementById('review-error-msg').textContent = msg;
    document.getElementById('review-status-error').classList.add('show');
  }

/* ── SECTION C: AUTH & ANNOUNCEMENTS ─────────────────────── */
// ─────────────────────────────────────────────────────────
  // SUPABASE CREDENTIALS
  // ─────────────────────────────────────────────────────────
  const AUTH_URL  = 'https://jvmmtlsbokazwvdhzdhz.supabase.co'; // ← Project URL
  const AUTH_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bW10bHNib2thend2ZGh6ZGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MTIzMzEsImV4cCI6MjA5Mjk4ODMzMX0.V4KVdY4gbGLJkUoaBLMJCO910yfBmgZlIOAz2ziT9ec'; // ← Anon key
  // ─────────────────────────────────────────────────────────

  const { createClient: createAuthClient } = supabase;
  const authDb = createAuthClient(AUTH_URL, AUTH_ANON);

  let authMode = 'login';

  // ── Drawer open / close ───────────────────────────────────
  function openAuthDrawer() {
    document.getElementById('auth-drawer').classList.add('open');
    document.getElementById('auth-backdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('auth-email').focus(), 420);
  }

  function closeAuthDrawer() {
    document.getElementById('auth-drawer').classList.remove('open');
    document.getElementById('auth-backdrop').classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAuthDrawer();
  });

  // ── Tab switcher ──────────────────────────────────────────
  function switchAuthTab(mode) {
    authMode = mode;
    document.getElementById('tab-login').classList.toggle('active',  mode === 'login');
    document.getElementById('tab-signup').classList.toggle('active', mode === 'signup');
    document.getElementById('auth-btn-label').textContent = mode === 'login' ? 'Log In' : 'Create Account';
    document.getElementById('auth-password').autocomplete = mode === 'login' ? 'current-password' : 'new-password';
    clearAuthStatus();
  }

  // ── Handle submit ─────────────────────────────────────────
  async function handleAuth() {
    const email    = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;

    clearAuthStatus();

    if (!email || !password) {
      showAuthStatus('error', '✕  Please enter your email and password.');
      return;
    }
    if (password.length < 6) {
      showAuthStatus('error', '✕  Password must be at least 6 characters.');
      return;
    }

    setAuthLoading(true);

    if (authMode === 'login') {
      const { data, error } = await authDb.auth.signInWithPassword({ email, password });
      setAuthLoading(false);
      if (error) {
        showAuthStatus('error', '✕  ' + friendlyError(error.message));
      } else {
        onSignedIn(data.user);
      }
    } else {
      const { data, error } = await authDb.auth.signUp({ email, password });
      setAuthLoading(false);
      if (error) {
        showAuthStatus('error', '✕  ' + friendlyError(error.message));
      } else if (data.user && data.user.identities && data.user.identities.length === 0) {
        showAuthStatus('error', '✕  An account with that email already exists. Try logging in.');
      } else {
        showAuthStatus('success', '✓  Account created! Check your email to confirm, then log in.');
        switchAuthTab('login');
      }
    }
  }

  // ── Sign out ──────────────────────────────────────────────
  async function handleSignOut() {
    await authDb.auth.signOut();
    onSignedOut();
  }

  // ── After successful sign-in ──────────────────────────────
  function onSignedIn(user) {
    // Close the drawer
    closeAuthDrawer();

    // Swap Sign In button → user pill
    const email   = user.email || '';
    const initial = email.charAt(0).toUpperCase();
    document.getElementById('nav-user-avatar').textContent = initial;
    document.getElementById('nav-user-email').textContent  = email;
    document.getElementById('nav-signin-btn').style.display = 'none';
    document.getElementById('nav-user-pill').style.display  = 'flex';

    // Clear fields
    document.getElementById('auth-email').value    = '';
    document.getElementById('auth-password').value = '';
    clearAuthStatus();
  }

  // ── After sign-out ────────────────────────────────────────
  function onSignedOut() {
    // Swap user pill → Sign In button
    document.getElementById('nav-user-pill').style.display  = 'none';
    document.getElementById('nav-signin-btn').style.display = 'flex';
  }

  // ── Restore session on page load ──────────────────────────
  (async () => {
    const { data: { session } } = await authDb.auth.getSession();
    if (session && session.user) {
      onSignedIn(session.user);
    }
  })();

  // ── Helpers ───────────────────────────────────────────────
  function setAuthLoading(on) {
    const btn = document.getElementById('auth-submit-btn');
    document.getElementById('auth-btn-label').innerHTML = on
      ? '<div class="auth-spinner"></div> ' + (authMode === 'login' ? 'Logging in…' : 'Creating account…')
      : (authMode === 'login' ? 'Log In' : 'Create Account');
    btn.disabled = on;
  }

  function showAuthStatus(type, msg) {
    const el = document.getElementById('auth-status');
    el.className = 'auth-status ' + type + ' show';
    el.textContent = msg;
  }

  function clearAuthStatus() {
    const el = document.getElementById('auth-status');
    el.className = 'auth-status';
    el.textContent = '';
  }

  function friendlyError(msg) {
    if (!msg) return 'Something went wrong. Please try again.';
    if (msg.includes('Invalid login credentials')) return 'Incorrect email or password.';
    if (msg.includes('Email not confirmed'))       return 'Please confirm your email before logging in.';
    if (msg.includes('User already registered'))   return 'An account with that email already exists.';
    if (msg.includes('Password should be'))        return 'Password must be at least 6 characters.';
    if (msg.includes('Unable to validate'))        return 'Invalid email address.';
    return msg;
  }


  // ── Announcements Drawer ──────────────────────────────────
  function openAnnouncementsDrawer() {
    document.getElementById('announce-drawer').classList.add('open');
    document.getElementById('announce-backdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeAnnouncementsDrawer() {
    document.getElementById('announce-drawer').classList.remove('open');
    document.getElementById('announce-backdrop').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeAnnouncementsDrawer();
    }
  });

  // Enter key submits
  ['auth-email', 'auth-password'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') handleAuth();
    });
  });
