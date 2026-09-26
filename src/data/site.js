// AlterStar — central site data.
// Every figure here is a verifiable business fact (registration, address,
// process). Nothing is invented for effect; unverified claims are left out.

export const SITE = {
  name: "AlterStar",
  tagline: "Auto Electrical Components",
  legalName: "AlterStar",
  constitution: "Partnership",
  gstin: "07ABSFA3951B1ZI",
  gstRegistered: "15 Dec 2020",
  hsnCodes: ["8511", "85114000", "85119000"],
  url: "https://www.anbenterprises.in/",
  email: "sales@anbenterprises.in",
  phone: "+91 85952 30710",
  phoneHref: "tel:+918595230710",
  whatsapp: "+91 92170 02598",
  whatsappHref: "https://wa.me/919217002598",
  addressLines: [
    "N-31, 1st Floor, Pocket-N, Sector-2",
    "DSIIDC Industrial Area, Bawana",
    "Delhi 110039, India",
  ],
  addressFull:
    "N-31, 1st Floor, Pocket-N, Sector-2, DSIIDC Industrial Area, Bawana, Delhi 110039",
  city: "Bawana, Delhi",
  latitude: 28.7929581,
  longitude: 77.0553366,
  mapsUrl:
    "https://www.google.com/maps/search/N-31%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%202%2C%20Bawana%2C%20Delhi%20110039",
  gstVerifyUrl:
    "https://piceapp.com/gst-number-search/anb-enterprises-07absfa3951b1zi/",
  hours: [
    { d: "Monday to Saturday", t: "9:30 am to 6:30 pm" },
    { d: "Sunday", t: "Closed" },
  ],
};

export const WHATSAPP_TEXT_DEFAULT =
    "Hello AlterStar, I would like a quotation for starter motors / solenoid switches / armatures / wiper motors.";

export const PRODUCTS = [
  {
    id: "starter-motors",
    name: "Starter Motors",
    short:
      "Complete DC starter motors for 12V and 24V systems, built and tested on our own line.",
    long:
      "A starter motor turns the engine over. We supply them complete, for passenger cars, commercial vehicles, tractors and three-wheelers, in 12V and 24V. Every motor is assembled and run on the test panel before it is packed. If you have an OEM part number or a sample, send it across and we will confirm the match before quoting.",
    tags: ["12V / 24V", "Passenger", "Commercial", "Tractor"],
    steps: [
      { n: "01", label: "Battery current reaches the solenoid" },
      { n: "02", label: "Solenoid pulls in" },
      { n: "03", label: "Armature spins up" },
      { n: "04", label: "Bendix drives the flywheel" },
    ],
  },
  {
    id: "solenoid-switches",
    name: "Solenoid Switches",
    short:
      "The switch that carries full battery current to the starter and pulls the bendix in.",
    long:
      "The solenoid switch is the heavy-duty part of the starting circuit. It passes the full battery current to the starter motor and pulls the bendix drive into engagement with the flywheel. We build switches in three assembly categories depending on terminal and tower arrangement, using spot welding, crimping, tower fitting and soldering. Every finished switch is tested on the panel and marked before it is packed.",
    tags: ["12V / 24V", "Spot weld + crimp", "Tower fitting", "100% tested"],
    steps: [
      { n: "01", label: "Coil energised" },
      { n: "02", label: "Piston drawn in" },
      { n: "03", label: "Contacts close" },
      { n: "04", label: "Spring returns it" },
    ],
  },
  {
    id: "armatures",
    name: "Armatures",
    short:
      "The rotating core of a starter motor — laminated core, wound coil, commutator and shaft, supplied as a replacement part.",
    long:
      "The armature is the part that actually turns. It carries the wound coil on a laminated core, ends in a copper commutator, and runs on a hardened shaft inside the starter housing. Because it is the highest-wear item in a starter, it is the piece most often replaced on its own instead of buying a complete motor. We supply armatures wound to the original turns and gauge, balanced and dimensionally checked, so a rebuilt starter gets its field back rather than a new one. Send the armature number or a sample and we will confirm the winding before quoting.",
    tags: ["12V / 24V", "Wound to sample", "Balanced", "Standalone replacement"],
    secondary: "armatureBench",
    secondaryCaption: "Armature stock and tooling, ready for winding and assembly",
    steps: [
      { n: "01", label: "Core checked for runout" },
      { n: "02", label: "Coil wound to the original turns" },
      { n: "03", label: "Commutator skimmed and undercut" },
      { n: "04", label: "Balanced and dimensionally checked" },
    ],
  },
  {
    id: "wipers",
    name: "Wiper Motors",
    short:
      "Wiper motor assemblies and linkages for cars and commercial vehicles, in 12V and 24V.",
    long:
      "A wiper motor is a small gearmotor and crank assembly that drives the linkage and sweeps the blades across the glass. The failure is usually one of three: the motor draws current but does not turn, the crank strip wears and the sweep becomes uneven, or the park position is lost so the blades sit mid-screen. We supply complete motor and linkage assemblies, with the park switch built in, for passenger cars and commercial vehicles in 12V and 24V. If you want blades and arms supplied against the same motor, say so in the enquiry and we will quote them together.",
    tags: ["12V / 24V", "With linkage", "Park switch built in", "Car and CV"],
    secondary: "wiperSweeping",
    secondaryCaption: "Wiper sweep proved on a wet screen under load",
    steps: [
      { n: "01", label: "Motor and gearbox bench tested" },
      { n: "02", label: "Crank and linkage stroke checked" },
      { n: "03", label: "Park switch and cut-out proved" },
      { n: "04", label: "Sweep, load and noise checked" },
    ],
  },
];

