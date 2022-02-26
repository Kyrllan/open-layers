<template>
  <div id="filter">
    <v-card width="500">
      <v-card-title id="card-title">Filtros</v-card-title>
      <v-card-text class="d-flex justify-center align-center">
        <v-container fluid>
          <v-row class="d-flex justify-center">
            <v-col cols="12">
              <v-select
                v-model="stations_types_selected"
                :items="station_type_list"
                class="pt-10"
                return-object
                item-text="name"
                label="Tipo de Estação"
                multiple
                outlined
                chips
                deletable-chips
                clearable
                persistent-hint
                :hint="`${stations_types_selected.length} Tipos Selecionados`"
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="change">
                    <v-list-item-action>
                      <v-icon
                        :color="someTypes || allTypes ? 'red' : '#757575'"
                        >{{ iconTypes }}</v-icon
                      >
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{
                          someTypes || allTypes
                            ? "REMOVER SELEÇÃO"
                            : "SELECIONAR TODOS"
                        }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </template>
              </v-select>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="12">
              <v-select
                v-model="stations_selected"
                :items="stations"
                return-object
                item-key="id"
                item-text="name"
                label="Estações"
                multiple
                outlined
                chips
                clearable
                deletable-chips
                :disabled="!stations_types_selected.length > 0"
                :hide-details="!stations_types_selected.length > 0"
                :persistent-hint="stations_types_selected.length > 0"
                :hint="`${stations_selected.length} Opções Selecionadas`"
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="toggle">
                    <v-list-item-action>
                      <v-icon
                        :color="someStations || allStations ? 'red' : '#757575'"
                        >{{ iconStations }}</v-icon
                      >
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{
                          someStations || allStations
                            ? "Remover Seleção"
                            : "Selecionar Todos"
                        }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </template>
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="secondary" block @click="consulting">
                <v-icon left dark color="terciary"> mdi-magnify</v-icon
                >Consultar</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "filterStations",
  data: () => ({
    station_list: [],
    station_type_list: [],
    stations_types_selected: [],
    stations_selected: [],
    geojson: undefined,
  }),
  async created() {
    await Promise.all([
      this.fetchStation(),
      this.fetchStationType(),
      this.fetchFeatures(),
    ]);
  },
  computed: {
    stations() {
      let aux = [];
      //let aux2 = [];
      if (this.stations_types_selected.length > 0) {
        for (let station in this.stations_types_selected) {
          let filtered = this.station_list.filter((a) => {
            return (
              a.station_type_id === this.stations_types_selected[station].id
            );
          });
          for (let item in filtered) {
            aux.push(filtered[item]);
          }
        }
        /*                for (let station in aux) {
          let filtered = this.stations_selected.filter((a) => {
            return a.id === aux[station].id;
          });
          for (let item in filtered) {
            aux2.push(filtered[item]);
          }
        }
        console.log("AUX2", aux2); */
        return aux;
      } else {
        return [];
      }
    },
    allTypes() {
      return (
        this.stations_types_selected.length === this.station_type_list.length
      );
    },
    someTypes() {
      return (
        this.stations_types_selected.length > 0 &&
        this.stations_types_selected.length < this.station_type_list.length
      );
    },
    emptyTypes() {
      return this.stations_types_selected.length === 0;
    },
    iconTypes() {
      if (this.someTypes) {
        return "mdi-close-box";
      } else if (this.allTypes) {
        return "mdi-close-box";
      } else {
        return "mdi-checkbox-blank-outline";
      }
    },
    allStations() {
      return this.stations_selected.length === this.stations.length;
    },
    someStations() {
      return (
        this.stations_selected.length > 0 &&
        this.stations_selected.length < this.stations.length
      );
    },
    emptyStations() {
      return this.stations_selected.length === 0;
    },
    iconStations() {
      if (this.someStations) {
        return "mdi-close-box";
      } else if (this.allStations) {
        return "mdi-close-box";
      } else {
        return "mdi-checkbox-blank-outline";
      }
    },
  },
  methods: {
    async fetchFeatures() {
      await fetch(
        "https://raw.githubusercontent.com/Kyrllan/geojson/master/station_list.geojson"
      )
        .then((response) => response.json())
        .then((geojson) => {
          this.geojson = geojson;
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        });
    },
    async fetchStation() {
      await fetch(
        "https://raw.githubusercontent.com/Kyrllan/geojson/master/stations.json"
      )
        .then((response) => response.json())
        .then((response) => {
          this.station_list = response.station;
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        });
    },
    async fetchStationType() {
      await fetch(
        "https://raw.githubusercontent.com/Kyrllan/geojson/master/station_type.json"
      )
        .then((response) => response.json())
        .then((response) => {
          this.station_type_list = response.station_type;
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        });
    },
    change() {
      this.$nextTick(() => {
        if (this.allTypes) {
          this.stations_types_selected = [];
        } else if (this.someTypes) {
          this.stations_types_selected = [];
        } else if (this.emptyTypes) {
          this.stations_types_selected = this.station_type_list.slice();
        }
      });
    },
    toggle() {
      this.$nextTick(() => {
        if (this.allStations) {
          this.stations_selected = [];
        } else if (this.someStations) {
          this.stations_selected = [];
        } else if (this.emptyStations) {
          this.stations_selected = this.stations.slice();
        }
      });
    },
    async consulting() {
      await this.fetchFeatures();
      let features = [];
      for (let item in this.geojson.features) {
        for (let station in this.stations_selected) {
          if (
            this.geojson.features[item].properties.id ===
            this.stations_selected[station].id
          ) {
            features.push(this.geojson.features[item]);
          }
        }
      }
      this.geojson.features = features;
      this.$emit("stations", this.geojson);
      this.$emit("types", this.stations_types_selected);
    },
  },
};
</script>

<style>
#filter {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#card-title {
  display: flex;
  justify-content: center;
  color: #ffe589;
  background-color: #424242;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100%;
}
</style>