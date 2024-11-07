/* global am4core */
/* global am4maps */
/* global am4geodata_worldIndiaLow */
/* Imports */

import React, { Component } from "react";
import "./map.css";
import ImageNew  from "../../../assets/images/location2.png"
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";



class Map extends Component {

  componentDidMount() {


    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.homeZoomLevel = 0.9;
    // Modify the homeGeoPoint to center the map
    chart.homeGeoPoint = {
      latitude: 27, // Adjust as needed
      longitude: 0, // Adjust as needed
    };

    if (chart.logo) {
      chart.logo.disabled = true;
    }

    // Set max and min zoom levels to prevent zooming
    chart.maxZoomLevel = 0.9;
    chart.minZoomLevel = 0.9;
    // Set map definition
    chart.geodata = am4geodata_worldIndiaLow;
    // Disable map dragging
    chart.panBehavior = "none"; // none will disable the pan behavior


    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
 
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Set map definition

    // Exclude Antarctica
    polygonSeries.exclude = ["AQ"];



// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Remove Antarctica
// Create image







// Create image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create image
var imageSeriesTemplate = imageSeries.mapImages.template;
var marker = imageSeriesTemplate.createChild(am4core.Image);
marker.href = "https://icprd.org.in/locaionicprdpin.png";
marker.width = 20;
marker.height = 20;
marker.nonScaling = true;
marker.tooltipText = "{title}";
marker.horizontalCenter = "middle";
marker.verticalCenter = "bottom";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [{
  "latitude": 19.07598,
  "longitude": 72.87766,
  "title": "ICPRD Mumbai"
}, {
  "latitude": 28.61394, 
  "longitude": 77.20902,
  "title": "ICPRD Delhi"
},
{
  "latitude": 46.98,
  "longitude": -123.81,
  "title": "ICPRD Washington"
},{
  "latitude": 40.730610,
  "longitude": -73.935242,
  "title": "ICPRD New York"
},{
  "latitude": 43.0583,
  "longitude": -70.4057,
  "title": "ICPRD New Jersey"
},{
  "latitude": 51.5072,
  "longitude": - 0.1276,
  "title": "ICPRD London"
},{
  "latitude": 36.2048,
  "longitude": 138.2529,
  "title": "ICPRD Japan"
},{
  "latitude": 1.3521,
  "longitude": 103.8198,
  "title": "ICPRD Singapore"
},{
  "latitude": 25.2048,
  "longitude": 55.2708,
  "title": "ICPRD Abu Dhabi"
},{
  "latitude": -26.195246,
  "longitude": 28.034088,
  "title": "ICPRD Johannesburg"
}];





// Add some data
polygonSeries.data = [{
  "id": "IN",
  "name": "India",
  "value": 50,
  "fill": am4core.color("#ffcd53")
}];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";

// Create image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 6;
circle.fill = am4core.color("#03bdbe");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 1;
circle.nonScaling = true;
circle.tooltipText = "{title}";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [];







    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {imageURL}";
    polygonTemplate.fill = am4core.color("#ebaa01");
polygonTemplate.propertyFields.fill = "fill";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;


    // Create a hover state and set an alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#ffcd53");

    chart.mouseWheelBehavior = "none";
    chart.homeZoomLevel = 8;
    chart.homeGeoPoint = {
      latitude: 29,
      longitude: -11,
    };

    //     // Add hit events
    // polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
    //   alert("Clicked on " + ev.target.dataItem.dataContext.name);
    // });

    // Create map instance

    // Configure series
  

    polygonTemplate.events.on("over", function (event) {
      event.target.toFront();
      
    });

    // Add hit events
    polygonSeries.mapPolygons.template.events.on("over", function (ev) {
      // Get chart object
      var chart = ev.target.series.chart;
      // var city = ["OFFICE ADDRESS","Delhi", "Mumbai"]
      // Zoom to clicked element

      // Transition to state map of it's U.S.
      if (ev.target.dataItem.dataContext.id === "IN") {
        setTimeout(function () {
          chart.geodata = am4geodata_worldIndiaLow;
          // alert(city);
          // console.log(city)
        });
      }
    });


    // /* United State */
    // var series2 = chart.series.push(new am4maps.MapPolygonSeries());
    // series2.name = "United State";
    // series2.useGeodata = true;
    // series2.STATENAME = "1. Washington";
    // series2.STATENAME2 = "2. New York";
    // series2.STATENAME3 = "3. New Jersey";
    // series2.party = "Office Location";
    // series2.include = ["US"];
    // series2.mapPolygons.template.tooltipText = "{name}";
    // series2.mapPolygons.template.fill = am4core.color("#ffcd53");
    // series2.fill = am4core.color("#000");
    // series2.fill = am4core.color("#000");
    // series2.mapPolygons.template.tooltipText =
    //   "[bold]{name}   ({party})[/]\n{STATENAME}[/]\n{STATENAME2}\n{STATENAME3}";

   
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          id="chartdiv"
          style={{ width: "100%", height: "80vh", minWidth: "1000px" }}
        ></div>
      </div>
    );
  }
}

export default Map;
