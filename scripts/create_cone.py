import bpy
import mathutils

# Create a new mesh
mesh = bpy.data.meshes.new("ConeMesh")

# Define the vertices and faces of the cone
verts = [(0, 0, 0), (1, 0, 0), (0.5, 1, 0)]
edges = [(0, 1), (1, 2), (0, 2)]
faces = [(0, 1, 2)]

# Create the mesh from the vertices, edges, and faces
mesh.from_pydata(verts, edges, faces)
mesh.update()

# Create a new object and link the mesh to it
obj = bpy.data.objects.new("Cone", mesh)

# Add the object to the active scene
scene = bpy.context.scene
scene.collection.objects.link(obj)

# Set the object's location and rotation
obj.location = (0, 0, 0)
obj.rotation_euler = (0, 0, 0)

# Set the object's scale
obj.scale = (1, 1, 1)

# Select the object
bpy.context.view_layer.objects.active = obj

