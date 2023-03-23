var APP_DATA = {
  "scenes": [
    {
      "id": "0-faade-avant",
      "name": "Façade Avant",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5318800993415687
      },
      "linkHotspots": [
        {
          "yaw": -0.6308191941445092,
          "pitch": -0.3338410633027582,
          "rotation": 1.5707963267948966,
          "target": "4-appartement---salon"
        },
        {
          "yaw": 0.1278845111999889,
          "pitch": 0.4261991138584822,
          "rotation": 0,
          "target": "5-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-faade-derrier",
      "name": "Façade Derrier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5341431309070117,
          "pitch": -0.30856213095555596,
          "rotation": 4.71238898038469,
          "target": "3-appartement---chambre"
        },
        {
          "yaw": -0.10505250839501734,
          "pitch": 0.4848989182749808,
          "rotation": 0,
          "target": "5-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-appartement---salle-de-bain",
      "name": "Appartement - Salle De Bain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3612317331374735,
          "pitch": 0.2261013739950819,
          "rotation": 4.71238898038469,
          "target": "3-appartement---chambre"
        },
        {
          "yaw": -2.1933800225112545,
          "pitch": 0.19471555455463374,
          "rotation": 1.5707963267948966,
          "target": "4-appartement---salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-appartement---chambre",
      "name": "Appartement - Chambre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1736293576432235,
          "pitch": 0.1726300320868841,
          "rotation": 0,
          "target": "4-appartement---salon"
        },
        {
          "yaw": -2.0218782577676855,
          "pitch": 0.19267617392764436,
          "rotation": 1.5707963267948966,
          "target": "2-appartement---salle-de-bain"
        },
        {
          "yaw": 1.1440338812124118,
          "pitch": 0.20382163060060066,
          "rotation": 0,
          "target": "1-faade-derrier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-appartement---salon",
      "name": "Appartement - Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18060323674290757,
          "pitch": 0.17772710877105524,
          "rotation": 0,
          "target": "3-appartement---chambre"
        },
        {
          "yaw": 0.11775178819023857,
          "pitch": 0.02808562071337306,
          "rotation": 4.71238898038469,
          "target": "2-appartement---salle-de-bain"
        },
        {
          "yaw": -2.799193890522929,
          "pitch": 0.15548492956815174,
          "rotation": 0,
          "target": "0-faade-avant"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4461700681550571,
          "pitch": 0.02087667033366536,
          "rotation": 0,
          "target": "4-appartement---salon"
        },
        {
          "yaw": -1.9603564514255876,
          "pitch": 0.041083804244880895,
          "rotation": 4.71238898038469,
          "target": "0-faade-avant"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Projet ZAMAT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
