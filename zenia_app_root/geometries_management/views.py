# from django.shortcuts import render

# # Create your views here.
# import bpy
# import mathutils

# import bpy
# import os
# from django.conf import settings
# from rest_framework.views import APIView
# from rest_framework.response import Response

# from django.shortcuts import render
# import bpy
# import mathutils
# import math
# class ConeView(APIView):
#     def get(self, request):
#         # Create a new mesh
#         mesh = bpy.data.meshes.new("ConeMesh")

#         # Define the vertices and faces of the cone
#         verts = []
#         for i in range(36):
#             angle = i * math.pi / 18
#             x = math.cos(angle)
#             y = math.sin(angle)
#             z = 0
#             verts.append((x, y, z))

#         edges = []
#         for i in range(36):
#             edges.append((i, (i + 1) % 36))

#         faces = []
#         for i in range(36):
#             faces.append((i, (i + 1) % 36, (i + 2) % 36))

#         # Create the mesh from the vertices, edges, and faces
#         mesh.from_pydata(verts, edges, faces)
#         mesh.update()

#         # Create a new object and link the mesh to it
#         obj = bpy.data.objects.new("cone", mesh)

#         # Add the object to the active scene
#         scene = bpy.context.scene
#         scene.collection.objects.link(obj)

#         # Set the object's location and rotation
#         obj.location = (0, 0, 0)
#         obj.rotation_euler = (0, 0, 0)

#         # Set the object's scale
#         obj.scale = (1, 1, 1)

#         # Select the object
#         bpy.context.view_layer.objects.active = obj

#         # Set the output path for the rendered image
#         output_path = os.path.join(settings.MEDIA_ROOT, 'cone.png')

#         # Render the scene and save the image
#         bpy.context.scene.render.filepath = output_path
#         bpy.ops.render.render(write_still=True)

#         # Return the rendered image as a response
#         return Response({'message':'Object Successfully created','image_url': f'{request.scheme}://{request.get_host()}{settings.MEDIA_URL}cone.png'})

# class CubeView(APIView):
#     def get(self, request):
#         # Create a new mesh
#         mesh = bpy.data.meshes.new("CubeMesh")

#         # Define the vertices and faces of the cone
#         verts = [(0, 0, 0), (1, 0, 0), (0.5, 1, 0)]
#         edges = [(0, 1), (1, 2), (0, 2)]
#         faces = [(0, 1, 2)]

#         # Create the mesh from the vertices, edges, and faces
#         mesh.from_pydata(verts, edges, faces)
#         mesh.update()

#         # Create a new object and link the mesh to it
#         obj = bpy.data.objects.new("cube", mesh)

#         # Add the object to the active scene
#         scene = bpy.context.scene
#         scene.collection.objects.link(obj)

#         # Set the object's location and rotation
#         obj.location = (0, 0, 0)
#         obj.rotation_euler = (0, 0, 0)

#         # Set the object's scale
#         obj.scale = (1, 1, 1)

#         # Select the object
#         bpy.context.view_layer.objects.active = obj

#         # Set the output path for the rendered image
#         output_path = os.path.join(settings.MEDIA_ROOT, 'cube.png')

#         # Render the scene and save the image
#         bpy.context.scene.render.filepath = output_path
#         bpy.ops.render.render(write_still=True)

#         # Return the rendered image as a response
#         return Response({'message':'Object Successfully created','image_url': f'{request.scheme}://{request.get_host()}{settings.MEDIA_URL}cube.png'})
    

# from django.shortcuts import render
# from django.http import HttpResponse
# import numpy as np
# import matplotlib.pyplot as plt
# from mpl_toolkits.mplot3d import Axes3D
# from mpl_toolkits.mplot3d.art3d import Poly3DCollection

# def create_3d_shape(request):
#     # Create a new 3D shape
#     fig = plt.figure()
#     ax = fig.add_subplot(111, projection='3d')

#     # Define the vertices and faces of the shape
#     vertices = np.array([[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]])
#     faces = np.array([[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 5], [0, 5, 6], [0, 6, 7], [1, 2, 3], [1, 3, 4], [1, 4, 5], [1, 5, 6], [1, 6, 7], [2, 3, 4], [2, 4, 5], [2, 5, 6], [2, 6, 7], [3, 4, 5], [3, 5, 6], [3, 6, 7], [4, 5, 6], [4, 6, 7], [5, 6, 7]])

#     # Create a Poly3DCollection object
#     collection = Poly3DCollection(vertices[faces])

#     # Add the collection to the axes
#     ax.add_collection3d(collection)

#     # Set the limits of the axes
#     ax.set_xlim(-1, 2)
#     ax.set_ylim(-1, 2)
#     ax.set_zlim(-1, 2)

#     # Show the plot
#     plt.show()

#     # Return the plot as a response
#     return HttpResponse(content_type='image/png')