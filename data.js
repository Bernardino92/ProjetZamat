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
          "target": "1-salon"
        },
        {
          "yaw": 0.12788410075394374,
          "pitch": 0.4325246940779639,
          "rotation": 0,
          "target": "4-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "Salon",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.05558689878761136,
        "pitch": -0.01023984023624358,
        "fov": 1.5318800993415687
      },
      "linkHotspots": [
        {
          "yaw": 0.07226719253980463,
          "pitch": 0.01789412698462911,
          "rotation": 4.71238898038469,
          "target": "3-salle-de-bain"
        },
        {
          "yaw": 0.17388843313741376,
          "pitch": 0.1708287058711182,
          "rotation": 0,
          "target": "2-chambre"
        },
        {
          "yaw": -2.7989711427221753,
          "pitch": 0.14192243091712875,
          "rotation": 0,
          "target": "0-faade-avant"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-chambre",
      "name": "Chambre",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5318800993415687
      },
      "linkHotspots": [
        {
          "yaw": -2.1629850655826246,
          "pitch": 0.15643085284192537,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": -2.0258679696182575,
          "pitch": 0.17788284589516934,
          "rotation": 1.5707963267948966,
          "target": "3-salle-de-bain"
        },
        {
          "yaw": 1.1459649446804185,
          "pitch": 0.11858724172162027,
          "rotation": 0,
          "target": "5-faade-derrier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salle-de-bain",
      "name": "Salle De Bain",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.071950949715042,
          "pitch": 0.07861267624546997,
          "rotation": 7.853981633974483,
          "target": "1-salon"
        },
        {
          "yaw": 2.347889908997061,
          "pitch": 0.04316314932021825,
          "rotation": 4.71238898038469,
          "target": "2-chambre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-garage",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.38374366416717365,
          "pitch": 0.028608292918884004,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": -1.9363189010425153,
          "pitch": 0.013458224380940464,
          "rotation": 4.71238898038469,
          "target": "0-faade-avant"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-faade-derrier",
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
          "target": "2-chambre"
        },
        {
          "yaw": -0.10505230207259508,
          "pitch": 0.48489855606763754,
          "rotation": 0,
          "target": "4-garage"
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