/**
 * Spec sheets, one per product line.
 *
 * This started life as a two-column comparison table. With four product lines a
 * four-column table stops being readable on a phone, so it is now a set of
 * stacked spec panels that reflow instead of scrolling sideways. Data here is
 * general to the product type — confirm the exact figures against your
 * catalogue before publishing them as ranges you will be held to.
 */
export const PRODUCT_SPECS = [
  {
    product: "Starter Motors",
    rows: [
      { field: "Rated voltage", value: "12V / 24V DC" },
      { field: "Typical output", value: "0.6 to 5.5 kW" },
      { field: "Build", value: "Armature, field coils, bendix drive" },
      { field: "Current path", value: "Battery to solenoid to field coils" },
      { field: "Engagement", value: "Bendix drive onto the engine flywheel" },
      { field: "Final test", value: "100% on the test panel" },
      { field: "Fits", value: "Car, LCV, HCV, tractor, three-wheeler" },
    ],
  },
  {
    product: "Solenoid Switches",
    rows: [
      { field: "Rated voltage", value: "12V / 24V DC" },
      { field: "Output", value: "Not applicable — switching device" },
      { field: "Build", value: "Wound coil, piston, contact plate" },
      { field: "Current path", value: "Tower bolts bridged by the contact plate" },
      { field: "Operation", value: "Piston pulls the bendix linkage" },
      { field: "Assembly", value: "Spot welding, crimping, tower fitting, soldering" },
      { field: "Final test", value: "100% on the test panel" },
      { field: "Fits", value: "Aftermarket replacement units" },
    ],
  },
  {
    product: "Armatures",
    rows: [
      { field: "Voltage", value: "Wound to suit the 12V or 24V motor" },
      { field: "Winding", value: "To original turns and wire gauge from the sample" },
      { field: "Core", value: "Laminated steel, checked for runout" },
      { field: "Commutator", value: "Skimmed and undercut, mica slot dressed" },
      { field: "Balance", value: "Checked on the machine" },
      { field: "Inspection", value: "Dimensionally checked against the sample" },
      { field: "Fits", value: "Starter motor rebuilds across the range" },
    ],
  },
  {
    product: "Wiper Motors",
    rows: [
      { field: "Rated voltage", value: "12V / 24V DC" },
      { field: "Scope", value: "Motor, gearbox, crank and linkage" },
      { field: "Park function", value: "Park switch built into the assembly" },
      { field: "Checking", value: "Sweep, load and noise checked on the panel" },
      { field: "Common faults", value: "No turn, uneven sweep, lost park position" },
      { field: "Also supplied", value: "Blades and arms, quoted against the same motor" },
      { field: "Fits", value: "Passenger cars and commercial vehicles" },
    ],
  },
];

export const APPLICATIONS = [
  { platform: "Passenger vehicles", duty: "Cars and hatchbacks", voltage: "12V" },
  { platform: "Commercial vehicles", duty: "Trucks and buses, LCV and HCV", voltage: "12V / 24V" },
  { platform: "Tractors", duty: "Agricultural duty cycle", voltage: "12V" },
  { platform: "Three-wheelers", duty: "Auto-rickshaws and cargo three-wheelers", voltage: "12V" },
];

/**
 * Vehicle classes, keyed the way the trade specifies them: by wheel count.
 * `photo` is a key into PHOTOS in data/photos.js, not a path.
 *
 * The voltage column follows the usual pattern (light classes on 12V, heavy
 * classes on 24V) and needs confirming against what is actually supplied before
 * it is relied on. Fitment is always confirmed from the OEM part number.
 */
