import bpy
import math


# Step 3: Model the Tank

# Create the Base
bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 0))
tank_body = bpy.context.active_object
tank_body.scale = (2, 4, 1.5)

# Add Tracks
bpy.ops.mesh.primitive_cube_add(size=0.5, location=(-2, 0, -0.75))
track_left = bpy.context.active_object
track_left.rotation_euler.z = math.radians(90)
track_left.scale = (4, 0.5, 0.75)

bpy.ops.mesh.primitive_cube_add(size=0.5, location=(2, 0, -0.75))
track_right = bpy.context.active_object
track_right.rotation_euler.z = math.radians(90)
track_right.scale = (4, 0.5, 0.75)

# Create the Turret
bpy.ops.mesh.primitive_cylinder_add(radius=0.75, depth=1, location=(0, 0, 1))
turret = bpy.context.active_object
turret.scale = (1, 1, 0.5)

# Add Details
bpy.ops.mesh.primitive_cube_add(size=0.5, location=(0, 2, 1.25))
gun_barrel = bpy.context.active_object
gun_barrel.rotation_euler.z = math.radians(90)
gun_barrel.scale = (2, 0.5, 0.5)

bpy.ops.mesh.primitive_cube_add(size=0.3, location=(0, 0, 1.75))
hatch = bpy.context.active_object
hatch.scale = (0.5, 0.5, 0.2)

# Apply Materials
tank_body.active_material = bpy.data.materials.new(name="Red")
tank_body.active_material.diffuse_color = (1, 0, 0, 1)
track_left.active_material = tank_body.active_material
track_right.active_material = tank_body.active_material
turret.active_material = tank_body.active_material
gun_barrel.active_material = tank_body.active_material
hatch.active_material = tank_body.active_material

# Step 4: Export the Model as STL

# Prepare the Model
bpy.context.scene.collection.objects.link(tank_body)
bpy.context.scene.collection.objects.link(track_left)
bpy.context.scene.collection.objects.link(track_right)
bpy.context.scene.collection.objects.link(turret)
bpy.context.scene.collection.objects.link(gun_barrel)
bpy.context.scene.collection.objects.link(hatch)

# Export to STL
bpy.ops.export_mesh.stl(filepath="red_tank.stl", use_selection=True)