require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
       
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "d725db775c64462aabe6f020b0290e73"
          }
        });

    
        const view = new MapView({
          map: webmap,
          container: "viewDiv",
          zoom: 10,
          center: [-90.1994, 38.6270]
        });
      });
