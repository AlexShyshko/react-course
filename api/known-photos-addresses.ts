const KNOWN_PHOTOS_ADDRESSES = {
  bodyType: {
    Star: {
      soleil: {
        englishName: "Sun",
        url: "https://spaceplace.nasa.gov/all-about-the-sun/en/solar-flare.en.jpg",
      },
    },
    Planet: {
      mercure: {
        englishName: "Mercury",
        url: "https://spaceplace.nasa.gov/all-about-mercury/en/mercury_bright-spots.en.jpg",
      },
      venus: {
        englishName: "Venus",
        url: "https://spaceplace.nasa.gov/all-about-venus/en/Venus_Clouds_br.en.jpg",
      },
      terre: {
        englishName: "Earth",
        url: "https://spaceplace.nasa.gov/all-about-earth/en/earth2.en.jpg",
      },
      mars: {
        englishName: "Mars",
        url: "https://spaceplace.nasa.gov/all-about-mars/en/VallesMarineris.en.jpg",
      },
      jupiter: {
        englishName: "Jupiter",
        url: "https://spaceplace.nasa.gov/all-about-jupiter/en/jupiter_great-red-spot-and-southern-hemisphere.en.jpg",
      },
      saturne: {
        englishName: "Saturn",
        url: "https://spaceplace.nasa.gov/all-about-saturn/en/saturn4.en.jpg",
      },
      uranus: {
        englishName: "Uranus",
        url: "https://spaceplace.nasa.gov/review/all-about-uranus/uranus2.en.jpg",
      },
      neptune: {
        englishName: "Neptune",
        url: "https://spaceplace.nasa.gov/all-about-neptune/en/neptune1.en.jpg",
      },
    },
    Moon: {
      lune: {
        englishName: "Moon",
        url: "https://apod.nasa.gov/apod/image/2202/TerminatorMoon_Shet_960.jpg",
      },
    },
    "Dwarf Planet": {
      pluton: {
        englishName: "Pluto",
        url: "https://spaceplace.nasa.gov/all-about-pluto/en/pluto_new_horizons.en.png",
      },
      haumea: {
        englishName: "136108 Haumea",
        url: "https://apod.nasa.gov/apod/image/1710/HaumeaRings_IAA_960.jpg",
      },
      makemake: {
        englishName: "136472 Makemake",
        url: "https://apod.nasa.gov/apod/image/1604/Makemakemoon100mile.jpg",
      },
      eris: {
        englishName: "136199 Eris",
        url: "https://apod.nasa.gov/apod/image/0706/eris_lombry.jpg",
      },
    },
    Comet: {
      halley: {
        englishName: "Halley's Comet",
        url: "https://science.nasa.gov/wp-content/uploads/2023/07/Giotto_halley_br.jpg",
      },
      hyakutake: {
        englishName: "Comet Hyakutake",
        url: "https://apod.nasa.gov/apod/image/9807/hyakutake_scott.jpg",
      },
      sl9: {
        englishName: "Shoemaker-Levy 9",
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/1994-SL9-CometFragments.jpg",
      },
      "c2020f3-neowise": {
        englishName: "C/2020 F3 (NEOWISE)",
        url: "https://apod.nasa.gov/apod/image/2007/NeowiseStonehenge_Deval_960.jpg",
      },
    },
    Asteroid: {
      quaoar: {
        englishName: "50000 Quaoar",
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/409_PIA21712.jpg",
      },
      pallas: {
        englishName: "2 Pallas",
        url: "https://live.staticflickr.com/7898/47534944992_053af4264e_b.jpg",
      },
      sedna: {
        englishName: "90377 Sedna",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sedna-NASA.JPG/788px-Sedna-NASA.JPG?20051030114457",
      },
      ceres: {
        englishName: "1 Ceres",
        url: "https://science.nasa.gov/wp-content/uploads/2018/10/pia21906-ceres-full-globe-1280x900-1.jpg?w=2048&format=webp",
      },
      orcus: {
        englishName: "90482 Orcus",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Orcus_nasa.jpg",
      },
      ixion: {
        englishName: "28978 Ixion",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ixion_planetoid_nasa.jpg/603px-Ixion_planetoid_nasa.jpg?20150710164629",
      },
      varuna: {
        englishName: "20000 Varuna",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/91/20000-varuna_hst.jpg",
      },
      vesta: {
        englishName: "4 Vesta",
        url: "https://www.nasa.gov/wp-content/uploads/2023/03/685735main_pia15678-43_full.jpg",
      },
      benou: {
        englishName: "101955 Bennu",
        url: "https://www.nasa.gov/wp-content/uploads/2020/10/bennu-twelve-image-mosaic.png",
      },
      chariklo: {
        englishName: "10199 Chariklo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/10199_Chariklo.jpg/290px-10199_Chariklo.jpg",
      },
      hygie: {
        englishName: "10 Hygiea",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/10_Hygiea_2MASS.jpg?20150508113658",
      },
      lempo: {
        englishName: "47171 Lempo",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/1999TC36-Trujillo-HST.png",
      },
      junon: {
        englishName: "3 Juno",
        url: "https://www.nasa.gov/wp-content/uploads/2024/05/jnce-2024067-59c00127-jnce-2024067-59c00129-v01-reproj-120px-crop-amalthea-annot.png",
      },
      eugenia: {
        englishName: "45 Eugenia",
        url: "https://nssdc.gsfc.nasa.gov/planetary/news/thumbnail/eugenia_19991006_a.gif",
      },
      iris: {
        englishName: "7 Iris",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Iris_asteroid_eso.jpg/290px-Iris_asteroid_eso.jpg",
      },
      pholus: {
        englishName: "5145 Pholus",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/5145_Pholus.tiff/lossless-page1-341px-5145_Pholus.tiff.png",
      },
      hebe: {
        englishName: "6 Hebe",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/6hebe.png/290px-6hebe.png",
      },
      chiron: {
        englishName: "2060 Chiron",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/2060_Chiron_Hubble.jpg",
      },
      pulcova: {
        englishName: "762 Pulcova",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/762_Pulcova_Hubble.jpg/600px-762_Pulcova_Hubble.jpg",
      },
      hylonome: {
        englishName: "10370 Hylonome",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/10370_Hylonome_Hubble.jpg",
      },
      achille: {
        englishName: "588 Achilles",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Modelled_shape_of_588_Achilles_from_its_light_curve.png",
      },
      flore: {
        englishName: "8 Flora",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/8_Flora_VLT_%282021%29%2C_deconvolved.pdf/page1-274px-8_Flora_VLT_%282021%29%2C_deconvolved.pdf.jpg",
      },
      albion: {
        englishName: "15760 Albion",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/1992_QB1_crop.jpg/290px-1992_QB1_crop.jpg",
      },
      astree: {
        englishName: "5 Astraea",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/09/000005-asteroid_shape_model_%285%29_Astraea.png?20200604105714",
      },
      "2006sq372": {
        englishName: "(308933) 2006 SQ372",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/308933-2006sq372_hst.jpg",
      },
      lutetia: {
        englishName: "21 Lutetia",
        url: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/07/lutetia_and_saturn/9684262-3-eng-GB/Lutetia_and_Saturn_pillars.jpg",
      },
      asbolus: {
        englishName: "8405 Asbolus",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/8405_Asbolus_orbit.png?20140802182952",
      },
      damocles: {
        englishName: "5335 Damocles",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Orbit_of_%285335%29_Damocles.gif?20120728083636",
      },
      cruithne: {
        englishName: "3753 Cruithne",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cruithne.jpg/290px-Cruithne.jpg",
      },
      eureka: {
        englishName: "5261 Eureka",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/%D0%9E%D1%80%D0%B1%D0%B8%D1%82%D0%B0_%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%BE%D0%B8%D0%B4%D0%B0_5261.png",
      },
      toutatis: {
        englishName: "4179 Toutatis",
        url: "https://echo.jpl.nasa.gov/asteroids/4179_Toutatis/t602001_blur5_tiny.jpg",
      },
      steins: {
        englishName: "2867 Šteins",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/2867_Steins.jpg/290px-2867_Steins.jpg",
      },
      castalia: {
        englishName: "4769 Castalia",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Orbit_4769_Castalia.png",
      },
      hector: {
        englishName: "624 Hektor",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Hektor_%26_Skamandrios_2006_Jul_16.PNG",
      },
      kleopatra: {
        englishName: "216 Kleopatra",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/216_Kleopatra_VLT_%282021%29%2C_deconvolved.pdf/page1-274px-216_Kleopatra_VLT_%282021%29%2C_deconvolved.pdf.jpg",
      },
      mathilde: {
        englishName: "253 Mathilde",
        url: "https://science.nasa.gov/wp-content/uploads/2023/07/Mathilde1_main.jpg?w=2048&format=webp",
      },
      eros: {
        englishName: "433 Eros",
        url: "https://photojournal.jpl.nasa.gov/browse/PIA03137.jpg",
      },
      sylvia: {
        englishName: "87 Sylvia",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/87_Sylvia_VLT_%282021%29%2C_deconvolved.pdf/page1-202px-87_Sylvia_VLT_%282021%29%2C_deconvolved.pdf.jpg",
      },
      "9metis": {
        englishName: "9 Metis",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/9_Metis_VLT_%282021%29%2C_deconvolved.pdf/page1-102px-9_Metis_VLT_%282021%29%2C_deconvolved.pdf.jpg",
      },
      nessus: {
        englishName: "7066 Nessus",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/7066_Nessus_Hubble.jpg",
      },
      itokawa: {
        englishName: "25143 Itokawa",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Itokawa06_hayabusa.jpg/290px-Itokawa06_hayabusa.jpg",
      },
      ida: {
        englishName: "243 Ida",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/79/243_Ida_-_August_1993_%2816366655925%29.jpg",
      },
      gaspra: {
        englishName: "951 Gaspra",
        url: "https://nssdc.gsfc.nasa.gov/imgcat/hires/gal_p40449.gif",
      },
      arrokoth: {
        englishName: "Arrokoth",
        url: "https://www.nasa.gov/wp-content/uploads/2019/11/mu69-named-arrokoth.png?w=2048",
      },
    },
  },
};

export default KNOWN_PHOTOS_ADDRESSES;
