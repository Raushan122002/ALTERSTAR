/**
 * Photography registry.
 *
 * Every image here is stock photography from Pexels, used under the Pexels
 * licence (free for commercial use, no attribution required — credited anyway).
 * None of it shows ANB Enterprises' own premises, staff or product, so anything
 * that could read as "this is us" is captioned as representative. Replace these
 * files with real photography of the Bawana workshop, the bench and actual
 * starter motors as soon as it is available; the filenames are the only thing
 * the site depends on.
 */

const CREDIT = (by) => (by === "Pexels" ? "Photo: Pexels" : `Photo: ${by} / Pexels`);

/**
 * Public-folder assets must be addressed through BASE_URL. A bare relative path
 * breaks on nested client-side routes (/products would look for /products/img/...).
 * Vite rewrites this to a hashed, correctly based URL at build time.
 */
const asset = (p) => `${import.meta.env.BASE_URL}${p}`.replace(/([^:])\/{2,}/g, "$1/");

export const PHOTOS = {
  heroEngine: {
    src: asset("img/photos/hero-engine.jpg"),
    alt: "Close-up of a polished car engine, showing machined gears and metal surfaces in black and white",
    credit: CREDIT("Mike Bird"),
    width: 1800,
    height: 1013,
  },
  workshopMechanic: {
    src: asset("img/photos/workshop-mechanic.jpg"),
    alt: "Mechanic wearing gloves using a wrench on a car engine inside a workshop",
    credit: CREDIT("Artem Podrez"),
    width: 1600,
    height: 900,
  },
  engineBay: {
    src: asset("img/photos/engine-bay.jpg"),
    alt: "Under the bonnet of a car, showing the belt and pulley layout of the engine",
    credit: CREDIT("Frederick Adegoke Snr."),
    width: 1200,
    height: 900,
  },
  starterMotor: {
    src: asset("img/photos/starter-motor.jpg"),
    alt: "Metal motor unit resting on a workshop workbench among hand tools",
    credit: CREDIT("Andrea Piacquadio"),
    width: 1200,
    height: 800,
  },
  solenoidValve: {
    src: asset("img/photos/solenoid-valve.jpg"),
    alt: "Close-up of machined metal valve bodies showing threaded ports and worn surfaces",
    credit: CREDIT("Mike van Schoonderwalt"),
    width: 1200,
    height: 885,
  },
  spindle: {
    src: asset("img/photos/spindle.jpg"),
    alt: "Industrial steel spindle held in a factory, showing precision ground metal",
    credit: CREDIT("Andre"),
    width: 1200,
    height: 2133,
  },
  gearsDetail: {
    src: asset("img/photos/gears-detail.jpg"),
    alt: "Close-up of meshing gears and a toothed timing belt inside an engine",
    credit: CREDIT("Sylwester Ficek"),
    width: 1200,
    height: 1800,
  },
  metalParts: {
    src: asset("img/photos/metal-parts.jpg"),
    alt: "Assorted machined metal components laid out on a work surface",
    credit: CREDIT("More Amore"),
    width: 1200,
    height: 2133,
  },
  qcMicrometer: {
    src: asset("img/photos/qc-micrometer.jpg"),
    alt: "Digital micrometer measuring the thickness of a metal sheet",
    credit: CREDIT("Pexels"),
    width: 1200,
    height: 1797,
  },
  qcMeasuring: {
    src: asset("img/photos/qc-measuring.jpg"),
    alt: "Technician measuring a metal component with a digital caliper",
    credit: CREDIT("Pexels"),
    width: 1200,
    height: 2133,
  },
  workshopLathe: {
    src: asset("img/photos/workshop-lathe.jpg"),
    alt: "Operator feeding a metal bar into a lathe in a workshop",
    credit: CREDIT("Pexels"),
    width: 1200,
    height: 1872,
  },
  dispatchTruck: {
    src: asset("img/photos/dispatch-truck.jpg"),
    alt: "Delivery truck leaving a warehouse loading dock with pallets stacked alongside",
    credit: CREDIT("Pexels"),
    width: 1400,
    height: 933,
  },
  warehouse: {
    src: asset("img/photos/warehouse.jpg"),
    alt: "Interior of a warehouse with racking, pallets and stacked goods",
    credit: CREDIT("Pexels"),
    width: 1400,
    height: 2100,
  },
  industrialYard: {
    src: asset("img/photos/industrial-yard.jpg"),
    alt: "Exterior of an industrial warehouse with metal beams and pallets stacked outside",
    credit: CREDIT("Pexels"),
    width: 1400,
    height: 935,
  },

  /* Vehicle classes. Indian trade buyers specify by wheel count, so each class
     gets its own frame. Confirm the class matches the photo before publishing. */
  veh4w: {
    src: asset("img/vehicles/veh-4w-car.jpg"),
    alt: "Black sedan driving through a city street in Kerala",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 667,
  },
  veh6w: {
    src: asset("img/vehicles/veh-6w-truck.jpg"),
    alt: "Ashok Leyland goods truck carrying freight on an Indian highway",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 750,
  },
  veh8w: {
    src: asset("img/vehicles/veh-8w-truck.jpg"),
    alt: "Cargo trucks parked on a highway at Deeg, Uttar Pradesh",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 667,
  },
  veh10w: {
    src: asset("img/vehicles/veh-10w-truck.jpg"),
    alt: "Tata truck on an Indian highway near Deeg, Uttar Pradesh",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 667,
  },
  veh12w: {
    src: asset("img/vehicles/veh-12w-trailer.jpg"),
    alt: "White semi-trailer truck travelling on a highway under a cloudy sky",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 1781,
  },
  veh3w: {
    src: asset("img/vehicles/veh-3w-rickshaw.jpg"),
    alt: "Auto rickshaw driving on an urban road under cloud",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 1500,
  },
  vehTractor: {
    src: asset("img/vehicles/veh-tractor.jpg"),
    alt: "Tractor working a field and raising dust",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 667,
  },
  /* Product lines added alongside starters and solenoids. Still stock — swap for
     real shots of finished armatures and wiper motors before publishing. */
  armatureRotor: {
    src: asset("img/products/prod-armature.jpg"),
    alt: "Close-up of a heavy industrial rotor showing machined laminations and windings",
    credit: CREDIT("Pexels"),
    width: 1200,
    height: 800,
  },
  armatureBench: {
    src: asset("img/products/prod-armature-bench.jpg"),
    alt: "Machined motor components and hand tools laid out on a workbench ready for assembly",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 1500,
  },
  wiperAssembly: {
    src: asset("img/products/prod-wiper.jpg"),
    alt: "Car windscreen showing a wiper arm and blade parked at the base of the glass",
    credit: CREDIT("Pexels"),
    width: 1200,
    height: 800,
  },
  wiperSweeping: {
    src: asset("img/products/prod-wiper-rain.jpg"),
    alt: "Wiper blade mid-sweep across a wet windscreen with rain droplets on the glass",
    credit: CREDIT("Pexels"),
    width: 1200,
    height: 800,
  },
  truckDetail: {
    src: asset("img/vehicles/veh-truck-detail.jpg"),
    alt: "Close-up of an Indian truck front showing headlights and worn paint",
    credit: CREDIT("Pexels"),
    width: 1000,
    height: 750,
  },
};

/** Photo for a product, used by ProductVisual and the products page. */
const productPhoto = {
  "starter-motors": PHOTOS.starterMotor,
  "solenoid-switches": PHOTOS.solenoidValve,
  armatures: PHOTOS.armatureRotor,
  wipers: PHOTOS.wiperAssembly,
};

/** Safe lookup so a newly added product degrades instead of throwing. */
export const photoForProduct = (id) =>
  productPhoto[id] || {
    ...PHOTOS.engineBay,
    alt: "Automotive engine components, representative of the work",
  };

export default PHOTOS;
