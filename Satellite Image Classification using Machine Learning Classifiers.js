Map.addLayer(roi)
// Load Landsat 8 TOA images, get the least cloudy 2015 image.
var image = ee.Image(ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
    // Geographically filter.
    .filterBounds(roi)
    // Filter to get only 2015.
    .filterDate('2017-01-01', '2020-12-31')
    // Sort by cloud cover metadata (ascending).
    .sort('CLOUD_COVER')
    // Get the least cloudy image.
    .first());
var  image = image.clip(roi)
// Display the input imagery.
Map.centerObject(roi, 11);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'Landsat image');

// Merge the hand-drawn features into a single FeatureCollection.
var newfc = bare.merge(forest).merge(water).merge(houses).merge(agriculture); 

// Use these bands in the prediction.
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];

// Make training data by 'overlaying' the points on the image.
var training = image.select(bands).sampleRegions({
  collection: newfc, 
  properties: ['landcover'], 
  scale: 10
});

// Get a CART classifier and train it.
var classifier = ee.Classifier.libsvm().train({
  features: training, 
  classProperty: 'landcover', 
  inputProperties: bands
});

// Classify the image.
var classified = image.select(bands).classify(classifier);

// Display the classification results.
Map.addLayer(classified, {min: 0, max: 4, palette: ['cyan', '006400', 'blue', 'red','7CFC00']}, 'classification');





// Create a custom legend
var legend = ui.Panel({
  style: {
    position: 'bottom-right',
    padding: '8px 15px'
  }
});

// Create legend title
var legendTitle = ui.Label({
  value: 'Legend',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
  }
});
legend.add(legendTitle);

// Define colors and labels for each category
var categories = [
  { color: 'FF0000', label: 'Settlement' },
  { color: '00FF00', label: 'Agricultural land' },
  { color: '0000FF', label: 'water' },
  { color: '00FFFF', label: 'Sand' }
];

// Add color and label pairs to the legend
for (var i = 0; i < categories.length; i++) {
  var colorBox = ui.Label({
    style: {
      backgroundColor: '#' + categories[i].color,
      padding: '6px',
      margin: '0 0 4px 0'
    }
  });

  var label = ui.Label({
    value: categories[i].label,
    style: {
      margin: '0 0 4px 6px'
    }
  });

  legend.add(colorBox);
  legend.add(label);
}

// Add legend to the map
Map.add(legend);
