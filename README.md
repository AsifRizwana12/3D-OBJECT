# 3D-OBJECT
3D OBJECT

A web page with 3D object. The object is rotatable in 3D direction.

# GETTING STARTED

To make the 3D object you'll need to include the three.js library,
Additionally, any CSS transforms applied to the element will be passed on to the 3D model, allowing complex objects to be placed and maniplulated using just CSS.



# POSITIONING MODELS

Models can be positioned and rotated using CSS transforms. Any transforms applied to a model element will also be applied to the model.

# HOW IT WORKS

The model-element script creates a camera, scene, light source and a WebGL renderer. The DOM node returned by the renderer (a element) is added to the document and configured to fill the viewport and sit above all other content. Additionally, pointer-events: none is set, allowing elements below to be interacted with.
Adding elements to the DOM results in the model being loaded and added to the underlying scene. Removing an element from the DOM will remove it from the scene.
The scene is re-rendered every frame. For each object in the scene, the renderer finds it's host node and walks up the DOM tree resolving any transforms, positions and scroll offsets. The resulting transform matrix is then applied to the object in the scene. Once all objects are updated the renderer repaints the scene to the layer. Objects now appear on-screen, synchronised with their host DOM node.

# REQUIREMENTS

components required to create 3D model or object in THREE>JS
1.scene
2.camera
3.Renderer(scene,camera)
