export interface QuizTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  questions: {
    type: "multiple-choice" | "constructed-response";
    question: string;
    options?: string[];
    acceptableAnswers: string[];
    explanation?: string;
  }[];
}

export const quizTemplates: QuizTemplate[] = [
  {
    id: "progressive-era-imperialism-review",
    name: "Labor, Reform, and American Imperialism Quiz",
    category: "US History",
    description:
      "A comprehensive review of the Progressive Era, Muckrakers, Political Reforms, and the rise of American Imperialism.",
    questions: [
      {
        type: "multiple-choice",
        question:
          "What was a primary reason workers began to organize into unions during the late 19th century?",
        options: [
          "To support business owners",
          "To fight for shorter work hours and safer conditions",
          "To promote child labor",
          "To decrease their wages",
        ],
        acceptableAnswers: [
          "To fight for shorter work hours and safer conditions",
        ],
        explanation:
          "Workers unionized to demand 8-hour workdays, better pay, and safer environments.",
      },
      {
        type: "multiple-choice",
        question:
          "Which term describes the process of negotiating as a group for better contracts?",
        options: [
          "Individualism",
          "Collective bargaining",
          "Yellow journalism",
          "Monopoly",
        ],
        acceptableAnswers: ["Collective bargaining"],
        explanation:
          "Collective bargaining is when workers negotiate as a group rather than individually.",
      },
      {
        type: "multiple-choice",
        question: "What is a 'strike' in the context of labor movements?",
        options: [
          "A method of voting",
          "Refusing to work until demands are met",
          "A government law protecting bosses",
          "A way to hire more workers",
        ],
        acceptableAnswers: ["Refusing to work until demands are met"],
        explanation:
          "A strike is a work stoppage used by unions to pressure employers.",
      },
      {
        type: "multiple-choice",
        question: "How did the federal government react to the Pullman Strike?",
        options: [
          "They supported the workers",
          "They remained neutral",
          "They used federal troops to break up the strike",
          "They raised wages for everyone",
        ],
        acceptableAnswers: ["They used federal troops to break up the strike"],
        explanation:
          "Initially, the government sided with business owners and used military force to stop strikes.",
      },
      {
        type: "multiple-choice",
        question:
          "Which President mediated the 1902 Coal Strike, showing a shift in government involvement?",
        options: [
          "William McKinley",
          "Theodore Roosevelt",
          "Woodrow Wilson",
          "Abraham Lincoln",
        ],
        acceptableAnswers: ["Theodore Roosevelt"],
        explanation:
          "Theodore Roosevelt's involvement signaled the start of the government acting as a mediator.",
      },
      {
        type: "multiple-choice",
        question: "What were 'tenements' in late 19th-century cities?",
        options: [
          "Luxury hotels",
          "Government offices",
          "Small, overcrowded slum apartments",
          "Large factories",
        ],
        acceptableAnswers: ["Small, overcrowded slum apartments"],
        explanation:
          "Tenements were poor-quality, overcrowded housing units common in urban areas.",
      },
      {
        type: "multiple-choice",
        question:
          "Who used photography in 'How the Other Half Lives' to expose poor living conditions?",
        options: [
          "Upton Sinclair",
          "Ida Tarbell",
          "Jacob Riis",
          "Lincoln Steffens",
        ],
        acceptableAnswers: ["Jacob Riis"],
        explanation:
          "Jacob Riis used photojournalism to show the public the horrors of tenement life.",
      },
      {
        type: "multiple-choice",
        question: "What defines a 'muckraker'?",
        options: [
          "A corrupt politician",
          "An investigative journalist who exposes social ills",
          "A factory owner",
          "A person who cleans city streets",
        ],
        acceptableAnswers: [
          "An investigative journalist who exposes social ills",
        ],
        explanation:
          "Muckrakers wrote about corruption, poverty, and unsafe conditions to spark reform.",
      },
      {
        type: "multiple-choice",
        question: "What was the impact of Upton Sinclair's book 'The Jungle'?",
        options: [
          "It led to the 17th Amendment",
          "It exposed corruption in Standard Oil",
          "It led to the Meat Inspection Act",
          "It started the Spanish-American War",
        ],
        acceptableAnswers: ["It led to the Meat Inspection Act"],
        explanation:
          "The Jungle exposed unsanitary meatpacking, leading to the Meat Inspection Act and Pure Food and Drug Act.",
      },
      {
        type: "multiple-choice",
        question:
          "Which muckraker exposed political corruption in city governments in 'The Shame of the Cities'?",
        options: [
          "Lincoln Steffens",
          "Ida B. Wells",
          "Ida Tarbell",
          "Jacob Riis",
        ],
        acceptableAnswers: ["Lincoln Steffens"],
        explanation:
          "Steffens focused on the corruption of municipal (city) political machines.",
      },
      {
        type: "multiple-choice",
        question:
          "Who was a co-founder of the NAACP and pushed for immediate racial equality?",
        options: [
          "Upton Sinclair",
          "W.E.B. Du Bois",
          "Theodore Roosevelt",
          "Ida Tarbell",
        ],
        acceptableAnswers: ["W.E.B. Du Bois"],
        explanation:
          "Du Bois advocated for immediate civil rights and helped establish the NAACP.",
      },
      {
        type: "multiple-choice",
        question: "What did Ida Tarbell expose in her investigative writing?",
        options: [
          "The horrors of lynching",
          "Unfair business practices of Standard Oil",
          "Meatpacking conditions",
          "Slum housing",
        ],
        acceptableAnswers: ["Unfair business practices of Standard Oil"],
        explanation:
          "Ida Tarbell's work contributed to the eventual breakup of the Standard Oil monopoly.",
      },
      {
        type: "multiple-choice",
        question:
          "Ida B. Wells is best known for her crusade against which social horror?",
        options: [
          "Child labor",
          "Alcohol consumption",
          "Lynching",
          "Political bosses",
        ],
        acceptableAnswers: ["Lynching"],
        explanation:
          "Ida B. Wells was a prominent journalist who documented and campaigned against lynching.",
      },
      {
        type: "multiple-choice",
        question: "What was the purpose of the 16th Amendment?",
        options: [
          "To ban alcohol",
          "To grant women the right to vote",
          "To create a Federal Income Tax",
          "To allow direct election of senators",
        ],
        acceptableAnswers: ["To create a Federal Income Tax"],
        explanation:
          "The 16th Amendment gave the government a steady source of income and reduced reliance on tariffs.",
      },
      {
        type: "multiple-choice",
        question: "How did the 17th Amendment make the Senate more democratic?",
        options: [
          "It allowed people to vote directly for Senators",
          "It gave Senators 10-year terms",
          "It allowed the President to appoint Senators",
          "It abolished the Senate",
        ],
        acceptableAnswers: ["It allowed people to vote directly for Senators"],
        explanation:
          "Previously, state legislatures chose Senators; the 17th Amendment gave that power to the voters.",
      },
      {
        type: "multiple-choice",
        question: "What was Tammany Hall?",
        options: [
          "A famous labor union",
          "A corrupt political machine in New York City",
          "A national park",
          "A major steel factory",
        ],
        acceptableAnswers: ["A corrupt political machine in New York City"],
        explanation:
          "Tammany Hall used jobs and housing to get votes from immigrants while stealing taxpayer money.",
      },
      {
        type: "multiple-choice",
        question:
          "What is the main goal of antitrust laws like the Sherman Antitrust Act?",
        options: [
          "To protect monopolies",
          "To break up trusts and ensure fair competition",
          "To increase taxes on the poor",
          "To discourage international trade",
        ],
        acceptableAnswers: ["To break up trusts and ensure fair competition"],
        explanation:
          "Antitrust laws were designed to prevent single companies (monopolies) from controlling entire industries.",
      },
      {
        type: "multiple-choice",
        question:
          "Which political reform allows citizens to propose a new law directly?",
        options: ["Referendum", "Recall", "Initiative", "Injunction"],
        acceptableAnswers: ["Initiative"],
        explanation:
          "An initiative allows citizens to bypass the legislature and propose laws themselves.",
      },
      {
        type: "multiple-choice",
        question:
          "Which political reform allows citizens to vote on an existing law?",
        options: ["Referendum", "Initiative", "Recall", "Primary"],
        acceptableAnswers: ["Referendum"],
        explanation:
          "A referendum is a direct vote by the people on a specific law or proposal.",
      },
      {
        type: "multiple-choice",
        question: "What does the 'Recall' process allow voters to do?",
        options: [
          "Vote twice",
          "Remove an elected official from office",
          "Change the Constitution",
          "Veto a President's decision",
        ],
        acceptableAnswers: ["Remove an elected official from office"],
        explanation:
          "The recall allows voters to remove an official before their term has ended.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did the U.S. pursue imperialism in the late 19th century?",
        options: [
          "To isolate itself from the world",
          "To find new markets and raw materials",
          "To give away American land",
          "To decrease the size of the Navy",
        ],
        acceptableAnswers: ["To find new markets and raw materials"],
        explanation:
          "The U.S. needed new markets for goods and resources for its growing factories.",
      },
      {
        type: "multiple-choice",
        question: "What was the 'Big Stick' Policy?",
        options: [
          "Using the military to conquer Canada",
          "Peaceful negotiation backed by the threat of a powerful Navy",
          "Refusing to talk to other countries",
          "Giving money to European banks",
        ],
        acceptableAnswers: [
          "Peaceful negotiation backed by the threat of a powerful Navy",
        ],
        explanation:
          "Roosevelt's policy was 'speak softly and carry a big stick,' meaning use diplomacy but be ready with force.",
      },
      {
        type: "multiple-choice",
        question:
          "Which style of reporting used sensationalized and exaggerated stories to sell newspapers?",
        options: [
          "Muckraking",
          "Yellow Journalism",
          "Objective Journalism",
          "Scientific Reporting",
        ],
        acceptableAnswers: ["Yellow Journalism"],
        explanation:
          "Yellow journalism, practiced by Hearst and Pulitzer, helped stir up public support for the Spanish-American War.",
      },
      {
        type: "multiple-choice",
        question:
          "What event in Havana Harbor was a major cause of the Spanish-American War?",
        options: [
          "The sinking of the Lusitania",
          "The explosion of the USS Maine",
          "A Spanish invasion of Florida",
          "The Battle of Midway",
        ],
        acceptableAnswers: ["The explosion of the USS Maine"],
        explanation:
          "The mysterious explosion of the USS Maine was blamed on Spain, leading to war.",
      },
      {
        type: "multiple-choice",
        question:
          "Which territories did the U.S. gain as a result of the Spanish-American War?",
        options: [
          "Hawaii, Alaska, and Texas",
          "Guam, Puerto Rico, and the Philippines",
          "Cuba, Mexico, and Panama",
          "California and Oregon",
        ],
        acceptableAnswers: ["Guam, Puerto Rico, and the Philippines"],
        explanation:
          "After the war, the U.S. became a world power with these new overseas territories.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did many Filipinos feel betrayed by the United States after the Spanish-American War?",
        options: [
          "The U.S. refused to trade with them",
          "The U.S. annexed the Philippines instead of granting independence",
          "The U.S. returned them to Spain",
          "The U.S. forced them to move to Guam",
        ],
        acceptableAnswers: [
          "The U.S. annexed the Philippines instead of granting independence",
        ],
        explanation:
          "Filipinos expected independence; when the U.S. took control, a three-year war broke out.",
      },
      {
        type: "multiple-choice",
        question: "What was the Roosevelt Corollary to the Monroe Doctrine?",
        options: [
          "A plan to invade Europe",
          "A statement that the U.S. would act as a 'police power' in Latin America",
          "An agreement to share the Panama Canal with Spain",
          "A ban on all immigration from Asia",
        ],
        acceptableAnswers: [
          "A statement that the U.S. would act as a 'police power' in Latin America",
        ],
        explanation:
          "The Corollary stated the U.S. would intervene in Latin American affairs to keep Europeans out.",
      },
      {
        type: "multiple-choice",
        question: "What was the main reason for building the Panama Canal?",
        options: [
          "To provide jobs for Panamanians",
          "To create a shortcut between the Atlantic and Pacific Oceans",
          "To stop the spread of yellow fever",
          "To build a bridge to South America",
        ],
        acceptableAnswers: [
          "To create a shortcut between the Atlantic and Pacific Oceans",
        ],
        explanation:
          "The canal was a vital shortcut for trade and moving the U.S. Navy quickly between oceans.",
      },
      {
        type: "multiple-choice",
        question: "Why did the U.S. acquire Hawaii?",
        options: [
          "To use it as a penal colony",
          "For its oil reserves",
          "To serve as a naval base (Pearl Harbor) and protect sugar interests",
          "Because the Hawaiian Queen asked for annexation",
        ],
        acceptableAnswers: [
          "To serve as a naval base (Pearl Harbor) and protect sugar interests",
        ],
        explanation:
          "American sugar planters and the military value of Pearl Harbor led to the acquisition of Hawaii.",
      },
      {
        type: "multiple-choice",
        question:
          "How did the government's role change during the Progressive Era?",
        options: [
          "It became less involved in business",
          "It began to regulate industry and protect workers' rights",
          "It abolished the Supreme Court",
          "It stopped collecting all taxes",
        ],
        acceptableAnswers: [
          "It began to regulate industry and protect workers' rights",
        ],
        explanation:
          "The Progressive Era saw a shift toward government regulation to fix social and economic problems.",
      },
      {
        type: "multiple-choice",
        question:
          "Which of these was a major problem caused by rapid urbanization?",
        options: [
          "Too much clean water",
          "A lack of labor unions",
          "Poor sanitation and spread of disease",
          "Low crime rates",
        ],
        acceptableAnswers: ["Poor sanitation and spread of disease"],
        explanation:
          "Rapidly growing cities lacked proper infrastructure, leading to disease and filth.",
      },
      {
        type: "multiple-choice",
        question: "The Clayton Antitrust Act was significant because it:",
        options: [
          "Outlawed labor unions",
          "Protected the rights of unions to exist",
          "Increased the power of monopolies",
          "Ended the income tax",
        ],
        acceptableAnswers: ["Protected the rights of unions to exist"],
        explanation:
          "The Clayton Antitrust Act strengthened the Sherman Act and specifically exempted unions from being treated as illegal combinations.",
      },
      {
        type: "multiple-choice",
        question:
          "In the late 1800s, what was the general relationship between political bosses and immigrants?",
        options: [
          "Bosses ignored immigrants",
          "Bosses provided help (jobs/housing) in exchange for votes",
          "Immigrants ran the political machines",
          "Bosses forced immigrants to return to their home countries",
        ],
        acceptableAnswers: [
          "Bosses provided help (jobs/housing) in exchange for votes",
        ],
        explanation:
          "Political machines like Tammany Hall built their power on the support of immigrant voters.",
      },
      {
        type: "multiple-choice",
        question:
          "What 'duty' did many imperialists believe they had toward other nations?",
        options: [
          "A duty to remain neutral",
          "A duty to spread American culture and democracy",
          "A duty to learn other languages",
          "A duty to pay other countries' debts",
        ],
        acceptableAnswers: ["A duty to spread American culture and democracy"],
        explanation:
          "Cultural superiority and a perceived 'civilizing mission' were justifications for imperialism.",
      },
      {
        type: "multiple-choice",
        question: "What role did the Pure Food and Drug Act play?",
        options: [
          "It made food more expensive",
          "It required truthful labeling and banned harmful ingredients",
          "It outlawed farming",
          "It encouraged the use of chemicals in meat",
        ],
        acceptableAnswers: [
          "It required truthful labeling and banned harmful ingredients",
        ],
        explanation:
          "Passed alongside the Meat Inspection Act, it aimed to protect consumers from dangerous products.",
      },
      {
        type: "multiple-choice",
        question: "How did the 1902 Coal Strike end?",
        options: [
          "The workers were all fired",
          "The Army took over the mines forever",
          "Roosevelt threatened to use the Army to run the mines, forcing owners to negotiate",
          "The union was abolished",
        ],
        acceptableAnswers: [
          "Roosevelt threatened to use the Army to run the mines, forcing owners to negotiate",
        ],
        explanation:
          "Roosevelt's 'Square Deal' approach forced a compromise between owners and workers.",
      },
      {
        type: "multiple-choice",
        question:
          "Which amendment was passed to reduce the government's need for high tariffs?",
        options: [
          "16th Amendment",
          "17th Amendment",
          "18th Amendment",
          "19th Amendment",
        ],
        acceptableAnswers: ["16th Amendment"],
        explanation:
          "The income tax provided a new revenue stream, allowing for lower trade tariffs.",
      },
      {
        type: "multiple-choice",
        question: "What is a 'monopoly'?",
        options: [
          "A type of government",
          "When one company controls an entire industry",
          "A group of workers on strike",
          "A treaty between two nations",
        ],
        acceptableAnswers: ["When one company controls an entire industry"],
        explanation:
          "Monopolies eliminate competition, which Progressive reformers sought to fix through antitrust laws.",
      },
      {
        type: "multiple-choice",
        question: "What was the significance of the De Lôme Letter?",
        options: [
          "It started the Panama Canal project",
          "It was a Spanish letter that insulted President McKinley",
          "It ended the Philippine-American War",
          "It proposed an alliance between Mexico and Germany",
        ],
        acceptableAnswers: [
          "It was a Spanish letter that insulted President McKinley",
        ],
        explanation:
          "The letter's publication outraged Americans and increased the pressure for war with Spain.",
      },
      {
        type: "multiple-choice",
        question: "The primary goal of the NAACP was:",
        options: [
          "To limit immigration",
          "To achieve racial equality and civil rights",
          "To promote the Big Stick policy",
          "To build tenements",
        ],
        acceptableAnswers: ["To achieve racial equality and civil rights"],
        explanation:
          "Founded during the Progressive Era, the NAACP fought for the rights of African Americans.",
      },
    ],
  },
  {
    id: "us-history-multiple-choice-64",
    name: "US History Multiple Choice Quiz",
    category: "History",
    description:
      "A 64-question multiple choice quiz covering key topics in US History including the Articles of Confederation, Constitutional principles, early presidents, reform movements, and the events leading to the Civil War.",
    questions: [
      {
        type: "multiple-choice",
        question:
          "Under the Articles of Confederation, what level of government had the most power?",
        options: [
          "Federal Government",
          "State Governments",
          "Local Governments",
          "They all had the same powers",
        ],
        acceptableAnswers: ["State Governments"],
        explanation:
          "Under the Articles of Confederation, state governments retained most of the power, while the federal government was weak and had limited authority.",
      },
      {
        type: "multiple-choice",
        question: "The Proclamation Line of 1763 was located at the",
        options: [
          "Rocky Mountains",
          "Mississippi River",
          "Appalachian Mountains",
          "Pacific Ocean",
        ],
        acceptableAnswers: ["Appalachian Mountains"],
        explanation:
          "The Proclamation Line of 1763 was established by the British government along the Appalachian Mountains to prevent colonial expansion westward and avoid conflicts with Native Americans.",
      },
      {
        type: "multiple-choice",
        question:
          "All of the following are examples of the flexibility of the US Constitution EXCEPT",
        options: [
          "the Bill of Rights",
          "the creation of the President's Cabinet",
          "the Electoral College",
          "Judicial Review",
        ],
        acceptableAnswers: ["the Electoral College"],
        explanation:
          "The Electoral College was established in the original Constitution, not added later as a flexible adaptation. The Bill of Rights, Cabinet, and Judicial Review are examples of constitutional flexibility.",
      },
      {
        type: "multiple-choice",
        question: "What was the purpose of the Federalist Papers?",
        options: [
          "To support approval of the Declaration of Independence",
          "To list the reasons why Americans wanted to free from Great Britain",
          "To support the Albany Plan of Union",
          "To support the ratification of the US Constitution",
        ],
        acceptableAnswers: [
          "To support the ratification of the US Constitution",
        ],
        explanation:
          "The Federalist Papers were a series of essays written by Alexander Hamilton, James Madison, and John Jay to persuade New Yorkers to ratify the US Constitution.",
      },
      {
        type: "multiple-choice",
        question:
          "The principle of Judicial Review was established in which Supreme Court case?",
        options: [
          "Fletcher v Peck",
          "Marbury v Madison",
          "McCulloch v Maryland",
          "Dred Scott v Sanford",
        ],
        acceptableAnswers: ["Marbury v Madison"],
        explanation:
          "Marbury v Madison (1803) established the principle of judicial review, giving the Supreme Court the power to declare laws unconstitutional.",
      },
      {
        type: "multiple-choice",
        question:
          "Because of his views as a Strict Constructionist, Thomas Jefferson had an internal conflict in",
        options: [
          "making the Louisiana Purchase",
          "launching an embargo against all foreign trade",
          "appointing John Marshall to be Chief Justice of the Supreme Court",
          "vetoing the Bank of the US",
        ],
        acceptableAnswers: ["making the Louisiana Purchase"],
        explanation:
          "As a strict constructionist, Jefferson believed the Constitution should be interpreted literally. The Louisiana Purchase required a broad interpretation of presidential power, creating an internal conflict for him.",
      },
      {
        type: "multiple-choice",
        question:
          "Roger Williams established which idea in the Rhode Island Colony?",
        options: [
          "Checks & Balances",
          "Separation of Powers",
          "Majority Rule",
          "Separation of Church & State",
        ],
        acceptableAnswers: ["Separation of Church & State"],
        explanation:
          "Roger Williams founded Rhode Island as a haven for religious freedom and established the principle of separation of church and state.",
      },
      {
        type: "multiple-choice",
        question:
          "Which president was associated with the Trail of Tears, the Battle of New Orleans and vetoing the Bank of the US?",
        options: [
          "James Madison",
          "Andrew Jackson",
          "James Monroe",
          "John Quincy Adams",
        ],
        acceptableAnswers: ["Andrew Jackson"],
        explanation:
          "Andrew Jackson was responsible for the Indian Removal Act (Trail of Tears), won the Battle of New Orleans in the War of 1812, and vetoed the rechartering of the Bank of the United States.",
      },
      {
        type: "multiple-choice",
        question:
          "Sen. Daniel Webster (MA) argued against the South Carolina's use of Nullification because he thought it would violate",
        options: [
          "the Constitution's Supremacy Clause",
          "the Constitution's Elastic Clause",
          "the idea of Separation of Church & State",
          "Reserved Powers",
        ],
        acceptableAnswers: ["the Constitution's Supremacy Clause"],
        explanation:
          "Webster argued that nullification violated the Supremacy Clause, which establishes that federal law takes precedence over state law.",
      },
      {
        type: "multiple-choice",
        question:
          "Which reform movement began in the 1840s in Seneca Falls, New York?",
        options: [
          "The Abolitionist Movement",
          "The Populist (Farmers) Movement",
          "The Women's Rights Movement",
          "All of the above",
        ],
        acceptableAnswers: ["The Women's Rights Movement"],
        explanation:
          "The Seneca Falls Convention in 1848 marked the beginning of the organized women's rights movement in the United States.",
      },
      {
        type: "multiple-choice",
        question:
          "Which president is correctly paired with an event or action from his time in office?",
        options: [
          "James Monroe - War of 1812",
          "Thomas Jefferson - The Whiskey Rebellion",
          "John Adams - XYZ Affair",
          "James Madison - Veto of the Bank of the US",
        ],
        acceptableAnswers: ["John Adams - XYZ Affair"],
        explanation:
          "The XYZ Affair occurred during John Adams' presidency (1797-1801) when French agents demanded bribes from American diplomats.",
      },
      {
        type: "multiple-choice",
        question: "President James K Polk",
        options: [
          "vowed to only serve only one term if elected",
          "was in office during the Mexican-American War",
          "purchased the southwestern part of the continent, including California",
          "All of the above",
        ],
        acceptableAnswers: ["All of the above"],
        explanation:
          "James K. Polk served one term, was president during the Mexican-American War (1846-1848), and the war resulted in the acquisition of the southwestern territories including California.",
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following was NOT a part of the Compromise of 1850?",
        options: [
          "California would enter the union as free state",
          "Missouri would enter the union as a slave state",
          "New, tougher fugitive slave laws would be enacted",
          "Popular Sovereignty would be granted in the New Mexico and Utah Territories",
        ],
        acceptableAnswers: ["Missouri would enter the union as a slave state"],
        explanation:
          "Missouri entered as a slave state as part of the Missouri Compromise of 1820, not the Compromise of 1850.",
      },
      {
        type: "multiple-choice",
        question: "In the 1850s, Republicans like Abraham Lincoln,",
        options: [
          "favored abolition of slavery",
          "supported secession by the South",
          "supported the idea of Nullification for State governments",
          "wanted to keep slavery from spreading to the Western territories",
        ],
        acceptableAnswers: [
          "wanted to keep slavery from spreading to the Western territories",
        ],
        explanation:
          "Republicans in the 1850s, including Lincoln, opposed the expansion of slavery into western territories, though they did not initially call for immediate abolition in existing slave states.",
      },
      {
        type: "multiple-choice",
        question:
          "Under the Articles of Confederation, which level of government had most real power?",
        options: [
          "The federal government had the most real power",
          "The state governments had the most real power",
          "Local governments had the most real power",
          "Power was equally distributed among all levels",
        ],
        acceptableAnswers: ["The state governments had the most real power"],
        explanation:
          "Under the Articles of Confederation, state governments retained most of the power, while the federal government was weak and had limited authority.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did the Articles of Confederation create a decentralized system of government?",
        options: [
          "To ensure efficient tax collection",
          "The decentralized system was created because the newly independent states feared creating a strong central government that might become tyrannical, similar to the British monarchy they had just overthrown. They prioritized state sovereignty",
          "To promote international trade",
          "To establish a unified military command",
        ],
        acceptableAnswers: [
          "The decentralized system was created because the newly independent states feared creating a strong central government that might become tyrannical, similar to the British monarchy they had just overthrown. They prioritized state sovereignty",
        ],
        explanation:
          "After fighting against British tyranny, the states were wary of creating another powerful central government and prioritized state sovereignty.",
      },
      {
        type: "multiple-choice",
        question: "Why was the Bill of Rights added to the Constitution?",
        options: [
          "To establish the federal court system",
          "To create the executive branch",
          "The Bill of Rights was added to satisfy the Anti-Federalists who feared the new strong central government would infringe upon individual liberties. It guarantees specific individual freedoms and limits the power of the federal government",
          "To regulate interstate commerce",
        ],
        acceptableAnswers: [
          "The Bill of Rights was added to satisfy the Anti-Federalists who feared the new strong central government would infringe upon individual liberties. It guarantees specific individual freedoms and limits the power of the federal government",
        ],
        explanation:
          "The Bill of Rights was added to address Anti-Federalist concerns about individual liberties and to limit federal power.",
      },
      {
        type: "multiple-choice",
        question: "List ways in which the Constitution can be flexible.",
        options: [
          "The Amendment Process, The Elastic Clause, and Judicial Review",
          "Only through constitutional amendments",
          "Through executive orders and presidential proclamations",
          "Through state nullification of federal laws",
        ],
        acceptableAnswers: [
          "The Amendment Process, The Elastic Clause, and Judicial Review",
        ],
        explanation:
          "The Constitution remains flexible through amendments, the Elastic Clause (necessary and proper clause), and judicial review, which allows it to adapt to changing circumstances.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did the founders believe in a strong central government?",
        options: [
          "To eliminate state governments entirely",
          "To create a monarchy similar to European nations",
          "The founders who pushed for the Constitution (Federalists) believed in a strong central government because they recognized the weaknesses of the Articles of Confederation, especially the national government's inability to regulate interstate trade, conduct foreign policy, raise an army, and effectively collect taxes as seen in Shays' Rebellion",
          "To restrict individual freedoms",
        ],
        acceptableAnswers: [
          "The founders who pushed for the Constitution (Federalists) believed in a strong central government because they recognized the weaknesses of the Articles of Confederation, especially the national government's inability to regulate interstate trade, conduct foreign policy, raise an army, and effectively collect taxes as seen in Shays' Rebellion",
        ],
        explanation:
          "Federalists like Hamilton and Madison supported a strong central government to address the weaknesses of the Articles of Confederation, particularly after events like Shays' Rebellion demonstrated the need for effective governance.",
      },
      {
        type: "multiple-choice",
        question: "Describe the process of a bill becoming a law.",
        options: [
          "Introduction, Committee Review, Floor Debate and Passage, Referral to Second Chamber, Conference Committee, Final Passage, Presidential Action",
          "A bill becomes law immediately after introduction",
          "The president writes the bill and it becomes law",
          "State legislatures approve all federal laws",
        ],
        acceptableAnswers: [
          "Introduction, Committee Review, Floor Debate and Passage, Referral to Second Chamber, Conference Committee, Final Passage, Presidential Action",
        ],
        explanation:
          "A bill must go through multiple steps including introduction, committee review, floor debate, passage in both houses, conference committee if needed, and finally presidential action (signature or veto).",
      },
      {
        type: "multiple-choice",
        question:
          "Why is the US government considered a Federal system of government?",
        options: [
          "Because all power is held by the federal government",
          "Because all power is held by state governments",
          "The US government is considered a Federal system because power is constitutionally divided and shared between a strong national (federal) government and the smaller, regional (state) governments",
          "Because it is a direct democracy",
        ],
        acceptableAnswers: [
          "The US government is considered a Federal system because power is constitutionally divided and shared between a strong national (federal) government and the smaller, regional (state) governments",
        ],
        explanation:
          "Federalism is a system where power is divided and shared between the national government and state governments, as established in the US Constitution.",
      },
      {
        type: "multiple-choice",
        question:
          "How were the Virginia House of Burgesses and the Mayflower Compact similar?",
        options: [
          "Both were established by the British Parliament",
          "Both were early examples of self-government and the idea that colonists could establish their own political institutions and rules. The House of Burgesses was the first representative assembly. The Mayflower Compact was an agreement to create a governing body and obey its laws",
          "Both were royal charters from the king",
          "Both established religious theocracies",
        ],
        acceptableAnswers: [
          "Both were early examples of self-government and the idea that colonists could establish their own political institutions and rules. The House of Burgesses was the first representative assembly. The Mayflower Compact was an agreement to create a governing body and obey its laws",
        ],
        explanation:
          "Both represented early colonial experiments in self-government, with the House of Burgesses being the first representative assembly and the Mayflower Compact establishing a framework for self-rule.",
      },
      {
        type: "multiple-choice",
        question:
          "Under which system of government did the states have the right to coin money, control trade and collect taxes?",
        options: [
          "The US Constitution",
          "The Articles of Confederation (or a very weak confederate system) allowed the states these specific sovereign powers",
          "The Federal system established in 1789",
          "The unitary system",
        ],
        acceptableAnswers: [
          "The Articles of Confederation (or a very weak confederate system) allowed the states these specific sovereign powers",
        ],
        explanation:
          "Under the Articles of Confederation, states retained these sovereign powers, which contributed to economic problems and was one reason for creating a stronger federal government.",
      },
      {
        type: "multiple-choice",
        question:
          "In which document does it state that government gets its power from the people?",
        options: [
          "The Articles of Confederation",
          "The Federalist Papers",
          'The Declaration of Independence and the Preamble to the Constitution ("We the People...") both state this principle of popular sovereignty',
          "The Mayflower Compact",
        ],
        acceptableAnswers: [
          'The Declaration of Independence and the Preamble to the Constitution ("We the People...") both state this principle of popular sovereignty',
        ],
        explanation:
          "Both documents express the principle of popular sovereignty - that government derives its power from the consent of the governed.",
      },
      {
        type: "multiple-choice",
        question: "What was the purpose of the Declaration of Independence?",
        options: [
          "To establish the US Constitution",
          "To declare war on Great Britain",
          "The purpose was to formally declare the 13 colonies separate and independent from Great Britain, outline the philosophical basis for this separation (natural rights), and list the grievances against King George III",
          "To create the Articles of Confederation",
        ],
        acceptableAnswers: [
          "The purpose was to formally declare the 13 colonies separate and independent from Great Britain, outline the philosophical basis for this separation (natural rights), and list the grievances against King George III",
        ],
        explanation:
          "The Declaration of Independence formally announced the colonies' separation from Britain, explained the philosophical justification (natural rights), and listed grievances against the king.",
      },
      {
        type: "multiple-choice",
        question:
          "How did the Supreme Court obtain its power of Judicial Review?",
        options: [
          "Through a constitutional amendment",
          "Through the landmark 1803 Supreme Court case Marbury v. Madison",
          "Through an act of Congress",
          "Through the Articles of Confederation",
        ],
        acceptableAnswers: [
          "Through the landmark 1803 Supreme Court case Marbury v. Madison",
        ],
        explanation:
          "Marbury v. Madison (1803) established the principle of judicial review, giving the Supreme Court the power to declare laws unconstitutional.",
      },
      {
        type: "multiple-choice",
        question: "Why are Supreme Court Justices appointed for life?",
        options: [
          "To ensure they remain loyal to the president who appointed them",
          "To prevent them from making unpopular decisions",
          "Justices are appointed for life to ensure judicial independence. This means they are removed from political pressures, public opinion, and the influence of the legislative or executive branches when making decisions",
          "To save money on elections",
        ],
        acceptableAnswers: [
          "Justices are appointed for life to ensure judicial independence. This means they are removed from political pressures, public opinion, and the influence of the legislative or executive branches when making decisions",
        ],
        explanation:
          "Lifetime appointments ensure judicial independence, allowing justices to make decisions based on the law rather than political pressure or public opinion.",
      },
      {
        type: "multiple-choice",
        question: "Why did the Founders create the Electoral College?",
        options: [
          "To ensure only wealthy landowners could vote",
          "The Founders created the Electoral College as a compromise between electing the president by a direct popular vote and electing the president by a vote in Congress. It was intended to give smaller states a proportionally stronger voice and ensure that the president had broad support across states, not just concentrated population centers",
          "To eliminate the need for presidential elections",
          "To allow state legislatures to directly choose the president",
        ],
        acceptableAnswers: [
          "The Founders created the Electoral College as a compromise between electing the president by a direct popular vote and electing the president by a vote in Congress. It was intended to give smaller states a proportionally stronger voice and ensure that the president had broad support across states, not just concentrated population centers",
        ],
        explanation:
          "The Electoral College was a compromise between direct popular election and congressional selection, designed to balance the interests of large and small states.",
      },
      {
        type: "multiple-choice",
        question: "What was the Great Compromise?",
        options: [
          "A compromise over slavery in the territories",
          "A compromise over the location of the national capital",
          "The Great Compromise resolved the dispute between large and small states over representation in Congress. It established a bicameral legislature, The Senate and The House of Representatives",
          "A compromise over the Bill of Rights",
        ],
        acceptableAnswers: [
          "The Great Compromise resolved the dispute between large and small states over representation in Congress. It established a bicameral legislature, The Senate and The House of Representatives",
        ],
        explanation:
          "The Great Compromise (Connecticut Compromise) created a bicameral legislature with equal representation in the Senate and proportional representation in the House.",
      },
      {
        type: "multiple-choice",
        question:
          "What was the purpose of the Federalist Papers? Who wrote them?",
        options: [
          "To oppose the Constitution, written by Patrick Henry and Samuel Adams",
          "To convince the people of New York and other states to ratify (approve) the new US Constitution by explaining and defending its principles and structure. Alexander Hamilton, James Madison, and John Jay",
          "To declare independence from Britain, written by Thomas Jefferson",
          "To establish the Articles of Confederation, written by Benjamin Franklin",
        ],
        acceptableAnswers: [
          "To convince the people of New York and other states to ratify (approve) the new US Constitution by explaining and defending its principles and structure. Alexander Hamilton, James Madison, and John Jay",
        ],
        explanation:
          "The Federalist Papers were written by Hamilton, Madison, and Jay to persuade New Yorkers and others to ratify the Constitution.",
      },
      {
        type: "multiple-choice",
        question: "How did political parties develop in the United States?",
        options: [
          "They were established in the Constitution",
          "Political parties developed primarily out of fundamental disagreements among George Washington's advisors (Hamilton and Jefferson) over the interpretation of the Constitution (strict vs. loose), economic policy (national bank), and foreign policy (alliance with Britain vs. France). These disagreements led to the formation of the first two parties: the Federalists and the Democratic-Republicans",
          "They were created by foreign powers",
          "They developed from regional differences only",
        ],
        acceptableAnswers: [
          "Political parties developed primarily out of fundamental disagreements among George Washington's advisors (Hamilton and Jefferson) over the interpretation of the Constitution (strict vs. loose), economic policy (national bank), and foreign policy (alliance with Britain vs. France). These disagreements led to the formation of the first two parties: the Federalists and the Democratic-Republicans",
        ],
        explanation:
          "Political parties emerged from disagreements between Hamilton (Federalists) and Jefferson (Democratic-Republicans) over constitutional interpretation, economic policy, and foreign relations.",
      },
      {
        type: "multiple-choice",
        question:
          "What advice did George Washington give the United States before leaving office?",
        options: [
          "To expand westward immediately",
          "To establish a national bank",
          "Before leaving office, George Washington warned against the dangers of factionalism (divisive political parties) and the danger of creating permanent alliances",
          "To abolish slavery",
        ],
        acceptableAnswers: [
          "Before leaving office, George Washington warned against the dangers of factionalism (divisive political parties) and the danger of creating permanent alliances",
        ],
        explanation:
          "In his Farewell Address, Washington warned against political parties and permanent foreign alliances.",
      },
      {
        type: "multiple-choice",
        question: "Define – Mercantilism",
        options: [
          "An economic system based on free trade",
          "Mercantilism is an economic theory practiced by European powers from the 16th to 18th centuries. It holds that a nation's power is directly related to its wealth. To achieve this, colonies exist only to benefit the mother country by providing raw materials and serving as a captive market for finished goods, thus creating a favorable balance of trade for the mother country",
          "A political system of representative government",
          "A religious movement",
        ],
        acceptableAnswers: [
          "Mercantilism is an economic theory practiced by European powers from the 16th to 18th centuries. It holds that a nation's power is directly related to its wealth. To achieve this, colonies exist only to benefit the mother country by providing raw materials and serving as a captive market for finished goods, thus creating a favorable balance of trade for the mother country",
        ],
        explanation:
          "Mercantilism was the economic system where colonies existed to enrich the mother country through trade restrictions and resource extraction.",
      },
      {
        type: "multiple-choice",
        question:
          "What term is most closely associated with Westward Expansion?",
        options: [
          "Isolationism",
          "Manifest Destiny, the belief that the U.S. was divinely ordained to expand across the entire North American continent",
          "Nullification",
          "Popular Sovereignty",
        ],
        acceptableAnswers: [
          "Manifest Destiny, the belief that the U.S. was divinely ordained to expand across the entire North American continent",
        ],
        explanation:
          "Manifest Destiny was the belief that the United States was destined to expand across the North American continent.",
      },
      {
        type: "multiple-choice",
        question:
          "What geographic feature served as America's western border before the Louisiana Purchase?",
        options: [
          "The Rocky Mountains",
          "The Mississippi River",
          "The Appalachian Mountains",
          "The Pacific Ocean",
        ],
        acceptableAnswers: ["The Mississippi River"],
        explanation:
          "Before the Louisiana Purchase in 1803, the Mississippi River served as the western boundary of the United States.",
      },
      {
        type: "multiple-choice",
        question: "American business cannot be hurt by which form of taxes?",
        options: [
          "Income taxes",
          "Import taxes",
          "American business cannot be hurt by export taxes because the Constitution specifically forbids the federal government from taxing goods sent out of the country",
          "Property taxes",
        ],
        acceptableAnswers: [
          "American business cannot be hurt by export taxes because the Constitution specifically forbids the federal government from taxing goods sent out of the country",
        ],
        explanation:
          "The Constitution prohibits the federal government from taxing exports, protecting American businesses from export taxes.",
      },
      {
        type: "multiple-choice",
        question:
          "What conflict did Jefferson have in making the Louisiana Purchase?",
        options: [
          "He feared it would be too expensive",
          "Jefferson was a strict constructionist, believing the government could only do what the Constitution explicitly allowed. The Constitution did not explicitly grant the President the power to acquire vast new territory. His conflict was the constitutional dilemma of using a loose interpretation of the Constitution, which he usually opposed in order to make the purchase, which he believed was crucial for the nation's future",
          "He didn't want to expand the nation",
          "He preferred to purchase Florida instead",
        ],
        acceptableAnswers: [
          "Jefferson was a strict constructionist, believing the government could only do what the Constitution explicitly allowed. The Constitution did not explicitly grant the President the power to acquire vast new territory. His conflict was the constitutional dilemma of using a loose interpretation of the Constitution, which he usually opposed in order to make the purchase, which he believed was crucial for the nation's future",
        ],
        explanation:
          "As a strict constructionist, Jefferson faced a conflict between his constitutional principles and the opportunity to double the nation's size through the Louisiana Purchase.",
      },
      {
        type: "multiple-choice",
        question: "Which president was in office during the War of 1812?",
        options: [
          "Thomas Jefferson",
          "James Madison",
          "James Monroe",
          "Andrew Jackson",
        ],
        acceptableAnswers: ["James Madison"],
        explanation:
          "James Madison was president during the War of 1812 (1812-1815).",
      },
      {
        type: "multiple-choice",
        question: "What does a lobbyist do?",
        options: [
          "A lobbyist is hired by an interest group, corporation, or non-profit to influence government officials (Congress members, regulatory agencies) on behalf of their organization's specific political agenda or goals",
          "A lobbyist runs for political office",
          "A lobbyist enforces laws",
          "A lobbyist serves as a judge",
        ],
        acceptableAnswers: [
          "A lobbyist is hired by an interest group, corporation, or non-profit to influence government officials (Congress members, regulatory agencies) on behalf of their organization's specific political agenda or goals",
        ],
        explanation:
          "Lobbyists are hired to influence government officials and policymakers on behalf of their clients' interests.",
      },
      {
        type: "multiple-choice",
        question:
          "What is the process within a political party for selecting a candidate for president?",
        options: [
          "The president is chosen directly by party leaders",
          "The process generally involves a series of primaries and meetings held in various states, culminating in the National Nominating Convention where delegates formally select the party's presidential and vice-presidential candidates",
          "The president is chosen by the Supreme Court",
          "The president is chosen by state governors",
        ],
        acceptableAnswers: [
          "The process generally involves a series of primaries and meetings held in various states, culminating in the National Nominating Convention where delegates formally select the party's presidential and vice-presidential candidates",
        ],
        explanation:
          "The presidential nomination process involves primaries/caucuses in states, leading to the national convention where the party formally selects its candidates.",
      },
      {
        type: "multiple-choice",
        question: "What are the three parts of the Monroe Doctrine?",
        options: [
          "1. The Western Hemisphere was closed to future European colonization. 2. The U.S. would not interfere with existing European colonies or affairs in Europe. 3. Any attempt by a European power to control or interfere with independent nations in the Americas would be viewed as a hostile act against the United States",
          "1. Free trade with all nations 2. Military expansion 3. Abolition of slavery",
          "1. Isolation from all foreign affairs 2. Annexation of Canada 3. War with Spain",
          "1. Support for European monarchies 2. Colonization of South America 3. Alliance with Great Britain",
        ],
        acceptableAnswers: [
          "1. The Western Hemisphere was closed to future European colonization. 2. The U.S. would not interfere with existing European colonies or affairs in Europe. 3. Any attempt by a European power to control or interfere with independent nations in the Americas would be viewed as a hostile act against the United States",
        ],
        explanation:
          "The Monroe Doctrine (1823) declared the Western Hemisphere closed to European colonization, stated non-interference with existing colonies, and warned against European interference with independent American nations.",
      },
      {
        type: "multiple-choice",
        question:
          "Roger Williams is most closely associated with which government principle?",
        options: [
          "Checks and Balances",
          "Separation of Powers",
          "Separation of Church and State",
          "Popular Sovereignty",
        ],
        acceptableAnswers: ["Separation of Church and State"],
        explanation:
          "Roger Williams founded Rhode Island as a haven for religious freedom and established the principle of separation of church and state.",
      },
      {
        type: "multiple-choice",
        question: "What events/actions is Andrew Jackson most known for?",
        options: [
          "The Louisiana Purchase and the Lewis and Clark Expedition",
          "The Indian Removal Act and the resulting Trail of Tears. His decisive action during the Nullification Crisis by threatening military force against South Carolina",
          "The XYZ Affair and the Alien and Sedition Acts",
          "The Missouri Compromise and the Compromise of 1850",
        ],
        acceptableAnswers: [
          "The Indian Removal Act and the resulting Trail of Tears. His decisive action during the Nullification Crisis by threatening military force against South Carolina",
        ],
        explanation:
          "Andrew Jackson is most known for the Indian Removal Act (Trail of Tears) and his strong response to the Nullification Crisis.",
      },
      {
        type: "multiple-choice",
        question: "What was the Missouri Compromise (Compromise of 1820)?",
        options: [
          "Missouri was admitted as a slave state. Maine was admitted as a free state. Slavery was prohibited in the remaining Louisiana Purchase territory north of Missouri's southern border",
          "California entered as a free state",
          "Kansas and Nebraska could choose slavery through popular sovereignty",
          "Slavery was abolished in all territories",
        ],
        acceptableAnswers: [
          "Missouri was admitted as a slave state. Maine was admitted as a free state. Slavery was prohibited in the remaining Louisiana Purchase territory north of Missouri's southern border",
        ],
        explanation:
          "The Missouri Compromise (1820) maintained the balance between free and slave states by admitting Missouri as a slave state and Maine as a free state, and prohibiting slavery north of 36°30' in the Louisiana Territory.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did Sen. Daniel Webster argue against the idea of Nullification?",
        options: [
          "He supported states' rights over federal authority",
          "Webster argued that the Union was perpetual and had been created by the people, not by the states as individual sovereign entities. He believed that the Supreme Court, not the individual state legislatures, had the final authority to determine the constitutionality of federal laws. Nullification, he argued, would lead to the disintegration of the Union",
          "He wanted to abolish slavery",
          "He supported the Bank of the United States",
        ],
        acceptableAnswers: [
          "Webster argued that the Union was perpetual and had been created by the people, not by the states as individual sovereign entities. He believed that the Supreme Court, not the individual state legislatures, had the final authority to determine the constitutionality of federal laws. Nullification, he argued, would lead to the disintegration of the Union",
        ],
        explanation:
          "Webster argued against nullification, asserting that the Union was created by the people and that the Supreme Court, not states, had final authority over constitutionality.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did Sen. John C. Calhoun write the South Carolina Exposition and Protest? What did that document state?",
        options: [
          'Calhoun wrote the document secretly in response to the highly protective Tariff of 1828, the "Tariff of Abominations", which the South felt unfairly damaged their economy for the benefit of Northern industry. It formally put forth the doctrine of nullification, asserting that if a state deemed a federal law unconstitutional and harmful, that state had the right to declare the law void within its borders',
          "To support the Bank of the United States",
          "To advocate for the abolition of slavery",
          "To support westward expansion",
        ],
        acceptableAnswers: [
          'Calhoun wrote the document secretly in response to the highly protective Tariff of 1828, the "Tariff of Abominations", which the South felt unfairly damaged their economy for the benefit of Northern industry. It formally put forth the doctrine of nullification, asserting that if a state deemed a federal law unconstitutional and harmful, that state had the right to declare the law void within its borders',
        ],
        explanation:
          "Calhoun wrote the document in response to the Tariff of 1828, arguing for the doctrine of nullification - that states could declare federal laws void within their borders.",
      },
      {
        type: "multiple-choice",
        question:
          "How was the issue of extending slavery into the western territories dealt with in the years before the Civil War?",
        options: [
          "Through military force only",
          "The issue was dealt with primarily through a series of compromises and legislative acts, each attempting to draw new lines or adopt new principles Missouri Compromise (1820), Compromise of 1850, Kansas-Nebraska Act (1854)",
          "Through immediate abolition in all territories",
          "Through state nullification",
        ],
        acceptableAnswers: [
          "The issue was dealt with primarily through a series of compromises and legislative acts, each attempting to draw new lines or adopt new principles Missouri Compromise (1820), Compromise of 1850, Kansas-Nebraska Act (1854)",
        ],
        explanation:
          "The slavery expansion issue was addressed through a series of compromises: Missouri Compromise (1820), Compromise of 1850, and Kansas-Nebraska Act (1854).",
      },
      {
        type: "multiple-choice",
        question: "What were the major reasons for the Mexican-American War?",
        options: [
          "Annexation of Texas: Mexico still considered Texas a breakaway province and viewed U.S. annexation (1845) as an aggressive act. Border Dispute: The U.S. claimed the border was the Rio Grande, while Mexico claimed it was the Nueces River. Manifest Destiny: U.S. desire to acquire the Mexican territories of California and New Mexico. Polk's Actions: President Polk sent U.S. troops into the disputed border zone, provoking conflict",
          "Disputes over trade routes",
          "Religious differences",
          "Competition for Canadian territories",
        ],
        acceptableAnswers: [
          "Annexation of Texas: Mexico still considered Texas a breakaway province and viewed U.S. annexation (1845) as an aggressive act. Border Dispute: The U.S. claimed the border was the Rio Grande, while Mexico claimed it was the Nueces River. Manifest Destiny: U.S. desire to acquire the Mexican territories of California and New Mexico. Polk's Actions: President Polk sent U.S. troops into the disputed border zone, provoking conflict",
        ],
        explanation:
          "The Mexican-American War was caused by Texas annexation, border disputes (Rio Grande vs. Nueces), Manifest Destiny, and Polk's provocative actions.",
      },
      {
        type: "multiple-choice",
        question:
          "How were native Americans treated during Andrew Jackson's presidency?",
        options: [
          "They were granted full citizenship and voting rights",
          'Native Americans were treated brutally and viewed as obstacles to white expansion. Jackson signed the Indian Removal Act of 1830, which forced thousands of Native Americans (especially the "Five Civilized Tribes") from their ancestral lands in the Southeast to territories west of the Mississippi River. This forced march resulted in the deadly Trail of Tears',
          "They were given equal representation in Congress",
          "They were allowed to keep all their ancestral lands",
        ],
        acceptableAnswers: [
          'Native Americans were treated brutally and viewed as obstacles to white expansion. Jackson signed the Indian Removal Act of 1830, which forced thousands of Native Americans (especially the "Five Civilized Tribes") from their ancestral lands in the Southeast to territories west of the Mississippi River. This forced march resulted in the deadly Trail of Tears',
        ],
        explanation:
          "Jackson's Indian Removal Act of 1830 forced Native Americans from their lands, resulting in the deadly Trail of Tears.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did westerners not support the Bank of the United States?",
        options: [
          "They wanted higher interest rates",
          "Westerners (and farmers) viewed the Bank as an elitist institution controlled by wealthy Eastern merchants. They felt it restricted credit, limited the availability of currency (especially hard money), and favored established business interests over the needs of common farmers and speculators seeking easier loans for land purchases",
          "They preferred state banks only",
          "They wanted to abolish all banks",
        ],
        acceptableAnswers: [
          "Westerners (and farmers) viewed the Bank as an elitist institution controlled by wealthy Eastern merchants. They felt it restricted credit, limited the availability of currency (especially hard money), and favored established business interests over the needs of common farmers and speculators seeking easier loans for land purchases",
        ],
        explanation:
          "Westerners and farmers opposed the Bank because they saw it as an elitist Eastern institution that restricted credit and favored wealthy business interests over common farmers.",
      },
      {
        type: "multiple-choice",
        question:
          "Why did southerners not support the government spending money on road and canal projects?",
        options: [
          "They preferred railroads to canals",
          'Southerners opposed "internal improvements" (roads, canals, etc.) because: They felt such projects primarily benefited the Northern and Western economies (which lacked the extensive river systems the South relied on). They believed the government spending was an unconstitutional expansion of federal power. They feared that if the federal government had the power to fund internal improvements, it might eventually gain the power to interfere with slavery',
          "They wanted all funding to go to military projects",
          "They preferred private funding only",
        ],
        acceptableAnswers: [
          'Southerners opposed "internal improvements" (roads, canals, etc.) because: They felt such projects primarily benefited the Northern and Western economies (which lacked the extensive river systems the South relied on). They believed the government spending was an unconstitutional expansion of federal power. They feared that if the federal government had the power to fund internal improvements, it might eventually gain the power to interfere with slavery',
        ],
        explanation:
          "Southerners opposed internal improvements because they primarily benefited the North/West, were seen as unconstitutional, and raised fears about federal power over slavery.",
      },
      {
        type: "multiple-choice",
        question: "Andrew Jackson was the father of which political party?",
        options: [
          "The Whig Party",
          "The Republican Party",
          "The Democratic Party (which evolved from the Democratic-Republican Party)",
          "The Federalist Party",
        ],
        acceptableAnswers: [
          "The Democratic Party (which evolved from the Democratic-Republican Party)",
        ],
        explanation:
          "Andrew Jackson is considered the founder of the modern Democratic Party, which evolved from the Democratic-Republican Party.",
      },
      {
        type: "multiple-choice",
        question:
          "Which president was hurt by the passage of the Alien and Sedition Acts?",
        options: [
          "Thomas Jefferson",
          "John Adams (Federalist). The resulting public outcry and the backlash against the suppression of free speech contributed to his defeat in the election of 1800",
          "James Madison",
          "George Washington",
        ],
        acceptableAnswers: [
          "John Adams (Federalist). The resulting public outcry and the backlash against the suppression of free speech contributed to his defeat in the election of 1800",
        ],
        explanation:
          "The Alien and Sedition Acts, passed during John Adams' presidency, were unpopular and contributed to his defeat in the 1800 election.",
      },
      {
        type: "multiple-choice",
        question: "What was the Corrupt Bargain?",
        options: [
          'The Corrupt Bargain refers to the controversial outcome of the 1824 election. No candidate won a majority of electoral votes, throwing the election into the House of Representatives. Henry Clay (Speaker of the House) supported John Quincy Adams, ensuring Adams\' victory. Shortly afterward, Adams appointed Clay as his Secretary of State. Andrew Jackson and his supporters claimed this was a "corrupt bargain" where Clay traded his support for a high office',
          "A deal to purchase Louisiana",
          "An agreement over the Missouri Compromise",
          "A trade agreement with Great Britain",
        ],
        acceptableAnswers: [
          'The Corrupt Bargain refers to the controversial outcome of the 1824 election. No candidate won a majority of electoral votes, throwing the election into the House of Representatives. Henry Clay (Speaker of the House) supported John Quincy Adams, ensuring Adams\' victory. Shortly afterward, Adams appointed Clay as his Secretary of State. Andrew Jackson and his supporters claimed this was a "corrupt bargain" where Clay traded his support for a high office',
        ],
        explanation:
          "The 'Corrupt Bargain' refers to the 1824 election where Clay's support for Adams in the House vote, followed by Clay's appointment as Secretary of State, was seen as a political deal.",
      },
      {
        type: "multiple-choice",
        question:
          "Which president was in office during the Mexican-American War?",
        options: [
          "John Tyler",
          "James K. Polk",
          "Zachary Taylor",
          "Millard Fillmore",
        ],
        acceptableAnswers: ["James K. Polk"],
        explanation:
          "James K. Polk was president during the Mexican-American War (1846-1848).",
      },
      {
        type: "multiple-choice",
        question:
          "What function does the Vice President serve in the US Government?",
        options: [
          "To serve as commander-in-chief of the military",
          "The Vice President has two main formal functions: To preside over the Senate (and vote only in case of a tie). To be the first person in the line of succession to the presidency should the President be unable to serve",
          "To write and propose legislation",
          "To serve as the head of the Supreme Court",
        ],
        acceptableAnswers: [
          "The Vice President has two main formal functions: To preside over the Senate (and vote only in case of a tie). To be the first person in the line of succession to the presidency should the President be unable to serve",
        ],
        explanation:
          "The Vice President presides over the Senate (voting only to break ties) and is first in line of presidential succession.",
      },
      {
        type: "multiple-choice",
        question:
          "Which political party was founded to oppose the Democratic Party in the 1840s?",
        options: [
          "The Republican Party",
          "The Whig Party. They opposed Jackson's powerful executive actions, especially regarding the Bank and Nullification",
          "The Federalist Party",
          "The Democratic-Republican Party",
        ],
        acceptableAnswers: [
          "The Whig Party. They opposed Jackson's powerful executive actions, especially regarding the Bank and Nullification",
        ],
        explanation:
          "The Whig Party was formed in the 1830s-1840s to oppose Jackson's strong executive actions and policies.",
      },
      {
        type: "multiple-choice",
        question:
          "How did President Washington react to the Whiskey Rebellion?",
        options: [
          "He ignored the rebellion",
          "Washington reacted decisively by personally leading a large federal militia (nearly 13,000 troops) to suppress the uprising of farmers in Western Pennsylvania protesting the excise tax on whiskey. His action demonstrated the new federal government's strength and its commitment to enforcing federal law (a clear contrast to the weakness of the government under the Articles of Confederation)",
          "He repealed the whiskey tax",
          "He allowed the states to handle it",
        ],
        acceptableAnswers: [
          "Washington reacted decisively by personally leading a large federal militia (nearly 13,000 troops) to suppress the uprising of farmers in Western Pennsylvania protesting the excise tax on whiskey. His action demonstrated the new federal government's strength and its commitment to enforcing federal law (a clear contrast to the weakness of the government under the Articles of Confederation)",
        ],
        explanation:
          "Washington's decisive response to the Whiskey Rebellion demonstrated the new federal government's ability to enforce federal law, contrasting with the weakness under the Articles of Confederation.",
      },
      {
        type: "multiple-choice",
        question: "What purpose did the Erie Canal serve?",
        options: [
          "To connect the Atlantic and Pacific Oceans",
          "The Erie Canal (completed 1825) provided a vital, efficient, and cheap water route connecting the Great Lakes region (via Buffalo) to the Atlantic Ocean (via the Hudson River and New York City). It dramatically reduced shipping costs, spurred Western migration, and established New York City as the nation's premier commercial center",
          "To provide irrigation for farms",
          "To serve as a military defense barrier",
        ],
        acceptableAnswers: [
          "The Erie Canal (completed 1825) provided a vital, efficient, and cheap water route connecting the Great Lakes region (via Buffalo) to the Atlantic Ocean (via the Hudson River and New York City). It dramatically reduced shipping costs, spurred Western migration, and established New York City as the nation's premier commercial center",
        ],
        explanation:
          "The Erie Canal connected the Great Lakes to the Atlantic via the Hudson River, reducing shipping costs and making New York City a major commercial center.",
      },
      {
        type: "multiple-choice",
        question:
          "How did the veto of the Bank of the United States impact the US economy?",
        options: [
          "It stabilized the economy immediately",
          'Andrew Jackson\'s veto and subsequent withdrawal of federal funds from the Second Bank of the United States (BUS) led to a period of financial instability. State "pet banks" received the federal deposits and began issuing too much paper money, leading to speculation, inflation, and ultimately contributing to the severe economic depression known as the Panic of 1837',
          "It had no economic impact",
          "It increased international trade",
        ],
        acceptableAnswers: [
          'Andrew Jackson\'s veto and subsequent withdrawal of federal funds from the Second Bank of the United States (BUS) led to a period of financial instability. State "pet banks" received the federal deposits and began issuing too much paper money, leading to speculation, inflation, and ultimately contributing to the severe economic depression known as the Panic of 1837',
        ],
        explanation:
          "Jackson's veto and removal of federal funds from the BUS led to financial instability, with state banks issuing excessive paper money, contributing to the Panic of 1837.",
      },
      {
        type: "multiple-choice",
        question:
          "Which Supreme Court case saw the extension of Judicial Review to cover state and local laws?",
        options: [
          "Marbury v. Madison",
          "Fletcher v. Peck (1810) established that the Supreme Court could strike down state laws that violated the Constitution. (Later confirmed in Cohens v. Virginia (1821))",
          "McCulloch v. Maryland",
          "Dred Scott v. Sanford",
        ],
        acceptableAnswers: [
          "Fletcher v. Peck (1810) established that the Supreme Court could strike down state laws that violated the Constitution. (Later confirmed in Cohens v. Virginia (1821))",
        ],
        explanation:
          "Fletcher v. Peck (1810) extended judicial review to state laws, establishing that the Supreme Court could strike down state laws that violated the Constitution.",
      },
      {
        type: "multiple-choice",
        question:
          "How did the publication of Uncle Tom's Cabin impact the abolitionist movement in the 1850s?",
        options: [
          "It had no significant impact",
          "Published by Harriet Beecher Stowe in 1852, the novel had an immense impact. It humanized the suffering of enslaved people and dramatically increased antislavery sentiment and moral outrage in the North, pushing many previously apathetic Northerners toward the abolitionist movement. It intensified the sectional conflict",
          "It decreased support for abolition",
          "It only affected Southern readers",
        ],
        acceptableAnswers: [
          "Published by Harriet Beecher Stowe in 1852, the novel had an immense impact. It humanized the suffering of enslaved people and dramatically increased antislavery sentiment and moral outrage in the North, pushing many previously apathetic Northerners toward the abolitionist movement. It intensified the sectional conflict",
        ],
        explanation:
          "Uncle Tom's Cabin (1852) by Harriet Beecher Stowe humanized slavery's horrors, dramatically increasing Northern antislavery sentiment and intensifying sectional conflict.",
      },
      {
        type: "multiple-choice",
        question: "What is popular sovereignty?",
        options: [
          "The rule of the majority over the minority",
          "Popular sovereignty is the principle that the authority of the government is created and sustained by the will of its people, through their elected representatives. In the context of the slavery debate before the Civil War, it specifically referred to the idea that the residents of a territory should be able to vote to decide whether that territory would allow slavery or not",
          "The divine right of kings",
          "The absolute power of the federal government",
        ],
        acceptableAnswers: [
          "Popular sovereignty is the principle that the authority of the government is created and sustained by the will of its people, through their elected representatives. In the context of the slavery debate before the Civil War, it specifically referred to the idea that the residents of a territory should be able to vote to decide whether that territory would allow slavery or not",
        ],
        explanation:
          "Popular sovereignty is the principle that government authority comes from the people. In the slavery context, it meant territories could vote on whether to allow slavery.",
      },
      {
        type: "multiple-choice",
        question: "Where was the women's rights convention held in 1848?",
        options: [
          "Boston, Massachusetts",
          "Philadelphia, Pennsylvania",
          "Seneca Falls, New York",
          "Washington, D.C.",
        ],
        acceptableAnswers: ["Seneca Falls, New York"],
        explanation:
          "The first women's rights convention was held in Seneca Falls, New York in 1848, marking the beginning of the organized women's rights movement.",
      },
    ],
  },
  {
    id: "early-colonies-us-history",
    name: "Early Colonies US History",
    category: "US History",
    description:
      "A quiz focusing on the establishment and key events of the early European colonies in North America, particularly the English settlements.",
    questions: [
      {
        type: "multiple-choice",
        question:
          "Which colony was the first permanent English settlement in the New World?",
        options: ["Plymouth", "Roanoke", "Jamestown", "Massachusetts Bay"],
        acceptableAnswers: ["Jamestown"],
        explanation:
          "Jamestown, Virginia, founded in 1607, was the first permanent English settlement in North America.",
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following was the first cash crop for the English in North America?",
        options: ["Cotton", "Tobacco", "Sugar", "Indigo"],
        acceptableAnswers: ["Tobacco"],
        explanation:
          "John Rolfe's experiments with tobacco cultivation in Jamestown led to it becoming a highly profitable cash crop for the English.",
      },
      {
        type: "multiple-choice",
        question: "Roger Williams was most associated with which principle?",
        options: [
          "Strict adherence to Puritan religious law",
          "The divine right of kings",
          "Separation of church and state",
          "Abolition of slavery",
        ],
        acceptableAnswers: ["Separation of church and state"],
        explanation:
          "Roger Williams advocated for religious freedom and the separation of church and state, leading him to found Providence (Rhode Island) where these principles were guaranteed.",
      },
      {
        type: "multiple-choice",
        question: "Why was Anne Hutchinson banished from Massachusetts Bay?",
        options: [
          "She committed treason against the colony.",
          "She argued for Native American land rights.",
          "Her religious teachings challenged the authority of Puritan ministers.",
          "She refused to attend church services.",
        ],
        acceptableAnswers: [
          "Her religious teachings challenged the authority of Puritan ministers.",
        ],
        explanation:
          "Anne Hutchinson was banished for her belief that individuals could have a direct relationship with God without the need for ministers to interpret the Bible, which undermined the authority of the Puritan clergy.",
      },
      {
        type: "multiple-choice",
        question:
          "Before New York City was surrendered by the Dutch, it was known by what name?",
        options: [
          "New Holland",
          "New Amsterdam",
          "New Rotterdam",
          "New Utrecht",
        ],
        acceptableAnswers: ["New Amsterdam"],
        explanation:
          "The Dutch settlement on Manhattan Island was originally called New Amsterdam before it was surrendered to the English in 1664 and renamed New York.",
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following led to an increase in English migration to the New World?",
        options: [
          "The decline of the English economy",
          "Overcrowding and religious persecution in England",
          "The discovery of gold in Virginia",
          "Improved relations with Native American tribes",
        ],
        acceptableAnswers: [
          "Overcrowding and religious persecution in England",
        ],
        explanation:
          "Many English sought new opportunities and religious freedom in the New World due to factors like overpopulation, economic hardship, and religious intolerance (especially for Puritans and Separatists) in England.",
      },
      {
        type: "multiple-choice",
        question:
          "Which modern-day state did the Pilgrims originally intend to go to?",
        options: ["Massachusetts", "New York", "Virginia", "Florida"],
        acceptableAnswers: ["Virginia"],
        explanation:
          "The Pilgrims aboard the Mayflower originally had a charter from the Virginia Company and intended to settle in the northern part of Virginia, but they were blown off course and landed in Massachusetts.",
      },
      {
        type: "multiple-choice",
        question:
          "Two major conflicts between the Puritans and Native Americans took place in 1637 and 1676. What was the result?",
        options: [
          "A lasting peace treaty between all parties",
          "The establishment of Native American self-governance",
          "Significant reduction of Native American power and land in New England",
          "The forced removal of all Puritans from New England",
        ],
        acceptableAnswers: [
          "Significant reduction of Native American power and land in New England",
        ],
        explanation:
          "The Pequot War (1637) and King Philip's War (1675-1676) resulted in devastating losses for Native American tribes in New England, severely diminishing their power and leading to further colonial expansion.",
      },
      {
        type: "multiple-choice",
        question:
          "What did the Mayflower Compact and the Virginia House of Burgesses have in common?",
        options: [
          "Both were documents guaranteeing religious freedom.",
          "Both were forms of early representative government or self-governance.",
          "Both were established by royal decree.",
          "Both focused primarily on trade agreements with Native Americans.",
        ],
        acceptableAnswers: [
          "Both were forms of early representative government or self-governance.",
        ],
        explanation:
          "The Mayflower Compact established a framework for self-governance based on majority rule, and the Virginia House of Burgesses was the first elected legislative body in colonial America, both demonstrating early steps towards representative government.",
      },
      {
        type: "multiple-choice",
        question: "Why was the Georgia Colony founded?",
        options: [
          "As a haven for religious dissenters",
          "To discover gold and silver deposits",
          "As a debtor's colony and a buffer against Spanish Florida",
          "For the cultivation of cotton plantations",
        ],
        acceptableAnswers: [
          "As a debtor's colony and a buffer against Spanish Florida",
        ],
        explanation:
          "Georgia was founded by James Oglethorpe as a philanthropic endeavor to give English debtors a fresh start and also served as a military buffer between the English colonies and Spanish Florida.",
      },
      {
        type: "multiple-choice",
        question:
          "Which colony was the first European settlement in the New World?",
        options: ["Jamestown", "Plymouth", "St. Augustine", "Quebec"],
        acceptableAnswers: ["St. Augustine"],
        explanation:
          "St. Augustine, Florida, founded by the Spanish in 1565, is considered the oldest continuously inhabited European-established settlement in the United States.",
      },
      {
        type: "multiple-choice",
        question:
          "What was the main reason for the Puritans' emigration to America?",
        options: [
          "To seek gold and silver",
          "To establish a fur trade with Native Americans",
          "To create a model 'holy' community and escape religious persecution",
          "To escape debts and imprisonment",
        ],
        acceptableAnswers: [
          "To create a model 'holy' community and escape religious persecution",
        ],
        explanation:
          "Unlike the profit-minded colonists at Jamestown, the Puritans emigrated to create a model new society—what John Winthrop called a 'City upon a Hill'—and escape increasing religious persecution in England.",
      },
      {
        type: "multiple-choice",
        question:
          "What was the primary difference between Separatists (Pilgrims) and other Puritans?",
        options: [
          "Separatists wanted to abolish the Church of England, while other Puritans wanted to reform it from within.",
          "Separatists believed in predestination, while other Puritans did not.",
          "Separatists only settled in Plymouth, while other Puritans settled in Massachusetts Bay.",
          "Separatists practiced religious tolerance, while other Puritans did not.",
        ],
        acceptableAnswers: [
          "Separatists wanted to abolish the Church of England, while other Puritans wanted to reform it from within.",
        ],
        explanation:
          "Separatists believed it was not possible to reform the Church of England from within and chose to form independent congregations, while other Puritans hoped to purify the Anglican church of its Catholic traces.",
      },
      {
        type: "multiple-choice",
        question:
          "The concept of 'City upon a Hill' was articulated by which Puritan leader?",
        options: [
          "Roger Williams",
          "William Bradford",
          "John Winthrop",
          "Anne Hutchinson",
        ],
        acceptableAnswers: ["John Winthrop"],
        explanation:
          "John Winthrop, the first governor of the Massachusetts Bay Colony, famously articulated the vision of their settlement as a 'City upon a Hill,' a model society for others to emulate.",
      },
      {
        type: "multiple-choice",
        question:
          "Who were considered 'freemen' with the right to vote in the Massachusetts Bay Colony?",
        options: [
          "All adult male colonists",
          "Only stockholders of the Massachusetts Bay Company",
          "Only adult males who belonged to the Puritan church",
          "All landowning citizens, male and female",
        ],
        acceptableAnswers: [
          "Only adult males who belonged to the Puritan church",
        ],
        explanation:
          "The Massachusetts Bay Company extended the right to vote to not only stockholders but to all adult males who belonged to the Puritan church, which was roughly 40 percent of the colony's men.",
      },
      {
        type: "multiple-choice",
        question:
          "What was a significant difference in family structure between early Virginia and Puritan New England settlements?",
        options: [
          "Virginia settlers brought their families, while Puritans came as single men.",
          "Puritans generally crossed the Atlantic as families, while Virginia settlers were often single men.",
          "Both colonies discouraged family units for several decades.",
          "Native American families were integrated into both colonial structures.",
        ],
        acceptableAnswers: [
          "Puritans generally crossed the Atlantic as families, while Virginia settlers were often single men.",
        ],
        explanation:
          "Unlike settlers in Virginia, Puritans generally crossed the Atlantic as families rather than as single men or women, leading to a different social and community structure.",
      },
      {
        type: "multiple-choice",
        question:
          "How did Native Americans generally view land treaties with Europeans?",
        options: [
          "As permanent sales of land ownership",
          "As agreements to share the land for a limited time",
          "As declarations of war",
          "As opportunities to claim European land",
        ],
        acceptableAnswers: [
          "As agreements to share the land for a limited time",
        ],
        explanation:
          "Native Americans saw land treaties as agreements to share the land for a limited time in exchange for gifts, whereas Europeans viewed them as permanent sales of land.",
      },
      {
        type: "multiple-choice",
        question: "What was the outcome of the Pequot War in 1637?",
        options: [
          "A peaceful resolution and land sharing agreement.",
          "The near destruction of the Pequot nation.",
          "The forced migration of Puritan settlers from Connecticut.",
          "An alliance between the Pequot and the English against other tribes.",
        ],
        acceptableAnswers: ["The near destruction of the Pequot nation."],
        explanation:
          "The Pequot War resulted in the near destruction of the Pequot nation, with many men, women, and children killed by colonists and their Native American allies.",
      },
      {
        type: "multiple-choice",
        question: "Who was Metacom, also known by the English as King Philip?",
        options: [
          "A Puritan governor of Massachusetts Bay",
          "A Wampanoag chief who led an alliance against English settlers",
          "A Quaker leader who promoted peace with Native Americans",
          "An English explorer who mapped New England",
        ],
        acceptableAnswers: [
          "A Wampanoag chief who led an alliance against English settlers",
        ],
        explanation:
          "Metacom, the Wampanoag chief known as King Philip, organized an alliance of tribes in a last-ditch effort to resist English colonial expansion in New England, leading to King Philip's War.",
      },
      {
        type: "multiple-choice",
        question:
          "What was a primary characteristic of New Netherland as a colony?",
        options: [
          "Strict religious uniformity",
          "A focus solely on agricultural exports",
          "A diverse population and religious tolerance",
          "Hostile relations with all Native American tribes",
        ],
        acceptableAnswers: ["A diverse population and religious tolerance"],
        explanation:
          "New Netherland was slow to attract Dutch colonists, so it opened its doors to a variety of people, including Germans, French, Scandinavians, and Africans, and generally enjoyed friendlier relations with some Native Americans.",
      },
      {
        type: "multiple-choice",
        question: "What was William Penn's 'holy experiment' in Pennsylvania?",
        options: [
          "An attempt to convert all Native Americans to Quakerism",
          "A colony without a landowning aristocracy, with representative government and religious freedom",
          "A military outpost to defend against French expansion",
          "A strict Puritan society with no tolerance for other faiths",
        ],
        acceptableAnswers: [
          "A colony without a landowning aristocracy, with representative government and religious freedom",
        ],
        explanation:
          "Penn envisioned Pennsylvania as a 'holy experiment' based on Quaker principles of equality, cooperation, religious toleration, and representative government, providing every adult male settler 50 acres of land and the right to vote.",
      },
      {
        type: "multiple-choice",
        question:
          "How did William Penn's approach to Native Americans differ from that of the Puritans?",
        options: [
          "Penn sought to conquer Native Americans, while Puritans sought peaceful coexistence.",
          "Penn paid Native Americans for land and fostered friendship, while Puritans often clashed with them.",
          "Both Penn and Puritans believed in forced conversion of Native Americans.",
          "Penn ignored Native American claims, while Puritans respected them.",
        ],
        acceptableAnswers: [
          "Penn paid Native Americans for land and fostered friendship, while Puritans often clashed with them.",
        ],
        explanation:
          "Penn believed in treating Native Americans fairly, paying them for land, and regulating trade, leading to over 50 years of peaceful relations in Pennsylvania, in contrast to the frequent conflicts between Puritans and Native Americans.",
      },
      {
        type: "multiple-choice",
        question:
          "Which English monarch granted William Penn the charter for Pennsylvania?",
        options: [
          "King James I",
          "Queen Elizabeth I",
          "King Charles I",
          "King Charles II",
        ],
        acceptableAnswers: ["King Charles II"],
        explanation:
          "King Charles II, who owed Penn's father money, granted William Penn a charter for the land that became Pennsylvania in 1681.",
      },
      {
        type: "multiple-choice",
        question:
          "What was a significant challenge faced by the early Jamestown colonists that contributed to the 'starving time'?",
        options: [
          "An overabundance of gold, distracting them from farming",
          "Severe drought, contaminated water, and a lack of farming effort by colonists",
          "Constant raids by Spanish forces",
          "Extreme cold temperatures year-round",
        ],
        acceptableAnswers: [
          "Severe drought, contaminated water, and a lack of farming effort by colonists",
        ],
        explanation:
          "Jamestown suffered from a severe drought, contaminated river water, and the colonists' unwillingness to farm, leading to widespread disease and hunger during the 'starving time'.",
      },
    ],
  },
  {
    id: "us-documents-quiz",
    name: "Foundational and Legislative Documents",
    category: "US History",
    description: "A multiple-choice quiz covering key founding documents and legislation from 1620 to 1973.",
    questions: [
      {
        type: "multiple-choice",
        question: "What did the Mayflower Compact (1620) establish?",
        options: [
          "A system of self-government in the Plymouth Colony",
          "The first democratic constitution in America",
          "Religious freedom for all colonists",
          "Trade agreements with Native Americans",
        ],
        acceptableAnswers: ["A system of self-government in the Plymouth Colony"],
        explanation: "The Mayflower Compact was an early agreement establishing a system of self-government in the Plymouth Colony.",
      },
      {
        type: "multiple-choice",
        question: "Which document is known as the first national system of government for the United States?",
        options: [
          "The U.S. Constitution",
          "The Declaration of Independence",
          "The Articles of Confederation",
          "The Bill of Rights",
        ],
        acceptableAnswers: ["The Articles of Confederation"],
        explanation: "The Articles of Confederation (1781) was the first national system of government, characterized by a weak central government and strong state governments.",
      },
      {
        type: "multiple-choice",
        question: "Which of these documents declared the separation of the thirteen colonies from Great Britain?",
        options: [
          "The Magna Carta",
          "The Declaration of Independence",
          "The Treaty of Paris",
          "The Proclamation Line",
        ],
        acceptableAnswers: ["The Declaration of Independence"],
        explanation: "The Declaration of Independence (1776) was used to announce the separation of the thirteen colonies from Great Britain.",
      },
      {
        type: "multiple-choice",
        question: "What principle is established by the Elastic Clause in the Constitution?",
        options: [
          "Religious freedom",
          "The government can only do what is explicitly allowed",
          "Congress can make laws necessary and proper to carry out its powers",
          "State governments have supreme authority",
        ],
        acceptableAnswers: ["Congress can make laws necessary and proper to carry out its powers"],
        explanation: "The Elastic Clause allows the federal government to make laws necessary and proper to execute its enumerated powers.",
      },
      {
        type: "multiple-choice",
        question: "Who wrote the Federalist Papers?",
        options: [
          "George Washington, John Adams, and Thomas Jefferson",
          "Alexander Hamilton, James Madison, and John Jay",
          "Benjamin Franklin, James Monroe, and John Quincy Adams",
          "Samuel Adams, Paul Revere, and John Hancock",
        ],
        acceptableAnswers: ["Alexander Hamilton, James Madison, and John Jay"],
        explanation: "The Federalist Papers were written by Alexander Hamilton, James Madison, and John Jay to encourage ratification of the Constitution.",
      },
      {
        type: "multiple-choice",
        question: "The Bill of Rights consists of how many amendments to the Constitution?",
        options: ["5", "8", "10", "12"],
        acceptableAnswers: ["10"],
        explanation: "The Bill of Rights (1791) consists of the first ten amendments to the Constitution.",
      },
      {
        type: "multiple-choice",
        question: "What did the Stamp Act (1765) impose on American colonists?",
        options: [
          "A tax on imports from Britain",
          "A direct tax on printed materials",
          "A military draft",
          "Religious restrictions",
        ],
        acceptableAnswers: ["A direct tax on printed materials"],
        explanation: "The Stamp Act was a British law imposing a direct tax on printed materials, leading to protests of taxation without representation.",
      },
      {
        type: "multiple-choice",
        question: "What policy did the Monroe Doctrine (1823) establish?",
        options: [
          "The U.S. would colonize South America",
          "European nations could freely intervene in the Western Hemisphere",
          "The U.S. would oppose European intervention in the Western Hemisphere",
          "All European powers must pay tribute to the U.S.",
        ],
        acceptableAnswers: ["The U.S. would oppose European intervention in the Western Hemisphere"],
        explanation: "The Monroe Doctrine stated that the United States would oppose European intervention in the Western Hemisphere.",
      },
      {
        type: "multiple-choice",
        question: "Which amendment abolished slavery?",
        options: [
          "13th Amendment",
          "14th Amendment",
          "15th Amendment",
          "16th Amendment",
        ],
        acceptableAnswers: ["13th Amendment"],
        explanation: "The 13th Amendment abolished slavery throughout the United States.",
      },
      {
        type: "multiple-choice",
        question: "What did the Emancipation Proclamation (1863) declare?",
        options: [
          "All enslaved people were immediately freed everywhere",
          "Enslaved people in Confederate-held territory were free",
          "Slavery would end after 10 years",
          "Northern states could no longer trade with slaveholding states",
        ],
        acceptableAnswers: ["Enslaved people in Confederate-held territory were free"],
        explanation: "The Emancipation Proclamation was an executive order declaring enslaved people in Confederate-held territory to be free.",
      },
    ],
  },
  {
    id: "us-court-cases-quiz",
    name: "Supreme Court Cases Quiz",
    category: "US History",
    description: "A multiple-choice quiz on landmark Supreme Court cases that shaped American law and society.",
    questions: [
      {
        type: "multiple-choice",
        question: "Which case established the principle of judicial review?",
        options: [
          "Plessy v. Ferguson",
          "Marbury v. Madison",
          "Brown v. Board of Education",
          "McCulloch v. Maryland",
        ],
        acceptableAnswers: ["Marbury v. Madison"],
        explanation: "Marbury v. Madison (1803) established the principle of judicial review, allowing the Supreme Court to determine the constitutionality of laws.",
      },
      {
        type: "multiple-choice",
        question: "What did McCulloch v. Maryland (1819) establish?",
        options: [
          "Separate but equal is constitutional",
          "Federal supremacy over state laws",
          "African Americans are not citizens",
          "Free speech can be limited during wartime",
        ],
        acceptableAnswers: ["Federal supremacy over state laws"],
        explanation: "McCulloch v. Maryland confirmed the constitutionality of the Bank of the United States and established the principle of federal supremacy.",
      },
      {
        type: "multiple-choice",
        question: "Worcester v. Georgia (1832) was significant because it concerned:",
        options: [
          "Women's suffrage rights",
          "Native American sovereignty",
          "Religious freedom",
          "Interstate commerce",
        ],
        acceptableAnswers: ["Native American sovereignty"],
        explanation: "Worcester v. Georgia was a ruling concerning Native American sovereignty that President Andrew Jackson refused to enforce.",
      },
      {
        type: "multiple-choice",
        question: "What did Dred Scott v. Sanford (1857) rule?",
        options: [
          "Slavery was unconstitutional",
          "African Americans were citizens with rights",
          "African Americans were not citizens and Congress could not ban slavery in territories",
          "States had the right to nullify federal laws",
        ],
        acceptableAnswers: ["African Americans were not citizens and Congress could not ban slavery in territories"],
        explanation: "Dred Scott v. Sanford ruled that African Americans were not citizens and that Congress could not ban slavery in the territories.",
      },
      {
        type: "multiple-choice",
        question: "What was the 'separate but equal' doctrine established in?",
        options: [
          "Brown v. Board of Education",
          "Plessy v. Ferguson",
          "Miranda v. Arizona",
          "Korematsu v. United States",
        ],
        acceptableAnswers: ["Plessy v. Ferguson"],
        explanation: "Plessy v. Ferguson (1896) upheld racial segregation under the separate but equal doctrine.",
      },
      {
        type: "multiple-choice",
        question: "Schenck v. United States (1919) established which test?",
        options: [
          "The clear and present danger test",
          "The separate but equal test",
          "The strict scrutiny test",
          "The rational basis test",
        ],
        acceptableAnswers: ["The clear and present danger test"],
        explanation: "Schenck v. United States established the clear and present danger test, allowing government to limit free speech during wartime.",
      },
      {
        type: "multiple-choice",
        question: "Which case overturned Plessy v. Ferguson?",
        options: [
          "Miranda v. Arizona",
          "Korematsu v. United States",
          "Brown v. Board of Education",
          "Marbury v. Madison",
        ],
        acceptableAnswers: ["Brown v. Board of Education"],
        explanation: "Brown v. Board of Education (1954) overturned Plessy v. Ferguson and ruled that racial segregation in public schools was unconstitutional.",
      },
      {
        type: "multiple-choice",
        question: "Miranda v. Arizona (1966) required that:",
        options: [
          "Police obtain a search warrant before any arrest",
          "Detained suspects be informed of their rights",
          "All trials must be public",
          "Suspects cannot be questioned without a lawyer",
        ],
        acceptableAnswers: ["Detained suspects be informed of their rights"],
        explanation: "Miranda v. Arizona ruled that detained criminal suspects must be informed of their constitutional rights to an attorney and against self-incrimination.",
      },
      {
        type: "multiple-choice",
        question: "Korematsu v. United States (1944) upheld:",
        options: [
          "Segregation in public schools",
          "The internment of Japanese Americans during WWII",
          "Voting restrictions for immigrants",
          "The breaking up of monopolies",
        ],
        acceptableAnswers: ["The internment of Japanese Americans during WWII"],
        explanation: "Korematsu v. United States upheld the government's decision to intern Japanese Americans during WWII based on military necessity.",
      },
      {
        type: "multiple-choice",
        question: "What principle did Marbury v. Madison establish about the Constitution?",
        options: [
          "The Constitution cannot be changed",
          "The Supreme Court has the final say on what the Constitution means",
          "Congress can ignore Supreme Court decisions",
          "States are superior to the federal government",
        ],
        acceptableAnswers: ["The Supreme Court has the final say on what the Constitution means"],
        explanation: "Marbury v. Madison established that the Supreme Court has the authority to interpret the Constitution and declare laws unconstitutional.",
      },
    ],
  },
  {
    id: "us-historical-figures-quiz",
    name: "American Historical Figures Quiz",
    category: "US History",
    description: "A multiple-choice quiz on important figures in American history from the founding era to the civil rights movement.",
    questions: [
      {
        type: "multiple-choice",
        question: "George Washington's Farewell Address warned against:",
        options: [
          "Permanent foreign alliances and political parties",
          "Expansion westward",
          "Manufacturing in the North",
          "Religious freedom",
        ],
        acceptableAnswers: ["Permanent foreign alliances and political parties"],
        explanation: "In his Farewell Address, Washington warned against the dangers of factionalism and permanent foreign alliances.",
      },
      {
        type: "multiple-choice",
        question: "Alexander Hamilton was the first:",
        options: [
          "President of the United States",
          "Secretary of State",
          "Secretary of the Treasury",
          "Chief Justice of the Supreme Court",
        ],
        acceptableAnswers: ["Secretary of the Treasury"],
        explanation: "Alexander Hamilton was the first Secretary of the Treasury and advocated for a strong central government and a national bank.",
      },
      {
        type: "multiple-choice",
        question: "Thomas Jefferson is most famous for:",
        options: [
          "Commanding the Continental Army",
          "Authoring the Declaration of Independence",
          "Creating the Federal Reserve",
          "Establishing the Supreme Court",
        ],
        acceptableAnswers: ["Authoring the Declaration of Independence"],
        explanation: "Thomas Jefferson was the author of the Declaration of Independence and the third President.",
      },
      {
        type: "multiple-choice",
        question: "James Madison is often referred to as:",
        options: [
          "The Father of Federalism",
          "The Father of the Constitution",
          "The Father of Democracy",
          "The Father of Capitalism",
        ],
        acceptableAnswers: ["The Father of the Constitution"],
        explanation: "James Madison is known as the father of the Constitution and was the primary author of the Federalist Papers.",
      },
      {
        type: "multiple-choice",
        question: "Andrew Jackson's administration is primarily associated with:",
        options: [
          "Expansion of Native American rights",
          "Free trade policies",
          "The Indian Removal Act and Trail of Tears",
          "Abolition of slavery",
        ],
        acceptableAnswers: ["The Indian Removal Act and Trail of Tears"],
        explanation: "Andrew Jackson's administration signed the Indian Removal Act, which led to the forced relocation of Native Americans known as the Trail of Tears.",
      },
      {
        type: "multiple-choice",
        question: "Abraham Lincoln is remembered for:",
        options: [
          "Expanding slavery into new territories",
          "Issuing the Emancipation Proclamation and preserving the Union",
          "Building the Panama Canal",
          "Establishing the Federal Reserve System",
        ],
        acceptableAnswers: ["Issuing the Emancipation Proclamation and preserving the Union"],
        explanation: "Abraham Lincoln was the 16th President during the Civil War and issued the Emancipation Proclamation.",
      },
      {
        type: "multiple-choice",
        question: "Theodore Roosevelt is known for supporting:",
        options: [
          "Isolationism",
          "The regulation of trusts and conservation of natural resources",
          "State nullification of federal laws",
          "The expansion of slavery",
        ],
        acceptableAnswers: ["The regulation of trusts and conservation of natural resources"],
        explanation: "Theodore Roosevelt supported the regulation of trusts, conservation of natural resources, and construction of the Panama Canal.",
      },
      {
        type: "multiple-choice",
        question: "Franklin D. Roosevelt is primarily associated with:",
        options: [
          "The Great Depression",
          "The Cold War",
          "The New Deal and Social Security Act",
          "The Spanish-American War",
        ],
        acceptableAnswers: ["The New Deal and Social Security Act"],
        explanation: "Franklin D. Roosevelt implemented the New Deal programs and the Social Security Act during the Great Depression.",
      },
      {
        type: "multiple-choice",
        question: "Susan B. Anthony is famous for:",
        options: [
          "Leading the Civil Rights Movement",
          "Advocating for women's suffrage",
          "Writing the Declaration of Independence",
          "Commanding the Continental Army",
        ],
        acceptableAnswers: ["Advocating for women's suffrage"],
        explanation: "Susan B. Anthony was a leader in the women's suffrage movement and was arrested for attempting to vote in 1872.",
      },
      {
        type: "multiple-choice",
        question: "Martin Luther King Jr. is best known for:",
        options: [
          "Leading violent uprisings",
          "Advocating for nonviolent protest and equal rights",
          "Serving as President of the United States",
          "Writing the Constitution",
        ],
        acceptableAnswers: ["Advocating for nonviolent protest and equal rights"],
        explanation: "Martin Luther King Jr. was a prominent leader of the Civil Rights Movement who advocated for nonviolent protest and equal rights.",
      },
    ],
  },
  {
    id: "us-historical-periods-quiz",
    name: "Historical Periods and Events Quiz",
    category: "US History",
    description: "A multiple-choice quiz covering major historical periods and events in American history.",
    questions: [
      {
        type: "multiple-choice",
        question: "The Louisiana Purchase (1803) doubled the size of the United States by acquiring territory from:",
        options: ["Spain", "France", "Britain", "Mexico"],
        acceptableAnswers: ["France"],
        explanation: "The Louisiana Purchase was the acquisition of the Louisiana Territory from France.",
      },
      {
        type: "multiple-choice",
        question: "Which 19th-century belief justified U.S. expansion across North America?",
        options: [
          "Isolationism",
          "Manifest Destiny",
          "Popular Sovereignty",
          "Mercantilism",
        ],
        acceptableAnswers: ["Manifest Destiny"],
        explanation: "Manifest Destiny was the 19th-century belief that U.S. expansion across the North American continent was justified and inevitable.",
      },
      {
        type: "multiple-choice",
        question: "Reconstruction lasted from:",
        options: ["1861-1865", "1865-1877", "1877-1890", "1890-1920"],
        acceptableAnswers: ["1865-1877"],
        explanation: "Reconstruction (1865-1877) was the period after the Civil War focused on reintegrating Southern states.",
      },
      {
        type: "multiple-choice",
        question: "The Progressive Era (1890s-1920s) focused on addressing problems caused by:",
        options: [
          "Agricultural decline",
          "Isolation from trade",
          "Industrialization, urbanization, and corruption",
          "Excessive government regulation",
        ],
        acceptableAnswers: ["Industrialization, urbanization, and corruption"],
        explanation: "The Progressive Era was a period of social and political reform focused on addressing problems caused by industrialization, urbanization, and corruption.",
      },
      {
        type: "multiple-choice",
        question: "The Great Migration involved:",
        options: [
          "Westward expansion to California",
          "Movement of African Americans from rural South to Northern cities",
          "European immigration to America",
          "Native American relocation westward",
        ],
        acceptableAnswers: ["Movement of African Americans from rural South to Northern cities"],
        explanation: "The Great Migration was the movement of millions of African Americans from the rural South to cities in the North and West.",
      },
      {
        type: "multiple-choice",
        question: "The Great Depression lasted from:",
        options: ["1920-1929", "1929-1939", "1939-1945", "1945-1950"],
        acceptableAnswers: ["1929-1939"],
        explanation: "The Great Depression (1929-1939) was a severe worldwide economic downturn following the stock market crash.",
      },
      {
        type: "multiple-choice",
        question: "The New Deal provided:",
        options: [
          "Military support for Britain",
          "Relief, recovery, and reform during the Great Depression",
          "Trade agreements with Latin America",
          "Infrastructure for the Panama Canal",
        ],
        acceptableAnswers: ["Relief, recovery, and reform during the Great Depression"],
        explanation: "The New Deal was a series of programs enacted by FDR to provide relief, recovery, and reform during the Great Depression.",
      },
      {
        type: "multiple-choice",
        question: "The Cold War was a period of tension between:",
        options: [
          "America and Britain",
          "America and Japan",
          "America and the Soviet Union",
          "America and China",
        ],
        acceptableAnswers: ["America and the Soviet Union"],
        explanation: "The Cold War (1947-1991) was a period of geopolitical tension between the United States and the Soviet Union.",
      },
      {
        type: "multiple-choice",
        question: "The Watergate Affair led to:",
        options: [
          "The impeachment of Johnson",
          "The resignation of President Nixon",
          "The creation of the FBI",
          "The Vietnam War",
        ],
        acceptableAnswers: ["The resignation of President Nixon"],
        explanation: "The Watergate Affair (1972-1974) was a political scandal that led to President Richard Nixon's resignation.",
      },
      {
        type: "multiple-choice",
        question: "The Homestead Act (1862) encouraged westward migration by:",
        options: [
          "Providing military protection",
          "Building railroads",
          "Providing settlers with 160 acres of public land",
          "Giving tax breaks to farmers",
        ],
        acceptableAnswers: ["Providing settlers with 160 acres of public land"],
        explanation: "The Homestead Act encouraged Western migration by providing settlers with 160 acres of public land.",
      },
    ],
  },
  {
    id: "us-comprehensive-history-quiz",
    name: "Comprehensive U.S. History Quiz",
    category: "US History",
    description: "A comprehensive multiple-choice quiz mixing all topics: documents, cases, figures, periods, programs, and amendments.",
    questions: [
      {
        type: "multiple-choice",
        question: "What does the Sherman Antitrust Act (1890) regulate?",
        options: [
          "Environmental protection",
          "Labor union activities",
          "Business practices that create monopolies or limit competition",
          "Agricultural production",
        ],
        acceptableAnswers: ["Business practices that create monopolies or limit competition"],
        explanation: "The Sherman Antitrust Act was a federal law intended to regulate business practices that limited competition or created monopolies.",
      },
      {
        type: "multiple-choice",
        question: "The Fourteenth Amendment (1868) provides:",
        options: [
          "The right to vote for women",
          "Equal protection of laws and due process to all citizens",
          "The abolition of slavery",
          "Prohibition of alcohol",
        ],
        acceptableAnswers: ["Equal protection of laws and due process to all citizens"],
        explanation: "The Fourteenth Amendment (1868) provided equal protection of the laws and due process to all citizens.",
      },
      {
        type: "multiple-choice",
        question: "Which amendment granted women the right to vote?",
        options: [
          "16th Amendment",
          "17th Amendment",
          "18th Amendment",
          "19th Amendment",
        ],
        acceptableAnswers: ["19th Amendment"],
        explanation: "The Nineteenth Amendment (1920) prohibited the denial of the right to vote on account of sex.",
      },
      {
        type: "multiple-choice",
        question: "The War Powers Resolution (1973) was intended to:",
        options: [
          "Expand presidential war powers",
          "Check the president's power to commit the U.S. to armed conflict",
          "Grant Congress control over military budgets",
          "Establish a standing military",
        ],
        acceptableAnswers: ["Check the president's power to commit the U.S. to armed conflict"],
        explanation: "The War Powers Resolution was intended to check the president's power to commit the U.S. to armed conflict without congressional consent.",
      },
      {
        type: "multiple-choice",
        question: "The Fundamental Orders of Connecticut (1639) established:",
        options: [
          "Religious freedom",
          "Slavery restrictions",
          "Representative government",
          "Separation from Britain",
        ],
        acceptableAnswers: ["Representative government"],
        explanation: "The Fundamental Orders of Connecticut was an early colonial constitution establishing representative government.",
      },
      {
        type: "multiple-choice",
        question: "The Maryland Toleration Act (1649) provided:",
        options: [
          "Freedom for all religions",
          "Religious freedom to Christian denominations",
          "Voting rights to all colonists",
          "Land rights to Native Americans",
        ],
        acceptableAnswers: ["Religious freedom to Christian denominations"],
        explanation: "The Maryland Toleration Act was a law providing religious freedom to Christian denominations in the Maryland colony.",
      },
      {
        type: "multiple-choice",
        question: "Which figure is known for completing the Louisiana Purchase?",
        options: [
          "George Washington",
          "Alexander Hamilton",
          "Thomas Jefferson",
          "Andrew Jackson",
        ],
        acceptableAnswers: ["Thomas Jefferson"],
        explanation: "Thomas Jefferson was the third President who completed the Louisiana Purchase.",
      },
      {
        type: "multiple-choice",
        question: "Lyndon B. Johnson signed which civil rights legislation?",
        options: [
          "The 13th Amendment",
          "The Civil Rights Act of 1964 and Voting Rights Act of 1965",
          "The Emancipation Proclamation",
          "The 14th Amendment",
        ],
        acceptableAnswers: ["The Civil Rights Act of 1964 and Voting Rights Act of 1965"],
        explanation: "Lyndon B. Johnson signed the Civil Rights Act of 1964 and the Voting Rights Act of 1965.",
      },
      {
        type: "multiple-choice",
        question: "Woodrow Wilson proposed which international organization?",
        options: [
          "The United Nations",
          "The League of Nations",
          "NATO",
          "The World Bank",
        ],
        acceptableAnswers: ["The League of Nations"],
        explanation: "Woodrow Wilson, the 28th President, proposed the Fourteen Points and the League of Nations.",
      },
      {
        type: "multiple-choice",
        question: "Harry Truman is known for implementing:",
        options: [
          "The New Deal",
          "The Great Society",
          "The policy of containment during the Cold War",
          "The Fair Deal",
        ],
        acceptableAnswers: ["The policy of containment during the Cold War"],
        explanation: "Harry Truman authorized the use of atomic weapons and implemented the policy of containment during the Cold War.",
      },
      {
        type: "multiple-choice",
        question: "Dwight D. Eisenhower sent federal troops to:",
        options: [
          "Enforce the Voting Rights Act",
          "Enforce school integration in Little Rock, Arkansas",
          "Support the Civil Rights March",
          "Protect Native American reservations",
        ],
        acceptableAnswers: ["Enforce school integration in Little Rock, Arkansas"],
        explanation: "Eisenhower sent federal troops to enforce school integration in Little Rock, Arkansas.",
      },
      {
        type: "multiple-choice",
        question: "John D. Rockefeller founded which company?",
        options: [
          "Carnegie Steel",
          "Standard Oil Company",
          "AT&T",
          "General Electric",
        ],
        acceptableAnswers: ["Standard Oil Company"],
        explanation: "John D. Rockefeller established the Standard Oil Company and was often targeted by antitrust legislation.",
      },
      {
        type: "multiple-choice",
        question: "Upton Sinclair's novel 'The Jungle' led to:",
        options: [
          "The Sherman Antitrust Act",
          "The Homestead Act",
          "Federal meat inspection laws",
          "The creation of the FDA",
        ],
        acceptableAnswers: ["Federal meat inspection laws"],
        explanation: "Upton Sinclair's novel 'The Jungle' exposed unsanitary meatpacking conditions, leading to federal meat inspection laws.",
      },
      {
        type: "multiple-choice",
        question: "The CCC (Civilian Conservation Corps) was a New Deal program that:",
        options: [
          "Provided industrial jobs in cities",
          "Employed young men in environmental conservation",
          "Built the Interstate Highway System",
          "Funded agricultural research",
        ],
        acceptableAnswers: ["Employed young men in environmental conservation"],
        explanation: "The CCC was a New Deal work relief program employing young men in environmental conservation projects.",
      },
      {
        type: "multiple-choice",
        question: "The FDIC (Federal Deposit Insurance Corporation) was created to:",
        options: [
          "Regulate stock markets",
          "Provide deposit insurance to depositors in U.S. banks",
          "Control inflation",
          "Build federal infrastructure",
        ],
        acceptableAnswers: ["Provide deposit insurance to depositors in U.S. banks"],
        explanation: "The FDIC was created to provide deposit insurance to depositors in United States banks.",
      },
      {
        type: "multiple-choice",
        question: "NATO (North Atlantic Treaty Organization) was formed in:",
        options: ["1945", "1947", "1949", "1951"],
        acceptableAnswers: ["1949"],
        explanation: "NATO was formed in 1949 as a military alliance between North American and European nations for mutual defense.",
      },
      {
        type: "multiple-choice",
        question: "The SNCC (Student Nonviolent Coordinating Committee) focused on:",
        options: [
          "Labor union activities",
          "Voter registration and nonviolent protest",
          "Environmental conservation",
          "International trade",
        ],
        acceptableAnswers: ["Voter registration and nonviolent protest"],
        explanation: "SNCC was a student-led civil rights organization focusing on voter registration and nonviolent protest.",
      },
      {
        type: "multiple-choice",
        question: "The AIM (American Indian Movement) was founded in:",
        options: ["1968", "1960", "1975", "1980"],
        acceptableAnswers: ["1968"],
        explanation: "AIM was founded in 1968 to address issues of Native American sovereignty and treaty rights.",
      },
      {
        type: "multiple-choice",
        question: "The FTC (Federal Trade Commission) was established to:",
        options: [
          "Regulate international trade",
          "Prevent unfair business practices and protect consumers",
          "Manage federal finances",
          "Oversee agricultural production",
        ],
        acceptableAnswers: ["Prevent unfair business practices and protect consumers"],
        explanation: "The FTC was established to prevent unfair business practices and protect consumers.",
      },
      {
        type: "multiple-choice",
        question: "CORE (Congress of Racial Equality) was known for organizing:",
        options: [
          "The Montgomery Bus Boycott",
          "The March on Washington",
          "The Freedom Rides",
          "The Selma to Montgomery marches",
        ],
        acceptableAnswers: ["The Freedom Rides"],
        explanation: "CORE played a pivotal role in the Civil Rights Movement, including organizing the Freedom Rides.",
      },
    ],
  },
  {
    id: "muckrakers-reform-quiz",
    name: "Muckrakers and Reform Legislation",
    category: "US History",
    description: "A multiple-choice quiz on Progressive Era muckrakers and the reform legislation their investigations triggered.",
    questions: [
      {
        type: "multiple-choice",
        question: "What were muckrakers?",
        options: [
          "Political bosses who controlled city governments",
          "Investigative journalists and photographers who exposed social problems",
          "Members of labor unions fighting for workers' rights",
          "Business leaders who opposed government regulation",
        ],
        acceptableAnswers: ["Investigative journalists and photographers who exposed social problems"],
        explanation: "Muckrakers were investigative journalists, authors, and photographers during the Progressive Era who documented social, economic, and political problems.",
      },
      {
        type: "multiple-choice",
        question: "Which muckraker wrote 'The Jungle' (1906)?",
        options: [
          "Ida B. Wells",
          "Upton Sinclair",
          "Jacob Riis",
          "Lincoln Steffens",
        ],
        acceptableAnswers: ["Upton Sinclair"],
        explanation: "Upton Sinclair wrote 'The Jungle' documenting unsanitary conditions and labor abuses in the meatpacking industry.",
      },
      {
        type: "multiple-choice",
        question: "What subject did Upton Sinclair's 'The Jungle' expose?",
        options: [
          "Political corruption in city governments",
          "Tenement housing conditions in New York",
          "Unsanitary conditions and labor abuses in meatpacking",
          "Monopoly practices of the railroad industry",
        ],
        acceptableAnswers: ["Unsanitary conditions and labor abuses in meatpacking"],
        explanation: "'The Jungle' documented the unsanitary conditions and labor abuses in the meatpacking industry in Chicago.",
      },
      {
        type: "multiple-choice",
        question: "What legislation did Sinclair's work lead to in 1906?",
        options: [
          "The Sherman Antitrust Act",
          "The Meat Inspection Act and Pure Food and Drug Act",
          "The Tenement House Act",
          "The Hepburn Act",
        ],
        acceptableAnswers: ["The Meat Inspection Act and Pure Food and Drug Act"],
        explanation: "'The Jungle' led directly to the passage of the Meat Inspection Act and the Pure Food and Drug Act in 1906.",
      },
      {
        type: "multiple-choice",
        question: "Jacob Riis used which medium to expose tenement conditions?",
        options: [
          "Novels and fiction",
          "Political speeches",
          "Flash photography and writing",
          "Government reports",
        ],
        acceptableAnswers: ["Flash photography and writing"],
        explanation: "Jacob Riis used flash photography and writing in 'How the Other Half Lives' to expose tenement house conditions.",
      },
      {
        type: "multiple-choice",
        question: "What was the impact of Jacob Riis's 'How the Other Half Lives'?",
        options: [
          "It abolished child labor nationwide",
          "It led to the New York State Tenement House Act and new building codes",
          "It dissolved railroad monopolies",
          "It ended political machine control of cities",
        ],
        acceptableAnswers: ["It led to the New York State Tenement House Act and new building codes"],
        explanation: "Riis's work led to the passage of the New York State Tenement House Act and new building codes for ventilation, plumbing, and fire safety.",
      },
      {
        type: "multiple-choice",
        question: "Ida Tarbell's 'The History of the Standard Oil Company' exposed:",
        options: [
          "Corruption in city governments",
          "Unfair business practices and monopoly by John D. Rockefeller",
          "Abuse in mental institutions",
          "Labor abuses in factories",
        ],
        acceptableAnswers: ["Unfair business practices and monopoly by John D. Rockefeller"],
        explanation: "Tarbell exposed the horizontal integration and unfair business practices used by John D. Rockefeller to create a monopoly.",
      },
      {
        type: "multiple-choice",
        question: "What was the result of Ida Tarbell's investigation of Standard Oil?",
        options: [
          "New food inspection regulations",
          "Improved working conditions in factories",
          "Contributed to Supreme Court decision to dissolve the monopoly in 1911",
          "New voting rights legislation",
        ],
        acceptableAnswers: ["Contributed to Supreme Court decision to dissolve the monopoly in 1911"],
        explanation: "Tarbell's work increased pressure for enforcement of the Sherman Antitrust Act, leading to the Supreme Court's decision to dissolve Standard Oil in 1911.",
      },
      {
        type: "multiple-choice",
        question: "Lincoln Steffens wrote 'The Shame of the Cities' to expose:",
        options: [
          "Meatpacking industry conditions",
          "Tenement housing problems",
          "Political corruption and political machines in municipal governments",
          "Racial violence and lynching",
        ],
        acceptableAnswers: ["Political corruption and political machines in municipal governments"],
        explanation: "'The Shame of the Cities' documented political corruption and the influence of political machines in municipal governments.",
      },
      {
        type: "multiple-choice",
        question: "What new forms of government did Steffens's work encourage cities to adopt?",
        options: [
          "Monarchy and aristocracy",
          "Direct democracy and town halls",
          "City manager system and commission system",
          "Military rule",
        ],
        acceptableAnswers: ["City manager system and commission system"],
        explanation: "Steffens's work encouraged cities to adopt new forms of government such as the city manager and commission systems to reduce political boss power.",
      },
      {
        type: "multiple-choice",
        question: "Ida B. Wells investigated which social issue in 'A Red Record'?",
        options: [
          "Child labor in factories",
          "Lynching as a tool of racial control",
          "Exploitation in the meatpacking industry",
          "Corruption in political machines",
        ],
        acceptableAnswers: ["Lynching as a tool of racial control"],
        explanation: "'A Red Record' investigated and published statistics about lynching in the United States to show it was used as a tool of racial control.",
      },
      {
        type: "multiple-choice",
        question: "What organization used Ida B. Wells's work as a foundation for future campaigns?",
        options: [
          "The American Federation of Labor",
          "The NAACP",
          "The Progressive Party",
          "The Industrial Workers of the World",
        ],
        acceptableAnswers: ["The NAACP"],
        explanation: "Wells's investigation of lynching provided a foundation for the future anti-lynching legislative campaigns of the NAACP.",
      },
      {
        type: "multiple-choice",
        question: "Frank Norris wrote 'The Octopus' about conflict between:",
        options: [
          "Factory workers and owners",
          "Meatpacking companies and consumers",
          "Wheat farmers and railroad monopoly",
          "Tenement residents and landlords",
        ],
        acceptableAnswers: ["Wheat farmers and railroad monopoly"],
        explanation: "'The Octopus' was a fictionalized account of the conflict between wheat farmers in California and the monopoly held by the railroad industry.",
      },
      {
        type: "multiple-choice",
        question: "Which act addressed railroad regulation as a result of Frank Norris's work?",
        options: [
          "The Sherman Antitrust Act",
          "The Hepburn Act",
          "The Meat Inspection Act",
          "The Interstate Commerce Act",
        ],
        acceptableAnswers: ["The Hepburn Act"],
        explanation: "Norris's work built public support for government regulation of railroad freight rates, addressed by the Hepburn Act.",
      },
      {
        type: "multiple-choice",
        question: "Nellie Bly investigated which institution in 'Ten Days in a Mad-House'?",
        options: [
          "A meatpacking plant",
          "A tenement building",
          "The Women's Lunatic Asylum on Blackwell's Island",
          "A railroad company",
        ],
        acceptableAnswers: ["The Women's Lunatic Asylum on Blackwell's Island"],
        explanation: "'Ten Days in a Mad-House' investigated reports of abuse and neglect at the Women's Lunatic Asylum on Blackwell's Island.",
      },
      {
        type: "multiple-choice",
        question: "What was the result of Nellie Bly's investigation of the asylum?",
        options: [
          "The asylum was closed permanently",
          "Grand jury investigation and increased budget for patient care",
          "All mental hospitals were abolished",
          "Doctors were arrested for crimes",
        ],
        acceptableAnswers: ["Grand jury investigation and increased budget for patient care"],
        explanation: "Bly's investigation led to a grand jury investigation and a significant increase in the budget for the Department of Public Charities and Corrections.",
      },
      {
        type: "multiple-choice",
        question: "Which muckraker's work directly led to building code improvements?",
        options: [
          "Upton Sinclair",
          "Jacob Riis",
          "Ida Tarbell",
          "Lincoln Steffens",
        ],
        acceptableAnswers: ["Jacob Riis"],
        explanation: "Jacob Riis's exposure of tenement conditions led to new building codes for ventilation, indoor plumbing, and fire safety.",
      },
      {
        type: "multiple-choice",
        question: "The overall goal of muckraker journalism was to:",
        options: [
          "Entertain the public with sensational stories",
          "Make journalists wealthy through book sales",
          "Trigger government action and legislative reform",
          "Support business owners against workers",
        ],
        acceptableAnswers: ["Trigger government action and legislative reform"],
        explanation: "Muckraker work was intended to trigger government action and legislative reform addressing social, economic, and political problems.",
      },
      {
        type: "multiple-choice",
        question: "Which muckraker's work led to monopoly dissolution?",
        options: [
          "Jacob Riis",
          "Ida B. Wells",
          "Ida Tarbell",
          "Nellie Bly",
        ],
        acceptableAnswers: ["Ida Tarbell"],
        explanation: "Ida Tarbell's investigation of Standard Oil contributed to the Supreme Court's decision to dissolve the monopoly.",
      },
    ],
  },
];

export const categories = Array.from(
  new Set(quizTemplates.map((template) => template.category)),
);
