import cadquery as cq
from jupyter_cadquery import show

# Create a box
result = cq.Workplane("front").box(2.0, 2.0, 0.5)

# Render the shape
show(result)
