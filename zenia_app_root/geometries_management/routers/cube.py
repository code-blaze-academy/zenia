from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.cube import CubeViewset
router=routers.SimpleRouter()
router.register(r'cube',CubeViewset,basename='sphere')


urlpatterns=[
    *router.urls
]