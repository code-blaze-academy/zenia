from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.cone import  ConeViewset
router=routers.SimpleRouter()
router.register(r'cone',ConeViewset,basename='cone')


urlpatterns=[
    *router.urls
]