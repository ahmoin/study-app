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
    id: "windows-os-history",
    name: "Windows OS History",
    category: "Computer Science",
    description:
      "Comprehensive test on Windows Operating System history, features, and security",
    questions: [
      // Early Windows and MS-DOS
      {
        type: "multiple-choice",
        question:
          "What was the primary storage method used by the first computers before disk drives?",
        options: [
          "USB Drives",
          "Punch cards and paper tape",
          "Hard disk drives",
          "Magnetic core memory",
        ],
        acceptableAnswers: ["Punch cards and paper tape"],
        explanation:
          "The first computers used primitive storage methods like punch cards, paper tape, magnetic tape, and audio cassettes before disk drives were developed.",
      },
      {
        type: "multiple-choice",
        question:
          "What was the first version of Windows that ran on top of MS-DOS?",
        options: ["Windows 1.0", "Windows 3.1", "Windows 95", "Windows NT"],
        acceptableAnswers: ["Windows 1.0"],
        explanation:
          "Windows 1.0, released in 1985, was the first version of Windows that ran as a graphical shell on top of MS-DOS.",
      },
      {
        type: "multiple-choice",
        question:
          "What was the primary function of MS-DOS in early Windows versions?",
        options: [
          "Provide a graphical interface",
          "Manage disk operations and file system",
          "Enable networking capabilities",
          "Run multimedia applications",
        ],
        acceptableAnswers: ["Manage disk operations and file system"],
        explanation:
          "MS-DOS (Microsoft Disk Operating System) was responsible for managing disk operations and the file system in early Windows versions.",
      },
      {
        type: "multiple-choice",
        question: "What was the file system used by MS-DOS?",
        options: ["NTFS", "FAT", "exFAT", "ReFS"],
        acceptableAnswers: ["FAT"],
        explanation:
          "MS-DOS used the FAT (File Allocation Table) file system, while NTFS (New Technology File System) came later with Windows NT.",
      },

      // Windows NT and Architecture
      {
        type: "multiple-choice",
        question: "What does NT stand for in Windows NT?",
        options: [
          "New Technology",
          "Network Terminal",
          "Native Terminal",
          "Network Technology",
        ],
        acceptableAnswers: ["New Technology"],
        explanation:
          "NT stands for 'New Technology', representing Microsoft's shift to a more advanced operating system architecture.",
      },
      {
        type: "multiple-choice",
        question:
          "What was the key difference between Windows NT and earlier Windows versions?",
        options: [
          "It had a Start Menu",
          "It didn't rely on MS-DOS",
          "It included Solitaire",
          "It had color graphics",
        ],
        acceptableAnswers: ["It didn't rely on MS-DOS"],
        explanation:
          "Windows NT was a complete operating system that didn't rely on MS-DOS, unlike earlier Windows versions that ran on top of DOS.",
      },
      {
        type: "multiple-choice",
        question:
          "What is the theoretical maximum amount of RAM that 64-bit Windows can address?",
        options: ["4 GB", "16 GB", "128 GB", "16.8 million TB"],
        acceptableAnswers: ["16.8 million TB"],
        explanation:
          "64-bit Windows can theoretically address up to 16.8 million terabytes of RAM, a significant increase over the 4 GB limit of 32-bit systems.",
      },

      // Windows Features and Versions
      {
        type: "multiple-choice",
        question:
          "Which Windows version was the first to introduce the Start Menu?",
        options: ["Windows 3.1", "Windows 95", "Windows 2000", "Windows XP"],
        acceptableAnswers: ["Windows 95"],
        explanation:
          "Windows 95 introduced several key features including the Start Menu, Taskbar, and the concept of 'plug and play' hardware.",
      },
      {
        type: "multiple-choice",
        question:
          "Which Windows version was the first to support 64-bit computing?",
        options: ["Windows 2000", "Windows XP", "Windows Vista", "Windows 7"],
        acceptableAnswers: ["Windows XP"],
        explanation:
          "Windows XP was the first Windows version to offer a 64-bit edition, though it wasn't widely adopted until later versions.",
      },
      {
        type: "multiple-choice",
        question:
          "What was Microsoft's statement about Windows 10's versioning?",
        options: [
          "It would be the last version of Windows",
          "It would be replaced every year",
          "It would be free forever",
          "It would only receive security updates",
        ],
        acceptableAnswers: ["It would be the last version of Windows"],
        explanation:
          "Microsoft stated that Windows 10 would be the last version of Windows, with the OS becoming a service that receives continuous updates.",
      },

      // Windows GUI Elements
      {
        type: "multiple-choice",
        question:
          "What is the name of the area at the bottom of the Windows desktop that contains the Start button?",
        options: ["Dock", "Taskbar", "Launcher", "System Tray"],
        acceptableAnswers: ["Taskbar"],
        explanation:
          "The Taskbar is the horizontal bar at the bottom of the Windows desktop that contains the Start button, open application icons, and the notification area.",
      },
      {
        type: "multiple-choice",
        question:
          "What happens when you right-click on the Windows desktop or an icon?",
        options: [
          "The Start Menu opens",
          "A Context Menu appears",
          "The Control Panel opens",
          "The file properties are displayed",
        ],
        acceptableAnswers: ["A Context Menu appears"],
        explanation:
          "Right-clicking on the desktop or an icon brings up a Context Menu with relevant options for the selected item.",
      },

      // Windows Security
      {
        type: "multiple-choice",
        question:
          "What is the name of the built-in Windows security feature that helps protect against malware?",
        options: [
          "Windows Firewall",
          "Windows Defender",
          "Windows Security Center",
          "Windows Update",
        ],
        acceptableAnswers: ["Windows Defender"],
        explanation:
          "Windows Defender is Microsoft's built-in anti-malware component that provides real-time protection against various threats.",
      },
      {
        type: "multiple-choice",
        question:
          "What is the name of the Windows component that manages network communication security?",
        options: [
          "Windows Firewall",
          "Windows Defender",
          "Windows Security Center",
          "Windows Update",
        ],
        acceptableAnswers: ["Windows Firewall"],
        explanation:
          "Windows Firewall is the built-in security system that monitors and controls incoming and outgoing network traffic.",
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following is NOT a Windows security vulnerability mentioned in the material?",
        options: [
          "Weak or no password",
          "Logging in as Administrator",
          "Using third-party web browsers",
          "Unknown or unmanaged services",
        ],
        acceptableAnswers: ["Using third-party web browsers"],
        explanation:
          "While browser security is important, using third-party browsers is not specifically mentioned as a Windows security vulnerability in the provided material.",
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following is a recommended Windows security practice?",
        options: [
          "Using the same password for all accounts",
          "Logging in as Administrator for all tasks",
          "Disabling Windows Firewall for better performance",
          "Regularly updating the operating system",
        ],
        acceptableAnswers: ["Regularly updating the operating system"],
        explanation:
          "Regularly updating the operating system is a key security practice as it ensures you have the latest security patches and improvements.",
      },

      // File Systems and Storage
      {
        type: "multiple-choice",
        question:
          "What is the maximum amount of RAM that 32-bit Windows can theoretically address?",
        options: ["2 GB", "4 GB", "8 GB", "16 GB"],
        acceptableAnswers: ["4 GB"],
        explanation:
          "32-bit Windows can theoretically address up to 4 GB of RAM due to its 32-bit memory addressing limitation.",
      },
      {
        type: "multiple-choice",
        question: "Which file system was introduced with Windows NT?",
        options: ["FAT", "FAT32", "NTFS", "exFAT"],
        acceptableAnswers: ["NTFS"],
        explanation:
          "NTFS (New Technology File System) was introduced with Windows NT and provided improved security, reliability, and performance over FAT.",
      },

      // Windows Editions
      {
        type: "multiple-choice",
        question: "Which of the following was NOT an edition of Windows 7?",
        options: ["Starter", "Home Premium", "Professional", "Home Basic"],
        acceptableAnswers: ["All of these were Windows 7 editions"],
        explanation:
          "Windows 7 was offered in six editions: Starter, Home Basic, Home Premium, Professional, Enterprise, and Ultimate.",
      },
      {
        type: "multiple-choice",
        question:
          "Which Windows version introduced the Modern UI (formerly Metro) interface?",
        options: ["Windows 7", "Windows 8", "Windows 10", "Windows Vista"],
        acceptableAnswers: ["Windows 8"],
        explanation:
          "Windows 8 introduced the Modern UI (formerly Metro) interface with its tile-based Start screen.",
      },

      // Constructed Response Questions
      {
        type: "constructed-response",
        question:
          "What is the name of the built-in Windows security feature that helps protect against malware?",
        acceptableAnswers: ["Windows Defender"],
        explanation:
          "Windows Defender is Microsoft's built-in anti-malware component that provides real-time protection against various threats.",
      },
      {
        type: "constructed-response",
        question:
          "What is the name of the area in the Windows Taskbar that shows notifications and system icons?",
        acceptableAnswers: ["Notification Area", "System Tray"],
        explanation:
          "The Notification Area (previously called the System Tray) is the area on the right side of the Taskbar that shows notifications and system icons.",
      },
    ],
  },
  {
    id: "windows-os-fundamentals",
    name: "Windows Operating System Fundamentals",
    category: "Cybersecurity",
    description:
      "This module covers basic concepts of the Windows operating system, including its architecture, operation, configuration, monitoring, and security tools.",
    questions: [
      {
        type: "multiple-choice",
        question: "What is the Disk Operating System (DOS)?",
        options: [
          "A modern operating system like Windows 10.",
          "An operating system that uses a Graphical User Interface (GUI).",
          "An operating system that the computer uses to enable data storage devices to read and write files.",
          "A proprietary Microsoft software developed in 1985.",
        ],
        acceptableAnswers: [
          "An operating system that the computer uses to enable data storage devices to read and write files.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following are types of MS-DOS commands and what are their primary uses?",
        options: [
          "dir (lists files), cd (changes directory), copy (copies files), del (deletes files), mkdir (creates directory), ren (renames file), help (displays commands).",
          "ping (tests network connectivity), ipconfig (displays network configuration), tracert (traces route).",
          "get-process (gets running processes), stop-service (stops services), new-item (creates new items).",
          "netstat (displays network connections), nslookup (queries DNS), shutdown (shuts down computer).",
        ],
        acceptableAnswers: [
          "dir (lists files), cd (changes directory), copy (copies files), del (deletes files), mkdir (creates directory), ren (renames file), help (displays commands).",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following is NOT a common type of Operating System Vulnerability mentioned?",
        options: [
          "Virus or malware protection being turned off.",
          "Unmanaged or unknown services running.",
          "Extensive use of strong, unique passwords.",
          "Unencrypted data.",
        ],
        acceptableAnswers: ["Extensive use of strong, unique passwords."],
      },
      {
        type: "multiple-choice",
        question:
          "What is the Hardware Abstraction Layer (HAL) and what is its primary use?",
        options: [
          "It is the core of the operating system that directly controls all hardware.",
          "It is software that handles all of the communication between the hardware and the kernel.",
          "It is a set of device drivers that run in user mode.",
          "It is a component that manages memory allocation for applications.",
        ],
        acceptableAnswers: [
          "It is software that handles all of the communication between the hardware and the kernel.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What is a kernel and what is its purpose within an operating system?",
        options: [
          "A component that manages the graphical user interface.",
          "The core of the operating system that has control over the entire computer, handling input/output requests, memory, and peripherals.",
          "A user-mode application responsible for starting other programs.",
          "A file system used for organizing data on disk drives.",
        ],
        acceptableAnswers: [
          "The core of the operating system that has control over the entire computer, handling input/output requests, memory, and peripherals.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What is the primary difference between user mode and kernel mode in Windows?",
        options: [
          "User mode is for system processes, while kernel mode is for applications.",
          "Kernel mode has restricted access to hardware and memory, while user mode has unrestricted access.",
          "Code executing in kernel mode has unrestricted access to underlying hardware and memory, while user mode code has no direct access.",
          "Crashes in user mode stop the entire computer, while kernel mode crashes are recoverable.",
        ],
        acceptableAnswers: [
          "Code executing in kernel mode has unrestricted access to underlying hardware and memory, while user mode code has no direct access.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following are the four common types of Windows File Systems mentioned?",
        options: [
          "FAT, HFS+, EXT, NTFS",
          "FAT16, FAT32, exFAT, NTFS",
          "FAT, HFS+, EXT, exFAT",
          "NTFS, exFAT, EXT, HFS+",
        ],
        acceptableAnswers: ["FAT, HFS+, EXT, NTFS"],
      },
      {
        type: "multiple-choice",
        question: "What are the two main types of Windows firmware?",
        options: [
          "CMOS and BIOS",
          "MBR and GPT",
          "BIOS and UEFI",
          "RAM and ROM",
        ],
        acceptableAnswers: ["BIOS and UEFI"],
      },
      {
        type: "multiple-choice",
        question:
          "What is the difference between Shutdown, Restart, and Hibernate in Windows?",
        options: [
          "Shutdown saves an open state, Restart powers off, Hibernate reboots.",
          "Shutdown powers off, Restart reboots, Hibernate saves current state to a file.",
          "Shutdown reboots, Restart powers off, Hibernate closes all applications.",
          "Shutdown closes all programs, Restart updates drivers, Hibernate powers off.",
        ],
        acceptableAnswers: [
          "Shutdown powers off, Restart reboots, Hibernate saves current state to a file.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What is the full name of the .exe file associated with the Windows CLI?",
        options: ["command.exe", "cli.exe", "prompt.exe", "cmd.exe"],
        acceptableAnswers: ["cmd.exe"],
      },
      {
        type: "multiple-choice",
        question:
          "What are the three types of commands that PowerShell can execute?",
        options: [
          "Batch files, executables, and scripts",
          "Cmdlets, PowerShell scripts, and PowerShell functions",
          "System commands, user commands, and network commands",
          "Registry commands, file commands, and process commands",
        ],
        acceptableAnswers: [
          "Cmdlets, PowerShell scripts, and PowerShell functions",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What is the name of the Windows tool that can be used to view running processes on your Windows system?",
        options: [
          "Event Viewer",
          "Resource Monitor",
          "Task Manager",
          "System Configuration (Msconfig)",
        ],
        acceptableAnswers: ["Task Manager"],
      },
      {
        type: "multiple-choice",
        question:
          "What is the name of the tool that can be used to view memory allocation?",
        options: [
          "Task Manager",
          "Performance Monitor",
          "Resource Monitor",
          "RAMMap",
        ],
        acceptableAnswers: ["RAMMap"],
      },
      {
        type: "multiple-choice",
        question: "What is the purpose of the Performance Log Users group?",
        options: [
          "To manage user passwords and logon requirements.",
          "To allow members to schedule logging of performance counters and collect logs.",
          "To control access to shared network resources.",
          "To start or stop network services.",
        ],
        acceptableAnswers: [
          "To allow members to schedule logging of performance counters and collect logs.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following correctly lists 7 common 'net' commands and their purposes?",
        options: [
          "net accounts (sets password requirements), net session (lists/disconnects sessions), net share (manages shared resources), net start (starts service), net stop (stops service), net use (connects to shared resources), net view (shows network devices).",
          "net config (displays network configuration), net user (manages user accounts), net group (manages groups), net time (displays time), net computer (manages computers), net helpmsg (displays error messages), net statistics (displays network statistics).",
          "netstat (displays network connections), netsh (configures network parameters), nslookup (queries DNS), netmon (monitors network traffic), netdom (manages domains), net logon (logs on to network), net print (manages print jobs).",
          "net localgroup (manages local groups), net computer (adds/deletes computers), net config server (configures server), net continue (resumes service), net file (displays open files), net group (manages global groups), net print (manages print jobs).",
        ],
        acceptableAnswers: [
          "net accounts (sets password requirements), net session (lists/disconnects sessions), net share (manages shared resources), net start (starts service), net stop (stops service), net use (connects to shared resources), net view (shows network devices).",
        ],
      },
      {
        type: "multiple-choice",
        question: "What will the nslookup command allow you to do?",
        options: [
          "Display active network connections.",
          "Trace the route to a network destination.",
          "Test Domain Name System (DNS) by translating hostnames to IP addresses.",
          "Configure network adapter settings.",
        ],
        acceptableAnswers: [
          "Test Domain Name System (DNS) by translating hostnames to IP addresses.",
        ],
      },
      {
        type: "multiple-choice",
        question: "What will the netstat command allow you to do?",
        options: [
          "View and modify network configuration parameters.",
          "Display details of active network connections, open ports, and their status.",
          "Test network connectivity to a remote host.",
          "Manage local user accounts and groups.",
        ],
        acceptableAnswers: [
          "Display details of active network connections, open ports, and their status.",
        ],
      },
      {
        type: "multiple-choice",
        question: "What is the purpose of the Remote Desktop Protocol (RDP)?",
        options: [
          "To share files and folders between computers on a network.",
          "To provide a secure encrypted tunnel for internet browsing.",
          "To permit remote users to control individual hosts as if they were local.",
          "To manage network services like DNS and DHCP.",
        ],
        acceptableAnswers: [
          "To permit remote users to control individual hosts as if they were local.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following are common services that Windows Server provides?",
        options: [
          "Only file sharing and web hosting.",
          "Network Services (DNS, DHCP, Terminal services), File Services (SMB, NFS, DFS), Web Services (FTP, HTTP, HTTPS), and Management (Group policy, Active Directory).",
          "Only email and database services.",
          "Gaming and multimedia streaming services.",
        ],
        acceptableAnswers: [
          "Network Services (DNS, DHCP, Terminal services), File Services (SMB, NFS, DFS), Web Services (FTP, HTTP, HTTPS), and Management (Group policy, Active Directory).",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What types of information will be displayed when you open a command prompt with administrative privileges and enter the 'netstat -abno' command?",
        options: [
          "Only active TCP connections without process IDs.",
          "All active TCP and UDP connections, their current state, their associated process ID (PID), and the executable name of the process.",
          "Network configuration details like IP addresses and subnet masks.",
          "DNS cache entries and hostname resolutions.",
        ],
        acceptableAnswers: [
          "All active TCP and UDP connections, their current state, their associated process ID (PID), and the executable name of the process.",
        ],
      },
      {
        type: "multiple-choice",
        question: "What is the purpose of the Windows Event Viewer?",
        options: [
          "To manage running processes and services.",
          "To configure network adapter settings.",
          "To log the history of application, security, and system events, providing troubleshooting information.",
          "To install and manage software updates.",
        ],
        acceptableAnswers: [
          "To log the history of application, security, and system events, providing troubleshooting information.",
        ],
      },
      {
        type: "multiple-choice",
        question: "What is a security policy?",
        options: [
          "A software program that blocks unauthorized network traffic.",
          "A set of objectives that ensures the security of a network, data, and computer systems in an organization.",
          "A tool for scanning and removing malware from a computer.",
          "A feature that encrypts files and folders on a disk drive.",
        ],
        acceptableAnswers: [
          "A set of objectives that ensures the security of a network, data, and computer systems in an organization.",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which of the following are 5 (five) types of protection provided by Windows Defender (different from Windows Defender Firewall)?",
        options: [
          "Network traffic filtering, port blocking, VPN creation, IPsec, and network address translation.",
          "Antivirus, adware protection, phishing protection, spyware protection, and trusted/untrusted sources warnings.",
          "Disk encryption, secure boot, user account control, local security policy, and administrative shares.",
          "Firewall rules, inbound rules, outbound rules, advanced security settings, and policy import/export.",
        ],
        acceptableAnswers: [
          "Antivirus, adware protection, phishing protection, spyware protection, and trusted/untrusted sources warnings.",
        ],
      },
      {
        type: "multiple-choice",
        question: "What is the purpose of a firewall?",
        options: [
          "To accelerate internet browsing speed.",
          "To selectively deny or permit traffic to a computer or network segment.",
          "To manage memory allocation for running applications.",
          "To backup and restore system files.",
        ],
        acceptableAnswers: [
          "To selectively deny or permit traffic to a computer or network segment.",
        ],
      },
    ],
  },
  {
    id: "universal-circular-motion",
    name: "Universal Circular Motion",
    category: "Physics",
    description: "Practice Universal Circular Motion",
    questions: [
      {
        type: "multiple-choice",
        question:
          "If a car is traveling in uniform circular motion, which statement is true about its acceleration?",
        options: [
          "It must be increasing its speed",
          "It must be decreasing its speed",
          "It has no acceleration since its speed is constant",
          "It has centripetal acceleration toward the center of the circle",
        ],
        acceptableAnswers: [
          "It has centripetal acceleration toward the center of the circle",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "The centripetal acceleration of an object moving in uniform circular motion is proportional to:",
        options: ["v/r", "v²/r", "r/v", "r/v²"],
        acceptableAnswers: ["v²/r"],
      },
      {
        type: "constructed-response",
        question:
          "A 0.5 kg object moves in a horizontal circular path with radius 0.25 m at a constant speed of 4.0 m/s. What is the magnitude of its centripetal acceleration? (Answer in m/s²)",
        acceptableAnswers: ["64"],
      },
      {
        type: "multiple-choice",
        question:
          "Which force provides the centripetal force for a car turning on a flat road?",
        options: ["Gravity", "Normal force", "Friction", "Air resistance"],
        acceptableAnswers: ["Friction"],
      },
      {
        type: "constructed-response",
        question:
          "A car travels at 15 m/s around a horizontal circular track with radius 45 m. What is the centripetal acceleration? (Answer in m/s²)",
        acceptableAnswers: ["5", "5.0"],
      },
      {
        type: "multiple-choice",
        question:
          "If an object moving in uniform circular motion suddenly loses its centripetal force, it will:",
        options: [
          "Stop immediately",
          "Continue in circular motion",
          "Move in a straight line tangent to the circle",
          "Fall straight down",
        ],
        acceptableAnswers: ["Move in a straight line tangent to the circle"],
      },
      {
        type: "constructed-response",
        question:
          "A toy train completes 10 laps of a circular track with diameter 1 meter in 100 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["0.314", ".314"],
      },
      {
        type: "multiple-choice",
        question:
          "The gravitational field strength (g) at a location where a 10-kilogram mass weighs 30 newtons is:",
        options: ["0.33 m/s²", "3.0 m/s²", "30 m/s²", "300 m/s²"],
        acceptableAnswers: ["3.0 m/s²"],
      },
      {
        type: "multiple-choice",
        question:
          "According to Newton's Law of Universal Gravitation, if the distance between two masses is doubled, the gravitational force between them becomes:",
        options: [
          "Twice as large",
          "Half as large",
          "One-fourth as large",
          "One-eighth as large",
        ],
        acceptableAnswers: ["One-fourth as large"],
      },
      {
        type: "constructed-response",
        question:
          "A satellite orbits Earth at an altitude of 380 km. Given that Earth's radius is 6370 km and g at Earth's surface is 9.81 m/s², what is the approximate gravitational field strength at the satellite's altitude? (Answer in m/s²)",
        acceptableAnswers: ["8.75", "8.8"],
      },
      {
        type: "constructed-response",
        question:
          "A point on a rotating disk travels 31.4 meters in 10 seconds. If the radius is 0.5 meters, how many revolutions did it make? (Use π = 3.14)",
        acceptableAnswers: ["10"],
      },
      {
        type: "multiple-choice",
        question: "The speed of an object in uniform circular motion is:",
        options: [
          "Always increasing",
          "Always decreasing",
          "Constant in magnitude but changing in direction",
          "Zero since it returns to its starting point",
        ],
        acceptableAnswers: ["Constant in magnitude but changing in direction"],
      },
      {
        type: "constructed-response",
        question:
          "A carousel with radius 3 meters makes one complete revolution every 12 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["1.57", "1.6"],
      },
      {
        type: "multiple-choice",
        question: "The formula for the circumference of a circle is:",
        options: ["πr", "2πr", "πr²", "2πr²"],
        acceptableAnswers: ["2πr"],
      },
      {
        type: "constructed-response",
        question:
          "An object makes 30 revolutions in one minute. What is its frequency in Hz?",
        acceptableAnswers: ["0.5", ".5"],
      },
      {
        type: "constructed-response",
        question:
          "A wheel with diameter 1 meter rotates 20 times in 5 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["12.56", "12.6"],
      },
      {
        type: "multiple-choice",
        question:
          "For an object in uniform circular motion, which quantity remains constant?",
        options: ["Velocity", "Speed", "Acceleration", "Direction"],
        acceptableAnswers: ["Speed"],
      },
      {
        type: "constructed-response",
        question:
          "If a rotating object has a frequency of 2 Hz, what is its period in seconds?",
        acceptableAnswers: ["0.5", ".5"],
      },
      {
        type: "multiple-choice",
        question:
          "The distance traveled by an object in circular motion in one revolution is equal to:",
        options: [
          "The radius",
          "The diameter",
          "The circumference",
          "The area of the circle",
        ],
        acceptableAnswers: ["The circumference"],
      },
      {
        type: "constructed-response",
        question:
          "A point on a record player moves in a circle of radius 0.1 meters at 33.33 revolutions per minute. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["0.35", ".35"],
      },
      {
        type: "multiple-choice",
        question: "The formula v = d/t in circular motion refers to:",
        options: [
          "Instantaneous velocity",
          "Average velocity",
          "Angular velocity",
          "Speed along the circular path",
        ],
        acceptableAnswers: ["Speed along the circular path"],
      },
      {
        type: "constructed-response",
        question:
          "A satellite orbits Earth in a circular path with radius 8000 km. If it completes one orbit in 2 hours, what is its speed in km/h? (Use π = 3.14)",
        acceptableAnswers: ["25120", "25100"],
      },
      {
        type: "multiple-choice",
        question: "In uniform circular motion, the direction of velocity is:",
        options: [
          "Toward the center",
          "Away from the center",
          "Tangent to the circle",
          "Perpendicular to the radius",
        ],
        acceptableAnswers: ["Tangent to the circle"],
      },
      {
        type: "constructed-response",
        question:
          "A fan blade has radius 0.25 meters and rotates at 300 rpm (revolutions per minute). What is the speed of the tip in m/s? (Use π = 3.14)",
        acceptableAnswers: ["7.85", "7.9"],
      },
    ],
  },
  {
    id: "spanish-activities",
    name: "Spanish Activities & Hobbies",
    category: "Languages",
    description: "Practice Spanish vocabulary for activities and hobbies",
    questions: [
      {
        type: "constructed-response",
        question:
          'Translate "extracurricular activities" to Spanish: _____ _____',
        acceptableAnswers: [
          "actividades extracurriculares",
          "las actividades extracurriculares",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "el ajedrez" to English: _____',
        acceptableAnswers: ["chess", "the chess"],
      },
      {
        type: "constructed-response",
        question: 'Translate "club" to Spanish: _____',
        acceptableAnswers: ["club", "el club"],
      },
      {
        type: "constructed-response",
        question: 'Translate "athletic club" to Spanish: _____ _____',
        acceptableAnswers: [
          "club atletico",
          "club atlético",
          "el club atletico",
          "el club atlético",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "el equipo" to English: _____',
        acceptableAnswers: ["team", "the team"],
      },
      {
        type: "constructed-response",
        question: 'Translate "photography" to Spanish: _____',
        acceptableAnswers: [
          "fotografia",
          "fotografía",
          "la fotografia",
          "la fotografía",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "el fotógrafo" to English: _____',
        acceptableAnswers: ["photographer", "the photographer"],
      },
      {
        type: "constructed-response",
        question: 'Translate "young people" to Spanish: _____',
        acceptableAnswers: ["jovenes", "jóvenes", "los jovenes", "los jóvenes"],
      },
      {
        type: "constructed-response",
        question: 'Translate "el miembro" to English: _____',
        acceptableAnswers: ["member", "the member"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to be a member" to Spanish: _____ _____',
        acceptableAnswers: ["ser miembro"],
      },
      {
        type: "constructed-response",
        question: 'Translate "el pasatiempo" to English: _____',
        acceptableAnswers: ["pastime", "the pastime", "hobby", "the hobby"],
      },
      {
        type: "constructed-response",
        question: 'Translate "practice" to Spanish: _____',
        acceptableAnswers: [
          "practica",
          "práctica",
          "la practica",
          "la práctica",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "la reunión" to English: _____',
        acceptableAnswers: ["meeting", "the meeting"],
      },
      {
        type: "constructed-response",
        question: 'Translate "cheerleader" to Spanish (masculine): _____',
        acceptableAnswers: ["animador", "el animador"],
      },
      {
        type: "constructed-response",
        question: 'Translate "cheerleader" to Spanish (feminine): _____',
        acceptableAnswers: ["animadora", "la animadora"],
      },
      {
        type: "constructed-response",
        question: 'Translate "martial arts" to Spanish: _____ _____',
        acceptableAnswers: ["artes marciales", "las artes marciales"],
      },
      {
        type: "constructed-response",
        question: 'Translate "hockey" to Spanish: _____',
        acceptableAnswers: ["hockey", "el hockey"],
      },
      {
        type: "constructed-response",
        question: 'Translate "swimming" to Spanish: _____',
        acceptableAnswers: [
          "natacion",
          "natación",
          "la natacion",
          "la natación",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "la banda" to English: _____',
        acceptableAnswers: ["band", "the band"],
      },
      {
        type: "constructed-response",
        question: 'Translate "dancer" to Spanish (masculine): _____',
        acceptableAnswers: [
          "bailarin",
          "bailarín",
          "el bailarin",
          "el bailarín",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "dancer" to Spanish (feminine): _____',
        acceptableAnswers: ["bailarina", "la bailarina"],
      },
      {
        type: "constructed-response",
        question: 'Translate "song" to Spanish: _____',
        acceptableAnswers: ["cancion", "canción", "la cancion", "la canción"],
      },
      {
        type: "constructed-response",
        question: 'Translate "singer" to Spanish (masculine): _____',
        acceptableAnswers: ["cantante", "el cantante"],
      },
      {
        type: "constructed-response",
        question: 'Translate "singer" to Spanish (feminine): _____',
        acceptableAnswers: ["cantante", "la cantante"],
      },
      {
        type: "constructed-response",
        question: 'Translate "choir" to Spanish: _____',
        acceptableAnswers: ["coro", "el coro"],
      },
      {
        type: "constructed-response",
        question: 'Translate "musician" to Spanish (masculine): _____',
        acceptableAnswers: ["musico", "músico", "el musico", "el músico"],
      },
      {
        type: "constructed-response",
        question: 'Translate "musician" to Spanish (feminine): _____',
        acceptableAnswers: ["musica", "música", "la musica", "la música"],
      },
      {
        type: "constructed-response",
        question: 'Translate "orchestra" to Spanish: _____',
        acceptableAnswers: ["orquesta", "la orquesta"],
      },
      {
        type: "constructed-response",
        question: 'Translate "voice" to Spanish: _____',
        acceptableAnswers: ["voz", "la voz"],
      },
      {
        type: "constructed-response",
        question: 'Translate "los voces" to English: _____',
        acceptableAnswers: ["voices", "the voices"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to attend" to Spanish: _____',
        acceptableAnswers: ["asistir"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to win/to earn" to Spanish: _____',
        acceptableAnswers: ["ganar"],
      },
      {
        type: "constructed-response",
        question: 'Translate "grabar" to English: _____',
        acceptableAnswers: ["to record", "record"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to participate" to Spanish: _____',
        acceptableAnswers: ["participar"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to take lessons" to Spanish: _____ _____',
        acceptableAnswers: ["tomar lecciones"],
      },
      {
        type: "constructed-response",
        question: 'Translate "volver" to English: _____',
        acceptableAnswers: ["to return", "return"],
      },
      {
        type: "constructed-response",
        question:
          'Translate "to create a Web page" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ["crear una pagina web", "crear una página web"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to be online" to Spanish: _____ _____ _____',
        acceptableAnswers: ["estar en linea", "estar en línea"],
      },
      {
        type: "constructed-response",
        question: 'Translate "hacer una búsqueda" to English: _____',
        acceptableAnswers: [
          "to make a search",
          "make a search",
          "to search",
          "search",
        ],
      },
      {
        type: "constructed-response",
        question:
          'Translate "to surf the Web" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ["navegar en la red", "navegar en la Red"],
      },
      {
        type: "constructed-response",
        question:
          'Translate "to visit chat rooms" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ["visitar salones de chat"],
      },
      {
        type: "constructed-response",
        question: 'Translate "entre" to English: _____',
        acceptableAnswers: [
          "between",
          "among",
          "among/between",
          "between/among",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "interest" to Spanish: _____',
        acceptableAnswers: ["interes", "interés", "el interes", "el interés"],
      },
      {
        type: "constructed-response",
        question: 'Translate "opportunity" to Spanish: _____',
        acceptableAnswers: ["oportunidad", "la oportunidad"],
      },
      {
        type: "constructed-response",
        question: 'Translate "las oportunidades" to English: _____',
        acceptableAnswers: ["opportunities", "the opportunities"],
      },
    ],
  },
  {
    id: "purple-hibiscus",
    name: "Purple Hibiscus by Chimamanda Ngozi Adichie",
    category: "Literature",
    description:
      "Test your understanding of Purple Hibiscus's themes, characters, and literary devices",
    questions: [
      {
        type: "multiple-choice",
        question:
          "Which literary device is represented by the purple hibiscus flowers in the novel?",
        options: ["Personification", "Symbolism", "Hyperbole", "Onomatopoeia"],
        acceptableAnswers: ["Symbolism"],
      },
      {
        type: "multiple-choice",
        question: "Who serves as a foil to Papa Eugene in the novel?",
        options: ["Jaja", "Father Amadi", "Aunty Ifeoma", "Papa-Nnukwu"],
        acceptableAnswers: ["Aunty Ifeoma"],
      },
      {
        type: "constructed-response",
        question:
          "Explain how Jaja's refusal to receive communion on Palm Sunday represents both characterization and conflict in the novel.",
        acceptableAnswers: [
          "It shows Jaja's growing defiance against his father's religious authority and marks the beginning of the family's transformation",
          "The incident demonstrates Jaja's character development and creates direct conflict with Papa's strict Catholic control",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which recurring motif represents freedom and authenticity in the novel?",
        options: [
          "Palm fronds",
          "Purple hibiscus",
          "Church bells",
          "Traditional songs",
        ],
        acceptableAnswers: ["Purple hibiscus"],
      },
      {
        type: "constructed-response",
        question:
          "How does the contrast between Papa Eugene's house in Enugu and Aunty Ifeoma's house in Nsukka reflect the novel's themes?",
        acceptableAnswers: [
          "Eugene's house represents oppression and silence while Ifeoma's represents freedom and expression",
          "The houses contrast order and control with chaos and freedom",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does Mama's constant polishing of her figurines symbolize?",
        options: [
          "Her wealth and status",
          "Her love of cleanliness",
          "Her attempt to maintain perfection under abuse",
          "Her religious devotion",
        ],
        acceptableAnswers: ["Her attempt to maintain perfection under abuse"],
      },
      {
        type: "constructed-response",
        question:
          "Analyze how Amaka's criticism of Kambili and Jaja as 'abnormal' reveals important character dynamics and family conflicts.",
        acceptableAnswers: [
          "It highlights the contrast between the cousins' upbringings and shows how Eugene's control has affected his children's social development",
          "The criticism reveals the effects of Eugene's oppressive parenting and the differences between the two families",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which type of conflict is most prominent in Papa-Nnukwu's relationship with Eugene?",
        options: [
          "Man vs. Nature",
          "Man vs. Society",
          "Man vs. Self",
          "Man vs. Man",
        ],
        acceptableAnswers: ["Man vs. Man"],
      },
      {
        type: "constructed-response",
        question:
          "How does Father Amadi's relationship with Kambili contribute to her character development?",
        acceptableAnswers: [
          "He helps her find her voice and confidence while showing her a gentler form of Catholicism",
          "He represents a contrast to Eugene's harsh religious authority and helps Kambili develop self-expression",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does the story of Jaja of Opobo contribute to the novel's themes?",
        options: [
          "It provides historical context only",
          "It parallels Jaja's rebellion against authority",
          "It describes Nigerian culture",
          "It explains the origin of Jaja's name",
        ],
        acceptableAnswers: ["It parallels Jaja's rebellion against authority"],
      },
      {
        type: "constructed-response",
        question:
          "How does Amaka's reaction to Kambili's painting experience reflect the novel's themes of religion and control?",
        acceptableAnswers: [
          "It shows how Kambili's religious experience has been controlled and centered around whiteness, while Amaka embraces a more culturally inclusive Christianity",
          "The interaction reveals how Papa's control has limited Kambili's religious and cultural expression compared to her cousin's more liberated experience",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does the family's different approaches to night prayer reveal about the theme of religious expression?",
        options: [
          "Only Aunty Ifeoma's family is truly religious",
          "Papa's way is the only correct way to pray",
          "Different forms of Catholic worship can coexist",
          "Prayer should always be structured and scheduled",
        ],
        acceptableAnswers: ["Different forms of Catholic worship can coexist"],
      },
      {
        type: "constructed-response",
        question:
          "Analyze how the schedules Papa creates serve as both a symbol and a plot device in the novel.",
        acceptableAnswers: [
          "The schedules symbolize Papa's rigid control while driving conflict between the cousins and highlighting the differences between the two households",
          "They represent Papa's oppressive control while creating tension between the families and showing the contrast between freedom and constraint",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "How does Aunty Ifeoma's response to Amaka's criticism of her cousins demonstrate her character?",
        options: [
          "She shows complete agreement with Amaka",
          "She balances freedom of expression with respect for others",
          "She silences Amaka completely",
          "She sides with Kambili and Jaja",
        ],
        acceptableAnswers: [
          "She balances freedom of expression with respect for others",
        ],
      },
      {
        type: "constructed-response",
        question:
          "Explain how the story of Jaja of Opobo influences Jaja's character development and future actions.",
        acceptableAnswers: [
          "The story inspires Jaja's later defiance by providing an example of standing up against oppressive authority",
          "It serves as a catalyst for Jaja's rebellion by showing him the historical precedent of resistance to control",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does Kambili's stutter represent in terms of character development?",
        options: [
          "A medical condition only",
          "A symbol of her physical weakness",
          "A manifestation of her suppressed voice and freedom",
          "A way to gain sympathy from others",
        ],
        acceptableAnswers: [
          "A manifestation of her suppressed voice and freedom",
        ],
      },
      {
        type: "constructed-response",
        question:
          "How does Papa-Nnukwu's illness reveal the changing dynamics in Jaja's character?",
        acceptableAnswers: [
          "Jaja shows growing independence by caring more about his grandfather's health than Papa's potential reaction",
          "His concern for Papa-Nnukwu demonstrates his breaking free from Papa's control and religious restrictions",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which theme is most prominent in the contrast between Amaka and Kambili's social interactions?",
        options: [
          "Religious differences",
          "Economic status",
          "The effects of parental control on development",
          "Academic achievement",
        ],
        acceptableAnswers: ["The effects of parental control on development"],
      },
      {
        type: "constructed-response",
        question:
          "Analyze how Aunty Ifeoma's household serves as both a foil and catalyst for change in the novel.",
        acceptableAnswers: [
          "Her home represents freedom and authentic expression, contrasting with Papa's rigid control while inspiring change in Jaja and Kambili",
          "The household demonstrates an alternative way of living that challenges Papa's authority and encourages the children's growth",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "How does the novel's treatment of religion reflect broader themes of colonialism and traditionalism?",
        options: [
          "It completely rejects Christianity",
          "It shows only traditional beliefs as valid",
          "It demonstrates the tension between Western and African religious expressions",
          "It ignores religious conflicts entirely",
        ],
        acceptableAnswers: [
          "It demonstrates the tension between Western and African religious expressions",
        ],
      },
      {
        type: "constructed-response",
        question:
          "What does the motif of silence and speech reveal about the Achike family?",
        acceptableAnswers: [
          "The motif of silence and speech reveals that the Achike family is very isolated and have little communication between each other",
        ],
      },
      {
        type: "constructed-response",
        question: "How does Adichie use motifs to reveal Kambili's conflicts?",
        acceptableAnswers: [
          "Adichie uses motifs like silence, and red to reveal Kambili's internal conflicts between her loyalty to her father and her struggle to find her own voice",
        ],
      },
      {
        type: "constructed-response",
        question: "What purpose does religion serve in Purple Hibiscus?",
        acceptableAnswers: [
          "Religion is the foundation of Papa's strictness, abuse and high expectations for his family",
        ],
      },
      {
        type: "constructed-response",
        question:
          "What does Adichie's use of the red motif illuminate about a theme of Purple Hibiscus?",
        acceptableAnswers: [
          "Adichie's use of the red motif demonstrates the freedom Kambili internally wishes she can have, but cannot have",
        ],
      },
      {
        type: "constructed-response",
        question:
          "What is the relationship between the use of foils and motifs in Purple Hibiscus?",
        acceptableAnswers: [
          "Foils, like Kambili and Amaka, reinforce the motif of silence and speech to highlight the impact a controlling environment has on one’s agency",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'authentic'?",
        options: [
          "The restaurant claimed to serve authentic Italian cuisine",
          "Her authentic passion for teaching inspired her students",
          "The museum displayed authentic artifacts from ancient Egypt",
          "He tried to maintain an authentic social media presence",
        ],
        acceptableAnswers: [
          "Her authentic passion for teaching inspired her students",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence best captures the meaning of 'contribute'?",
        options: [
          "Her research contributed significantly to cancer treatment",
          "Each employee contributed to the holiday fund",
          "The spices contributed to the dish's flavor",
          "Regular exercise contributes to better health",
        ],
        acceptableAnswers: [
          "Her research contributed significantly to cancer treatment",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'demeanor' most effectively?",
        options: [
          "The doctor's calm demeanor reassured the worried patients",
          "His friendly demeanor made him popular at work",
          "She noticed a change in his demeanor",
          "Their professional demeanor impressed the clients",
        ],
        acceptableAnswers: [
          "The doctor's calm demeanor reassured the worried patients",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence captures the deepest sense of 'despair'?",
        options: [
          "She felt despair after losing her lifelong business",
          "The team's loss led to despair among fans",
          "He expressed despair about the test results",
          "Financial troubles caused their despair",
        ],
        acceptableAnswers: [
          "She felt despair after losing her lifelong business",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'distressed' most effectively?",
        options: [
          "The mother was distressed by her child's fever",
          "The distressed wood gave the furniture character",
          "He became distressed about the deadline",
          "They found the distressed animal in the park",
        ],
        acceptableAnswers: ["The mother was distressed by her child's fever"],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'exacerbate'?",
        options: [
          "Stress can exacerbate existing health conditions",
          "Poor planning would exacerbate the problem",
          "The heat might exacerbate the situation",
          "His comments could exacerbate tensions",
        ],
        acceptableAnswers: ["Stress can exacerbate existing health conditions"],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'impede' most effectively?",
        options: [
          "Heavy traffic impeded emergency vehicles from reaching the scene",
          "Bad weather impeded their travel plans",
          "Language barriers impeded communication",
          "The fence impeded their view",
        ],
        acceptableAnswers: [
          "Heavy traffic impeded emergency vehicles from reaching the scene",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence best illustrates the concept of 'strain'?",
        options: [
          "The long hours put a strain on family relationships",
          "The rope showed signs of strain",
          "Financial strain affected their decisions",
          "She felt the strain of overwork",
        ],
        acceptableAnswers: [
          "The long hours put a strain on family relationships",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'undermine' most effectively?",
        options: [
          "Lack of evidence undermined the prosecution's case",
          "Constant criticism undermined his confidence",
          "Poor maintenance undermined the building's structure",
          "Budget cuts undermined the program",
        ],
        acceptableAnswers: [
          "Lack of evidence undermined the prosecution's case",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence captures the deepest sense of 'vulnerable'?",
        options: [
          "The elderly are particularly vulnerable during heat waves",
          "The company was vulnerable to cyber attacks",
          "Young children are vulnerable to peer pressure",
          "The coast is vulnerable to flooding",
        ],
        acceptableAnswers: [
          "The elderly are particularly vulnerable during heat waves",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'benevolent' most effectively?",
        options: [
          "The benevolent donor provided scholarships for students in need",
          "She had a benevolent smile",
          "The organization made benevolent gestures",
          "His benevolent nature made him popular",
        ],
        acceptableAnswers: [
          "The benevolent donor provided scholarships for students in need",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence demonstrates the best use of 'defiant'?",
        options: [
          "The protesters remained defiant despite facing arrest",
          "He gave a defiant look",
          "Her defiant attitude caused problems",
          "The child was defiant about bedtime",
        ],
        acceptableAnswers: [
          "The protesters remained defiant despite facing arrest",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence illustrates 'discord' most effectively?",
        options: [
          "Political discord prevented the bill from passing",
          "There was discord among team members",
          "Family discord ruined the holiday",
          "The meeting ended in discord",
        ],
        acceptableAnswers: [
          "Political discord prevented the bill from passing",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'evoke' most effectively?",
        options: [
          "The old photograph evoked memories of childhood summers",
          "His speech evoked strong emotions",
          "The music evoked different feelings",
          "The scent evoked the past",
        ],
        acceptableAnswers: [
          "The old photograph evoked memories of childhood summers",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'extort'?",
        options: [
          "The criminals tried to extort money by threatening the business",
          "He attempted to extort a confession",
          "They would extort payments from local shops",
          "She tried to extort favors",
        ],
        acceptableAnswers: [
          "The criminals tried to extort money by threatening the business",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'ingrain' most effectively?",
        options: [
          "Early education helps ingrain good study habits",
          "The coach tried to ingrain proper technique",
          "Parents ingrain values in their children",
          "Practice can ingrain new skills",
        ],
        acceptableAnswers: ["Early education helps ingrain good study habits"],
      },
      {
        type: "multiple-choice",
        question: "Which sentence demonstrates the best use of 'intercede'?",
        options: [
          "The mediator interceded before the conflict escalated",
          "She interceded on behalf of her friend",
          "The teacher had to intercede in the argument",
          "He interceded to prevent a fight",
        ],
        acceptableAnswers: [
          "The mediator interceded before the conflict escalated",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'patronize' most effectively?",
        options: [
          "Local residents continued to patronize small businesses during the crisis",
          "His patronizing tone offended everyone",
          "They patronized the new restaurant",
          "She felt patronized by his comments",
        ],
        acceptableAnswers: [
          "Local residents continued to patronize small businesses during the crisis",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'reconcile'?",
        options: [
          "The accountant needed to reconcile the financial statements",
          "They tried to reconcile their differences",
          "She couldn't reconcile her beliefs with the evidence",
          "The couple hoped to reconcile after their fight",
        ],
        acceptableAnswers: [
          "The accountant needed to reconcile the financial statements",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'subdue' most effectively?",
        options: [
          "The police had to subdue the violent suspect",
          "They managed to subdue the fire",
          "Medicine helped subdue the pain",
          "She tried to subdue her emotions",
        ],
        acceptableAnswers: ["The police had to subdue the violent suspect"],
      },
    ],
  },
  {
    id: "spanish-driving-terms-quiz",
    name: "Spanish Driving Terms Quiz",
    category: "languages",
    description:
      "constructed-response quiz to practice using spanish driving vocabulary in context",
    questions: [
      {
        type: "constructed-response",
        question: "usa la palabra 'la avenida' en una oración.",
        acceptableAnswers: [
          "mi casa está en la avenida principal.",
          "caminamos por la avenida hasta llegar al parque.",
        ],
      },
      {
        type: "constructed-response",
        question: "describe lo que hace un 'conductor'.",
        acceptableAnswers: [
          "un conductor maneja un vehículo.",
          "el conductor lleva a los pasajeros a su destino.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué haces cuando ves un 'semáforo' en rojo?",
        acceptableAnswers: [
          "me detengo.",
          "paro el carro.",
          "no cruzo la calle.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'cruzar' en una oración.",
        acceptableAnswers: [
          "voy a cruzar la calle cuando no haya tráfico.",
          "mi abuela necesita ayuda para cruzar la avenida.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué te puede dar un policía si estacionas mal?",
        acceptableAnswers: [
          "me puede poner una multa.",
          "me da una multa por estacionar mal.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa la palabra 'izquierdo' en una oración.",
        acceptableAnswers: [
          "dobla a la izquierda en la esquina.",
          "el semáforo está en el lado izquierdo.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué significa '¡basta!' y cuándo lo usarías?",
        acceptableAnswers: [
          "significa '¡suficiente!' y lo uso cuando quiero que alguien pare de hacer algo.",
          "lo digo cuando estoy molesto y quiero que alguien se detenga.",
        ],
      },
      {
        type: "constructed-response",
        question:
          "¿qué significa 'estar seguro' y por qué es importante al manejar?",
        acceptableAnswers: [
          "significa estar convencido de algo. es importante estar seguro antes de cruzar una calle.",
          "necesito estar seguro de que no viene un carro antes de cruzar.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'peligroso' en una oración relacionada con manejar.",
        acceptableAnswers: [
          "es peligroso manejar rápido en la lluvia.",
          "cruzar sin mirar es muy peligroso.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué harías si el puente está cerrado?",
        acceptableAnswers: ["buscaría otra ruta.", "no cruzaría el puente."],
      },
      {
        type: "constructed-response",
        question: "usa 'el camión' en una oración.",
        acceptableAnswers: [
          "el camión transporta mercancía pesada.",
          "vi un camión rojo en la carretera.",
        ],
      },
      {
        type: "constructed-response",
        question:
          "¿cómo llegas a la escuela desde tu casa? menciona 'la carretera'.",
        acceptableAnswers: [
          "tomo la carretera principal para llegar a la escuela.",
          "manejo por la carretera hasta la siguiente salida.",
        ],
      },
      {
        type: "constructed-response",
        question: "describe qué hay en una 'cuadra'.",
        acceptableAnswers: [
          "en la cuadra hay casas y una tienda.",
          "la escuela está a una cuadra de mi casa.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'la esquina' en una indicación.",
        acceptableAnswers: [
          "gira a la derecha en la esquina.",
          "la tienda está en la esquina.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué puedes ver en una 'plaza'?",
        acceptableAnswers: [
          "en la plaza hay una fuente y muchas personas.",
          "me gusta caminar por la plaza los domingos.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'la fuente' en una oración.",
        acceptableAnswers: [
          "los niños juegan cerca de la fuente.",
          "la fuente está en el centro de la plaza.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'el peatón' en una oración sobre seguridad.",
        acceptableAnswers: [
          "el peatón debe cruzar en el cruce de calles.",
          "los conductores deben respetar al peatón.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué necesitas para manejar legalmente?",
        acceptableAnswers: [
          "necesito un permiso de manejar.",
          "debo tener el permiso de manejar para conducir.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'el policía' en una situación de tráfico.",
        acceptableAnswers: [
          "el policía dirige el tráfico en la mañana.",
          "un policía me ayudó cuando me perdí.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué haces cuando ves una 'señal de parada'?",
        acceptableAnswers: [
          "me detengo completamente.",
          "paro el coche en la señal de parada.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'ancho' en una descripción de la calle.",
        acceptableAnswers: [
          "esta calle es muy ancha.",
          "necesitamos una avenida más ancha para el tráfico.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'de acuerdo' en una conversación.",
        acceptableAnswers: [
          "sí, estoy de acuerdo contigo.",
          "de acuerdo, vamos por esa ruta.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué haces cuando tienes que esperar mucho tráfico?",
        acceptableAnswers: [
          "tengo paciencia y espero.",
          "me relajo mientras espero que avance el tráfico.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'complicado' en una situación de manejo.",
        acceptableAnswers: [
          "manejar en esta ciudad es complicado.",
          "el tráfico en hora pico es muy complicado.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'derecho' para dar direcciones.",
        acceptableAnswers: [
          "sigue derecho hasta el semáforo.",
          "camina derecho por tres cuadras.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'despacio' como una advertencia.",
        acceptableAnswers: [
          "maneja despacio en la zona escolar.",
          "camina despacio, está resbaloso.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'la estatua' en una descripción.",
        acceptableAnswers: [
          "hay una estatua en medio de la plaza.",
          "la estatua representa a un héroe nacional.",
        ],
      },
      {
        type: "constructed-response",
        question: "¿qué significa 'quitar' en el contexto del tráfico?",
        acceptableAnswers: [
          "quitar un coche mal estacionado.",
          "el policía va a quitar el obstáculo del camino.",
        ],
      },
      {
        type: "constructed-response",
        question: "usa 'estrecho' para describir una calle.",
        acceptableAnswers: [
          "la calle es muy estrecha para dos carros.",
          "el camino estrecho es difícil de manejar.",
        ],
      },
    ],
  },
  {
    id: "othello-act-v-quiz-explained-1",
    name: "Othello Act V Quiz (with Explanations)",
    category: "Literature",
    description:
      "A multiple-choice quiz covering Act V of Shakespeare's Othello, with explanations and textual evidence.",
    questions: [
      {
        type: "multiple-choice",
        question:
          "In Act 5, Scene 1, where does Iago instruct Roderigo to hide while waiting for Cassio?",
        options: [
          "Behind a curtain",
          "In an alleyway",
          "Behind this bulk",
          "Up in a window",
        ],
        acceptableAnswers: ["Behind this bulk"],
        explanation:
          "Iago gives Roderigo clear instructions on where to conceal himself to ambush Cassio, telling him, 'Here, stand behind this bulk. Straight will he / come' (Shakespeare 5.1.1-2).",
      },
      {
        type: "multiple-choice",
        question:
          "What is Roderigo's stated feeling about the deed Iago asks him to perform (killing Cassio)?",
        options: [
          "He is eager and devoted to it.",
          "He has no great devotion to the deed.",
          "He feels it is dishonorable but necessary.",
          "He is terrified but resolved.",
        ],
        acceptableAnswers: ["He has no great devotion to the deed."],
        explanation:
          "Roderigo expresses his reluctance directly to Iago before taking his position, stating, 'I have no great devotion to the deed, / And yet he hath given me satisfying reasons' (Shakespeare 5.1.8-9).",
      },
      {
        type: "multiple-choice",
        question: "According to Iago's aside, why does he want Roderigo dead?",
        options: [
          "Roderigo knows too much about Desdemona.",
          "Roderigo might reveal Iago's slander.",
          "Roderigo might demand back the jewels and gold Iago swindled.",
          "Roderigo failed to kill Cassio properly.",
        ],
        acceptableAnswers: [
          "Roderigo might demand back the jewels and gold Iago swindled.",
        ],
        explanation:
          "Iago reveals in an aside that Roderigo's survival is a financial liability: 'Live Roderigo, / He calls me to a restitution large / Of gold and jewels that I bobbed from him / As gifts to Desdemona. / It must not be' (Shakespeare 5.1.14-18).",
      },
      {
        type: "multiple-choice",
        question: "According to Iago's aside, why does he want Cassio dead?",
        options: [
          "Cassio insulted him publicly.",
          "Cassio's 'daily beauty' makes Iago 'ugly' and Othello might expose Iago to him.",
          "Cassio stole money from him.",
          "Cassio refused to help him get promoted.",
        ],
        acceptableAnswers: [
          "Cassio's 'daily beauty' makes Iago 'ugly' and Othello might expose Iago to him.",
        ],
        explanation:
          "Iago fears Cassio's inherent goodness and the potential for Othello to reveal Iago's manipulations: 'If Cassio do remain, / He hath a daily beauty in his life / That makes me ugly. And besides, the Moor / May unfold me to him. There stand I in much peril. / No, he must die' (Shakespeare 5.1.18-22).",
      },
      {
        type: "multiple-choice",
        question: "What saves Cassio from Roderigo's initial thrust?",
        options: [
          "His quick reflexes",
          "His coat is better than Roderigo knows",
          "Iago intervenes",
          "He trips Roderigo first",
        ],
        acceptableAnswers: ["His coat is better than Roderigo knows"],
        explanation:
          "Cassio himself identifies the reason Roderigo's attack failed, likely referring to some form of armor or protective garment: 'That thrust had been mine enemy indeed / But that my coat is better than thou know’st' (Shakespeare 5.1.24-25).",
      },
      {
        type: "multiple-choice",
        question: "Who stabs Cassio in the leg?",
        options: ["Roderigo", "Bianca", "Othello", "Iago"],
        acceptableAnswers: ["Iago"],
        explanation:
          "After Roderigo falls, the stage direction clearly indicates Iago's action: 'Iago stabs Cassio in the leg, and exits' (Shakespeare 5.1.27 SD).",
      },
      {
        type: "multiple-choice",
        question:
          "When Othello hears Cassio cry out, what does he believe has happened?",
        options: [
          "Roderigo has killed Cassio.",
          "Iago has killed Cassio.",
          "Cassio has killed Roderigo.",
          "Iago has been wounded.",
        ],
        acceptableAnswers: ["Iago has killed Cassio."],
        explanation:
          "Othello hears Cassio's cries and immediately assumes Iago has fulfilled his promise to kill him, saying, 'The voice of Cassio! Iago keeps his word' (Shakespeare 5.1.29).",
      },
      {
        type: "multiple-choice",
        question: "What are Roderigo's last words?",
        options: [
          "O, I am slain!",
          "O wretched villain!",
          "O damned Iago! O inhuman dog!",
          "Help, ho! Murder, murder!",
        ],
        acceptableAnswers: ["O damned Iago! O inhuman dog!"],
        explanation:
          "As Iago stabs the already wounded Roderigo to silence him permanently, Roderigo cries out, identifying his killer: 'O damned Iago! O inhuman dog!' (Shakespeare 5.1.64).",
      },
      {
        type: "multiple-choice",
        question:
          "Who does Iago immediately try to blame for Cassio's injury upon Bianca's arrival?",
        options: ["Roderigo", "Lodovico", "Bianca", "Gratiano"],
        acceptableAnswers: ["Bianca"],
        explanation:
          "Iago quickly deflects suspicion onto Bianca, referring to her contemptuously: 'Gentlemen all, I do suspect this trash / To be a party in this injury.—' (Shakespeare 5.1.87-88).",
      },
      {
        type: "multiple-choice",
        question: "What does Iago ask Emilia to do at the end of Scene 1?",
        options: [
          "Tend to Cassio's wounds.",
          "Go find Othello immediately.",
          "Run to the citadel and tell Othello and Desdemona what happened.",
          "Help him interrogate Bianca.",
        ],
        acceptableAnswers: [
          "Run to the citadel and tell Othello and Desdemona what happened.",
        ],
        explanation:
          "As part of managing the chaotic scene, Iago dispatches Emilia with a specific task: 'Emilia, run you to the citadel / And tell my lord and lady what hath happed.—' (Shakespeare 5.1.129-130).",
      },
      {
        type: "multiple-choice",
        question:
          "In his opening lines of Scene 2, Othello repeats 'It is the cause'. What is the 'cause' referring to?",
        options: [
          "His jealousy",
          "Iago's lies",
          "Desdemona's supposed infidelity",
          "The loss of the handkerchief",
        ],
        acceptableAnswers: ["Desdemona's supposed infidelity"],
        explanation:
          "Othello refers to Desdemona's alleged unfaithfulness as the justification for killing her, believing it a necessary act to prevent her from corrupting others: 'It is the cause... Yet she must die, else she’ll betray more men' (Shakespeare 5.2.1-6).",
      },
      {
        type: "multiple-choice",
        question: "Why does Othello ask Desdemona if she has prayed?",
        options: [
          "He wants to join her in prayer.",
          "He hopes she is innocent.",
          "He doesn't want to kill her soul.",
          "He is stalling for time.",
        ],
        acceptableAnswers: ["He doesn't want to kill her soul."],
        explanation:
          "Othello, despite his murderous intent, expresses a desire for Desdemona to make peace with God before dying: 'I would not kill thy unpreparèd spirit. / No, heaven forfend! I would not kill thy soul' (Shakespeare 5.2.32-33).",
      },
      {
        type: "multiple-choice",
        question:
          "What item does Othello mention as the primary proof of Desdemona's guilt?",
        options: [
          "A love letter from Cassio",
          "The handkerchief",
          "A sworn statement from Iago",
          "A ring she gave Cassio",
        ],
        acceptableAnswers: ["The handkerchief"],
        explanation:
          "Othello repeatedly focuses on the handkerchief as the concrete evidence of her betrayal, stating, 'That handkerchief / Which I so loved, and gave thee, thou gav’st to / Cassio' (Shakespeare 5.2.49-51).",
      },
      {
        type: "multiple-choice",
        question:
          "What does Othello claim Cassio has done regarding Desdemona?",
        options: [
          "Stolen the handkerchief",
          "Confessed to the affair",
          "Written love poems to her",
          "Tried to poison Othello",
        ],
        acceptableAnswers: ["Confessed to the affair"],
        explanation:
          "When Desdemona pleads for Cassio to be summoned to attest to her innocence, Othello falsely claims Cassio has already admitted guilt: 'OTHELLO / He hath confessed. / DESDEMONA / What, my lord? / OTHELLO / That he hath used thee' (Shakespeare 5.2.74-76).",
      },
      {
        type: "multiple-choice",
        question: "How does Othello ultimately kill Desdemona?",
        options: [
          "He stabs her.",
          "He poisons her.",
          "He smothers her.",
          "He strangles her.",
        ],
        acceptableAnswers: ["He smothers her."],
        explanation:
          "After Desdemona's pleas for mercy fail, Othello cuts her off, and the stage direction confirms the method: 'OTHELLO / It is too late. / He smothers her' (Shakespeare 5.2.92 SD).",
      },
      {
        type: "multiple-choice",
        question:
          "Who is the first person to enter Desdemona's bedroom after Othello kills her?",
        options: ["Iago", "Cassio", "Lodovico", "Emilia"],
        acceptableAnswers: ["Emilia"],
        explanation:
          "Emilia calls from outside the door immediately after Desdemona is smothered ('EMILIA, within / My lord, my lord? What ho! My lord, my lord!' - Shakespeare 5.2.93) and then enters shortly after ('Enter Emilia' - Shakespeare 5.2.109 SD).",
      },
      {
        type: "multiple-choice",
        question:
          "What initial news does Emilia bring Othello from the street?",
        options: [
          "Cassio has killed Roderigo.",
          "Iago has been wounded.",
          "Roderigo has killed Cassio.",
          "Bianca has been arrested.",
        ],
        acceptableAnswers: ["Cassio has killed Roderigo."],
        explanation:
          "Emilia enters to report the violence outside, telling Othello, 'EMILIA / Cassio, my lord, hath killed / A young Venetian called Roderigo' (Shakespeare 5.2.117-118).",
      },
      {
        type: "multiple-choice",
        question: "With her dying breaths, who does Desdemona say killed her?",
        options: ["Othello", "Iago", "Nobody. I myself.", "Cassio"],
        acceptableAnswers: ["Nobody. I myself."],
        explanation:
          "When Emilia asks who committed the deed, Desdemona protects Othello to the very end: 'DESDEMONA / Nobody. I myself. Farewell. / Commend me to my kind lord. O, farewell' (Shakespeare 5.2.137-138).",
      },
      {
        type: "multiple-choice",
        question:
          "When Othello admits to Emilia that he killed Desdemona, what reason does he give?",
        options: [
          "She begged him to do it.",
          "She was plotting against him.",
          "She was a whore and false.",
          "It was an accident.",
        ],
        acceptableAnswers: ["She was a whore and false."],
        explanation:
          "After Desdemona dies, Othello drops the pretense and tells Emilia his justification: ''Twas I that killed her... She turned to folly, and she was a whore' (Shakespeare 5.2.144-145).",
      },
      {
        type: "multiple-choice",
        question:
          "What is Emilia's immediate reaction when Othello says Iago told him Desdemona was false?",
        options: [
          "Agreement and sorrow",
          "Disbelief and asking 'My husband?' repeatedly",
          "Accusing Othello of lying",
          "Fainting from shock",
        ],
        acceptableAnswers: ["Disbelief and asking 'My husband?' repeatedly"],
        explanation:
          "Emilia is utterly stunned that her husband is the source of the slander, repeating in disbelief, 'My husband?' (Shakespeare 5.2.154, 159, 163) before erupting in anger.",
      },
      {
        type: "multiple-choice",
        question:
          "Who confirms to Emilia that Iago did indeed tell Othello that Desdemona was false with Cassio?",
        options: ["Othello", "Montano", "Iago himself", "Gratiano"],
        acceptableAnswers: ["Iago himself"],
        explanation:
          "When confronted directly by Emilia ('But did you ever tell him she was false?'), Iago admits his role: 'IAGO / I did' (Shakespeare 5.2.192-193).",
      },
      {
        type: "multiple-choice",
        question:
          "What crucial information does Emilia reveal about the handkerchief?",
        options: [
          "She saw Cassio steal it.",
          "Desdemona lost it accidentally.",
          "She found it and gave it to Iago.",
          "Bianca planted it in Cassio's room.",
        ],
        acceptableAnswers: ["She found it and gave it to Iago."],
        explanation:
          "Emilia finally reveals the truth about the handkerchief's journey: 'EMILIA / ...that handkerchief thou speak’st / of / I found by fortune, and did give my husband... He begged of me to steal ’t' (Shakespeare 5.2.244-249).",
      },
      {
        type: "multiple-choice",
        question:
          "What happens to Emilia after she reveals the truth about Iago and the handkerchief?",
        options: [
          "She runs away.",
          "Othello kills her.",
          "Iago kills her.",
          "She is arrested.",
        ],
        acceptableAnswers: ["Iago kills her."],
        explanation:
          "To silence her permanently after her devastating revelation, Iago attacks his wife. The stage direction notes: 'Iago kills his wife' (Shakespeare 5.2.254 SD).",
      },
      {
        type: "multiple-choice",
        question:
          "What news does Gratiano share about Desdemona's father, Brabantio?",
        options: [
          "He is coming to Cyprus.",
          "He has forgiven Desdemona.",
          "He died of grief over the marriage.",
          "He has disowned Desdemona.",
        ],
        acceptableAnswers: ["He died of grief over the marriage."],
        explanation:
          "Upon seeing the tragedy, Gratiano reveals offstage news: 'Poor Desdemon, I am glad thy father’s dead. / Thy match was mortal to him, and pure grief / Shore his old thread in twain' (Shakespeare 5.2.223-225).",
      },
      {
        type: "multiple-choice",
        question: "After being disarmed, how does Othello get another weapon?",
        options: [
          "He takes it from Gratiano.",
          "He had another hidden in the chamber.",
          "Emilia gives him one.",
          "Cassio lends him his sword.",
        ],
        acceptableAnswers: ["He had another hidden in the chamber."],
        explanation:
          "Othello reveals he was not entirely defenseless, stating, 'I have another weapon in this chamber. / It is a sword of Spain... O, here it is' (Shakespeare 5.2.273-275).",
      },
      {
        type: "multiple-choice",
        question: "What does Iago say after Othello stabs him?",
        options: [
          "O, I am slain!",
          "I bleed, sir, but not killed.",
          "Villainy, villainy!",
          "Demand me nothing.",
        ],
        acceptableAnswers: ["I bleed, sir, but not killed."],
        explanation:
          "Even after being stabbed by Othello, Iago remains defiant and points out Othello's failure to kill him: 'IAGO / I bleed, sir, but not killed' (Shakespeare 5.2.299).",
      },
      {
        type: "multiple-choice",
        question:
          "What evidence found on Roderigo's body helps confirm Iago's guilt?",
        options: [
          "Desdemona's handkerchief",
          "A map of the citadel",
          "Letters detailing Iago's plots",
          "A large sum of money",
        ],
        acceptableAnswers: ["Letters detailing Iago's plots"],
        explanation:
          "Lodovico presents incriminating documents found on Roderigo: 'Here is a letter / Found in the pocket of the slain Roderigo, / And here another... The one of / them imports / The death of Cassio, to be undertook / By Roderigo' (Shakespeare 5.2.307-311).",
      },
      {
        type: "multiple-choice",
        question:
          "In his final speech, how does Othello ask Lodovico to describe him?",
        options: [
          "As a valiant soldier betrayed.",
          "As one that loved not wisely, but too well.",
          "As a victim of circumstance.",
          "As an honorable murderer seeking justice.",
        ],
        acceptableAnswers: ["As one that loved not wisely, but too well."],
        explanation:
          "Othello attempts to shape his legacy, requesting they report him as 'one that loved not wisely, but too well; / Of one not easily jealous, but being wrought, / Perplexed in the extreme' (Shakespeare 5.2.344-347).",
      },
      {
        type: "multiple-choice",
        question: "What is Othello's final action before he dies?",
        options: [
          "He curses Iago.",
          "He asks Cassio for forgiveness.",
          "He kisses Desdemona.",
          "He prays for his soul.",
        ],
        acceptableAnswers: ["He kisses Desdemona."],
        explanation:
          "Othello turns to Desdemona one last time, stating, 'I kissed thee ere I killed thee. No way but this, / Killing myself, to die upon a kiss' (Shakespeare 5.2.358-359), and then dies.",
      },
      {
        type: "multiple-choice",
        question:
          "Who is appointed to rule in Cyprus and decide Iago's punishment at the very end of the play?",
        options: ["Lodovico", "Gratiano", "Montano", "Cassio"],
        acceptableAnswers: ["Cassio"],
        explanation:
          "Lodovico strips Othello of his position and designates Cassio as the new authority: 'Your power and your command is taken off, / And Cassio rules in Cyprus... To you, lord / governor, / Remains the censure of this hellish villain' (Shakespeare 5.2.330-336).",
      },
    ],
  },
  {
    id: "fahrenheit-451-part-1-quiz",
    name: "Fahrenheit 451 Part 1: Hearth of the Salamander Quiz",
    category: "Literature",
    description:
      "A multiple-choice quiz covering key events and characters in Part 1 of Ray Bradbury's Fahrenheit 451, 'Hearth of the Salamander'.",
    questions: [
      {
        type: "multiple-choice",
        question:
          "Who does Montag meet on the way home at the beginning of the novel?",
        options: [
          "Captain Beatty",
          "Mildred, his wife",
          "Clarisse McClellan",
          "Professor Faber",
        ],
        acceptableAnswers: ["Clarisse McClellan"],
        explanation:
          "Montag encounters Clarisse McClellan, his new seventeen-year-old neighbor, on his walk home from the fire station.",
      },
      {
        type: "multiple-choice",
        question: "What detail about Clarisse's house surprises Montag?",
        options: [
          "It is much smaller than his own.",
          "It is dark and quiet.",
          "It has all the lights on and sounds of conversation.",
          "It has a large, unruly garden.",
        ],
        acceptableAnswers: [
          "It has all the lights on and sounds of conversation.",
        ],
        explanation:
          "Montag notices that Clarisse's house is brightly lit and filled with the sounds of people talking, which is unusual in their society where most people sit silently in front of their parlor walls.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag realize about himself after his first interaction with Clarisse?",
        options: [
          "He wants to be a fireman forever.",
          "He is deeply in love with his wife.",
          "He is unhappy.",
          "He wants to move away from the city.",
        ],
        acceptableAnswers: ["He is unhappy."],
        explanation:
          "After Clarisse asks if he's happy, Montag initially dismisses the question but later admits to himself, 'He was not happy. He said the words to himself. He knew it' (Bradbury 9).",
      },
      {
        type: "multiple-choice",
        question:
          "Why does Mildred need help when Montag gets home immediately after meeting Clarisse?",
        options: [
          "She has fallen and broken her leg.",
          "She has attempted suicide by overdosing on sleeping pills.",
          "She is experiencing a severe allergic reaction.",
          "She has been robbed.",
        ],
        acceptableAnswers: [
          "She has attempted suicide by overdosing on sleeping pills.",
        ],
        explanation:
          "Montag finds Mildred unconscious on the bed, having swallowed an entire bottle of sleeping pills.",
      },
      {
        type: "multiple-choice",
        question: "What help does Mildred receive after her overdose?",
        options: [
          "She is taken to a traditional hospital emergency room.",
          "Two technicians arrive with machines to pump her stomach and replenish her blood.",
          "Montag calls a family doctor who administers an antidote.",
          "She is given cold compresses and left to sleep it off.",
        ],
        acceptableAnswers: [
          "Two technicians arrive with machines to pump her stomach and replenish her blood.",
        ],
        explanation:
          "Instead of doctors, two 'handymen' arrive with specialized machines: one to pump her stomach and another to replace her blood with fresh blood and serum.",
      },
      {
        type: "multiple-choice",
        question:
          "How does Mildred react after she wakes up from the previous night's experience?",
        options: [
          "She is deeply remorseful and apologetic.",
          "She remembers everything and is terrified.",
          "She has no memory of the event and feels hungry.",
          "She is angry at Montag for not being there.",
        ],
        acceptableAnswers: ["She has no memory of the event and feels hungry."],
        explanation:
          "Mildred wakes up with no recollection of her overdose, feeling as if she had a hangover, and asks for toast.",
      },
      {
        type: "multiple-choice",
        question: "How does Mildred primarily spend her days?",
        options: [
          "Reading books in secret.",
          "Engaging in neighborhood gossip.",
          "Watching and interacting with her 'family' on the parlor walls.",
          "Working at a factory.",
        ],
        acceptableAnswers: [
          "Watching and interacting with her 'family' on the parlor walls.",
        ],
        explanation:
          "Mildred is engrossed in her 'parlor walls' – large wall-mounted television screens that display interactive programs featuring characters she refers to as her 'family'.",
      },
      {
        type: "multiple-choice",
        question: "What is the Mechanical Hound? How does it react to Montag?",
        options: [
          "A robotic pet; it is affectionate towards Montag.",
          "A police robot that tracks criminals; it ignores Montag.",
          "A metallic watchdog that hunts and injects fugitives; it growls and lunges at Montag.",
          "A cleaning robot; it cleans Montag's house.",
        ],
        acceptableAnswers: [
          "A metallic watchdog that hunts and injects fugitives; it growls and lunges at Montag.",
        ],
        explanation:
          "The Mechanical Hound is a programmable, eight-legged robot that serves as a hunter. It shows hostility towards Montag, growling and extending its needle, suggesting it has been programmed to react negatively to him.",
      },
      {
        type: "multiple-choice",
        question: "Why is Clarisse considered 'anti-social' by her society?",
        options: [
          "She refuses to attend school.",
          "She doesn't participate in typical teenage activities and enjoys thinking and talking.",
          "She often breaks the law.",
          "She is extremely shy and avoids people.",
        ],
        acceptableAnswers: [
          "She doesn't participate in typical teenage activities and enjoys thinking and talking.",
        ],
        explanation:
          "Clarisse is labeled 'anti-social' because she prefers genuine conversation, observing nature, and thinking over the loud, superficial interactions and entertainment valued by her peers.",
      },
      {
        type: "multiple-choice",
        question:
          "What are the rules of the Firemen of America, according to their slogan?",
        options: [
          "'Burn brightly, burn fast, burn clean.'",
          "'Light the world, ignite the future.'",
          "'Monday burn Millay, Wednesday Whitman, Friday Faulkner, burn 'em all, burn 'em up, burn 'em to ashes, then burn the ashes.'",
          "'Protect the public, preserve the peace, purge the past.'",
        ],
        acceptableAnswers: [
          "'Monday burn Millay, Wednesday Whitman, Friday Faulkner, burn 'em all, burn 'em up, burn 'em to ashes, then burn the ashes.'",
        ],
        explanation:
          "This specific mantra is stated by Beatty, outlining the firemen's duty to burn all books indiscriminately based on the day of the week.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag take during the fire at the old woman's house? How does he explain this action to himself?",
        options: [
          "A valuable piece of jewelry; he says he wanted to keep a souvenir.",
          "A small, green book; he says his hand acted on its own.",
          "A family photograph; he felt sorry for the woman.",
          "A piece of burnt wood; he wanted to analyze the ashes.",
        ],
        acceptableAnswers: [
          "A small, green book; he says his hand acted on its own.",
        ],
        explanation:
          "Montag's hand 'acted on its own' and he slipped a small green book, likely a Bible, under his armpit before they burned the house down.",
      },
      {
        type: "multiple-choice",
        question: "Who ultimately sets the fire at the old woman's house? Why?",
        options: [
          "Montag, out of anger.",
          "Beatty, after she refuses to leave.",
          "The woman herself, with a match, as an act of defiance.",
          "The Mechanical Hound, by accident.",
        ],
        acceptableAnswers: [
          "The woman herself, with a match, as an act of defiance.",
        ],
        explanation:
          "The old woman famously tells the firemen, 'You can't have my books,' and then lights a match, choosing to burn with her books rather than live without them.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Mildred say happened to Clarisse? When did she find this out?",
        options: [
          "She moved away suddenly; a week ago.",
          "She was arrested for dissent; last night.",
          "She was run over by a car; four days ago.",
          "She eloped with a boy; a few days ago.",
        ],
        acceptableAnswers: ["She was run over by a car; four days ago."],
        explanation:
          "Mildred casually mentions that Clarisse 'was run over by a car. Four days ago. I'm not sure. But I think she's dead.'\" (Bradbury 47).",
      },
      {
        type: "multiple-choice",
        question: "Who does Mildred call her 'family'?",
        options: [
          "Her distant relatives in another city.",
          "The characters on her parlor wall televisions.",
          "Her colleagues at her part-time job.",
          "Her cats and dogs.",
        ],
        acceptableAnswers: ["The characters on her parlor wall televisions."],
        explanation:
          "Mildred refers to the fictional characters on her interactive parlor wall screens as her 'family,' indicating a disconnect from real human relationships.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag want Mildred to do for him the next morning after the old woman's burning?",
        options: [
          "Go for a walk with him.",
          "Call Captain Beatty and quit her job.",
          "Help him read the books he has hidden.",
          "Buy him a new uniform.",
        ],
        acceptableAnswers: ["Help him read the books he has hidden."],
        explanation:
          "The morning after the old woman's death, Montag expresses his deep unease and asks Mildred to sit with him and help him read the books he has been secretly collecting.",
      },
      {
        type: "multiple-choice",
        question:
          "Identify the factors that led to censorship in this society, according to Beatty.",
        options: [
          "Government decree and religious fundamentalism.",
          "The rise of artificial intelligence and robotic control.",
          "Mass media, acceleration of life, and the desire to avoid offending minorities.",
          "An alien invasion and a need for absolute uniformity.",
        ],
        acceptableAnswers: [
          "Mass media, acceleration of life, and the desire to avoid offending minorities.",
        ],
        explanation:
          "Beatty explains that books were shortened, then adapted, and eventually banned because people preferred instant gratification from mass media, life sped up, and various minority groups found things in books offensive, leading to a demand for their removal to ensure 'happiness' and uniformity.",
      },
      {
        type: "multiple-choice",
        question: "How does Beatty explain what happened to Clarisse?",
        options: [
          "He confirms she was run over by a car, as Mildred said.",
          "He says she was a rebel and her kind are better off gone.",
          "He implies she was killed by the Mechanical Hound for suspicious behavior.",
          "He claims she was a normal, well-adjusted girl who simply moved away.",
        ],
        acceptableAnswers: [
          "He says she was a rebel and her kind are better off gone.",
        ],
        explanation:
          "Beatty dismisses Clarisse as a 'parlor wall' case, calling her 'a time bomb' and 'a lot of nonsense,' implying her unique way of thinking made her a problem that 'had to go.'",
      },
      {
        type: "multiple-choice",
        question:
          "How does Beatty explain what happens to a fireman who takes a book home with him?",
        options: [
          "They are immediately executed.",
          "They are given 24 hours to read it, then must burn it or face consequences.",
          "They are put on immediate suspension and sent for re-education.",
          "They are fined heavily.",
        ],
        acceptableAnswers: [
          "They are given 24 hours to read it, then must burn it or face consequences.",
        ],
        explanation:
          "Beatty tells Montag, 'Every fireman, at least once in his career, gets that itch. What do the books say, what do they mean? They say nothing! So if you've got that itch, Montag, take a book, read it. Then, of course, burn it, and we'll say nothing' (Bradbury 59).",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag take from behind the ventilator grill? How does Mildred react?",
        options: [
          "His old fireman's helmet; Mildred is annoyed he hasn't cleaned it.",
          "A stash of hidden books; Mildred is shocked and horrified.",
          "A photo album; Mildred is nostalgic.",
          "A hidden gun; Mildred is scared.",
        ],
        acceptableAnswers: [
          "A stash of hidden books; Mildred is shocked and horrified.",
        ],
        explanation:
          "After Beatty leaves, Montag reveals a large stack of books hidden in the ventilator grill, much to Mildred's utter shock and horror.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag ask of Mildred after revealing his hidden books?",
        options: [
          "That she hide them for him.",
          "That she report him to Captain Beatty.",
          "That she help him burn them immediately.",
          "That they sit and read them together.",
        ],
        acceptableAnswers: ["That they sit and read them together."],
        explanation:
          "Montag, distraught and seeking understanding, pleads with Mildred, 'Let's sit down and think. Let's get it all straight in our minds. It's not books we need, it's some of the things that once were in books' (Bradbury 69). He wants her to read with him.",
      },
    ],
  },
  {
    id: "fahrenheit-451-part-2-quiz",
    name: "Fahrenheit 451 Part 2: The Sieve and the Sand Quiz",
    category: "Literature",
    description:
      "A multiple-choice quiz covering key events and themes in Part 2 of Ray Bradbury's Fahrenheit 451, 'The Sieve and the Sand'.",
    questions: [
      {
        type: "multiple-choice",
        question:
          "What is the dynamic between Montag and Mildred after Beatty's visit?",
        options: [
          "They are closer and more understanding of each other.",
          "Mildred is supportive of Montag's new interest in books.",
          "Montag is trying to engage Mildred, but she remains detached and oblivious.",
          "They are constantly arguing and fighting.",
        ],
        acceptableAnswers: [
          "Montag is trying to engage Mildred, but she remains detached and oblivious.",
        ],
        explanation:
          "Montag desperately tries to get Mildred to read and understand the books, but she is completely disengaged, concerned only with her parlor walls and superficial matters, making their relationship strained and distant.",
      },
      {
        type: "multiple-choice",
        question:
          "Why does Montag want to read books? What is he hoping to learn from them?",
        options: [
          "He wants to become a writer.",
          "He seeks answers and understanding about the world's problems and his own unhappiness.",
          "He wants to prove Beatty wrong about their worthlessness.",
          "He is looking for specific instructions on how to overthrow the government.",
        ],
        acceptableAnswers: [
          "He seeks answers and understanding about the world's problems and his own unhappiness.",
        ],
        explanation:
          "Montag feels a deep void and expresses a desperate need for knowledge, truth, and genuine meaning that he believes books might provide, especially after the old woman's death and Clarisse's influence.",
      },
      {
        type: "multiple-choice",
        question: "Who is Faber? What memory does Montag recall of him?",
        options: [
          "A former fireman; Montag remembers him leading a book burning.",
          "A retired professor; Montag remembers meeting him in a park a year ago.",
          "A distant relative; Montag recalls a family gathering.",
          "A journalist; Montag remembers reading his articles.",
        ],
        acceptableAnswers: [
          "A retired professor; Montag remembers meeting him in a park a year ago.",
        ],
        explanation:
          "Montag recalls meeting Faber, a former English professor, in a park about a year prior, where Faber was briefly engaged in conversation and recited poetry before fleeing in fear.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag ask when he calls Faber? How does Faber react?",
        options: [
          "He asks for advice on how to hide books; Faber is angry and refuses.",
          "He asks how many copies of Shakespeare are left; Faber is suspicious and hangs up.",
          "He asks if there are any remaining copies of the Bible; Faber is cautious and denies knowing.",
          "He asks for an appointment to discuss literature; Faber is eager and inviting.",
        ],
        acceptableAnswers: [
          "He asks if there are any remaining copies of the Bible; Faber is cautious and denies knowing.",
        ],
        explanation:
          "Montag asks Faber if there are any original copies of the Bible left in the country. Faber, fearing a trap, initially denies knowing anything about it.",
      },
      {
        type: "multiple-choice",
        question:
          "What is Montag trying to do on the train? What keeps interrupting him?",
        options: [
          "He's trying to memorize a book; a loud advertisement for Denham's Dentifrice.",
          "He's trying to write a letter; constant chatter from other passengers.",
          "He's trying to sleep; the train's jerky movements.",
          "He's trying to solve a puzzle; the lack of light.",
        ],
        acceptableAnswers: [
          "He's trying to memorize a book; a loud advertisement for Denham's Dentifrice.",
        ],
        explanation:
          "Montag desperately tries to memorize the book of Ecclesiastes on the subway, but a relentless, blaring advertisement for 'Denham's Dentifrice' prevents him from concentrating, illustrating the 'sieve and the sand' metaphor.",
      },
      {
        type: "multiple-choice",
        question: "Why does Faber call himself a coward?",
        options: [
          "He was too scared to join the firemen.",
          "He didn't speak up when books were being burned and society declined.",
          "He ran away from Montag in the park.",
          "He is afraid to leave his house.",
        ],
        acceptableAnswers: [
          "He didn't speak up when books were being burned and society declined.",
        ],
        explanation:
          "Faber admits his cowardice, stating, 'I saw the way things were going, a long time back. I said nothing. I’m a coward' (Bradbury 78). He regrets not taking action when he could have.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag mean when he tells Faber his wife is dying?",
        options: [
          "She has a terminal illness.",
          "Her spirit and ability to connect with life are fading due to a lack of substance.",
          "She is physically weak from lack of proper nutrition.",
          "She is losing her memory due to a psychological condition.",
        ],
        acceptableAnswers: [
          "Her spirit and ability to connect with life are fading due to a lack of substance.",
        ],
        explanation:
          "Montag means that Mildred is dying spiritually and emotionally due to her empty, unexamined life, devoid of real thought, meaning, or connection, a death far more profound than a physical one.",
      },
      {
        type: "multiple-choice",
        question:
          "What are the three things Faber says are missing from society?",
        options: [
          "Money, power, and fame.",
          "Nature, art, and music.",
          "Quality of information, leisure to digest it, and the right to act on it.",
          "Love, hope, and faith.",
        ],
        acceptableAnswers: [
          "Quality of information, leisure to digest it, and the right to act on it.",
        ],
        explanation:
          "Faber articulates the three missing elements: 'Number one: Quality, texture of information. Number two: Leisure to digest it. And number three: The right to carry out actions based on what we learn from the first two' (Bradbury 83-84).",
      },
      {
        type: "multiple-choice",
        question: "What plan does Montag suggest to Faber?",
        options: [
          "To secretly print and distribute books by planting them in firemen's houses.",
          "To escape to the wilderness and start a new community.",
          "To infiltrate the government and change laws from within.",
          "To burn down all the firehouses.",
        ],
        acceptableAnswers: [
          "To secretly print and distribute books by planting them in firemen's houses.",
        ],
        explanation:
          "Montag proposes a risky plan to Faber: printing books and then planting them in the homes of firemen to discredit them and undermine the system.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag do with the pages of the Bible when Faber initially resists his plan? Why?",
        options: [
          "He burns them to prove his seriousness.",
          "He tears them out one by one, threatening to destroy the book until Faber agrees to help.",
          "He hides them, knowing Faber will eventually give in.",
          "He offers them to Faber as a gift.",
        ],
        acceptableAnswers: [
          "He tears them out one by one, threatening to destroy the book until Faber agrees to help.",
        ],
        explanation:
          "Montag, in a desperate act of manipulation, begins tearing out pages of the Bible, knowing its immense value to Faber, until Faber agrees to help him with his plan.",
      },
      {
        type: "multiple-choice",
        question: "What will Montag's money be used for, according to Faber?",
        options: [
          "To buy a new house for Montag.",
          "To fund their escape from the city.",
          "To pay a printer to reproduce books.",
          "To buy more parlor walls for Mildred.",
        ],
        acceptableAnswers: ["To pay a printer to reproduce books."],
        explanation:
          "Faber agrees to use Montag's money to find a printer who can reproduce books quickly and secretly.",
      },
      {
        type: "multiple-choice",
        question:
          "What has Faber designed? How is it different from Mildred's Seashell radio?",
        options: [
          "A device that projects books onto walls; it's larger and more immersive.",
          "A two-way listening device resembling a Seashell; it allows communication, not just reception.",
          "A silent book scanner; it scans books without noise.",
          "A device that creates virtual reality experiences; it's more advanced.",
        ],
        acceptableAnswers: [
          "A two-way listening device resembling a Seashell; it allows communication, not just reception.",
        ],
        explanation:
          "Faber reveals a tiny two-way radio earpiece, similar in appearance to Mildred's Seashell radio, but capable of transmitting Faber's voice to Montag, allowing them to communicate secretly.",
      },
      {
        type: "multiple-choice",
        question:
          "What concern does Montag voice to Faber over the radio before entering his home? What is the significance of this concern?",
        options: [
          "He's worried about the Mechanical Hound; it shows his growing paranoia.",
          "He's worried about forgetting what to say; it highlights his lack of experience with real conversation.",
          "He's worried about his lack of courage; it indicates his fear of facing the women.",
          "He's worried about being too angry; it shows his struggle to control his emotions.",
        ],
        acceptableAnswers: [
          "He's worried about forgetting what to say; it highlights his lack of experience with real conversation.",
        ],
        explanation:
          "Montag expresses his concern, 'I don't know what to say. I just don't know what to say' (Bradbury 92), highlighting his lack of practice in meaningful, independent conversation and his dependence on Faber's guidance.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Faber begin to read to Montag over the radio while he is home?",
        options: [
          "Excerpts from the Bible.",
          "Passages from classic poetry.",
          "News headlines from the past.",
          "Philosophical essays.",
        ],
        acceptableAnswers: ["Excerpts from the Bible."],
        explanation:
          "While Montag is with Mildred and her friends, Faber begins to read to him, starting with the book of Job from the Bible, providing a calm, spiritual counterpoint to the superficiality of the women.",
      },
      {
        type: "multiple-choice",
        question:
          "Who arrives at Montag's house shortly after Faber begins reading to him? For what purpose?",
        options: [
          "Captain Beatty; to check on Montag's loyalty.",
          "Mildred's friends, Mrs. Phelps and Mrs. Bowles; for a social visit.",
          "The police; to arrest Montag.",
          "A delivery service; to bring more parlor wall scripts.",
        ],
        acceptableAnswers: [
          "Mildred's friends, Mrs. Phelps and Mrs. Bowles; for a social visit.",
        ],
        explanation:
          "Mildred's friends, Mrs. Phelps and Mrs. Bowles, arrive at the house to watch television and engage in their usual superficial conversations.",
      },
      {
        type: "multiple-choice",
        question:
          "What topics do the women discuss? Why do you think Bradbury has them discuss those topics in particular?",
        options: [
          "Politics, family, and war; to show their wisdom.",
          "Their children, husbands, and the upcoming election; to highlight their superficiality and disconnect from reality.",
          "Art, philosophy, and history; to demonstrate their intellectual curiosity.",
          "Gardening, cooking, and fashion; to show their domesticity.",
        ],
        acceptableAnswers: [
          "Their children, husbands, and the upcoming election; to highlight their superficiality and disconnect from reality.",
        ],
        explanation:
          "The women discuss their children's distant upbringing, their husbands' departures for war with indifference, and their voting choices based solely on a candidate's appearance. Bradbury uses these topics to expose their complete lack of emotional depth, critical thinking, and engagement with the serious realities of their lives and society.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Montag leave to get during the dinner party? How does Faber react?",
        options: [
          "He leaves to get more drinks; Faber scolds him for being too accommodating.",
          "He leaves to get a book; Faber warns him not to read it aloud.",
          "He leaves to get an ice bucket; Faber is confused by his sudden departure.",
          "He leaves to get a lighter; Faber is unconcerned.",
        ],
        acceptableAnswers: [
          "He leaves to get a book; Faber warns him not to read it aloud.",
        ],
        explanation:
          "Montag, enraged by the women's triviality, retrieves a book of poetry. Faber, through the earpiece, desperately tries to stop him from reading it aloud.",
      },
      {
        type: "multiple-choice",
        question:
          "How does Mildred explain Montag's behavior and the presence of the book to her friends?",
        options: [
          "She says he's sick and prone to strange outbursts.",
          "She claims he is performing an experimental play for them.",
          "She tells them he is demonstrating how foolish books are by reading one.",
          "She confesses he's been secretly reading books.",
        ],
        acceptableAnswers: [
          "She claims he is performing an experimental play for them.",
        ],
        explanation:
          "To avoid suspicion, Mildred quickly covers for Montag, telling her friends that firemen are allowed to bring home one book a year to show how foolish they are and that Montag is merely 'reading us a poem, for fun.'\" (Bradbury 96).",
      },
      {
        type: "multiple-choice",
        question: "How do the women react to Montag's poetry reading?",
        options: [
          "They are deeply moved and ask for more.",
          "They are confused and uncomfortable, and Mrs. Phelps cries.",
          "They are bored and ask him to stop.",
          "They applaud his dramatic reading.",
        ],
        acceptableAnswers: [
          "They are confused and uncomfortable, and Mrs. Phelps cries.",
        ],
        explanation:
          "The raw emotion and depth of the poem, 'Dover Beach,' are too much for the women. Mrs. Phelps bursts into tears, while Mrs. Bowles is outraged and accuses Montag of being cruel.",
      },
      {
        type: "multiple-choice",
        question:
          "What does Faber call Montag after his outburst with the women?",
        options: ["A genius.", "An idiot.", "A brave man.", "A fire starter."],
        acceptableAnswers: ["An idiot."],
        explanation:
          "Faber, frustrated by Montag's impulsive behavior that risked their entire plan, calls him an 'idiot' through the earpiece for reading the poetry aloud.",
      },
      {
        type: "multiple-choice",
        question:
          "What realization about himself does Montag have on his way to the firehouse?",
        options: [
          "He realizes he wants to burn more books.",
          "He realizes he hates Beatty and wants to kill him.",
          "He realizes he feels alive and invigorated by his defiance.",
          "He realizes he should have never gotten involved with books.",
        ],
        acceptableAnswers: [
          "He realizes he feels alive and invigorated by his defiance.",
        ],
        explanation:
          "Despite the danger, Montag feels a strange sense of exhilaration and purpose after his confrontation with the women, a feeling of being truly alive for the first time.",
      },
      {
        type: "multiple-choice",
        question:
          "How does Montag feel about his hands at the end of Part 2? Why?",
        options: [
          "He feels proud of them for their strength.",
          "He sees them as infected and guilty for stealing books.",
          "He sees them as powerful tools for destruction.",
          "He views them as beautiful because they hold books.",
        ],
        acceptableAnswers: [
          "He sees them as infected and guilty for stealing books.",
        ],
        explanation:
          "Montag obsessively looks at his hands, feeling as though they are 'gloved in blood,' recognizing them as the instruments of his rebellious actions and feeling immense guilt and fear about their future.",
      },
      {
        type: "multiple-choice",
        question:
          "What dream does Beatty say he had? What is he trying to prove to Montag during his recollection of his dream?",
        options: [
          "He dreamed of a world with no books; he is trying to reassure Montag.",
          "He dreamed of a fierce intellectual debate with Montag, where books were worthless; he is trying to overwhelm Montag with his knowledge.",
          "He dreamed of a peaceful society; he is trying to show Montag the ideal.",
          "He dreamed of being a fireman himself; he is trying to remind Montag of their shared purpose.",
        ],
        acceptableAnswers: [
          "He dreamed of a fierce intellectual debate with Montag, where books were worthless; he is trying to overwhelm Montag with his knowledge.",
        ],
        explanation:
          "Beatty recounts a vivid dream where he and Montag had a lengthy debate, citing various authors and intellectual arguments to demonstrate the contradictory and confusing nature of books, aiming to show Montag that books are useless and that his path is foolish.",
      },
      {
        type: "multiple-choice",
        question: "Where does the firetruck stop at the very end of Part 2?",
        options: [
          "At the public library.",
          "At Faber's house.",
          "At the fire station, after their shift.",
          "At Montag's house.",
        ],
        acceptableAnswers: ["At Montag's house."],
        explanation:
          "The alarm bell rings, and the firetruck speeds to its destination, pulling up directly in front of Montag's own house, signaling the climax of his rebellion.",
      },
    ],
  },
  {
    id: "fahrenheit-451-part-2-sand-sieve-close-read",
    name: "Fahrenheit 451 Part 2: The Sieve and the Sand Close Read",
    category: "Literature - Close Read",
    description:
      "A close-reading quiz focusing on the symbolism and significance of 'The Sieve and the Sand' in Part 2 of Fahrenheit 451.",
    questions: [
      {
        type: "multiple-choice",
        question: "What is a sieve?",
        options: [
          "A type of cooking pot.",
          "A fine mesh strainer used to separate solids from liquids or finer particles from coarser ones.",
          "A measuring device for sand.",
          "A tool for digging.",
        ],
        acceptableAnswers: [
          "A fine mesh strainer used to separate solids from liquids or finer particles from coarser ones.",
        ],
        explanation:
          "A sieve is a tool with a mesh or perforations, used to separate desired elements from undesired ones by allowing finer particles to pass through while retaining larger ones. The core function is to filter or separate.",
      },
      {
        type: "multiple-choice",
        question: "Why is 'The Sieve and the Sand' the title of Part II?",
        options: [
          "It literally describes a scene where Montag plays with sand and a sieve.",
          "It symbolizes Montag's futile attempt to retain knowledge in a mind that lets it slip away.",
          "It refers to the process of filtering out 'bad' ideas from books.",
          "It describes the literal act of firemen sieving through ashes.",
        ],
        acceptableAnswers: [
          "It symbolizes Montag's futile attempt to retain knowledge in a mind that lets it slip away.",
        ],
        explanation:
          "The title refers to Montag's childhood memory of trying to fill a sieve with sand, a task he realized was impossible. This mirrors his current struggle to absorb and retain the complex ideas from the books he is reading, as his mind, conditioned by years of simplistic media, feels incapable of holding onto the 'sand' of knowledge.",
      },
      {
        type: "multiple-choice",
        question:
          "Is there a specific moment in the text where a character discusses or experiences the 'sieve and the sand' concept directly? If so, why is it relevant?",
        options: [
          "No, it's only a symbolic title that is never explicitly mentioned.",
          "Yes, Montag recalls a childhood memory on the subway where he tried to fill a sieve with sand, relating it to his inability to grasp the book's meaning.",
          "Yes, Faber explains the concept to Montag as a metaphor for society's decline.",
          "Yes, Beatty uses the metaphor to mock Montag's attempts to read.",
        ],
        acceptableAnswers: [
          "Yes, Montag recalls a childhood memory on the subway where he tried to fill a sieve with sand, relating it to his inability to grasp the book's meaning.",
        ],
        explanation:
          "The concept is explicitly discussed by Montag himself on the subway. He thinks, 'Once as a child he had sat upon a yellow dune ... and tried to fill a sieve with sand... And now he was in the subway, sitting there, and the thought had come to him again. He was trying to read the Bible, and he was trying to remember what he read, and what he read was sliding in through the bottom of the sieve...' (Bradbury 74-75). This direct connection makes the metaphor central to his internal conflict.",
      },
      {
        type: "multiple-choice",
        question:
          "How is the 'sieve and the sand' concept related to the conflict that the character(s) face in this chapter?",
        options: [
          "It represents the difficulty of physically hiding books from the firemen.",
          "It highlights Montag's internal struggle to comprehend and retain the knowledge from books in a society designed to prevent such understanding.",
          "It symbolizes Faber's challenge in finding a printer willing to reproduce books.",
          "It describes the government's efforts to sift out subversive individuals.",
        ],
        acceptableAnswers: [
          "It highlights Montag's internal struggle to comprehend and retain the knowledge from books in a society designed to prevent such understanding.",
        ],
        explanation:
          "The 'sieve and the sand' metaphor embodies Montag's primary conflict in Part II. He is desperate to absorb the wisdom of books, but his mind, accustomed to superficiality and bombarded by relentless distractions (like the Denham's Dentifrice jingle), feels incapable of holding onto the complex 'sand' of truth. This struggle underscores the profound impact of censorship and conditioning on intellectual capacity.",
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
    id: "calculus-asymptotes",
    name: "Calculus Asymptotes",
    category: "Mathematics (Calculus)",
    description:
      "A comprehensive quiz on identifying and understanding different types of asymptotes (vertical, horizontal, holes, slant) for rational functions and other common functions in calculus.",
    questions: [
      {
        type: "multiple-choice",
        question:
          "How do you typically find a vertical asymptote of a rational function?",
        options: [
          "By setting the numerator equal to zero and solving for x.",
          "By examining the degrees of the numerator and denominator.",
          "By setting the denominator equal to zero and ensuring the numerator is non-zero at that point.",
          "By performing polynomial long division.",
        ],
        acceptableAnswers: [
          "By setting the denominator equal to zero and ensuring the numerator is non-zero at that point.",
        ],
        explanation:
          "Vertical asymptotes occur at x-values where the denominator is zero and the numerator is non-zero, leading to a division by zero that causes the function's value to approach infinity.",
      },
      {
        type: "multiple-choice",
        question:
          "When does a rational function have a horizontal asymptote at y = 0?",
        options: [
          "When the degree of the numerator is greater than the degree of the denominator.",
          "When the degree of the numerator is less than the degree of the denominator.",
          "When the degrees of the numerator and denominator are equal.",
          "When there is a hole in the graph.",
        ],
        acceptableAnswers: [
          "When the degree of the numerator is less than the degree of the denominator.",
        ],
        explanation:
          "If the degree of the numerator (n) is less than the degree of the denominator (m) (n < m), the horizontal asymptote is y = 0.",
      },
      {
        type: "multiple-choice",
        question:
          "How do you find the horizontal asymptote when the degree of the numerator equals the degree of the denominator?",
        options: [
          "y = 0",
          "There is no horizontal asymptote.",
          "y = (leading coefficient of numerator) / (leading coefficient of denominator)",
          "y = (constant term of numerator) / (constant term of denominator)",
        ],
        acceptableAnswers: [
          "y = (leading coefficient of numerator) / (leading coefficient of denominator)",
        ],
        explanation:
          "When the degrees are equal (n = m), the horizontal asymptote is the ratio of the leading coefficients of the numerator and denominator.",
      },
      {
        type: "multiple-choice",
        question:
          "What is a 'hole' (removable discontinuity) in the graph of a rational function?",
        options: [
          "A point where the function approaches infinity.",
          "A vertical line that the graph approaches.",
          "A single point where the function is undefined, occurring when a factor cancels out in the numerator and denominator.",
          "A horizontal line that the graph approaches.",
        ],
        acceptableAnswers: [
          "A single point where the function is undefined, occurring when a factor cancels out in the numerator and denominator.",
        ],
        explanation:
          "A hole occurs when a common factor (x-c) exists in both the numerator and denominator. Setting this factor to zero gives the x-coordinate of the hole. The y-coordinate is found by plugging this x-value into the simplified function.",
      },
      {
        type: "multiple-choice",
        question:
          "When does a rational function have a slant (oblique) asymptote?",
        options: [
          "When the degree of the numerator is equal to the degree of the denominator.",
          "When the degree of the numerator is exactly one greater than the degree of the denominator.",
          "When the degree of the numerator is less than the degree of the denominator.",
          "When the denominator has no real roots.",
        ],
        acceptableAnswers: [
          "When the degree of the numerator is exactly one greater than the degree of the denominator.",
        ],
        explanation:
          "A slant asymptote exists if the degree of the numerator (n) is exactly one greater than the degree of the denominator (m) (n = m + 1). It is found by performing polynomial long division.",
      },
      {
        type: "multiple-choice",
        question: "How is the equation of a slant asymptote typically found?",
        options: [
          "By finding the roots of the numerator.",
          "By finding the roots of the denominator.",
          "By taking the ratio of the leading coefficients.",
          "By performing polynomial long division of the numerator by the denominator.",
        ],
        acceptableAnswers: [
          "By performing polynomial long division of the numerator by the denominator.",
        ],
        explanation:
          "The equation of the slant asymptote is the quotient (ignoring the remainder) obtained from polynomial long division when the numerator's degree is one greater than the denominator's.",
      },
      {
        type: "multiple-choice",
        question:
          "For the function f(x) = (x^2 + 1) / (x - 2), what type of asymptote(s) does it have?",
        options: [
          "Only a vertical asymptote at x=2",
          "A vertical asymptote at x=2 and a horizontal asymptote at y=1",
          "A vertical asymptote at x=2 and a slant asymptote",
          "No asymptotes",
        ],
        acceptableAnswers: [
          "A vertical asymptote at x=2 and a slant asymptote",
        ],
        explanation:
          "The denominator is zero at x=2, and the numerator is non-zero, so there is a vertical asymptote at x=2. The degree of the numerator (2) is one greater than the degree of the denominator (1), so there is a slant asymptote. (Polynomial long division would yield y = x + 2 as the slant asymptote).",
      },
      {
        type: "multiple-choice",
        question:
          "For the function g(x) = (3x + 5) / (2x^2 - 8), what type of asymptote(s) does it have?",
        options: [
          "Only a horizontal asymptote at y=0",
          "Vertical asymptotes at x=2, x=-2 and a horizontal asymptote at y=3/2",
          "Vertical asymptotes at x=2, x=-2 and a horizontal asymptote at y=0",
          "A slant asymptote",
        ],
        acceptableAnswers: [
          "Vertical asymptotes at x=2, x=-2 and a horizontal asymptote at y=0",
        ],
        explanation:
          "The denominator 2x^2 - 8 = 2(x^2 - 4) = 2(x-2)(x+2) is zero at x=2 and x=-2, and the numerator is non-zero at these points, giving vertical asymptotes. The degree of the numerator (1) is less than the degree of the denominator (2), so the horizontal asymptote is y=0.",
      },
      {
        type: "multiple-choice",
        question:
          "For the function h(x) = (x - 3) / (x^2 - 9), what discontinuity exists?",
        options: [
          "A vertical asymptote at x=3",
          "A hole at x=3 and a vertical asymptote at x=-3",
          "A horizontal asymptote at y=0",
          "A slant asymptote",
        ],
        acceptableAnswers: ["A hole at x=3 and a vertical asymptote at x=-3"],
        explanation:
          "The function can be factored as h(x) = (x - 3) / ((x - 3)(x + 3)). The (x - 3) factor cancels, indicating a hole at x=3. The (x + 3) factor remains in the denominator, indicating a vertical asymptote at x=-3. Also, the degree of the numerator (0 for the simplified form) is less than the denominator (1 for the simplified form), so y=0 is the horizontal asymptote.",
      },
      {
        type: "multiple-choice",
        question:
          "What happens when the degree of the numerator is two or more greater than the degree of the denominator?",
        options: [
          "There is a slant asymptote.",
          "There is no horizontal or slant asymptote, but a curvilinear asymptote.",
          "The horizontal asymptote is y = 0.",
          "There are always multiple vertical asymptotes.",
        ],
        acceptableAnswers: [
          "There is no horizontal or slant asymptote, but a curvilinear asymptote.",
        ],
        explanation:
          "When the degree of the numerator is two or more greater than the degree of the denominator, there is neither a horizontal nor a slant asymptote. Instead, the function approaches a non-linear (curvilinear) asymptote, found by polynomial long division.",
      },
    ],
  },
];

export const categories = Array.from(
  new Set(quizTemplates.map((template) => template.category)),
);
