from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.rectangle import RectangleViewset
router=routers.SimpleRouter()
router.register(r'rectangle',RectangleViewset,basename='rectangle')


urlpatterns=[
    *router.urls
]