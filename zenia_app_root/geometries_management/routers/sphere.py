from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.sphere import SphereViewset
router=routers.SimpleRouter()
router.register(r'basicshapes/sphere',SphereViewset,basename='sphere')


urlpatterns=[
    *router.urls
]