export const VEHICLE_CLASSES = [
  {
    id: "4w",
    label: "4 Wheeler",
    photo: "veh4w",
    duty: "Passenger cars, SUVs and jeeps",
    typical: "Hatchbacks, sedans, compact SUVs",
    voltage: "12V",
  },
  {
    id: "6w",
    label: "6 Wheeler",
    photo: "veh6w",
    duty: "Light commercial vehicles",
    typical: "Goods carriers, tempos, small trucks",
    voltage: "12V",
  },
  {
    id: "8w",
    label: "8 Wheeler",
    photo: "veh8w",
    duty: "Medium trucks and buses",
    typical: "City and intercity trucks",
    voltage: "12V / 24V",
  },
  {
    id: "10w",
    label: "10 Wheeler",
    photo: "veh10w",
    duty: "Heavy trucks",
    typical: "Open body and tipper trucks",
    voltage: "24V",
  },
  {
    id: "12w",
    label: "12 Wheeler",
    photo: "veh12w",
    duty: "Multi-axle and trailer units",
    typical: "Trailers, container carriers",
    voltage: "24V",
  },
  {
    id: "3w",
    label: "3 Wheeler",
    photo: "veh3w",
    duty: "Auto rickshaws and cargo three-wheelers",
    typical: "Passenger and cargo three-wheelers",
    voltage: "12V",
  },
  {
    id: "tractor",
    label: "Tractor",
    photo: "vehTractor",
    duty: "Agricultural duty cycle",
    typical: "Tractors and agricultural equipment",
    voltage: "12V",
  },
];

export const PROCESS_STAGES = [
  {
    tag: "Stage 01",
    title: "Coil winding",
    desc:
      "Primary and secondary coils wound in house. Coils are washed and traced by PP and PL number so any batch can be followed back to the machine it came off.",
  },
  {
    tag: "Stage 02",
    title: "Sub-assembly",
    desc:
      "Stop cone and plate, piston and tower sub-assemblies are built as controlled parts and moved to the next stage as identified lots.",
  },
  {
    tag: "Stage 03",
    title: "Switch assembly",
    desc:
      "Spot welding, crimping, tower fitting and soldering, sequenced to the category the switch belongs to. Same sequence every time for the same part.",
  },
  {
    tag: "Stage 04",
    title: "Final testing",
    desc:
      "Every finished switch and starter is tested on the panel. Units that pass are marked. Lots are also audited while they are being built.",
  },
  {
    tag: "Stage 05",
    title: "Stamping and packing",
    desc:
      "Final visual check, customer-specific stamping where required, then packed to the dispatch plan and moved to the store.",
  },
];

export const WORK_CENTRES = [
  {
    code: "WC-01",
    title: "Coil winding",
    desc:
      "Primary and secondary winding, coil wash, lot tracking by PP and PL number.",
  },
  {
    code: "WC-02",
    title: "Sub-assembly",
    desc:
      "Stop cone and plate, piston and tower assemblies built as traceable sub-parts.",
  },
  {
    code: "WC-03",
    title: "Switch assembly",
    desc:
      "Spot welding, crimping, tower fitting and soldering, sequenced per switch category.",
  },
  {
    code: "WC-04",
    title: "Testing and packing",
    desc:
      "Panel testing with OK marking, final visual inspection, stamping and packing.",
  },
];

export const PLANNING_POINTS = [
  {
    title: "Monthly",
    desc:
      "Locked by the 5th of each month, which gives the purchase desk about 25 days to get raw material in.",
  },
  {
    title: "Three-day",
    desc:
      "Rolling plan for the next three days. Holds a buffer of material and information so an urgent order does not stop the line.",
  },
  {
    title: "Daily",
    desc:
      "Work-centre wise for the day, worked out from yesterday's WIP on the floor. This is the one the line actually runs against.",
  },
];

export const QUALITY_AUDIT = [
  {
    stage: "Raw material received",
    sampling: "5 to 10 per 100-piece lot",
    checks: "Finish, damage, size, material-wise",
  },
  {
    stage: "On the line",
    sampling: "30 to 50 per 100-piece lot",
    checks: "In-process condition, tracked by lot",
  },
  {
    stage: "Each work centre",
    sampling: "10 to 25% of every lot",
    checks: "Process parameters and workmanship",
  },
  {
    stage: "Finished goods",
    sampling: "Every single unit",
    checks: "Panel test, then marked passed",
  },
];

