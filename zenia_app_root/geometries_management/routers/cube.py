from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.cube import CubeViewset
router=routers.SimpleRouter()
router.register(r'basicshapes/cube',CubeViewset,basename='cube')


urlpatterns=[
    *router.urls
]