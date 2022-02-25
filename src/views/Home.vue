<template>
  <v-main style="border: 1px solid red; height: 100%">
    <v-row class="pa-0 ma-0" style="height: 100%">
      <v-col class="pa-0 ma-0" cols="8" style="border: 1px solid green">
        <div id="map-root"></div>
      </v-col>
      <v-col cols="4" style="border: 1px solid pink"> </v-col>
    </v-row>
  </v-main>
</template>


<script>
/* eslint-disable */
// import openlayer css for style
import "ol/ol.css";
// This is library of openlayer for handle map
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls, ScaleLine } from "ol/control";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
export default {
  name: "openLayers",
  async mounted() {
    await this.initiateMap();
  },
  methods: {
    initiateMap() {
      // create vector layer
      var source = new VectorSource();
      var vector = new VectorLayer({
        source: source,
      });
      // create title layer
      var raster = new TileLayer({
        source: new OSM(),
      });
      // create map with 2 layer
      var map = new Map({
        controls: defaultControls().extend([
          new ScaleLine({
            units: "degrees",
          }),
        ]),
        target: "map-root",
        layers: [raster, vector],
        view: new View({
          center: [-28.445, -52.2098],
          zoom: 11,
          minZoom: 9,
          maxZoom: 13,
        }),
      });
    },
  },
};
</script>
<style>
#map-root {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>