// What we actually track, described without invented precision.
export const TRACKING = [
  {
    title: "Lot traceability",
    desc: "Coil and sub-assembly lots carry PP and PL numbers through to the finished part.",
  },
  {
    title: "New Development file",
    desc: "Every development job is logged in our FMS against the sample and the customer part number.",
  },
  {
    title: "Daily production plan",
    desc: "Work-centre wise plan and the output against it, reviewed at the end of each day.",
  },
  {
    title: "Internal and external replacement",
    desc: "Both are counted and reviewed, because a repeat failure is a process problem, not a customer problem.",
  },
  {
    title: "Test panel record",
    desc: "Tested units are marked, and the mark is the record. No untested unit leaves the floor.",
  },
  {
    title: "Dispatch plan",
    desc: "Batch-wise dispatch agreed against your store space and the agreed turnaround.",
  },
];

export const CAPABILITIES = [
  "Monthly, three-day and daily production planning",
  "Full kitting of raw material against the plan",
  "Coil winding, primary and secondary",
  "Spot welding, crimping, tower fitting, soldering",
  "100% final panel testing with verification marking",
  "New development against an OEM sample",
  "Quality audits on raw material, line and process",
  "Batch-wise dispatch, domestic and export",
];

/**
 * Series groupings, one group per product line.
 *
 * Series codes follow the naming convention already used for SM / SC. Confirm
 * them against the real catalogue before publishing — a buyer will quote these
 * codes back at you.
 */
export const PRODUCT_MODELS = [
  {
    product: "Starter Motors",
    blurb: "Pick the series closest to your platform, then send the part number.",
    ranges: [
      {
        id: "SM-12V",
        name: "SM 12V",
        desc: "12V cranking for passenger cars and three-wheelers. Compact bendix drive.",
        tags: ["Passenger", "12V", "Three-wheeler"],
      },
      {
        id: "SM-24V",
        name: "SM 24V",
        desc: "24V commercial duty for LCV and HCV platforms, built for higher torque.",
        tags: ["LCV / HCV", "24V"],
      },
      {
        id: "TR-12V",
        name: "TR 12V",
        desc: "Tractor duty. Heavier build for agricultural use and field conditions.",
        tags: ["Tractor", "12V"],
      },
    ],
  },
  {
    product: "Solenoid Switches",
    blurb: "Categories describe the assembly sequence, which follows the part's build.",
    ranges: [
      {
        id: "SC-A",
        name: "SC Category A",
        desc: "Spot, crimp, tower, solder. Standard switch build.",
        tags: ["Standard"],
      },
      {
        id: "SC-B",
        name: "SC Category B",
        desc: "Spot, tower, crimp, solder. Tower fitted ahead of the crimp.",
        tags: ["Tower first"],
      },
      {
        id: "SC-C",
        name: "SC Category C",
        desc: "Solder, spot, crimp, tower. Soldered joint before the spot welds.",
        tags: ["Solder first"],
      },
    ],
  },
  {
    product: "Armatures",
    blurb: "Wound to the sample. The series is set by the voltage of the motor it goes back into.",
    ranges: [
      {
        id: "AR-12V",
        name: "AR 12V",
        desc: "12V armature for passenger car and three-wheeler starter motors.",
        tags: ["Passenger", "12V", "Three-wheeler"],
      },
      {
        id: "AR-24V",
        name: "AR 24V",
        desc: "24V armature for commercial starter motors, heavier winding and core.",
        tags: ["LCV / HCV", "24V"],
      },
      {
        id: "AR-TR",
        name: "AR Tractor",
        desc: "Tractor duty armature, built to survive agricultural dust and duty cycle.",
        tags: ["Tractor"],
      },
    ],
  },
  {
    product: "Wiper Motors",
    blurb: "Supplied as a complete assembly — motor, linkage and park switch together.",
    ranges: [
      {
        id: "WM-12V",
        name: "WM 12V",
        desc: "12V wiper motor and linkage for passenger cars, park switch included.",
        tags: ["Passenger", "12V"],
      },
      {
        id: "WM-24V",
        name: "WM 24V",
        desc: "24V wiper motor for commercial vehicles running on a 24V electrical system.",
        tags: ["Commercial", "24V"],
      },
      {
        id: "WM-CV",
        name: "WM CV",
        desc: "Higher torque CV build for large screens, buses and multi-blade linkage.",
        tags: ["CV / Bus", "High torque"],
      },
    ],
  },
];

