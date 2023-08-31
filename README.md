Satellite Image Classification using Machine Learning Classifiers 
Performing supervised classification on Landsat 8 satellite images using machine learning classifiers can be a powerful way to categorize different land cover types. Here's a general outline of the process:

**1. Data Acquisition and Preprocessing:**
- Obtain Landsat 8 satellite images from a reliable source such as USGS Earth Explorer.
- Download bands that are relevant to your study (typically bands 1-7 are used for land cover classification).
- Preprocess the images by removing atmospheric effects, correcting for sensor differences, and calibrating the pixel values.

**2. Data Labeling:**
- Create training data by selecting sample pixels from your satellite images and assigning them to specific land cover classes.
- Use high-resolution imagery, ground truth data, or existing land cover maps to label these samples accurately.

**3. Feature Extraction:**
- Extract spectral, textural, and contextual features from the labeled pixels. Common indices like NDVI (Normalized Difference Vegetation Index) can also be computed.
- Features could include mean, standard deviation, texture measures (e.g., GLCM), and more.

**4. Classifier Selection:**
- Choose machine learning classifiers suitable for remote sensing applications. Common choices include Random Forest, Support Vector Machines (SVM), Decision Trees, and Neural Networks.
- The selection of the classifier depends on factors such as the complexity of the classification task, the size of the dataset, and the available computational resources.

**5. Training the Classifier:**
- Split your labeled dataset into training and validation subsets.
- Train the selected classifier using the extracted features from the training dataset.
- Adjust hyperparameters to optimize the classifier's performance. Cross-validation can help in this process.

**6. Classification:**
- Apply the trained classifier to the entire Landsat image.
- Classify each pixel into one of the predefined land cover classes.

**7. Post-processing:**
- Perform post-processing to reduce noise and smooth the classified map. Techniques like majority filtering or spatial smoothing can be applied.

**8. Accuracy Assessment:**
- Use ground truth data or validation points to assess the accuracy of the classified map.
- Metrics like overall accuracy, user's accuracy, producer's accuracy, and kappa coefficient can be calculated.

**9. Refinement and Iteration:**
- Based on accuracy assessment results, refine your classifier or preprocessing steps if needed.
- You might need to adjust class definitions, re-label training data, or fine-tune the classifier.

**10. Map Visualization:**
- Visualize the final classified map using a GIS software or other tools.
- Consider incorporating additional information such as roads, rivers, and urban areas to enhance the map's interpretability.

Remember that the success of your supervised classification project depends on factors such as the quality of training data, feature selection, classifier choice, and accuracy assessment. Remote sensing is a complex field, so be prepared for some trial and error as you work through the various steps.
step 1
![image](https://github.com/nitesh4004/Satellite_Image_Classification_using_Machine_Learning_Classifiers/assets/111670351/38ca0e84-76cd-4511-beff-8025f1a507f4)
step 2
![image](https://github.com/nitesh4004/Satellite_Image_Classification_using_Machine_Learning_Classifiers/assets/111670351/18d7dc17-2281-4a80-90b0-c8aa25259feb)
step 3
![image](https://github.com/nitesh4004/Satellite_Image_Classification_using_Machine_Learning_Classifiers/assets/111670351/fc7591d1-6365-43ee-9254-2d05eab8feeb)