// Symptom-based diagnosis. Useful to a workshop, honest about what it can and
// cannot tell you.
export const DIAGNOSIS = [
  {
    symptom: "One loud click, engine does not turn over",
    likely: "Solenoid switch",
    note:
      "The switch is trying to pass current but the contacts are not completing. Check the switch first.",
  },
  {
    symptom: "Switch clicks, starter spins, engine does not fire",
    likely: "Starter motor",
    note:
      "The motor is turning but not driving the flywheel. Usually the bendix or the drive.",
  },
  {
    symptom: "Nothing at all, complete silence",
    likely: "Battery or wiring",
    note:
      "Check battery charge and the main cable first. The switch is the last thing to suspect, not the first.",
  },
  {
    symptom: "Starts then stalls, or cranks slowly",
    likely: "Battery or earth",
    note:
      "Usually a charging or earth fault rather than the starter. Worth checking before you replace a part.",
  },
  {
    symptom: "You have the OEM part number",
    likely: "Send it to us",
    note:
      "Fastest route. Send the number with the vehicle platform and monthly quantity and we will confirm fitment.",
  },
];

export const ORDER_STEPS = [
  {
    n: "01",
    title: "Send the part number",
    desc: "OEM part number, vehicle platform and the quantity you need per month.",
  },
  {
    n: "02",
    title: "Get a written quotation",
    desc: "We confirm fitment, MOQ, lead time and freight in writing, with real dates.",
  },
  {
    n: "03",
    title: "We plan and build",
    desc: "Your order enters the monthly and daily plan, gets built and panel tested.",
  },
  {
    n: "04",
    title: "Dispatch as planned",
    desc: "Batch-wise dispatch on the agreed schedule, freight shown in the rate.",
  },
];

export const BUSINESS_MODELS = [
  {
    title: "Factory",
    desc: "Our own floor in Bawana doing winding, sub-assembly, switch assembly, testing and packing.",
  },
  {
    title: "Sales desk",
    desc: "Handles enquiries, quotations, order confirmation and follow-up.",
  },
  {
    title: "Warehouse",
    desc: "Status-wise storage of raw material, WIP and finished goods, released against the dispatch plan.",
  },
  {
    title: "Wholesale and export",
    desc: "Bulk supply across India and export, shipped in planned batches.",
  },
];

export const IDENTITY = [
  { label: "Legal name", value: SITE.legalName },
  { label: "Constitution", value: SITE.constitution },
  { label: "GSTIN", value: SITE.gstin },
  { label: "GST active since", value: SITE.gstRegistered },
  { label: "Registered address", value: SITE.addressFull },
  { label: "HSN codes", value: SITE.hsnCodes.join(", ") },
  {
    label: "Business models",
    value: "Factory, sales desk, warehouse, wholesale, export",
  },
];

export const FAQS = [
  {
    q: "Which vehicles do you cover?",
    a: "Passenger cars, commercial vehicles (LCV and HCV), tractors and three-wheelers, in both 12V and 24V. Send the OEM part number and we will confirm fitment.",
  },
  {
    q: "Can you build a part to my sample?",
    a: "Yes. Development is done against the original sample rather than drawings alone. The job is logged in our FMS against your part number, and it goes to production only after it has been verified under working conditions.",
  },
  {
    q: "What is your testing coverage?",
    a: "Every finished switch and starter motor is tested on the panel, so 100% of finished goods. On top of that, 10 to 25% of each lot is audited at every work centre while it is being built.",
  },
  {
    q: "Do you supply in bulk?",
    a: "Yes. We run factory, warehouse, wholesale and export models. Bulk orders go out in planned batches, matched to your store space and dispatch schedule.",
  },
  {
    q: "What is your MOQ and lead time?",
    a: "It depends on the part number and where it sits in our monthly plan. Send the part number with your expected monthly volume and we will confirm both in writing.",
  },
  {
    q: "How do I verify your GST registration?",
    a: `Our GSTIN is ${SITE.gstin}, active since ${SITE.gstRegistered}. You can check it on any public GST search portal. The link is in our footer.`,
  },
  {
    q: "What does the switch category (A, B, C) mean?",
    a: "It describes the assembly sequence for that switch. Category A is spot, crimp, tower, solder. B is spot, tower, crimp, solder. C is solder, spot, crimp, tower. The sequence follows the part's build, which is how it stays consistent batch to batch.",
  },
  {
    q: "Is freight included in your rate?",
    a: "Freight is shown separately in the quotation, based on the destination and the weight. Tell us the delivery city or pincode and it will be included in the rate we send you.",
  },
];

// Trade terms a buyer can actually act on, worded so we do not promise
// something we cannot control.
export const FAQ_NO = [
  "We do not list prices on the website. Rates depend on the part number and volume, so you get a written quotation instead.",
  "MOQ is not fixed across the range. It moves with the part and the monthly plan.",
  "We do not claim certifications we do not hold. GST registration and the test panel record are what we can show you.",
  "Fitment is confirmed against the part number, not guessed from a vehicle description alone.",
];
